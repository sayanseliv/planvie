import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import Accordion from '../components/Accordion';

interface Company {
  readonly name: string;
  readonly catchPhrase: string;
  readonly bs: string;
}

interface Author {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly website: string;
  readonly company: Company;
}

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

type NetworkError = {
  type: 'network';
  message: string;
  status: number;
};

type GenericError = {
  type: 'generic';
  message: string;
};

type AppError = NetworkError | GenericError;

const createNetworkError = (message: string, status: number): NetworkError => ({
  type: 'network',
  message,
  status,
});

const createGenericError = (message: string): GenericError => ({
  type: 'generic',
  message,
});

const API_URL = 'https://jsonplaceholder.typicode.com/users' as const;

const cleanedPhone = (phone: string) => phone.replace(/\s*x.*$/, '');

// const strings = ['racecar', 'hello'];
// const isPalindrome = (str: string) => {
//   const cleanString = str.toLowerCase().replace(/\s+/g, '');
//   return cleanString === cleanString.split('').reverse().join('');
// };
// strings.forEach(str => {
//   console.log('isPalindrome', isPalindrome(str));
// });

// const strings = ['abcdef', 'aabbcc'];
// const hasUniqueChars = (str: string) => {
//   const charSet = new Set(str);
//   return charSet.size === str.length;
// };
// strings.forEach(str => {
//   console.log('hasUniqueChars', hasUniqueChars(str));
// });

// const twoSum = (arr: number[], equalSum: number) => {
//   const cleanArray = arr.filter(num => num <= equalSum);

//   for (let i = 0; i < cleanArray.length; i++) {
//     for (let j = i + 1; j < cleanArray.length; j++) {
//       if (cleanArray[i] + cleanArray[j] === equalSum) {
//         return [cleanArray[i], cleanArray[j]];
//       }
//     }
//   }
//   return null;
// };
// const resTwoSum = twoSum([2, 7, 11, 15, 8, 4], 9);

// console.log('resTwoSum', resTwoSum);

const ScreenTest: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [error, setError] = useState<AppError | null>(null);

  const fetchAuthors = useCallback(async (): Promise<void> => {
    try {
      setLoadingState('loading');
      setError(null);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw createNetworkError(
          `Failed to fetch authors: ${response.statusText}`,
          response.status,
        );
      }

      const data: Author[] = await response.json();

      const dataCleanedPhone: Author[] = data.map(item => {
        return {
          ...item,
          phone: cleanedPhone(item.phone),
        };
      });

      if (!Array.isArray(dataCleanedPhone)) {
        throw createGenericError('Invalid response format: expected array');
      }

      setAuthors(dataCleanedPhone);
      setLoadingState('success');
    } catch (err) {
      const appError: AppError =
        err && typeof err === 'object' && 'type' in err
          ? (err as AppError)
          : createGenericError(
              err instanceof Error ? err.message : 'Unknown error occurred',
            );

      setError(appError);
      setLoadingState('error');
    }
  }, []);

  useEffect(() => {
    fetchAuthors();
  }, [fetchAuthors]);
  const renderAuthors: ListRenderItem<Author> = useCallback(
    ({ item }) => (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.username} numberOfLines={4}>
            {item.username}
          </Text>
        </View>
        <View style={styles.body}>
          <Text>Contact info:</Text>
          <Text style={styles.contact}>
            {item.email} - {item.phone}
          </Text>
        </View>

        <Accordion title='Show more'>
          <View style={styles.footer}>
            <Text>Company info:</Text>
            <Text style={styles.footerName}>Name: {item.company.name}</Text>
            <Text style={styles.footerName}>
              Phrases:{' '}
              {item.company.catchPhrase
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(', ')}
            </Text>
            <Text style={styles.footerName}>
              Labels:{' '}
              {item.company.bs
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(', ')}
            </Text>
          </View>
        </Accordion>
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: Author): string => item.id.toString(),
    [],
  );

  if (loadingState === 'loading') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' testID='loading-indicator' />
        <Text style={styles.loadingText}>Loading Authors...</Text>
      </View>
    );
  }

  if (loadingState === 'error' && error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
        {error.type === 'network' && (
          <Text style={styles.errorStatus}>Status: {error.status}</Text>
        )}
      </View>
    );
  }

  return (
    <FlatList
      data={authors}
      keyExtractor={keyExtractor}
      renderItem={renderAuthors}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      testID='authors-list'
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#1a202c',
  },
  username: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4a5568',
  },
  body: {
    rowGap: 8,
    marginBottom: 6,
  },
  contact: {
    color: '#110d17ff',
    fontWeight: '600',
  },
  footer: {
    rowGap: 5,
  },
  footerName: {
    color: '#060d1cff',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: '#6b7280',
  },
  errorText: {
    fontSize: 16,
    color: '#dc2626',
    textAlign: 'center',
    marginBottom: 8,
  },
  errorStatus: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

export default ScreenTest;

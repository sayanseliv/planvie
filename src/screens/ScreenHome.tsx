import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useThemeContext } from '../themes';

const ScreenHome = () => {
  const tasks = [
    {
      id: '1',
      title: 'Сделать бэкап',
      tags: ['t1', 't2'],
      projectId: null,
      createdAt: '2025-07-19',
      estimate: '1h',
    },
    {
      id: '2',
      title: 'Верстка лендинга',
      tags: ['t5', 't6'],
      projectId: 'p1',
      createdAt: '2025-07-18',
      estimate: '2h',
    },
  ];

  const projects = [
    {
      id: 'p1',
      taskIds: ['1', '2'],
      title: 'Сайт для клиента',
      description: '',
      createdAt: '2025-07-10',
    },
  ];

  const { theme } = useThemeContext();

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.background },
        ]}>
        <Text style={[styles.greeting, { color: theme.colors.text }]}>
          Привет, Eugen 👋
        </Text>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          🔔 Ближайшие задачи
        </Text>
        {tasks.map(task => (
          <View
            key={task.id}
            style={[
              styles.card,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}>
            <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
              {task.title}
            </Text>
            <Text
              style={[
                styles.cardSubtitle,
                { color: theme.colors.textSecondary },
              ]}>
              {task.estimate}
            </Text>
          </View>
        ))}

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          📁 Последние проекты
        </Text>
        {projects.map(project => (
          <View
            key={project.id}
            style={[
              styles.card,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}>
            <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
              {project.title}
            </Text>
            <Text
              style={[
                styles.cardSubtitle,
                { color: theme.colors.textSecondary },
              ]}>
              {project.taskIds.length} задач
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  btnPrimary: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#48abed',
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  card: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1, // Добавил для лучшего отображения в темной теме
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardSubtitle: {
    fontSize: 14,
  },
  btn: {
    alignSelf: 'flex-start',
  },
});

export default ScreenHome;

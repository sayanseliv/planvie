import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { AnimatedContainer, AnimatedText } from '../components';

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

  return (
    <ScrollView>
      <AnimatedContainer style={styles.container}>
        <AnimatedText style={styles.greeting}>Привет, Eugen 👋</AnimatedText>

        <AnimatedText style={styles.sectionTitle}>
          🔔 Ближайшие задачи
        </AnimatedText>
        {tasks.map(task => (
          <View key={task.id} style={styles.card}>
            <Text style={styles.cardTitle}>{task.title}</Text>
            <Text style={styles.cardSubtitle}>{task.estimate}</Text>
          </View>
        ))}

        <AnimatedText style={styles.sectionTitle}>
          📁 Последние проекты
        </AnimatedText>
        {projects.map(project => (
          <View key={project.id} style={styles.card}>
            <Text style={styles.cardTitle}>{project.title}</Text>
            <Text style={styles.cardSubtitle}>
              {project.taskIds.length} задач
            </Text>
          </View>
        ))}
      </AnimatedContainer>
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
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  btn: {
    alignSelf: 'flex-start',
  },
});

export default ScreenHome;

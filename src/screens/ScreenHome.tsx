import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { AnimatedContainer, AnimatedText } from '../components';

const ScreenHome = () => {
  const upcomingTasks = [
    { id: 1, title: 'Демо клиенту', due: 'Сегодня 16:00' },
    { id: 2, title: 'Исправить баг в логине', due: 'Завтра' },
  ];

  const recentProjects = [
    { id: 'p1', name: 'Redesign Landing', tasksCount: 5 },
    { id: 'p2', name: 'CRM система', tasksCount: 12 },
  ];

  return (
    <ScrollView>
      <AnimatedContainer style={styles.container}>
        <AnimatedText style={styles.greeting}>Привет, Eugen 👋</AnimatedText>

        <AnimatedText style={styles.sectionTitle}>
          🔔 Ближайшие задачи
        </AnimatedText>
        {upcomingTasks.map(task => (
          <View key={task.id} style={styles.card}>
            <Text style={styles.cardTitle}>{task.title}</Text>
            <Text style={styles.cardSubtitle}>{task.due}</Text>
          </View>
        ))}

        <AnimatedText style={styles.sectionTitle}>
          📁 Последние проекты
        </AnimatedText>
        {recentProjects.map(project => (
          <View key={project.id} style={styles.card}>
            <Text style={styles.cardTitle}>{project.name}</Text>
            <Text style={styles.cardSubtitle}>{project.tasksCount} задач</Text>
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

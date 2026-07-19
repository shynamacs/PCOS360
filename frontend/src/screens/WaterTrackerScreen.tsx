import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function WaterTrackerScreen() {
  const [goal] = useState(8);
  const [current, setCurrent] = useState(3);
  const progress = Math.min(100, (current / goal) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Intake Tracker</Text>
      <Text style={styles.subtitle}>Stay hydrated and support hormone balance.</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{current} / {goal} glasses</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCurrent(prev => Math.min(goal, prev + 1))}>
        <Text style={styles.buttonText}>Add a glass</Text>
      </TouchableOpacity>
      <Text style={styles.reminder}>Reminder: drink water consistently throughout the day.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.lightGray
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.oceanBlue,
    marginBottom: spacing.xs
  },
  subtitle: {
    marginBottom: spacing.lg,
    color: colors.darkText
  },
  progressBarBackground: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 18,
    height: 24,
    marginBottom: spacing.sm,
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.mint
  },
  progressText: {
    marginBottom: spacing.lg,
    fontSize: 16,
    color: colors.darkText
  },
  button: {
    backgroundColor: colors.oceanBlue,
    borderRadius: 14,
    padding: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.sm
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700'
  },
  reminder: {
    color: colors.darkText,
    fontStyle: 'italic'
  }
});

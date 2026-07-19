import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

const metrics = [
  { key: 'acne', label: 'Acne' },
  { key: 'facialHair', label: 'Facial Hair' },
  { key: 'hairLoss', label: 'Hair Loss' },
  { key: 'bloating', label: 'Bloating' },
  { key: 'fatigue', label: 'Fatigue' },
  { key: 'pelvicPain', label: 'Pelvic Pain' },
  { key: 'mood', label: 'Mood' },
  { key: 'anxiety', label: 'Anxiety' },
  { key: 'stress', label: 'Stress' }
];

const initialState = metrics.reduce((acc, metric) => ({ ...acc, [metric.key]: 3 }), {} as Record<string, number>);

export default function SymptomTrackerScreen() {
  const [ratings, setRatings] = useState(initialState);

  const handleSetRating = (key: string, value: number) => {
    setRatings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Daily Symptom Tracker</Text>
      <Text style={styles.subtitle}>Rate each symptom from 1 (low) to 5 (high).</Text>
      {metrics.map(metric => (
        <View key={metric.key} style={styles.metricRow}>
          <Text style={styles.metricLabel}>{metric.label}</Text>
          <View style={styles.optionsRow}>
            {[1, 2, 3, 4, 5].map(value => (
              <TouchableOpacity
                key={value}
                onPress={() => handleSetRating(metric.key, value)}
                style={[styles.ratingDot, ratings[metric.key] === value && styles.ratingDotActive]}
              >
                <Text style={styles.ratingText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => null}>
        <Text style={styles.buttonText}>Save Entry</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray
  },
  content: {
    padding: spacing.lg
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.oceanBlue,
    marginBottom: spacing.xs
  },
  subtitle: {
    color: colors.darkText,
    marginBottom: spacing.lg
  },
  metricRow: {
    marginBottom: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md
  },
  metricLabel: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: spacing.sm,
    color: colors.darkText
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ratingDot: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.card
  },
  ratingDotActive: {
    backgroundColor: colors.oceanBlue
  },
  ratingText: {
    color: colors.darkText,
    fontWeight: '700'
  },
  button: {
    marginTop: spacing.lg,
    backgroundColor: colors.mint,
    borderRadius: 14,
    padding: spacing.md,
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700'
  }
});

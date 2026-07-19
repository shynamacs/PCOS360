import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors, spacing } from '../constants/theme';
import StatCard from '../components/StatCard';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Health Summary</Text>
      <View style={styles.row}>
        <StatCard label="Weight" value="70kg" note="Current" />
        <StatCard label="Waist" value="84cm" note="Measurement" />
      </View>
      <View style={styles.row}>
        <StatCard label="BMI" value="24.1" />
        <StatCard label="Days Since Period" value="12" />
      </View>
      <View style={styles.cardLarge}>
        <Text style={styles.sectionTitle}>PCOS Wellness Score</Text>
        <Text style={styles.score}>78 / 100</Text>
        <Text style={styles.sectionNote}>Based on sleep, nutrition, hydration, and symptoms.</Text>
      </View>
      <Text style={styles.heading}>Today's Goals</Text>
      <View style={styles.cardLarge}>
        <Text style={styles.goal}>Water: 8 glasses</Text>
        <Text style={styles.goal}>Exercise: 25 mins</Text>
        <Text style={styles.goal}>Meal plan: Balanced African lunch</Text>
        <Text style={styles.goal}>Symptom check-in</Text>
      </View>
      <Text style={styles.heading}>Quick Actions</Text>
      <View style={styles.actionGrid}>
        {[
          { label: 'Track Symptoms', screen: 'SymptomTracker' },
          { label: 'Weight Log', screen: 'WeightTracker' },
          { label: 'Period Diary', screen: 'PeriodTracker' },
          { label: 'Meal Plan', screen: 'AfricanMealPlanner' },
          { label: 'Water Tracker', screen: 'WaterTracker' },
          { label: 'AI Coach', screen: 'AICoach' }
        ].map(action => (
          <TouchableOpacity key={action.label} style={styles.actionButton} onPress={() => navigation.navigate(action.screen as any)}>
            <Text style={styles.actionText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.oceanBlue,
    marginBottom: spacing.sm
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardLarge: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: spacing.sm
  },
  score: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.mint
  },
  sectionNote: {
    marginTop: spacing.xs,
    color: colors.darkText
  },
  goal: {
    fontSize: 16,
    marginBottom: spacing.xs,
    color: colors.darkText
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  actionButton: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: 'center'
  },
  actionText: {
    color: colors.oceanBlue,
    fontWeight: '700'
  }
});

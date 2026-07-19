import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function PeriodTrackerScreen() {
  const [startDate, setStartDate] = useState('2026-06-01');
  const [endDate, setEndDate] = useState('2026-06-05');
  const [flow, setFlow] = useState('Medium');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Menstrual Cycle Tracker</Text>
      <Text style={styles.subtitle}>Record your current cycle details and view history.</Text>
      <TextInput style={styles.input} value={startDate} onChangeText={setStartDate} placeholder="Start date" />
      <TextInput style={styles.input} value={endDate} onChangeText={setEndDate} placeholder="End date" />
      <TextInput style={styles.input} value={flow} onChangeText={setFlow} placeholder="Flow level" />
      <TouchableOpacity style={styles.button} onPress={() => null}>
        <Text style={styles.buttonText}>Save Cycle</Text>
      </TouchableOpacity>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Cycle prediction</Text>
        <Text style={styles.infoText}>Next period expected in 20 days.</Text>
        <Text style={styles.infoText}>Fertile window estimated from day 12 to day 18.</Text>
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
  input: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    fontSize: 16
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
  },
  infoCard: {
    marginTop: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md
  },
  infoTitle: {
    fontWeight: '700',
    marginBottom: spacing.xs
  },
  infoText: {
    color: colors.darkText,
    marginBottom: spacing.xs
  }
});

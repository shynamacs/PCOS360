import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function WeightTrackerScreen() {
  const [weight, setWeight] = useState('70');
  const [waist, setWaist] = useState('84');
  const [hips, setHips] = useState('98');
  const [height, setHeight] = useState('165');

  const numericWeight = Number(weight);
  const numericHeight = Number(height) / 100;
  const bmi = numericHeight > 0 ? (numericWeight / (numericHeight * numericHeight)).toFixed(1) : '0.0';
  const ratio = numericHeight > 0 ? (Number(waist) / Number(height)).toFixed(2) : '0.00';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight & Waistline</Text>
      <Text style={styles.subtitle}>Track your body measurements and review trends.</Text>
      <TextInput style={styles.input} value={weight} onChangeText={setWeight} keyboardType="numeric" placeholder="Weight (kg)" />
      <TextInput style={styles.input} value={waist} onChangeText={setWaist} keyboardType="numeric" placeholder="Waist circumference (cm)" />
      <TextInput style={styles.input} value={hips} onChangeText={setHips} keyboardType="numeric" placeholder="Hip circumference (cm)" />
      <TextInput style={styles.input} value={height} onChangeText={setHeight} keyboardType="numeric" placeholder="Height (cm)" />
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>BMI</Text>
        <Text style={styles.summaryValue}>{bmi}</Text>
      </View>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Waist-to-height ratio</Text>
        <Text style={styles.summaryValue}>{ratio}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => null}>
        <Text style={styles.buttonText}>Save Measurements</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    fontSize: 16
  },
  summaryCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.sm
  },
  summaryLabel: {
    color: colors.darkText,
    marginBottom: spacing.xs
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.mint
  },
  button: {
    marginTop: spacing.lg,
    backgroundColor: colors.oceanBlue,
    borderRadius: 14,
    padding: spacing.md,
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700'
  }
});

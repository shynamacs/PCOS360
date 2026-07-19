import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors, spacing } from '../constants/theme';
import { RootStackParamList } from '../types';
import { submitOnboarding } from '../api/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation, route }: Props) {
  const [age, setAge] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [waistCm, setWaistCm] = useState('');
  const [diagnosedPCOS, setDiagnosedPCOS] = useState('Yes');
  const [trying, setTrying] = useState('No');
  const [dietStyle, setDietStyle] = useState('African Diet');

  const { email, name } = route.params;

  const handleSubmit = async () => {
    await submitOnboarding({
      name,
      email,
      age: Number(age),
      heightCm: Number(heightCm),
      weightKg: Number(weightKg),
      waistCm: Number(waistCm),
      diagnosedPCOS,
      tryingToConceive: trying,
      dietStyle
    });
    navigation.replace('Dashboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tell us about you</Text>
      <Text style={styles.subtitle}>This helps personalize your PCOS plan.</Text>
      <TextInput placeholder="Age" style={styles.input} value={age} onChangeText={setAge} keyboardType="number-pad" />
      <TextInput placeholder="Height (cm)" style={styles.input} value={heightCm} onChangeText={setHeightCm} keyboardType="number-pad" />
      <TextInput placeholder="Weight (kg)" style={styles.input} value={weightKg} onChangeText={setWeightKg} keyboardType="number-pad" />
      <TextInput placeholder="Waist circumference (cm)" style={styles.input} value={waistCm} onChangeText={setWaistCm} keyboardType="number-pad" />
      <Text style={styles.label}>Diagnosed with PCOS?</Text>
      <View style={styles.toggleRow}>
        {['Yes', 'No'].map(option => (
          <TouchableOpacity
            key={option}
            onPress={() => setDiagnosedPCOS(option)}
            style={[styles.toggle, diagnosedPCOS === option && styles.toggleActive, styles.toggleItem]}
          >
            <Text style={styles.toggleText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Trying to conceive?</Text>
      <View style={styles.toggleRow}>
        {['Yes', 'No'].map(option => (
          <TouchableOpacity
            key={option}
            onPress={() => setTrying(option)}
            style={[styles.toggle, trying === option && styles.toggleActive, styles.toggleItem]}
          >
            <Text style={styles.toggleText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Diet style</Text>
      <TextInput placeholder="Diet style" style={styles.input} value={dietStyle} onChangeText={setDietStyle} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.lightGray,
    flexGrow: 1
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.oceanBlue,
    marginBottom: spacing.sm
  },
  subtitle: {
    color: colors.darkText,
    marginBottom: spacing.lg
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    fontSize: 16
  },
  label: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
    color: colors.darkText,
    fontWeight: '600'
  },
  toggleRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm
  },
  toggleItem: {
    flex: 1,
    marginRight: spacing.sm
  },
  toggle: {
    borderWidth: 1,
    borderColor: colors.oceanBlue,
    borderRadius: 12,
    padding: spacing.sm,
    alignItems: 'center'
  },
  toggleActive: {
    backgroundColor: colors.oceanBlue
  },
  toggleText: {
    color: colors.darkText
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

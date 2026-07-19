import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors, spacing } from '../constants/theme';
import { RootStackParamList } from '../types';
import { login } from '../api/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export default function AuthScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleContinue = async () => {
    await login(email);
    navigation.replace('Onboarding', { email, name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PCOS360</Text>
      <Text style={styles.subtitle}>A wellness companion for PCOS management.</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
    backgroundColor: colors.lightGray
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.oceanBlue,
    marginBottom: spacing.sm
  },
  subtitle: {
    fontSize: 16,
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
  button: {
    marginTop: spacing.md,
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

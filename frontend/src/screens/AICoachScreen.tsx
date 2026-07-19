import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';
import { askCoach } from '../api/api';

export default function AICoachScreen() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('Ask your AI coach about nutrition, symptoms, or cycle support.');

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    const result = await askCoach(prompt);
    setResponse(result.answer || 'Sorry, I could not generate a response.');
    setPrompt('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>AI PCOS Coach</Text>
      <Text style={styles.subtitle}>Personalized guidance for diet, symptoms, and daily wellness.</Text>
      <TextInput
        style={styles.input}
        placeholder="What should I eat today?"
        value={prompt}
        onChangeText={setPrompt}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleAsk}>
        <Text style={styles.buttonText}>Ask Coach</Text>
      </TouchableOpacity>
      <View style={styles.replyCard}>
        <Text style={styles.reply}>{response}</Text>
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
    minHeight: 100,
    marginBottom: spacing.sm,
    fontSize: 16
  },
  button: {
    backgroundColor: colors.oceanBlue,
    borderRadius: 14,
    padding: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.lg
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700'
  },
  replyCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md
  },
  reply: {
    color: colors.darkText,
    fontSize: 16,
    lineHeight: 22
  }
});

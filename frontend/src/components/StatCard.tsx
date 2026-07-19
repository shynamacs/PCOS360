import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

type Props = {
  label: string;
  value: string;
  note?: string;
};

export default function StatCard({ label, value, note }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      {note ? <Text style={styles.note}>{note}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md,
    width: '48%',
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  value: {
    color: colors.oceanBlue,
    fontSize: 24,
    fontWeight: '700'
  },
  label: {
    marginTop: spacing.xs,
    color: colors.darkText,
    fontSize: 14
  },
  note: {
    marginTop: spacing.xs,
    color: colors.mint,
    fontSize: 12
  }
});

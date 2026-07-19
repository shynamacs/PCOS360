import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function AfricanMealPlannerScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>African Meal Planner</Text>
      <Text style={styles.subtitle}>Healthy local menus for PCOS-friendly living.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Breakfast</Text>
        <Text style={styles.cardItem}>Eggs, avocado, and unsweetened tea</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Lunch</Text>
        <Text style={styles.cardItem}>Grilled chicken with sukuma wiki and brown ugali</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dinner</Text>
        <Text style={styles.cardItem}>Baked tilapia with mixed vegetables</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Snacks</Text>
        <Text style={styles.cardItem}>Groundnuts and seasonal fruit</Text>
      </View>
      <Text style={styles.note}>Grocery list and calorie estimate can be added next.</Text>
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
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.sm
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: spacing.xs
  },
  cardItem: {
    color: colors.darkText,
    fontSize: 16
  },
  note: {
    marginTop: spacing.md,
    color: colors.darkText,
    fontStyle: 'italic'
  }
});

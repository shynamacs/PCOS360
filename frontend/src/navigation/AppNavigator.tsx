import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SymptomTrackerScreen from '../screens/SymptomTrackerScreen';
import WeightTrackerScreen from '../screens/WeightTrackerScreen';
import PeriodTrackerScreen from '../screens/PeriodTrackerScreen';
import AfricanMealPlannerScreen from '../screens/AfricanMealPlannerScreen';
import WaterTrackerScreen from '../screens/WaterTrackerScreen';
import AICoachScreen from '../screens/AICoachScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="SymptomTracker" component={SymptomTrackerScreen} />
      <Stack.Screen name="WeightTracker" component={WeightTrackerScreen} />
      <Stack.Screen name="PeriodTracker" component={PeriodTrackerScreen} />
      <Stack.Screen name="AfricanMealPlanner" component={AfricanMealPlannerScreen} />
      <Stack.Screen name="WaterTracker" component={WaterTrackerScreen} />
      <Stack.Screen name="AICoach" component={AICoachScreen} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function RootLayout() {
  return (
    <Stack.Navigator>
      {/* Adjusted screen names to be valid and added necessary options */}
      <Stack.Screen name="Tabs" component={TabsComponent} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundComponent} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreenHub";
import Eggs from "../screens/Eggs";
import PetName from "../screens/PetName";

const Stack = createStackNavigator();

export default function PetRegistrationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="PetName" component={PetName} />
      <Stack.Screen name="Eggs" component={Eggs} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

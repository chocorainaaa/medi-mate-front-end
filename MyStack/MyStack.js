import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreenHub';
import Meditation from '../screens/Meditation';
import MoodLogger from '../screens/MoodLogger';
import QuoteGenerator from '../screens/QuoteGenerator';
import Stats from '../screens/stats';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreenHub" component={HomeScreen} />
            <Stack.Screen name="Meditation" component={Meditation} />
            <Stack.Screen name="MoodLogger" component={MoodLogger} />
            <Stack.Screen name="QuoteGenerator" component={QuoteGenerator} />
            <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>
    );
}

export default MyStack


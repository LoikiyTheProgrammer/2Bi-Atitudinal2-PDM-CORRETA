import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SingIn'
        component={SignIn}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  )
}
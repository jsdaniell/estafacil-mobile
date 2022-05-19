import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";
import RouteNames from "../../constants/routeNames";
import GenerateQrCodeScreen from "../../screens/generateQrCodeScreen/GenerateQrCodeScreen";
import LoginScreen from "../../screens/loginScreen/LoginScreen";
import RegisterScreen from "../../screens/registerScreen/RegisterScreen";
import SpotsScreen from "../../screens/spotsScreen/SpotsScreen";

const Stack = createNativeStackNavigator();

export default function NavigationScreens() {
    return <NavigationContainer>
        <StatusBar style="auto"/>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={RouteNames.RegisterUser} component={LoginScreen}/>
            <Stack.Screen name={RouteNames.RegisterScreen} component={RegisterScreen}/>
            <Stack.Screen name={RouteNames.GenerateQrCodeScreen} component={GenerateQrCodeScreen}/>
            <Stack.Screen name={RouteNames.SpotsScreen} component={SpotsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}
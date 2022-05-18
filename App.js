import {StyleSheet, Text, View} from 'react-native';
import NavigationScreens from "./src/components/navigationScreens/NavigationScreens";

export default function App() {
    return (
        <NavigationScreens/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

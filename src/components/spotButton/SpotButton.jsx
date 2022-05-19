import {useState} from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

export default function SpotButton({
                                       onPress,
                                       plate = "XXXX",
                                       vehicle = "Honda",
                                       number = "01"
                                   }) {

    const [active, setActive] = useState(false)

    return <TouchableOpacity onPress={() => setActive(!active)}>
        <View style={{...styles.rootView, backgroundColor: active ? "#80FF6B" : "#FF6B6B"}}>
            <Text>{active ? "Disponível" : plate}</Text>
            {active ? <View style={styles.elipse}/> : <Text>{vehicle}</Text>}
            <Text>{number}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    rootView: {
        flexDirection: "column",
        height: 150,
        width: 160,
        padding: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#000"
    },
    elipse: {
        width: 50,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#C4C4C4"
    }
})
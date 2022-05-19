import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

export default function FloorButton({active, onPress, text}) {
    return <TouchableOpacity onPress={() => onPress(text)}>
        <View style={active ? styles.activeButtonFloor : styles.buttonFloor}>
            <Text style={active ? styles.activeTextButton : styles.textButton}>S{text}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    horizontalDivider: {
        width: 15,
        height: 1
    },
    rowOfButtons: {
        flexDirection: "row",
        justifyContent: "center"
    },
    textButton: {
        textAlign: "center",
        color: "#7E7E7E"
    },
    activeTextButton: {
        textAlign: "center",
        color: "#000000",
        fontWeight: "600"
    },
    buttonFloor: {
        padding: 12,
        backgroundColor: "#DCDFDB",
        width: 80,
        borderRadius: 10,
        justifyContent: "center"
    },
    activeButtonFloor: {
        padding: 12,
        backgroundColor: "#C4F9BC",
        width: 80,
        borderRadius: 10,
        justifyContent: "center"
    },
})
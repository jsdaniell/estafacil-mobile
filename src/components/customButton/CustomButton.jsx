import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function CustomButton({
                                         text = "example",
                                         color = "#FF6B12",
                                         onPress = () => {
                                         }
                                     }) {
    return <TouchableOpacity onPress={onPress}>
        <View style={{...styles.buttonStyle, backgroundColor: color}}>
            <Text style={styles.textButton}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    textButton: {
        textAlign: "center",
        color: "white",
        fontWeight: "600"
    },
    buttonStyle: {
        height: 55,
        width: "100%",
        justifyContent: "center",
        borderRadius: 12
    }
})
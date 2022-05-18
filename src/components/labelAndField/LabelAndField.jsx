import {View, StyleSheet, Text, TextInput} from "react-native";

export default function LabelAndField({label = "label example"}) {
    return <View style={styles.rootView}>
        <Text style={styles.textLabel}>
            {label}
        </Text>
        <TextInput style={styles.input} value={""}/>
    </View>
}

const styles = StyleSheet.create({
    textLabel: {
        color: "#AAAAAA",
        paddingBottom: 8
    },
    rootView: {
        width: "100%",
        paddingBottom: 15
    },
    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#CED4DA",
        backgroundColor: "white"
    },
})
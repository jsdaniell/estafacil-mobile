import {Text, View, StyleSheet} from "react-native";

export default function SquareInfo({infos = []}) {
    return <View style={styles.rootView}>
        {infos.map(inf => (
            <View style={styles.rowInfo}>
                <Text style={styles.keyText}>{inf.key}:&nbsp;</Text>
                <Text style={styles.valueText}>{inf.value}</Text>
            </View>
        ))}
    </View>
}

const styles = StyleSheet.create({
    rootView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30
    },
    rowInfo: {
        flexDirection: "row"
    },
    keyText: {
        fontWeight: "600",
        fontSize: 17,
        paddingBottom: 16
    },
    valueText: {
        fontWeight: "400",
        fontSize: 17
    }
})
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

export default function ContainerView({children, showBack = false, goBack}) {
    return <View style={styles.rootView}>
        <View style={styles.headerView}>
            {showBack && <TouchableOpacity onPress={() => {
                goBack()
            }}>
                <View style={styles.iconBack}>
                    <Ionicons name="arrow-back" size={24} color="white"/>
                </View>
            </TouchableOpacity>}
            <View style={{...styles.textViewHeader, paddingRight: showBack ? "9%" : "0%"}}>
                <Text style={styles.headerText}>Estafacil</Text>
            </View>
        </View>
        <View style={styles.contentView}>
            {children}
        </View>
        <View style={styles.footerStyle}>
            <FontAwesome5 name="facebook" size={30} color="white"/>
            <FontAwesome5 name="instagram" size={30} color="white"/>
            <FontAwesome5 name="youtube" size={30} color="white"/>
            <FontAwesome5 name="linkedin" size={30} color="white"/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    textViewHeader: {
        flexGrow: 1,
    },
    iconBack: {
        paddingLeft: 15,
        flexShrink: 1
    },
    contentView: {
        flexGrow: 1,
        paddingHorizontal: 20
    },
    footerStyle: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#00A28D",
        alignItems: "center",
        paddingBottom: 25
    },
    headerView: {
        height: 100,
        width: "100%",
        backgroundColor: "#FF6B12",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 16
    },
    headerText: {
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 16
    },
    rootView: {
        flex: 1,
        flexGrow: 1,
        height: "100%",
        justifyContent: "space-between",
        width: "100%",
    }
})
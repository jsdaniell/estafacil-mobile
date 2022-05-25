import {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import ContainerView from "../../components/containerView/ContainerView";
import FloorButton from "../../components/floorButton/FloorButton";
import SpotButton from "../../components/spotButton/SpotButton";
import RouteNames from "../../constants/routeNames";

export default function SpotsScreen({navigation: {navigate}}) {
    const [selectedFloor, setSelectedFloor] = useState(1)

    function changeFloor(nF, goToInfo = false) {
        setSelectedFloor(nF)

        if (goToInfo) {
            navigate(RouteNames.InfoScreen)
        }
    }

    return <ContainerView>
        <View style={styles.containerView}>
            <View style={styles.rootView}>
                <Text style={styles.textSpotTitle}>Vagas disponíveis: 04</Text>
            </View>
            <View style={styles.whiteSquare}>
                <View style={styles.rowOfButtons}>
                    <FloorButton active={selectedFloor === 1} text={1} onPress={changeFloor}/>
                    <View style={styles.horizontalDivider}/>
                    <FloorButton active={selectedFloor === 2} text={2} onPress={(nF) => changeFloor(nF, true)}/>
                </View>
                <View style={styles.baseDivider}/>
                <View style={styles.rowOfSpots}>
                    <SpotButton/>
                    <SpotButton/>
                </View>
                <View style={styles.rowOfSpots}>
                    <SpotButton/>
                    <SpotButton/>
                </View>
                <View style={styles.rowOfSpots}>
                    <SpotButton/>
                    <SpotButton/>
                </View>
            </View>
        </View>
    </ContainerView>
}

const styles = StyleSheet.create({
    rowOfSpots: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
    baseDivider: {
        width: "100%",
        height: 1,
        backgroundColor: "#CED4DA",
        marginVertical: 15,
    },
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
    containerView: {
        flex: 1,
        paddingVertical: 20
    },
    rootView: {
        flexShrink: 1,
        display: "flex",
        flexDirection: "column",
    },
    textSpotTitle: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20,
        paddingBottom: 15
    },
    whiteSquare: {
        backgroundColor: "white",
        flexGrow: 1,
        width: "100%",
        borderRadius: 20,
        padding: 20
    }
})
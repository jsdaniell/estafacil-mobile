import {Text, View, StyleSheet} from "react-native";
import QRCode from "react-native-qrcode-svg";
import ContainerView from "../../components/containerView/ContainerView";
import CustomButton from "../../components/customButton/CustomButton";

export default function GenerateQrCodeScreen() {
    return <ContainerView>
        <View style={styles.rootView}>
            <Text style={styles.textTitle}>
                Registro de entrada
            </Text>
            <View style={styles.qrView}>
                <QRCode size={250} value={"look"}/>
            </View>
            <CustomButton text="Gerar QRCode" />
        </View>
    </ContainerView>
}

const styles = StyleSheet.create({
    rootView: {
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        justifyItems: "center",
    },
    textTitle: {
        fontWeight: "600",
        fontSize: 24,
        textAlign: "center"
    },
    qrView: {
        backgroundColor: "white",
        padding: 50,
        borderRadius: 25,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    }
})
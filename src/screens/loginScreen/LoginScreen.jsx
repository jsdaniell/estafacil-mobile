import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ContainerView from "../../components/containerView/ContainerView";
import CustomButton from "../../components/customButton/CustomButton";
import LabelAndField from "../../components/labelAndField/LabelAndField";
import RouteNames from "../../constants/routeNames";

export default function LoginScreen({navigation: {navigate}}) {
    return <ContainerView>
        <View style={styles.rootView}>
            <Text style={styles.textTitle}>
                Sistema de Controle de Estacionamento
            </Text>
            <View>
                <LabelAndField label="Matrícula"/>
                <LabelAndField label="Senha"/>
                <TouchableOpacity onPress={() => navigate(RouteNames.RegisterScreen)}>
                    <Text style={styles.rightSideText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
            <CustomButton text="Entrar" onPress={() => navigate(RouteNames.GenerateQrCodeScreen)}/>
        </View>
    </ContainerView>
}

const styles = StyleSheet.create({
    rootView: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        flex: 1,
        paddingHorizontal: 30
    },
    textTitle: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 25
    },
    rightSideText: {
        textAlign: "right",
        color: "#317DEF"
    }
})
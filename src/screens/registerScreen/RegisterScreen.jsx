import {View, StyleSheet, Text} from "react-native";
import ContainerView from "../../components/containerView/ContainerView";

export default function RegisterScreen({navigation: {goBack}}) {
    return <ContainerView showBack goBack={goBack}>
        <View style={styles.rootView}>
            <View>
                <Text style={styles.textTitle}>
                    Cadastro de clientes
                </Text>
            </View>
            <View style={styles.dividerView}/>
            <View style={styles.viewMiddle}>
                <Text style={styles.textMiddle}>
                    Favor procurar a Secretaria da faculdade para realizar o cadastro
                </Text>
            </View>
            <View style={styles.dividerView}/>
            <View style={styles.viewEndText}>
                <Text style={styles.textEnd}>
                    {`Tenha em mãos os seguintes documentos:\n\n• Habilitação\n• Documento do veículo`}
                </Text>
            </View>
        </View>
    </ContainerView>
}

const styles = StyleSheet.create({
    viewEndText: {
      justifyContent: "center",
      alignItems: "center"
    },
    textTitle: {
        fontWeight: "600",
        fontSize: 25,
        textAlign: "center"
    },
    textMiddle: {
        fontWeight: "300",
        fontSize: 23,
        textAlign: "center"
    },
    textEnd: {
        fontWeight: "300",
        fontSize: 23,
        textAlign: "left"
    },
    viewMiddle: {
        paddingHorizontal: 60
    },
    dividerView: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED4DA"
    },
    rootView: {
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-evenly"
    },
})
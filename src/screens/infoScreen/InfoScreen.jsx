import {Text, StyleSheet, View} from "react-native";
import ContainerView from "../../components/containerView/ContainerView";
import SquareInfo from "../../components/squareInfo/SquareInfo";

export default function InfoScreen({navigation: {goBack}}) {
    return <ContainerView showBack goBack={goBack}>
        <View style={styles.rootView}>
            <Text style={styles.textTitle}>Dados do veículo</Text>
            <SquareInfo infos={[
                {key: "Veículo", value: "Honda Civic"},
                {key: "Placa", value: "HWX2537"},
                {key: "Cor", value: "Preto"},
                {key: "Ano", value: "2016"}
            ]}/>
            <Text style={styles.textTitle}>Dados do proprietário</Text>
            <SquareInfo infos={[
                {key: "Cliente", value: "Daniel"},
                {key: "Nome", value: "Ivan"},
                {key: "Curso", value: "ADS"},
                {key: "Disciplina", value: "Gerência de projetos"},
                {key: "Sala", value: "206"}
            ]}/>
        </View>
    </ContainerView>
}

const styles = StyleSheet.create({
    rootView: {
        paddingHorizontal: 20
    },
    textTitle: {
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center",
        paddingVertical: 20
    }
})
import { View, Text } from "react-native";
import { styles } from "./abaprofile.style";

function Abaprofile() {
  return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Rafael Silva Veloso</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>rafael@teste.com.br</Text>
        </View>
    </View>
}

export default Abaprofile;
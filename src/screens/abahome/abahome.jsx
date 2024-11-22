import { Alert, FlatList, Text, View} from 'react-native';
import { styles } from '../abahome/abahome.style.js';
import  Doctor from '../../components/doctor/doctor.jsx';
import { useState } from 'react';
import api from '../../constants/api.js';
import { useEffect } from 'react';

function Abahome(props) {

  const [doctors, setDoctors] = useState([]);

  function ClickDoctor(id_doctor, name, specialty, icon) {
    props.navigation.navigate("services", {id_doctor, name, specialty, icon});
  }

  async function loadDoctors(){
    try {
      const response = await api.get('/doctors');

      if (response.data)
        setDoctors(response.data);

    } catch (error) {
        if (error.response?.data.message)
            Alert.alert(error.response.data.message);
        else
            Alert.alert('Ocorreu um erro. Tente novamente mais tarde');
    }
  }

  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>

      <FlatList data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <Doctor id_doctor={item.id_doctor}
            name={item.name}
            icon={item.icon} // M ou F
            specialty={item.specialty}
            onPress={ClickDoctor} />
      }} />
    </View>
  );
}

export default Abahome;
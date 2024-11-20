import { Text, View } from 'react-native';
import { styles } from './schedule.style';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from '../../constants/calendar';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/button/button.jsx';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

function Schedule() {

    // Projeto Calendario: https://github.com/wix/react-native-calendars
    // Projeto Picker: https://github.com/react-native-picker/picker

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedHour, setSelectedHour] = useState('');

  return <View style={styles.container}>
    <View>
      <Calendar theme={styles.theme}
        onDayPress={(day) => {
            setSelectedDate(day.dateString)
        }}
        markedDates={{
            [selectedDate]: { selected: true }
        }}
        minDate={new Date().toISOString().split('T')[0]}
      />

      <View>
        <Text style={styles.textHour}>Horário</Text>
      </View>

      <View>
        <Picker selectedValue={selectedHour}
            onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}>
            <Picker.Item label="Selecione um horário" value="" />
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="09:30" value="09:30" />
            <Picker.Item label="10:00" value="10:00" />
        </Picker>
      </View>
    </View>

      <View>
        <Button text="Confirmar Reserva" />
      </View>

    </View>
}

export default Schedule;
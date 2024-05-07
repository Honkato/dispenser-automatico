import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabOneScreen() {
  /*
  LINKS 
  FIREBASE
  https://github.com/ProjetoLindomal/gameXperience/blob/main/assets/services/getDB.js

  UPDATE
  https://github.com/ProjetoLindomal/Entregador/blob/main/screens/entregues/index.js

  GET
  https://github.com/ProjetoLindomal/gameXperience/blob/main/screens/produto/index.js

  USER
  https://github.com/ProjetoLindomal/gameXperience/blob/main/screens/cadastro/index.js

  */
  const [basicInfos, setBasicInfos] = useState({
    nivel: '3',
    qtdPorcao: '2',
    intervalo: '50'
  })
  const [editable, setEditable] = useState(false)
  const getColor = () => {
    switch (basicInfos.nivel) {
      case '1':
        return 'red'
      case '2':
        return 'orange'
      case '3':
        return 'lightgreen'
      default:
        return 'black';
    }
  }
  const getNivel = () => {
    switch (basicInfos.nivel) {
      case '1':
        return 'Baixo'
      case '2':
        return 'Médio'
      case '3':
        return 'Alto'
      default:
        return '-';
    }
  }
  let i = 0;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <View style={{ gap: 16, margin: 16, padding: 16, backgroundColor: 'gray', borderRadius: 8, paddingTop: 48, paddingBottom: 48 }}>
          <View style={{ padding: 10, backgroundColor: 'transparent', borderRadius: 20, display: 'flex', position: 'absolute', right: 10, top: 10 }}>
            <TouchableOpacity onPress={() => setEditable(!editable)}>
              <Text style={{}}>
                <FontAwesome size={24} style={{ marginLeft: 2 }} name='edit' />
              </Text>
            </TouchableOpacity>
          </View>
          <Text>
            Nivel de ração no pote
          </Text>
          <View style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'gray', padding: 4, borderWidth: 4, borderRadius: 8, gap: 4, width: 96, height: 48, borderColor: getColor(), marginRight: 8 }}>
              <View style={{ height: 32, width: 24, backgroundColor: getColor(), display: parseInt(basicInfos.nivel) >= 1 ? 'flex' : 'none' }}></View>
              <View style={{ height: 32, width: 24, backgroundColor: getColor(), display: parseInt(basicInfos.nivel) >= 2 ? 'flex' : 'none' }}></View>
              <View style={{ height: 32, width: 24, backgroundColor: getColor(), display: parseInt(basicInfos.nivel) >= 3 ? 'flex' : 'none' }}></View>
            </View>
            <Text>
              {getNivel()}
            </Text>
          </View>
          <Text>
            Quantidade de porções por ativação:
          </Text>

          <View style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <TextInput keyboardType='numeric' editable={editable} onChangeText={(e) => { setBasicInfos({ ...basicInfos, qtdPorcao: e }) }} value={basicInfos.qtdPorcao} style={{ width: 98, paddingLeft: 8, borderRadius: 4, borderWidth: 2, borderColor: 'lightblue', color: 'white' }}></TextInput>
            <Text>
              Porções
            </Text>
          </View>
          <Text>
            Intervalo de tempo de cada ativação:
          </Text>
          <View style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <TextInput keyboardType='numeric' editable={editable} onChangeText={(e) => { setBasicInfos({ ...basicInfos, intervalo: e }) }} value={basicInfos.intervalo} style={{ width: 98, paddingLeft: 8, borderRadius: 4, borderWidth: 2, borderColor: 'lightblue', color: 'white' }}></TextInput>
            <Text>
              (0 Hrs 50 Min)
            </Text>
          </View>
          <Button color={'lightgreen'} disabled={editable} title='Salvar'></Button>
        </View>
        <Button title='ativar'></Button>
        <Text>
          Tempo até a proxima ativação:
        </Text>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

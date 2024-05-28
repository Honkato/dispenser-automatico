import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { getDatabase, ref, child, push, onValue, update } from "firebase/database";
import { FirebaseApp } from '@/assets/services/getDB';
import { useEffect, useState } from 'react';


export default function TabTwoScreen() {
  const database = getDatabase(FirebaseApp);

  // const [dbValues, setDbValues] = useState({'test':{'bool':false, float:'15.6', int:5}});
  const [data, setData] = useState({'test':{'DefaultBool':false,'OpenTotalBool':false,'bool':false, float:'15.6', int:5}});
  const db = getDatabase();
  const starCountRef = ref(db);
  const defaultBoolTrue = ()=>{
    onValue(starCountRef, (snapshot) => {
      setData(snapshot.val());
      console.log('data');
      console.log(data);
      console.log('data');
      
      setData({... data, test: {... data.test, bool:!data['test']['DefaultBool']}})
      
      // setDbValues({... data});
      const key = snapshot.key;
      console.log(data);
    });
    console.log(starCountRef);
    
    // const updates = {};
    console.log("UPDATED");
    update(ref(db), data)
    .then((res)=>{
      console.log("certo");
      
      console.log(res);}
    )
    .catch((res)=>{
      console.log("errado");
      console.log(res);
      
    })
  }
  const fullBoolTrue = ()=>{
    onValue(starCountRef, (snapshot) => {
      setData(snapshot.val());
      console.log('data');
      console.log(data);
      console.log('data');
      
      setData({... data, test: {... data.test, bool:!data['test']['OpenTotalBool']}})
      
      // setDbValues({... data});
      const key = snapshot.key;
      console.log(data);
    });
    console.log(starCountRef);
    
    // const updates = {};
    console.log("UPDATED");
    update(ref(db), data)
    .then((res)=>{
      console.log("certo");
      
      console.log(res);}
    )
    .catch((res)=>{
      console.log("errado");
      console.log(res);
      
    })
  }
  // useEffect(()=>{console.log("...");
  //  console.log(dbValues);
  // },[dbValues])
  // const newPostKey = push(child(ref(db),'')).key;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logs</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title='default' onPress={defaultBoolTrue}></Button>
      <Button title='full' onPress={fullBoolTrue}></Button>
      <Text style={styles.title}>{JSON.stringify(database)}</Text>
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      {/* https://dogfeeder-dd675-default-rtdb.firebaseio.com/
        AIzaSyDaZX_aDk5ABx_VTdGbj7ucf7TmvA4zHmo
      */}
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

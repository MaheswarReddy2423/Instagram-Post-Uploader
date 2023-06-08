import React from 'react';
import { FontAwesome,Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,TouchableOpacity,Button } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import Doable from '../components/Doable';
const HomeScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return(
          <TouchableOpacity style={styles.IndividualStyle} onPress={() => {navigation.navigate('Gallery')}}>
              <AntDesign name="plussquareo" style={styles.IconStyle} size={30} color="black" />
          </TouchableOpacity>
        )
          
      },
        headerLeft : () => {
          return(
            <TouchableOpacity style={styles.IndividualStyle} onPress={() => {navigation.navigate('Camera')}}>
              <Entypo name="camera" size={30} style={styles.IconStyle} color="black" />
          </TouchableOpacity>
          )
          
        }
    })
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title='Final Screen' onPress={() => {navigation.navigate('Final')}} />
      {/* <Button title='Filter Screen' onPress={() => {navigation.navigate('Editor')}} /> */}
      <StatusBar style="auto" /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'column'

  },
  IndividualStyle : {
    padding : 0
  },
  IconStyle : {
    padding : 0,
  }
});
export default HomeScreen;

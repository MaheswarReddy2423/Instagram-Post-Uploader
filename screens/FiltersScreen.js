import React from "react";
import { useLayoutEffect } from "react";
import { FontAwesome,Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { View,Text,Image,StyleSheet,Button, TouchableOpacity } from "react-native";
import HorizontalLine from "../components/HorizontalLine";
const FiltersScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return(
          <Button title="Save" onPress={() => {navigation.navigate('Final')}} />
        )
          
      },
        headerLeft : () => {
          return(
          <TouchableOpacity>
              <Entypo name="edit" size={30} color="black" />
          </TouchableOpacity>
          )
          
        }
    })
  }, [navigation]);
    return(
      <View style={styles.Container}>
        <Image source={require('../assets/maahi.jpg')} style={{ width: 350, height: 350 }} />
        <HorizontalLine />
      </View>
    )
};


const styles = StyleSheet.create({
    Container : {
        flex : 1,
        paddingVertical : 20,
        alignItems: 'center',
    },
    textStyle : {
      alignItems : 'center',
      textAlign : 'center'
    }
});

export default FiltersScreen;
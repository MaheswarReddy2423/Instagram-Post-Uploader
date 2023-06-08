import React,{ useLayoutEffect } from "react";
import { Text,View,StyleSheet,Button,Image } from "react-native";

const AddPeopleScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return(
              <Button title="Add" onPress={() => {navigation.navigate('Final')}} />
            )
              
          }
            
        })
      }, [navigation]);
    return (
        <View style={styles.Container}>
            <Image source={require('../assets/maahi.jpg')} style={{ width: 350, height: 350,margin: 10 }}  />
            <View style={styles.Container2}>
                <Button title="Invite collaborator" color={'#000'} />
            </View>
            <View>
                <Text style={styles.textStyle}>Tap photo to add people.</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
        Container : {
            flex : 1,
            alignItems : 'center',
            paddingTop : 15,

        },
        Container2: {
            backgroundColor : '#9BA4B5',
            borderRadius : 10,
            width : 330,
            height : 40,
            margin : 20,
        
        

        },
        textStyle : {
            opacity : 0.5,
            fontSize : 12,
            paddingVertical : 110,
            textAlign : 'center',
        }

});

export default AddPeopleScreen;
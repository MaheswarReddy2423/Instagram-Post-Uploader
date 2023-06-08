import React from "react";
import { useLayoutEffect } from "react";
import {Text,Image,StyleSheet,View,TextInput, Button} from 'react-native';
import HorizontalLine from "../components/HorizontalLine";

const AltTextScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return(
              <Button title="Done" onPress={() => {navigation.navigate('AdvancedSettings')}} />
            )
              
          }
            
        })
      }, [navigation]);
    return (
        <View>
            <View style={styles.Container2}>
                <Image source={require('../assets/maahi.jpg')} style={{ width : 350, height : 350 }} />
                <TextInput style={{paddingVertical:20, textAlign:'center'}} placeholder="Write alternative text..." />
            </View>
            <HorizontalLine />
        </View>
    )
};

const styles = StyleSheet.create({
    Container2 : {
        
        paddingVertical : 20,
        alignItems: 'center',
        
    }

});

export default AltTextScreen;
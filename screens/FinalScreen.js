import React,{ useState, useLayoutEffect} from "react";
//import { withNavigation } from 'react-navigation';
import { Text,View,StyleSheet,Button,TextInput,TouchableOpacity,Image } from "react-native";
import HorizontalLine from "../components/HorizontalLine";
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

import AdvancedSettingsScreen from "./AdvancedSettingsScreen";
const FinalScreen = ({ navigation, ImageUri }) => {
    const [Caption,setCaption]  = useState();
   
    const CaptionHandler = (newText) => {
      setCaption(newText)
      
    }
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return(
            <Button title="Post" onPress={() => {navigation.navigate('Home')}} />
          )
            
        }
          
      })
    }, [navigation]);
    
      
        
      
    
    return (
      <View style={styles.Container}>
      <View style={styles.CaptionContainer}>
      <TouchableOpacity onPress={() => {navigation.navigate('Filters')}}>
            <Image source={require('../assets/maahi.jpg')} style={{ width : 80, height : 80,marginTop : 10 }} />
            {/* <Image source={{ uri: ImageUri }} style={{ width : 80, height : 80,marginTop : 10 }} /> */}
        </TouchableOpacity>
        <TextInput style={styles.Caption} 
        onChangeText={CaptionHandler}
        defaultValue={Caption} 
        placeholder='Add a Caption...'   />
      </View>
      <View>
      <HorizontalLine />
      <TouchableOpacity onPress={() => {navigation.navigate('AddPeople')}}>
      <View style={styles.ComponentContainer}>
      <Text style={styles.textStyle}>Add people</Text>
      
        <MaterialCommunityIcons style={{paddingLeft : 270}} name="greater-than" size={20} color="black" />

      </View>
      </TouchableOpacity>
      <HorizontalLine />
      <TouchableOpacity onPress={() => {navigation.navigate('AddLocation')}}>
      <View style={styles.ComponentContainer}>
      <Text style={styles.textStyle}>Add location</Text>
      
        <MaterialCommunityIcons style={{paddingLeft : 260}} name="greater-than" size={20} color="black" />
  
      </View>
      </TouchableOpacity>
      <HorizontalLine />
      <TouchableOpacity onPress={() => {navigation.navigate('AddMusic')}}>
      <View style={styles.ComponentContainer}>
      <Text style={styles.textStyle}>Add music</Text>
        <MaterialCommunityIcons style={{paddingLeft : 275}} name="greater-than" size={20} color="black" />
      </View>
      </TouchableOpacity>
      <HorizontalLine />
      <TouchableOpacity onPress={() => {navigation.navigate('AdvancedSettings')}}>
      <View style={styles.ComponentContainer}>
      <Text style={styles.textStyle}>Advanced settings</Text>
          <MaterialCommunityIcons style={{paddingLeft : 220}} name="greater-than" size={20} color="black" />
      </View>
      </TouchableOpacity>
      </View>
    </View>

    )
};


const styles = StyleSheet.create({

    Container : {
        flex : 1,

    },
    CaptionContainer : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'flex-start',
      paddingLeft : 10,
      paddingBottom : 20,
    },
    ComponentContainer : {
        flexDirection : 'row',
        paddingVertical : 20
    },
    Caption : {
        paddingLeft : 10
    },
    Image : {
       padding : 20
    },
    IconStyle : {
        alignItems : 'center',
        justifyContent : 'center',

        
        //paddingLeft : 220,
        
    },
    textStyle : {
        paddingLeft : 10,
        fontSize : 15,
        //fontWeight : 'bold',
        
        

    },


});

export default FinalScreen;
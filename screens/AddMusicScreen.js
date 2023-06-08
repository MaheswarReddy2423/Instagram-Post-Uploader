import React,{useLayoutEffect} from "react";
import { Text,View,StyleSheet,Button,TextInput } from "react-native";
import { FontAwesome,Feather } from '@expo/vector-icons';

const AddMusicScreen = ({term,onChangeTerm,onTermSubmit,navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return(
              <Button title="Add" onPress={() => {navigation.navigate('Final')}} />
            )
              
          },
          headerLeft: () => (
                <FontAwesome style={styles.IconStyle} name="music" size={24} color="black" />
            )
            
        })
      }, [navigation]);
    return(
        <View style={styles.Container}>
            <View style={styles.backgroundStyle}>
            <Feather name="search" size={15} style = {styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle} 
            placeholder="Search Music" 
            value = {term}
            onChangeText = {onChangeTerm}
            onEndEditing= {onTermSubmit}
            />
            </View>
        <View>
            <Button style={styles.ButtonStyle} title='Saved' color={'black'} /> 
        </View>

        </View>
    )
};



const styles = StyleSheet.create({
    Container : {
        flex : 1,
        textAlign : "center"
    },
    IconStyle : {
        paddingLeft : 7
    },
    textStyle : {
        fontSize:30,
        textAlign:"center"
    },
    backgroundStyle :{
        marginVertical : 10,
        backgroundColor : '#DBDFEA',
        height : 50,
        borderRadius:10,
        marginHorizontal : 15,
        flexDirection : 'row',
    
    },
    inputStyle : {
        fontSize : 18,
        flex : 1
    },
    iconStyle : {
        fontSize : 35,
        alignSelf : "center",
        paddingHorizontal : 5
    },
    ButtonStyle : {
        marginVertical : 10,
        borderRadius : 10,
        height : 20,

    }
});

export default AddMusicScreen;
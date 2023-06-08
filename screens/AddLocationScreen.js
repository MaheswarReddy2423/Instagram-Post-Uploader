import React,{ useState, useLayoutEffect } from "react";
import { Text,View,StyleSheet,Button,TextInput,TouchableOpacity } from "react-native";
import { FontAwesome,Feather,Entypo } from '@expo/vector-icons';
const AddLocationScreen = ({term, onChangeTerm, onTermSubmit,navigation}) => {
    const [visible,setvisible] = useState(true);
    // const CardHandler = () => {
    //     setvisible(false);
    // };
    if(!visible)
    {
        return (
            <View style={styles.Container}>
            <View style={styles.backgroundStyle}>
            <Feather name="search" size={15} style = {styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle} 
            placeholder="Search location" 
            value = {term}
            onChangeText = {onChangeTerm}
            onEndEditing= {onTermSubmit}
            />
            </View>
            </View>
        );
    }
    // else{
    //     <View style={styles.Container}>
    //         <View style={styles.backgroundStyle}>
    //         <Feather name="search" size={15} style = {styles.iconStyle}/>
    //         <TextInput 
    //         style={styles.inputStyle} 
    //         placeholder="Search location" 
    //         value = {term}
    //         onChangeText = {onChangeTerm}
    //         onEndEditing= {onTermSubmit}
    //         />
    //         </View>
    //         <View style={styles.Container2}>
    //             <TouchableOpacity onPress={CardHandler}>
    //                 <Entypo style={styles.IconStyle2} name="cross" size={20} color="black" />
    //             </TouchableOpacity>
    //             <Text style={styles.textStyle1}>See Places Near You</Text> 
    //             <Text style={styles.textStyle2}>To include nearby places, turn on Location Services</Text>
    //             <Button style={styles.ButtonStyle} title='Turn on Location Services' />
    //         </View>

    //     </View>
    // }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return(
              <Button title="Add" onPress={() => {navigation.navigate('Final')}} />
            )
              
          },
          headerLeft: () => (
                <FontAwesome style={styles.IconStyle} name="location-arrow" size={24} color="black" />
            ) 
            
        })
      }, [navigation]);

    return(
        <View style={styles.Container}>
            <View style={styles.backgroundStyle}>
            <Feather name="search" size={15} style = {styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle} 
            placeholder="Search location" 
            value = {term}
            onChangeText = {onChangeTerm}
            onEndEditing= {onTermSubmit}
            />
            </View>
            <View style={styles.Container2}>
                <TouchableOpacity onPress={()=>{setvisible(false)}}>
                    <Entypo style={styles.IconStyle2} name="cross" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.textStyle1}>See Places Near You</Text> 
                <Text style={styles.textStyle2}>To include nearby places, turn on Location Services</Text>
                <Button style={styles.ButtonStyle} title='Turn on Location Services' />
            </View>

        </View>
    )
};



const styles = StyleSheet.create({
    Container : {
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
    Container2 : {
        marginTop : 40,
        textAlign : 'center',
        borderColor : 'black',
        borderWidth : 0,
        marginHorizontal : 10,

    }
    ,
    textStyle1 : {
        fontWeight : 'bold',
        fontSize : 16,
        padding : 5,
        textAlign : 'center'

    },
    textStyle2 : {
        fontSize : 14,
        opacity : 0.5,
        paddingBottom : 5,
        textAlign : 'center'
    },
    ButtonStyle : {
        paddingVertical : 15,
        
    },
    IconStyle2 : {
        paddingLeft : 345,
        paddingTop : 5,
    }

});

export default AddLocationScreen;
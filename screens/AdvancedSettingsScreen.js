import React,{useState, useLayoutEffect} from "react";
import { Text,View,StyleSheet,Button,TouchableOpacity,ScrollView } from "react-native";
import HorizontalLine from "../components/HorizontalLine";

import { FontAwesome } from '@expo/vector-icons';
import Switch1 from "../components/Switch";
const AdvancedSettingsScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return(
              <Button title="Save" onPress={() => {navigation.navigate('Final')}} />
            )
              
          }
            
        })
      }, [navigation]);

    return(
        <ScrollView>
        <View style={styles.Container}>
        <Text style={styles.titleStyle}>Like and view counts</Text>
        <View style={styles.Container2}>
        <Text style={styles.textStyle}>Hide like and view counts on this post</Text>
        <View style={{paddingLeft:50}}>
            <Switch1 />
        </View>
        </View>
        <Text style={styles.DescriptionStyle}>Only you will see the total number of likes and views on this post.</Text>
        <HorizontalLine />
        <Text style={styles.titleStyle}>Comments</Text>
        <View style={styles.Container2}>
        <Text style={styles.textStyle}>Turn off Commenting</Text>
        <View style={{paddingLeft:165}}>
            <Switch1 />
        </View>
        </View>
        <Text style={styles.DescriptionStyle}>You can turn off this in menu section.</Text>
        <HorizontalLine />
        <Text style={styles.titleStyle}>Preferences</Text>
        <View style={styles.Container2}>
        <Text style={styles.textStyle}>Share your posts to Facebook</Text>
        <View style={{paddingLeft:107}}>
            <Switch1 />
        </View>
        </View>
        <Text style={styles.DescriptionStyle}>Automatically share your photo and video posts to Facebook</Text>
        <HorizontalLine />
        <Text style={styles.titleStyle}>Privacy</Text>
        <View style={styles.Container2}>
        <Text style={styles.textStyle}>Alow this post be to visible in others feed</Text>
        <View style={{paddingLeft:26}}>
            <Switch1 />
        </View>
        </View>
        <Text style={styles.DescriptionStyle}>If this option is disabled then this post is not visible in others feed who are not following you.</Text>
        <HorizontalLine />
        
        <Text style={styles.titleStyle}>Age Restriction</Text>
        <View style={styles.Container2}>
        <Text style={styles.textStyle}>Is this Post is rated 18+ ?</Text>
        <View style={{paddingLeft:140}}>
            <Switch1 />
        </View>
        </View>
        <Text style={styles.DescriptionStyle}>Enabling this option willn't suggest this post to users feed who are under 18 years of age..</Text>
        <HorizontalLine />
        <Text style={styles.titleStyle}>Accessibility</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('AlternativeText')}}>
        <View style={styles.Container2}>
        <Text style={styles.textStyle}>Write Alt Text</Text>
        <FontAwesome style={{paddingLeft : 240,paddingTop : 13}} name="arrow-circle-right" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <Text style={styles.DescriptionStyle}>Alt text describes your photos for people with visual impairments. Alt text will be automatically created for your photos or you can choose to write your own.</Text>
    </View>
    </ScrollView>
    )
};




const styles = StyleSheet.create({
    Container : {
        flex : 1,

    },
    Container2 : {
        flexDirection : 'row',

    }
    ,
    titleStyle : {
        fontWeight : 'bold',
        fontSize : 18,
        paddingLeft : 10,
        paddingVertical : 15,

    },
    textStyle : {
        fontSize : 16,
        paddingLeft : 10,
        paddingVertical : 15,
        

    },
    
    
    DescriptionStyle : {
        fontSize : 14,
        opacity : 0.5,
        paddingLeft : 10,
        paddingVertical : 20,
    }

});

export default AdvancedSettingsScreen;
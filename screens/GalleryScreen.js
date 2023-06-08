import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FinalScreen from './FinalScreen';
import { Entypo } from '@expo/vector-icons';
const GalleryScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  // img1 = image;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      allowsMultipleSelection : true,
      quality: 1,
    });

    const link = result.uri;

    

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };
  useEffect(() => {
    pickImage();
  },[])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return(
          <Button title="Next" onPress={() => {navigation.navigate('Final',{ImageUri : image})}} />
              
        )
          
      },
        headerLeft : () => {
          return(
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
              <Entypo name="cross" size={30} color="blue" />
          </TouchableOpacity>
          )
          
        }
    })
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', paddingVertical : 20, paddingTop : 10 }}>
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
      
      
    </View>
  );
  
}


export default GalleryScreen;

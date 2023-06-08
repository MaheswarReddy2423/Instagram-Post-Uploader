import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';
export default function CameraScreen({navigation}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (result.canceled) {
      setImage(result.assets[0].uri);
    }
    // if (!result.canceled) {
    //   // Handle the case when the image picker was cancelled
    //   console.log("Image picker was cancelled");
    // }
  };

  useEffect(() => {
    pickImage();
  },[])


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return(
          <Button title="Next" onPress={() => {navigation.navigate('Final')}} />
              
        )
          
      },
        headerLeft : () => {
          return(
            <TouchableOpacity  onPress={() => {navigation.navigate('Home')}}>
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


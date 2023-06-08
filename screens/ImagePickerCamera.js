import { Button, View, Image, Text, Alert } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from 'react';

const ImagePickerCamera = ({navigation}) => {
    const [pickedImage, setPickedImage] = useState();
    const [CameraPermissionInformation, requestPermission] = useCameraPermissions();
    const verifyPermissions = async () => {

        

        if(CameraPermissionInformation.status === PermissionStatus.UNDETERMINED)
        {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if(CameraPermissionInformation.status === PermissionStatus.DENIED)
        {
            Alert.alert('You need permissions to access camera.');
            return false;
        }

        return true;

    }
    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();

        if(hasPermission)
        {
            return;
        }

        const Image = await launchCameraAsync({
            allowsEditing : true,
            aspect : [9,16],
            quality : 1,
        });

        setPickedImage(Image.uri);
        
    }

    let imagePreview = <Text>No Image</Text>
    if(pickedImage)
    {
        imagePreview = <Image source={{uri : pickedImage}} style={{height:200,width:'100%'}} />
    }

    return(
        <View>
            <Image source={{uri : pickedImage}} />
            <Button title="Camera" onPress={takeImageHandler} />
            
        </View>
    )
}


export default ImagePickerCamera;
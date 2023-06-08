import { View, StyleSheet, Alert } from 'react-native';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const verifyPermissions = async () => {
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED)
        {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if(locationPermissionInformation.status === PermissionStatus.DENIED)
        {
            Alert.alert('You need permissions to access location.');
            return false;
        }

        return true;
    }

    const locationhandler = async () => {

        const hasPermission =  await verifyPermissions();
        if(!hasPermission)
        {
            return;
        }
        const location = await getCurrentPositionAsync();
        console.log(location);
    }
    const Maphandler = () => {

    }
    return(
        <View>
            <View style= {styles.mapPreview}></View>
            <View style={styles.actions}>
                <Button icon="location" title='Location' onPress={locationhandler} />
                <Button icon="map" title='Pick on Map' onPress={Maphandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapPreview : {
        width : '100%',
        height : 200,
        marginVertical : 8,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 4,
    },
    actions : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    }
})

export default LocationPicker;
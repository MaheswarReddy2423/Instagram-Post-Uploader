import * as React from 'react';
import { Button,StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome,Feather,Entypo,AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen';
import AddMusicScreen from './screens/AddMusicScreen';
import AddLocationScreen from './screens/AddLocationScreen';
import AddPeopleScreen from './screens/AddPeopleScreen';
import AdvancedSettingsScreen from './screens/AdvancedSettingsScreen';
import AltTextScreen from './screens/AltTextScreen';
import GalleryScreen from './screens/GalleryScreen';
import FiltersScreen from './screens/FiltersScreen';
import FinalScreen from './screens/FinalScreen';
import ImagePickerCamera from './screens/ImagePickerCamera';
import CameraScreen from './screens/CameraScreen';

function Home({navigation}) {
  return (
    <HomeScreen navigation={navigation} />
  )
}

function Final({navigation}) {
  return (
    <FinalScreen navigation={navigation} />
  )
}

function Filters({navigation}) {
  return (
    <FiltersScreen navigation={navigation} />
  )
}

function AdvancedSettings({navigation}) {
  return (
    <AdvancedSettingsScreen navigation={navigation} />
  )
}

function AddPeople({navigation}) {
  return (
    <AddPeopleScreen navigation={navigation} />
  )
}

function Camera({navigation}) {
  return (
    <CameraScreen navigation={navigation} />
  )
}
function Gallery({navigation}) {
  return (
    <GalleryScreen navigation={navigation} />
  )
}
function AltText({navigation}) {
  return (
    <AltTextScreen navigation={navigation} />
  )
}
function Music({navigation}) {
  return (
    <AddMusicScreen navigation={navigation} />
  )
}
function Location({navigation}) {
  return (
    <AddLocationScreen navigation={navigation} />
  )
}





const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ 
          title: 'Home',
          // headerRight: () => (
          //   <TouchableOpacity style={styles.IndividualStyle} onPress={() => {navigation.navigate('Gallery')}}>
          //       <AntDesign name="plussquareo" style={styles.IconStyle} size={30} color="black" />
          //   </TouchableOpacity>
          // ),
          // headerLeft : () => (
          //   <TouchableOpacity style={styles.IndividualStyle} onPress={() => {navigation.navigate('Camera')}}>
          //       <Entypo name="camera" size={30} style={styles.IconStyle} color="black" />
          //   </TouchableOpacity>
          // )
           }} />
        <Stack.Screen name="Final" component={Final} options={{ 
          title: 'New Post',
        //   headerRight: () => (
        //     <Button title="Post" color={'black'} style={{}}  onPress={() => {navigation.navigate('Home')}} />
        //   ), }} />
        // <Stack.Screen name="Filters" component={Filters} options={{ 
        //   title: 'Edit',
        //   headerRight: () => (
        //     <Button title="Save" color={'black'} style={{}}  onPress={() => {navigation.navigate('Final')}} />
        //   ), 
          }} />
        <Stack.Screen name="AdvancedSettings" component={AdvancedSettings} options={{ 
          title: 'Advanced Settings',
          // headerRight: () => (
          //   <Button title="Save" color={'black'} style={{}}  onPress={() => {navigation.navigate('Final')}} />
          // ), 
          }} />
        <Stack.Screen name="AddPeople" component={AddPeople} options={{ 
          title: 'Add People',
          // headerRight: () => (
          //   <Button title="Add" color={'black'} style={{}}  onPress={() => {navigation.navigate('Final')}} />
          // ), 
          }} />
        <Stack.Screen name="AlternativeText" component={AltText} options={{ 
          title: 'Alternative Text',
          // headerRight: () => (
          //   <Button title="Save" color={'black'} style={{}}  onPress={() => {navigation.navigate('Final')}} />
          // ), 
          }} />
        <Stack.Screen name="Camera" component={Camera} options={{ title: 'Edit' }} />
        <Stack.Screen name="Gallery" component={Gallery} options={{ title: 'Edit' }} />
        <Stack.Screen name="Filters" component={Filters} options={{ title: 'Edit' }} />
        <Stack.Screen name="AddMusic" component={Music} options={{ 
          title: 'Add Music',
        //   headerRight: () => (
        //     <Button title="Cancel" color={'black'} style={{}}  onPress={() => {navigation.navigate('Final')}} />
        //   ),
        //   headerLeft: () => (
        //     <FontAwesome style={styles.IconStyle} name="music" size={24} color="black" />
        // ) 
        }} />
        <Stack.Screen name="AddLocation" component={Location} options={{ 
          title: 'Add Location',
        //   headerRight: () => (
        //     <Button title="Cancel" color={'black'} style={{}}  onPress={() => {navigation.navigate('Final')}} />
        //   ),headerLeft: () => (
        //     <FontAwesome style={styles.IconStyle} name="location-arrow" size={24} color="black" />
        // ) 
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  IconStyle : {
    paddingLeft : 7
},
})

export default App;

import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'
import Navigator from './routes/Drawer'
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () =>{
  return Font.loadAsync({
      'sano-regular': require('./assets/fonts/Sono-Regular.ttf'),
      'sano-bold': require('./assets/fonts/Sono-SemiBold.ttf')
  })
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <NavigationContainer>
            <Navigator />
      </NavigationContainer>
      
    );
  }else{
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={() => console.log('error')}
        />
    ) 
  }
  
}

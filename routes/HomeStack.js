import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';


const Stack = createStackNavigator();

export default function HomeStack(){
    return(
            <Stack.Navigator 
                //  
                initialRouteName='Home Screen'>
                <Stack.Screen 
                    name='Home' 
                    component={Home}
                    options= {{
                        title:'Home',
                        headerStyle:{backgroundColor:'#eee'},
                        headerTitleAlign:'center',
                        headerTintColor:'#444',
                        headerShown: false
                        
                    }}
                />
                <Stack.Screen 
                    name='Review' 
                    component={ReviewDetails}
                    options= {{
                        title:'Review Details',
                        headerStyle:{backgroundColor:'#eee'},
                        headerTintColor:'#444'
                    }}
                />
            </Stack.Navigator>
    )
}
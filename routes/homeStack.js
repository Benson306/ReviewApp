import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const Stack = createStackNavigator();

export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteNames='Home'>
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options= {{
                        title:'Home Screen',
                        headerStyle:{backgroundColor:'#eee'},
                        headerTintColor:'#444'
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
        </NavigationContainer>
    )
}
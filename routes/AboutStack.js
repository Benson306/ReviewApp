import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About';


const Stack = createStackNavigator();

export default function AboutStack(){
    return(
            <Stack.Navigator 
                initialRouteNames='About'
                screenOptions={{headerShown: false}} 
               >
                <Stack.Screen 
                    name='About' 
                    component={About} 
                    options= {{
                        title:'About',
                        headerStyle:{backgroundColor:'#eee'},
                        headerTintColor:'#444',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
    )
}
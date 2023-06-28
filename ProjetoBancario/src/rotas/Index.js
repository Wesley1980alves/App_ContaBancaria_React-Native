import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Welcome from "../pagina/Welcome/Index"; 
import login from "../pagina/Login/Index";


const stack = createNativeStackNavigator(stack);

export default function Rotas(){
    return(
        <stack.Navigator>
            <stack.Screen name='welcome'
            component={Welcome}
            options={{headerShown:false}}/>

        <stack.Screen name='login'
            component={login}
            options={{headerShown:false}}/>

            

        </stack.Navigator>
    )

}
import React from "react";
import { StyleSheet,View,Text,TextInput,TouchableOpacity ,Image, ImageBackground} from "react-native";
import * as Animatable from 'react-native-animatable';


export default function Login(){
    return(
        <View style={estilos.container} >
            <View  style={estilos.container2}>
            <Text style={estilos.mensagem}>Seja Bem Vindo (a) </Text>  
            </View > 
            <View style={estilos.container3} >
        
                <Text style={estilos.nomeEntrar}> Nome Login</Text>
                <TextInput placeholder="Digite Nome Para Entrar " style={estilos.textoNome}/>

                <Text style={estilos.nomeEntrar}> Senha</Text>
                <TextInput placeholder="Digite Sua Senha  " style={estilos.textoNome}/>

                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.botaoAcessar} >Entrar</Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.botaoRegistrar}> Não possue Conta ?  Cadastre-se !</Text>
                </TouchableOpacity>
                


            </View>


       
        
         
        </View>
    )
}
 const estilos= StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#40e0d0',

    },
    container2:{
        
        marginTop:'15%',
        marginBottom:'8%',
        paddingStart:'15%',
     
    
    },
    container3:{
        flex:1,
        paddingEnd:'14%',
        paddingStart:'14%',

    

    },

    mensagem:{
        color:'#000',
        fontWeight:'bold',
        fontSize:35,
        

    },
    nomeEntrar:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
    },

    botao:{
        width:300,
        height:50,
        backgroundColor:"#000",
        borderRadius:5,
        marginTop:100,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
    },


    botaoAcessar:{
        color:"#fff",
        fontWeight:'bold',
        

    },
    botaoRegistrar:{
        fontWeight:'bold',
        color:'#fff',

    },
    textoNome:{
        marginTop:20,
        width:300,  
        backgroundColor:'#00ced1',
        borderRadius:5,
        fontWeight:'bold',
        fontSize:20,    
        padding:10,
        color:'#000',
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:15,

    }
    




 })










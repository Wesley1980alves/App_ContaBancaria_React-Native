
import { View, Text, StyleSheet, ImageBackground ,Image, TextInput, TouchableOpacity} from "react-native";
import { StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";





export default function Welcome(){
    const navigation = useNavigation(); 
    return(
        <View>
            <Text style={estilos.textoTelaLogin1}>Sistema Conta bancaria</Text>
            <Text style={estilos.textoTelaLogin2}>Desenvolvido por wesley e Dennis</Text>
            <Text style={estilos.textoTelaLogin3}>Cefet_mg</Text>
            < Image 
        
        source={require( '../../../issets/imagem/logotipo.png')}
        style={estilos.logotipo}/>


        <TouchableOpacity style={estilos.botaoInicial}
        onPress={()=> navigation.navigate('login')} >
          <Text style={estilos.botaoEntrar}>Entrar</Text>
        </TouchableOpacity>
      
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#000',
      
      
    },
    fonte: {
      fontSize: 50,
    },
  logotipo:{
    
    height:300,
    borderRadius:25,
    
    
    
    
  },

  dadosLogin:{
  marginTop:20,
  width:300,
  backgroundColor:'#00ced1',
  borderRadius:5,
  fontWeight:'bold',
  fontSize:20,
  padding:10,
  color:'#000',
  alignItems:'center',
  
  },
  
  textoTelaLogin1:{
    marginTop:15,
    fontSize:20,
    color:"#000",
    paddingStart:'22%',
    fontWeight:'bold',
    
  },
  textoTelaLogin2:{
    marginTop:15,
    fontSize:20,
    color:"#000",
    paddingStart:'15%',
    fontWeight:'bold',


  },
  textoTelaLogin3:{
    marginTop:15,
    fontSize:20,
    color:"#000",
    paddingStart:'35%',
    fontWeight:'bold',


  },
  botaoInicial:{
    width:300,
    height:50,
    backgroundColor:"#000",
    borderRadius:5,
    marginTop:100,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center',
    
    

    
  
  },
  botaoEntrar:{
    fontSize:30,
    color:'#fff',
  
  
  }
  
  
  
  });
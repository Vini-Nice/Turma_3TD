import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  async function traduzirTexto(texto, idiomaAlvo = "en") {

    const key =" ";
    const endpoint = "https://api.cognitive.microsofttranslator.com/";
    const region = "eastus";
    const url = `${endpoint} / translate?api-version=3.0&to=${idiomaAlvo}`;
    const response = await fetch (url, {
    method : "POST",
    body : JSON.stringify([{ Text : texto}]),
    headers : {
    
     "0cp-Apim-Subscription-Key": key,
    "0cp-Apim-Subscription-Region" : region,
    "Content-type": "application/json"
    }
    });
    const data = await response.json();
    const traduzido = data [0].translations[0].text;
    console.log(traduzido, '\n'); 
  }
  return (
    <View></View>
  );
}
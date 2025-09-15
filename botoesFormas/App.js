import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { TextInput } from 'react-native-web';


export default function App() {




  <View style={styles.container}>
    <TextInput placeholder='Informe seu nome...'
    value={nome}
    onChange={ (nome) => setNome(nome)}
    />

    <Text>Seja bem-vindo {nome}</Text>


  </View>

  const [corDeFundo,setCorDeFundo] = useState('');
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState(''); 

  const propriedades = (dados) => {
    for (let key in dados) {
      switch (key) {
        case 'backgroundColor':
          setCorDeFundo(`${key}: ${dados[key].slice(1)}`);
          break;
          case 'width':
            setLargura(`${key}: ${dados[key]}`);
            break;
            case 'height': 
            setAltura(`${key}: ${dados[key]}`);
            break;
      }
    }
  }




  const mostrarCor = (style) => {
    const cor= style.backgroundColor;
    alert(`A cor do botão é ${cor}`)
  }

  return (

    
    <View style={styles.container}>
      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn1} onPress={()=>{
            mostrarCor(styles.btn1)
          }}>

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn2} onPress={()=>{
            mostrarCor(styles.btn2)
          }}>

          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.ladoalado}>
        <View style={styles.area}>
          <TouchableOpacity style={styles.btn3} onPress={()=>{
            mostrarCor(styles.btn3)
          }}>

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn4} onPress={()=>{
            mostrarCor(styles.btn4)
          }}>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './styles';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <View style={styles.area1}>
        <Image source={require('./imgs/yuri.webp')} style={styles.imgs}></Image>
      </View>
      <View style={styles.area2}>
      <Image source={require('./imgs/garro.jpg')} style={styles.imgs}></Image>
      </View>
      </View>
      <View style={styles.container2}>
      <View style={styles.area3}>
      <Image source={require('./imgs/memphis.jpg')} style={styles.imgs}></Image>
      </View>
      <View style={styles.area4}>
      <Image source={require('./imgs/playstation.png')} style={styles.imgs}></Image>
      </View>
      </View>
      <View style={styles.container3}>
      <View style={styles.area5}>
      <Image source={require('./imgs/netflix.png')} style={styles.imgs}></Image>
      </View>
      <View style={styles.area6}>
      <Image source={require('./imgs/hbo.png')} style={styles.imgs}></Image>
      </View>
      </View>
      
      
      
    </View>

  );
}



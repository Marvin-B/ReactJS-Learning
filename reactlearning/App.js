import { StatusBar } from 'expo-status-bar';
import { StyleSheet , View, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';
export default function App() {

  const [img, setImg] = useState('')
  
  const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      return res.json()
    }).then((data)=> {
      setImg(data.message)
     console.log(img);
    })
  }

  useEffect(() => {
    getDog();
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={{uri: img}}
        style={styles.img}
      />
      <Button
        onPress={getDog}
        title="Nouveau chien"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    height: '65%'
  }
});

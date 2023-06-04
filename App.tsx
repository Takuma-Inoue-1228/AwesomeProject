import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';

const Cat = () => {
  const name = 'taro';

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hello, I am...</Text>
      <TextInput style={styles.input} defaultValue="Enter your name!" />
      <Button title={'TwoButtonAlert'} onPress={createTwoButtonAlert} />
      <Button title={'ThreeButtonAlert'} onPress={createThreeButtonAlert} />

      <TouchableHighlight
        style={styles.button4}
        onPress={() => Alert.alert('ボタン4が押されました！')}
        activeOpacity={0.6}
        underlayColor="pink">
        <Text style={styles.fontStyle}>button4</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 40,
    marginTop: 100,
    backgroundColor: 'lightblue',
  },
  input: {
    fontSize: 40,
    marginTop: 100,
    textAlign: 'center',
    backgroundColor: 'lightgray',
  },
  button1: {
    backgroundColor: 'blue',
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
  },
  button4: {
    backgroundColor: 'tomato',
    padding: 20,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
  },
  fontStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
  },
});

export default Cat;

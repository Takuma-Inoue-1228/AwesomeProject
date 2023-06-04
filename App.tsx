import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

const Cat = () => {
  const name = 'taro';
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hello, I am...</Text>
      <TextInput style={styles.input} defaultValue="Name me!" />
      <Button
        title="Press me"
        onPress={() =>
          alert('デフォルトコンポーネントのボタンが押されました！')
        }
      />
      <TouchableHighlight
        style={styles.button4}
        onPress={() => console.log('press4')}
        onPress={() => alert('ボタン4が押されました！')}
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

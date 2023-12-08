import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class SpaceCraftScreen extends Component {
  render() {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'}}>
        <Text>Space Craft Screen</Text>
        </View>
    )
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

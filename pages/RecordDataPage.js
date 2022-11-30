import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Button } from "@react-native-material/core";
import { TextInput } from "@react-native-material/core";


export default function RecordData() {
    return (
    <View style={styles.container}>
        <Text>Enter Data</Text>
        {/* <Button title="go to home" style={{ alignSelf: "center", marginTop: 4 }} onPress={pressHandler}/> */}
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
});

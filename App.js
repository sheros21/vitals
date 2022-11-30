import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Button } from "@react-native-material/core";
import { TextInput } from "@react-native-material/core";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vital Tracker</Text>
      <StatusBar style="auto" />

      <TextInput variant="outlined" label="Username" style={{ margin: 2 }} />
      <TextInput variant="outlined" label="Password" style={{ margin: 2 }} />
      <Button title="login" style={{ alignSelf: "center", marginTop: 2 }}/>
      <Button title="create account" style={{ alignSelf: "center", marginTop: 4 }}/>


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

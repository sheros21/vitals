import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Button } from "@react-native-material/core";
import { TextInput } from "@react-native-material/core";


export default function RecordData() {
    const pressHandler = () => {
        console.log("inputted");

    }

    return (
    <View>
        <Text>Vital Tracker</Text>
        <View style={styles.container}>
            <Text>Enter Data</Text>

          
            <TextInput variant="outlined" label="Password" style={{ margin: 2 }} />
            <Button title="submit" style={{ alignSelf: "center", marginTop: 4 }} onPress={pressHandler}/>

        </View>
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

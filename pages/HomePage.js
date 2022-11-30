import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Button } from "@react-native-material/core";
import { TextInput } from "@react-native-material/core";


export default function HomePage(props) {

    const navigation = props.navigation;
    
    const pressHandler = () => {
        console.log(navigation.navigate);
        navigation.navigate('RecordData');
    }

    return (
    <View style={styles.container}>
        <Text>Vital Tracker</Text>
        <StatusBar style="auto" />

        <TextInput variant="outlined" label="Username" style={{ margin: 2 }} />
        <TextInput variant="outlined" label="Password" style={{ margin: 2 }} />
        <Button title="login" style={{ alignSelf: "center", marginTop: 2 }}/>
        <Button title="create account" style={{ alignSelf: "center", marginTop: 4 }} onPress={pressHandler}/>
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

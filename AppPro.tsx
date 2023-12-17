/* eslint-disable keyword-spacing */
/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    useColorScheme,
    Image,
    TextInput
} from 'react-native';

function AppPro(): JSX.Element{
    const isdarkMode = useColorScheme() === 'dark';

    return(
       <View style={styles.container}>
        <Text style={isdarkMode ? styles.whiteText : styles.darkText}>
            Hello WORLDDDD!!
        </Text>
        <Image 
        source={require('./assets/loginImage.png')}
        style={styles.image}
        />
        <Text>Username</Text>
        <TextInput
        style={styles.input}
        value={Text}/>
        <Text>Password</Text>
        <TextInput
        style={styles.input}
        value={Text}
        secureTextEntry={true}/>
        <Button
        title= 'Submit'
        color= 'purple'
        />
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    whiteText:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold',

    },
    darkText:{
        color:'#000',
        fontSize:22,
        fontWeight:'bold',
    },
    image:{
        width:500,
        height:350,
    },
    input: {
        height: 40,
        width:350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    }
);

export default AppPro;
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    
    const auth = FIREBASE_AUTH;

    const handleLogin = async() => {
         setLoading(true);
         try{
            const authResponse = await signInWithEmailAndPassword(auth,email,password);
            console.log(authResponse)
         } catch(error : any )
         {
            console.error(error);
            alert('Vazio incompleto, algo deu errado!!!' + error.message)
        
        } finally{
        
            setLoading(false);
         
        }
    }

    const handNewAccount = async() =>  {
        setLoading(true);
         try{
            const responseCreate = await createUserWithEmailAndPassword(auth,email,password);
            console.log(responseCreate)
         } catch(error : any )
         {
            console.error(error);
            alert('Sukuna retornou!!!' + error.message)

         } finally{

            setLoading(false);
         
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={ (text) => setEmail(text) }
                />
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                value={password}
                onChangeText={ (text) => setPassword(text) }
                secureTextEntry={true}
                />
            { loading ? 
                (<ActivityIndicator />) : 
                (<View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonClick} onPress={handleLogin}>
                        <Text style={styles.buttonText}> Lance seu vazio!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonClick} onPress={handNewAccount}>
                        <Text style={styles.buttonText}>junte-se ao Gojo!</Text>
                    </TouchableOpacity>
                    
                </View>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#4B0082',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonClick: {
        backgroundColor: '#2D3980',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flex: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default Login;
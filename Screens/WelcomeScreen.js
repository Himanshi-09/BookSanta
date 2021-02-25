import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';
export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state ={
            emailId:'',
            password:''
        }
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then((response) => {
         return Alert.alert('User added successfully')
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
        
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
         return Alert.alert('Successfully Login')
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
        
    }
    render(){
        return(
            <View style ={styles.container}>
             <View style = {styles.profileContainer}>
                 <Text style ={styles.title}> Book Santa </Text>
             </View>
             <View>
                 <TextInput style = {styles.loginBox}
                  placeholder = 'abc@example.com'
                  keyboardType = 'email.address'
                  onChangeText = {(text)=>{this.setState({
                      emailId:text
                  })}}>
                  </TextInput>
                  <TextInput style = {styles.loginBox}
                  placeholder = 'Enter password'
                  secureTextEntry = {true}
                  onChangeText = {(text)=>{this.setState({
                      password:text
                  })}}>
                  </TextInput>
                  <TouchableOpacity style = {styles.button}onPress={()=>{
                      this.userLogin(this.state.emailId,this.state.password)
                  }}>
                   <Text style = {styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.button}onPress={()=>{
                      this.userSignUp(this.state.emailId,this.state.password)
                  }}>
                   <Text style = {styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
             </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor :'#f8beb5',
    },
    loginBox:{
      width :300,
      height:40,
      borderBottomWidth:1.5,
      borderColor :'#ff8a65',
      fontSize:20,
      margin:10,
      paddingLeft:10,
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:65,
        fontWeight:300,
        paddingBottom:30,
        color:"#ff3d00",
    }
})
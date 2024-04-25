import React from 'react'
import styles from '../../constants/styleSignUp'
import LogoCignifi from '../../components/LogoCignifi'
import { SafeAreaView, View, Text, TextInput, Image, Pressable } from 'react-native'

export default function SignUp() {

  return (
    <SafeAreaView  style={styles.container}>
    <View style={styles.header}>
      <Pressable style={styles.navButton} onPress={ () => navigation.navigate('SignIn')}>
        <Image style={styles.goBack} source={require('../../assets/Arrow-Icon.png')}/>
      </Pressable>
      <LogoCignifi/>
    </View>

    <View style={styles.mainContent}>
      <Text style={styles.inputTitle}>Create your Account</Text>
      <br></br>
      <br></br>
      <TextInput style={styles.input}  placeholder='E-mail' keyboardType='email-address'/>
      <br></br>
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
      <br></br>
      <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry={true}/>
      <br></br>
      <br></br>
      <Pressable style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </Pressable>
      <br></br>
      <br></br>
      <br></br>
      <Text style={styles.signInOptionTitle}>- Or sign in with -</Text>
        <br></br>
      <View style={styles.signInOptionButtonBox}>
        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInOptionImage} source={require('../../assets/Google-Icon.png')}/>
        </Pressable>

        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInOptionImage} source={require('../../assets/Facebook-Icon.png')}/>
        </Pressable>

        <Pressable style={styles.signInOptionButton}>
          <Image style={styles.signInOptionImage} source={require('../../assets/Twitter-Icon.png')}/>
        </Pressable>
      </View>
    </View>
    </SafeAreaView>
  )
}
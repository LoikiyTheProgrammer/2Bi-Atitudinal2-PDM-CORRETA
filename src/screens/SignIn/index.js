import React from 'react'
import styles from '../../constants/styleSignIn'
import LogoCignifi from '../../components/LogoCignifi'
import { SafeAreaView, View, Text, TextInput, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation()

    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.header}>
                <LogoCignifi/>
            </View>

            <View style={styles.mainContent}>
                <Text style={styles.inputTitle}>Login to your Account</Text>
                <br></br>
                <br></br>
                <TextInput style={styles.input}  placeholder='E-mail' keyboardType='email-address'/>
                <br></br>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
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

                <Text style={styles.signInOptionText}>Don't have an account? <Pressable style={styles.navButton} onPress={ () => navigation.navigate('SignUp')}>Sign up</Pressable></Text>
            </View>
        </SafeAreaView>
    )
}
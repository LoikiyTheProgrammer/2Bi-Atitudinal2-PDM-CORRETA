import { Image } from 'react-native'
import cignifi from "../../assets/Logo-cignifi.png"
import styles from "../../constants/styleSignIn"

export default function LogoCignifi() {
    return (
        <Image style={styles.headerImage} source={cignifi}/>
    )
}
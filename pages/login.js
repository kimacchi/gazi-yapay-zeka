import React,{useState, useEffect, Component} from 'react';
import { TextField, OutlinedInput, InputAdornment, InputLabel, FormControl } from '@mui/material';
import styles from "../styles/login.module.scss"
import On from "../public/profile_show_button_pc.svg"
import Off from "../public/profile_hide_button_pc.svg"
import Face from "../public/face.svg"
import Particle from '../components/background/Particle';
import { styled } from '@mui/material/styles';
import CustomInput from '../components/custom-mui/CustomInput';



const LoginComponent =  ({onTypeChange= ()=>{}})=>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return(
        <div className={styles.login__wrapper}>
            <p className={styles.gradient}>Yapay Zeka Topluluğu</p>
            <div className={styles.login__wrapper_input_container}>
                <CustomInput 
                    onValueChange={(e)=>{setEmail(e)}}
                    type="text"
                    label="Email"
                />
                <CustomInput 
                    onValueChange={(e)=>{setPassword(e)}}
                    type="password"
                    label="Şifre"
                />
            </div>
            <div className={styles.utility_container}>
                <p>Hesabın yok mu? <strong>Kayıt ol.</strong></p>
                <p>Şifreni mi unuttun? <strong>Yardım al.</strong></p>
                <button
                    className={styles.button}
                >
                    <p>Giriş Yap</p>
                </button>
            </div>
        </div>
    )
}

const RegisterComponent =  ()=>{
    return(
        <div>
            
        </div>
    )
}

const Login = () => {

    const [login, setLogin] = useState(true);
  return (
    <div className={styles.container}>
        <Particle />
        <div className={styles.face}>
            <Face />
        </div>
        {
            login ? 
            <LoginComponent onTypeChange={()=>{setLogin(false)}} />
            :
            <RegisterComponent onTypeChange={()=>{setLogin(true)}} />
        }

    </div>
  )
}

export default Login
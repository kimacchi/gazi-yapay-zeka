import React,{useState, useEffect, Component} from 'react';
import { TextField, OutlinedInput, InputAdornment, InputLabel, FormControl } from '@mui/material';
import styles from "../styles/login.module.scss"
import On from "../public/profile_show_button_pc.svg"
import Off from "../public/profile_hide_button_pc.svg"
import Face from "../public/face.svg"
import FaceMobile from "../public/face_mobilesvg.svg"
import Particle from '../components/background/Particle';
import { styled } from '@mui/material/styles';
import CustomInput from '../components/custom-mui/CustomInput';
import dynamic from 'next/dynamic';
import NoSsr from '../components/NoSsr';
import Navbar from "../components/navbar/Navbar"


const LoginComponent =  ({onTypeChange= ()=>{}})=>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState(true);

    const typeHandler = ()=>{
        setType(false);
        onTypeChange(false);
    }
    return(
        <NoSsr>
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
                    <p onClick={typeHandler}>Hesabın yok mu? <strong>Kayıt ol.</strong></p>
                    <p>Şifreni mi unuttun? <strong>Yardım al.</strong></p>
                    <button
                        className={styles.button}
                    >
                        <p>Giriş Yap</p>
                    </button>
                </div>
            </div>
        </NoSsr>
    )
}

const RegisterComponent =  ({onTypeChange})=>{
    const [type, setType] = useState(false);

    const typeHandler = ()=>{
        setType(true);
        onTypeChange(true);
    }
    return(
        <NoSsr>
            <div className={styles.register__wrapper}>
                <p className={styles.gradient}>Yapay Zeka Topluluğu</p>
                <div className={styles.register__wrapper_input_container}>
                    <CustomInput 
                        onValueChange={(e)=>{setEmail(e)}}
                        type="text"
                        label="İsim Soyisim"
                    />
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
                    <CustomInput 
                        onValueChange={(e)=>{setEmail(e)}}
                        type="text"
                        label="Öğrenci no"
                    />
                </div>
                <div className={styles.utility_container}>
                    <p onClick={typeHandler}>Hesabın yok mu? <strong>Kayıt ol.</strong></p>
                    <button
                        className={styles.button}
                    >
                        <p>Kayıt Ol</p>
                    </button>
                </div>
            </div>
        </NoSsr>
    )
}

const Login = () => {
    const [width, setWidth] = useState(851)
    useEffect(()=>{
        if(typeof window !== "undefined"){
            setWidth(window.innerWidth);
        }
    },[])
    useEffect(() => {
        function handleResize() {
            if(typeof window !== "undefined"){
                setWidth(
                  window.innerWidth
                )
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
    })

    const [login, setLogin] = useState(true);
  return (
    <NoSsr>
        <div className={styles.container}>
            <Particle />
            <Navbar />
            <div className={styles.face}>
                {
                    width > 850 ?
                        <Face />
                        :
                        // <FaceMobile /> 
                        undefined
                }
            </div>
            {
                login ? 
                <LoginComponent onTypeChange={(e)=>{setLogin(e)}} />
                :
                <RegisterComponent onTypeChange={()=>{setLogin(true)}} />
            }

        </div>
    </NoSsr>
  )
}

export default Login
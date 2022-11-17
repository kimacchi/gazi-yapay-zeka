import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Particle from '../../components/background/Particle';
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/DynamicChange.module.scss"
import axios from 'axios';
import { Button } from '@mui/material';
import CustomInput from '../../components/custom-mui/CustomInput';
import {LoadingButton} from '@mui/lab';

const DynamicRoute = () => {
    const router = useRouter();
    const {pid} = router.query;

    const [processing, setProcessing] = useState(true);
    const [canProceed, setCanProceed] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        if(pid){
            axios.get("https://yzt-backend.vercel.app/resets/" + pid)
                .then(e=>{
                    if(new Date().getTime() - new Date(e.data.DateNow).getTime() > e.data.Expire){
                        setCanProceed(false);
                        setProcessing(false);
                    }else{
                        setEmail(e.data.UserEmail);
                        setCanProceed(true);
                        setProcessing(false);
                    }
                })
        }
    }, [pid])

    const [password, setPassword] = useState("");
    const [secondaryPassword, setSecondaryPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const changePassword = () => {
        if(password === secondaryPassword){
            setLoading(true);
            axios.post("https://yzt-backend.vercel.app/users/changePassword", {
                Email: email,
                Password: password
            }).then(e=>{
                setLoading(false);
                router.push("/login");
            }).catch(err=>{
                setLoading(false);
            })
        }else{
            alert("parolalar eşleşmiyor.");
            setLoading(false);
        }
    }

  return (
    <div className={styles.dynamic_route_wrapper}>
        {
            processing ?
            <div className={styles.overlay}>
                <span className={styles.loader}></span>
            </div>
            :
            canProceed ? 
                <div className={styles.change_password}>
                    <p>Yeni şifreni gir.</p>
                    <div className={styles.custom_input}>
                        <CustomInput 
                            type="password"
                            label="Şifre"
                            onValueChange={(e) => {
                                setPassword(e);
                            }}
                        />
                    </div>
                    <div className={styles.custom_input}>
                        <CustomInput 
                            type="password"
                            label="Şifreyi Tekrar Gir"
                            onValueChange={(e) => {
                                setSecondaryPassword(e);
                            }}
                        />
                    </div>
                    <LoadingButton 
                        variant="contained"
                        color="secondary"
                        disabled={password !== secondaryPassword || password === "" || secondaryPassword === ""}
                        className={styles.button}
                        onClick={changePassword}
                        loading={loading}
                    >
                        DEĞİŞTİR
                    </LoadingButton>
                </div>
                :
                <div className={styles.cant_proceed}>
                    <h2>Link zaman aşımına uğradı.</h2>
                    <Button
                        variant='contained'
                        color="secondary"
                        onClick={() => router.push("/")}
                    >
                        Gerİ dön.
                    </Button>
                </div>
        }
    </div>
  )
}

const Wrapper = () => {
    const [width, setWidth] = useState(851);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setWidth(window.innerWidth);
      }
    }, []);
    useEffect(() => {
      function handleResize() {
        if (typeof window !== "undefined") {
          setWidth(window.innerWidth);
        }
      }
      window.addEventListener("resize", handleResize);
      return (_) => {
        window.removeEventListener("resize", handleResize);
      };
    });
  
    const [login, setLogin] = useState(true);
    return (
        <div className={styles.container}>
            <Particle />
            <div style={{position: "absolute"}}>
                <Navbar />
            </div>
            <DynamicRoute />
        </div>
    );
}

export default Wrapper
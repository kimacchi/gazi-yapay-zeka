import React,{useState,useEffect} from 'react'
import Particle from '../components/background/Particle';
import styles from "../styles/ChangePassword.module.scss";
import Navbar from "../components/navbar/Navbar";
import axios from "axios"
import { Button, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      mode: "dark"
    }
})


const Nav = ()=>{
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
    return(
        <>
            <div style={width > 850 ? {position: "absolute"} : {}}>
                <Navbar />
            </div>
        </>
    )
}

const ChangePasswordLogin = ({setLogin, setAdmin, setToken}) => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axios.post(process.env.NEXT_PUBLIC_LOGIN, {
            Email: email,
            Password: password
        }).then(e => {
            const tempToken = e.data.token;
            console.log(e);
            axios.get(process.env.NEXT_PUBLIC_FIND_USER + e.data.id, {
                headers: {'Content-Type': 'application/json', "Authorization": tempToken}
            }).then(ele =>{
                if(ele.data.Type === "admin"){
                    setToken(tempToken);
                    setLogin(true);
                }else{
                    console.log("not ok")
                }
            }).catch(error =>{
                console.log(error);
            })
        })
    }


  return (
    <div className={styles.wrapper}>
        <ThemeProvider theme={theme}>
            <TextField 
                size="small"
                variant="outlined"
                label="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className={styles.text_field}
            />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
            <TextField 
                size="small"
                variant="outlined"
                label="password"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className={styles.text_field}
            />
        </ThemeProvider>
        <Button variant="outlined" onClick={login}>Giriş</Button>
    </div>
  )
}

const ChangePassword = ({token}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const change = () => {
        axios.post(process.env.NEXT_PUBLIC_CHANGE_PASSWORD , 
            {
                Email: email,
                Password: password,
                token: token
            }, 
            {
                headers: {'Content-Type': 'application/json', "Authorization": token}
            }
        ).then(e =>{
            console.log("changed");
            setEmail("");
            setPassword("");
        })
    }

  return (
    <div className={styles.wrapper}>
        <h1>Seçilen email adresinin şifresini değiştirin</h1>
        <ThemeProvider theme={theme}>
            <TextField 
                size="small"
                variant="outlined"
                label="hedef email"
                type="text"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className={styles.text_field}
            />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
            <TextField 
                size="small"
                variant="outlined"
                label="yeni şifre"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className={styles.text_field}
            />
        </ThemeProvider>
        <Button variant="outlined" onClick={change} >Değiştir</Button>
    </div>
  )
}

export const ChangePasswordWrapper = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [admin, setAdmin] = useState({});
    const [token, setToken] = useState("");
  return (
    <div>
        <Particle />
        <Nav />
        {
            loggedIn ? 
            <ChangePassword token={token} />
            :
            <ChangePasswordLogin setLogin={setLoggedIn} setAdmin={setAdmin} setToken={setToken} />
        }
    </div>
  )
}


export default ChangePasswordWrapper
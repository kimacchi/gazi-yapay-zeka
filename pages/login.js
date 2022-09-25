import React, { useState, useEffect, Component } from "react";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
  ThemeProvider,
  createTheme,
  Modal,
  Alert,
  AlertTitle
} from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/actions";
import styles from "../styles/login.module.scss";
import On from "../public/profile_show_button_pc.svg";
import Off from "../public/profile_hide_button_pc.svg";
import Face from "../public/face.svg";
import FaceMobile from "../public/face_mobilesvg.svg";
import Particle from "../components/background/Particle";
import { styled } from "@mui/material/styles";
import CustomInput from "../components/custom-mui/CustomInput";
import dynamic from "next/dynamic";
import NoSsr from "../components/NoSsr";
import Navbar from "../components/navbar/Navbar";


const darkTheme= createTheme({
  palette: {
      mode: "dark",
  },
});

const axios = require("axios");

const LoginComponent = ({ onTypeChange = () => {} }) => {
  const dispatch = useDispatch();
  const { setCurrentUser } = bindActionCreators(actionCreators, dispatch);

  
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(true);

  const typeHandler = () => {
    setType(false);
    onTypeChange(false);
  };

  const onLogin = () => {
    axios
      .post(process.env.NEXT_PUBLIC_LOGIN, {
        Email: email,
        Password: password,
      })
      .then((e) => {
        const token = e.data.token;
        axios.get(process.env.NEXT_PUBLIC_FIND_USER + e.data.id, {
          headers: {'Content-Type': 'application/json', "Authorization": token}
        }).then((ele)=>{
          setCurrentUser({...ele.data, token});
          router.push("/events");
        })
      });
  };

  return (
    <NoSsr>
      <div className={styles.login__wrapper}>
        <p className={styles.gradient}>Yapay Zeka Topluluğu</p>
        <div className={styles.login__wrapper_input_container}>
          <ThemeProvider theme={darkTheme}>
            <CustomInput
              onValueChange={(e) => {
                setEmail(e);
              }}
              type="text"
              label="Email"
            />
            <CustomInput
              onValueChange={(e) => {
                setPassword(e);
              }}
              type="password"
              label="Şifre"
            />
          </ThemeProvider>
        </div>
        <div className={styles.utility_container}>
          <p onClick={typeHandler}>
            Hesabın yok mu? <strong>Kayıt ol.</strong>
          </p>
          <p>
            Şifreni mi unuttun? <strong>Yardım al.</strong>
          </p>
          <button className={styles.button} onClick={onLogin}>
            <p>Giriş Yap</p>
          </button>
        </div>
      </div>
    </NoSsr>
  );
};

const RegisterComponent = ({ onTypeChange }) => {
  const dispatch = useDispatch();
  const { setCurrentUser } = bindActionCreators(actionCreators, dispatch);
  const router = useRouter();

  const [type, setType] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [schoolNo, setSchoolNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");

  const typeHandler = () => {
    setType(true);
    onTypeChange(true);
  };

  const [errorPopup, setErrorPopup] = useState(false);

  const onRegsiter = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
    if(re.test(String(email).toLowerCase())){
      axios
        .post(
          process.env.NEXT_PUBLIC_REGISTER,
          {
            Email: email.trim(),
            Password: password.trim(),
            Name: name.trim(),
            Type: "user",
            PhoneNo: phoneNo.trim(),
            SchoolNo: schoolNo.trim(),
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((e) => {
          axios
          .post(process.env.NEXT_PUBLIC_LOGIN, {
            Email: email,
            Password: password,
          })
          .then((e) => {
            const token = e.data.token;
            axios.get(process.env.NEXT_PUBLIC_FIND_USER + e.data.id, {
              headers: {'Content-Type': 'application/json', "Authorization": token}
            }).then((ele)=>{
              setCurrentUser({...ele.data, token});
              router.push("/events");
            })
          });
        });
    }else{
      setErrorPopup(true);
      setTimeout(()=>{
          setErrorPopup(false);
      }, 2000);
    }
  };

  return (
    <NoSsr>
      <Modal
        open={errorPopup}
        onClose={()=>{setErrorPopup(false)}}
      >
        <div
            style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}
        >
            <Alert severity="error" style={{width: "28.5vw"}}>
                <AlertTitle>Hata!</AlertTitle>
                Bilgilerinizi kontrol edin veya yönetimle iletişime geçin.
            </Alert>
        </div>
      </Modal>
      <div className={styles.register__wrapper}>
        <p className={styles.gradient}>Yapay Zeka Topluluğu</p>
        <div className={styles.register__wrapper_input_container}>
          <CustomInput
            onValueChange={(e) => {
              setName(e);
            }}
            type="text"
            label="İsim Soyisim"
          />
          <CustomInput
            onValueChange={(e) => {
              setEmail(e);
            }}
            type="email"
            label="Email"
          />
          <CustomInput
            onValueChange={(e) => {
              setPassword(e);
            }}
            type="password"
            label="Şifre"
          />
          <CustomInput
            onValueChange={(e) => {
              setSchoolNo(e);
            }}
            type="number"
            label="Öğrenci no"
          />
          <CustomInput
            onValueChange={(e) => {
              setPhoneNo(e);
            }}
            type="number"
            label="Telefon no"
          />
        </div>
        <div className={styles.utility_container}>
          <p onClick={typeHandler}>
            Hesabın var mı? <strong>Giriş yap.</strong>
          </p>
          <button className={styles.button} onClick={onRegsiter}>
            <p>Kayıt Ol</p>
          </button>
        </div>
      </div>
    </NoSsr>
  );
};

const Login = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const router = useRouter();

  useEffect(() => {
    if (currentUser.userId) {
      router.push("/events");
    }
  }, []);

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
    <NoSsr>
      <div className={styles.container}>
        <Particle />
        <Navbar />
        <div className={styles.face}>
          {width > 850 ? (
            <Face />
          ) : // <FaceMobile />
          undefined}
        </div>
        {login ? (
          <LoginComponent
            onTypeChange={(e) => {
              setLogin(e);
            }}
          />
        ) : (
          <RegisterComponent
            onTypeChange={() => {
              setLogin(true);
            }}
          />
        )}
      </div>
    </NoSsr>
  );
};

export default Login;

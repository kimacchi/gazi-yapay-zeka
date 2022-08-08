import React, {useState,useEffect} from 'react'
import styles from "../styles/NewPost.module.scss";
import Navbar from "../components/navbar/Navbar";
import MyEditor from '../components/Editor';
import Particle from "../components/background/Particle";
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

const PostEditor = ()=>{
    const [header, setHeader] = useState("");
    const [category, setCategory] = useState("");
    const [sum, setSum] = useState("");
    const [content, setContent] = useState("");
    return(
        <div className={styles.new_post_wrapper}>
            <h1>Yeni Haber Oluştur</h1>
            <ThemeProvider theme={theme}>
                <TextField 
                    variant="outlined" 
                    label="Haber Başlığı" 
                    size="small" 
                    value={header}
                    onChange={(e)=>{setHeader(e.target.value)}}
                    className={styles.text_field}
                />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <TextField 
                    variant="outlined" 
                    label="Haber Kategorisi" 
                    size="small" 
                    value={category}
                    onChange={(e)=>{setCategory(e.target.value)}}
                    className={styles.text_field}
                />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <TextField 
                    variant="outlined" 
                    label="Haber Özeti" 
                    size="small" 
                    value={sum}
                    onChange={(e)=>{setSum(e.target.value)}}
                    multiline 
                    rows={4}
                    className={styles.text_field}
                />
            </ThemeProvider>
            <MyEditor setState={(e)=>{setContent(e)}} />
            <Button variant="outlined" className={styles.button} >HABERİ EKLE</Button>
        </div>
    )
}

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


const NewPost = () => {
   
  return (
    <div className={styles.container}>
        <Particle />
        <Nav />
        <div className={styles.post_positioner}>
            <PostEditor />
        </div>
    </div>
  )
}

export default NewPost
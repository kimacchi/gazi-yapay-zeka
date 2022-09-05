import React, {useState,useEffect} from 'react'
import styles from "../styles/NewPost.module.scss";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from "../components/navbar/Navbar";
import MyEditor from '../components/Editor';
import Particle from "../components/background/Particle";
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import axios from 'axios';


const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

const PostEditor = ()=>{

    const currentUser = useSelector((state)=>state.currentUser);
    const router = useRouter();


    const [header, setHeader] = useState("");
    const [category, setCategory] = useState("");
    const [sum, setSum] = useState("");
    const [content, setContent] = useState("");
    const [imgLink, setImgLink] = useState("");

    const addNewNews = () => {
        axios.post(process.env.NEXT_PUBLIC_ADD_NEWS, {
            "Title": header,
            "Category": [category],
            "Summary": sum,
            "Description": `${content}`,
            "imgURL": imgLink
        },{
            "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
        }).then(() => {
            router.push("/");
        })
    }
    console.log(currentUser.token);
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
                    label="Haber Görsel Linki" 
                    size="small" 
                    value={imgLink}
                    onChange={(e)=>{setImgLink(e.target.value)}}
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
            <Button variant="outlined" className={styles.button} onClick={addNewNews}>HABERİ EKLE</Button>
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
    const currentUser = useSelector((state)=>state.currentUser);
    const router = useRouter();
    useEffect(()=>{
       if(!currentUser.userId){
        router.push("/login");
       }
    }, [])


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
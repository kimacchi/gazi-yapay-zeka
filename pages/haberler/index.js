import Particle from "../../components/background/Particle";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/News.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image';
import Link from 'next/link';
import Down from "../../public/down.svg";
import Right from "../../public/right.svg";
import RightWhite from "../../public/right_white.svg";
import Linkedin from "../../public/linkedin.svg";
import Insta from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import News from "../../components/news/News";


const AllNews = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_GET_NEWS).then((e) => {
            setAllNews(e.data.reverse());
        })
    }, [])

    return(
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1>
                    Tüm Haberler
                </h1>
                <p>Sizin için seçilmiş son yayımlanan tüm haberler.</p>
            </div>
            <div className={styles.list}>
                {
                    allNews !== undefined ? 
                        allNews.map((e)=>{
                            return(
                                <div key={e._id}>
                                    <News 
                                        data={e}
                                    />
                                </div>
                            )
                        })
                    :
                        undefined
                }
            </div>
        </div>
    )
}

const Index = () => {
  return (
    <div className={styles.container}>
        <Particle />
        <div style={{position: "absolute"}}>
            <Navbar />
        </div>
        <AllNews />
    </div>
  )
}

export default Index
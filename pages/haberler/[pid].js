import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import axios from "axios"
import Particle from "../../components/background/Particle";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/SingleNews.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import Down from "../../public/down.svg";
import Right from "../../public/right.svg";
import RightWhite from "../../public/right_white.svg";
import Linkedin from "../../public/linkedin.svg";
import Insta from "../../public/instagram.svg";
import Youtube from "../../public/youtube.svg";

const SingleNews = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [news, setNews] = useState({});

    useEffect(() => {
        if (router.isReady) {
            const {pid} = router.query;
            setQuery(pid);
        } 
    }, [router.isReady]);

    useEffect(() => {
        if(query){
            axios.get(process.env.NEXT_PUBLIC_FIND_NEWS + query).then((e) => {
                setNews(e.data);
                console.log(e.data);
            })
        }
    }, [query])


  return (
    <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
            <div className={styles.image}>
                {
                    news !== undefined ? 
                        <Image 
                            src={news.imgURL}
                            alt={"img"}
                            layout="fill"
                        />
                        :
                        undefined
                }
            </div>
            <p className={styles.category}>
                {news !== undefined ? news.Category : "Category"}
            </p>

            <p className={styles.title}>
                {news !== undefined ? news.Title : "Title"}
            </p>
            <div 
                dangerouslySetInnerHTML={{__html: news !== undefined ? news.Description : "<p></p>"}}
                className={styles.content}
            >
            </div>
        </div>
    </div>
  )
}


export const Wrapper = () => {
  return (
    <div className={styles.container}>
        <Particle />
        <div style={{position: "absolute"}}>
            <Navbar />
        </div>
        <SingleNews />
        <div className={styles.footer_section__wrapper}>
          <div className={styles.footer_section__wrapper_links}>
            {/* <Link href="">
              <a target={"_blank"}>
                <Facebook />
              </a>
            </Link> */}
            <Link href="https://www.instagram.com/gaziyapayzeka/" target="_blank">
              <a target={"_blank"}>
                <Insta />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/gazi-%C3%BCniversitesi-yapay-zeka-toplulu%C4%9Fu/?originalSubdomain=tr">
              <a target={"_blank"}>
                <Linkedin />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCpxJfBA_FnleFeA0WYvereA">
              <a target={"_blank"}>
                <Youtube />
              </a>
            </Link>
          </div>
          <p className={styles.footer_section__wrapper_creators}>
            Made by
            <br />
            <br />
            <Link href="https://www.linkedin.com/in/ahmet-erg%C3%BCl-547b25224/" className={styles.link}><a><strong>Ahmet Ergül</strong></a></Link>
            <br />
            &
            <br />
            <br />
            <Link href="https://www.linkedin.com/in/beriscen/" className={styles.link}><a><strong>Barışcan Nazlıcan</strong></a></Link>
          </p>
          <p className={styles.footer_section__wrapper_rights}>
            © Gazi Üniversitesi. Tüm hakları saklıdır.
          </p>
        </div>
    </div>
  )
}


export default Wrapper
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useRouter} from "next/router"
import Link from "next/link";
import Down from "../public/down.svg";
import Right from "../public/right.svg";
import RightWhite from "../public/right_white.svg";
import Linkedin from "../public/linkedin.svg";
import Insta from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Particle from '../components/background/Particle';
import Navbar from "../components/navbar/Navbar"

const theme = createTheme({
  palette: {
    mode: "dark"
  }
})


export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Gazi Yapay Zeka</title>
        <meta name="Gazi Yapay Zeka" content="Gazi Yapay Zeka Topluluğu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Particle />
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.first_section__wrapper}>
          <p className={styles.first_section__wrapper_yellow}>
            GAZİ ÜNİVERSİTESİ
          </p>
          <p className={styles.first_section__wrapper_header}>
            Yapay Zeka Topluluğu
          </p>
          <p className={styles.first_section__wrapper_subtext}>
            Sit amet purus gravida quis turpis hac tincidunt praesent semper
          </p>
          <button
            className={styles.first_section__wrapper_button}
            onClick={()=>{router.push("/#haberler")}}
          >
            <p>İNCELEYİN</p>
            <Down />
          </button>
        </div>
        <div className={styles.second_section__wrapper} id="haberler">
          <div className={styles.second_section__wrapper_post__1}>
            <div className={styles.second_section__wrapper_post_information}>
              <p className={styles.second_section__wrapper_post_information_category}>
                HABER KONUSU
              </p>
              <p className={styles.second_section__wrapper_post_information_header}>
                Haber Başlığı
              </p>
              <p className={styles.second_section__wrapper_post_information_sum}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id aenean sit vestibulum magna. Eget aliquet odio magna lacus id augue mauris vitae eu.
              </p>
              <button
                className={styles.second_section__wrapper_post_button}
              >
                <p>DEVAMI</p>
                <Right />
              </button>
            </div>
            <div className={styles.second_section__wrapper_post_image}>
              
            </div>
          </div>
          <div className={styles.second_section__wrapper_post__2}>
            <div className={styles.second_section__wrapper_post_information}>
              <p className={styles.second_section__wrapper_post_information_category}>
                HABER KONUSU
              </p>
              <p className={styles.second_section__wrapper_post_information_header}>
                Haber Başlığı
              </p>
              <p className={styles.second_section__wrapper_post_information_sum}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id aenean sit vestibulum magna. Eget aliquet odio magna lacus id augue mauris vitae eu.
              </p>
              <button
                className={styles.second_section__wrapper_post_button}
              >
                <p>DEVAMI</p>
                <Right />
              </button>
            </div>
            <div className={styles.second_section__wrapper_post_image}>
              
            </div>
          </div>
          <div className={styles.second_section__wrapper_post__1}>
            <div className={styles.second_section__wrapper_post_information}>
              <p className={styles.second_section__wrapper_post_information_category}>
                HABER KONUSU
              </p>
              <p className={styles.second_section__wrapper_post_information_header}>
                Haber Başlığı
              </p>
              <p className={styles.second_section__wrapper_post_information_sum}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id aenean sit vestibulum magna. Eget aliquet odio magna lacus id augue mauris vitae eu.
              </p>
              <button
                className={styles.second_section__wrapper_post_button}
              >
                <p>DEVAMI</p>
                <Right />
              </button>
            </div>
            <div className={styles.second_section__wrapper_post_image}>
              
            </div>
          </div>
          <button
            className={styles.second_section__wrapper_button}
          >
            <p>TÜM HABERLER</p>
            <RightWhite />
          </button>
        </div>

        <div className={styles.third_section__wrapper}>
          <p className={styles.third_section__wrapper_header}>
            İletişime geçin
          </p>
          <p className={styles.third_section__wrapper_sub}>
            Aklınıza takılan tüm soruları cevaplamak için buradayız.
          </p>
          <ThemeProvider theme={theme}>
            <TextField 
              id="outlined-basic" 
              label="Eposta" 
              variant="outlined" 
              size="small"
              className={styles.third_section__wrapper_email}
            />
            <TextField
              id="outlined-multiline-static"
              label="Mesajınız"
              placeholder="Mesajınız"
              size="small"
              multiline
              rows={8}
              className={styles.third_section__wrapper_message}
            />
          </ThemeProvider>
          <button
            className={styles.third_section__wrapper_button}
          >
            <p>Gönder</p>
            <RightWhite />
          </button>
        </div>

        <div className={styles.short_border}>
        </div>

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
            <Link href="">
              <a target={"_blank"}>
                <Twitter />
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

      </main>

    </div>
  )
}

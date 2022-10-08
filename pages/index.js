import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { TextField, FormControl, FormGroup } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useRouter} from "next/router"
import Link from "next/link";
import Down from "../public/down.svg";
import Right from "../public/right.svg";
import RightWhite from "../public/right_white.svg";
import Linkedin from "../public/linkedin.svg";
import Insta from "../public/instagram.svg";
import Youtube from "../public/youtube.svg";
import Particle from '../components/background/Particle';
import Navbar from "../components/navbar/Navbar"
import Card from '../components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import emailjs from "@emailjs/browser";
import modadil from "../public/images/sponsors/modadil.png"
import isindaylight from "../public/images/sponsors/isindaylight.png"

const theme = createTheme({
  palette: {
    mode: "dark"
  }
})


export default function Home() {

  const [threeNews, setThreeNews] = useState([]);
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_FIND_THREE_NEWS).then((e) => {
      setThreeNews(e.data);
      console.log(e.data)
    })
  },[])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_service_id, process.env.NEXT_PUBLIC_template_id, e.target, process.env.NEXT_PUBLIC_user_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Gazi Yapay Zeka</title>
        <meta name="title" content="Gazi Yapay Zeka" />
        <meta name="description" content="Gazi Üniversitesi Yapay Zeka Topluluğu Websitesi" />
        <meta name="keywords" content="gazi üniversitesi,gazi üniversitesi mühendislik fakültesi,gazi üniversitesi topluluk,yapay zeka,yapay zeka topluluğu,gazi üniversitesi yapay zeka,gazi üniversitesi yapay zeka topluluğu,gazi yapay zeka,gazi yapay zeka topluluğu,gazi ai,gazi ai topluluğu,gazi artificial intelligence,gazi artificial intelligence topluluğu,gazi artificial intelligence society,yapay zekâ,gazi üniversitesi,gazi,gazi üni,topluluk,makine öğrenmesi,yapay zeka ve makine öğrenmesi,gazi yapay zeka yönetim sistemi,gazi yapay zeka login,yapay zeka login,yapay zeka haberleri,yapay zeka yönetim sistemi" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="2 days" />
        <meta name="google-site-verification" content="76-Wt0MUo1T-iXeAZNbhS_BdxClH-jHAZI4_y48yuds" />
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
            {'"Daha zeki bir gelecek uğruna Gazi AI !"'}
          </p>
          <button
            className={styles.first_section__wrapper_button}
            onClick={()=>{router.push("/#haberler")}}
          >
            <p>İNCELEYİN</p>
            <Down />
          </button>
        </div>
        {/* {threeNews === undefined ? 
        
        } */}
        <div className={styles.second_section__wrapper} id="haberler">
          <div className={styles.second_section__wrapper_post__1}>
            <div className={styles.second_section__wrapper_post_information}>
              <p className={styles.second_section__wrapper_post_information_category}>
                {threeNews[2] !== undefined ? threeNews[2].Category[0] : ""}
              </p>
              <p className={styles.second_section__wrapper_post_information_header}>
                {threeNews[2] !== undefined ? threeNews[2].Title : ""}
              </p>
              <p className={styles.second_section__wrapper_post_information_sum}>
                {threeNews[2] !== undefined ? threeNews[2].Summary : ""}
              </p>
              <button
                className={styles.second_section__wrapper_post_button}
                onClick={() => {
                  if(threeNews[2] !== undefined){
                    router.push("/haberler/" + threeNews[2]._id);
                  }
                }}
              >
                <p>DEVAMI</p>
                <Right />
              </button>
            </div>
            <div className={styles.second_section__wrapper_post_image}>
              {
                threeNews[2] !== undefined ?
                  <Image  
                    src={threeNews[2].imgURL}
                    alt="news image"
                    layout='fill'
                  />
                  :
                  undefined
              }
            </div>
          </div>
          <div className={styles.second_section__wrapper_post__2}>
            <div className={styles.second_section__wrapper_post_information}>
              <p className={styles.second_section__wrapper_post_information_category}>
                {threeNews[1] !== undefined ? threeNews[1].Category[0] : ""}
              </p>
              <p className={styles.second_section__wrapper_post_information_header}>
                {threeNews[1] !== undefined ? threeNews[1].Title : ""}
              </p>
              <p className={styles.second_section__wrapper_post_information_sum}>
                {threeNews[1] !== undefined ? threeNews[1].Summary : ""}
              </p>
              <button
                className={styles.second_section__wrapper_post_button}
                onClick={() => {
                  if(threeNews[1] !== undefined){
                    router.push("/haberler/" + threeNews[1]._id);
                  }
                }}
              >
                <p>DEVAMI</p>
                <Right />
              </button>
            </div>
            <div className={styles.second_section__wrapper_post_image}>
              {
                threeNews[1] !== undefined ?
                  <Image  
                    src={threeNews[1].imgURL}
                    alt="news image"
                    layout='fill'
                  />
                  :
                  undefined
              }
            </div>
          </div>
          <div className={styles.second_section__wrapper_post__1}>
            <div className={styles.second_section__wrapper_post_information}>
              <p className={styles.second_section__wrapper_post_information_category}>
                {threeNews[0] !== undefined ? threeNews[0].Category[0] : ""}
              </p>
              <p className={styles.second_section__wrapper_post_information_header}>
                {threeNews[0] !== undefined ? threeNews[0].Title : ""}
              </p>
              <p className={styles.second_section__wrapper_post_information_sum}>
                {threeNews[0] !== undefined ? threeNews[0].Summary : ""}
              </p>
              <button
                className={styles.second_section__wrapper_post_button}
                onClick={() => {
                  if(threeNews[0] !== undefined){
                    router.push("/haberler/" + threeNews[0]._id);
                  }
                }}
              >
                <p>DEVAMI</p>
                <Right />
              </button>
            </div>
            <div className={styles.second_section__wrapper_post_image}>
              {
                threeNews[0] !== undefined ?
                  <Image  
                    src={threeNews[0].imgURL}
                    alt="news image"
                    layout='fill'
                  />
                  :
                  undefined
              }
            </div>
          </div>
          <button
            className={styles.second_section__wrapper_button}
            onClick={() => {
                router.push("/haberler");
            }}
          >
            <p>TÜM HABERLER</p>
            <RightWhite />
          </button>
        </div>

        <div className={styles.admin_card_section}>
          <div className={styles.admin_card_section_kurucu}>
            <h1>Kurucular</h1>
            <div className={styles.cards}>
              <Card 
                admin={
                  {
                    name:"Gürkan Hasan Karaman", 
                    image:"gurkanhasankaraman", 
                    linkedin: "https://www.linkedin.com/in/g%C3%BCrkan-hasan-karaman-96568b172/", 
                    job: "Kurucu Başkan",
                    sum: "Gürkan Hasan Karaman 2017 yılında Gazi Üniversitesi Bilgisayar Mühendisliğini kazandı ve 2022 yılında bölümü bitirdi. Kendisi IEEE topluluğunda yönetim kurulu başkan yardımcılığı ve komite başkanlığı yaptı. Getir şirketinin kısa yol algoritmasını staj süresinde tasarladı. 2022 yılında da Gazi Üniversitesi Yapay Zeka Topluluğunun kuruculardan oldu. Şu anda Amerika'da Amazon şirketinde çalışıyor."
                  }}
                sum={true}
              />
              <Card 
                admin={
                  {
                    name:"Feyyaz Kavun", 
                    image:"feyyazkavun", 
                    linkedin: "https://www.linkedin.com/in/feyyaz-kavun-39a387172/", 
                    job: "Kurucu Başkan Yardımcısı",
                    sum: "Feyyaz Kavun 2017 yılında Gazi Üniversitesi Bilgisayar Mühendisliğini kazandı ve 2022 yılında bölümü bitirdi. Kendisi IEEE topluluğunda proje koordinatörlüğü görevini üslendi. Gazi MST Roket Takımı ve GAZİ HORİZON TEKNOLOJİ TAKIMI  ile teknofeste katıldı. Aynı zamanda BiSoft Bilgi Teknolojileri şirketinde stajını tamamladı ve SimTek şirketinde aday mühendislik görevinde bulundu. 2022 yılında da Gazi Üniversitesi Yapay Zeka Topluluğunun kuruculardan oldu."
                  }}
                sum={true}
              />
              <Card 
                admin={
                  {
                    name:"Orhan Kaplan", 
                    image:"orhankaplan", 
                    linkedin: "https://www.linkedin.com/in/orhan-kaplan-874061173/", 
                    job: "Kurucu Başkan Yardımcısı",
                    sum: "Orhan Kaplan 2017 yılında Gazi Üniversitesi Bilgisayar Mühendisliğini kazandı ve 2022 yılında bölümü bitirdi. Kendisi IEEE topluluğunda proje sorumluluğu ve öğrenci mentorlüğü görevlerini üslendi. Rakort Information Technologies şirketinde stajını tamamladı. 2022 yılında da Gazi Üniversitesi Yapay Zeka Topluluğunun kuruculardan oldu."
                  }}
                sum={true}
              />
              <Card 
                admin={
                  {
                    name:"Alican Sucu", 
                    image:"alicansucu", 
                    linkedin: "https://www.linkedin.com/in/alican-sucu-a74881171/", 
                    job: "Kurucu Genel Sekreter",
                    sum: "Alican Sucu 2017 yılında Gazi Üniversitesi Bilgisayar Mühendisliğini kazandı ve 2022 yılında bilgisayar mühendisliği bölümünü hem bölüm 1.si olarak hem de fakülte 1.si olarak bitirdi. Rakort Information Technologies ve Havelsan gibi sektörün önde gelen şirketlerinde stajını tamamladı. 2022 yılında da Gazi Üniversitesi Yapay Zeka Topluluğunun kuruculardan oldu."
                  }}
                sum={true}
              />
            </div>
          </div>
          <div className={styles.admin_card_section_yonetici}>
            <h1>Yönetim</h1>
            <div className={styles.cards}>
              <Card 
                admin={
                  {
                    name:"Dilara Çelik", 
                    image:"dilaracelik", 
                    linkedin: "https://www.linkedin.com/in/dilara-%C3%A7elik-93a1191b4/", 
                    job: "Yönetim Kurulu Başkanı",
                    sum: ""
                  }}
              />
              <Card 
                admin={
                  {
                    name:"Ümitcan Zanbak", 
                    image:"umitcanzanbak", 
                    linkedin: "https://www.linkedin.com/in/%C3%BCmitcan-zanbak-0745a11b3/", 
                    job: "İç İlişkilerden Sorumlu Başkan Yardımcısı",
                    sum: ""
                  }}
              />
              <Card 
                admin={
                  {
                    name:"Yakup Can Özdemir", 
                    image:"yakupcanozdemir", 
                    linkedin: "https://www.linkedin.com/in/yakup-%C3%B6zdemir-ab9216224/", 
                    job: "Dış İlişkilerden Sorumlu Başkan Yardımcısı",
                    sum: ""
                  }}
              />
              <Card 
                admin={
                  {
                    name:"Kürşat Erdoğan", 
                    image:"kursaterdogan", 
                    linkedin: "https://www.linkedin.com/in/k%C3%BCr%C5%9Fat-erdo%C4%9Fan-668a20235/", 
                    job: "Genel Sekreter",
                    sum: ""
                  }}
              />
            </div>
          </div>
          <div className={styles.admin_card_section_yetkili}>
            <h1>İdari Kurul</h1>
            <div className={styles.cards}>
              <div className={styles.first_cards}>
                <Card 
                  admin={
                    {
                      name:"Mert Aydoğan", 
                      image:"mertaydogan", 
                      linkedin: "https://www.linkedin.com/in/mert-aydo%C4%9Fan-2a42a4213/", 
                      job: "Makine Öğrenmesi Komite Başkanı",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Ümit Emre İlhan", 
                      image:"umitemreilhan", 
                      linkedin: "https://www.linkedin.com/in/%C3%BCmit-emre-ilhan-791b93209/", 
                      job: "Makine Öğrenmesi Komite Başkan Yardımcısı",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Ebru Nur Uslu", 
                      image:"ebrunuruslu", 
                      linkedin: "https://www.linkedin.com/in/ebru-nur-u-a60163210/", 
                      job: "Makine Öğrenmesi Komitesi Proje Sorumlusu",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Simge Arslan", 
                      image:"simgearslan", 
                      linkedin: "https://www.linkedin.com/in/simge-arslan-118947240/", 
                      job: "Makine Öğrenmesi Komitesi Proje Sorumlusu",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Buğra Burak Başer", 
                      image:"bugraburakbaser", 
                      linkedin: "https://www.linkedin.com/in/bu%C4%9Fra-burak-ba%C5%9Fer-679b0523b/", 
                      job: "Makine Öğrenmesi Komitesi Sosyal Medya Sorumlusu",
                      sum: ""
                    }}
                />
              </div>
              
              <div className={styles.second_cards}>
                <Card 
                  admin={
                    {
                      name:"Kubilay Küçük", 
                      image:"kubilaykucuk", 
                      linkedin: "https://www.linkedin.com/in/kubilay-k%C3%BC%C3%A7%C3%BCk-160689225/", 
                      job: "Derin Öğrenme Komitesi Başkanı",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Yusuf Erkan", 
                      image:"yusuferkan", 
                      linkedin: "https://www.linkedin.com/in/yusuf-erkan-645348241/", 
                      job: "Derin Öğrenme Komitesi Başkan Yardımcısı",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Mehmet Murat Köse", 
                      image:"mehmetmuratkose", 
                      linkedin: "https://www.linkedin.com/in/mehmet-murat-kose/", 
                      job: "Derin Öğrenme Komitesi Proje Sorumlusu",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Ahmet Ergül", 
                      image:"ahmetergul", 
                      linkedin: "https://www.linkedin.com/in/ahmet-erg%C3%BCl-547b25224/", 
                      job: "Derin Öğrenme Komitesi Proje Sorumlusu",
                      sum: ""
                    }}
                />
                <Card 
                  admin={
                    {
                      name:"Bahadır Gökdemir", 
                      image:"bahadirgokdemir", 
                      linkedin: "/", 
                      job: "Derin Öğrenme Komitesi Sosyal Medya Sorumlusu",
                      sum: ""
                    }}
                />
                
                
                {/* <div className={styles.aligner}></div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.sponsors}
        >
          <h1>SPONSORLARIMIZ</h1>
          <div
            className={styles.cluster}
          >
            <a
              target="_blank"
              href={`https://www.isinaydinlatma.com.tr/`}
              rel="noopener noreferrer"
            >
              <div
                className={`${styles.sponsor} ${styles.silver}`}
              >
                  <Image 
                    // layout="fill"
                    objectFit="cover"
                    alt="sponsor"
                    src={isindaylight}
                    className={styles.img}
                  />
              </div>
            </a>
            <a
              target="_blank"
              href={`https://www.modadil.com/`}
              rel="noopener noreferrer"
            >
              <div
                className={styles.sponsor}
              >
                  <Image 
                    // layout="fill"
                    objectFit="cover"
                    alt="sponsor"
                    src={modadil}
                    className={styles.img}
                  />
              </div>
            </a>
            
          </div>
        </div>

        <div className={styles.third_section__wrapper}>
          <p className={styles.third_section__wrapper_header}>
            İletişime geçin
          </p>
          <p className={styles.third_section__wrapper_sub}>
            Aklınıza takılan tüm soruları cevaplamak için buradayız.
          </p>
          <ThemeProvider theme={theme}>
            <form onSubmit={sendEmail}>
            <FormGroup style={{alignItems: "center"}}>
              <TextField 
                id="outlined-basic" 
                label="Eposta" 
                variant="outlined" 
                size="small"
                type="email"
                name="email"
                className={styles.third_section__wrapper_email}
              />
              <TextField
                id="outlined-multiline-static"
                label="Mesajınız"
                placeholder="Mesajınız"
                size="small"
                multiline
                type="text"
                name="message"
                rows={8}
                className={styles.third_section__wrapper_message}
              />
              <button
                className={styles.third_section__wrapper_button}
                type="submit"
              >
                <p>Gönder</p>
                <RightWhite />
              </button>
            </FormGroup>
            </form>
          </ThemeProvider>
        </div>

        <div className={styles.short_border}>
        </div>

        <div className={styles.footer_section__wrapper}>
          <div className={styles.footer_section__wrapper_links}>
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

      </main>

    </div>
  )
}

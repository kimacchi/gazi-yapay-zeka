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
import Card from '../components/Card';

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
                    name:"Samet Sarper Dinç", 
                    image:"sametsarperdinc", 
                    linkedin: "https://www.linkedin.com/in/samet-sarper-din%C3%A7-7a8677228/", 
                    job: "Derin Öğrenme Komitesi Proje Sorumlusu",
                    sum: ""
                  }}
              />
            </div>
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

import Head from "next/head";
import styles from "../styles/Carousel.module.scss";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { v4 } from "uuid";
import Card from "../components/Card";
import Navbar from "../components/navbar/Navbar";

// storing the images in an array for convenience.

const denetim = [
  {
    name: "Dilara Çelik",
    linkedin: "https://www.linkedin.com/in/dilara-%C3%A7elik-93a1191b4/",
    job: "Denetim Kurulu Üyesi",
    sum: "",
    image: "dilaracelik",
  },
  {
    name: "Ümitcan Zanbak",
    image: "umitcanzanbak",
    linkedin: "https://www.linkedin.com/in/%C3%BCmitcan-zanbak-0745a11b3/",
    job: "Denetim Kurulu Üyesi",
    sum: "",
  },
  
  {
    name: "Kürşat Erdoğan",
    image: "kursaterdogan",
    linkedin:
      "https://www.linkedin.com/in/k%C3%BCr%C5%9Fat-erdo%C4%9Fan-668a20235/",
    job: "Denetim Kurulu Üyesi",
    sum: "",
  },
  {
    name: "Bahadır Gökdemir",
    image: "bahadirgokdemir",
    linkedin:
      "https://www.linkedin.com/in/bahad%C4%B1r-g%C3%B6kdemir-160b981b3/",
    job: "Denetim Kurulu Üyesi",
    sum: "",
  },
]

const yonetim = [
  {
    name: "Yakup Can Özdemir",
    image: "yakupcanozdemir",
    linkedin: "https://www.linkedin.com/in/yakup-%C3%B6zdemir-ab9216224/",
    job: "Yönetim Kurulu Başkanı",
    sum: "",
  },
  {
    name: "Buğra Burak Başer",
    image: "bugraburakbaser",
    linkedin:
      "https://www.linkedin.com/in/bu%C4%9Fra-burak-ba%C5%9Fer-679b0523b/",
    job: "İç İşlerden Sorumlu Başkan Yardımcısı",
    sum: "",
  },
  {
    name: "Nimet Öztürk",
    image: "nimetozturk",
    linkedin: "https://www.linkedin.com/in/nimet-%C3%B6zt%C3%BCrk-520631231",
    job: "Dış İşlerden Sorumlu Başkan Yardımcısı",
    sum: "",
  },
  {
    name: "İlyas Yakup Pekgüç",
    image: "ilyasyakuppekguc",
    linkedin:
      "https://www.linkedin.com/in/ilyas-yakup-pekg%C3%BC%C3%A7-283647223/",
    job: "Eğitim ve Projelerden Sorumlu Başkan Yardımcısı",
    sum: "",
  },
  {
    name: "Ömer Erkan",
    image: "omererkan",
    linkedin: "https://www.linkedin.com/in/%C3%B6mer-erkan-50a805218",
    job: "Genel Sekreter ve Finans Sorumlusu",
    sum: "",
  },
];

const egitim = [
  {
    name: "Reyyan Temel",
    image: "reyyantemel",
    linkedin: "https://www.linkedin.com/in/reyyan-temel-845258219",
    job: "Eğitim ve Proje Komitesi Başkanı",
    sum: "",
  },
  {
    name: "Ümit Emre İlhan",
    image: "umitemreilhan",
    linkedin: "https://www.linkedin.com/in/%C3%BCmit-emre-ilhan-791b93209/",
    job: "Makine Öğrenmesi Komite Başkan Yardımcısı",
    sum: "",
  },
  
];

const derin = [
  {
    name: "Mehmet Murat Köse",
    image: "mehmetmuratkose",
    linkedin: "https://www.linkedin.com/in/mehmet-murat-kose/",
    job: "Derin Öğrenme Komitesi Başkanı",
    sum: "",
  },
  {
    name: "Yusuf Erkan",
    image: "yusuferkan",
    linkedin: "https://www.linkedin.com/in/yusuf-erkan-645348241/",
    job: "Derin Öğrenme Komitesi Başkan Yardımcısı",
    sum: "",
  },
  {
    name: "Sinem Çelik",
    image: "sinemcelik",
    linkedin: "https://www.linkedin.com/in/sinem-%C3%A7elik-b5b479209/",
    job: "Derin Öğrenme Komitesi Raporlama Sorumlusu",
    sum: "",
  },
];

const sosyal = [
  
  {
    name: "Zeynep Aygün",
    image: "zeynepaygun",
    linkedin: "https://www.linkedin.com/in/zeynep-ayg%C3%BCn-2805a6218",
    job: "Yürütme ve Sosyal Medya Komitesi Başkanı",
    sum: "",
  },
  {
    name: "Beyza Beril Yalçınkaya",
    image: "beyzaberil",
    linkedin:
      "https://www.linkedin.com/in/beyza-beril-y-30a120228/",
    job: "Tasarım Sorumlusu",
    sum: "",
  },
  {
    name: "Mahmut Enes Çevik",
    image: "mahmutenes",
    linkedin: "https://www.linkedin.com/in/mahmutenescevik/",
    job: "Tasarım Sorumlusu",
    sum: "",
  },
  {
    name: "Fatemeh Jedari",
    image: "fatemehjedari",
    linkedin: "https://www.linkedin.com/in/fatemeh-jedari-sefidgari-003242206",
    job: "Editör",
    sum: "",
  },
  {
    name: "Ahmet Ergül",
    image: "ahmetergul",
    linkedin: "https://www.linkedin.com/in/ahmet-erg%C3%BCl-547b25224/",
    job: "Web Sitesi Koordinatörü",
    sum: "",
  },
  
];

const sponsor = [
  {
    name: "Ecem Dilara Karakuş",
    image: "ecemdilarakarakus",
    linkedin: "https://www.linkedin.com/in/ecem-dilara-karaku%C5%9F-5a5198235",
    job: "Sponsorluk ve Raporlama Komitesi Başkanı",
    sum: "",
  },
  {
    name: "Bilal Ergin Demirci",
    image: "bilalergindemirci",
    linkedin: "https://www.linkedin.com/in/bilal-ergin-demirci-822720238/",
    job: "Sponsorluk Sorumlusu",
    sum: "",
  },
  {
    name: "Betül Altınsoy",
    image: "betulaltinsoy",
    linkedin: "https://www.linkedin.com/in/bet%C3%BCl-alt%C4%B1nsoy-ba528a265",
    job: "Sponsorluk Sorumlusu",
    sum: "",
  },
];

const iletisim = [
  
  {
    name: "Hande Bayrakçı",
    image: "handebayrakci",
    linkedin: "https://www.linkedin.com/in/hande-bayrak%C3%A7%C4%B1-445a92248/",
    job: "İletişim Koordinatörü",
    sum: "",
  },
  {
    name: "Sermina Özdilek",
    image: "serminaozdilek",
    linkedin: "https://www.linkedin.com/in/serminaozdilek",
    job: "İletişim Sorumlusu",
    sum: "",
  },
  {
    name: "Gülşah Şahin",
    image: "gulsahsahin",
    linkedin: "https://www.linkedin.com/in/gulsah-sahin-48195923a",
    job: "İletişim Sorumlusu",
    sum: "",
  },
  
  
  {
    name: "Ertan Soyalp",
    image: "ertansoyalp",
    linkedin: "https://www.linkedin.com/in/ertan-soyalp-771937237",
    job: "İletişim Sorumlusu",
    sum: "",
  },
  
];

export default function Carousel() {
  const [width, setWidth] = useState(760);
  useEffect(() => {
    if (typeof window) {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return (_) => {
        window.removeEventListener("resize", handleResize);
      };
    }
  });
  useEffect(() => {
    if (typeof window) {
      setWidth(window.innerWidth);
    }
  }, []);

  const [list, setList] = useState(yonetim);

  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [percentage, setPrecentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);

  const ref = useRef();
  const imgRef = useRef([]);

  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / (width > 750 ? 2 : 1.15);
    const percentageLocal = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentageLocal;
    const nextPercentageLocal = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPrecentage(nextPercentageLocal);

    ref.current.animate(
      {
        transform: `translate(${nextPercentageLocal}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
  };

  if (typeof window !== "undefined") {
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }

  const handleTrigger = (e) => {
    setList(e);
  };
  useEffect(() => {
    setList(yonetim);
  }, []);

  return (
    <div className={styles.container} style={{ overflow: "hidden" }}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.trigger_buttons}>
        <button
          onClick={() => handleTrigger(yonetim)}
          className={`${list === yonetim ? styles.selected : styles.not_selected}`}
        >
          Yönetim Kurulu
        </button>
        <button
          onClick={() => handleTrigger(denetim)}
          className={`${list === denetim ? styles.selected : styles.not_selected}`}
        >
          Denetim Kurulu
        </button>
        <button
          onClick={() => handleTrigger(egitim)}
          className={`${list === egitim ? styles.selected : styles.not_selected}`}
        >
          Eğitim ve Proje Komitesi
        </button>
        
        <button
          onClick={() => handleTrigger(sosyal)}
          className={`${list === sosyal ? styles.selected : styles.not_selected}`}
        >
          Yürütme ve Sosyal Medya Komitesi
        </button>
        <button
          onClick={() => handleTrigger(sponsor)}
          className={`${list === sponsor ? styles.selected : styles.not_selected}`}
        >
          Sponsorluk ve Raporlama Komitesi
        </button>
        <button
          onClick={() => handleTrigger(iletisim)}
          className={`${list === iletisim ? styles.selected : styles.not_selected}`}
        >
          İletişim Komitesi
        </button>
      </div>
      <div
        className={styles.card_container}
        style={{ transform: `translate(0%, -50%)` }}
        ref={ref}
      >
        {list.map((e, index) => {
          return (
            <div
              key={v4()}
            >
              <Card 
                admin={e} 
                setMouse={() => {
                  if (typeof window !== "undefined") {
                    window.onmousedown = (e) => handleOnDown(e);
                    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
                    window.onmouseup = (e) => handleOnUp(e);
                    window.ontouchend = (e) => handleOnUp(e.touches[0]);
                    window.onmousemove = (e) => handleOnMove(e);
                    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
                    
                  }
                }}
                delMouse={() => {
                  if (typeof window !== "undefined") {
                    window.onmousedown = undefined;
                    window.ontouchstart = undefined;
                    window.onmouseup = undefined;
                    window.ontouchend = undefined;
                    window.onmousemove = undefined;
                    window.ontouchmove = undefined;
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

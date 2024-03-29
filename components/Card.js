import React,{useEffect, useState} from 'react'
import styles from "./card.module.scss";
import Image from "next/image";
import Less from "../public/less.svg";
import More from "../public/more.svg";

const Card = ({admin, sum=false, setMouse = () =>{}, delMouse = () =>{}}) => {

    const [moreInfo, setMoreInfo] = useState(false);
    const [url, setURL] = useState(admin.image)


  return (
    <div 
        className={styles.admincard} 
        onMouseLeave={() => {
            setMoreInfo(false); 
            setMouse();
        }} 
        onMouseEnter={()=>{delMouse()}}
    >
        <div className={styles.admincard__img}>
            <Image
                layout="fill"
                objectFit="cover"
                alt="yetkili"
                src={`/images/cards/${url}.jpeg`}
                onError={() => {
                  setURL("placeholder")
                }}
                className={styles.img}
            />
        </div>
        <div className={styles.admincard__info}>
            {
                moreInfo ? 
                    <p>{admin.sum}</p>
                :
                    <div
                        // onMouseEnter={delMouse}
                        // onMouseLeave={setMouse}
                    >
                        <h2>{admin.name}</h2>
                        <a 
                            href={admin.linkedin} 
                            rel="noreferrer" 
                            target="_blank"
                        >
                            Linkedin
                        </a>
                        <p>{admin.job}</p>
                    </div>

            }
            {
                sum ?
                    <div 
                        className={styles.more_button} 
                        onClick={() => setMoreInfo((prev) => !prev)}
                        onMouseEnter={delMouse}
                        onMouseLeave={setMouse}
                    >
                        {
                            moreInfo ?
                            <Less />
                            :
                            <More />
                        }
                    </div>
                    :
                    undefined
            }
        </div>
    </div>
  )
}

export default Card
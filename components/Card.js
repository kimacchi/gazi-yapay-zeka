import React from 'react'
import styles from "./card.module.scss";
import Image from "next/image";

const Card = ({admin}) => {
  return (
    <div className={styles.admincard}>
        <div className={styles.admincard__img}>
            <Image
                layout="fill"
                objectFit="cover"
                src={`/images/cards/${admin.image}.jpeg`}
                className={styles.img}
            />
        </div>
        <div className={styles.admincard__info}>
            <h2>{admin.name}</h2>
            <a href={admin.linkedin} rel="noreferrer" target="_blank">
                Linkedin
            </a>
            <p>{admin.job}</p>
        </div>
    </div>
  )
}

export default Card
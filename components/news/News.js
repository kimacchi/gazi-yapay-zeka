import React from 'react'
import styles from "./News.module.scss";
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

const News = ({data}) => {
  return (
    <div 
        className={styles.container}
        onClick={() => {
            Router.push("/haberler/" + data._id);
        }}
    >
        <div className={styles.image}>
            <Image 
                alt="img"
                src={data.imgURL}
                layout='fill'
            />
        </div>
        <div className={styles.info}>
            <p>{data.Category[0]}</p>
            <h1>{data.Title}</h1>
            <h2>{data.Summary}</h2>
        </div>
    </div>
  )
}

export default News
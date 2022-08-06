import React,{useState,useEffect} from 'react'
import styles from "../styles/Events.module.scss";
import Particle from "../components/background/Particle";
import Navbar from "../components/navbar/Navbar"
import { Button } from '@mui/material';

const tempData=[
    {
        id:"1",
        Name: "Etkinlik 1",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."

    },
    {
        id:"2",
        Name: "Etkinlik 2",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"3",
        Name: "Etkinlik 3",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"4",
        Name: "Etkinlik 4",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"5",
        Name: "Etkinlik 5",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"6",
        Name: "Etkinlik 6",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"7",
        Name: "Etkinlik 7",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"8",
        Name: "Etkinlik 8",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"9",
        Name: "Etkinlik 9",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    }
]

const Events = () => {

    const [selectedEvent, setSelectedEvent] = useState({});


  return (
    <div className={styles.container}>
        <Particle />
        <div style={{position: "absolute"}}>
            <Navbar />
        </div>
        <div className={styles.wrapper}>
            <div className={styles.event_list}>
                <h1>Aktif Etkinlikler</h1>
                {
                    tempData.length > 0 ? 
                    <div className={styles.event_list_list}>
                        {tempData.map((ele)=>{
                            return(
                                <div className={styles.single_event} key={ele.id}>
                                    <p 
                                        onClick={()=>{
                                            if(ele.id === selectedEvent.id){
                                                setSelectedEvent({})
                                            }else{
                                                setSelectedEvent(ele);
                                            }
                                        }} 
                                        style={selectedEvent.id === ele.id ? {fontWeight: 600}: {fontWeight: 300}}
                                    >
                                        {ele.Name}
                                    </p>
                                    <Button variant='outlined'>KATIL</Button>
                                </div>
                            )
                        })}                        
                    </div>
                    :
                    <div></div>
                }
            </div>
            <div className={styles.event_info}>
                {
                    selectedEvent.Name ? 
                    <div className={styles.event_info_container}>
                        <h1>Etkinlik Bilgisi</h1>
                        <div className={styles.event_info_infos}>
                            <div className={styles.single_info}>
                                <p className={styles.name_of_the_info}>Etkinlik Adı:</p>
                                <p className={styles.field_of_the_info}>{selectedEvent.Name}</p>
                            </div>
                            <div className={styles.single_info}>
                                <p className={styles.name_of_the_info}>Etkinlik Yeri:</p>
                                <p className={styles.field_of_the_info}>{selectedEvent.Place}</p>
                            </div>
                            <div className={styles.single_info}>
                                <p className={styles.name_of_the_info}>Etkinlik Tarihi:</p>
                                <p className={styles.field_of_the_info}>{selectedEvent.Date}</p>
                            </div>
                            <div className={styles.description}>
                                <p className={styles.name_of_the_info}>Etkinlik Açıklaması</p>
                                <p className={styles.field_of_the_info}>{selectedEvent.Description}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        dsgsdfg
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Events
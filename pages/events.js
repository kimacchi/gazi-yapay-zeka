import React,{useState,useEffect} from 'react'
import styles from "../styles/Events.module.scss";
import { useSelector } from 'react-redux';
import Particle from "../components/background/Particle";
import Navbar from "../components/navbar/Navbar"
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';


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

const EventList = ()=>{
    const currentUser = useSelector((state)=>state.currentUser);
    const router = useRouter();

    const [events, setEvents] = useState([]);

    useEffect(()=>{
       if(!currentUser.userId){
        router.push("/login");
       }
       axios.get(process.env.NEXT_PUBLIC_GET_EVENTs , {
        "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
       }).then(e => {
        setEvents(e.data.reverse());
       })
    }, [])


    const [state, setState] = useState({});
    const handleState = (e)=>{
        setState(e);
        // setSelectedEvent(e);
    }
    return(
        <div className={styles.wrapper}>
            <div className={styles.event_list}>
                <h1>Aktif Etkinlikler</h1>
                {
                    tempData.length > 0 ? 
                    <div className={styles.event_list_list}>
                        {events.map((ele)=>{
                            return(
                                <div className={styles.single_event} key={ele._id}>
                                    <p 
                                        onClick={()=>{
                                            if(ele._id === state._id){
                                                handleState({})
                                            }else{
                                                handleState(ele);
                                            }
                                        }} 
                                        style={state._id === ele._id ? {fontWeight: 600}: {fontWeight: 300}}
                                    >
                                        {ele.Name}
                                    </p>
                                    <Button 
                                        variant='outlined' 
                                        disabled={
                                            new Date() > new Date(ele.Deadline)
                                            ||
                                            ele.Participants.filter((e) => {
                                                if(e.Name === currentUser.name){
                                                    return true
                                                }
                                                return false;
                                            }).length > 0 
                                            ||
                                            ele.Participants.length >= ele.MaxParticipant
                                        } 
                                        onClick={() => {
                                            axios.post(process.env.NEXT_PUBLIC_ADD_TO_EVENT + currentUser.userId + "/" + ele._id, {}, {
                                                "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
                                            }).then(() => {
                                                axios.get(process.env.NEXT_PUBLIC_GET_EVENTs , {
                                                    "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
                                                }).then(e => {
                                                    setEvents(e.data.reverse());
                                                })
                                            })
                                        }}
                                    >
                                        KATIL
                                    </Button>
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
                    state.Name ? 
                    <div className={styles.event_info_container}>
                        <h1>Etkinlik Bilgisi</h1>
                        <div className={styles.event_info_infos}>
                            <div className={styles.single_info}>
                                <p className={styles.name_of_the_info}>Etkinlik Adı:</p>
                                <p className={styles.field_of_the_info}>{state.Name}</p>
                            </div>
                            <div className={styles.single_info}>
                                <p className={styles.name_of_the_info}>Etkinlik Yeri:</p>
                                <p className={styles.field_of_the_info}>{state.Place}</p>
                            </div>
                            <div className={styles.single_info}>
                                <p className={styles.name_of_the_info}>Etkinlik Tarihi:</p>
                                <p className={styles.field_of_the_info}>{state.Date}</p>
                            </div>
                            <div className={styles.description}>
                                <p className={styles.name_of_the_info}>Etkinlik Açıklaması</p>
                                <p className={styles.field_of_the_info}>{state.Description}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.event_info_container}>
                        <h1>Etkinlik Bilgisi</h1>
                    </div>
                }
            </div>
        </div>
    )
}

const Events = () => {

    // const [selectedEvent, setSelectedEvent] = useState({});

  return (
    <div className={styles.container}>
        <Particle />
        <div style={{position: "absolute"}}>
            <Navbar />
        </div>
        <EventList />
    </div>
  )
}

export default Events
import React, {useState,useEffect} from 'react'
import styles from "../styles/Admin.module.scss";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from "../components/navbar/Navbar";
import Particle from "../components/background/Particle";
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import {Modal} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const theme = createTheme({
    palette: {
      mode: "dark"
    }
})


const users = [
    {
        Name: "Ahmet Ergül",
        Email: "blabla@gmail.com",
        Password: "hashed",
        SchoolNumber: "21118080045",
        id: "1"
    },
    {
        Name: "Ahmet Ergül",
        Email: "blabla@gmail.com",
        Password: "hashed",
        SchoolNumber: "21118080045",
        id: "2"
    },
    {
        Name: "Ahmet Ergül",
        Email: "blabla@gmail.com",
        Password: "hashed",
        SchoolNumber: "21118080045",
        id: "3"
    },
    {
        Name: "Ahmet Ergül",
        Email: "blabla@gmail.com",
        Password: "hashed",
        SchoolNumber: "21118080045",
        id: "4"
    },
    {
        Name: "Ahmet Ergül",
        Email: "blabla@gmail.com",
        Password: "hashed",
        SchoolNumber: "21118080045",
        id: "5"
    }
]

const events=[
    {
        id:"1",
        Name: "Etkinlik 1",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et.",
        Participants: []
    },
    {
        id:"2",
        Name: "Etkinlik 2",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"3",
        Name: "Etkinlik 3",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"4",
        Name: "Etkinlik 4",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"5",
        Name: "Etkinlik 5",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"6",
        Name: "Etkinlik 6",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"7",
        Name: "Etkinlik 7",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"8",
        Name: "Etkinlik 8",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    },
    {
        id:"9",
        Name: "Etkinlik 9",
        Place: "Gazi Üniversitesi Ana Kampüs",
        Date: "21 Ağustos saat 15.30'da",
        DeadLine: new Date(),
        Participants: [
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
            {Name: "Ahmet Ergül", SchoolNo: "21118080045", id: "1"},
        ],
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar ipsum, scelerisque ornare leo in eu pellentesque. Elementum scelerisque praesent sit ipsum at. Arcu arcu quis lacus commodo. Nulla bibendum semper tempor, praesent et."
    }
]

const Nav = ()=>{
    const [width, setWidth] = useState(851)
    useEffect(()=>{
        if(typeof window !== "undefined"){
            setWidth(window.innerWidth);
        }
    },[])
    useEffect(() => {
        function handleResize() {
            if(typeof window !== "undefined"){
                setWidth(
                  window.innerWidth
                )
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
    })
    return(
        <>
            <div style={width > 850 ? {position: "absolute"} : {}}>
                <Navbar />
            </div>
        </>
    )
}


const AdminComp = ()=>{
    const currentUser = useSelector((state)=>state.currentUser);
    const router = useRouter();

    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
       if(currentUser.userType !== "admin"){
        router.push("/login");
       }
       axios.get(process.env.NEXT_PUBLIC_GET_EVENTs , {
        "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
       }).then(e => {
        setEvents(e.data.reverse());
       })
       axios.get(process.env.NEXT_PUBLIC_GET_USERS , {
        "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
       }).then(e => {
        setUsers(e.data);
       })
    }, [])

    const [width, setWidth] = useState(851)
    useEffect(()=>{
        if(typeof window !== "undefined"){
            setWidth(window.innerWidth);
        }
    },[])
    useEffect(() => {
        function handleResize() {
            if(typeof window !== "undefined"){
                setWidth(
                  window.innerWidth
                )
            }
        }
        window.addEventListener('resize', handleResize)
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
    })

    

    const [selectedEvent, setSelectedEvent] = useState({});
    
    const [selectedUser, setSelectedUser] = useState({});

    const [userOpen, setUserOpen] = useState(false);
    const [eventOpen, setEventOpen] = useState(false);

    const [eventName, setEventName] = useState("");
    const [eventPlace, setEventPlace] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventDeadline, setEventDeadline] = useState(new Date());

    const createNewEvent = () => {
        axios.post(process.env.NEXT_PUBLIC_ADD_EVENT, {
            "Name": eventName,
            "Date": eventDate,
            "Deadline": eventDeadline,
            "Participants": [],
            "Description": eventDescription,
            Place: eventPlace
        }, {
            headers: {'Content-Type': 'application/json', "Authorization": currentUser.token}
        }).then(() => {
            axios.get(process.env.NEXT_PUBLIC_GET_EVENTs , {
                "headers": {'Content-Type': 'application/json', "Authorization": currentUser.token}
            }).then(e => {
            setEvents(e.data.reverse());
            })
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.users}>
                <h1>Tüm Üyeler</h1>
                <div className={styles.user_list}>
                    {
                        users.map((ele)=>{
                            return(
                                <p
                                    onClick={()=>{setSelectedUser(ele); setUserOpen(true)}}
                                    key={uuid()}
                                >
                                    {ele.Name}
                                </p>
                            )
                        })
                    }
                </div>
            </div>

            <div className={styles.events}>
                <h1>Tüm Etkinlikler</h1>
                <div className={styles.event_list}>
                    {
                        events.map((ele)=>{
                            return(
                                <p
                                    onClick={()=>{setSelectedEvent(ele); setEventOpen(true)}}
                                    key={uuid()}
                                >
                                    {ele.Name}
                                </p>
                            )
                        })
                    }
                </div>
            </div>

            <div className={styles.new_event}>
                <h1>Yeni Etkinlik</h1>
                <div className={styles.text_field_wrapper}>
                    <ThemeProvider theme={theme}>
                        <TextField 
                            size="small"
                            variant="outlined"
                            label="Etkinlik adı"
                            value={eventName}
                            onChange={(e)=>{setEventName(e.target.value)}}
                            className={styles.text_field}
                        />
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <TextField 
                            size="small"
                            variant="outlined"
                            label="Etkinlik yeri"
                            value={eventPlace}
                            onChange={(e)=>{setEventPlace(e.target.value)}}
                            className={styles.text_field}
                        />
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <TextField 
                            size="small"
                            variant="outlined"
                            label="Etkinlik tarihi"
                            value={eventDate}
                            onChange={(e)=>{setEventDate(e.target.value)}}
                            className={styles.text_field}
                        />
                    </ThemeProvider>
                    {/* <p>Son kayıt</p> */}
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        {
                            width > 850 ?
                            <ThemeProvider theme={theme}>
                                <DesktopDatePicker 
                                    label="Son kayıt"
                                    inputFormat='MM/dd/yyyy'
                                    value={eventDeadline}
                                    onChange={(e)=>{setEventDeadline(e)}}
                                    renderInput={(params) => <TextField {...params} size="small"  className={styles.text_field}/>}
                                />
                            </ThemeProvider>
                            :
                            <ThemeProvider theme={theme}>
                                <MobileDatePicker 
                                    label="Son kayıt"
                                    inputFormat='MM/dd/yyyy'
                                    value={eventDeadline}
                                    onChange={(e)=>{setEventDeadline(e)}}
                                    renderInput={(params) => <TextField {...params} size="small"  className={styles.text_field}/>}                        
                                />
                            </ThemeProvider>
                        }
                    </LocalizationProvider>
                    <ThemeProvider theme={theme}>
                        <TextField 
                            size="small"
                            variant="outlined"
                            label="Etkinlik açıklaması"
                            multiline
                            rows={7}
                            value={eventDescription}
                            onChange={(e)=>{setEventDescription(e.target.value)}}
                            className={styles.text_field}
                        />
                    </ThemeProvider>
                    <Button variant="outlined" onClick={createNewEvent}>OLUŞTUR</Button>
                </div>
            </div>

            <Modal
                open={userOpen}
                onClose={()=>{setUserOpen(false); setSelectedUser({}); }}
            >
                <div>

                </div>
            </Modal>

            <Modal
                open={eventOpen}
                onClose={()=>{setEventOpen(false); setSelectedEvent({}); console.log(selectedEvent)}}
            >
                <div className={styles.event_modal}>
                    <h1>Etkinliğe Katılanlar</h1>
                    <div className={styles.event_modal_list}>
                        {
                            
                            selectedEvent.Participants ?
                                <div className={styles.inner_list}>
                                    
                                    {
                                        selectedEvent.Participants.length ?
                                            selectedEvent.Participants.map((ele)=>{
                                                return(
                                                    <p key={uuid()} >{ele.Name} - {ele.SchoolNo}</p>
                                                )
                                            })
                                        :
                                        <p>Hiç katılımcı yok.</p>
                                    }
                                </div>

                                :

                                <div>Hiç katılımcı yok.</div>
                        }
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const Admin = () => {
  return (
    <div className={styles.container}>
        <Particle />
        <Nav />
        <AdminComp />
    </div>
  )
}

export default Admin
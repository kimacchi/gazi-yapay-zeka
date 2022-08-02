import React,{useState, useEffect} from 'react'
import { FormControl, OutlinedInput, InputAdornment, InputLabel } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from "./styles.module.scss";
import Off from "../../public/profile_hide_button_pc.svg"
import On from "../../public/profile_show_button_pc.svg"

const CustomInput = ({label = "", type="text", onValueChange=()=>{}}) => {
  const [isVisible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const onHandleChange = (e)=>{
    setText(e.target.value);
    onValueChange(e.target.value);
  }

  return (
    <>
      {
        type === "text" ? 
          <div className={styles.container}>
              <input 
                placeholder={label}
                value={text}
                className={styles.input}
                type="text"
                onChange={onHandleChange}
              />
              
          </div>
          :
          <div className={styles.container}>
              <input 
                placeholder={label}
                value={text}
                className={styles.input}
                type={isVisible ? "text" : "password"}
                onChange={onHandleChange}
              />
              <div className={styles.icon} onClick={()=>{setVisible((prev)=>!prev)}}>
                {
                  isVisible ?
                  <Off />
                  :
                  <On />
                }
              </div>
          </div>

      }
    </>
  )
}

export default CustomInput
import React,{useState, useEffect} from 'react'
import Particle from '../components/background/Particle'
import Editor from '../components/Editor';

const Test = () => {
    const[editorState, setEditorState] = useState("");
  return (
    <div>
        <Particle />
        <div style={{backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", width: "50vw"}}>
          <Editor />
        </div>
    </div>
  )
}

export default Test
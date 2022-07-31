import React, {useState, useRef, useMemo} from 'react';
// import JoditEditor from "jodit-react";
import dynamic from 'next/dynamic';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});


export default function MyEditor() {
    const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = useMemo(()=>{return {
		readonly: false,
		placeholder: "" || 'Bir şeyler yazın...'
	}}, [])

	return (
        <>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {console.log(newContent)}}
            />
            <div dangerouslySetInnerHTML={{__html: content}}>

            </div>
        </>
        );
  }

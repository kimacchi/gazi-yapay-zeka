import React, {useState, useRef, useMemo} from 'react';
// import JoditEditor from "jodit-react";
import dynamic from 'next/dynamic';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});


export default function MyEditor({setState}) {
    const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = useMemo(()=>{return {
		readonly: false,
		placeholder: "" || 'Bir şeyler yazın...'
	}}, [])

    const handleChange = (e)=>{
        setContent(e);
        setState(e);
        console.log(e);
    }

	return (
        <>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={handleChange} // preferred to use only this option to update the content for performance reasons
            />
            {/* <div dangerouslySetInnerHTML={{__html: content}}>

            </div> */}
        </>
        );
  }

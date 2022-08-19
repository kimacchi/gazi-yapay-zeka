export const setCurrentUser = (userData)=>{
    return(dispatch)=>{
        dispatch({
            ...userData,
            type: "SET_USER"
        })
    }
}

export const delCurrentUser = ()=>{
    return(dispatch)=>{
        dispatch({
            type: "DEL_USER",
        })
    }
}

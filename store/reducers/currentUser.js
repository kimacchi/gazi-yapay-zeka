
export default (state = {}, action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                userType: action.Type,
                userId: action._id,
                name: action.Name,
                schoolNo: action.SchoolNo,                
                email: action.Email,
                phoneNum: action.PhoneNum,
                token: action.token,
            };
        case "DEL_USER":
            return {};
        default:
            return state;
    }
}
export const initialState = {
    name: "saad",
    email: "",
    photo: "",
    recommended: null,
    newDisney: null,
    original: null,
    trending: null,
}

const reducer = (state, action) => {
    console.log(action.type)
    switch(action.type){
        case "TESTING":
            return{
                ...state,
                name: action.payload
            }
        default: 
        return state;
    }
}

export default reducer


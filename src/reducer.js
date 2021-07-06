
const initialState ={

    reActors: []
}


const rootReducer =(state = initialState, action)=>{

    switch(action.type){
        
        case 'ADD_REACTOR':
            return {...state, students: [...state.students, action.payload]}
        default:
            return state
        
    }


}
export default rootReducer
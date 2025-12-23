const INITIAL_STATE ={
    notes: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload.content]
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter((_, index) => index !== action.payload.index)
            };
        default:
            return state;
    }   
}


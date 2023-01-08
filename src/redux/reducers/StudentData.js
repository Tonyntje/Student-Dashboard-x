

const StudentData = (state = false, action) => {
    switch(action.type) {
        case 'make_profiles':
            return action.payload
        default: 
            return state
    }
}

export default StudentData
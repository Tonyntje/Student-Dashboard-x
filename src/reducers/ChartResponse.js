

const ChartResponse = (state = 1200, action) => {
    switch(action.type) {
        case 'resize_charts':

            console.log(action.payload)
            if (action.payload > 1300) return 1100
            if (action.payload > 1100) return 900
            if (action.payload > 900) return 700
            if (action.payload > 700) return 500
        default: 
            return state
    }
}

export default ChartResponse
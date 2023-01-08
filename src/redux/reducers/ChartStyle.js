

const ChartStyle = (state = true, action) => {
    switch(action.type) {
        case 'switchChartStyle':
            return action.payload
        default: 
            return state
    }
}

export default ChartStyle
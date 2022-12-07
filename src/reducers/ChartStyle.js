

const ChartStyle = (state = true, action) => {
    switch(action.type) {
        case 'switchChartStyle':
            return !state
        default: 
            return state
    }
}

export default ChartStyle
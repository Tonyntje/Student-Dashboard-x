

export const updateStudents = (studentData) => {
    return {
        type: 'get_data',
        payload: studentData
    }
}

export const makeProfiles = (studentData) => {
    return {
        type: 'make_profiles',
        payload: studentData
    }
}

export const resizeChart = (chartWidth) => {
    return {
        type: 'resize_charts',
        payload: chartWidth
    }
}

export const switchStyle = (style) => {
    return {
        type: 'switchChartStyle',
        payload: style
    }
}

export const setStudentFilters = (filters) => {
    return {
        type: 'set_filters',
        payload: filters
    }
}

export const setMetricFilters = (filters) => {
    return {
        type: 'set_metrics',
        payload: filters
    }
}

export const setTableData = (tableData) => {
    return {
        type: 'set_table_data',
        payload: tableData
    }
}


export const sortByStudentName = (tableData) => {
    return {
        type: 'sort_by_student_name',
        payload: tableData
    }
}


export const sortByAssignmentName = (tableData) => {
    return {
        type: 'sort_by_assignment_name',
        payload: tableData
    }
}

export const sortByDifficulty = (tableData) => {
    return {
        type: 'sort_by_difficulty',
        payload: tableData
    }
}

export const sortByFun = (tableData) => {
    return {
        type: 'sort_by_fun',
        payload: tableData
    }
}

export const aSortByStudentName = (tableData) => {
    return {
        type: 'asort_by_student_name',
        payload: tableData
    }
}


export const aSortByAssignmentName = (tableData) => {
    return {
        type: 'asort_by_assignment_name',
        payload: tableData
    }
}

export const aSortByDifficulty = (tableData) => {
    return {
        type: 'asort_by_difficulty',
        payload: tableData
    }
}

export const aSortByFun = (tableData) => {
    return {
        type: 'asort_by_fun',
        payload: tableData
    }
}



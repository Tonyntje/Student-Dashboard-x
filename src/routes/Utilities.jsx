import { useSelector } from "react-redux"
import Papa from 'papaparse'
import { faker } from '@faker-js/faker';

// // Used Papaparse module for this
// Dispatch to Redux state
export async function getStudents() {
    const csv = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRebyURthls2ga-0IZ6mih9VmIuyW2yI9uYW8U0wSW-TL4C6stdM01eCnnwASFnUA/pub?output=csv'
    const results = await fetch(csv)
        .then(response => response.text())
        .catch(err => console.log(err))
        .then(res => res)
    const { data } = Papa.parse(results)
    data.shift()
    return data
}


// Global data filteren naar nieuwe state
// Dit was niet mogelijk met het laden
export function globalData(data) {
    const studentFilters = useSelector(state => state.StudentFilters)
    return (studentFilters.length) ? data.filter(record => studentFilters.includes(record[0])) : data
}

// Bundle average grades by assignment
export function assignmentsGroupedByAverages(info) {
    const assignments = []
    info.forEach(a => (!assignments.includes(a[1])) && assignments.push(a[1]))

    return assignments.map(a => {
        const filterByAssigment = info.filter(data => data[1] === a)

        const averageDifficulty = filterByAssigment
            .map(num => num[2])
            .reduce((a, b) => Number(a) + Number(b))
            / filterByAssigment.length

        const averageFunrate = filterByAssigment
            .map(num => num[3])
            .reduce((a, b) => Number(a) + Number(b))
            / filterByAssigment.length

        return { assignment: a, Difficulty: averageDifficulty, Fun: averageFunrate }
    })
}

// Set up graph depending assignment averages
export function graphSetup(students) {
    const studentProfiles = assignmentsGroupedByAverages(globalData(students))

    const semester_one = studentProfiles.filter(a => a.assignment.includes('W1D') && !a.assignment.includes('Project'))
    const semester_two = studentProfiles.filter(a => a.assignment.includes('W2D') && !a.assignment.includes('Project'))
    const semester_three = studentProfiles.filter(a => a.assignment.includes('W3D') && !a.assignment.includes('Project'))
    const semester_four = studentProfiles.filter(a => a.assignment.includes('W4D') && !a.assignment.includes('Project'))

    const projects = studentProfiles.filter(a => a.assignment.includes('Project')).map(a => {
        return { assignment: a.assignment.slice(17), Difficulty: a.Difficulty, Fun: a.Fun }
    })

    return [
        { graphname: 'Eerst Semester', graph: semester_one },
        { graphname: 'Tweede Semester', graph: semester_two },
        { graphname: 'Derde Semester', graph: semester_three },
        { graphname: 'Vierde Semester', graph: semester_four },
        { graphname: 'Projects', graph: projects }
    ]
}


// Nu data aan studenten toekennen
export function studentProfiles(res) {
    if (res) {
        const phonenum = () => {
            let num = ''
            for (let i = 8; i > 0; i--) num += Math.floor(Math.random() * 9)
            return num
        }

        // // Mappen voor Readability
        const parsedToArray = res.map(d => {
            return {
                student: Object.values(d)[0],
                opdracht: Object.values(d)[1],
                moeilijkheidsgraad: Object.values(d)[2],
                pleziergraad: Object.values(d)[2]
            }
        })

        const studenten = []
        parsedToArray.forEach(record => (!studenten.includes(record.student)) && studenten.push(record.student))

        return studenten.map(student => {
            const generateAge = Number(Math.round(Math.random() * 20) + 20)

            return {
                naam: student,
                details: {
                    lastname: faker.name.lastName(),
                    age: generateAge,
                    phone: `+317 ${phonenum()}`,
                    profilepicture: `${faker.image.people()}?random=${Math.round(Math.random() * 1000)}`,
                    email: faker.internet.email()
                },
            }
        })
    }
    return []
}



import { Link, Outlet } from 'react-router-dom'
import '../css/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getStudents, studentProfiles } from './Utilities'
import { useEffect } from 'react'
import { makeProfiles, setTableData, updateStudents } from "../redux/actions"

export default function App() {
  const dispatch = useDispatch()
  const students = useSelector(state => state.Students)

  useEffect(() => {
    const storeResult = async () => {
      const results = await getStudents()

      dispatch(updateStudents(results))
      dispatch(makeProfiles(studentProfiles(results)))
      dispatch(setTableData(results))
    }
    storeResult()
  }, [])

  return (
    <div className="App">
      <header className={!students ? 'inactive' : null}>
        <nav>
          <Link to={'/'}>Dashboard</Link>
          <Link to={'/students'}>All Students</Link>
          <Link to={'/tableview'}>Table View</Link>
        </nav>
      </header>
      <main>
        <div className='container'>
          {!students ? <div className="loading">loading</div> : <Outlet />}
        </div>
      </main>
    </div>
  )
}

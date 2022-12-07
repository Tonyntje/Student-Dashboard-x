
import { Link, Outlet } from 'react-router-dom'
import '../css/App.css'
import { useSelector } from 'react-redux'
import { getStudents } from './Utilities'

const App = () => {

  getStudents()
  const students = useSelector(state => state.Students)

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



export default App


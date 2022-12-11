import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { createStore } from "redux";
import { Provider } from 'react-redux'
import allReducers from './reducers'
import Dashboard from './routes/Components/Dashboard'
import Students from './routes/Components/Students'
import StudentProfile, { loader as studentloader } from './routes/Components/StudentProfile'
import TableView from './routes/Components/TableView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: "students/:contactId",
        element: <StudentProfile />,
        loader: studentloader
      },
      {
        path: "tableview",
        element: <TableView />,
      }
    ],
  }
])

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const MyTable = (

// <table>
//   <thead>
//   <th>Sr No</th>
//   <th>First Name</th>
//   <th>Last Name</th>
// </thead>
// <tbody>
//   <tr>
//     <td>1</td>
//     <td>dhiraj</td>
//     <td>rajput</td>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>dhiraj</td>
//     <td>rajput</td>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>dhiraj</td>
//     <td>rajput</td>
//   </tr>
// </tbody>
// </table>
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

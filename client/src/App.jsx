import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoIosClose } from "react-icons/io";
function App() {

const [addsection,setaddsection] = useState(false)
const[formdata,setformdata]=useState
const handlesubmitbtn=(e)=>{
e.preventDefault();
}
  return (
    <>
      <div className='container'>
        <button className='btn btn-add' onClick={()=>{setaddsection(true)}}>Add</button>
        {
          addsection && (
            <div className='add-container'>
          
            <form onSubmit={handlesubmitbtn}>
            <div className='close-btn' onClick={()=>{setaddsection(false)}}><IoIosClose /></div>
              <label htmlFor='name'>Name:</label>
              <input type='text' id="name" name='name'/>
              <label htmlFor='email'>Email:</label>
              <input type='text' id="email" name='email'/>
              <label htmlFor='mobile'>Mobile:</label>
              <input type='tel' id="mobile" name='mobile'/>
              <label htmlFor='password'>Password:</label>
              <input type='password' id="password" name='password'/>
              <label htmlFor='address'>Address:</label>
              <input type='text' id="address" name='address'/>
              <label htmlFor='dob'>Date_of_birth:</label>
              <input type='date' id="dob" name='dob'/>
              <label htmlFor='city'>City:</label>
              <input type='text' id="city" name='city'/>
              <label htmlFor='country'>Country:</label>
              <input type='text' id="country" name='country'/>
              <button className='btn'>Submit</button>
            </form>
          </div>
          )
        }
       
      </div>
    </>
  )
}

export default App

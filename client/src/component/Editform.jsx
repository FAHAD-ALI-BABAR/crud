import React from 'react'
import "../App.css"
import { IoIosClose } from "react-icons/io";

const Editform=({handleSubmit,handleOnChange,handleclose,rest})=>{
  return (
    <>
    <div className='add-container'>
        <form onSubmit={handleSubmit}>
          <div className='close-btn' onClick={handleclose}><IoIosClose /></div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' onChange={handleOnChange} value={rest.name} />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' onChange={handleOnChange} value={rest.email} />
          <label htmlFor='mobile'>Mobile:</label>
          <input type='tel' id='mobile' name='mobile' onChange={handleOnChange} value={rest.mobile} />
          <label htmlFor='pass'>Password:</label>
          <input type='password' id='pass' name='pass' onChange={handleOnChange} value={rest.pass} />
          <label htmlFor='address'>Address:</label>
          <input type='text' id='address' name='address' onChange={handleOnChange} value={rest.address} />
          <label htmlFor='dob'>Date of Birth:</label>
          <input type='date' id='dob' name='dob' onChange={handleOnChange} value={rest.dob} />
          <label htmlFor='city'>City:</label>
          <input type='text' id='city' name='city' onChange={handleOnChange} value={rest.city} />
          <label htmlFor='country'>Country:</label>
          <input type='text' id='country' name='country' onChange={handleOnChange} value={rest.country} />
          <button className='btn'>Submit</button>
        </form>
      </div>
    </>
   
  )
}

export default Editform
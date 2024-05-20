import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoIosClose } from "react-icons/io";
import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/"
function App(){
 const [addSection, setAddSection] = useState(false);
 const [formData,setFormData]=useState({
  name:"",
  email:"",
  mobile:"",
  pass:"",
  address:"",
  dob:"",
  city:"",
  country:"",
 })

 const [Datalist,setDataList]=useState([])
 
 const handleOnChange = (e) => {
  const { value,name } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

 const handleSubmit = async(e) => {
  e.preventDefault()
  const data=await axios.post("/create", formData)
  console.log(data);
  if(data.data.success){
    setAddSection(false)
    alert(data.data.message)

  }
}
  const getFetchData= async()=>{
    const data=await axios.get("/")
    console.log(data);
  if(data.data.success){
    setDataList(data.data.data)
    
    
  }
}
 
 useEffect(()=>{
  getFetchData()

},[])
console.log(Datalist);

  return (
    <>
    <div className='container'>
      <button className='btn btn-add' onClick={()=>{setAddSection(true)}}>Add</button>
      { addSection && (
        <div className='add-container'>
        <form onSubmit={handleSubmit}>
          <div className='close-btn' onClick={()=>{setAddSection(false)}}><IoIosClose /></div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' onChange={handleOnChange} />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' onChange={handleOnChange} />
          <label htmlFor='mobile'>Mobile:</label>
          <input type='tel' id='mobile' name='mobile' onChange={handleOnChange} />
          <label htmlFor='pass'>Password:</label>
          <input type='password' id='pass' name='pass' onChange={handleOnChange} />
          <label htmlFor='address'>Address:</label>
          <input type='text' id='address' name='address' onChange={handleOnChange} />
          <label htmlFor='dob'>Date of Birth:</label>
          <input type='date' id='dob' name='dob' onChange={handleOnChange} />
          <label htmlFor='city'>City:</label>
          <input type='text' id='city' name='city' onChange={handleOnChange} />
          <label htmlFor='country'>Country:</label>
          <input type='text' id='country' name='country' onChange={handleOnChange} />
          <button className='btn'>Submit</button>
        </form>
      </div>

      )}
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Email:</td>
              <td>Mobile:</td>
              <td>Password:</td>
              <td>Address:</td>
              <td>Date_of_birth:</td>
              <td>City:</td>
              <td>Country:</td>
            </tr>
          </thead>
          <tbody>
            {
              Datalist.map((el)=>{
                return(
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.mobile}</td>
                    <td>{el.pass}</td>
                    <td>{el.address}</td>
                    <td>{el.dob}</td>
                    <td>{el.city}</td>
                    <td>{el.country}</td>
                    <td>
                      <button className='btn btn-edit'>Edit</button>
                      <button className='btn btn-delete'>Deleted</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
        
      
    </div> 
    </>
  )
}

export default App

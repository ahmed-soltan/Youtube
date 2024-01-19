import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper , IconButton } from '@mui/material'
const SearchBar = () => {
  const [searchTerm , setSearchTerm] = useState("")
  const navigate= useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(searchTerm){
      navigate( `/search/${searchTerm}` )
    }
  }
  return (
    <Paper
       component="form"
       onSubmit={handleSubmit}
       sx={{
        borderRadius:"20px",
        border:"1px solid #e3e3e3",
        pl:2,
        boxShadow:"none",
        mr:{sm:5}
       }}
    >
        <input className='search-bar' placeholder='Search...' type='text' value={searchTerm} onChange={(e)=>{
          setSearchTerm(e.target.value)
        }} style={{border:"none"}}/>
        <IconButton sx={{p:"10px" , color:"red"}}>
        <i className="fa-solid fa-magnifying-glass" type="submit" ></i>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
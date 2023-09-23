import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction='row' spacing={2} p={2} sx={{position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between'}}>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt="logo" height={45}></img>
      </Link>
      <Link to='/chaneldetail/3'>Home</Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar
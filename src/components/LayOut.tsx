import  { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Navigation from './Navigation'

function LayOut({children}:{children:ReactNode}) {
  return (
    <Box>
      <Navigation/>
      {
        children
      }
    </Box>
  )
}

export default LayOut
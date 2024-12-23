import { User } from '../utils/types'
import { Box, Typography } from '@mui/material'

function UserDetails({data}:{data:User}) {
   
  return (
    <Box color={'black'} width={'100%'}>
        <Typography pb={1.5} variant='h5' textAlign={'start'} >Name :- { ' '+data.name}</Typography>
        <Typography pb={1.5} variant='h5' textAlign={'start'} >Id :- { ' '+data.id}</Typography>
        <Typography pb={1.5} variant='h5' textAlign={'start'} >Phone :- { ' '+data.phone}</Typography>
        <Typography pb={1.5} variant='h5' textAlign={'start'} >Email :- { ' '+data.email}</Typography>
        <Typography pb={1.5} variant='h5' textAlign={'start'} >Address :- { ' '+data.address}</Typography>

    </Box>
  )
}

export default UserDetails
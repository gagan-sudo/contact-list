
import { User } from '../../utils/types'
import {  Backdrop, Box, IconButton, Stack, Typography } from '@mui/material'
import { Close, Delete, Edit, Visibility } from '@mui/icons-material'
import { ReactNode, useState } from 'react';
import UserForm from '../../components/UserForm';
import UserDetails from '../../components/UserDetails';

function UsersActions({data}:{data:User}) {

    const [userData]=useState(data)
    const [editBackdor,setEditBackdor]=useState(false)
    const [detailsBackdor,setDetailsBackdor]=useState(false)


    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
      setEditBackdor(false)
      setDetailsBackdor(false)
    };
    const handleOpen = () => {
      setOpen(true);
    };
    

    const backdor = ({children,title}:{children:ReactNode,title:string}):ReactNode =>{
        return (
            <>
            <Backdrop 
   sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
   open={open}

   >
    <Box bgcolor={"white"} p={2} borderRadius={3} width={{xs:'90%'}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} pb={2}>
      <Typography color="textSecondary"  variant='h5' fontWeight={"bold"}>{title}</Typography>
      <IconButton 
         onClick={handleClose}
      >
        <Close fontSize="large"  />
      </IconButton>
      </Stack>
     {
         children
        }
    </Box>
   </Backdrop>
            </>
        )
    }


  return (
    <>
    <Stack direction={"row"} >
        <IconButton onClick={()=>{
            setEditBackdor(true)
            handleOpen()
            }}>
            <Edit/>
        </IconButton>
        <IconButton onClick={()=>{
            setDetailsBackdor(true)
            handleOpen()
        }}>
            <Visibility/>
        </IconButton>
        <IconButton>
            <Delete/>
        </IconButton>
    </Stack>
    {
        detailsBackdor?backdor({children:<UserDetails data={userData} />,title:'Contant Details'}):''
}
{
        editBackdor?backdor({children:<UserForm data={userData}/>,title:'Edit Contant Details'}):''
}
    </>
  )
}

export default UsersActions
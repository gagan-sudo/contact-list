
import { User } from '../../utils/types'
import { Backdrop, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import { Close, Delete, Edit, Visibility } from '@mui/icons-material'
import React, { ReactNode, useState } from 'react'
import UserForm from '../../components/UserForm'
import UserDetails from '../../components/UserDetails'
import { useDispatch } from 'react-redux'
import { deleteContactRequest } from '../../store/user/deletecontact/deleteSlice'

function UsersActions({ data }: { data: User }) {

  const dispatch = useDispatch()

  // const deleteState = useSelector((state:{delete:DeleteState})=>state.delete)
  // console.log(deleteState)

  const [userData] = useState(data)
  const [editBackdor, setEditBackdor] = useState(false)
  const [detailsBackdor, setDetailsBackdor] = useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)

  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
    setEditBackdor(false)
    setDetailsBackdor(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClickOpenDiglog = () => {
    setOpenDialog(true)
  }

  const handleCloseDiglog = () => {
    setOpenDialog(false)
  }

  const backdor = ({ children, title }: { children: ReactNode, title: string }): ReactNode => {
    return (
      <>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={open}

        >
          <Box bgcolor={"white"} p={2} borderRadius={3} width={{ xs: '90%' }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} pb={2}>
              <Typography color="textSecondary" variant='h5' fontWeight={"bold"}>{title}</Typography>
              <IconButton
                onClick={handleClose}
              >
                <Close fontSize="large" />
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

  const deleteDialog=()=>{
    return (
      <React.Fragment>
      <Dialog
        open={openDialog}
        onClose={handleCloseDiglog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete contact?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <Typography pb={1}>Name :- {userData.name}</Typography>
           <Typography pb={1}>ID :- {userData.id}</Typography>
           <Typography pb={1}>Address :- {userData.address}</Typography>
           <Typography color="warning" pb={1}>{"After deleting, you can't retrieve the contact."}</Typography>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          // onClick={handleCloseDiglog}
          onClick={()=>{
            handleCloseDiglog()
            dispatch(deleteContactRequest(userData.id))
          }}
          >Delete</Button>
          <Button onClick={handleCloseDiglog} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    )
  }




  return (
    <>
      <Stack direction={"row"} >
        <IconButton onClick={() => {
          setEditBackdor(true)
          handleOpen()
        }}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => {
          setDetailsBackdor(true)
          handleOpen()
        }}>
          <Visibility />
        </IconButton>
        <IconButton
        onClick={handleClickOpenDiglog}
        //  onClick={() => {
          // dispatch(deleteContactRequest(userData.id))
        // }}
        >
          <Delete />
        </IconButton>
      </Stack>
      {
        detailsBackdor ? backdor({ children: <UserDetails data={userData} />, title: 'Contant Details' }) : ''
      }
      {
        editBackdor ? backdor({ children: <UserForm action={'update'} data={userData} />, title: 'Edit Contant Details' }) : ''
      }
      {
       deleteDialog()
      }
    </>
  )
}

export default UsersActions
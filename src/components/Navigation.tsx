
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Close, ContactPageOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Backdrop,  Stack } from '@mui/material';
import { useState } from 'react';
import UserForm from './UserForm';
const data = {
  id: '',
  name: '',
  email: '',
  phone: '',
  address: ''
}

export default function Navigation() {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            <ContactPageOutlined/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <Button color="inherit" 
          onClick={()=>{
            toast('currently not in use')
          }}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Backdrop 
     sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
     open={open}
     onClick={handleClose}
    > 
      <Box bgcolor={"white"} p={2} borderRadius={3} width={{xs:'90%'}}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} pb={2}>
      <Typography color="textSecondary"  variant='h5' fontWeight={"bold"}>Add Contact</Typography>
      <IconButton 
         onClick={handleClose}
      >
        <Close fontSize="large"  />
      </IconButton>
      </Stack>

    {
      <UserForm data={data}/>
    }
    </Box>
    </Backdrop>
</>
  );
}
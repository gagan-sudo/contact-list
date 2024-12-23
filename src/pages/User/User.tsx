import { Box } from "@mui/material"
import LayOut from "../../components/LayOut"
import UserForm from "../../components/UserForm"

function User() {
  return (
   <LayOut >
    <Box p={1}>

    <UserForm/>
    </Box>
   </LayOut>
  )
}

export default User
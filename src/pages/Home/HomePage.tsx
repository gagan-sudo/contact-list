import { useDispatch } from "react-redux"
import {fetchUsersDataRequest} from '../../store/users/usersSlice'
import LayOut from "../../components/LayOut"
import { useEffect } from "react"
import { Button, Grid2 } from "@mui/material"
import UsersTable from "./UsersTable"

export default function HomePage(){

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchUsersDataRequest())
    },[dispatch])

    return (
        <>
        <LayOut>
        <Button onClick={()=>{
            // dispatch(addContact())
        }}>Hello</Button>
        <Grid2>
            <UsersTable/>
        </Grid2>

        </LayOut>
        </>
    )
}
import { useDispatch } from "react-redux"
import {fetchUsersApiDataRequest} from '../../store/users/usersAction'
import LayOut from "../../components/LayOut"
import { useEffect } from "react"
import { Grid2 } from "@mui/material"
import UsersTable from "./UsersTable"

export default function HomePage(){

    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(fetchUsersApiDataRequest())
    },[dispatch])

    return (
        <>
        <LayOut>
        
        <Grid2>
            <UsersTable/>
        </Grid2>

        </LayOut>
        </>
    )
}
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersDataRequest } from '../../store/users/usersSlice'
import LayOut from "../../components/LayOut"
import { useEffect } from "react"
import { Grid2 } from "@mui/material"
import UsersTable from "./UsersTable"
import { DeleteState } from "../../store/user/deletecontact/deleteSlice"
import { toast } from "react-toastify"
import { AddState } from "../../store/user/addcontact/addSlice"
import { UpdateState } from "../../store/user/updatecontact/updateSlice"

export default function HomePage() {

    const dispatch = useDispatch()
    const deleteState = useSelector((state: { delete: DeleteState }) => state.delete)
    const addState = useSelector((state: { add: AddState }) => state.add)
    const updateState = useSelector((state: { update: UpdateState }) => state.update)
    // console.log(updateState)


    // delete note notification
    useEffect(() => {
        if (deleteState.status === 'succeeded') {
            toast.success('Contact delete Success')
        } else if (deleteState.status === 'failed') {
            toast.error(deleteState.error)
        }
        dispatch(fetchUsersDataRequest())
    }, [dispatch, deleteState])

     // add note notification
    useEffect(() => {
        if (addState.status === 'succeeded') {
            toast.success('Contact added Success')
        } else if (addState.status === 'failed') {
            toast.error(addState.error)
        }
        dispatch(fetchUsersDataRequest())
    }, [dispatch, addState])

     // update note notification
    useEffect(() => {
        if (updateState.status === 'succeeded') {
            toast.success('Contact Updated Success')
        } else if (updateState.status === 'failed') {
            toast.error(updateState.error)
        }
        dispatch(fetchUsersDataRequest())
    }, [dispatch, updateState])



    return (
        <>
            <LayOut>
               
                <Grid2>
                    <UsersTable />
                </Grid2>

            </LayOut>
        </>
    )
}
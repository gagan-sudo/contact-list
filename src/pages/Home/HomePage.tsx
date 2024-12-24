import { useDispatch, useSelector } from "react-redux"
import LayOut from "../../components/LayOut"
import { useEffect } from "react"
import { Container,Typography } from "@mui/material"
import UsersTable from "./UsersTable"
import { toast } from "react-toastify"
import { UpdateState,AddState, DeleteState,fetchUsersDataRequest } from "../../store"

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
               
                <Container sx={{pt:{xs:1,md:3,xl:5}}}>
                    <Typography variant="h5" 
                    pb={2}
                    textAlign={{
                        xs:'center',
                        md:'start'
                    }}
                    fontWeight={"bold"}>Contacts List</Typography>
                    <UsersTable />
                </Container>

            </LayOut>
        </>
    )
}
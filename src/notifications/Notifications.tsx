import { Alert } from "@material-ui/lab"
import toast from "react-hot-toast"

export const notify = (message: string , severity: 'error' | 'success' | 'info' | 'warning') =>{
    toast.custom((t) => 
    <Alert severity={severity} onClose={()=> toast.dismiss(t.id)}>{message}</Alert>)
}
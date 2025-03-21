import { useQuery } from "react-query"
import axiosCustomInstance from "../services/axiosInstance";

// custom hook (data, isLoading, isError, error), cache

function Todos() {
    const loginAPIBody = {
      email: "arbaz@444gmail.com",
      password: "Arbaz@999",
    };
    
    const {data, isLoading, isError} = useLogAPI(loginAPIBody)
  
    return (
        <ul>
           
        </ul>
    )
}
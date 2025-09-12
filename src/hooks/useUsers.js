import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/apiCalls";


export default function useUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        try {
            fetchUsers().then((response) => {
                setUsers(response.data.users)
            })
        } catch (error) {
            console.log(error)
        }
    },[])

    return { users }
}
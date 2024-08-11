import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./User.css"
import { CircularProgress, useToast } from '@chakra-ui/react'
import ErrorToast from "./ErrorToast";

const User = () => {
    const toast = useToast()
    const fetchUser = async () => {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data;  // Return the data directly
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['json-user'],
        queryFn: fetchUser
    });

    if (isLoading) {
        return <div className="loading"><CircularProgress value={80} /></div>;
    }

    if (isError) {
        return <div className="error"><ErrorToast/></div>;
    }

    return (
        <div className="user-container">
            <h1 className="user-heading">User List</h1>
            <div className="user-list">
                {data.users.map((user) => (
                    <div key={user.id} className="user-card">
                        <p className="user-name">{user.firstName} {user.lastName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;

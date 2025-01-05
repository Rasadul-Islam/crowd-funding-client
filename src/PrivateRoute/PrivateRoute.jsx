import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading) return <LoadingSpinner></LoadingSpinner>
    if(user) return children
    return <Navigate to='/logIn' state={location.pathname}></Navigate>
};

export default PrivateRoute;
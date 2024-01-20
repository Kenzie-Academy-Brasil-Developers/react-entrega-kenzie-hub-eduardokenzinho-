import { Route, Routes} from "react-router-dom"
import { Login } from "../../components/Login"
import { Register } from "../../components/Register"
import { Dashbord } from "../../components/Dashboard"
import { NotFoundPage } from "../../components/NotFoundPage"

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashbord/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}
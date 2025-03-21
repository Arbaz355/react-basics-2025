import { Routes, Route, Link, NavLink, Navigate, useNavigation, useLocation, useParams, useSearchParams } from "react-router"
import UserData from "./component/Product"

function App() {
  const navigate = useNavigation()
  const location = useLocation();
  const params = useParams()

  return (
    <>
      <Link to="../UserData">User Data</Link>
      <NavLink className={(isActive) => {}} to="../UserData">User Data</NavLink>

      <button onClick={() => navigate()}></button>
     
     {/* reset password -> if password -> login, b */}

      <Routes>
        <Route index element={<UserData />} />
        <Route path="step-2" element={<StepTwo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App

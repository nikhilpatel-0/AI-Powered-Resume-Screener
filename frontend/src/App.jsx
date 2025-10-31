import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950'>
      <AppRoutes />
     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        newestOnTop
      />
    </div>
  )
}

export default App
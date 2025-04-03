import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/home'
import { Context } from './context/context'
import AddProduct from './pages/Addproduct/addproduct'
import { ToastContainer} from 'react-toastify';

function App() {
 
return(
  <Context>
 <div>
 <ToastContainer theme='dark' />
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add-product' element={<AddProduct/>}/>
  </Routes>
 </div>
 </Context>
)
  
}

export default App

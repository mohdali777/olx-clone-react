import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/home'
import { Context } from './context/context'
import AddProduct from './pages/Addproduct/addproduct'

function App() {
 
return(
  <Context>
 <div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add-product' element={<AddProduct/>}/>
  </Routes>
 </div>
 </Context>
)
  
}

export default App

import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Users from './Users'
import CreateUser from "./CreateUser";
import UpdateUser from './UpdateUser'



function App() {

  return(

    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
      </Routes>
      </BrowserRouter>
    </div>


    </>
  )
}

export default App;

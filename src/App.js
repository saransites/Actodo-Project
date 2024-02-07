import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import { useState } from 'react';
function App(){
  const [user,setuser]=useState(
    [
        {
            username:"saran",
            password:9584
        },
        {
            username:"mega",
            password:9584
        },
    ]
    )
    return(<>
    <BrowserRouter>

<Routes>
  <Route path="/" element={<Login user={user} setuser={setuser}/>}></Route>
  <Route path="/Signup" element={<Signup user={user} setuser={setuser} />}></Route>
  <Route path="/landingpage" element={<Landing/>}></Route>
</Routes>
</BrowserRouter>
    </>)
}
export default App
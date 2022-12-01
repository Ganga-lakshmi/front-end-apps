import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './Myprofile';
import Canvas from './Paint'

export const store = createContext();

const App = () => {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  const [token,setToken] = useState(null);
  return (
    <div>
      {/* <Provider store={[token,setToken]}> */}
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route exact path= "/" element = {<Nav/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<Myprofile/>}  />
          <Route path='/paint' element={<Canvas  />}  />

        </Routes>
      </BrowserRouter>
      </store.Provider>
      {/* </Provider> */}
    </div>
  )
}

export default App
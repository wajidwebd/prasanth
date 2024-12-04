import logo from './logo.svg';
import './App.css';
import { Prem } from './Prem';
import { Lakshmi } from './Lakshmi';
import { createContext, useState } from 'react';
import { Filetwo } from './Filetwo';
import { Childone } from './Childone';
import { Project } from './Project';
import { Callback } from './Callback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Product } from './Product';
import { Cart } from './Cart';

export const datapasstofourfile = createContext()
function App() {
  // let myname = 'prem';
  // let myage = 24;
  // let role = "developer";

  // var myage1 = 56;

  // alert(myname)
  // const [myname,setMyname] = useState('lakshmi')

  // const myname = prompt("enter your name")


  // conditional rendering

  const [istrueorfalse, setIstrueorfalse] = useState(false)
  const [comman,setCommon] = useState([])
  const [myname,setMyname] = useState('ak')
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="App">
      {/* <h1 id='ss'>welcome to react class</h1> */}
      {/* <Prem passing={myname} myagepassing={myage} data={myage1}></Prem> */}
      {/* <Lakshmi data={myname}></Lakshmi>
      <Filetwo data={myname}></Filetwo> */}
      {/* <childfourpass.Provider value={myname}> */}
      <datapasstofourfile.Provider value={myname}>
        <Childone ></Childone>
      </datapasstofourfile.Provider>
      
      
      {/* </childfourpass.Provider> */}
      {/* <Project></Project> */}
      {/* <Callback></Callback> */}
      {/* <BrowserRouter>
      <Routes>
        <Route element={<Header></Header>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product comman={comman} setCommon={setCommon}></Product>}></Route>
        <Route path='/ak' element={<Cart comman={comman} setCommon={setCommon}></Cart>}></Route>
        </Route>
      </Routes>
      </BrowserRouter> */}
      {/* <Callback></Callback> */}

    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Link, RouterProvider, createBrowserRouter, useNavigate, } from 'react-router-dom';
import { useContext,createContext } from 'react';




const Auth = createContext({
  user: false,
  setUser: () => {},
})


const Aplicati = () => {    
  const[nome, setNome] = useState('');
  const[password, setPassword] = useState('');


  const context = useContext(Auth);



  // const send = (e) => {
  //   e.preventDefault();


  //   useEffect(() => {

  //     fetch('https://dull-pear-haddock-belt.cyclic.app/auth', {
  //       method: "POST",
  //       body: JSON.stringify({
  //         username: nome,
  //         password: password,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((val) => {
  //       return val.json();
  //     })
  //     .then((res) => {
  //       context.setUser(res)
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });


  //   }, [])
  
   


 

 
  // };

const navigate = useNavigate()


  const send = (e) => {
    e.preventDefault();
  
    fetch('https://dull-pear-haddock-belt.cyclic.app/auth', {
      method: "POST",
      body: JSON.stringify({
        username: nome,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((val) => {
      return val.json();
    })
    .then((res) => {
      context.setUser(res);
      navigate('/welcome'); 
      
    })
    .catch((err) => {
      console.error(err);
    });
  };
  

    return(
        <>
          <h3>my blog</h3>

<form>
  <label htmlFor='nome'>Nome</label>
  <input type='text'  id='nome' value={nome} onChange={(e) => setNome(e.target.value)}/><br/>


  <label htmlFor='pass'>Password</label>
  <input type='text' id='pass' value={password}  onChange={(e) => {setPassword(e.target.value)}} /><br/>


  {/* <button type='submit' onClick={send}><Link to={'/welcome'}>Send</Link></button> */}

  <button type='submit' onClick={send}>Send</button>
</form>
        
        </>
    )
};





const Blo = () => {

  const context = useContext(Auth);
  const navigate = useNavigate()
   
  useEffect(() => {
    if(!context.user){
      navigate('/')
    }
  })


  return(
      <>

      <h1>Welcome to my Blog</h1>
      
      
      </>
  )
}









const router = createBrowserRouter([
  {
    path:'/',
    element:<Aplicati/>
  },
  {
    path:'/welcome',
    element: <Blo/>
  }
]);







function App() {

  const [user, setUser] = useState(false)


 
  return (
    <>

     <Auth.Provider value={{user, setUser}}>
        <RouterProvider router={router}/>
     </Auth.Provider>
    
  

    </>
  )
}

export default App

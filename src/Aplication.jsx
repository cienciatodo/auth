import { useState } from "react";

const Aplication = () => {

    
  const[nome, setNome] = useState('');
  const[password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false)


  const send = (e) => {
    e.preventDefault();
  
    fetch('https://dull-pear-haddock-belt.cyclic.app/auth', {
      method: "POST",
      body: JSON.stringify({
        username: nome,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((val) => {
      return val.json();
    })
    .then((res) => {
      console.log(res);
      setConfirm(true)
     
    })
    .catch((err) => {
      console.error(err);
    });


    setNome('');
    setPassword('')
  };
  


    return(
        <>
          <h3>my blog</h3>

<form onSubmit={send}>
  <label htmlFor='nome'>Nome</label>
  <input type='text'  id='nome' value={nome} onChange={(e) => setNome(e.target.value)}/><br/>


  <label htmlFor='pass'>Password</label>
  <input type='text' id='pass' value={password}  onChange={(e) => {setPassword(e.target.value)}} /><br/>


  <button>Enviar</button>






</form>
        
        </>
    )
}


export default Aplication;
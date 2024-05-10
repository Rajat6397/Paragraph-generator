import React, { useState } from 'react'
import './App.css'
import Paragraph from './Component/Paragraph';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handelSubmit=(e)=>{
    e.preventDefault()

    let amount = parseInt(count);

    if(count<=0)
      {
        amount=1;
      }
      if(amount>8)
        {
          amount=8;
        }
        setText(Paragraph.slice(0, amount))
  }
return (
   <>
   <section className='section-center'>
    <h1>Generate Lorem Isum</h1>
    <form onSubmit={handelSubmit}>
      <input 
      type='number'
      name='amount'
      id='amount'
      value={count}
      onChange ={(e)=> setCount(e.target.value)}
      />
      <button className='btn'>Generate</button>
    </form>
    <article>
      {
        text.map((item, index)=>{
          return <p key={index}>{item}</p>
        })
      }
    </article>
    </section></>
  );
}

export default App

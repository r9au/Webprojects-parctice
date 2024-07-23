import React from 'react'
import "./Sdetails.css"
import { useForm } from 'react-hook-form'
import {Progcontext} from '../contexts/Progcontext'
import { useContext,useState,useRef} from 'react'
import Progress from './Progress'
import { useNavigate} from "react-router-dom"
const Sdetails = () => {
    const navigate=useNavigate()
    const [opt, setopt] = useState("")
    const [sub, setsub] = useState(false)
    const btnref=useRef()
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting },
    } = useForm();
  
    const handleclick=()=>{
      navigate("/p&c");
  }
  const check=()=>{
      setsub(!sub)
  }
  const handchange=(event)=>{
    setopt(event.target.value)
    console.log(opt)
  }
  
    const onsubmit = async(data) => {
      console.log(data)
      progress(active < steps.length ? active + 1 : active)
      handleclick()
    }
    const {active,steps,progress}=useContext(Progcontext)
    const rad=watch("field")
  return (
    <>
    <header>
        <div className="nav">
          <nav className='bar'>
            <div className="content">DealDone</div>
            <div className="content">Seller central</div>
          </nav>
        </div>
      </header>
      <main>
        <div className='head'>
          <h1>Seller registration</h1>
        </div>
        <div className="track">
         <Progress steps={steps} active={active} progress={progress}/>
      </div>
        <div className='sech'>
          <h2>Shipping Settings</h2>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="check">
            <div className="ops">
            <div className="op">
              <input type='radio' id='ops2' className='ofe' value='ship on your own'{...register("ops2",{required:{value:true,message:"Select any one option"}})}/>
              <label className='label' htmlFor='ops1'>Shipping on your own cost</label>
              {errors.ops1 && <div className='red'>{errors.ops1.message}</div>}
            </div>
            <div className="op">
              <input type='radio' id='ops2' className='ofe' value='Need our ship'{...register("ops2",{required:{value:true,message:"Select any one option"}})}/>
              <label className='label' htmlFor='ops2'>Need our Shipping facility</label>
              {errors.ops2 && <div className='red'>{errors.ops2.message}</div>}
            </div>
          </div>
          <div className="chg">
            <label htmlFor='fix' className='label'>Shipping Charges</label>
            <div className='fix'>2000</div>
          </div>
          </div>
          <div className="inf">If you want to opt for our shipping facility you will have to pay specified amount for charges.</div>
          <div className="pg">
            <div className="read">Read Shipping policies</div>
            <div className="link"></div>
          </div>
          <div className="lc">
          <input type='checkbox' className='chk' onChange={check}/>
          <label htmlFor='chk' className='cs'>By checking this you agree our shipping policies and Accepted it</label>
          </div>
          <div className="btn1">
            <button className='btns' ref={ btnref} type='submit' disabled={isSubmitting  || !sub}>
              Save & continue
            </button>
          </div>
        </form>
        {/* Display general form errors */}
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </main>
    </>
  )
}

export default Sdetails
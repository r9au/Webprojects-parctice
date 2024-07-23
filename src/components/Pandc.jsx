import React from 'react'
import { useContext,useState ,useRef,useEffect} from 'react'
import "./Pandc.css"
import Progress from './Progress'
import { useForm } from 'react-hook-form'
import {Progcontext} from '../contexts/Progcontext'
const Pandc = () => {
    const btnref=useRef()
    const pw=useRef()
    const cpw=useRef()
    const {
      register,
      handleSubmit,
      watch,
      setError,
      formState: { errors, isSubmitting },
    } = useForm();
    const [sub, setsub] = useState(false)
  const check=()=>{
    setsub(!sub)
  }
  useEffect(() => {
    setError("cpas",{
        type:"manual",
        message:"The confirm password should match"
    })
}, [setError])
  const onsubmit = async(data) => {
    console.log(data)
    progress(active < steps.length ? active + 1 : active)
    handleclick()
  }
  const handleclick=()=>{
    //   navigate("/bdetails");
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
          <h2>Final Confirmation</h2>
        </div>
        <div className="subt">
          <h3>Create Password</h3>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="pas">
            <label className="label" htmlFor="pas">Create Password*</label>
            <input
              className='field'
              type='password'
              placeholder='Enter password'
              id='pas'
              ref={pw}
              {...register("pas", {
                required: { value: true, message: "Password id required" }
              })}
            />
            {errors.pas && <div className='red'>{errors.pas.message}</div>}
            <br />
          </div>
          <div className="cpas">
            <label className="label" htmlFor="cpas">Confirm Password*</label>
            <input
              className='field'
              type='password'
              id='cpas'
              placeholder='Confirm password'
              ref={cpw}
              {...register("cpas", {
                required: { value: true, message: "confirm your password" }
              })}
            />
            {errors.cpas && <div className='red'>{errors.cpas.message}</div>}
          </div>
          <div className="lc">
          <input type='checkbox' className='chk' onChange={check}/>
          <label htmlFor='chk' className='cs'>By checking this you agree our shipping policies and Accepted it</label>
          </div>

          <div className="btn1">
          <button className='btns' ref={ btnref} type='submit' disabled={isSubmitting  || !sub}>
              Confirm & Create
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

export default Pandc
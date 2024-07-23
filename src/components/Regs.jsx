import React from 'react'
import { useForm } from 'react-hook-form'
import {Progcontext} from '../contexts/Progcontext'
import { useContext} from 'react'
import Progress from './Progress'
import { useNavigate} from "react-router-dom"
import "./Regs.css"
const Regs = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const {active,steps,progress}=useContext(Progcontext)
  const handleclick=()=>{
    navigate("/bdetails");
}

  const onsubmit = async(data) => {
    console.log(data)
    progress(active < steps.length ? active + 1 : active)
    handleclick()
  }
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
          <h2>Seller Details</h2>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="name">
            <label className="label" htmlFor="name">Full name*</label>
            <input
              className='field'
              type='text'
              placeholder='Name'
              id='name'
              {...register("name", {
                required: { value: true, message: "Full name is required" }
              })}
            />
            {errors.name && <div className='red'>{errors.name.message}</div>}
            <br />
          </div>
          <div className="contact">
            <label className="label" htmlFor="contact">Contact number*</label>
            <input
              className='field'
              type='text'
              placeholder='Contact number'
              id='contact'
              {...register("contact", {
                required: { value: true, message: "Contact number is required" },
                minLength: { value: 10, message: "Invalid Contact Number" },
                maxLength: { value: 10, message: "Invalid Contact Number" }
              })}
            />
            {errors.contact && <div className='red'>{errors.contact.message}</div>}
          </div>
          <div className="email">
            <label className="label" htmlFor="email">Email id*</label>
            <input
              className='field'
              type='text'
              id='email'
              placeholder='Email'
              {...register("email", {
                required: { value: true, message: "Email is required" }
              })}
            />
            {errors.email && <div className='red'>{errors.email.message}</div>}
          </div>
          <div className="dob">
            <label className="label" htmlFor="dob">Date of Birth*</label>
            <input
              className='field'
              type='date'
              id='dob'
              placeholder='dd/MM/YY'
              {...register("dob", {
                required: { value: true, message: "Date of Birth is required" }
              })}
            />
            {errors.dob && <div className='red'>{errors.dob.message}</div>}
          </div>
          <div className="rea">
            <label className="label" htmlFor="address">Residential Address*</label>
            <input
              className='field'
              type='text'
              id='address'
              placeholder='Residential Address'
              {...register("address", {
                required: { value: true, message: "Residential Address is required" }
              })}
            />
            {errors.address && <div className='red'>{errors.address.message}</div>}
          </div>
          <div className="btn1">
            <button className='btns' type='submit' disabled={isSubmitting && active === steps.length}>
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

export default Regs
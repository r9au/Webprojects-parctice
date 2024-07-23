import React from 'react'
import { Progcontext } from '../contexts/Progcontext'
import Progress from './Progress'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "./Tdetails.css"

const Tdetails = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const handleclick=()=>{
    navigate("/sdetails");
  }
  const onsubmit = async(data) => {
    console.log(data)
    progress(active < steps.length ? active + 1 : active)
    handleclick()
  }
  const {active,steps,progress}=useContext(Progcontext)
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
          <h2 className='shead'>Tax Details</h2>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="s1">
          <div className="name">
            <label className="label" htmlFor="name">Seller legal name*</label>
            <input
              className='field'
              type='text'
              placeholder='Seller Name'
              id='name'
              {...register("name", {
                required: { value: true, message: "Store name is required" }
              })}
            />
            {errors.name && <div className='red'>{errors.name.message}</div>}
            <br />
          </div>
          <div className="state">
            <label className="label" htmlFor="state">State*</label>
            <input
              className='field'
              type='text'
              placeholder='Type'
              id='state'
              {...register("state", {
                required: { value: true, message: "Contact number is required" }
              })}
            />
            {errors.state && <div className='red'>{errors.state.message}</div>}
          </div>
          <div className='sub'><h2 className='cf'>Gst Information</h2></div>
          <div className='sec'>
          <div className="gstn">
            <label className="label" htmlFor="gstn">Gst Number*</label>
            <input
              className='field'
              type='number'
              id='gstn'
              placeholder='15 digit number'
              {...register("gstn", {
                required: { value: true, message: "Gst number is required", minLength:{value:10 ,message:"Invalid Gst Number"},maxLength:{value:10 ,message:"Invalid Gst Number"}  }
              })}
            />
            {errors.gstn && <div className='red'>{errors.gstn.message}</div>}
          </div>
          <div className='line'></div>
          </div>
          <div className="gstd">
            <label className="label" htmlFor="gstd">Gst Document</label>
            <input
              className='field'
              type='file'
              id='gstd'
              placeholder='Website URL'
              {...register("gstd",{required:{value:true, message:"Proof document required"}})}
            />
            {errors.gstd && <div className='red'>{errors.gstd.message}</div>}
          </div>
            <div className="pan">
            <label className="label" htmlFor="pan" id='log'>Pan number*</label>
            <input
              className='field'
              type='number'
              id='pan'
              placeholder='upload'
              {...register("pan", {
                required: { value: true, message: "Pan number is required" ,validate: (value)=>isNaN(value)?"Invalid Pan":true}
              })}
            />
            {errors.pan && <div className='red'>{errors.pan.message}</div>}
            </div>
            </div>
          <div className="btn1">
            <button className='btns' type='submit' disabled={isSubmitting}>
              Save and Continue
            </button>
          </div>
        </form>
        {/* Display general form errors */}
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </main>
      {/* https://colorlib.com/wp/bootstrap-file-uploads/ */}
    </>
  )
}

export default Tdetails

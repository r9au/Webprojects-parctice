import React from 'react'
import "./Bdetails.css"
import { useForm } from 'react-hook-form'
import Progress from './Progress';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progcontext } from '../contexts/Progcontext';
import Upload from './Upload';
const Bdetails = () => {
  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        clearErrors,
        setValue,
        formState: { errors, isSubmitting },
      } = useForm();

      const handleclick=()=>{
        navigate("/tdetails")
      }
      const onsubmit = async(data) => {
        console.log(data)
        progress(active< steps.length ?active+1:active)
        handleclick()
      }
      const {steps,active,progress}= useContext(Progcontext)
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
          <h2>Business Details</h2>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className='container'>
          <div className="s1">
          <div className="name">
            <label className="label" htmlFor="name">Company/Store name*</label>
            <input
              className='field'
              type='text'
              placeholder='Store Name'
              id='name'
              {...register("name", {
                required: { value: true, message: "Store name is required" }
              })}
            />
            {errors.name && <div className='red'>{errors.name.message}</div>}
            <br />
          </div>
          <div className="btype">
            <label className="label" htmlFor="btype">Business type*</label>
            <input
              className='field'
              type='text'
              placeholder='Type'
              id='btype'
              {...register("btype", {
                required: { value: true, message: "Buisiness type is required" }
              })}
            />
            {errors.btype && <div className='red'>{errors.btype.message}</div>}
          </div>
          <div className="badd">
            <label className="label" htmlFor="badd">Business address*</label>
            <input
              className='field'
              type='text'
              id='badd'
              placeholder='Business address'
              {...register("badd", {
                required: { value: true, message: "Address is required" }
              })}
            />
            {errors.badd && <div className='red'>{errors.badd.message}</div>}
          </div>
          <div className="url">
            <label className="label" htmlFor="url">Business/website URL</label>
            <input
              className='field'
              type='text'
              id='url'
              placeholder='Website URL'
              {...register("url")}
            />
          </div>
          </div>
          <div className="logo">
            <div className="sec">
            <label className="label" htmlFor="logo" id='log'>Company Logo*</label>
            <Upload register={register} errors={errors} clearErrors={clearErrors} setValue={setValue}/>
            </div>
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
    </>
  )
}

export default Bdetails

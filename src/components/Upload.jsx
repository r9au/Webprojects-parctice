import React,{useRef,useState} from 'react'
import "./Upload.css"
// import { useForm } from 'react-hook-form'
const Upload = ({register,errors,clearErrors,setValue}) => {
   const [img, setimg] = useState(null)
   const [fname, setfname] = useState("No Selection")
   const [ferr, setferr] = useState()
   let ex=false

   const handchange=(event)=>{
    const file=event.target.files[0];
    const fn=file.name
    const ext=[".jpeg",".jpg",".png"]
    for (const x of ext) {
      if(fn.endsWith(x)){
        ex=true
        break;
      }
    }
    if(ex){
       setimg(URL.createObjectURL(event.target.files[0])) 
        setfname(event.target.files[0].name) 
        register('imf')
        clearErrors('imf')
        setValue('upf',file)
    }
    else{
         setferr("Only image files are allowed")
       setimg()
       setfname("")
      // return ferr
    }
   }
  return (
    <>
    <div className='box' onClick={()=>document.querySelector(".upf").click()}>
        <div className="ent">
          <div className="log">
        <input type='file' accept='image/*'name='' id='imf' className='upf' hidden {...register("imf",{required:{value:true,message:"The logo is required"}})} onChange={handchange}/>
        {img?
        <img src={img} width={150} height={150} alt={fname}/>
    :<><img src='https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg' className="fixi" width={150} height={150}/><p>Browse Your files</p></>}
    <span>{fname}</span>
    </div>
        </div>
        {errors.imf && <div className='red'>{errors.imf.message}</div>}
    </div>
    <div className="red">{ferr}</div>
    </>
  )
}
export default Upload
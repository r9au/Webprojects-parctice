import {createContext,useState } from "react";
const Progcontext= createContext()
const Progprovider= ({children})=>{
    const [active, setactive] = useState(1)
  const steps=[1,2,3,4,5]
  const progress=(act)=>{
    setactive(act)
  }
  return(
    <Progcontext.Provider value={{active,steps,progress}}>
        {children}
    </Progcontext.Provider>

  );
};
export {Progprovider,Progcontext}
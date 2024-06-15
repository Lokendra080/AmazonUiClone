import React, {  createContext, useState } from 'react'

export const LoginContex = createContext();



const Contex = ({Children}) => {
const [account, setAccount]=useState("")

  return <>
    <LoginContex.Provider value={{account, setAccount}}>
        {Children}
    </LoginContex.Provider>
    </>;
  
};

export default Contex

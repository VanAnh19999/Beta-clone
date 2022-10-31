import React, { useState } from "react"
import Resign1 from "./Resign1"
import Signin from "./Signin"

const Resign = () => {
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState (false)
  function handleClick(){
    if(show === true){
      setShow1(false)
    }else{
      setShow1(true)
    }
    }

  return (
    <div>
    <div>
    <button onClick={()=> setShow(!show)}>Đăng Nhập</button>
    {show && <Signin/>}
    </div> 
    <div>
    <button onClick={handleClick}>Đăng ký</button>
    {show1 && <Resign1/>}
    </div>
    </div>
  )
}

export default Resign
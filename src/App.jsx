import { motion } from "framer-motion"


import './App.css'

function App() {


  return (
    <>
     

      <div className='fm-container bg-primary flex justify-center items-center'>
      
        
        <motion.form 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      

         action="" className='w-[455px] h-[455px] bg-secondary flex justify-center items-center flex-col rounded-[34px] text-center'>
         
          <div className="px-16 my-6">
            <h1 className='text-4xl	font-bold	'>Create An Account</h1>
            <p className='text-sm	text-[#32403b]'>Create an account to enjoy all the services without any ads for free!</p>
          </div>
        
          <div className="mb-3">
            <input type="email" name='email' placeholder='Email Address' className='w-[375px] h-[55px] rounded-xl	border-[1px] pl-6' />
          </div>

          <div className="mb-3">
            <input type="password" name='password' placeholder='Password' className='w-[375px] h-[55px] rounded-xl border-[1px] pl-6' />
          </div>

          <div className="my-3">
            <button className='w-[255px] h-[59px] bg-[#84c7ae] rounded-2xl text-white text-[22px] font-bold px-12 py-4'>Create Account</button>
          </div>
            <p className='text-sm	text-[#32403b]'>Already Have An Account? <ins className="text-primary">Sign In</ins></p>
        </motion.form>
        </div>


    </>
  )
}

export default App

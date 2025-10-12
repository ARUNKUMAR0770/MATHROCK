import React from 'react'

const Login = () => {
  return (
    <>
      <div className='pt-[60px] p-6 text-white w-screen h-screen flex items-center justify-center'>
        <div className="bg-black flex flex-col items-center justify-center w-[400px] gap-4 rounded-2xl p-8">
            <h1 className='text-2xl font-bold font-poppins'>Login</h1>
            <div className="">
              <input type="text" placeholder='Enter Username' className='border w-full rounded p-2 ' />
              <input type="pass" placeholder='Enter password' className='border w-full my-4 rounded p-2' />
            </div>
            <button className='btn'>Login</button>
          <div className="">
            <a href="">don't have account? SignUp</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
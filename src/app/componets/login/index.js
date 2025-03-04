"use clients"

import FormControls from "../form-controls"

const controls = [{
    
    name: 'username',
    placeholder: 'Enter Username',
    type: 'text',
    label: 'Enter Username'
},
{
    
    name: 'password',
    placeholder: 'Enter Password',
    type: 'password',
    label: 'Enter Password'  
}]

export default function Login({formData,setformData,handleLogin}){
    return(
        <div className="w-full"> 
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls 
                 controls={controls}
                 formData={formData}
                 setformData={setformData}/>
                <button onClick={handleLogin} className="mt-[10px] border border-green-600 p-4 font-bold 
                text-[16px]">Login</button>
            </div>
        </div>
    )
}
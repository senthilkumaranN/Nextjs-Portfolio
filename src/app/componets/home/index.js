"use client"

import FormControls from "../form-controls"

const controls = [{
    id: 1,
    name: 'heading',
    placeholder: 'Enter heading text',
    type: 'text',
    label: 'Enter heading text'
},
{
    id: 2,
    name: 'summary',
    placeholder: 'Enter Career text',
    type: 'text',
    label: 'Enter Career summary'  
}
]
export default function AdminHomeView({formData,setformData,handlesavedata,update}){

    return(
        <div className="w-full"> 
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls  
                 controls={controls}
                 formData={formData}
                 setformData={setformData}/>
                <button onClick={()=> handlesavedata('home')} className="mt-[10px] border border-green-600 p-4 font-bold 
                text-[16px]">{update ? "update info" : "Add info"}</button>
            </div>
        </div>
    )
}
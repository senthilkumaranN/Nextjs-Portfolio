"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: "aboutme",
        placeholder: "About Me",
        type: "text",
        label: "About Me",
    },
    {
        name: "noofprojects",
        placeholder: "No of projects",
        type: "text",
        label: "Enter no of Projects",
    },
    {
        name: "yearofexperience",
        placeholder: "No of Experience",
        type: "text",
        label: "Enter year of experience "
    },
    {
        name: "noofclients",
        placeholder: "No of clients",
        type: "text",
        label: "Enter no of clients"
    },
    {
        name: "skills",
        placeholder: "skills",
        type: "text",
        label: "skills"
    }
]
export default function AdminAboutView({formData,setformData,handlesavedata,update}){
    
    return(
        <div className="w-full"> 
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls  
                 controls={controls}
                 formData={formData}
                 setformData={setformData}/>
                <button onClick={()=>handlesavedata('about')} className="mt-[10px] border border-green-600 p-4 
                font-bold text-[16px]">{update ? "Update info" : "Add info"}</button>
            </div>
        </div>
    )
}
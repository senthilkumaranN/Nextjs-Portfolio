"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: "project",
        placeholder: "Project Name",
        type: "text",
        label: "Project Name",
    },
    {
        name: "technologies",
        placeholder: "Enter Technologies",
        type: "text",
        label: "Enter Technologies",
    },
    {
        name: "summary",
        placeholder: "Enter summary of your Project",
        type: "text",
        label: "Enter Summary"
    },
    {
        name: "website",
        placeholder: "Website",
        type: "text",
        label: "website"
    },
    {
        name: "github",
        placeholder: "GitHub",
        type: "text",
        label: "Github"
    }
    
]
export default function AdminProjectView({formData,setformData,handlesavedata,Data}){
    console.log(Data)
    return(
        <div className="w-full"> 
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-10">
                    {
                        Data && Data.length ?
                            Data.map((item) => (
                                <div key={item._id} className="flex flex-col gap-4 border p-4 border-green-700">
                                    <p>{item.project}</p>
                                    <p>{item.summary}</p>
                                    <p>{item.technologies}</p>
                                    <p>{item.website}</p>
                                    <p>{item.github}</p>
                                </div>
                            )) : null
                    }
                </div>
                <FormControls  
                 controls={controls}
                 formData={formData}
                 setformData={setformData}/>
                <button onClick={()=>handlesavedata('project')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}
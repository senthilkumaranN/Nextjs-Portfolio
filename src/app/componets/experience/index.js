"use client"

import FormControls from "../form-controls"

const controls = [
    {
        name: "position",
        placeholder: "Position",
        type: "text",
        label: "Position",
    },
    {
        name: "company",
        placeholder: "Company",
        type: "text",
        label: "Company",
    },
    {
        name: "duration",
        placeholder: "Duration",
        type: "text",
        label: "Duration"
    },

]
export default function AdminExperienceView({ formData, setformData, handlesavedata, Data }) {
    return (
        <div className="w-full">
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    {
                        Data && Data.length ?
                            Data.map((item) => (
                                <div key={item._id} className="flex flex-col gap-4 border p-4 border-green-700">
                                    <p>{item.position}</p>
                                    <p>{item.company}</p>
                                    <p>{item.duration}</p>
                                </div>
                            )) : null
                    }
                </div>
                <FormControls
                    controls={controls}
                    formData={formData}
                    setformData={setformData} />
                <button onClick={() => handlesavedata('experience')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">Add Info</button>
            </div>
        </div>
    )
}
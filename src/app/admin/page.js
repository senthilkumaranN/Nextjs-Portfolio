"use client";

import { useEffect, useState } from "react";
import AdminHomeView from "../componets/home";
import AdminAboutView from "../componets/about";
import AdminExperienceView from "../componets/experience";
import AdminEducationView from "../componets/education";
import AdminProjectView from "../componets/project";
import AdminContactView from "../componets/contact";
import { addData, getData, Logindata, updateData } from "../Service";
import Login from "../componets/login";

const initialHomedata = {
    heading: '',
    summary: ''
}

const initialAboutdata = {
    aboutme: '',
    noofprojects: '',
    yearofexperience: '',
    noofclients: '',
    skills: ''
}
const initialProjectdata = {
    project: '',
    technologies: '',
    summary: '',
    website: '',
    github: ''
}
const initialExperiencedata = {
    position: '',
    company: '',
    duration: ''
}
const initialEducationHomedata = {
    degree: '',
    year: '',
    college: ''
}
const initialLogindata = {
    name: '',
    password: ''
}
export default function AdminView() {

    const [currentSelectedTab, setcurrentSelectedTab] = useState("home")
    const [homeviewformdata, sethomeviewformdata] = useState(initialHomedata)
    const [aboutviewformdata, setaboutviewformdata] = useState(initialAboutdata)
    const [projectviewformdata, setprojectviewformdata] = useState(initialProjectdata)
    const [experienceviewformdata, setexperienceviewformdata] = useState(initialExperiencedata)
    const [educationviewformdata, seteducationviewformdata] = useState(initialEducationHomedata)
    const [loginformdata, setloginformdata] = useState(initialLogindata)
    const [allData, setallData] = useState({})
    const [update, setupdate] = useState(false)
    const [authUser, setauthUser] = useState(false)

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView formData={homeviewformdata} setformData={sethomeviewformdata}
                handlesavedata={handlesavedata} update={update} />
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView formData={aboutviewformdata} setformData={setaboutviewformdata}
                handlesavedata={handlesavedata} update={update} />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView formData={experienceviewformdata} setformData={setexperienceviewformdata}
                handlesavedata={handlesavedata} Data={allData.experience} />
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView formData={educationviewformdata} setformData={seteducationviewformdata}
                handlesavedata={handlesavedata} Data={allData.education} />
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView formData={projectviewformdata} setformData={setprojectviewformdata}
                handlesavedata={handlesavedata} Data={allData.project} />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView  data={allData && allData?.contact}/>
        }
    ]

    async function extractData() {
        const response = await getData(currentSelectedTab)

        if (currentSelectedTab === "home" && response &&
            response.data &&
            response.data.length) {
            sethomeviewformdata(response && response.data[0])
            setupdate(true);
        }

        if (currentSelectedTab === "about" && response && response.data &&
            response.data.length) {
            setaboutviewformdata(response && response.data[0])
            setupdate(true);
        }
        if (response?.success) {
            setallData({
                ...allData,
                [currentSelectedTab]: response && response.data
            })
        }
    }

    function resetdata() {
        sethomeviewformdata(initialHomedata);
        setaboutviewformdata(initialAboutdata);
        setprojectviewformdata(initialProjectdata);
        seteducationviewformdata(initialEducationHomedata);
        setexperienceviewformdata(initialExperiencedata);
    }
    async function handlesavedata() {
        const dataMap = {
            home: homeviewformdata,
            about: aboutviewformdata,
            project: projectviewformdata,
            experience: experienceviewformdata,
            education: educationviewformdata
        }

        const response = update ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
            : await addData(currentSelectedTab, dataMap[currentSelectedTab])

        console.log("response", response)

        if (response?.success) {
            resetdata()
            extractData()
        }
    }

    async function handleLogin() {
        const res = await Logindata(loginformdata)
        console.log(res)
        if (res?.success) {
            setauthUser(true)
            sessionStorage.setItem("authUser", JSON.stringify(true))
        }
    }

    useEffect(() => {
        setauthUser(JSON.parse(sessionStorage.getItem("authUser")));
    }, [])

    useEffect(() => {
        extractData()
    }, [currentSelectedTab])

    if (!authUser) return (
    <Login formData={loginformdata} handleLogin={handleLogin} setformData={setloginformdata} />
    );

    

    return (
        <div className="border-b border-gray-200">
            <nav className="mb-0.5 flex justify-center space-x-6" role="tablist">
                {
                    menuItem.map((item) => (
                        <button key={item.id}
                            type="button"
                            className="p-4 font-bold text-xl text-black"
                            onClick={() => {
                                setcurrentSelectedTab(item.id)
                                resetdata()
                                setupdate(false)
                            }}>
                            {item.label}
                            
                        </button>
                       
                    ))
                    }
                    <button onClick={()=>{
                        setauthUser(false)
                        sessionStorage.removeItem('authUser')
                    }} className="p-4 font-bold text-xl text-black">Logout</button>
                
            </nav>
            <div className="mt-10">
                {
                    menuItem.map((item) => item.id === currentSelectedTab && item.component)
                }
            </div>
        </div>
    )
}
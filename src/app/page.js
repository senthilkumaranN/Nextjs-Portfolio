import ClientAboutView from "./clientcomponent/about";
import ClientContactView from "./clientcomponent/contact";
import ClientExperienceandEducationView from "./clientcomponent/experience";
import ClientHomeView from "./clientcomponent/home";
import ClientprojectView from "./clientcomponent/project";

async function extractdata(currentSection){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${currentSection}/get`,{
            method: 'GET',
            cache: "no-store",
        })

        const data = await res.json();

        return data && data?.data;

    }catch(e){
        console.log(e)
    }
}

export default async function Home(){
    const homesectiondata = await extractdata('home');
    const aboutsectiondata = await extractdata('about');
    const experiencesectiondata = await extractdata('experience');
    const educationsectiondata = await extractdata('education');
    const projectsectiondata = await extractdata('project');
    return(
        <div>
            <ClientHomeView data={homesectiondata} />
            <ClientAboutView data={aboutsectiondata}/>
            <ClientExperienceandEducationView experienceData={experiencesectiondata}
            educationData={educationsectiondata}/>
            <ClientprojectView data={projectsectiondata} />
            <ClientContactView/>
        </div>
    )
}
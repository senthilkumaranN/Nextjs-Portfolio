"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import ClientAboutView from "./clientcomponent/about";
import ClientContactView from "./clientcomponent/contact";
import ClientExperienceandEducationView from "./clientcomponent/experience";
import ClientHomeView from "./clientcomponent/home";
import ClientprojectView from "./clientcomponent/project";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function fetchData(section) {
  try {
    const res = await fetch(`${apiUrl}/${section}/get`, { cache: "no-store" });
    const data = await res.json();
    return data?.data;
  } catch (e) {
    console.error(`Error fetching ${section}:`, e);
    return null;
  }
}

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      setHomeData(await fetchData("home"));
      setAboutData(await fetchData("about"));
      setExperienceData(await fetchData("experience"));
      setEducationData(await fetchData("education"));
      setProjectData(await fetchData("project"));
    }

    fetchAllData();
  }, []);

  return (
    <div>
      <ClientHomeView data={homeData} />
      <ClientAboutView data={aboutData} />
      <ClientExperienceandEducationView
        experienceData={experienceData}
        educationData={educationData}
      />
      <ClientprojectView data={projectData} />
      <ClientContactView />
    </div>
  );
}

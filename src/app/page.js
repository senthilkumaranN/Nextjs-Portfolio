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

    if (!res.ok) {
      throw new Error(`Failed to fetch ${section}, status: ${res.status}`);
    }

    const data = await res.json();
    return data?.data ?? []; // Ensure an empty array is returned if data is null
  } catch (e) {
    console.error(`Error fetching ${section}:`, e);
    return []; // Return an empty array instead of null
  }
}


export default function Home() {
  const [homeData, setHomeData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [projectData, setProjectData] = useState([]);

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

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Ensure it's set in .env.local

export async function addData(currentTab, formData) {
    try {
        const response = await fetch(`${apiUrl}/${currentTab}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
    }
}

export async function getData(currentTab) {
    try {
        const response = await fetch(`${apiUrl}/${currentTab}/get`, {
            method: "GET",
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${currentTab}: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        
        return result?.data ? result : { data: [] };
    } catch (e) {
        console.error("Error fetching data:", e);
        return { success: false, data: [] };  // Return a default object to prevent crashes
    }
}

export async function updateData(currentTab, formData) {
    try {
        const response = await fetch(`${apiUrl}/${currentTab}/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
    }
}

export async function Logindata(formData) {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
    }
}

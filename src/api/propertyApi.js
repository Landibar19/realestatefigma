import axios from 'axios';

export const fetchPropertiesfromApi = async () => {
  try {
    const response = await axios.get("https://realestatebackend-4.onrender.com/properties/get-all-property");
    console.log(response)
    console.log(response.data.properties);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error("Error fetching properties");
  }
}
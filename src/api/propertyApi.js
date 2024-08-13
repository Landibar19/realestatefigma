import axios from 'axios';

export const fetchPropertiesfromApi = async () => {
  try {
    const response = await axios.get("http://localhost:3001/properties/get-all-property");
    console.log(response)
    console.log(response.data.properties);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw new Error("Error fetching properties");
  }
}
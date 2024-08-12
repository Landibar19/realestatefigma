import axios from 'axios';

export const fetchPropertiesfromApi = async () => {
  try {
    const response = await axios.get("http://localhost:3001/properties/get-all-property");
    console.log(response); // Logs the entire response object
    console.log(response.data.properties); // Logs only the data part of the response
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error); // Logs the error
    throw new Error("Error fetching properties");
  }
}
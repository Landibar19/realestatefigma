
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPropertiesfromApi}  from "../../api/propertyApi"

export const fetchProperties = createAsyncThunk(
    'properties/fetchProperties',
    async () => {
        const response = await fetchPropertiesfromApi();
        console.log(response)
        return response;
    }
)
import {createSlice} from '@reduxjs/toolkit';
import { fetchProperties } from '../thunks/propertyThunks';

const propertySlice = createSlice({
    name: 'properties',
    initialState: {
        loading: false,
        properties: [],
        error:null
    },
    reducers :{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProperties.pending,(state) => {
            state.loading=true;
        })
        .addCase(fetchProperties.fulfilled,(state,action) => {
            state.loading=false;
            state.properties=action.payload;
        })  
        .addCase(fetchProperties.rejected,(state,action) => {
            state.loading=false;
            state.error=action.error.message;
        })
    },
});

export default propertySlice.reducer;
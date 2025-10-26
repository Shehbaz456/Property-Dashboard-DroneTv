// src/app/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/properties", // your backend URL
  }),
  tagTypes: ["Property"],
  endpoints: () => ({}), // extend this later
});

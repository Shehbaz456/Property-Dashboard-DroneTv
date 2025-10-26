// src/app/api/propertyApiSlice.js
import { apiSlice } from "./apiSlice";

export const propertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => "/",
      providesTags: ["Property"],
    }),

    getPropertyById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Property"],
    }),

    addProperty: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Property"],
    }),

    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Property"],
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useAddPropertyMutation,
  useDeletePropertyMutation,
} = propertyApiSlice;

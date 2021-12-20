import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApiSlice = createApi({
  // when we attach this to our redux store, where are we keeping the data in the reducers
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    // baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
    baseUrl: "http://localhost:5000/",
    // if the endpoint requires auth, you need to add header with your API key
  }),
  // try to define the expected endpoints upfront as part of the structure
  tagTypes: ["Product"],
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/product",
       
      }),
      getProductById: builder.query({
        query: (id) => `/product/${id}`,

      }),

      addProduct: builder.mutation({
        query: (userObject) => ({
          url: "/product",
          method: "POST",
          body: userObject,
        }),

      }),
    };
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApiSlice;

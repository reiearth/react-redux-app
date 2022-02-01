import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = '5852e4e3-b5f6-45f0-8021-6ca84f7ccebf';

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

//define API Slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);

      return headers;
    }
    
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number|void> (
        {query(limit = 50) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;


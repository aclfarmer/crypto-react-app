import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangeApiHeaders = {
      'x-rapidapi-host': 'coinlore-cryptocurrency.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
}

const baseUrl = 'https://coinlore-cryptocurrency.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoExchangeApiHeaders})

export const cryptoExchangeApi = createApi ({
    reducerPath: 'cryptoExchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: (count) => createRequest(`/api/exchanges/`),
        }),
    })
}); 

export const {
    useGetExchangesQuery,
} = cryptoExchangeApi;
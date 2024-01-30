import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from '../type';
export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.0.219:8080' }),
    endpoints: (builder) => ({
        addEmployee: builder.mutation({
            query:(body)=>({
                url: '/addEmployee',
                method: 'POST',
                body: body,
            }),
          
        }),
        loginUser: builder.mutation({
            query:(body)=>({
                url: '/login',
                method: 'POST',
                body: body,
            }),
          
        }),
        logoutUser: builder.query<void, void>({
            query:()=> `/logout`
            
        }),
        getEmployees:builder.query<Employee[], void>({
            query:()=>({
                url: '/employees',
                method: 'GET',
            })
        })

     
    }),
    
  })
  export const {useAddEmployeeMutation,useLoginUserMutation, useLazyLogoutUserQuery, useGetEmployeesQuery, } = employeeApi;
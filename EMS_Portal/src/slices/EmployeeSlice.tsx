import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../models/EmployeeModel";

export const employeeApi = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/employees/',
        // baseUrl: 'http://192.168.1.27:8181/employees/',
    }),
    tagTypes: ["Employee"],
    endpoints: (builder) => ({
        getEmployees: builder.query<Employee[], void>({
            query: () => '/get_employees',
            providesTags: ["Employee"],
        }),
        addEmployee: builder.mutation<any, any>({
            query: (employee) => ({
                url: '/add_employee',
                method: 'POST',
                body: employee,
            }),
            invalidatesTags: ["Employee"],
        }),
        deleteEmployee: builder.mutation<void, string>({
            query: (id:string) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Employee"],
        }),
        updateEmployee: builder.mutation<any,any>({
            query: (emp) => ({
                url: `/update`,
                method: 'PUT',
                body: emp,
            }),
            invalidatesTags: ['Employee']
        }),
    }),
})

export const  { useGetEmployeesQuery, useAddEmployeeMutation, useDeleteEmployeeMutation, useUpdateEmployeeMutation } = employeeApi ;
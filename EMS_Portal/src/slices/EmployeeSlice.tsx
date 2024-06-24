import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../models/EmployeeModel";

export const employeeApi = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/employees/',
    }),
    tagTypes: ["Employee"],
    endpoints: (builder) => ({
        getEmployees: builder.query<Employee[], void>({
            query: () => '/get_employees',
            providesTags: ["Employee"],
        }),
        addEmployee: builder.mutation<void, Employee>({
            query: (employee) => ({
                url: '',
                method: 'POST',
                body: employee,
            }),
            invalidatesTags: ["Employee"],
        }),
        deleteEmployee: builder.mutation<void, number>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Employee"],
        }),
        updateEmployee: builder.mutation<void, Partial<Employee> & Pick<Employee, 'id'>>({
            query: ({id,...rest}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ['Employee']
        }),
    }),
})

export const  { useGetEmployeesQuery, useAddEmployeeMutation, useDeleteEmployeeMutation, useUpdateEmployeeMutation } = employeeApi ;
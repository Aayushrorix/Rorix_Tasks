// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Employee } from '../models/EmployeeModel';
import { useGetEmployeesQuery, useDeleteEmployeeMutation } from '../slices/EmployeeSlice';
// import { useEffect } from 'react';


function Home() {
    const nevigate = useNavigate()

    const [deleteEmployee] = useDeleteEmployeeMutation()

    type ApiResponse = {
        'employees': Employee[];
    };

    interface QueryState {
        data?: ApiResponse;
    }

    useGetEmployeesQuery()

    const allEmployees = useSelector((state:RootState) => {
        const queries = Object.values(state.api.queries) as QueryState[];

        return queries.length > 0 && queries[0].data ? queries[0].data.employees : [];
    });

    function deleteRecord(id:string){
        deleteEmployee(id)
    }

    // function editRecord(emp:any){
    //     nevigate('/edit-employee')
    // }

    console.log("All Employees -> ",allEmployees)

    return (
        <div>
            <div className='heading'>
                <span><h1 className='span-heading'>Employee Management System</h1></span>
            </div>

            <div className='div-btn-add-emp'>
                <button className='btn-add-employee' onClick={()=>nevigate('/add-employee')}>
                    <span>
                    <svg className='add-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg> 
                    Employee
                    </span>
                </button>
            </div>

            <div className='div-emp-list-container'>
                <table>
                    <thead>
                        <tr className='mat-header-row'>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Profile Picture</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Name</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Department</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Designation</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Email</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Mobile Number</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Resume</div>
                                </div>
                            </th>
                            <th className='mat-header-cell'>
                                <div>
                                    <div className='mat-sort-header-container'>Action</div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <tr className='mat-row'>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                            <td className='mat-cell'>Saaaa aaaaaaa</td>
                        </tr>

                        <tr className='mat-row'>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                            <td className='mat-cell'>Saaaaaaaaaaa</td>
                        </tr> */}

                        {Object.keys(allEmployees).length===0 && 
                            <tr className='mat-row'>
                                <td className='mat-cell' colSpan={8}>No Data</td>
                            </tr>
                        }
                        
                        {allEmployees.map((emp)=>(
                            <tr key={emp.id} className='mat-row'>
                                <td className='mat-cell'>{emp.personalDetail.firstName}</td>
                                <td className='mat-cell'>{emp.personalDetail.firstName}</td>
                                <td className='mat-cell'>{emp.professionalDetail.department}</td>
                                <td className='mat-cell'>{emp.professionalDetail.designation}</td>
                                <td className='mat-cell'>{emp.personalDetail.email}</td>
                                <td className='mat-cell'>{emp.personalDetail.mobileNumber}</td>
                                <td className='mat-cell'>{emp.id}</td>
                                <td className='mat-cell'>
                                    {/* <button type='button' onClick={() => editRecord(emp)}>Edit</button> */}
                                    <Link to={`/edit-employee/${emp.id}`} ><button className='btn-edit-employee'>Edit</button></Link>
                                    <button className='btn-delete-employee' type='button' onClick={()=>deleteRecord(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
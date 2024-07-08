import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './css/Home.css'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Employee } from '../models/EmployeeModel';
import { useGetEmployeesQuery, useDeleteEmployeeMutation } from '../slices/EmployeeSlice';
import { useEffect, useState } from 'react';

function Home() {
    const nevigate = useNavigate()

    const [deleteEmployee, { isLoading: deleteEmployeeLoading }] = useDeleteEmployeeMutation();

    const [loading, setLoading] = useState(false)
    const [empPages, setEmpPages] = useState<Employee[][]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [perPageEmployee, setPerPageEmployee] = useState(5)

    const [currentSorting, setCurrentSorting] = useState({cp:'',current:'',arrow:'n'})

    const [newEmpArray, setNewEmpArray] = useState<Employee[]>([])

    type ApiResponse = {
        'employees': Employee[];
    };

    interface QueryState {
        data?: ApiResponse;
    }

    const { isLoading: getEmployeesLoading } = useGetEmployeesQuery();
    useEffect(()=>{
        setLoading(getEmployeesLoading)
    },[getEmployeesLoading])

    useEffect(()=>{
        setLoading(deleteEmployeeLoading)
    },[deleteEmployeeLoading])

    const allEmployees = useSelector((state:RootState) => {
        const queries = Object.values(state.api.queries) as QueryState[];

        return queries.length > 0 && queries[0].data ? queries[0].data.employees : [];
    });

    useEffect(()=>{
        setNewEmpArray(allEmployees)
    },[allEmployees])

    function chunkArray(arr:Employee[], chunkSize:number) {
        var chunks = [];
        for (var i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    }

    useEffect(()=>{
        const sArray = chunkArray(newEmpArray,perPageEmployee)
        setEmpPages(sArray)
    },[newEmpArray,perPageEmployee])

    function deleteRecord(id:string){
        // setTimeout(()=>{
        //     setLoading(false)    
        // },500)
        setLoading(true)
        deleteEmployee(id)
        setCurrentPage(1)
        setCurrentSorting({cp:'',current:'',arrow:'n'})
    }

    useEffect(()=>{
        setCurrentPage(1)
    },[perPageEmployee])

    const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPage = parseInt(event.target.value);
        setCurrentPage(newPage);
    };

    const handlePerPageEmployee = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPerPage = parseInt(event.target.value);
        setPerPageEmployee(newPerPage)
    }

    function sortList(arr: Employee[], uemt: string | undefined = undefined, emt: string | undefined = undefined) {
        const sortedArr = arr.slice();
    
        if (uemt && emt) {
            sortedArr.sort((a: any, b: any) => {
                let nameA = a[uemt][emt].toLowerCase();
                let nameB = b[uemt][emt].toLowerCase();
                if(emt!=="mobileNumber"){
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                }
                else{
                    if (Number(nameA) < Number(nameB)) {
                        return -1;
                    }
                    if (Number(nameA) > Number(nameB)) {
                        return 1;
                    }
                }
                return 0;
            });
        }
    
        return sortedArr;
    }

    useEffect(()=>{
        if(currentSorting.arrow==="n"){
            setNewEmpArray(allEmployees)
        }
        else{
            const nArray = sortList(newEmpArray,currentSorting.cp,currentSorting.current)
            if(currentSorting.arrow==="u"){
                setNewEmpArray(nArray)
            }
            else{
                setNewEmpArray(nArray.reverse())
            }
        }
    },[currentSorting])

    function handleSorting(parentCurr:string,currBtn:string){
        if(currentSorting.current===currBtn){
            if(currentSorting.arrow==='n'){
                setCurrentSorting({cp:parentCurr,current:currBtn,arrow:'u'})
            }
            else if(currentSorting.arrow==='u'){
                setCurrentSorting({cp:parentCurr,current:currBtn,arrow:'l'})
            }
            else{
                setCurrentSorting({cp:parentCurr,current:currBtn,arrow:'n'})
            }
        }
        else{
            setCurrentSorting({cp:parentCurr,current:currBtn,arrow:'u'})
        }
    }

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
                            <th className='mat-header-cell'  id="name" onClick={() => handleSorting("personalDetail","firstName")}>
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Name &nbsp;
                                        <span className='arrow-hidden'>
                                            <span>&#8595;</span>
                                            <span>&#8593;</span>
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className='mat-header-cell' id="department" onClick={() => handleSorting("professionalDetail","department")}>
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Department &nbsp;
                                        <span className='arrow-hidden'>
                                            <span>&#8595;</span>
                                            <span>&#8593;</span>
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className='mat-header-cell' id="designation" onClick={() => handleSorting("professionalDetail","designation")}>
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Designation &nbsp;
                                        <span className='arrow-hidden'>
                                            <span>&#8595;</span>
                                            <span>&#8593;</span>
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className='mat-header-cell' id="email" onClick={() => handleSorting("personalDetail","email")}>
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Email &nbsp;
                                        <span className='arrow-hidden'>
                                            <span>&#8595;</span>
                                            <span>&#8593;</span>
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className='mat-header-cell' id="mobileNumber" onClick={() => handleSorting("personalDetail","mobileNumber")}>
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Mobile Number &nbsp;
                                        <span className='arrow-hidden'>
                                            <span>&#8595;</span>
                                            <span>&#8593;</span>
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className='mat-header-cell' id="resume">
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Resume
                                    </div>
                                </div>
                            </th>
                            <th className='mat-header-cell' id="action">
                                <div>
                                    <div className='mat-sort-header-container'>
                                        Action
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {loading && (<img className="img-loader" src="public\ripples.svg" alt="Loading..." />)}

                        {!loading && Object.keys(allEmployees).length===0 && 
                            <tr className='mat-row'>
                                <td className='mat-cell' colSpan={8}>No Data</td>
                            </tr>
                        }


                        {!loading && empPages[currentPage-1] && empPages[currentPage-1].map((emp:Employee,index:number)=>(
                            <tr key={emp.id} className='mat-row'>
                                <td className='mat-cell'>{((currentPage-1)*perPageEmployee)+index+1}</td>
                                <td className='mat-cell'>{emp.personalDetail.firstName}</td>
                                <td className='mat-cell'>{emp.professionalDetail.department}</td>
                                <td className='mat-cell'>{emp.professionalDetail.designation}</td>
                                <td className='mat-cell'>{emp.personalDetail.email}</td>
                                <td className='mat-cell'>{emp.personalDetail.mobileNumber}</td>
                                <td className='mat-cell'>{emp.id}</td>
                                <td className='mat-cell'>
                                    <Link to={`/edit-employee/${emp.id}`} ><button className='btn-edit-employee'>Edit</button></Link>
                                    <button className='btn-delete-employee' type='button' onClick={()=>deleteRecord(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        
                        <tr className='mat-row'>
                            <td className='mat-cell' colSpan={8}>
                                Page &nbsp;
                                <select name="page" id="page" onChange={handlePageChange} value={currentPage}>
                                    {Object.keys(empPages).map((k)=>(
                                        <option key={k}  value={Number(k)+1}>{Number(k)+1}</option>
                                    ))}
                                </select>
                                &nbsp;&nbsp;|&nbsp; Employees Per Page &nbsp;
                                <select name="page" id="page1" onChange={handlePerPageEmployee} value={perPageEmployee}>
                                    <option key={5}  value={5}>5</option>
                                    <option key={10}  value={10}>10</option>
                                    <option key={15}  value={15}>15</option>
                                    <option key={20}  value={20}>20</option>
                                </select>
                                &nbsp;&nbsp;|&nbsp; Total No. of Employees : {allEmployees.length} &nbsp;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
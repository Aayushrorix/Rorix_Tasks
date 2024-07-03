import  { useEffect, useState } from 'react';
import './FormPage.css';
import PersonalDetails from './PersonalDetails';
import BankDetails from './BankDetails';
import ProfessionalDetails from './ProfessionalDetails';
import EducationDetail from './EducationDetail';
import ExperienceDetail from './ExperienceDetail';
import CurrentOrganizationDetail from './CurrentOrganizationDetail';
import { useNavigate, useParams } from 'react-router-dom'
import {  useAddEmployeeMutation , useUpdateEmployeeMutation} from '../../slices/EmployeeSlice';
// import { Employee } from '../../models/EmployeeModel';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import HeaderSteps from '../HeaderSteps';
import { Employee } from '../../models/EmployeeModel';
// import { Employee } from '../../models/EmployeeModel';
// import { faL } from '@fortawesome/free-solid-svg-icons';
// import { Employee } from '../../models/EmployeeModel';

const FormPage = () => {

    const [addEmployee] = useAddEmployeeMutation()
    const [updateEmployee] = useUpdateEmployeeMutation()
    const [editMode, setEditMode] = useState(false)
    const [completeForm, setCompleteForm] = useState<string[]>([])

    interface ApiResponse{
        employees?: any[]
    }
    

    interface QueryState {
        data?:ApiResponse;
        // other properties depending on your RTK Query setup
      }

    
    const {id} = useParams();
    // const [empID, setEmpId] = useState(id?id:uuidv4())
    const empID = id?id:uuidv4()
    const [initialValue, setInitialValue] = useState(
        {
        id:empID,
        personalDetail: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            dob: "",
            presentAddress: "",
            permanentAddress: "",
            copyAddress: false,
        },
        bankDetail: {
            bankName: "",
            accountName: "",
            accountNumber: "",
            ifscCode: "",
            aadhaarNumber: "",
            panNumber: "",
        },
        professionalDetail: {
            designation: "",
            department: "",
            years: "",
            months: "",
            currentLocation: "",
            skills: [
                ""
            ],
            resumeFile: {
                fileName: "TEMP-PDF-Document.pdf",
                fileSrc: {}
            },
        },
        educationDetails: [
            // {
            //     educationName: "aaa",
            //     universityName: "",
            //     result: "",
            //     yearOfPassing: ""
            // },
            // {
            //     educationName: "",
            //     universityName: "",
            //     result: "",
            //     yearOfPassing: ""
            // }
        ],
        experienceDetails: [
            // {
            //     companyName: "",
            //     position: "",
            //     totalYear: "",
            //     lastCTC: ""
            // },
            // {
            //     companyName: "",
            //     position: "",
            //     totalYear: "",
            //     lastCTC: ""
            // }
        ],
        currentOrganizationDetail:{
            joiningDate: "",
            appraisalDate: "",
            currentCTC: "",
        }
    })
    useEffect(() => {
        if (id) {
            setEditMode(true); // Set editMode to true when id exists
            // setEmpId(id)
        } else {
            setEditMode(false); // Set editMode to false when id does not exist
            // setEmpId(uuidv4())
        }
    }, [id]);

    // console.log("MODE ..........->",editMode)
    // console.log("ID ..........->",empID)

    const allEmployees = useSelector((state:RootState) => {
        const queries = Object.values(state.api.queries) as QueryState[];
        return queries.length > 0 && queries[0].data?.employees ? queries[0].data.employees : [];
    });
    
    const currEmployee = allEmployees.find(emp => emp.id == id);
    // console.log("Current EMP -> ",currEmployee)

    // if(currEmployee){
    //     setInitialValue(currEmployee)
    // }

    useEffect(() => {
        if (currEmployee) {
            setInitialValue(currEmployee)
            formik.setValues(currEmployee);
        }
    }, [currEmployee]);

    // console.log("Initial ----> ",initialValue)

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema:Yup.object({
            personalDetail:Yup.object({
                firstName: Yup.string()
                .required("First Name is Required"),
                middleName: Yup.string()
                .required("Middle Name is Required"),
                lastName: Yup.string()
                .required("Last Name is Required"),
                email: Yup.string()
                .email("Please Enter Valid Email")
                .required("Email is Required"),
                mobileNumber: Yup.string()
                .required("Mobile Number is Required")
                .length(10,"Moble Number Should be of 10 numbers"),
                dob: Yup.string()
                .required("Date Of Birth is Required"),
                presentAddress: Yup.string()
                .required("Present Address is Required"),
                permanentAddress: Yup.string()
                .required("Permanent Address is Required"),
            }),
            bankDetail:Yup.object({
                bankName: Yup.string()
                .required("Bank Name is Required"),
                accountName: Yup.string()
                .required("Account Name is Required"),
                accountNumber: Yup.string()
                .required("Account Number is Required"),
                ifscCode: Yup.string()
                .required("IFSC Code is Required"),
                aadhaarNumber: Yup.string()
                .length(10,"Aadharcard Number should be of 12 digits")
                .required("Aadhaar Number is Required"),
                panNumber: Yup.string()
                .required("PAN Number is Required"),
            }),
            professionalDetail:Yup.object({
                designation: Yup.string()
                .required("Designation is Required"),
                department: Yup.string()
                .required("Department is Required"),
                years: Yup.string()
                .required("Year is Required"),
                months: Yup.string()
                .required("Month is Required"),
                currentLocation: Yup.string()
                .required("Current Location is Required"),
                skills: Yup.string()
                .required("Skills is Required"),
                // resumeFile: Yup.string()
                // .required("Resume File is Required"),
            }),
            currentOrganizationDetail:Yup.object({
                // joiningDate: Yup.string()
                // .required("Joining Date is Required"),
                // appraisalDate: Yup.string()
                // .required("Appraisal Date is Required"),
                currentCTC: Yup.string()
                .required("Current CTC is Required"),
            }),
            // EducationDetail:Yup.object({
            //     educationName: Yup.string()
            //     .required("Education Name is Required"),
            //     universityName: Yup.string()
            //     .required("University Name is Required"),
            //     result: Yup.string()
            //     .required("Result Name is Required"),
            //     yearOfPassing: Yup.string()
            //     .required("year Of Passing Name is Required")
            // })
            educationDetails: Yup.array()
            .of(Yup.object().shape({
                    educationName: Yup.string()
                    .required("Education Name is Required"),
                    universityName: Yup.string()
                    .required("University Name is Required"),
                    result: Yup.string()
                    .required("Result Name is Required"),
                    yearOfPassing: Yup.string()
                    .required("year Of Passing Name is Required")
                })
            ),
            experienceDetails: Yup.array()
            .of(Yup.object().shape({
                    companyName: Yup.string()
                    .required("Company Name is Required"),
                    position: Yup.string()
                    .required("Position is Required"),
                    totalYear: Yup.string()
                    .required("Total Year is Required"),
                    lastCTC: Yup.string()
                    .required("Last CTC Name is Required")
                })
            ),
        }) ,
        onSubmit: (values:any, { resetForm }) => {
            // console.log("values -->",values)
            // Reset the form after submission
            addEmployee(values)
            resetForm();
            nevigate('/')
      
            // console.log("Form Submitted", values);
      
          }
        
    })

    const [currentPage, setCurrentPage] = useState<string>('personal');
    const [nextPage, setNextPage] = useState<string>('bank');
    const [previousPage, setPreviousPage] = useState<string>('');

    const nevigate = useNavigate()

    const changePage = (page: string, type: string) => {

        if(type==="next" && currentPage==="personal"){
            formik.setFieldTouched('personalDetail.firstName', true);
            formik.setFieldTouched('personalDetail.middleName', true);
            formik.setFieldTouched('personalDetail.lastName', true);
            formik.setFieldTouched('personalDetail.email', true);
            formik.setFieldTouched('personalDetail.mobileNumber', true);
            formik.setFieldTouched('personalDetail.dob', true);
            formik.setFieldTouched('personalDetail.presentAddress', true);
            formik.setFieldTouched('personalDetail.permanentAddress', true);
            // formik.setFieldTouched('personalDetail.copyAddress', true);
        }else if(type==="next" && currentPage==="bank"){
            formik.setFieldTouched('bankDetail.bankName', true);
            formik.setFieldTouched('bankDetail.accountName', true);
            formik.setFieldTouched('bankDetail.accountNumber', true);
            formik.setFieldTouched('bankDetail.ifscCode', true);
            formik.setFieldTouched('bankDetail.aadhaarNumber', true);
            formik.setFieldTouched('bankDetail.panNumber', true);
        }else if(type==="next" && currentPage==="professional"){
            formik.setFieldTouched('professionalDetail.designation', true);
            formik.setFieldTouched('professionalDetail.department', true);
            formik.setFieldTouched('professionalDetail.years', true);
            formik.setFieldTouched('professionalDetail.months', true);
            formik.setFieldTouched('professionalDetail.currentLocation', true);
            formik.setFieldTouched('professionalDetail.skills', true);
        }else if(type==="next" && currentPage==="currentOrganization"){
            formik.setFieldTouched('currentOrganizationDetail.currentCTC', true);
        }else if(type==="next" && currentPage==="education"){
            formik.values.educationDetails.forEach((educationDetail:any, index:number) => {
                formik.setFieldTouched(`educationDetails[${index}].educationName`, true);
                formik.setFieldTouched(`educationDetails[${index}].universityName`, true);
                formik.setFieldTouched(`educationDetails[${index}].result`, true);
                formik.setFieldTouched(`educationDetails[${index}].yearOfPassing`, true);
            });
        }else if(type==="next" && currentPage==="experience"){
            formik.values.experienceDetails.forEach((experienceDetail:any, index:number) => {
                formik.setFieldTouched(`experienceDetails[${index}].companyName`, true);
                formik.setFieldTouched(`experienceDetails[${index}].position`, true);
                formik.setFieldTouched(`experienceDetails[${index}].totalYear`, true);
                formik.setFieldTouched(`experienceDetails[${index}].lastCTC`, true);
            });
        }

        
        
        if( (type==="next" && currentPage==="personal" &&formik.touched.personalDetail && !formik.errors.personalDetail) ||
            (type==="next" && currentPage==="bank" &&formik.touched.bankDetail && !formik.errors.bankDetail) ||
            (type==="next" && currentPage==="professional" &&formik.touched.professionalDetail && !formik.errors.professionalDetail) ||
            (type==="next" && currentPage==="currentOrganization" &&formik.touched.currentOrganizationDetail && !formik.errors.currentOrganizationDetail) ||
            (type==="next" && currentPage==="education" &&formik.touched.educationDetails && !formik.errors.educationDetails && formik.values.educationDetails.length>0) ||
            (type==="next" && currentPage==="experience" &&formik.touched.experienceDetails && !formik.errors.experienceDetails && formik.values.experienceDetails.length>0)
            ){

            setCurrentPage(page);
            console.log("CURR PAGE => ",currentPage, page)
            setCompleteForm([...completeForm,currentPage])

            // Update previousPage and nextPage based on currentPage
            switch (page) {
                case 'personal':
                    setPreviousPage('');
                    setNextPage('bank');
                    break;
                case 'bank':
                    setPreviousPage('personal');
                    setNextPage('professional');
                    break;
                case 'professional':
                    setPreviousPage('bank');
                    setNextPage('education');
                    break;
                case 'education':
                    setPreviousPage('professional');
                    setNextPage('experience');
                    break;
                case 'experience':
                    setPreviousPage('education');
                    setNextPage('currentOrganization');
                    break;
                case 'currentOrganization':
                    setPreviousPage('experience');
                    setNextPage('');
                    break;
                default:
                    break;
            }
        }
        else if(type==="back"){

            setCurrentPage(page);
            console.log("CURR PAGE => ",currentPage, page)

            // Update previousPage and nextPage based on currentPage
            switch (page) {
                case 'personal':
                    setPreviousPage('');
                    setNextPage('bank');
                    break;
                case 'bank':
                    setPreviousPage('personal');
                    setNextPage('professional');
                    break;
                case 'professional':
                    setPreviousPage('bank');
                    setNextPage('education');
                    break;
                case 'education':
                    setPreviousPage('professional');
                    setNextPage('experience');
                    break;
                case 'experience':
                    setPreviousPage('education');
                    setNextPage('currentOrganization');
                    break;
                case 'currentOrganization':
                    setPreviousPage('experience');
                    setNextPage('');
                    break;
                default:
                    break;
            }
        }
    };

    function onEditSave(emp:any){
        console.log(emp)
        setEditMode(false)
        updateEmployee(emp)
        nevigate('/')
    }

    return (
        <>
        <HeaderSteps completeForm={completeForm} currentPage={currentPage}/>
        <div className="div-form-main">
            <form onSubmit={formik.handleSubmit}>
                {currentPage === 'personal' && <PersonalDetails formik={formik}/>}
                {currentPage === 'bank' && <BankDetails formik={formik}/>}
                {currentPage === 'professional' && <ProfessionalDetails formik={formik}/>}
                {currentPage === 'education' && <EducationDetail formik={formik}/>}
                {currentPage === 'experience' && <ExperienceDetail formik={formik}/>}
                {currentPage === 'currentOrganization' && <CurrentOrganizationDetail formik={formik}/>}

                <div>
                    <div className="div-form-footer">
                        <button onClick={() => nevigate('/')} className='raised-button' type="button">
                            <span>Back To List</span>
                        </button>
                        
                        
                        <span>
                            {currentPage !== 'personal' &&
                                <button onClick={() => changePage(previousPage,"back")} className='raised-button' type="button">
                                    <span>Back</span>
                                </button>
                            }
                            {currentPage !== 'currentOrganization' && 
                                <button onClick={() => changePage(nextPage,"next")} className='raised-button btn-primary' type="button">
                                    {/* {currentPage === 'currentOrganization' ? 'Submit' : 'Next'} */}
                                    Next
                                </button>
                            }
                            {currentPage === 'currentOrganization' && !editMode &&
                                <button type="submit" className='raised-button btn-primary'>
                                    Submit
                                </button>
                            }
                            {currentPage === 'currentOrganization' && editMode &&
                                <button type="button" onClick={()=>onEditSave(formik.values)} className='raised-button btn-primary'>
                                    Save
                                </button>
                            }
                        </span>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};

export { FormPage };
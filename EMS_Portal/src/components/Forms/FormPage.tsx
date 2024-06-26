import  { useState } from 'react';
import './FormPage.css';
import PersonalDetails from './PersonalDetails';
import BankDetails from './BankDetails';
import ProfessionalDetails from './ProfessionalDetails';
import EducationDetail from './EducationDetail';
import ExperienceDetail from './ExperienceDetail';
import CurrentOrganizationDetail from './CurrentOrganizationDetail';
import { useNavigate } from 'react-router-dom'
import {  useAddEmployeeMutation } from '../../slices/EmployeeSlice';
// import { Employee } from '../../models/EmployeeModel';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid';
// import { Employee } from '../../models/EmployeeModel';

const FormPage = () => {

    const [addEmployee] = useAddEmployeeMutation()

    const formik = useFormik({
        initialValues: {
            id:uuidv4(),
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
                {
                    educationName: "",
                    universityName: "",
                    result: "",
                    yearOfPassing: ""
                },
                {
                    educationName: "",
                    universityName: "",
                    result: "",
                    yearOfPassing: ""
                }
            ],
            experienceDetails: [
                {
                    companyName: "",
                    position: "",
                    totalYear: "",
                    lastCTC: ""
                },
                {
                    companyName: "",
                    position: "",
                    totalYear: "",
                    lastCTC: ""
                }
            ],
            currentOrganizationDetail:{
                joiningDate: "",
                appraisalDate: "",
                currentCTC: "",
            },
        },
        validationSchema:Yup.object({
            personalDetail:Yup.object({
                firstName: Yup.string()
                .required("First Name is Required"),
                middleName: Yup.string()
                .required("Middle Name is Required"),
                lastName: Yup.string()
                .required("Last Name is Required"),
                email: Yup.string()
                .required("Email is Required"),
                mobileNumber: Yup.string()
                .required("Mobile Number is Required"),
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
        }) ,
        onSubmit: (values:any, { resetForm }) => {
            console.log("values -->",values)
            // Reset the form after submission
            addEmployee(values)
            resetForm();
            nevigate('/')
      
            console.log("Form Submitted", values);
      
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
        }
        
        if( (type==="next" && currentPage==="personal" &&formik.touched.personalDetail && !formik.errors.personalDetail) ||
            (type==="next" && currentPage==="bank" &&formik.touched.bankDetail && !formik.errors.bankDetail) ||
            (type==="next" && currentPage==="professional" &&formik.touched.professionalDetail && !formik.errors.professionalDetail) ||
            (type==="next" && currentPage==="currentOrganization" &&formik.touched.currentOrganizationDetail && !formik.errors.currentOrganizationDetail) ||
            (type==="next" && currentPage==="education") ||
            (type==="next" && currentPage==="experience")
            ){

            setCurrentPage(page);

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

    return (
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
                            {currentPage === 'currentOrganization' && 
                                <button type="submit" className='raised-button btn-primary'>
                                    Submit
                                </button>
                            }
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export { FormPage };
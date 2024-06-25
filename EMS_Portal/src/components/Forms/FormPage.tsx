import  { useState } from 'react';
import './FormPage.css'; // Import CSS file for styling
import PersonalDetails from './PersonalDetails';
import BankDetails from './BankDetails';
import ProfessionalDetails from './ProfessionalDetails';
import EducationDetail from './EducationDetail';
import ExperienceDetail from './ExperienceDetail';
import CurrentOrganizationDetail from './CurrentOrganizationDetail';
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormPage = () => {
    const formik = useFormik({
        initialValues: {
            id:'',
      
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                mobileNumber: "",
                dob: "",
                presentAddress: "",
                permanentAddress: "",
                copyAddress: false,
         
            
                bankName: "",
                accountName: "",
                accountNumber: "",
                ifscCode: "",
                aadhaarNumber: "",
                panNumber: "",
           
          
                designation: "",
                department: "",
                years: "",
                months: "",
                currentLocation: "",
                skills: [
                    ""
                ],
                resumeFile: {
                    fileName: "",
                    fileSrc: {}
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
           
                joiningDate: "",
                appraisalDate: "",
                currentCTC: "",
          
        },
        validationSchema:Yup.object({
        }) ,
        onSubmit: (values, { resetForm }) => {
            console.log("values -->",values)
            // Reset the form after submission
            resetForm();
      
            console.log("Form Submitted", values);
      
          }
        
    })

    const [currentPage, setCurrentPage] = useState<string>('personal');
    const [nextPage, setNextPage] = useState<string>('bank');
    const [previousPage, setPreviousPage] = useState<string>('');

    const nevigate = useNavigate()

    // const onSubmit = (values:any) => {
    //     console.log("values -->",values)
    //     // resetForm()
    //     nevigate('/')
    // }

    const changePage = (page: string) => {
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
    };

    // let content;

    // if (currentPage === 'personal') {
    //     content = <PersonalDetail />;
    // } else if (currentPage === 'bank') {
    //     content = <BankDetails />;
    // } else if (currentPage === 'professional') {
    //     content = <ProfessionalDetails />;
    // } else if (currentPage === 'education') {
    //     content = <EducationDetail />;
    // } else if (currentPage === 'experience') {
    //     content = <ExperienceDetail />;
    // } else if (currentPage === 'currentOrganization') {
    //     content = <CurrentOrganizationDetail />;
    // }

    return (
        <div className="div-form-main">
            <form onSubmit={formik.handleSubmit}>
                {currentPage === 'personal' && <PersonalDetails formik={formik}/>}
                {currentPage === 'bank' && <BankDetails />}
                {currentPage === 'professional' && <ProfessionalDetails />}
                {currentPage === 'education' && <EducationDetail />}
                {currentPage === 'experience' && <ExperienceDetail />}
                {currentPage === 'currentOrganization' && <CurrentOrganizationDetail />}
                {/* {content} */}
                <div>
                    <div className="div-form-footer">
                        <button onClick={() => nevigate('/')} className='raised-button' type="button">
                            <span>Back To List</span>
                        </button>
                        
                        
                        <span>
                            {currentPage !== 'personal' &&
                                <button onClick={() => changePage(previousPage)} className='raised-button' type="button">
                                    <span>Back</span>
                                </button>
                            }
                            {currentPage !== 'currentOrganization' && 
                                <button onClick={() => changePage(nextPage)} className='raised-button btn-primary' type="button">
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
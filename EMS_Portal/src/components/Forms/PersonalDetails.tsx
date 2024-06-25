// import React from 'react'
import { useState } from 'react'
import './FormPage.css'
import { PersonalDetail } from '../../models/EmployeeModel'

function PersonalDetails({formik}:any) {
    const [personalDetail, setPersonalDetail] = useState<PersonalDetail>(Object)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // [e.target.name] = e.target.value
        // console.log("====> ",e.target.name,"==>",e.target.value)
        setPersonalDetail({...personalDetail, [e.target.name]: e.target.value })
        console.log("personalDetail -> ",personalDetail)
    };
  return (
    <div>
            <h2 className="form-heading">Personal Details</h2>
            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstName' value={formik.values.fileName} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>First Name</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='middleName' value={formik.values.middleName} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Middle Name</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='lastName' value={formik.values.lastName} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Last Name</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='email' className='input-field' name='email' value={formik.values.email} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Email</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='number' className='input-field' name='mobileNumber' value={formik.values.mobileNumber} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Mobile Number</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='date' className='input-field' name='dob' value={formik.values.dob} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Date of Birth</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='presentAddress' value={formik.values.presentAddress} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Present Address</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='permanentAddress' value={formik.values.permanentAddress} onChange={formik.handleChange}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Permanent Address</span>
                                    <span>*</span>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PersonalDetails
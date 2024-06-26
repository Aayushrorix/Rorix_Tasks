// import React from 'react'
// import { useState } from 'react'
import './FormPage.css'
// import { PersonalDetail } from '../../models/EmployeeModel'

function PersonalDetails({formik}:any) {
    // const [personalDetail, setPersonalDetail] = useState<PersonalDetail>(Object)

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // [e.target.name] = e.target.value
    //     // console.log("====> ",e.target.name,"==>",e.target.value)
    //     setPersonalDetail({...personalDetail, [e.target.name]: e.target.value })
    //     console.log("personalDetail -> ",personalDetail)
    // };
  return (
    <div>
            <h2 className="form-heading">Personal Details</h2>
            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='personalDetail.firstName' value={formik.values.personalDetail.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>First Name</span>
                                    <span>*</span>
                                </label>
                            </span>
                            {/* {formik.touched.personalDetail.firstName && formik.errors.personalDetail.firstName && <p style={{color:"red"}}>{formik.errors.personalDetail.firstName}</p>} */}
                            {/* {formik.touched.personalDetail?.firstName && formik.errors.personalDetail?.firstName ? (
                                <div style={{color:"red"}}>{formik.errors.personalDetail.firstName}</div>
                            ) : null} */}
                        </div>
                    </div>
                    <div className='form-field-underline'>
                        <span className='form-field-ripple'></span>
                    </div>
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.firstName && formik.errors.personalDetail?.firstName ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.firstName}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='personalDetail.middleName' value={formik.values.personalDetail.middleName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.middleName && formik.errors.personalDetail?.middleName ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.middleName}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='personalDetail.lastName' value={formik.values.personalDetail.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.lastName && formik.errors.personalDetail?.lastName ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.lastName}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='email' className='input-field' name='personalDetail.email' value={formik.values.personalDetail.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.email && formik.errors.personalDetail?.email ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.email}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='number' className='input-field' name='personalDetail.mobileNumber' value={formik.values.personalDetail.mobileNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.mobileNumber && formik.errors.personalDetail?.mobileNumber ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.mobileNumber}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='date' className='input-field' name='personalDetail.dob' value={formik.values.personalDetail.dob} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.dob && formik.errors.personalDetail?.dob ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.dob}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='personalDetail.presentAddress' value={formik.values.personalDetail.presentAddress} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.presentAddress && formik.errors.personalDetail?.presentAddress ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.presentAddress}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='personalDetail.permanentAddress' value={formik.values.personalDetail.permanentAddress} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
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
                    <div className='form-field-subscript-wrapper'>
                        <div>
                            <div className='error'>
                                {formik.touched.personalDetail?.permanentAddress && formik.errors.personalDetail?.permanentAddress ? (
                                    <div style={{color:"red"}}>{formik.errors.personalDetail.permanentAddress}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PersonalDetails
// import React from 'react'
import './FormPage.css'

function ProfessionalDetails({formik}:any) {
  return (
    <div>
            <h2 className="form-heading">Professional Details</h2>
            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='professionalDetail.designation' value={formik.values.professionalDetail.designation} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Designation</span>
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
                                {formik.touched.professionalDetail?.designation && formik.errors.professionalDetail?.designation ? (
                                    <div style={{color:"red"}}>{formik.errors.professionalDetail.designation}</div>
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
                            <input type='text' className='input-field' name='professionalDetail.department' value={formik.values.professionalDetail.department} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Department</span>
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
                                {formik.touched.professionalDetail?.department && formik.errors.professionalDetail?.department ? (
                                    <div style={{color:"red"}}>{formik.errors.professionalDetail.department}</div>
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
                            <input type='text' className='input-field' name='professionalDetail.years' value={formik.values.professionalDetail.years} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Years</span>
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
                                {formik.touched.professionalDetail?.years && formik.errors.professionalDetail?.years ? (
                                    <div style={{color:"red"}}>{formik.errors.professionalDetail.years}</div>
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
                            <input type='text' className='input-field' name='professionalDetail.months' value={formik.values.professionalDetail.months} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Months</span>
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
                                {formik.touched.professionalDetail?.months && formik.errors.professionalDetail?.months ? (
                                    <div style={{color:"red"}}>{formik.errors.professionalDetail.months}</div>
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
                            <input type='text' className='input-field' name='professionalDetail.currentLocation' value={formik.values.professionalDetail.currentLocation} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Current Location</span>
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
                                {formik.touched.professionalDetail?.currentLocation && formik.errors.professionalDetail?.currentLocation ? (
                                    <div style={{color:"red"}}>{formik.errors.professionalDetail.currentLocation}</div>
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
                            <input type='text' className='input-field' name='professionalDetail.skills' value={formik.values.professionalDetail.skills} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Skills</span>
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
                                {formik.touched.professionalDetail?.skills && formik.errors.professionalDetail?.skills ? (
                                    <div style={{color:"red"}}>{formik.errors.professionalDetail.skills}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProfessionalDetails
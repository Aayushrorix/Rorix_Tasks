import '../css/FormPage.css'

function ProfessionalDetails({formik}:any) {
  return (
    <div>
        <h2 className="form-heading">Professional Details</h2>
        <div>

            <div>
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
            </div>
            
            <div>
                <span>Experience :</span>
                <div className='div-field-main'>
                    <div className='div-field-second'>
                        <div className='div-field-third'>
                            <div className='div-field'>
                                <select
                                    className='input-field'
                                    name='professionalDetail.years'
                                    value={formik.values.professionalDetail.years}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    >
                                    <option value="">Select Years</option>
                                    <option value="0">0 Year</option>
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                    <option value="5">5 Years</option>
                                    <option value="6">6 Years</option>
                                    <option value="7">7 Years</option>
                                    <option value="8">8 Years</option>
                                    <option value="9">9 Years</option>
                                    <option value="10">10 Years</option>
                                </select>

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
                                <select
                                    className='input-field'
                                    name='professionalDetail.months'
                                    value={formik.values.professionalDetail.months}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    >
                                    <option value="">Select Months</option>
                                    <option value="0">0 Month</option>
                                    <option value="1">1 Month</option>
                                    <option value="2">2 Months</option>
                                    <option value="3">3 Months</option>
                                    <option value="4">4 Months</option>
                                    <option value="5">5 Months</option>
                                    <option value="6">6 Months</option>
                                    <option value="7">7 Months</option>
                                    <option value="8">8 Months</option>
                                    <option value="9">9 Months</option>
                                    <option value="10">10 Months</option>
                                    <option value="11">11 Months</option>
                                    <option value="12">12 Months</option>
                                </select>

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
    </div>
  )
}

export default ProfessionalDetails
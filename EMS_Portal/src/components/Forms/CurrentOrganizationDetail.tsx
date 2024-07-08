function CurrentOrganizationDetail({formik}:any) {
  return (
    <div>
        <h2 className="form-heading">Current Organization Details</h2>
        <div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='date' className='input-field' name='currentOrganizationDetail.joiningDate' value={formik.values.currentOrganizationDetail.joiningDate} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Joining Date</span>
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
                                {formik.touched.currentOrganizationDetail?.joiningDate && formik.errors.currentOrganizationDetail?.joiningDate ? (
                                    <div style={{color:"red"}}>{formik.errors.currentOrganizationDetail.joiningDate}</div>
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
                            <input type='date' className='input-field' name='currentOrganizationDetail.appraisalDate' value={formik.values.currentOrganizationDetail.appraisalDate} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Joining Date</span>
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
                                {formik.touched.currentOrganizationDetail?.appraisalDate && formik.errors.currentOrganizationDetail?.appraisalDate ? (
                                    <div style={{color:"red"}}>{formik.errors.currentOrganizationDetail.appraisalDate}</div>
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
                            <input type='number' className='input-field' name='currentOrganizationDetail.currentCTC' value={formik.values.currentOrganizationDetail.currentCTC} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Current CTC</span>
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
                                {formik.touched.currentOrganizationDetail?.currentCTC && formik.errors.currentOrganizationDetail?.currentCTC ? (
                                    <div style={{color:"red"}}>{formik.errors.currentOrganizationDetail.currentCTC}</div>
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

export default CurrentOrganizationDetail
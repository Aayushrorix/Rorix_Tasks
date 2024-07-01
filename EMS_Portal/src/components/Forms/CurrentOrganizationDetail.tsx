// import React from 'react'

function CurrentOrganizationDetail({formik}:any) {
  return (
    <div>
        <h2 className="form-heading">Current Organization Details</h2>
        <div>
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
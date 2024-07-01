// import React from 'react'
// import FormPage from "./FormPage"

function BankDetails({formik}:any) {
  return (
    <div>
        <h2 className="form-heading">Bank Details</h2>

        <div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='bankDetail.bankName' value={formik.values.bankDetail.bankName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Bank Name</span>
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
                                {formik.touched.bankDetail?.bankName && formik.errors.bankDetail?.bankName ? (
                                    <div style={{color:"red"}}>{formik.errors.bankDetail.bankName}</div>
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
                            <input type='text' className='input-field' name='bankDetail.accountName' value={formik.values.bankDetail.accountName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Account Name</span>
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
                                {formik.touched.bankDetail?.accountName && formik.errors.bankDetail?.accountName ? (
                                    <div style={{color:"red"}}>{formik.errors.bankDetail.accountName}</div>
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
                            <input type='number' className='input-field' name='bankDetail.accountNumber' value={formik.values.bankDetail.accountNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Bank Account Number</span>
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
                                {formik.touched.bankDetail?.accountNumber && formik.errors.bankDetail?.accountNumber ? (
                                    <div style={{color:"red"}}>{formik.errors.bankDetail.accountNumber}</div>
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
                            <input type='text' className='input-field' name='bankDetail.ifscCode' value={formik.values.bankDetail.ifscCode} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>IFSC Code</span>
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
                                {formik.touched.bankDetail?.ifscCode && formik.errors.bankDetail?.ifscCode ? (
                                    <div style={{color:"red"}}>{formik.errors.bankDetail.ifscCode}</div>
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
                            <input type='number' className='input-field' name='bankDetail.aadhaarNumber' value={formik.values.bankDetail.aadhaarNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>Aadhaar Card Number</span>
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
                                {formik.touched.bankDetail?.aadhaarNumber && formik.errors.bankDetail?.aadhaarNumber ? (
                                    <div style={{color:"red"}}>{formik.errors.bankDetail.aadhaarNumber}</div>
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
                            <input type='text' className='input-field' name='bankDetail.panNumber' value={formik.values.bankDetail.panNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <span className='field-label-wrapper'>
                                <label className='form-field-label'>
                                    <span>PAN Card Number</span>
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
                                {formik.touched.bankDetail?.panNumber && formik.errors.bankDetail?.panNumber ? (
                                    <div style={{color:"red"}}>{formik.errors.bankDetail.panNumber}</div>
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

export default BankDetails
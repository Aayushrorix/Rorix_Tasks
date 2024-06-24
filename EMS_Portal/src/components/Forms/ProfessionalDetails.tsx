// import React from 'react'
import './FormPage.css'

function ProfessionalDetails() {
  return (
    <div>
            <h2 className="form-heading">Professional Details</h2>
            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstname'/>
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
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstname'/>
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
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstname'/>
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
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstname'/>
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
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstname'/>
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
                </div>
            </div>

            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='text' className='input-field' name='firstname'/>
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
                </div>
            </div>
    </div>
  )
}

export default ProfessionalDetails
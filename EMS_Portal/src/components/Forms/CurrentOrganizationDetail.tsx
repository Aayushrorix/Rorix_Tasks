// import React from 'react'

function CurrentOrganizationDetail() {
  return (
    <div>
            <h2 className="form-heading">Current Organization Details</h2>
            <div className='div-field-main'>
                <div className='div-field-second'>
                    <div className='div-field-third'>
                        <div className='div-field'>
                            <input type='number' className='input-field' name='firstname'/>
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
                </div>
            </div>

    </div>
  )
}

export default CurrentOrganizationDetail
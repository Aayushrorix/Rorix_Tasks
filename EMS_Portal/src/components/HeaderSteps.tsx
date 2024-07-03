// import React from 'react'
import './HeaderSteps.css'

function HeaderSteps({completeForm}:any,{currentPage}:any) {
  return (
    <div>

        <div className="grid-container div-header-main">
            <div className="grid-item">
                <div className='div-icon'>
                    {completeForm.includes("personal") && currentPage!=="personal" && <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>}
                    {(!completeForm.includes("personal") || currentPage==="personal") && <span className='right-icon'>1</span>}
                </div>
                <div className='div-title-upper'>
                    <div className='div-title-detail'>Personal Details</div>
                </div>
            </div>
            <div className='mat-stepper-horizontal-line'></div>
            <div className="grid-item ">
                <div className='div-icon'>
                    {completeForm.includes("bank") && currentPage!=="bank" && <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>}
                    {(!completeForm.includes("bank") || currentPage==="bank") && <span className='right-icon'>2</span>}
                </div>
                <div className='div-title-upper'>
                    <div className='div-title-detail'>Bank Details</div>
                </div>
            </div>
            <div className='mat-stepper-horizontal-line'></div>
            <div className="grid-item ">
                <div className='div-icon'>
                    {completeForm.includes("professional") && currentPage!=="professional" && <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>}
                    {(!completeForm.includes("professional") || currentPage==="professional") && <span className='right-icon'>3</span>}
                </div>
                <div className='div-title-upper'>
                    <div className='div-title-detail'>Professional Details</div>
                </div>
            </div>
            <div className='mat-stepper-horizontal-line'></div>
            <div className="grid-item ">
                <div className='div-icon'>
                    {completeForm.includes("education") && currentPage!=="education" && <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>}
                    {(!completeForm.includes("education") || currentPage==="education") && <span className='right-icon'>4</span>}
                </div>
                <div className='div-title-upper'>
                    <div className='div-title-detail'>Education Details</div>
                </div>
            </div>
            <div className='mat-stepper-horizontal-line'></div>
            <div className="grid-item ">
                <div className='div-icon'>
                    {completeForm.includes("experience") && currentPage!=="experience" && <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>}
                    {(!completeForm.includes("experience") || currentPage==="experience") && <span className='right-icon'>5</span>}
                </div>
                <div className='div-title-upper'>
                    <div className='div-title-detail'>Experience Details</div>
                </div>
            </div>
            <div className='mat-stepper-horizontal-line'></div>
            <div className="grid-item ">
                <div className='div-icon'>
                    {completeForm.includes("currentOrganization") && currentPage!=="currentOrganization" && <svg className='right-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>}
                    {(!completeForm.includes("currentOrganization") || currentPage==="currentOrganization") && <span className='right-icon'>6</span>}
                </div>
                <div className='div-title-upper'>
                    <div className='div-title-detail'>Current Organization Details</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeaderSteps
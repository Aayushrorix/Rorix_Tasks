// import React from 'react'
import './FormPage.css'
import './ExperienceDetail.css'
import '../Home.css'
import { useEffect, useState } from 'react'

function ExperienceDetail({formik}:any) {

  const [exp_form, setExp_form] = useState<JSX.Element | boolean>(false);
  const [form_show, setForm_show] = useState(false)
  const [index, setIndex] = useState(formik.values.experienceDetails.length - 1)
  const [editMode, setEditMode] = useState(false)

  function form_sunmit(){
    setEditMode(false)
    setForm_show(false)
  }

  function clear_form(){
    const exp_details = formik.values.experienceDetails
    exp_details.pop()
    const new_exp_details = exp_details
    formik.setFieldValue('experienceDetails', [
      ...new_exp_details,
      { companyName: '', position: '', totalYear: '', lastCTC: '' },
    ]);
  }

  function remove_from_record(){
    setEditMode(false)
    setForm_show(false)
    const exp_details = formik.values.experienceDetails
    exp_details.pop()
    setIndex(-1)
    const new_exp_details = exp_details
    formik.setFieldValue('experienceDetails', new_exp_details);
  }

  const form = ( index!==-1 &&
    <tr className='mat-row'>

      <td className='mat-cell'>
        <div className='form-field'>
          <div className='form-field-flex'>
            <div className='form-field-infix'>
              <input
                id={`companyName${index}`}
                type='text'
                name={`experienceDetails[${index}].companyName`}
                value={formik.values.experienceDetails[index].companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Company Name'
                className='input-element'
                contentEditable = {true}
              />
              <span className='form-field-label-wrapper'>
                <label htmlFor='companyName' className='form-field-label'>
                  <span>Company Name</span>
                  <span>*</span>
                </label>
              </span>
            </div>
          </div>
          <div className='form-field-underline'>
            <span className='form-field-ripple'></span>
          </div>
          <div className='form-field-subscript-wrapper'>
            <div className='form-field-hint-wrapper'>
              <div className='form-field-hint-spacer'></div>
            </div>
          </div>
        </div>
      </td>

      <td className='mat-cell'>
        <div className='form-field'>
          <div className='form-field-flex'>
            <div className='form-field-infix'>
              <input
                id= {`position${index}`}
                name={`experienceDetails[${index}].position`}
                value={formik.values.experienceDetails[index].position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Position'
                className='input-element'
              />
              <span className='form-field-label-wrapper'>
                <label htmlFor='position' className='form-field-label'>
                  <span>Position</span>
                  <span>*</span>
                </label>
              </span>
            </div>
          </div>
          <div className='form-field-underline'>
            <span className='form-field-ripple'></span>
          </div>
          <div className='form-field-subscript-wrapper'>
            <div className='form-field-hint-wrapper'>
              <div className='form-field-hint-spacer'></div>
            </div>
          </div>
        </div>
      </td>

      <td className='mat-cell'>
        <div className='form-field'>
          <div className='form-field-flex'>
            <div className='form-field-infix'>
              <input
                id={`totalYear${index}`}
                type='number'
                name={`experienceDetails[${index}].totalYear`}
                value={formik.values.experienceDetails[index].totalYear}
                onChange={formik.handleChange}
                placeholder='Total Year'
                className='input-element'
              />
              <span className='form-field-label-wrapper'>
                <label htmlFor='totalYear' className='form-field-label'>
                  <span>Total Year</span>
                  <span>*</span>
                </label>
              </span>
            </div>
          </div>
          <div className='form-field-underline'>
            <span className='form-field-ripple'></span>
          </div>
          <div className='form-field-subscript-wrapper'>
            <div className='form-field-hint-wrapper'>
              <div className='form-field-hint-spacer'></div>
            </div>
          </div>
        </div>
      </td>

      <td className='mat-cell'>
        <div className='form-field'>
          <div className='form-field-flex'>
            <div className='form-field-infix'>
              <input
                id={`lastCTC${index}`}
                type='number'
                name={`experienceDetails[${index}].lastCTC`}
                value={formik.values.experienceDetails[index].lastCTC}
                onChange={formik.handleChange}
                placeholder='Last CTC'
                className='input-element'
              />
              <span className='form-field-label-wrapper'>
                <label htmlFor='lastCTC' className='form-field-label'>
                  <span>Last CTC</span>
                  <span>*</span>
                </label>
              </span>
            </div>
          </div>
          <div className='form-field-underline'>
            <span className='form-field-ripple'></span>
          </div>
          <div className='form-field-subscript-wrapper'>
            <div className='form-field-hint-wrapper'>
              <div className='form-field-hint-spacer'></div>
            </div>
          </div>
        </div>
      </td>

      <td className='mat-cell'>
        <button type='button' onClick={()=>form_sunmit()}>Submit</button>
        <button type='button' onClick={()=>clear_form()}>Clear</button>
        <button type='button' onClick={()=>remove_from_record()}>Delete</button>
      </td>
    </tr>
  )

  useEffect(() => {
    setExp_form(form)
  },[formik.values.experienceDetails, form_show])

  function add_exp(form:any){
    setIndex(formik.values.experienceDetails.length)
    setExp_form(form)
    setForm_show(true)
    setEditMode(true)

    formik.setFieldValue('experienceDetails', [
      ...formik.values.experienceDetails,
      { companyName: '', position: '', totalYear: '', lastCTC: '' },
    ]);
  }

  function delete_record(index:number){
    let old_expDetails = JSON.parse(JSON.stringify(formik.values.experienceDetails))
    old_expDetails.splice(index,1)
    setForm_show(false)
    setIndex(-1)
    setEditMode(false)
    formik.setFieldValue('experienceDetails', old_expDetails);
  }

  function form_record_edit(index:number){
    // let old_eduDetails = JSON.parse(JSON.stringify(formik.values.educationDetails))
    setEditMode(true)
    setIndex(index)
    setForm_show(true)
  }


  return (
    <div>
        <h2 className="form-heading">Education Details</h2>
        
        <button disabled={editMode} onClick={()=> add_exp(form)}  type='button' className='btn-add-exp'>
          <span> Add Experience</span>
        </button>

          <table>
            <thead>
              <tr className='mat-header-row'>
                <th className='mat-header-cell'>Company Name</th>
                <th className='mat-header-cell'>Position</th>
                <th className='mat-header-cell'>Total Year</th>
                <th className='mat-header-cell'>Last CTC</th>
                <th className='mat-header-cell'>Action</th>
              </tr>
            </thead>
            <tbody>
              {formik.values.experienceDetails &&
                formik.values.experienceDetails.map((exp:any,index:any) => (
                    <tr className='mat-row' key={index}>
                      <td className='mat-cell'>{exp.companyName}</td>
                      <td className='mat-cell'>{exp.position}</td>
                      <td className='mat-cell'>{exp.totalYear}</td>
                      <td className='mat-cell'>{exp.lastCTC}</td>
                      {/* <td className='mat-cell'></td> */}
                      <td className='mat-cell'>
                        <button type='button' disabled={editMode} onClick={()=>form_record_edit(index)}>Edit</button>
                        <button type='button' disabled={editMode} onClick={()=>delete_record(index)}>Delete</button>
                      </td>
                    </tr>
                  )
                )
              }

              {form_show && exp_form}
            </tbody>
          </table>

    </div>
  )
}

export default ExperienceDetail
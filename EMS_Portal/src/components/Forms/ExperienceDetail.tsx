import '/src/components/css/FormPage.css'
import '/src/components/css/ExperienceDetail.css'
import '/src/components/css/Home.css'
import { useState } from 'react'
import { ExperienceInfo } from '../../models/EmployeeModel'

function ExperienceDetail({formik}:any) {

  const [editMode, setEditMode] = useState(false)
  const [editIds, setEditIds] = useState<Array<number>>([])

  function form_sunmit(index:number){

    setEditIds(editIds.filter(function(item) {
      return item !== index
    }))

    setEditMode(false)
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

  function remove_from_record(index:number){

    setEditIds(editIds.filter(function(item) {
      return item !== index
    }))

    setEditMode(false)
    const exp_details = formik.values.experienceDetails
    exp_details.pop()
    const new_exp_details = exp_details
    formik.setFieldValue('experienceDetails', new_exp_details);
  }

  function add_exp(){
    setEditIds([...editIds,formik.values.experienceDetails.length])
    setEditMode(true)

    formik.setFieldValue('experienceDetails', [
      ...formik.values.experienceDetails,
      { companyName: '', position: '', totalYear: '', lastCTC: '' },
    ]);
  }

  function delete_record(index:number){
    let old_expDetails = JSON.parse(JSON.stringify(formik.values.experienceDetails))
    old_expDetails.splice(index,1)
    setEditMode(false)
    formik.setFieldValue('experienceDetails', old_expDetails);
  }

  function form_record_edit(index:number){
    setEditIds([...editIds,index])
    setEditMode(true)
  }


  return (
    <div>
        <h2 className="form-heading">Experience Details</h2>
        <div className='div-add-button'>
          <button disabled={editMode} onClick={()=> add_exp()}  type='button' className='btn-add-exp'>
            <span> Add Experience</span>
          </button>
        </div>
        <div>
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
              {formik.values.experienceDetails.length==0 && 
                <tr className='mat-row'>
                  <td colSpan={5} className='mat-cell'>No Records</td>
                </tr>
              }

              {formik.values.experienceDetails &&
                formik.values.experienceDetails.map((exp:ExperienceInfo,index:number) => (
                    <>
                      {!editIds.includes(index) && <tr className='mat-row' id={String(index)}>
                        <td className='mat-cell'>{exp.companyName}</td>
                        <td className='mat-cell'>{exp.position}</td>
                        <td className='mat-cell'>{exp.totalYear}</td>
                        <td className='mat-cell'>{exp.lastCTC}</td>
                        <td className='mat-cell'>
                          <button type='button' className='btn-edit-exp' onClick={()=>form_record_edit(index)}>Edit</button>
                          <button type='button' className='btn-delete-exp' onClick={()=>delete_record(index)}>Delete</button>
                        </td>
                      </tr>}

                      {editIds.includes(index) && <tr className='mat-row' id={String(index)}>

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
                              <div>
                                <div className='error'>
                                  {formik.errors.experienceDetails && formik.errors.experienceDetails[index]?.companyName ? (
                                      <div style={{color:"red"}}>{formik.errors.experienceDetails[index].companyName}</div>
                                  ) : null}
                                </div>
                              </div>
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
                              <div>
                                <div className='error'>
                                  {formik.errors.experienceDetails && formik.errors.experienceDetails[index]?.position ? (
                                      <div style={{color:"red"}}>{formik.errors.experienceDetails[index].position}</div>
                                  ) : null}
                                </div>
                              </div>
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
                              <div>
                                <div className='error'>
                                  {formik.errors.experienceDetails && formik.errors.experienceDetails[index]?.totalYear ? (
                                      <div style={{color:"red"}}>{formik.errors.experienceDetails[index].totalYear}</div>
                                  ) : null}
                                </div>
                              </div>
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
                              <div>
                                <div className='error'>
                                  {formik.errors.experienceDetails && formik.errors.experienceDetails[index]?.lastCTC ? (
                                      <div style={{color:"red"}}>{formik.errors.experienceDetails[index].lastCTC}</div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div className='form-field-subscript-wrapper'>
                              <div className='form-field-hint-wrapper'>
                                <div className='form-field-hint-spacer'></div>
                              </div>
                            </div>
                          </div>
                        </td>
                  
                        <td className='mat-cell'>
                          <button type='button' className='btn-submit-exp' disabled={formik.errors.experienceDetails && formik.errors.experienceDetails[index]} onClick={()=>form_sunmit(index)}>Submit</button>
                          <button type='button' className='btn-clear-exp' onClick={()=>clear_form()}>Clear</button>
                          <button type='button' className='btn-delete-exp' onClick={()=>remove_from_record(index)}>Delete</button>
                        </td>
                      </tr>
                      }
                    </>
                  )
                )
              }

            </tbody>
          </table>
          </div>  

    </div>
  )
}

export default ExperienceDetail
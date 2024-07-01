import './FormPage.css'
import './EducationDetail.css'
import '../Home.css'
import {  useState } from 'react'

function EducationDetail({formik}:any) {

  const [index, setIndex] = useState(formik.values.educationDetails.length - 1)
  const [editMode, setEditMode] = useState(false)
  const [editIds, setEditIds] = useState<Array<number>>([])

  function form_sunmit(index:number){

    setEditIds(editIds.filter(function(item) {
      return item !== index
    }))
    
    if(!formik.errors.educationDetails){
      setEditMode(false)
    }
  }

  function clear_form(){
    const edu_details = formik.values.educationDetails
    edu_details.pop()
    const new_edu_details = edu_details
    formik.setFieldValue('educationDetails', [
      ...new_edu_details,
      { educationName: '', universityName: '', result: '', yearOfPassing: '' },
    ]);
  }

  function remove_from_record(index:number){
    setEditIds(editIds.filter(function(item) {
      return item !== index
    }))
    setEditMode(false)
    const edu_details = formik.values.educationDetails
    edu_details.pop()
    const new_edu_details = edu_details
    setIndex(-1)
    formik.setFieldValue('educationDetails', new_edu_details);
  }

  function add_edu(){
    setIndex(formik.values.educationDetails.length)
    console.log("Index Array -> ",formik.values.educationDetails.length)
    setEditIds([...editIds,formik.values.educationDetails.length])
    console.log("Index Array -> ",editIds)
    setEditMode(true)

    formik.setFieldValue('educationDetails', [
      ...formik.values.educationDetails,
      { educationName: '', universityName: '', result: '', yearOfPassing: '' },
    ]);
  }

  function delete_record(index:number){
    let old_eduDetails = JSON.parse(JSON.stringify(formik.values.educationDetails))
    old_eduDetails.splice(index,1)
    setIndex(-1)
    setEditMode(false)
    formik.setFieldValue('educationDetails', old_eduDetails);
  }

  function form_record_edit(index:number){
    setEditIds([...editIds,index])
    setEditMode(true)
    setIndex(index)
  }

  return (
    <div>
        <h2 className="form-heading">Education Details</h2>
        
        <div className='div-add-button'>
          <button disabled={editMode} onClick={()=> add_edu()}  type='button' className='btn-add-edu'>
            <span> Add Education</span>
          </button>
        </div>

        <div>
          <table>
            <thead>
              <tr className='mat-header-row'>
                <th className='mat-header-cell'>Education Name</th>
                <th className='mat-header-cell'>University Name</th>
                <th className='mat-header-cell'>Result</th>
                <th className='mat-header-cell'>Year Of Passing</th>
                <th className='mat-header-cell'>Action</th>
              </tr>
            </thead>
            <tbody>
              {formik.values.educationDetails &&
                formik.values.educationDetails.map((edu:any,index:any) => (
                  <>
                    {!editIds.includes(index) && <tr className='mat-row' id={index}>
                      <td className='mat-cell'>{edu.educationName}</td>
                      <td className='mat-cell'>{edu.universityName}</td>
                      <td className='mat-cell'>{edu.result}</td>
                      <td className='mat-cell'>{edu.yearOfPassing}</td>
                      <td className='mat-cell'>
                        <button type='button' className='btn-edit-edu'  onClick={()=>form_record_edit(index)}>Edit</button>
                        <button type='button' className='btn-delete-edu'  onClick={()=>delete_record(index)}>Delete</button>
                      </td>
                    </tr>}


                    {editIds.includes(index) && <tr className='mat-row' id={index}>

                    <td className='mat-cell'>
                      <div className='form-field'>
                        <div className='form-field-flex'>
                          <div className='form-field-infix'>
                            <input
                              id={`educationName${index}`}
                              type='text'
                              name={`educationDetails[${index}].educationName`}
                              value={edu.educationName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder='Education Name'
                              className='input-element'
                              contentEditable = {true}
                            />
                            <span className='form-field-label-wrapper'>
                              <label htmlFor='educationName' className='form-field-label'>
                                <span>Education Name</span>
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
                                    {formik.errors.educationDetails && formik.errors.educationDetails[index]?.educationName ? (
                                        <div style={{color:"red"}}>{formik.errors.educationDetails[index].educationName}</div>
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
                              id= {`universityName${index}`}
                              name={`educationDetails[${index}].universityName`}
                              value={edu.universityName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder='University Name'
                              className='input-element'
                            />
                            <span className='form-field-label-wrapper'>
                              <label htmlFor='universityName' className='form-field-label'>
                                <span>University Name</span>
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
                                    {formik.errors.educationDetails && formik.errors.educationDetails[index]?.universityName ? (
                                        <div style={{color:"red"}}>{formik.errors.educationDetails[index].universityName}</div>
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
                              id={`result${index}`}
                              type='text'
                              name={`educationDetails[${index}].result`}
                              value={edu.result}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder='Result'
                              className='input-element'
                            />
                            <span className='form-field-label-wrapper'>
                              <label htmlFor='result' className='form-field-label'>
                                <span>Result</span>
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
                                    {formik.errors.educationDetails && formik.errors.educationDetails[index]?.result ? (
                                        <div style={{color:"red"}}>{formik.errors.educationDetails[index].result}</div>
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
                              id={`yearOfPassing${index}`}
                              type='number'
                              name={`educationDetails[${index}].yearOfPassing`}
                              value={edu.yearOfPassing}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder='Year Of Passing'
                              className='input-element'
                            />
                            <span className='form-field-label-wrapper'>
                              <label htmlFor='yearOfPassing' className='form-field-label'>
                                <span>Year Of Passing</span>
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
                                    {formik.errors.educationDetails && formik.errors.educationDetails[index]?.yearOfPassing ? (
                                        <div style={{color:"red"}}>{formik.errors.educationDetails[index].yearOfPassing}</div>
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
                      <button type='button' className='btn-submit-edu' disabled={formik.errors.educationDetails && formik.errors.educationDetails[index]} onClick={()=>form_sunmit(index)}>Submit</button>
                      <button type='button' className='btn-clear-edu' onClick={()=>clear_form()}>Clear</button>
                      <button type='button' className='btn-delete-edu' onClick={()=>remove_from_record(index)}>Delete</button>
                    </td>
                    </tr>}

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

export default EducationDetail
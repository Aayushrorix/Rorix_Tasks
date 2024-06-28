import './FormPage.css'
import './EducationDetail.css'
import '../Home.css'
import { useEffect, useState } from 'react'

function EducationDetail({formik}:any) {

  const [edu_form, setEdu_form] = useState<JSX.Element | boolean>(false);
  const [form_show, setForm_show] = useState(false)
  const [index, setIndex] = useState(formik.values.educationDetails.length - 1)
  const [editMode, setEditMode] = useState(false)

  function form_sunmit(){
    setEditMode(false)
    setForm_show(false)
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

  function remove_from_record(){
    setEditMode(false)
    setForm_show(false)
    const edu_details = formik.values.educationDetails
    edu_details.pop()
    const new_edu_details = edu_details
    setIndex(-1)
    formik.setFieldValue('educationDetails', new_edu_details);
  }

  const form = ( index!==-1 &&
    <tr className='mat-row'>

      <td className='mat-cell'>
        <div className='form-field'>
          <div className='form-field-flex'>
            <div className='form-field-infix'>
              <input
                id={`educationName${index}`}
                type='text'
                name={`educationDetails[${index}].educationName`}
                value={formik.values.educationDetails[index].educationName}
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
                value={formik.values.educationDetails[index].universityName}
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
                value={formik.values.educationDetails[index].result}
                onChange={formik.handleChange}
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
                value={formik.values.educationDetails[index].yearOfPassing}
                onChange={formik.handleChange}
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
    setEdu_form(form)
  },[formik.values.educationDetails, form_show])

  function add_edu(form:any){
    setIndex(formik.values.educationDetails.length)
    setEdu_form(form)
    setForm_show(true)
    setEditMode(true)

    formik.setFieldValue('educationDetails', [
      ...formik.values.educationDetails,
      { educationName: '', universityName: '', result: '', yearOfPassing: '' },
    ]);
  }

  function delete_record(index:number){
    let old_eduDetails = JSON.parse(JSON.stringify(formik.values.educationDetails))
    old_eduDetails.splice(index,1)
    setForm_show(false)
    setIndex(-1)
    setEditMode(false)
    formik.setFieldValue('educationDetails', old_eduDetails);
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
        
        <button disabled={editMode} onClick={()=> add_edu(form)}  type='button' className='btn-add-edu'>
          <span> Add Education</span>
        </button>

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
                    <tr className='mat-row' key={index}>
                      <td className='mat-cell'>{edu.educationName}</td>
                      <td className='mat-cell'>{edu.universityName}</td>
                      <td className='mat-cell'>{edu.result}</td>
                      <td className='mat-cell'>{edu.yearOfPassing}</td>
                      {/* <td className='mat-cell'></td> */}
                      <td className='mat-cell'>
                        <button type='button' className='btn-edit-employee' disabled={editMode} onClick={()=>form_record_edit(index)}>Edit</button>
                        <button type='button' className='btn-delete-edu' disabled={editMode} onClick={()=>delete_record(index)}>Delete</button>
                      </td>
                    </tr>
                  )
                )
              }

              {form_show && edu_form}
            </tbody>
          </table>

    </div>
  )
}

export default EducationDetail
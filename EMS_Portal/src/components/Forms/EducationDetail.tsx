import React from 'react'
import './FormPage.css'
import './EducationDetail.css'
import '../Home.css'
import { useState } from 'react'
import { EducationInfo } from '../../models/EmployeeModel'

function EducationDetail() {

  const [edu_form, setEdu_form] = useState<JSX.Element | null>(null);
  const [educationDetails, setEducationDetails] = useState(null)
  const [edu, setEdu] = useState<EducationInfo>(Object);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [e.target.name] = e.target.value
    console.log('name -> ', e.target.name, ' value -> ',e.target.value)
    // console.log("====> ",e.target.name,"==>",e.target.value)
    setEdu({...edu, [e.target.name]: e.target.value })
    // setEdu({educationName:'sd',universityName:'sd',yearOfPassing:'2022',result:'sd'})
    console.log("Education -> ",edu)
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  
  //   // Ensure edu is properly initialized if undefined
  //   if (!edu) {
  //     setEdu({
  //       educationName: '',
  //       universityName: '',
  //       result: '',
  //       yearOfPassing: ''
  //     });
  //   }
  
  //   // Update edu with new values
  //   setEdu(prevEdu => ({
  //     ...prevEdu!,
  //     [name]: value
  //   }));
  
  //   console.log("Education -> ", edu); // Logs previous state due to closure
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   console.log("========>",name,value)
  //   setEdu(prevEdu => ({
  //     ...prevEdu,
  //     [name]: value
  //   }));
  //   console.log("Education -> ",edu)
  // };

  function add_education_form(){

    const form = (
      <tr className='mat-row'>
        <td className='mat-cell'>
          <div className='form-field'>
            <div className='form-field-flex'>
              <div className='form-field-infix'>
                <input
                  id='educationName'
                  name='educationName'
                  value={edu?.educationName || ''}
                  onChange={handleChange}
                  placeholder='Education Name'
                  className='input-element'
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
                  id='universityName'
                  name='universityName'
                  value={edu?.universityName || ''}
                  onChange={handleChange}
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
                  id='result'
                  name='result'
                  value={edu?.result || ''}
                  onChange={handleChange}
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
                  id='yearOfPassing'
                  name='yearOfPassing'
                  value={edu?.yearOfPassing || ''}
                  onChange={handleChange}
                  placeholder='Year Of Passing'
                  type='number'
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
          <button type='button'>Submit</button>
          <button type='button'>Clear</button>
          <button type='button' onClick={() => setEdu_form(null)}>Delete</button>
        </td>
      </tr>
    );
    setEdu_form(form);
  }

  // const edu_form = ""

  // function add_education_btn(){
    
  // }

  return (
    <div>
        <h2 className="form-heading">Education Details</h2>
        
        <button onClick={()=> add_education_form()}  type='button' className='btn-add-edu'>
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
              <tr className='mat-row'>
                <td className='mat-cell'>B</td>
                <td className='mat-cell'>B</td>
                <td className='mat-cell'>B</td>
                <td className='mat-cell'>B</td>
                <td className='mat-cell'>B</td>
              </tr>

              {edu_form}
            </tbody>
          </table>
        
    </div>
  )
}

export default EducationDetail
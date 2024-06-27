// import React, { useEffect } from 'react'
import './FormPage.css'
import './EducationDetail.css'
import '../Home.css'
import { useState } from 'react'
import { EducationInfo } from '../../models/EmployeeModel'


function add_education_form(){

  const [edu, setEdu] = useState<EducationInfo>({ educationName: '', universityName: '', yearOfPassing: '', result: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [e.target.name] = e.target.value
    const { name, value } = e.target;
    console.log('name -> ', name, ' value -> ', value);
    setEdu(prevState => ({ ...prevState, [name]: value }));
    console.log('Education -> ', edu);
  };

  const curr_index = 3
  console.log(curr_index)

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
                // name={`educationDetails.${curr_index}.educationName`}
                // value={formik.values.educationDetails[curr_index]?.educationName || ''}
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
                // name={`educationDetails.${curr_index}.universityName`}
                // value={formik.values.educationDetails[curr_index]?.universityName || ''}
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
                // name={`educationDetails.${curr_index}.result`}
                // value={formik.values.educationDetails[curr_index]?.result || ''}
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
                // name={`educationDetails.${curr_index}.yearOfPassing`}
                // value={formik.values.educationDetails[curr_index]?.yearOfPassing || ''}
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
        {/* <button type='button' onClick={() => setEdu_form(null)}>Delete</button> */}
      </td>
    </tr>
  );

  return form;
}

function EducationDetail({formik}:any) {

  const [edu_form, setEdu_form] = useState<JSX.Element | null>(null);
  // const [educationDetails, setEducationDetails] = useState([])
  // const [edu, setEdu] = useState<EducationInfo>(Object);
  // const [edu, setEdu] = useState<EducationInfo>({ educationName: '', universityName: '', yearOfPassing: '', result: '' });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // [e.target.name] = e.target.value
  //   console.log('name -> ', e.target.name, ' value -> ',e.target.value)
  //   // console.log("====> ",e.target.name,"==>",e.target.value)
  //   setEdu({...edu, [e.target.name]: e.target.value })
  //   // setEdu({educationName:'sd',universityName:'sd',yearOfPassing:'2022',result:'sd'})
  //   console.log("Education -> ",edu)
  // };


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   console.log('name -> ', name, ' value -> ', value);
  //   setEdu(prevState => ({ ...prevState, [name]: value }));
  //   console.log('Education -> ', edu);
  // };

  // useEffect(() => {
  //   console.log(edu)
  // }, [edu]);


  

  // const edu_form = ""

  // function add_education_btn(){
    
  // }

  const form = add_education_form()
  // function set_form(){
  //   console.log(form)
  //   setEdu_form(form);
  // }

  return (
    <div>
        <h2 className="form-heading">Education Details</h2>
        
        <button onClick={()=> setEdu_form(form)}  type='button' className='btn-add-edu'>
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

              {/* {educationDetails &&
              educationDetails.map((edu:any,index:any) => (
                <tr className='mat-row' key={index}>
                  <td className='mat-cell'>{edu.educationName}</td>
                  <td className='mat-cell'>{edu.universityName}</td>
                  <td className='mat-cell'>{edu.result}</td>
                  <td className='mat-cell'>{edu.yearOfPassing}</td>
                  <td className='mat-cell'>B</td>
                </tr>
              ))} */}

              {edu_form}
            </tbody>
          </table>
        
    </div>
  )
}

export default EducationDetail
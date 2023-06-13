import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from "yup";
import { useFormik } from 'formik';



export const fieldValidationSchemaMentor = yup.object({
  name : yup.string().required("Please fill in the Mentor name"),
  batch: yup.string().required("Please fill in the Batch").min(5,"Please provide a valid Batch"),
  gender : yup.string().required("Please fill in the Gender"),
  subject: yup.string().required("Please fill in the Subject"),

})

function AddMentors({teacher,setTeacher}) {
    // const [name, setName] = useState();
    // const [batch,setBatch] = useState();
    // const [gender,setGender] = useState();
    // const [subject,setSubject] = useState();

const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
  initialValues:{
    name: "",
    batch: "",
    gender: "",
    subject: "",
  },
  validationSchema: fieldValidationSchemaMentor,
  onSubmit:(createMentordata)=>{
createMentor(createMentordata)
  }
})

    const history = useHistory();
    const createMentor=(newMentorData)=>{
// const newMentor = {
//     name,
//     batch,
//     gender,
//     subject
// }
setTeacher([...teacher,newMentorData])
history.push("/mentors")
    }

  return (
    <Base
    title={"Add-Mentor Page"}
    description={"Fill the below form and press Add-Mentor button"}>

      <form onSubmit={handleSubmit}>

      <div className='input'>

    
<input
type='text'
name='name'
placeholder='Enter Name'
value={values.name}
onChange={handleChange}
onBlur={handleBlur}
/> 
<div style={{color:"red"}}> {errors.name && touched.name ? errors.name : ""}</div>
<br/>
<input
type='text'
name='batch'
placeholder='Enter Batch'
value={values.batch}
onChange={handleChange}
onBlur={handleBlur}

/> 
<div style={{color:"red"}}>{errors.batch && touched.batch  ? errors.batch    : ""}</div>

<br/>
<input
type='text'
name='gender'
placeholder='Enter Gender'
value={values.gender}
onChange={handleChange}
onBlur={handleBlur}

/>
<div style={{color:"red"}}> {errors.gender && touched.gender ? errors.gender : ""}</div>

<br/> 
<input
type='text'
name='subject'
placeholder='Enter Subject'
value={values.subject}
onChange={handleChange}
onBlur={handleBlur}

/> 
<div style={{color:"red"}}> {errors.subject && touched.subject ? errors.subject : ""}</div>

<br/>
<button type='submit'>Add Mentor</button>

</div>
</form>

    </Base>
    
  )
}

export default AddMentors
import React, { useState } from 'react'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import *  as yup from "yup";
import { useFormik } from 'formik';

export const fieldValidationSchema = yup.object({
  name : yup.string().required("Please fill in the Student name"),
  batch: yup.string().required("Please fill in the Batch").min(5,"Please provide a valid Batch"),
  gender : yup.string().required("Please fill in the Gender"),
  qualification: yup.string().required("Please fill in the Qulaification"),

})


function AddStudents({students,setStudents}) {
    // const [name,setName] = useState();
    // const [batch,setBatch] = useState();
    // const [gender,setGender] = useState();
    // const [qualification,setQualification] = useState();

   const {handleSubmit,values,handleChange,handleBlur,errors,touched} =useFormik({
initialValues: {
  name: "",
  batch: "",
  gender: "",
  qualification: "",
},
validationSchema: fieldValidationSchema,
onSubmit : (createStudentdata)=>{
  console.log("onsubmit : ",createStudentdata);
  createStudent(createStudentdata);
}
   })

const history = useHistory();
const createStudent = (newStudent) => {
// const newStudent = {
//     name, 
//     batch,
//     gender,
//     qualification

// }
setStudents([...students, newStudent]) ;
history.push("/");
}



  return (
    <Base
    title={"Add-Student Page"}
    description={"We can add New student Here"}
    >
      <form onSubmit={handleSubmit}>

    <div className='input'>

    
        <input
        // type='name'
        name='name'
        placeholder='Enter Name'
        value={values.name}
        onChange={handleChange}
                onBlur={handleBlur}
        /> 
  <div style={{color:'red'}} >{errors.name && touched.name ? errors.name : ""}</div>
<br/>
        <input
        // type='batch'
        name='batch'
        placeholder='Enter Batch'
        value={values.batch}
        onChange={handleChange}
        onBlur={handleBlur}
        /> 
<div style={{color:'red'}} >{errors.batch && touched.batch? errors.batch : ""}</div>
<br/>
        <input
        // type='gender'
        name='gender'
        placeholder='Enter Gender'
        value={values.gender}
        onChange={handleChange}
        onBlur={handleBlur}
        />
<div style={{color:'red'}}>{errors.gender && touched.gender? errors.gender : ""}</div>
        <br/> 
        <input
        // type='qualification'
        name='qualification'
        placeholder='Enter Qualification'
        value={values.qualification}
        onChange={handleChange}
        onBlur={handleBlur}
        /> 
        <div style={{color:'red'}} >{errors.qualification && touched.qualification? errors.qualification : ""}</div>
        <br/>
<button  type='sumbit'>Add Students</button>
    
    </div>
    </form>

    </Base>

  )
}

export default AddStudents
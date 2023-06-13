import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fieldValidationSchema } from './AddStudents';
import { useFormik } from 'formik';


 

function UpdateStudents({students,setStudents,editIdx}) {
    const {id} = useParams();
    const editStudent = students[id];

 //  const [name,setName] = useState();
    // const [batch,setBatch] = useState();
    //  const [gender,setGender] = useState();
    //  const [qualification,setQualification] = useState();

// useEffect(()=>{
//  setName(editStudent.name);
//  setBatch(editStudent.batch);
//  setGender(editStudent.gender);
//  setQualification(editStudent.qualification);
// //  console.log(editStudent)
// },[id])


    const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
       
        initialValues: {

            name: editStudent.name,  
            batch:  editStudent.batch,
            gender: editStudent.gender, 
            qualification: editStudent.qualification, 
        },
        enableReinitialize:true,
        validationSchema: fieldValidationSchema,
        onSubmit:(editedStudentData)=>{
            // console.log(editedStudentData);
            updateStudent(editedStudentData);
        }
    })
   

const history = useHistory();
 
     function updateStudent(editedData){
        //  const updatedObj = {
        //     name,
        //     batch,
        //     gender,
        //     qualification
        //  }
         students[id] = editedData
         setStudents([...students])
         history.push("/");
     }
     
  return (
<Base 
title={"Edit-Student Page"}
description={"We can edit a student information here"}
>
     <form onSubmit={handleSubmit}>


<div className='input'>

    
        <input
        name='name'
        
        placeholder='Enter Name'
        value={values.name}
        onChange={ handleChange}
        onBlur={handleBlur}
        /> 
  <div style={{color:'red'}} >{errors.name && touched.name ? errors.name : ""}</div>

<br/>
        <input
        name='batch'
        
        placeholder='Enter Batch'
        value={values.batch}
        onChange={handleChange}
        onBlur={handleBlur}

        /> 
<div style={{color:'red'}} >{errors.batch && touched.batch? errors.batch : ""}</div>

<br/>
        <input
        name='gender'
         
        placeholder='Enter Gender'
        value={values.gender}
        onChange={handleChange}
        onBlur={handleBlur}

        />
       <div style={{color:'red'}}>{errors.gender && touched.gender? errors.gender : ""}</div>


        <br/> 
        <input
        name='qualification'
        
        placeholder='Enter Qualification'
        value={values.qualification}
        onChange={handleChange}
        onBlur={handleBlur}

        /> 
        <div style={{color:'red'}} >{errors.qualification && touched.qualification? errors.qualification : ""}</div>

        <br/>
<button type='submit'>Update Students</button>
    
    </div>
    </form>


    
</Base>
  
  )
}

export default UpdateStudents
import React, { useState } from 'react'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Students({students, setStudents, setEditIdx}) {


function deleteStudents(studId){
const remainingStudnts = students.filter((stud,idx)=>idx !== studId)
setStudents(remainingStudnts);
}
const history = useHistory();
  return (
    <div> 
        <Base   
title={"Students Dashboard"}
description={"This Page contains all students data"}    
       > 
<br/> 

<div className='card-container'>
{/* {students ? "" : <h1>No data available</h1>} */}
 {students.map((stud,idx)=>(
  
    <div className='card' key={idx}>
     
<h3>{stud.name}</h3>
<p>{stud.batch}</p>
<p>{stud.gender}</p>
<p>{stud.qualification}</p>
<div className='button-container'>
<button onClick={()=>history.push(`/edit/${idx}`)}>Edit</button>
<button onClick={()=>deleteStudents(idx)}>Delete</button>
</div>

 </div>

 ))}

    

</div>

</Base>
    </div>
  )
}

export default Students
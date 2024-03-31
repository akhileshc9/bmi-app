
import React, { useState } from 'react'

function Bmicalc(props) {
    const [height,setHeight] = useState('')
    const [weight,setWeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [bmiStatus, setbmiStatus] = useState('')
    const calcBmi = (e)=>{
        e.preventDefault()
       let newWeight = weight
       let newHeight = height
       let bmi = (newWeight) / ((newHeight/100)*(newHeight/100));
       let bmiVal = setBmi(bmi)
       
       if(bmi<18.5){
        let bmiStatus = 'Underweight';
        setbmiStatus(bmiStatus);
        
      }
        else if(bmi>18.5 && bmi<24.9){
          let bmiStatus = 'Healthy Range';
          setbmiStatus(bmiStatus);
        
        }
        else if(bmi>=25 && bmi<=29.9){
          let bmiStatus = 'Overweight';
          setbmiStatus(bmiStatus);
       
        }
        else if(bmi>=30 && bmi<=39.9){
          let bmiStatus = 'Obesity';
          setbmiStatus(bmiStatus);
       
        }
        else{
          let bmiStatus = 'Severe Obesity';
          setbmiStatus(bmiStatus);
       
        }
        const isUnderweight = {
          color: "red",
          };
    }
        
        
  return (
    
    <form onSubmit={calcBmi}>
    
      
   
<div class="card text-bg-light mb-3" style={{width:20+"rem",margin: '20px auto',padding:'10px 20px'}}>
  <img src="AA-male-stepping-on-scales.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BMI Calculator</h5>
    <p class="card-text">
    
      <input type="text" style={{margin:'10px'}} placeholder='Enter height (cm)' value={height} minLength="2" maxLength="5" onChange={(e)=>setHeight(e.target.value)} required></input>
      
      
      
      
      <input type='text' style={{margin:'10px'}} placeholder='Enter weight (kg)' value={weight} onChange={(e)=>setWeight(e.target.value)} required></input>
     
      
      
      <button className='btn btn-primary' style={{margin:'10px'}} >Calculate</button>
      <p className="card-title">BMI : {bmi} &nbsp;&nbsp;kg/m<sup>2</sup></p>
      <h5 className="card-text" style={{color:"green"}}>Status :  {bmiStatus}  </h5>
    </p>
  </div>
  <div class="card-footer text-body-secondary">
   &copy; 2024 BMI App
   
  </div>
  </div>
  

   {/*  <span> Height : </span>
      <input type="text"  placeholder='Enter height' value={height} min="64" max="251" onChange={(e)=>setHeight(e.target.value)} required></input>
      <span> (in cm) </span>
      
      
      <span> Weight: </span>
      <input type='text' placeholder='Enter weight' value={weight} onChange={(e)=>setWeight(e.target.value)} required></input>
      <span> (in kg) </span>
      
      
      <button className='btn btn-primary' >Calculate</button>
      
      
      
    <h4 className="card-text" style={{color:"green"}}>BMI : {bmi} &nbsp;&nbsp;kg/m<sup>2</sup> </h4>
    <h5 className="card-text" style={{color:"green"}}>Status :  {bmiStatus}  </h5>
  
   */}
  
    
  


    
    
    
    </form>
    
    
  )
  
}

export default Bmicalc



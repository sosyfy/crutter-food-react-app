import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Recipe.css'

function Recipe() {
    const [details,SetDetails]  = useState([])
    const [activeTab , setActiveTab]  = useState("instructions")

    let params = useParams();

  const fetchDetails = async ()=>{
       const data = await fetch(` https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
       const detailData = await data.json();
       SetDetails(detailData)
       console.log(detailData);
  }
  
  useEffect(()=>{
      fetchDetails();
  },[params.name])

  return (
<div className="detailWrapper">
  <div className='image-container'>
      <h2>{details.title}</h2>
      <img src={details.image} alt="yes" />
  </div>
  <div className="info">
      <button className={activeTab === "instructions"? 'active': ''} onClick={()=> setActiveTab('instructions')}>instructions</button>
      <button className={activeTab === "ingridients"? 'active': ''}  onClick={()=> setActiveTab('ingridients')}>ingridients</button>
 {activeTab==="instructions" && 
  <div>
      <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
      <h3 dangerouslySetInnerHTML={{ __html: details.instructions}}></h3>
  </div>
 }
  {activeTab === "ingridients" && 
  
  
 <ul>
     {details.extendedIngredients.map((ingridient)=>(
       <li key={ingridient.id}>{ingridient.original}</li>
         ))}
 </ul>
  }
 
  </div>
  
</div> 
 )
}

export default Recipe
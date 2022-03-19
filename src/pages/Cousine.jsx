import React, { useEffect, useState } from 'react'
import {Link , useParams} from 'react-router-dom'
import './cousine.css'


function Cousine() {
  const [cuisine,SetCuisine]  = useState([])
   let params = useParams();

  const getCousine = async (names)=>{
       const data = await fetch(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${names}`)
       const recipies = await data.json();
       SetCuisine(recipies.results)
       console.log(recipies);
  }
  
  useEffect(()=>{
    getCousine(params.type);
    console.log(params.type);
  },[params.type])

  return (
    <div className='grid'>
    {cuisine.map((item)=>{
      return(
        <div className="card" key={item.id}>

          <Link to={"/recipe/"+ item.id}>
          <img src={item.image } alt="nothing" />
          <h4>{item.title}</h4>
          </Link>
        </div>
      )
    })}
    </div>
  )
}

export default Cousine
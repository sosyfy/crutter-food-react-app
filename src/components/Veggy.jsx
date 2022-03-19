import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link} from 'react-router-dom'

function Veggy() {
     const [veggie, setVeggie] = useState([])
    useEffect(() => {
        getVeggie()
    },[])
    
    const getVeggie = async ()=>{
        const check = localStorage.getItem("veggie")
        if(check){
            setVeggie(JSON.parse(check))
        } else{

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log(data);
        }
    }
    
  return (
                <Wrapper >
                    <h3>vegiterian picks </h3>
                    <Splide options={{
                        perPage:3,
                        arrows: true,
                        pagination: false,
                        drag: 'free',
                        gap: "2rem",
                    }}>

                    {veggie.map((recipe)=>{
                        return(
                            < SplideSlide>
                          <Card key={recipe.id}>
                               <Link to={"/recipe/"+ recipe.id}>
                              <p>{recipe.title}</p>
                              <img src={recipe.image} alt={recipe.title} />
                               </Link>
                          </Card>
                            </SplideSlide>  
                        )
                    })}
                    </Splide>

                </Wrapper>
  )
}
const Wrapper = styled.div`
margin:1rem ;
margin-top: 0rem;
padding: 2rem;
 
h3{
    padding: 2rem;
}
`
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
    position: absolute;
    left: 0;
    width:100%;
    height:100%;
    border-radius: 2rem;
    object-fit: cover;

}
p{
    position: absolute;
    z-index:10;
    bottom: 20%;
    color: white;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content:center;
}
`



export default Veggy
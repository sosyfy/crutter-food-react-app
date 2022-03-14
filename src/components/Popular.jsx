import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


function Popular() {
    const [popular, setPopular] = useState([])
    useEffect(() => {
        getPopular()
    },[])
    
    const getPopular = async ()=>{
        const check = localStorage.getItem("popular")
        if(check){
            setPopular(JSON.parse(check))
        } else{

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
        }
        // console.log(data.recipes)
    }
    
  return (
                <Wrapper >
                    <h3>popular picks </h3>
                    <Splide options={{
                        perPage:4,

                        arrows: true,
                        pagination: false,
                        drag: 'free',
                        gap: "2rem",
                    }}>

                    {popular.map((recipe)=>{
                        return(
                            < SplideSlide>
                          <Card key={recipe.id}>
                              <p>{recipe.title}</p>
                              <img src={recipe.image} alt={recipe.title} />
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
margin-bottom: 0rem;
padding: 0 2rem ;

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

export default Popular
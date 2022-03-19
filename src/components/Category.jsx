import React from 'react'
import { FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { GiNoodles, GiChopsticks} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './Category.css'



function Category() {
  return (
    <div className='navbar'>
      <Link to='/' className='link  logo'>
          <h4>Home</h4>
      </Link>
      <Link to='/cousine/italian' className='link'>
          <FaPizzaSlice />
          <h4>italian</h4>
      </Link>
      <Link to='/cousine/american' className='link' > 
          <FaHamburger />
          <h4>american</h4>
      </Link>
      <Link to='/cousine/thai' className='link'>
          <GiNoodles />
          <h4>thai</h4>
      </Link>
      <Link to='/cousine/chineese' className='link'>
          <GiChopsticks />
          <h4>chineese</h4>
      </Link>
    </div>
  )
}

export default Category
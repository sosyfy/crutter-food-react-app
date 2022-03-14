import React from 'react'
import { FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { GiNoodles, GiChopsticks} from 'react-icons/gi'


function Category() {
  return (
    <div className='navbar'>
      <div>
          <FaPizzaSlice />
          <h4>italian</h4>
      </div>
      <div>
          <FaHamburger />
          <h4>american</h4>
      </div>
      <div>
          <GiNoodles />
          <h4>thai</h4>
      </div>
      <div>
          <GiChopsticks />
          <h4>chineese</h4>
      </div>
    </div>
  )
}

export default Category
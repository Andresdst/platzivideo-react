import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({children}) =>{
  return(
    <div className="Categories">
      <h3 class="categories__title">Mi lista</h3>

      {children}
    </div>

  )
}

export default Categories
import React from 'react'

const Footer = () => {

  let footerStyle ={
    width: "100%",
  }

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className ="text-center">
      Copyright &copy; MyTodosList.com Created by : Yogesh Indoria
      </p>  
    </footer>
  )
}

export default Footer

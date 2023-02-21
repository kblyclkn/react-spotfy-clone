import React from 'react'
import { NavLink } from "react-router-dom";
function Title({title, more = false}) {
  return (
    <header className="flex items-center justify-between mb-4">
    <NavLink to={more ?? '#'}>

    <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
      {title}
    </h3>
    </NavLink>

    {more && (
      <NavLink
        className={
          "font-semibold hover:underline text-xs uppercase text-link tracking-wider"
        }
        to={more}
      >
        see all
      </NavLink>
    )}
  </header>
  )
}

export default Title

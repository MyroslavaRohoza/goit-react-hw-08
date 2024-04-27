import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to='/register'>Sign up</NavLink>
      <NavLink to='/login'>Log in</NavLink>
    </nav>
  )
}
export default Navigation
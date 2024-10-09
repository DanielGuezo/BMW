import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">M3</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Car</li>
        <li>Engine</li>
        <li>Interior</li>
        <li className='nav-contact'>Contact</li>
      </ul>
      
    </div>
  )
}

export default Navbar

import Navlogo from "../assets/images/Navlogo.png"
import hamburger from "../assets/icons/hamburger.svg"
// import navLinks from "../constants"
const Nav = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" }
  ];
  return (
    <header className="padding-x py-3 z-10 absolute w-full
    bg-dull-yellow">
        <nav className="flex justify-between items-center">
            <a href="/">
            <img src={Navlogo} alt="Logo"
            width ={100}
            height = {20} 
            />
            </a>
            <ul className="flex-1 flex justify-center items-center
            gap-16 max-lg:hidden pl-80 ">
              {navLinks.map((item) =>(
                <li key = {item.label}>
                  <a href={item.href}
                  className="font-montserrat leading-normal
                  text-lg text-slate-gray hover:text-blue-100">
                    {item.label}
                  </a>
                </li>
              ))}
               
            </ul>

            <div className="hidden max-lg:block">
              <img src={hamburger} alt="hamburger" 
              width= {25}
              height= {25}
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav

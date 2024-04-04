import Logo from "../assets/icons/logo.svg";
import Button from "./Button";


const Navbar = () => {
  return (
    <div className='flex-between py-3 bg-primary px-10 mt-8 rounded-3xl shadow'>
        <img src={Logo} alt="" />

        <ul className="flex items-center text-white space-x-3">
          <li>Find Work</li>
          <li>Find Talent</li>
          <li>Articles</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className="flex items-center space-x-4">
          <a className="text-white">Login</a>
          <Button>
            Join Now
          </Button>
        </div>

    </div>
  );
}

export default Navbar;
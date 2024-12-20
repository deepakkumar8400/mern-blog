import { FaSearch } from 'react-icons/fa';
import{Link} from 'react-router-dom';;
export default function Header() {
  return (
    <div>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to ='/'>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-600">Estate</span>
          </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search here...."
              className="bg-transparent focus:outline-none w-24 sm:-64"
            />
            <FaSearch className="text-slate-600 ml-2" />
          </form>
          <ul className='flex gap-4'>
            <Link to='/Home'>
            <li className='hidden sm:inline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline'>About</li>
            </Link>
            <Link to='/Sign-in'>
            <li className='sm:inline'>Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}

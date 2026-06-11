import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
    const user = {name: 'John Doe'}

    const navigate = useNavigate()

    const logOutUser = () => {
        navigate('/')
    }
  return (
    <>
    <div className="shadow-md">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5
        text-slate-800 transition-all">
            <Link to='/'>
                <img src="/logo.svg" alt="Resume Logo" className="h-ll w-auto"/>
            </Link>
            <div className="flex items-center gap-4 text-sm">
                <p className="max-sm:hidden">Hi { user?.name } </p>
                <button onClick={ logOutUser }className="bg-white hover:bg-slate-200 border-4 border-gray-100 px-7 py-1.5
                rounded-full active:scale-95 transition-all">Logout</button>
            </div>
        </nav>
    </div>
    </>
  )
}

export default NavBar
import Button from "./Button";


function Header({header , user}) {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img

              src={header.logo}
              className='h-12 w-12 rounded-full'

            />
            <span className="ml-3 text-xl">{header.title}</span>
          </a>
          <nav className="mr-10 md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Products</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
          </nav>
          <Button label={user.isLogin ? "Logout" : "Login"} />
        </div>
      </header >
    )
}

export default Header;
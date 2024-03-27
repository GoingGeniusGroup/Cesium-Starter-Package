import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-10 ">
          <Link
            className="mr-5 text-white hover:text-blue-400 relative inline cursor-pointer font-medium before:bg-blue-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            href="#"
          >
            Link1
          </Link>

          <Link
            className="mr-5 text-white hover:text-blue-400 relative inline cursor-pointer font-medium before:bg-blue-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            href="#"
          >
            Link2
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

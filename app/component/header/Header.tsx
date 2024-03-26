import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-white text-xl hover:text-blue-400">Home</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-blue-400" href="./radarchart">
            Radar Chart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

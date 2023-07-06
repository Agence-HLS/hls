import Image from "next/image";
const Navbar = () => {
  return (
    <header className="hidden lg:flex grid-cols-2 ">
      <div>
        <Image src="/White-logo.svg" width={500} height={500} alt="Logo" />
      </div>
      <div className="w-full flex items-center justify-center">
        <nav>
          <ul className="flex flex-row text-lg">
            <li>ACCUEIL</li>
            <li className="px-5">NOTRE ENTREPRISE</li>
            <li>NOS TARIFS</li>
            <li className="px-5">NOS CLIENTS</li>
            <li>NOUS CONTACTER</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import Image from "next/image";
const Navbar = () => {
  return (
    <header className="hidden lg:flex grid-cols-2 ">
      <div>
        <Image src="/White-logo.svg" width={300} height={300} alt="Logo" />
      </div>
      <div className="w-full flex items-center justify-center">
        <nav>
          <ul className="flex flex-row">
            <li>Accueil</li>
            <li className="px-5">Notre Entreprise</li>
            <li>Nos Tarifs</li>
            <li className="px-5">Nos Clients</li>
            <li>Nous Contacter</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

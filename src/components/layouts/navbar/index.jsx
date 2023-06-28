const Navbar = () => {
  return (
    <header className="flex md:hidden">
      <nav className="w-full flex justify-center">
        <ul className="flex flex-row">
          <li>Accueil</li>
          <li className="px-5">Notre Entreprise</li>
          <li>Nos Tarifs</li>
          <li className="px-5">Nos Clients</li>
          <li>Nous Contacter</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "@tanstack/react-router";
import { MenuMobile } from "../MenuMobile";
import Logo from "../../assets/images/logo.png";

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Curso", href: "/curso" },
  { name: "Aula Avulsa", href: "/aulaavulsa" },
  { name: "Mentoria", href: "/mentoria" },
  { name: "Quem sou eu", href: "/quemsoueu" },
  { name: "Depoimentos", href: "/depoimentos" },
];

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-3 left-0 right-0 z-10 px-4 max-[1246px]:px-10 max-md:px-6">
        <div className="bg-white text-black max-w-7xl w-full min-w-0 mx-auto flex items-center py-3 px-6 rounded-2xl mt-4 justify-between shadow-lg transition-all duration-300 max-[1389px]:max-w-6xl max-[1389px]:px-5 max-[1246px]:max-w-full max-[1246px]:px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center border rounded-full w-9 h-9 shadow-sm transition-all duration-300 shrink-0 max-[1246px]:w-8 max-[1246px]:h-8"
          >
            <img
              src={Logo}
              alt="Microfone anos 50"
              className="h-6 w-auto object-contain transition-all duration-300 max-[1246px]:h-5"
            />
          </Link>

          {/* Nav Links Desktop */}
          <nav className="min-w-0">
            <ul className="flex gap-4 md:gap-10 items-center max-[1389px]:gap-8 max-[1246px]:gap-6">
              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300 whitespace-nowrap shrink-0">
                <Link to="/curso">Curso</Link>
              </li>

              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300 whitespace-nowrap shrink-0">
                <Link to="/mentoria">Mentoria</Link>
              </li>

              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300 whitespace-nowrap shrink-0">
                <Link to="/quemsoueu">Quem sou eu</Link>
              </li>

              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300 whitespace-nowrap shrink-0">
                <Link to="/depoimentos">Depoimentos</Link>
              </li>

              <li className="lg:hidden shrink-0">
                <MenuMobile navLinks={navLinks} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky bg-dark flex flex-row justify-between items-center px-8 py-2.5">
      <div className="logo-wrapper">
        <NavLink to="/hogwarts-magic-cards">
          <img
            className="max-w-md"
            src="./hogwarts-magic-cards/assets/icon/logo.svg"
            alt="Logo"
            width="55"
            height="40"
          />
        </NavLink>
      </div>
      <div className="flex gap-[clamp(0.5rem,2vw,2rem)]">
        <ul className="hidden md:flex items-center gap-[clamp(0.5rem,2vw,2rem)] text-primary text-base">
          <li className="link">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/hogwarts-magic-cards/play"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Play
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/hogwarts-magic-cards/inventory"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Inventory
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/hogwarts-magic-cards/account"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Account
            </NavLink>
          </li>
        </ul>
        {/* Mobile menu */}
        <button type="button" className="md:hidden">
          <img
            src="./hogwarts-magic-cards/assets/icon/mobile-menu.svg"
            alt="mobile-menu"
            width="38"
            height="30"
          />
        </button>

        <button type="button" className="hidden md:block">
          <NavLink
            to="/hogwarts-magic-cards/login"
            className={({ isActive }) =>
              `navlink ${isActive ? "is-active" : ""}`
            }
          >
            <img
              className="max-w-md"
              src="./hogwarts-magic-cards/assets/icon/logged.svg"
              alt="connect"
              width="20"
              height="20"
            />
          </NavLink>
        </button>
      </div>
    </nav>
  );
}

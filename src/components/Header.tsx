import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="mb-8 border-b">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
          <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          株式会社Fuctional Lab
        </a>
        <nav className="hidden">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faBars} />
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <a href="" className="hidden sm:flex flex-col h-12 w-12 items-center justify-center gap-1.5">
            <FontAwesomeIcon icon={faHeart} />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Wishlist</span>
          </a>
          <a href="" className="flex flex-col h-12 w-12 items-center justify-center gap-1.5">
            <FontAwesomeIcon icon={faUser} />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Account</span>
          </a>
          <a href="" className="flex flex-col h-12 w-12 items-center justify-center gap-1.5">
          <FontAwesomeIcon icon={faCartShopping} />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </a>
          <button type="button" className="flex flex-col h-12 w-12 items-center justify-center gap-1.5">
            <FontAwesomeIcon icon={faBars} />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

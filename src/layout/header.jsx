import Layout from "./layout";
import Logo from "../assets/images/Logo.svg";

const Header = (props) => {
  const menu = {
    "About": {
      "href": "/about",
    },
    "Features": {
      "href": "/features",
    },
    "Pricing": {
      "href": "/pricing",
    },
    "Testimonials": {
      "href": "/testimonials",
    },
    "Help": {
      "href": "/help",
    },
  }

  const handleToggle = (e) => {
    const target = e.target;
    const attr = target.getAttribute("data-attr");
    const nav = document.querySelectorAll("div[data-ref='dropdown-menu-container']");
    if (attr === "hidden") {
      target.setAttribute("data-attr", "show");
      target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M21 5H3v2h18V5zm0 6H3v2h18v-2zm0 6H3v2h18v-2z" clipRule="evenodd"/></svg>`;
      nav.forEach((item) => {
        item.classList.add("hidden");
      });
    } else {
      target.setAttribute("data-attr", "hidden");
      target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" clipRule="evenodd"/></svg>`;
      nav.forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  }
  return (
    <header>
      <Layout className="py-10">
        <div className="flex justify-between flex-wrap md:flex-nowrap">
          <a href="/" className="">
            <img src={Logo} alt="logo" className="w-36" />
          </a>

          <div className="flex md:hidden text-right">
            <button className="link" data-attr="hidden" onClick={handleToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div data-ref="dropdown-menu-container" className="md:grow hidden basis-full md:basis-auto md:flex items-center pt-4 md:pt-0">
            <nav className="md:flex md:items-center grow">
              <ul className="flex md:space-x-8 space-y-4 mx-auto md:space-y-0 flex-col md:flex-row pl-6 md:pl-0">
                {Object.keys(menu).map((key, index) => (
                  <li key={index}>
                    <a href={menu[key].href} className="link">{key}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div data-ref="dropdown-menu-container" className="basis-full hidden md:block md:basis-auto pb-4 md:pb-0">
            <div className="flex md:space-x-5 space-y-5 md:space-y-0 items-center flex-col md:flex-row justify-center md:justify-end">
              <a href="/signin" className="link active">Sign In</a>
              <a href="/signup" className="bg-transparent hover:bg-rose-600 text-rose-500 hover:text-white border border-rose-500 px-10 font-medium py-2 rounded-full">Sign Up</a>
            </div>
          </div>
        </div>
      </Layout>
    </header>
  );
}

export default Header;
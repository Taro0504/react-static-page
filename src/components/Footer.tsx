import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white pt-4">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-16 gap-12 border-t pt-10">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4">
              <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>

                株式会社Fuctional Lab
              </a>
            </div>
            <p className="mb-6 text-gray-500 sm:pr-8">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <div className="flex gap-4">
              <a href="" className="">
                <FontAwesomeIcon icon={faInstagram} className="fa-lg text-gray-500 hover:text-gray-700"/>
              </a>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-lg text-gray-500 hover:text-gray-700" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-lg text-gray-500 hover:text-gray-700"/>
              </a>
            </div>
          </div>

          <div className="">
            <div className="mb-4 font-bold tracking-widest">
                製品
              </div>
            <nav className="flex flex-col gap-4">
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">概要</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">解決策</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">価格</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">顧客</a>
            </nav>
          </div>
          <div className="">
            <div className="mb-4 font-bold tracking-widest">
                製品
              </div>
            <nav className="flex flex-col gap-4">
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">概要</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">解決策</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">価格</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">顧客</a>
            </nav>
          </div>
          <div className="">
            <div className="mb-4 font-bold tracking-widest">
                製品
              </div>
            <nav className="flex flex-col gap-4">
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">概要</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">解決策</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">価格</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">顧客</a>
            </nav>
          </div>
          <div className="">
            <div className="mb-4 font-bold tracking-widest">
                製品
              </div>
            <nav className="flex flex-col gap-4">
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">概要</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">解決策</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">価格</a>
              <a href="" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">顧客</a>
            </nav>
          </div>
        </div>
        <div className="border-t text-center text-sm py-8 text-gray-400">
          © 2023 - Present Flowrift. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

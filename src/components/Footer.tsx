import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 grid grid-cols-1 divide-y divide-white">
        <div className="flex flex-col lg:flex-row">
          <h1 className="font-outfit text-white font-medium text-center mb-10">
            KRYPTO
          </h1>
          <div className="flex w-full justify-around pb-5">
            <div className="flex flex-col items-end lg:items-start">
              <h6 className="font-outfit text-white mb-5">krypto</h6>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                home
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                about
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                buy NFTs
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                sell NFTs
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h6 className="font-outfit text-white mb-5">market</h6>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                browse NFTs
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                buy NFTs
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                sell NFTs
              </span>
            </div>
            <div className="flex flex-col">
              <h6 className="font-outfit text-white mb-5">contact</h6>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                email
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                linkedIn
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                instagram
              </span>
              <span className="font-roboto text-white font-thin text-xs leading-6 hover:cursor-pointer">
                x (twitter)
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="w-full font-outfit text-white pb-5 text-center lg:text-left">
              join our newsletter
            </h6>
            <NewsletterForm />
          </div>
        </div>
        <div className="py-10 w-full flex flex-col justify-center items-center md:flex-row">
          <span className="font-roboto text-[12px] text-gray-400 font-light md:pr-1">
            © 2024 Krypto, Inc. All rights reserved.
          </span>
          <span className="font-roboto text-[12px] text-gray-400 font-light">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/daniel-montilla/"
              target="_blank"
              className="hover:underline font-semibold"
            >
              Daniel Montilla
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

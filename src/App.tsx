import { Navbar } from "./components/Navbar";
import computerImg from "./assets/computer.svg";
import notificationsImg from "./assets/notifications.svg";
import mobileImg from "./assets/mobile.svg";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import FeaturedOn from "./components/FeaturedOn";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
          {/* 1st section - Mobile */}
          <div className="flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col justify-center items-center my-7">
              <h1 className="font-outfit text-6xl font-semibold md:text-8xl md:font-bold text-white">
                Discover
              </h1>
              <h1 className="font-outfit text-6xl font-semibold md:text-8xl md:font-bold text-white leading-none">
                And Collet
              </h1>
              <h1 className="font-outfit text-6xl font-semibold md:text-8xl md:font-bold text-white">
                Rare NTFs
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-roboto text-md text-white font-light leading-none">
                The most secure marketplace for buying
              </span>
              <span className="font-roboto text-md text-white font-light leading-0">
                and selling unique crypto assets.
              </span>
            </div>
            <img
              src={computerImg}
              alt="computerpng"
              className="h-[360px] w-[350px]"
            />
            <div className="flex flex-row justify-evenly w-full mb-16">
              <PrimaryButton title="buy nfts" />
              <SecondaryButton title="sell nfts" />
            </div>
          </div>
          {/* 1st section - Web */}
          <div className="hidden md:flex flex-row items-center justify-center">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col items-start my-7">
                <h1 className="font-outfit text-6xl font-semibold md:text-7xl lg:text-7xl xl:text-8xl md:font-bold text-white">
                  Discover
                </h1>
                <h1 className="font-outfit text-6xl font-semibold md:text-7xl lg:text-7xl xl:text-8xl md:font-bold text-white leading-none">
                  And Collet
                </h1>
                <h1 className="font-outfit text-6xl font-semibold md:text-7xl lg:text-7xl xl:text-8xl md:font-bold text-white">
                  Rare NTFs
                </h1>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-roboto text-md text-white font-light leading-none">
                  The most secure marketplace for buying
                </span>
                <span className="font-roboto text-md text-white font-light leading-0">
                  and selling unique crypto assets.
                </span>
              </div>

              <div className="flex flex-row justify-start items-center my-10">
                <PrimaryButton title="buy nfts" />
                <SecondaryButton title="sell nfts" />
              </div>
            </div>
            <img
              src={computerImg}
              alt="computerpng"
              className="h-[360px] w-[350px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px]"
            />
          </div>

          {/* Featured On */}
          <FeaturedOn />

          {/* 2nd section - Mobile */}
          <div className="flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col justify-center items-center my-7">
              <h4 className="font-outfit font-light text-white mb-3">
                ANALYTICS
              </h4>
              <h1 className="font-outfit text-4xl font-semibold text-white text-center">
                Built-In Analitycs
              </h1>
              <h1 className="font-outfit text-4xl font-semibold text-white leading-none text-center">
                To Track Your NFTs
              </h1>
            </div>
            <img
              src={notificationsImg}
              alt="computerpng"
              className="h-[360px] w-[350px]"
            />
            <div className="flex flex-col justify-center items-center mb-12">
              <span className="font-roboto text-md text-white font-light leading-none">
                Use our built-in analytics dashboard to pull
              </span>
              <span className="font-roboto text-md text-white font-light leading-0">
                valuable insights and monitor the value of your
              </span>
              <span className="font-roboto text-md text-white font-light leading-0">
                Krypto portfolio over time.
              </span>
            </div>
            <div className="flex flex-row justify-evenly w-full mb-16">
              <PrimaryButton title="view our pricing" />
            </div>
          </div>
          {/* 2st section - Web */}
          <div className="hidden md:flex flex-row items-center justify-center">
            <img
              src={notificationsImg}
              alt="computerpng"
              className="h-[360px] w-[350px] md:w-[450px] md:h-[400px] lg:w-[530px] lg:h-[530px]"
            />
            <div className="flex flex-col flex-1">
              <div className="flex flex-col items-start my-7">
                <h4 className="font-outfit font-light text-white mb-3">
                  ANALYTICS
                </h4>
                <h1 className="font-outfit text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold text-white">
                  Built-In Analytics
                </h1>
                <h1 className="font-outfit text-4xl font-semibold md:text-5xl lg:text-6xl md:font-bold text-white leading-none">
                  To Track Your NFTs
                </h1>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-roboto text-md text-white font-light leading-none">
                  Use our built-in analytics dashboard to pull
                </span>
                <span className="font-roboto text-md text-white font-light leading-0">
                  valuable insights and monitor the value of your
                </span>
                <span className="font-roboto text-md text-white font-light leading-0">
                  Krypto portfolio over time.
                </span>
              </div>

              <div className="flex flex-row justify-start items-center my-10">
                <PrimaryButton title="view our pricing" />
              </div>
            </div>
          </div>

          {/* 3rd section - Mobile */}
          <div className="flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col justify-center items-center my-7">
              <img
                src={mobileImg}
                alt="computerpng"
                className="h-[360px] w-[350px]"
              />
              <h4 className="font-outfit font-light text-white mb-3">
                GET OUR APP
              </h4>
              <h1 className="font-outfit text-4xl font-semibold text-white text-center">
                Browse NFTs From
              </h1>
              <h1 className="font-outfit text-4xl font-semibold text-white leading-none text-center">
                Your Smartphone
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center mb-12">
              <span className="font-roboto text-md text-white font-light leading-none">
                Our Krypto app is the easiest way to keep track
              </span>
              <span className="font-roboto text-md text-white font-light leading-0">
                of your assets when you're on the go.
              </span>
            </div>
            <div className="flex flex-row justify-evenly w-full mb-16">
              <PrimaryButton title="download on ios" />
            </div>
          </div>
          {/* 3rd section - Web */}
          <div className="hidden md:flex flex-row items-center justify-center py-10">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col items-start my-7">
                <h4 className="font-outfit font-light text-white mb-3">
                  GET OUR APP
                </h4>
                <h1 className="font-outfit md:text-5xl lg:text-6xl md:font-bold text-white">
                  Built-In Analytics
                </h1>
                <h1 className="font-outfit md:text-5xl lg:text-6xl md:font-bold text-white leading-none">
                  To Track Your NFTs
                </h1>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-roboto text-md text-white font-light leading-none">
                  Use our built-in analytics dashboard to pull
                </span>
                <span className="font-roboto text-md text-white font-light leading-0">
                  valuable insights and monitor the value of your
                </span>
                <span className="font-roboto text-md text-white font-light leading-0">
                  Krypto portfolio over time.
                </span>
              </div>

              <div className="flex flex-row justify-start items-center my-10">
                <PrimaryButton title="view our pricing" />
              </div>
            </div>
            <img
              src={mobileImg}
              alt="computerpng"
              className="h-[360px] w-[350px] md:w-[430px] md:h-[400px] lg:w-[530px] lg:h-[530px]"
            />
          </div>

          <Testimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

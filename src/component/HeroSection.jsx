import HeroPhoto from "../assets/Hero1.png";

function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-screen-xl container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-semibold sm:text-5xl text-3xl mb-4 font-lg text-gray-900">
            Empowering <span className="text-customRed">Journalists</span> for a
            Better Tomorrow
            <span className="hidden lg:inline-block"> </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Join us in our mission to uphold the highest standards of
            journalism. Together, we can promote integrity, excellence, and
            impactful storytelling.
          </p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg"
              id="HeroBtn"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroPhoto}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

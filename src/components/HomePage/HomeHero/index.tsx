import DownloadButton from '../../DownloadButton';

const MainHeadings = () => {
  return (
    <div className="px-[14px] md:px-[100px] flex flex-col items-center">
      <p className="text-[48px] md:text-[74px] text-center font-bold leading-tight">
        Instant, Feeless, Eco-Friendly Digital Payments
      </p>
      <p className="text-center md:w-[55%] text-[18px] md:text-[22px]">
        Experience the future of digital transactions with Atto –
        instant, feeless, and scalable, all while protecting the
        environment.
      </p>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="bg-[url('/static/img/home-hero-bg.png')] relative bg-cover bg-center h-fit min-h-[570px] md:min-h-[650px] w-full bg-blend-soft-light overflow-hidden">
      {/* <img
        src="/img/home-hero-bg1.png"
        alt="Home Hero"
        className="h-full w-full object-fill mix-blend-soft-light absolute z-10"
      /> */}
      <div className="absolute z-20 w-full h-full">
        <img
          src="/img/hero-main1.svg"
          alt="Home Hero"
          className="h-[100px] md:h-fit md:w-fit md:object-fill top-24 md:-mt-10 absolute -left-6 md:left-12"
        />
        <img
          src="/img/hero-main2.svg"
          alt="Home Hero"
          className="h-[65px] md:h-[160px] md:w-fit md:object-fill top-32 md:-mt-14 right-0 md:right-12 absolute"
        />
        <div className="w-full h-fit flex justify-center absolute md:top-44 bottom-24">
          <img
            src="/img/hero-mobile.png"
            alt="Home Hero"
            className="h-[220px] md:h-fit md:w-[500px] mr-20 scale-150"
          />
        </div>
      </div>
      <div className="absolute w-full h-full z-30">
        <DownloadButton />
      </div>
    </div>
  );
};

const HomeHero: React.FC = () => {
  return (
    <div className="relative">
      {/* <img
        src="/img/home-hero-bg1.png"
        alt="Home Hero"
        className="h-full w-full object-fill mix-blend-soft-light absolute z-10"
      /> */}
      <MainHeadings />
      <MainContent />
      <img
        src="/img/home-hero-bg1.png"
        alt="Home Hero"
        className="h-full w-full object-fill mix-blend-soft-light absolute z-20"
      />
    </div>
  );
};

export default HomeHero;

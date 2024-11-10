const DownloadButton = () => {
  return (
    <div className="relative mx-auto bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#373B3E] font-bold py-[14px] md:py-[24px] px-8 md:px-16 rounded-full w-fit cursor-pointer">
      <span className="pr-7 md:pr-3">Download the App</span>
      <div className="absolute right-2 md:right-4 top-[7px] md:top-[12px] rounded-full w-10 md:w-12 h-10 md:h-12 bg-[#FFF8C6] flex items-center justify-center">
        <img
          src="/img/icons/up-arrow.svg"
          alt="Download Icon"
          className="h-5 md:h-6 w-5 md:w-6"
        />
      </div>
    </div>
  );
};

export default DownloadButton;

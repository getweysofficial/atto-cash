const MainHeadings = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fit relative z-20">
      <img
        src="/img/icons/ato-icon-primary.svg"
        alt="Atto Community"
        className="object-cover mb-8"
      />
      <p className="text-[30px] md:text-[60px] text-center font-bold leading-tight w-full lg:w-[60%]">
        Be a Part of the
      </p>
      <img
        src="/img/atto-community.svg"
        alt="Atto Community"
        className="object-cover"
      />
      <p className="text-center text-[13px] md:text-[18px] leading-tight md:w-[45%]">
        Whether you’re a developer, a crypto enthusiast, or someone
        who just wants to learn, there are plenty of ways to get
        involved.
      </p>
    </div>
  );
};

const ReadMoreButton = () => {
  return (
    <div className="flex justify-center items-center gap-3 w-fit h-fit cursor-pointer">
      <span className="uppercase font-bold">Read More</span>
      <img
        src="/img/icons/right-arrow.svg"
        alt="Right Arrow"
        className="h-5 w-5"
      />
    </div>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="w-[56px] h-[56px] rounded-full bg-white flex justify-center items-center cursor-pointer">
      <img src={icon} alt="Icon 1" className="object-fill" />
    </div>
  );
};

const AttoCommunity: React.FC = () => {
  return (
    <div className="px-[14px] lg:px-[100px] mt-[100px] md:mt-[150px] relative">
      <MainHeadings />

      <div className="mt-10 flex flex-col md:flex-row gap-4 h-fit">
        {/* 1 */}
        <div className="md:w-[30%] h-fit min-h-[560px] rounded-[50px] bg-[#FFF8C6] overflow-hidden pt-[50px] flex flex-col justify-between">
          <div className="p-8 flex flex-col items-center gap-4">
            <span className="text-[35px] leading-tight font-semibold text-center">
              Contribute to{' '}
              <span className="text-[#DE8601]">Development</span>
            </span>
            <span className="text-[16px] text-[#757575] text-center md:text-[18px]">
              Help improve Atto by contributing code, reporting bugs,
              or suggesting features. You could earn tokens for that ;
            </span>
            <ReadMoreButton />
          </div>
          <div className="w-full h-[180px]">
            <img
              src="/img/contribute-to-development.svg"
              alt="Atto Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2 social*/}
        <div className="md:w-[40%] min-h-[560px] rounded-[50px] pt-[50px] bg-gradient-to-b from-[#FFE249] via-[#FFD11F] to-[#FF9C05]">
          <div className="p-8 flex flex-col items-center gap-4">
            <span className="text-[35px] leading-tight font-semibold text-center">
              Join the Discussion
            </span>
            <span className="text-[16px] text-[#757575] text-center md:text-[18px] md:w-[82%]">
              Connect with the Atto community through forums, social
              media, and more.
            </span>
            <div className="flex gap-3.5">
              <SocialIcon icon="/img/icons/reddit.svg" />
              <SocialIcon icon="/img/icons/twitter.svg" />
              <SocialIcon icon="/img/icons/discord.svg" />
              <SocialIcon icon="/img/icons/github.svg" />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="md:w-[30%] h-fit min-h-[560px] rounded-[50px] bg-[#FFF8C6] overflow-hidden pt-[50px] flex flex-col justify-between">
          <div className="p-8 flex flex-col items-center gap-4">
            <span className="text-[35px] leading-tight font-semibold text-center">
              Spread <br className="hidden md:block" />
              <span className="text-[#DE8601]">the Word</span>
            </span>
            <span className="text-[16px] text-[#757575] text-center md:text-[18px]">
              Tell others about Atto and the benefits of feeless,
              eco-friendly digital transactions.
            </span>
            <ReadMoreButton />
          </div>
          <div className="w-full h-[180px]">
            <img
              src="/img/spread-the-world.svg"
              alt="Atto Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <img
        src="/img/community-peoples-right.svg"
        alt="Atto Community"
        className="absolute top-0 right-3 md:right-6 lg:right-24 w-24 md:w-32 lg:w-fit"
      />
      <img
        src="/img/community-peoples-left.svg"
        alt="Atto Community"
        className="absolute top-0 left-3 md:left-6 lg:left-24 w-24 md:w-32 lg:w-fit"
      />
    </div>
  );
};

export default AttoCommunity;

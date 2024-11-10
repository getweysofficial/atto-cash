import DownloadButton from '../../DownloadButton';

const WhyAto: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-[14px] md:px-[100px] w-full">
      <p className="text-[#A2AAB0]">Why Ato</p>
      <p className="text-[35px] md:text-[74px] text-center font-bold leading-tight md:w-[80%]">
        Atto is designed to be fast, efficient, and eco-friendly.
        <br className="hidden md:flex" />
        <span className="text-[#FAB005]">
          {' '}
          Here’s what makes it unique.
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
        <div className="w-full rounded-[30px] md:rounded-[50px] bg-white overflow-hidden">
          <div className="md:h-[350px] cursor-pointer">
            <img
              src="/img/whyato-bg1.png"
              alt="Why Ato 1"
              className="w-full"
            />
          </div>
          <div className="px-[16px] md:px-[37px] py-4 flex md:grid grid-cols-2 gap-2">
            <p className="text-[14px] md:text-[35px] leading-tight font-bold">
              Near-Instant Transactions
            </p>
            <p className="text-[14px] md:text-[18px]">
              <span className="text-[#FAB005]">
                Say goodbye to delays. <br />
              </span>{' '}
              Atto enables fast and secure transfers within seconds.
            </p>
          </div>
        </div>

        <div className="w-full rounded-[30px] md:rounded-[50px] bg-white overflow-hidden">
          <div className="md:h-[350px] cursor-pointer">
            <img
              src="/img/whyato-bg2.png"
              alt="Why Ato 1"
              className="w-full"
            />
          </div>
          <div className="px-[16px] md:px-[37px] py-4 flex md:grid grid-cols-2 gap-2 items-center">
            <p className="text-[18px] md:text-[35px] leading-tight font-bold">
              Feeless Transfers
            </p>
            <p className="text-[14px] md:text-[18px]">
              Send and receive funds without ever worrying about fees.
            </p>
          </div>
        </div>
      </div>

      <Features />

      <div className="my-[46px]">
        <DownloadButton />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 mt-10 w-full gap-[32px]">
      {/* 1 */}
      <div className="rounded-[50px] bg-[#FFF8C6] overflow-hidden">
        <div className="w-full h-[170px]">
          <img
            src="/img/whyato-feature1.png"
            alt="Why Ato Icon 1"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="px-[16px] md:px-[37px] pb-[16px] md:pb-[30px] flex flex-col gap-2 items-center">
          <span className="w-fit text-[28px] md:text-[35px] leading-tight font-bold md:text-left text-center">
            Eco-Friendly by Design
          </span>
          <span className="text-[#757575] w-full text-[14px] text-center md:text-left md:text-[18px]">
            Powered by a network that runs on less than 100 solar
            panels, Atto uses no mining and keeps its environmental
            impact minimal.
          </span>
        </div>
      </div>

      {/* 2 */}
      <div className="rounded-[50px] bg-[#FFF8C6] overflow-hidden">
        <div className="w-full h-[170px]">
          <img
            src="/img/whyato-feature2.png"
            alt="Why Ato Icon 1"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="px-[16px] md:px-[37px] pb-[16px] md:pb-[30px] flex flex-col gap-2 items-center">
          <span className="w-fit text-[28px] md:text-[35px] leading-tight font-bold md:text-left text-center">
            Scalable Architecture
          </span>
          <span className="text-[#757575] w-full text-[14px] text-center md:text-left md:text-[18px]">
            Handle a high volume of transactions simultaneously with
            Atto's decentralized infrastructure, keeping the network
            efficient at any scale.
          </span>
        </div>
      </div>

      {/* 3 */}
      <div className="rounded-[50px] bg-[#FFF8C6] overflow-hidden">
        <div className="w-full h-[170px]">
          <img
            src="/img/whyato-feature3.png"
            alt="Why Ato Icon 1"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="px-[16px] md:px-[37px] pb-[16px] md:pb-[30px] flex flex-col gap-2 items-center">
          <span className="w-fit text-[28px] md:text-[35px] leading-tight font-bold md:text-left text-center">
            Collaborative Consensus
          </span>
          <span className="text-[#757575] w-full text-[14px] text-center md:text-left md:text-[18px]">
            Atto's Open Representative Voting (ORV) system lets nodes
            collaborate to secure the network without energy-intensive
            mining.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyAto;

const Card = ({ title, description, icon }) => {
  return (
    <div className="flex justify-between bg-[#FFF8C6] pl-[50px] py-[35px] pr-[22px] rounded-[40px]">
      <div className="flex flex-col gap-4 w-[80%]">
        <div className="flex gap-3">
          <img src={icon} alt="Icon 1" className="object-fill" />
          <span className="text-[25px] font-bold">{title}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[16px] text-[#757575]">
            {description}
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#FFD700] to-[#FFA500] w-[18px] h-full rounded-full" />
    </div>
  );
};

const CryptoCurrencyInfo: React.FC = () => {
  return (
    <div className="px-[14px] lg:px-[100px] flex gap-14 mt-[120px] lg:mt-[200px] lg:flex-row flex-col">
      <div className="text-[30px]  leading-tight text-center lg:text-left lg:hidden block">
        <span>A Cryptocurrency That’s Good for the Planet</span>
        <img
          src="/img/icons/crypto-world.svg"
          alt="Line"
          className="ml-2 h-7"
        />
      </div>
      <div className="min-h-[530px] lg:min-h-[670px] w-full lg:w-[70%] bg-[url('/img/cryptoinfo-bg.png')] bg-cover bg-center rounded-[30px] lg:rounded-[50px] flex items-end p-4">
        <div className="flex justify-between h-fit gap-6">
          <div className="w-[85%] min-h-[100px] rounded-[40px] bg-[rgba(0, 0, 0, 0.2)] backdrop-blur-lg p-7 text-white flex items-center justify-center">
            Atto doesn’t just prioritize fast transactions—it’s also
            built to minimize environmental impact.
          </div>
          <div className="w-fit p-8 h-full rounded-[40px] bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
            <img src="/img/icons/ato-icon.svg" alt="Atto Logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[35px] lg:text-[60px] leading-tight text-center lg:text-left hidden lg:block">
          <span>A Cryptocurrency That’s Good for the Planet</span>
          <img
            src="/img/icons/crypto-world.svg"
            alt="Line"
            className="ml-2"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Card
            title="No Mining"
            description="Unlike traditional blockchains, Atto doesn’t rely on energy-intensive mining. Its decentralized consensus mechanism keeps the network secure without harming the planet. "
            icon="/img/icons/mining.svg"
          />
          <Card
            title="Minimal Energy Use"
            description="The entire Atto network can run on less than 100 solar panels, making it one of the most eco-conscious cryptocurrencies in the world."
            icon="/img/icons/energy.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrencyInfo;

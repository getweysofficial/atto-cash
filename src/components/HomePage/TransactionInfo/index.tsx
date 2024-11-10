const IconWthNumber = ({
  icon,
  number,
}: {
  icon: string;
  number: string;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[67px] h-[67px] bg-[#FFF8C6] rounded-full flex p-1 justify-center items-center">
        <img src={icon} alt="Icon 1" className="object-fill" />
      </div>
      <span className="text-[25px] text-[#757575]">{number}</span>
    </div>
  );
};

const Steps = ({
  title,
  stripColor,
  desc,
  icon,
  number,
  last,
}: {
  title: string;
  icon: string;
  number: string;
  stripColor: string;
  desc: string;
  last?: boolean;
}) => {
  return (
    <div className="flex gap-10">
      <div className="block md:hidden h-full w-fit">
        <div
          className={`${
            last ? 'h-full' : 'h-[130%]'
          } w-[33px] rounded-full`}
          style={{
            background: stripColor,
          }}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 w-full">
        <IconWthNumber icon={icon} number={number} />
        <span className="text-[22px] md:text-[25px] text-[#373B3E]">
          {title}
        </span>
        <div className="hidden md:block w-full h-full">
          <div
            className={`${
              last ? 'w-full' : 'w-[120%]'
            } h-[40px] rounded-full`}
            style={{
              background: stripColor,
            }}
          />
        </div>
        <span className="text-[16px] text-[#757575] w-[78%]">
          {desc}
        </span>
      </div>
    </div>
  );
};

const TransactionInfo: React.FC = () => {
  return (
    <div className="mt-[80px] md:mt-[120px] px-[14px] md:px-[100px]">
      <div className="flex gap-4 flex-col md:flex-row items-center md:items-end md:justify-between justify-center">
        <span className="text-[35px] md:text-[60px] md:w-[65%] leading-tight text-center md:text-left">
          Effortless Digital Transactions for Everyone
        </span>
        <span className="md:w-[25%] text-center md:text-left">
          Whether you’re new to crypto or a seasoned pro,{' '}
          <span className="text-[#DE8601]">
            Atto makes it simple.
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-9 md:gap-0">
        <Steps
          icon="/img/icons/download.svg"
          number="01"
          title="Download the App"
          stripColor="#FFF8C6"
          desc="Get started by downloading the Atto Wallet app—your gateway to seamless, feeless transactions."
        />
        <Steps
          icon="/img/icons/wallet.svg"
          number="02"
          title="Create Your Wallet"
          stripColor="#FFE249"
          desc="In just a few taps, set up your Atto wallet to start receiving and sending funds instantly."
        />
        <Steps
          icon="/img/icons/token.svg"
          number="03"
          title="Claim Free Tokens"
          stripColor="#FAB005"
          desc="Use Atto’s faucet to receive a small amount of tokens for free. No investment needed to start experiencing Atto."
        />
        <Steps
          icon="/img/icons/earn.svg"
          number="04"
          title="Contribute & Earn"
          stripColor="#B85F05"
          last={true}
          desc="Earn tokens by contributing to the Atto ecosystem—whether it’s by reporting bugs, writing guides, or improving the platform."
        />
      </div>
    </div>
  );
};

export default TransactionInfo;

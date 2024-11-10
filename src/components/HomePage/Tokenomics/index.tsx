import clsx from 'clsx';
import styles from './style.module.css';

const MainHeadings = () => {
  return (
    <div className="flex flex-col items-center h-fit relative z-20">
      <p className="text-[30px] md:text-[60px] text-center font-bold leading-tight w-full lg:w-[60%]">
        Fair and Transparent Token Distribution
      </p>
      <p className="text-center text-[13px] md:text-[18px] leading-tight md:w-[45%]">
        Atto’s decentralized distribution model ensures everyone has a
        chance to participate.
      </p>
    </div>
  );
};

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4 flex-col items-center bg-white rounded-[30px] md:rounded-[50px] p-10">
      <div className="flex gap-2">
        <img
          src={'/img/icons/icons-siders-left.svg'}
          alt="Icon"
          className="object-fill w-[32%]"
        />
        <div className="w-[61px] h-[61px] rounded-full bg-[#FFEF88] flex justify-center items-center">
          <img src={icon} alt="Icon 1" className="object-fill" />
        </div>
        <img
          src={'/img/icons/icons-siders-right.svg'}
          alt="Icon"
          className="object-fill w-[32%]"
        />
      </div>
      <div className="flex flex-col gap-2 items-center w-[90%] md:w-[60%]">
        <span className="text-[25px] font-bold text-center">
          {title}
        </span>
        <span className="text-[16px] text-[#757575] text-center">
          {description}
        </span>
      </div>
    </div>
  );
};

const Rewards = ({
  icon,
  title,
  description,
  quantity,
  last,
}: {
  icon: string;
  title: string;
  description: string;
  quantity: string;
  last?: boolean;
}) => {
  const formattedQuantity = new Intl.NumberFormat('en-US').format(
    Number(quantity)
  );

  return (
    <div
      className={clsx(
        'flex gap-8 items-center justify-between py-4',
        !last && styles.gradient_border
      )}
    >
      <div className="flex gap-3 md:gap-12 w-[35%] items-center">
        <div className="w-[40px] h-[40px] bg-[#FFF8C6] rounded-full flex p-1 justify-center items-center">
          <img src={icon} alt="Icon 1" className="object-fill" />
        </div>
        <span className="text-[14px] md:text-[30px]">{title}</span>
      </div>
      {/* description */}
      <span className="text-[14px] md:text-[18px] text-[#757575] w-[35%] text-left">
        {description}
      </span>
      <div className="flex gap-3 items-center justify-center">
        <span className="leading-tight text-[20px] md:text-[35px] text-[#B85F05]">
          {formattedQuantity}
        </span>
        <img
          src="/img/icons/reward-icon.svg"
          alt="Atto"
          className="w-[32px] h-[32px] hidden md:block"
        />
      </div>
    </div>
  );
};

const Tokenomics: React.FC = () => {
  return (
    <div className="w-full px-[14px] lg:px-[100px] mt-[120px] h-full bg-gradient-to-t from-[#FFD374] to-[#FFEF88] relative overflow-hidden">
      <img
        className="absolute top-0 mix-blend-color-dodge opacity-65 z-0"
        src="/img/tokenomic-bg.svg"
      />
      <div className="w-full h-fit">
        <span
          className={clsx(
            'w-full text-[58px] md:text-[120px] flex justify-center lg:text-[150px] xl:text-[200px] opacity-25 leading-tight',
            styles.gradient_text
          )}
        >
          Tokenomics
        </span>
        <MainHeadings />
        <div className="w-full relative h-full z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Faucet Distribution"
              description="New users can get started with free tokens via Atto’s faucet system. Simply create an Atto wallet and request tokens—no investment required!"
              icon="/img/icons/faucet-distribution.svg"
            />
            <Card
              title="Contribution Rewards"
              description="Community members who contribute to Atto's development can earn tokens. Contributions like software development, bug reporting, or writing tutorials."
              icon="/img/icons/contribution-rewards.svg"
            />
          </div>
          <div className="w-full absolute h-full bg-transparent top-0 flex justify-center items-center">
            <img
              src="/img/icons/tokenomic-box.svg"
              alt="Tokenomics"
              className="h-36 w-36 md:w-60 md:h-60 object-fill"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-2 bg-gradient-to-r from-[#FFE249] via-[#FFE249] to-[#fcdc3d] w-fit rounded-full justify-center items-center px-5 py-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <span className="text-[#373B3E">REWARDS TIERS</span>
          </div>
        </div>

        {/* rewards */}
        <div className="flex flex-col my-14">
          <Rewards
            icon="/img/icons/critical.svg"
            title="Critical Vulnerability"
            description="Reward for identifying major security risks."
            quantity="1500000"
          />
          <Rewards
            icon="/img/icons/epic.svg"
            title="Epic Projects"
            description="Earn tokens for groundbreaking project contributions."
            quantity="1500000"
          />
          <Rewards
            icon="/img/icons/major.svg"
            title="Major Contributions"
            description="Significant contributions rewarded generously."
            quantity="4000000"
          />
          <Rewards
            icon="/img/icons/minor.svg"
            title="Minor Contributions"
            description="Tokens for smaller but valuable inputs."
            quantity="4000000"
          />
          <Rewards
            icon="/img/icons/tweaks.svg"
            title="Tweaks & Optimizations"
            description="Rewards for improving and fine-tuning the platform."
            quantity="4000000"
            last={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

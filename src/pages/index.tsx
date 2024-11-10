import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import AttoCommunity from '../components/HomePage/AttoCommunity';
import Blog from '../components/HomePage/Blog';
import CryptoCurrencyInfo from '../components/HomePage/CryptocurrencyInfo';
import FAQSection from '../components/HomePage/FAQSection';
import HomeHero from '../components/HomePage/HomeHero';
import Tokenomics from '../components/HomePage/Tokenomics';
import TransactionInfo from '../components/HomePage/TransactionInfo';
import WhyAto from '../components/HomePage/WhyAto';
import Footer from '../theme/Footer';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="relative">
        <HomeHero />
        <div className="absolute top-[80%]  w-full bg-[#FFFCEB] z-10 rounded-t-[60px] md:rounded-t-[150px] pt-[300px]">
          <WhyAto />
          <TransactionInfo />
          <CryptoCurrencyInfo />
          <Tokenomics />
          <AttoCommunity />
          <Blog />
          <FAQSection />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}

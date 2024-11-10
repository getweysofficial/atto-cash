const MainHeadings = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[35px] md:text-[60px] font-bold leading-tight md:p-2 md:text-left text-center">
        Ready to Experience Atto?
      </span>
      <span className="text-[14px] md:text-[18px] md:text-left text-center">
        Instant, feeless, eco-friendly transactions are just a tap
        away.
      </span>
    </div>
  );
};

const DownloadTheApp = () => {
  return (
    <div className="w-full md:w-[45%] border-solid border-t-0 border-r-0 border-l-0 pb-[24px] cursor-pointer">
      <div className="w-full flex justify-between uppercase text-[20px] md:text-[30px] items-center">
        <span>Download the App</span>
        <img
          src="/img/icons/link-icon.svg"
          alt="App Store"
          className=""
        />
      </div>
    </div>
  );
};

const CustomFooter: React.FC = () => {
  const Links = [
    {
      title: 'Company',
      links: ['About Us', 'Pricing', 'Jobs', 'Blog'],
    },
    {
      title: 'Product',
      links: [
        'Sales Software',
        'Marketplace',
        'Terms and Conditions',
        'Privacy Policy',
      ],
    },
    {
      title: 'Help Center',
      links: ['Community', 'Knowledge Base', 'Academy', 'Support'],
    },
  ];

  const socialIcons = [
    { src: '/img/icons/twitter-old.svg', alt: 'Twitter', link: '#' },
    { src: '/img/icons/facebook.svg', alt: 'Facebook', link: '#' },
    { src: '/img/icons/pinterest.svg', alt: 'Pinterest', link: '#' },
    { src: '/img/icons/instagram.svg', alt: 'Instagram', link: '#' },
    { src: '/img/icons/youtube.svg', alt: 'YouTube', link: '#' },
  ];

  return (
    <div className="px-[14px] md:px-[100px] mt-[100px] md:mt-[150px] bg-[url('/static/img/footer-bg.png')] relative bg-cover bg-center h-fit min-h-[570px] md:min-h-[650px] w-full bg-blend-soft-light overflow-hidden rounded-t-[60px] md:rounded-t-[150px]">
      <img
        src="/img/icons/footer-icons.svg"
        alt="Icons"
        className="absolute right-2 w-[45%] lg:w-[550px]"
      />
      <img
        src="/img/home-hero-bg1.png"
        alt="Home Hero"
        className="h-full w-full object-fill mix-blend-soft-light absolute z-10"
      />
      <div className="mt-[70px] md:mt-[100px] flex flex-col md:flex-row items-end h-fit justify-between gap-4">
        <div className="w-full md:w-[45%] h-fit">
          <MainHeadings />
        </div>
        <DownloadTheApp />
      </div>

      {/* Address and Links */}
      <div className="mt-[30px] md:mt-[140px] flex flex-col md:flex-row justify-between items-start">
        <div className="w-fit flex flex-col gap-6 md:w-[300px] items-center md:items-start">
          <span className="font-semibold text-center md:text-left">
            Address
          </span>
          <span className="text-center md:text-left">
            475 Cherry Dr, Troy, Michigan 48083 United States ( (248)
            823-3200 )
          </span>
        </div>

        {/* Links Section */}
        <div className="flex gap-5 md:gap-20 w-full md:w-auto justify-between mt-8 md:mt-0">
          {Links.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span className="font-medium text-[14px] md:text-[16px]">
                {section.title}
              </span>
              <div className="flex flex-col gap-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-[14px] md:text-[16px] text-[#656B72] hover:no-underline hover:text-[#373B3E] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex justify-between flex-col-reverse md:flex-row items-center py-[38px] mt-[36px] border-[#373B3E] border-solid border-t-[0.5px] border-b-0 border-r-0 border-l-0 gap-5">
        <div className="text-center text-sm">
          All rights reserved. Atto © 2024
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center gap-8">
          {socialIcons.map((icon, index) => (
            <a
              href={icon.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-5 h-5 hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;

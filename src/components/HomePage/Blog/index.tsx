const MainHeadings = () => {
  return (
    <div className="px-[14px] md:px-[100px] flex flex-col items-center">
      <p className="text-[35px] md:text-[60px] text-center font-bold leading-tight">
        Blog
      </p>
      <p className="text-center md:w-[65%] text-[16px] md:text-[18px]">
        We have successfully worked on millions of projects from
        well-known companies or startups, we have produced portfolio
        that you can see below.
      </p>
    </div>
  );
};

const BlogCard = ({
  date,
  title,
  description,
  imageUrl,
  epic,
}: {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  epic?: boolean;
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-end p-6 text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-[80%]">
        <p className="text-sm md:text-base mb-1">{date}</p>
        <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
        <p className="text-sm md:text-base mt-1 opacity-80">
          {description}
        </p>
      </div>
      {epic && (
        <div className="w-[63px] h-[63px] rounded-full bg-gradient-to-r from-[#FFE249] to-[#FF9C05] flex justify-center items-center absolute bottom-6 right-6">
          <img
            src="/img/icons/epic.svg"
            alt="epic"
            className="w-5 h-5"
          />
        </div>
      )}
    </div>
  );
};

const Blog: React.FC = () => {
  const blogPosts = [
    {
      date: 'October 14th, 2024',
      title:
        'Rerum sint consectetur qui enim quia dolorum eius officia ea illum sit.',
      description:
        'Rerum et omnis perferendis nihil sit veritatis doloribus explicabo Dolore...',
      imageUrl: '/img/blog1.png',
      epic: true,
    },
    {
      date: 'October 14th, 2024',
      title:
        'Rerum sint consectetur qui enim quia dolorum eius officia ea illum sit.',
      description:
        'Rerum et omnis perferendis nihil sit veritatis doloribus explicabo Dolore...',
      imageUrl: '/img/blog2.png',
    },
    {
      date: 'October 14th, 2024',
      title:
        'Rerum sint consectetur qui enim quia dolorum eius officia ea illum sit.',
      description:
        'Rerum et omnis perferendis nihil sit veritatis doloribus explicabo Dolore...',
      imageUrl: '/img/blog3.png',
    },
    {
      date: 'October 14th, 2024',
      title:
        'Rerum sint consectetur qui enim quia dolorum eius officia ea illum sit.',
      description:
        'Rerum et omnis perferendis nihil sit veritatis doloribus explicabo Dolore...',
      imageUrl: '/img/blog4.png',
    },
    {
      date: 'October 14th, 2024',
      title:
        'Rerum sint consectetur qui enim quia dolorum eius officia ea illum sit.',
      description:
        'Rerum et omnis perferendis nihil sit veritatis doloribus explicabo Dolore...',
      imageUrl: '/img/blog5.png',
    },
  ];
  return (
    <div className="px-[14px] lg:px-[100px] mt-[100px] md:mt-[150px]">
      <MainHeadings />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px]">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={
              index === 0
                ? 'lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-1 col-span-1 row-span-1'
                : index === 1
                ? 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-1'
                : 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-2 col-span-1 row-span-1'
            }
          >
            <BlogCard
              date={post.date}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              epic={post.epic}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

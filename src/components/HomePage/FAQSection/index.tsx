import { useState } from 'react';

const MainHeadings = () => {
  return (
    <div className="flex flex-col">
      <p className="text-[35px] md:text-[60px] font-bold leading-tight relative p-2 md:text-left text-center">
        Frequently Asked Questions
        <img
          src="/img/icons/faq-icon.svg"
          alt="FAQ Icon"
          className="absolute -top-4 right-48 md:right-32"
        />
      </p>
      <p className="text-[16px] md:text-[18px] md:text-left text-center">
        Have another question? Please contact our team!
      </p>
    </div>
  );
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`mb-4 rounded-[24px] border flex justify-center flex-col p-[14px] md:p-[24px] ${
        isOpen
          ? 'bg-yellow-100 border-yellow-200'
          : 'bg-white border-[#8F9292] border-[1px] border-solid'
      } cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span
          className={`font-medium text-[18px] ${
            isOpen ? 'text-gray-800' : 'text-[#0C1312]'
          }`}
        >
          {question}
        </span>
        <span
          className={`text-gray-500 ${
            isOpen ? 'rotate-180' : ''
          } transition-transform`}
        >
          <img
            src="/img/icons/arrow-down.svg"
            alt="Arrow Icon"
            className="h-4 w-4"
          />
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600 text-[16px]">{answer}</div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'How can I book a virtual appointment?',
      answer:
        'You can easily book a virtual appointment through our user-friendly website or mobile app, allowing you to select your preferred doctor.',
    },
    {
      question: 'What should I expect during my virtual visit?',
      answer:
        'During your virtual visit, you’ll be able to consult with a doctor, ask questions, and receive guidance just like an in-person visit.',
    },
    {
      question: 'How do I access my medical records?',
      answer:
        'Your medical records are securely stored in your account and can be accessed anytime through our website or mobile app.',
    },
    {
      question: 'What if I need to reschedule my appointment?',
      answer:
        'You can reschedule your appointment through the app or website by accessing your appointment details and selecting a new date.',
    },
    {
      question: 'Can I get prescriptions through virtual visits?',
      answer:
        'Yes, our doctors can provide prescriptions if deemed appropriate based on the virtual consultation.',
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="px-[14px] md:px-[100px] mt-[100px] md:mt-[150px] flex flex-col md:flex-row gap-8">
      <div className="md:w-[45%] w-full md:pr-20">
        <MainHeadings />
      </div>
      <div className="md:w-[55%] w-full space-y-4">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

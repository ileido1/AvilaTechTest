import { Acordeon } from "./Acordeon";

export function Questions() {
  const data = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "No.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "No.",
        },
        
    
    {
      question: "Can other info be added to an invoice?",
      answer: "No.",
    },
    {
      question: "How do I change my account email?",
      answer: "No.",
    },
    // Agrega más objetos al array según sea necesario
  ];
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  sm:mt-8">
      <div className="flex justify-center flex-col  text-center">
        <h1 className="text-[#101828] sm:leading-[90px] text-3xl mt-4 mb-3 sm:text-4xl font-semibold ">
          Frequently asked questions
        </h1>
        <p className="text-[#475467] text-lg sm:text-xl ">
          Everything you need to know about the product and billing.
        </p>
        <div className="mt-8  flex items-center flex-col justify-center mb-8">
          {data.map((item, index) => (
            <Acordeon
              key={index}
              question={item.question}
              answer={item.answer}
              firstquestion={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

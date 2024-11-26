export default function ClinicalTools() {
  const cards = [
    {
      img: "/images/doctor.png",
      alt: "",
      title: "Dosing guide",
      description: "Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).",
      link: "Learn more about application and dosing",
    },
    {
      img: "/images/needle.png",
      alt: "",
      title: "Patient injection made simple",
      description: "This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.",
      link: "Watch the video",
    },
  ];

  return (
    <section className=" bg-white mx-auto px-6 lg:px-32 py-12">
      <h2 className="text-mainblue text-3xl italic font-thin">Clinical tools - at a glance</h2>
      <div className="flex flex-col lg:flex-row gap-6 justify-evenly">
        {cards.map((card, index) => (
          <div key={index} className="border rounded shadow flex flex-col w-2/5 h-full">
            <img src={card.img} alt={card.alt} className="mb-4 w-full" />
            <div className="px-6 py-12">
              <h2 className="text-xl font-bold text-mainblue">{card.title}</h2>
              <p className="mt-2 text-gray-600">{card.description}</p>
              <a href="#" className="text-pink-500 mt-4 inline-block">
                {card.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

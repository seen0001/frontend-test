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
    <section className=" bg-white">
      <div className="container py-16 mx-auto">
        <h2 className="text-mainblue text-3xl italic font-thin mb-10">Clinical tools - at a glance</h2>
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          {cards.map((card, index) => (
            <div key={index} className="border rounded shadow flex flex-col lg:w-1/2">
              <img src={card.img} alt={card.alt} />
              <div className="px-12 py-12 bg-maingrey">
                <h3 className="text-3xl font-thin text-mainblue">{card.title}</h3>
                <p className="mt-4 text-black">{card.description}</p>
                <a href="#" className="text-mainpink mt-6 inline-block">
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

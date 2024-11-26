export default function CardSection() {
  const cards = [
    {
      img: "/images/9-10.png",
      alt: "",
      title: "Long term sustained improvement",
      description: "9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). ",
      link: "See efficacy and trial data",
    },
    {
      img: "/images/hand-heart.png",
      alt: "",
      title: "Improvements in the burden of disease",
      description: "Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).",
      link: "Learn more about quality of life improvements",
    },
    {
      img: "/images/hand-shield.png",
      alt: "",
      title: "Good safety profile",
      description: "",
      link: "See safety profile",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-6 px-6 py-12 bg-white">
      {cards.map((card, index) => (
        <div key={index} className="border p-6 rounded shadow flex flex-col items-center">
          <img src={card.img} alt={card.alt} className="mb-4 w-56" />
          <h2 className="text-xl font-bold text-mainblue">{card.title}</h2>
          <p className="mt-2 text-gray-600">{card.description}</p>
          <a href="#" className="text-pink-500 mt-4 inline-block">
            {card.link}
          </a>
        </div>
      ))}
    </section>
  );
}

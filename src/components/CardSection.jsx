export default function CardSection() {
  const cards = [
    {
      img: "/images/9-10.png",
      alt: "An icon showing a big number nine and a text underneath saying out of ten.",
      title: "Long term sustained improvement",
      description: "9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). ",
      link: "See efficacy and trial data",
    },
    {
      img: "/images/hand-heart.png",
      alt: "An icon showing a hand with a heart floating above the hand.",
      title: "Improvements in the burden of disease",
      description: "Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).",
      link: "Learn more about quality of life improvements",
    },
    {
      img: "/images/hand-shield.png",
      alt: "An icon showing a hand with a shield floating above the hand. Inside the shield is a check mark.",
      title: "Good safety profile",
      description: "",
      link: "See safety profile",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="grid lg:grid-cols-3 gap-12 mx-auto container">
        {cards.map((card, index) => (
          <div key={index} className="grid grid-rows-[auto_auto_1fr_auto] items-start text-center p-6">
            <img src={card.img} alt={card.alt} className="mb-4 w-40 h-40 mx-auto" />
            <h2 className="text-xl text-mainblue mb-2">{card.title}</h2>
            <p className="mt-2 text-black">{card.description}</p>
            <a href="#" className="text-mainpink mt-4">
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

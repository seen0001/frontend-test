export default function VideosSection() {
  const cards = [
    {
      video: "",
      title: "Video title",
      description: "Short description of the conctents or subject of the video. You can upload a screen from the video as thumbnail image",
    },
    {
      video: "",
      title: "Video title",
      description: "Short description of the conctents or subject of the video. You can upload a screen from the video as thumbnail image",
    },
    {
      video: "",
      title: "Video title",
      description: "Short description of the conctents or subject of the video. You can upload a screen from the video as thumbnail image",
    },
    {
      video: "",
      title: "Video title",
      description: "Short description of the conctents or subject of the video. You can upload a screen from the video as thumbnail image",
    },
  ];

  return (
    <section className=" bg-backgroundgrey px-6 py-12">
      <h2 className="text-mainblue text-3xl italic font-thin mb-2">KOL Videos - get expert insights here</h2>
      <p className="text-black mb-16">See what Key opinion leaders have to say about their experiences with Adtralza®</p>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-6 place-items-center w-full h-full">
        {cards.map((card, index) => (
          <div key={index} className="border rounded shadow flex flex-row w-full h-full">
            <video src={card.video} className="w-full" controls aria-label={`Video about ${card.title}`}>
              Your browser does not support the video tag.
            </video>
            <div className="px-6">
              <h2 className="text-xl font-bold text-mainblue">{card.title}</h2>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

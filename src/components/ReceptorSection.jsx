export default function ReceptorSection() {
  return (
    <section className="bg-backgroundgrey">
      <div className="container mx-auto lg:flex gap-6 py-16 items-center">
        <div className="lg:w-1/2 lg:order-2 mb-6 lg:mb-0">
          <img src="/images/receptors.png" alt="A close up picture of receptors of different colors." className="rounded" />
        </div>
        <div className="lg:w-1/2 italic text-black text-lg font-thin">
          <h2 className="text-3xl text-mainblue font-thin">Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h2>
          <p className="mt-4">By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2). Adtralza® selectively modulates the dysregulated immune system by(1): </p>
          <li className="list-none mt-6">
            <ul>— Reducing markers of skin inflammation</ul>
            <ul>— Improving markers of skin barrier integrity</ul>
            <ul>— Reducing epidermal thickness</ul>
          </li>
          <a className="text-xl rounded-full bg-mainpink px-8 py-3 italic text-white font-thin inline-block mt-8" href="">
            Watch the video
          </a>
          <p className="text-sm mt-4">Duration: 2:43</p>
        </div>
      </div>
    </section>
  );
}

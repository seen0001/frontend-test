export default function ReceptorSection() {
  return (
    <section className="bg-backgroundgrey lg:flex items-center px-6 py-12">
      <div className="lg:w-1/2 px-6 italic text-gray-500">
        <h1 className="text-3xl text-mainblue font-thin">Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h1>
        <div className="mt-6 text-lg font-thin mb-14">
          <p>By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2). Adtralza® selectively modulates the dysregulated immune system by(1): </p>
          <li className="list-none">
            <ul>— Reducing markers of skin inflammation</ul>
            <ul>— Improving markers of skin barrier integrity</ul>
            <ul>— Reducing epidermal thickness</ul>
          </li>
        </div>
        <a className="rounded-full bg-mainpink px-6 py-3 italic text-white font-thin mb-10" href="">
          Watch the video
        </a>
        <p className="text-xs">Duration: 2:43</p>
      </div>
      <div className="lg:w-1/2 place-items-center">
        <img src="/images/receptors.png" alt="Example" className="rounded" />
      </div>
    </section>
  );
}

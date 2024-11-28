export default function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      <div className="container mx-auto">
        <div className="text-white max-w-lg py-24">
          <img className="mb-6" src="/images/adtralza.png" alt="Adtralza logo with a parentheses in which it says tralokinumab"></img>
          <h1 className="lg:text-3xl font-thin italic max-w-lg">Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</h1>
        </div>
      </div>
    </section>
  );
}

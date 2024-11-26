export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[400px] flex flex-col justify-center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')", // Udskift med din billedsti
      }}
      role="img"
      aria-label="Hero image showing Adtralza information"
    >
      {/* Indhold i hero */}
      <div className="text-white p-4 max-w-lg ml-40">
        <img className="mb-8" src="/images/adtralza.png"></img>
        <p className="text-3xl font-thin italic">Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</p>
      </div>
    </section>
  );
}

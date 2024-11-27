export default function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
      role="img"
      aria-label="Hero image with a blue gradient background showing the same woman in three different states. In the first state she is unhappy and has aggressive eczema. In the second state her eczema has reduced and she has become a bit happier. In the third and last state her eczema is gone and she is very happy."
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

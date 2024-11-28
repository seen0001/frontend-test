export default function TwoColumnSection() {
  return (
    <section className="bg-backgroundgrey">
      <div className="container mx-auto lg:flex py-16 items-center">
        <div className="lg:w-1/2 place-items-center">
          <img src="/images/adtralza-packshot.png" alt="A box of two Adtralza injections. The box is white and blue with a bunch of information on it." className="rounded" />
        </div>
        <div className="lg:w-1/2 px-6 italic">
          <h2 className="text-3xl text-mainblue font-thin">It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</h2>
          <p className="mt-6 text-black text-lg font-thin">Learn more about how Adtralza® works and how to use it in treatment.</p>
        </div>
      </div>
    </section>
  );
}

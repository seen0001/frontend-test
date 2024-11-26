export default function TwoColumnSection() {
  return (
    <section className="bg-maingrey flex items-center px-6 py-12">
      <div className="w-1/2 place-items-center">
        <img src="/images/adtralza-packshot.png" alt="Example" className="rounded" />
      </div>
      <div className="w-1/2 px-6 italic">
        <h1 className="text-3xl font-bold text-mainblue font-thin">It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</h1>
        <p className="mt-6 text-gray-500 text-lg font-thin">Learn more about how Adtralza® works and how to use it in treatment.</p>
      </div>
    </section>
  );
}
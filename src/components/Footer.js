export default function Footer() {
  return (
    <footer className="bg-mainblue text-white py-6">
      <div className="flex justify-between px-6">
        <img className="w-24" src="/images/leo-logo.png"></img>
        <div className="text-right font-thin italic">
          <p>© Copyright LEO Pharma 2020</p>
          <p>LEO and the LEO Lion Design are registered trademarks of LEO Pharma</p>
          <p>All rights reserved</p>
          <a href="#" className="underline">
            LEO Pharma corporate website
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        {["Contact", "Imprint", "Conditions", "Terms of use", "Privacy", "Cookie content"].map((link) => (
          <a key={link} href="#" className="mx-2 text-blue-300">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-mainblue text-white py-6 text-sm">
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
      <div className="flex gap-4 justify-center mt-4 text-blue-300">
        <a href="#">Contact</a>
        <p>|</p>
        <a href="#">Imprint</a>
        <p>|</p>
        <a href="#">Conditions</a>
        <p>|</p>
        <a href="#">Terms of use</a>
        <p>|</p>
        <a href="#">Privacy</a>
        <p>|</p>
        <a href="#">Cookie content</a>
      </div>
    </footer>
  );
}

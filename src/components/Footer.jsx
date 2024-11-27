export default function Footer() {
  return (
    <footer className="bg-mainblue text-white py-6 text-sm">
      <div className="container mx-auto">
        <div className="flex justify-between mt-12">
          <img className="w-24 h-auto object-contain" src="/images/leo-logo.png" alt="LEO Pharma logo consisting of a white lion illustration and the name LEO underneath the lion in capital letters."></img>
          <div className="max-w-64 text-right font-thin italic">
            <div className="mb-24">
              <p>© Copyright LEO Pharma 2020</p>
              <p>LEO and the LEO Lion Design are registered trademarks of LEO Pharma</p>
              <p>All rights reserved</p>
            </div>
            <div>
              <a href="#" className="underline">
                LEO Pharma corporate website
              </a>
            </div>
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
      </div>
    </footer>
  );
}

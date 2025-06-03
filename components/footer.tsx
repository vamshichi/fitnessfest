import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Logo + Description */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            Eventum<span className="text-pink-500">.</span>
          </h2>
          <p className="text-sm mb-5 text-gray-300">
            Cursus facilisi facilis omnis dis minima tenetur a deleniti penatibus
            necessitatibus. Incidunt laboriosam harum ipsum init unde.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700">
              <FaTwitter />
            </a>
            <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700">
              <FaInstagram />
            </a>
            <a href="#" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Event Details</a></li>
            <li><a href="#">News & Articles</a></li>
            <li><a href="#">Credits</a></li>
            <li><a href="#">Legal Notice</a></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">OTHER PAGES</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Parent Community</a></li>
            <li><a href="#">Organiser</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">JOIN OUR NEWSLETTER</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe our newsletter to get latest news and update from us.
          </p>
          <input
            type="email"
            placeholder="Your Email.."
            className="w-full rounded-full px-4 py-3 mb-3 text-gray-900"
          />
          <button className="w-full bg-pink-600 hover:bg-pink-700 rounded-full px-4 py-3 font-semibold text-white">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto gap-3">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white">TERMS & CONDITION</a>
          <a href="#" className="hover:text-white">SUPPORT</a>
        </div>
        <div>
          © 2022 <span className="font-semibold">Eventum</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16 ">
      <div className="container mx-auto px-6 py-10 md:py-16 md:px-0 w-full md:w-[90%] lg:w-[80%] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-[#FF6600] mb-4">About FoodFast</h3>
            <p className="text-sm leading-relaxed">
              FoodFast is your go-to platform for quick food delivery, groceries, and dining out options.
              We connect you with the best restaurants and stores in your city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#FF6600] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FF6600] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/restaurant" className="hover:text-[#FF6600] transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/mart" className="hover:text-[#FF6600] transition-colors">
                  FoodFast Mart
                </Link>
              </li>
              <li>
                <Link to="/dineout" className="hover:text-[#FF6600] transition-colors">
                  Dine Out
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-[#FF6600] mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF6600] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6600] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6600] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6600] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-[#FF6600] mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl text-[#FF6600]">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-600"
              >
                <span className="bi bi-facebook"></span>
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-orange-600"
              >
                <span className="bi bi-twitter"></span>
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-600"
              >
                <span className="bi bi-instagram"></span>
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-600"
              >
                <span className="bi bi-linkedin"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} FoodFast. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

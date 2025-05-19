import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">RealTokens</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Revolutionizing real estate investment through blockchain technology and tokenization.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  123 Blockchain Avenue, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                <span className="text-neutral-600 dark:text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                <span className="text-neutral-600 dark:text-neutral-400">info@realtokens.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-600 dark:text-neutral-400">© {currentYear} RealTokens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

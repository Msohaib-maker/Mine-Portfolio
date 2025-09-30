"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">Sohaib Amir</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Full-stack developer and Unity game developer passionate about
              creating innovative digital experiences and scalable applications.
            </p>
            <div className="flex space-x-5 mt-4">
              <a
                href="https://github.com/Msohaib-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Image
                  src="/icons/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-sohaib-8bba7a230/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://x.com/Sohaib844590610"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Image
                  src="/icons/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:afzalsohaib59@gmail.com"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  afzalsohaib59@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Available for remote work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sohaib Amir. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-3 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

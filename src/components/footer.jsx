import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left: Brand & Mission */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs mx-auto md:mx-0 mb-6 md:mb-0">
            <span className="text-2xl font-extrabold text-white mb-1 tracking-wide">
              intervue.io
            </span>
            <p className="text-gray-400 text-base mt-2">
              On a mission to change how the world interviews forever
            </p>
          </div>
          {/* Center: Columns */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="#">
                    Outsource tech interviews
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Practice mock interviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="#">
                    Product enterprises
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    IT Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    IT Staffing
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Startups
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Universities/Colleges
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="#">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Case Study
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Ebooks
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Whitepapers
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="#">
                    Why Intervue?
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Compare
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} intervue.io. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

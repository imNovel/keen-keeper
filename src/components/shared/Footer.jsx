import React from "react";
import footerLogo from "../../assets/logo-xl.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-center">
      <div className="text-white max-w-7xl mx-auto px-5 py-10 space-y-5">
        <div className="flex items-center justify-center mt-5">
          <img src={footerLogo} alt="KinKeeper" />
        </div>
        <p className="text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <h3>Social Links</h3>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <a>
              <img src={instagram} alt="Instagram" />
            </a>
            <a>
              <img src={twitter} alt="Twitter" />
            </a>
            <a>
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="text-gray-400 flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-5">
          <div>
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
          <div className="space-x-4">
            <a>Privacy Policy </a>
            <a>Terms of Service</a>
            <a> Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white py-8 ">
      <div className="container mx-auto px-4 text-center">
        {/* Name / Branding */}
        <h2 className="text-xl font-semibold">MD Abdullah Sheikh</h2>
        <p className="text-gray-400 text-sm">Frontend Developer | React Enthusiast</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/abdullahsheikhdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abdullah-sheikh-b9a5992b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Abdullahsk4220"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-400 transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} MD Abdullah Sheikh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-4 text-white bg-orange">
      <div className="container flex items-center justify-around mx-auto">
        <p className="text-gray-100">
          &copy; 2024 Yacine.L All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/L-yacine"
            target="_blank"
            className="z-10"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yacine-labdaoui"
            className="z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

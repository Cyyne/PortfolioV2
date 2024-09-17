import { Instagram, Linkedin } from "lucide-react";
import upwork from "../assets/icons/upwork.svg";
import upworklight from "../assets/icons/upworklight.svg";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
const ContactCard = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  return (
    <div className="w-1/2 max-w-lg px-20 py-12 rounded-lg bg-orange max-lg:w-full">
      <span className="my-4 text-5xl font-bold text-darkblue">
        {language === "DE"
          ? `لنتحدث حول مشروعك`
          : `Let's chat about your project`}
      </span>
      <p className="my-6 text-2xl text-white">
        {language === "DE"
          ? `يمكنكم ايضا الاتصال بي عبر احد الروابط في الاسفل`
          : `Feel free to reach out through one of these links.`}
      </p>

      <div className="flex my-16 space-x-8 ">
        <a href="https://www.upwork.com/freelancers/~01dce652b2363bd2c1">
          <img
            src={`${theme === "dark" ? upworklight : upwork}`}
            className="h-12 cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com/y_ciin3/">
          <Instagram className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/yacine-labdaoui/">
          <Linkedin className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

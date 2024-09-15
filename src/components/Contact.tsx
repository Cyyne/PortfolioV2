import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
//import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

import ContactCard from "./ContactCard.tsx";

const Contact: React.FC = () => {
  const [captchaQuestion, setCaptchaQuestion] = useState<string>("");
  const [captchaAnswer, setCaptchaAnswer] = useState<string>("");
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState<string>("");
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion(`What is ${num1} + ${num2}?`);
    setCaptchaAnswer((num1 + num2).toString());
  };

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<string | any>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    if (userCaptchaAnswer !== captchaAnswer) {
      setError("Incorrect CAPTCHA answer. Please try again.");
      generateCaptcha();
      setUserCaptchaAnswer("");
      return;
    }

    const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        "service_ibb06lm",
        "template_3uo7ssf",
        {
          from_name: name,
          to_name: "Yacine.dev",
          from_email: email,
          to_email: "labdaoui.yacine@gmail.com",
          message: message,
          subject: subject,
        },
        emailjsKey
      );

      if (language === "DE") {
        toast.success(toastMessages.successEmailSent.de);
      } else {
        toast.success(toastMessages.successEmailSent.en);
      }

      // Clear form fields and generate new CAPTCHA after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setUserCaptchaAnswer("");
      generateCaptcha();
    } catch (error) {
      console.error(error);
      if (language === "DE") {
        toast.error(toastMessages.failedEmailSent.de);
      } else {
        toast.error(toastMessages.failedEmailSent.en);
      }
      setError("An Error occurred, try again later");
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  // const wordWrap = (
  //   text: string,
  //   maxLineLength: number,
  //   indentation: string
  // ) => {
  //   const words = text.split(" ");
  //   let lines: string[] = [];
  //   let currentLine = "";

  //   words.forEach((word) => {
  //     if (currentLine.length + word.length <= maxLineLength) {
  //       currentLine += word + " ";
  //     } else {
  //       lines.push(currentLine.trim());
  //       currentLine = `${indentation}${word} `;
  //     }
  //   });

  //   if (currentLine) {
  //     lines.push(currentLine.trim());
  //   }

  //   return lines.join("\n");
  // };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  // const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    generateCaptcha();
    // const blinkInterval = setInterval(() => {
    //   setCursorBlink((prev) => !prev);
    // }, 400);

    // return () => {
    //   clearInterval(blinkInterval);
    // };
  }, []);

  //   const codeSnippet = `
  // import  { useState } from "react";

  // // 🌈 Spreading Stardust:
  // // Crafting Cosmic Email 🌌

  // const [sender, setSender] = "${name}${
  //     lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  //   }🚀";
  // const [recipient, setRecipient] = "${email}${
  //     lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
  //   }📧";
  // const [subject, setSubject] = \n"${subject}${
  //     lastUpdatedField === "subject" ? (cursorBlink ? "|" : " ") : ""
  //   }✨";
  // const [message, setMessage] =
  // \`Hello, intrepid traveler! 👋\n
  // Across the cosmos, a message for you:\n
  // "${wordWrap(message, 40, " ")}${
  //     lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  //   }"\n
  // Wishing you stardust dreams,\n
  // ${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
  // \``;

  //   const codeSnippet2 = `
  // // 🚀 Initiating Quantum Email Transmission 🪐
  // const launchEmail = async () => {
  //   try {
  //     const response = await fetch('https://alpaycelik.dev/send',{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //      sender,
  //      recipient,
  //      subject,
  //      message
  //     })
  //    });

  //    if (response.ok) {
  //    console.log('🌌 Transmission successful!');
  //    } else {
  //    console.error('🌠 Cosmic glitch encountered...');
  //    }
  //   } catch (error) {
  //   console.error('🌪 Quantum disturbance detected:', error);
  //   }
  // };
  // // 🚀 Ready for Liftoff? 🛸
  // launchEmail();`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 py-16 title-container max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "DE" ? contactData.title.de : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "DE"
                ? contactData.description.de
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row items-start justify-center px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          {/*<div className="w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
             <Highlight code={codeSnippet} language="tsx" theme={themes.vsDark}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-xl `} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight> 
            <img
              src={contactusimg}
              alt="Contact-us-image"
              className="object-cover w-full h-full"
            />
          </div>*/}
          <ContactCard />
          <form
            className="flex flex-col items-center justify-center w-1/2 gap-4 px-32 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={
                  language === "DE"
                    ? `${input.placeholder.de}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={
                  input.name === "name"
                    ? name
                    : input.name === "email"
                    ? email
                    : input.name === "subject"
                    ? subject
                    : message
                }
                required
                onFocus={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onChange={handleInputChange}
                className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={
                language === "DE"
                  ? `${contactData.textarea.placeholder.de}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              }`}
            />
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="captcha">{captchaQuestion}</label>
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={userCaptchaAnswer}
                onChange={(e) => setUserCaptchaAnswer(e.target.value)}
                required
                className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow"
                    : "bg-[--icewhite] dark-shadow"
                }`}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              value={
                language === "DE"
                  ? `${contactData.button.value.de}`
                  : `${contactData.button.value.en}`
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="block p-3 text-3xl w-max max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;

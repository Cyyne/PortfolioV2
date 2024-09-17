import openaiicon from "../../assets/icons/openai.svg";
import graphqlicon from "../../assets/icons/graphql.svg";
import postgresicon from "../../assets/icons/postgresql.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";

import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";

import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import summarizer from "../../assets/img/summarizer.webp";
import ydelivery from "../../assets/img/ydelivery.webp";
import fancydz from "../../assets/img/fancydz.webp";
import profilepicture from "../img/me2.webp";
import aiecommain from "../img/aicommain.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import algerieposteicon from "../../assets/icons/AlgeriePoste.svg";
import stripeicon from "../../assets/icons/Stripe.svg";
import paypalicon from "../../assets/icons/Paypal.svg";
import strapiicon from "../../assets/icons/strapi.svg";
import phpicon from "../../assets/icons/php.svg";
import { TbBrandUpwork } from "react-icons/tb";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
  title: {
    de: "ياسين لبداوي",
    en: "Hi, I'm Yacine",
  },
  subtitle: "Fullstack developer ",
  description: {
    de: " مبرمج ويب  مختص في بناء تطبيقات ويب تفاعلية وديناميكية وفعالة ذات تجربة مستخدم ممتازة.",
    en: "Web developer with a strong interest in building interactive, dynamic, and efficient web applications that provide excellent user experiences.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "معلومات الاتصال",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "المشاريع",
        en: "Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "FancyDz",
    description:
      "منصة للتجارة الإلكترونية متعددة المتاجر مع بنية تطبيقات مزدوجة تتميز بواجهة متجر ولوحة تحكم إدارية مخصصة يمكنها التعامل مع العديد من المتاجر بشكل منفصل.",
    description_EN:
      "A muti-store e-commerce platform with dual app architecture featuring a storefront and custom admin dashboard wich can handle multuple stores seperatly. ",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "TailwindCss", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "postgreSQL", icon: postgresicon },
      { name: "Eddahabia API", icon: algerieposteicon },

      { name: "Trello", icon: trelloicon },
    ],
    image: fancydz,
    deploymenturl: "https://fancydz.com/",
    githuburl: "https://github.com/L-Yacine/watchme-front",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Social Media Studio",
    description:
      "منصة إنشاء المحتوى المدعومة بالذكاء الاصطناعي تمكن المستخدمين من إنشاء محتوى تسويقي مخصص.",
    description_EN:
      "AI-Powered Content Generation Platform enabling users to generate tailored marketing content.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "OPENAI API", icon: openaiicon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "PostgreSQL", icon: postgresicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: aiecommain,
    deploymenturl: "https://ai-ecom-wine.vercel.app/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Ydelivery",
    description:
      " منصة مبسطة تمكن المسؤولين من إدارة بيانات المطاعم وقوائمها مع تزويد المستخدمين بتجربة طلب سريعة وسلسة.. ",
    description_EN:
      "A streamlined React.js based platform empowering admins to manage restaurant data and menus while providing users with a seamless ordering experience. HyGraph's CMS ensures efficient content management.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "graphQL", icon: graphqlicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: ydelivery,
    deploymenturl: "https://foodelivery-bice.vercel.app/",
    githuburl: "https://github.com/L-Yacine/FooDelivery",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Smart artical summarizer",
    description:
      "ملخص يستعمل الذكاء الاصطناعي من اجل تلخيص المقالات على الانترنت",
    description_EN:
      "An AI powered article summarizer for those long but have-to-read articles",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "OPENAI API", icon: openaiicon },
      { name: "Netlify", icon: netlifyicon },
    ],
    image: summarizer,
    deploymenturl: "https://yl-short-reads.netlify.app/",
    githuburl: "https://github.com/L-Yacine/shortreads",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: " Github المزيد من المشاريع على",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Web Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: phpicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Payment Integration",
    skills: [
      { title: "Paypal", hash: "#Paypal", icon: paypalicon, color: "#F24E1E" },
      {
        title: "Stripe",
        hash: "#Stripe",
        icon: stripeicon,
        color: "#FF61F6",
      },
      {
        title: "AlgeriePoste",
        hash: "#AlgeriePoste",
        icon: algerieposteicon,
        color: "#00C4CC",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Strapi headless cms",
        hash: "#Strapi",
        icon: strapiicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "الرئيسية", en: "Home", hash: "#home", icon: GoHome },
  { de: "المهارات", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "المشاريع", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "من نحن", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "الاتصال", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const sideBarRightMail = {
  link: "mailto:labdaoui.yacine@gmail.com",
  text: "E-MAIL",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/yacine-labdaoui/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/L-Yacine",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "https://www.upwork.com/freelancers/~01dce652b2363bd2c1",
    icon: TbBrandUpwork,
    altimgname: "Upwork",
  },
  {
    link: "mailto:labdaoui.yacine@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"هل لديك فكرة مشروع مثيرة؟ لدينا التكنولوجيا والفريق الموهوب من مطوري الواجهات الأمامية والخلفية والمتكاملة لتحقيق ذلك."',
    en: `"In short, my job is to translate your business needs to industry standard tech solutions."`,
    author: ".",
  },
  {
    de: '"انسَ الحلول الجاهزة التي تجعل برامجك تبدو وكأنها مقلدة. أنشئ تطبيقات أصلية وفريدة من نوعها باستخدام خدمات التطوير المخصصة لدينا اليوم."',
    en: `"Tired of those expensive one-size-fits-all solutions that barely work? Checkout some of our custom and cost-effective web-apps that we've built recently"`,
  },
] as const;

export const aboutMeData = {
  title: "حول",
  title_EN: "About me",
  description: "بعض المعلومات حولي",
  description_EN: "A few words about me",
  paragraphs_DE: [
    {
      title: "التعليم و اللغات",
      description:
        "متحصل على شهادة ماستر في نظم المعلومات المتقدمة، بالإضافة إلى شهادة تقني سامي في الشبكات وقواعد البيانات.  هذه الخلفية الأكاديمية تزودني بأساس متين في كل من هندسة البرمجيات وإدارة البيانات. بالإضافة إلى ذلك، أتقن اللغتين الإنجليزية  والعربية، مما يضمن التواصل الواضح والموجز في أي من اللغتين.",
      icon: hardwareicon,
    },
    {
      title: "النهج المتبع فما يخص لغات البرمجة و التكنولوجيات الحديثة",
      description:
        "لغات البرمجة والتقنيات الحديثة هي مجرد أدوات، ولهذا فإن وجود أساسيات هندسة برمجيات قوية يجعل من السهل جدًا اختيار تقنيات جديدة. عند اعتماد تقنيات جديدة، أركز على التعلم الخاص بالمشروع. من خلال التخطيط المسبق وإتقان ما يكفي لتلبية  المتطلبات التقنية، لا يؤدي هذا النهج إلى تسريع عملية التعلم فحسب، بل يضمن أيضًا تطبيقًا أكثر قوة و استقرار بعد تنصيبه على ارض الواقع.",
      icon: caricon,
    },
    {
      title: "الخبرة خارج مجال البرمجة",
      description:
        "بالإضافة إلى البرمجة، لدي خبرة في تدريس المواد الأساسية مثل مدخل الى قواعد البيانات  والبرمجة كائنية-المنحى والرياضيات. تساعد تجارب التدريس هذه في القدرة على تقسيم المفاهيم المعقدة إلى أجزاء يمكن التحكم فيها، مما يقوي التفكير التقني و القدرة على التواصل مع تعزيز الفهم للمبادئ التقنية الأساسية التي تعتمد عليها كل مشاريع البرمجة",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Education and Languages",
      description:
        "I hold a Master’s degree in Advanced Information Systems, along with a technician degree in Networks and Databases. My academic background equips me with a solid foundation in both software engineering and data management. In addition, I’m fluent in both English (IELTS C1) and Arabic, ensuring clear and concise communication in either language.",
      icon: hardwareicon,
    },
    {
      title: "My Approach to New Tech and Frameworks",
      description:
        "Since languages and frameworks are simply tools, having strong software engineering fundamentals makes it much easier to pick up new ones. When adopting new technologies, I focus on project-specific learning. By planning ahead and mastering just enough to meet each requirement, This approach not only accelerates the learning process but also ensures a more robust and targeted application of skills in real-world projects.",
      icon: caricon,
    },
    {
      title: " Experience Outside Software Development",
      description:
        "Beyond web development, I have experience teaching foundational subjects such as Databases 101, Object-Oriented Programming, and Mathematics. These teaching experiences have honed my ability to break down complex concepts into manageable pieces, making me a more thoughtful and communicative developer with a strong grasp of core technical principles.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "الاتصال",
    en: "Contact",
  },
  description: {
    de: "راسلنا الأن و سنرد عليك في اقرب وقت ممكن",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "الاسم",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "الرجاء ادخال الاسم",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "البريد الالكتروني",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "الزجاء ادخال البريد الالكتروني",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "موضوع المراسلة",
        en: " Subject",
      },
      type: "text",
      validation: {
        de: "الرجاء ادخال موضوع المراسلة",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "الرسالة",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "الرجاء ادخال رسالتكم",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "ابعث",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "AR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};

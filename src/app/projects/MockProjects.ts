export type Project = {
  id: string;
  logo: string;
  title: string;
  client: string;
  role: string;
  year: string;
  projectBackground: string;
  goals: string;
  challenge: string;
  impact: string;
  designProcess: string[];
  caseStudy: string[];
  simple?: string;
  conclusion: string;
  homeImage: string;
  extraCaseStudies: string[];
  keyFeatures?: [string, string, string][];
};

export const mockProjects: Project[] = [
  {
    id: "tifi",
    logo: "/assets/logos/tifi-logo-black.svg",
    title: "Empowering content creators with AI-driven solutions",
    client: "HNG TECH.",
    role: "Product Designer",
    year: "August 2024",
    projectBackground:
      "Content creators and businesses often struggle with managing, creating, and distributing digital content efficiently, leading to time-consuming workflows and inconsistent quality. TiFi was developed to address these challenges by streamlining content creation and management processes.",
    goals:
      "TiFi's goal is to revolutionize content creation by leveraging the power of AI and machine learning. It simplifies the entire process, allowing users to effortlessly transcribe, summarize, and generate high-quality content. By automating these tasks, TiFi empowers users to focus on creativity and productivity, transforming the way content creators and businesses manage their digital output.",
    challenge:
      "Content creators often feel bogged down by tasks like transcription and summarization, leaving little time for creativity. With so much to juggle, they need a faster, smarter way to streamline content creation. The real challenge is finding a solution that makes these processes easier, freeing them up to focus on creativity and innovation.",
    impact:
      "I led the redesign of the podcast summarizer and subscribe-to-plan flows for TiFi, with a focus on enhancing the overall user experience. My objective was to transform the initial design, ensuring consistency across components and pages while optimizing the usability of each flow.",
    designProcess: [
      "Ideation and Iteration",
      "When I joined the TiFi project, initially called AI-Convey, the foundation of the design system had already been established. I collaborated with a sub-team, including a Product Manager and developers across frontend, backend, and mobile. My first task was to redesign the pricing landing page and create a complete subscribe-to-plan flow.",
      "Following this, I was asked to revamp the podcast summarizer feature, utilizing the existing design system and introducing new elements when necessary. Throughout the ideation phase, ensuring the product met user needs while maintaining the original design aesthetics was crucial. I explored various inspirations to refine the design, focusing on presenting information clearly and enhancing the overall user experience.",
    ],
    caseStudy: [
      "/assets/projects/tifi/tifiCaseStudy1.svg",
      "/assets/projects/tifi/tifiCaseStudy2.svg",
    ],
    simple:
      "I approached this project with a straightforward, traditional design strategy, focusing on simplicity while adding a touch of fun. My goal was to avoid overwhelming users with unnecessary elements, ensuring they could easily accomplish tasks—such as summarizing a podcast—in the most user-friendly way possible.",
    conclusion:
      "Working on TiFi has been one of my most fulfilling projects to date. TiFi, designed to compete in the AI-assisted content creation sector, had an existing framework before I joined the team. My role focused on enhancing the overall user experience, ensuring a cohesive design, and improving the information architecture. Throughout this project, I gained invaluable experience collaborating with a large, dynamic team of creatives, adhering to tight deadlines, and participating in regular standups to deliver a live product. It was an enriching opportunity to help optimize content management for users.",
    homeImage: "/assets/projects/tifi/tifiImage.svg",
    extraCaseStudies: [
      "/assets/projects/tifi/tifiCaseStudy3.svg",
      "/assets/projects/tifi/tifiCaseStudy4.svg",
      "/assets/projects/tifi/tifiCaseStudy5.svg",
    ],
  },
  {
    id: "homeworkai",
    logo: "/assets/logos/homeworkai-logo-black.svg",
    title: "Enhancing Homework Assistance for Students, Parents, and Teachers",
    client: "HNG Tech.",
    role: "Product Designer",
    year: "August 2024",
    projectBackground:
      "AIforHomework is revolutionizing education by leveraging AI to reshape how students learn, how teachers assess, and how parents track progress. The platform provides personalized educational support, creating a tailored learning experience for each student. By enhancing the way learning and evaluation are conducted, AIforHomework is setting a new standard for educational excellence.",
    goals:
      "AIforHomework offers students tailored guidance that promotes independent learning, while providing teachers with automated grading tools and AI-generated assignments to enhance efficiency. Parents can track their child’s progress in real-time, staying informed without the complexity. This platform ensures a seamless, streamlined educational experience for everyone involved.",
    challenge:
      "As homework becomes more complex, parents struggle to provide support, and teachers face grading time constraints. Students often need extra help without losing independence. Existing tools lack a seamless solution to address these challenges for all groups, highlighting the need for a more integrated approach.",
    impact:
      "After joining the AIforHomework team, I was elected by my fellow designers to lead the design team. In this role, I managed task distribution, clarified design briefs from product managers and stakeholders, and regularly presented iteration updates to the team. I also led the UX research phase, ensuring a user-centered approach from the start of the design process.",
    designProcess: [
      "Product Research",
      "As design team lead, I onboarded the team, outlined deliverables, and conducted comprehensive product research, including user journey mapping, competitive analysis, and persona development to ensure a user-focused design approach.",
      "Brainstorming",
      "Building on the insights from our product research, I led the team through brainstorming sessions to explore various design approaches. We focused on three core user groups—Students, Parents, and Teachers—and I managed the distribution of designers, assigning each to work on specific product pages within these user sections.",
      "Ideation and Iteration",
      "When I joined the TiFi project, initially called AI-Convey, the foundation of the design system had already been established. I collaborated with a sub-team, including a Product Manager and developers across frontend, backend, and mobile. My first task was to redesign the pricing landing page and create a complete subscribe-to-plan flow.",
    ],
    caseStudy: ["/assets/projects/aiforhomework/designProcess.svg"],
    keyFeatures: [
      [
        "Landing page",
        "The AIforHomework landing page is designed for ease of use and accessibility. With clean visuals and clear navigation, it guides students, parents, and teachers to their respective sections. Large buttons and simple icons make it easy for anyone to get started. The layout balances simplicity with the sophistication of AI tools, ensuring first-time users understand the platform’s value quickly.",
        "/assets/projects/aiforhomework/keyFeatures.svg",
      ],
      [
        "Homework Helper",
        "The Student Dashboard on AIforHomework is designed to streamline homework assistance. Students can easily upload images or type in their questions, and the platform provides tailored support, offering either full solutions or step-by-step guidance. A built-in progress tracker helps students stay organized by displaying completed tasks and monitoring their academic journey. With its clean, distraction-free interface, the dashboard ensures students can focus on learning with ease.",
        "/assets/projects/aiforhomework/homeworkHelper.svg",
      ],
      [
        "Marker Helper",
        "The Parent Dashboard provides a personalized space for tracking each child’s academic progress in real-time. Parents can easily add multiple children, view performance summaries, and receive insights into homework grades and areas needing support. With user-friendly tools, the dashboard helps parents monitor progress and offer timely assistance without getting bogged down by complex subjects.",
        "/assets/projects/aiforhomework/markerHelper.svg",
      ],
      [
        "Parent Dashboard",
        "The Parent Dashboard provides a personalized space for tracking each child’s academic progress in real-time. Parents can easily add multiple children, view performance summaries, and receive insights into homework grades and areas needing support. With user-friendly tools, the dashboard helps parents monitor progress and offer timely assistance without getting bogged down by complex subjects.",
        "/assets/projects/aiforhomework/parentDashboard.svg",
      ],
    ],
    conclusion:
      "In my role as the design team lead for AIforHomework, I guided the team through the creation of an intuitive, user-friendly platform tailored to students, teachers, and parents. By focusing on accessibility and ease of use, we developed features that streamline homework support, grading, and progress tracking. This experience allowed me to lead a collaborative design process that resulted in a cohesive product aimed at enhancing the educational experience for all users.",
    homeImage: "/assets/projects/aiforhomework/homeImage.svg",
    extraCaseStudies: [
      "/assets/projects/tifiCaseStudy3.svg",
      "/assets/projects/tifiCaseStudy4.svg",
    ],
  },
  // {
  //   id: "letters",
  //   logo: "/assets/logos/letters-logo.svg",
  //   title: "Enhancing Homework Assistance for Students, Parents, and Teachers",
  //   client: "HNG Tech.",
  //   role: "Product Designer",
  //   year: "August 2024",
  //   projectBackground:
  //     "Content creators and businesses often struggle with managing, creating, and distributing digital content efficiently, leading to time-consuming workflows and inconsistent quality. TiFi was developed to address these challenges by streamlining content creation and management processes.",
  //   goals:
  //     "TiFi&apos;s goal is to revolutionize content creation by leveraging the power of AI and machine learning. It simplifies the entire process, allowing users to effortlessly transcribe, summarize, and generate high-quality content. By automating these tasks, TiFi empowers users to focus on creativity and productivity, transforming the way content creators and businesses manage their digital output.",
  //   challenge:
  //     "Content creators often feel bogged down by tasks like transcription and summarization, leaving little time for creativity. With so much to juggle, they need a faster, smarter way to streamline content creation. The real challenge is finding a solution that makes these processes easier, freeing them up to focus on creativity and innovation.",
  //   impact:
  //     "I led the redesign of the podcast summarizer and subscribe-to-plan flows for TiFi, with a focus on enhancing the overall user experience. My objective was to transform the initial design, ensuring consistency across components and pages while optimizing the usability of each flow.",
  //   designProcess: [
  //     "Ideation and Iteration",
  //     "When I joined the TiFi project, initially called AI-Convey, the foundation of the design system had already been established. I collaborated with a sub-team, including a Product Manager and developers across frontend, backend, and mobile. My first task was to redesign the pricing landing page and create a complete subscribe-to-plan flow.",
  //     "Following this, I was asked to revamp the podcast summarizer feature, utilizing the existing design system and introducing new elements when necessary. Throughout the ideation phase, ensuring the product met user needs while maintaining the original design aesthetics was crucial. I explored various inspirations to refine the design, focusing on presenting information clearly and enhancing the overall user experience.",
  //   ],
  //   caseStudy: [
  //     "/assets/projects/tifiCaseStudy1.svg",
  //     "/assets/projects/tifiCaseStudy2.svg",
  //   ],
  //   simple:
  //     "I approached this project with a straightforward, traditional design strategy, focusing on simplicity while adding a touch of fun. My goal was to avoid overwhelming users with unnecessary elements, ensuring they could easily accomplish tasks—such as summarizing a podcast—in the most user-friendly way possible.",
  //   conclusion:
  //     "Working on TiFi has been one of my most fulfilling projects to date. TiFi, designed to compete in the AI-assisted content creation sector, had an existing framework before I joined the team. My role focused on enhancing the overall user experience, ensuring a cohesive design, and improving the information architecture. Throughout this project, I gained invaluable experience collaborating with a large, dynamic team of creatives, adhering to tight deadlines, and participating in regular standups to deliver a live product. It was an enriching opportunity to help optimize content management for users.",
  //   tags: ["React", "Next.js", "TypeScript"],
  //   homeImage: "/assets/projects/aiforhomework/homeImage.svg",
  //   extraCaseStudies: [
  //     "/assets/projects/tifiCaseStudy3.svg",
  //     "/assets/projects/tifiCaseStudy4.svg",
  //   ],
  // },
  // {
  //   id: "hotgist",
  //   logo: "/assets/logos/hotgist-logo.svg",
  //   title: "Empowering content creators with AI-driven solutions",
  //   client: "HNG Tech.",
  //   role: "Product Designer",
  //   year: "August 2024",
  //   projectBackground:
  //     "Content creators and businesses often struggle with managing, creating, and distributing digital content efficiently, leading to time-consuming workflows and inconsistent quality. TiFi was developed to address these challenges by streamlining content creation and management processes.",
  //   goals:
  //     "TiFi&apos;s goal is to revolutionize content creation by leveraging the power of AI and machine learning. It simplifies the entire process, allowing users to effortlessly transcribe, summarize, and generate high-quality content. By automating these tasks, TiFi empowers users to focus on creativity and productivity, transforming the way content creators and businesses manage their digital output.",
  //   challenge:
  //     "Content creators often feel bogged down by tasks like transcription and summarization, leaving little time for creativity. With so much to juggle, they need a faster, smarter way to streamline content creation. The real challenge is finding a solution that makes these processes easier, freeing them up to focus on creativity and innovation.",
  //   impact:
  //     "I led the redesign of the podcast summarizer and subscribe-to-plan flows for TiFi, with a focus on enhancing the overall user experience. My objective was to transform the initial design, ensuring consistency across components and pages while optimizing the usability of each flow.",
  //   designProcess: [
  //     "Ideation and Iteration",
  //     "When I joined the TiFi project, initially called AI-Convey, the foundation of the design system had already been established. I collaborated with a sub-team, including a Product Manager and developers across frontend, backend, and mobile. My first task was to redesign the pricing landing page and create a complete subscribe-to-plan flow.",
  //     "Following this, I was asked to revamp the podcast summarizer feature, utilizing the existing design system and introducing new elements when necessary. Throughout the ideation phase, ensuring the product met user needs while maintaining the original design aesthetics was crucial. I explored various inspirations to refine the design, focusing on presenting information clearly and enhancing the overall user experience.",
  //   ],
  //   caseStudy: [
  //     "/assets/projects/tifiCaseStudy1.svg",
  //     "/assets/projects/tifiCaseStudy2.svg",
  //   ],
  //   simple:
  //     "I approached this project with a straightforward, traditional design strategy, focusing on simplicity while adding a touch of fun. My goal was to avoid overwhelming users with unnecessary elements, ensuring they could easily accomplish tasks—such as summarizing a podcast—in the most user-friendly way possible.",
  //   conclusion:
  //     "Working on TiFi has been one of my most fulfilling projects to date. TiFi, designed to compete in the AI-assisted content creation sector, had an existing framework before I joined the team. My role focused on enhancing the overall user experience, ensuring a cohesive design, and improving the information architecture. Throughout this project, I gained invaluable experience collaborating with a large, dynamic team of creatives, adhering to tight deadlines, and participating in regular standups to deliver a live product. It was an enriching opportunity to help optimize content management for users.",
  //   tags: ["React", "Next.js", "TypeScript"],
  //   homeImage: "/assets/logos/tifi-logo-black.svg",
  //   extraCaseStudies: [
  //     "/assets/projects/tifiCaseStudy3.svg",
  //     "/assets/projects/tifiCaseStudy4.svg",
  //   ],
  // },
  // {
  //   id: "historyofafrica",
  //   logo: "/assets/logos/historyofafrica-logo.svg",
  //   title: "Empowering content creators with AI-driven solutions",
  //   client: "HNG Tech.",
  //   role: "Product Designer",
  //   year: "August 2024",
  //   projectBackground:
  //     "Content creators and businesses often struggle with managing, creating, and distributing digital content efficiently, leading to time-consuming workflows and inconsistent quality. TiFi was developed to address these challenges by streamlining content creation and management processes.",
  //   goals:
  //     "TiFi&apos;s goal is to revolutionize content creation by leveraging the power of AI and machine learning. It simplifies the entire process, allowing users to effortlessly transcribe, summarize, and generate high-quality content. By automating these tasks, TiFi empowers users to focus on creativity and productivity, transforming the way content creators and businesses manage their digital output.",
  //   challenge:
  //     "Content creators often feel bogged down by tasks like transcription and summarization, leaving little time for creativity. With so much to juggle, they need a faster, smarter way to streamline content creation. The real challenge is finding a solution that makes these processes easier, freeing them up to focus on creativity and innovation.",
  //   impact:
  //     "I led the redesign of the podcast summarizer and subscribe-to-plan flows for TiFi, with a focus on enhancing the overall user experience. My objective was to transform the initial design, ensuring consistency across components and pages while optimizing the usability of each flow.",
  //   designProcess: [
  //     "Ideation and Iteration",
  //     "When I joined the TiFi project, initially called AI-Convey, the foundation of the design system had already been established. I collaborated with a sub-team, including a Product Manager and developers across frontend, backend, and mobile. My first task was to redesign the pricing landing page and create a complete subscribe-to-plan flow.",
  //     "Following this, I was asked to revamp the podcast summarizer feature, utilizing the existing design system and introducing new elements when necessary. Throughout the ideation phase, ensuring the product met user needs while maintaining the original design aesthetics was crucial. I explored various inspirations to refine the design, focusing on presenting information clearly and enhancing the overall user experience.",
  //   ],
  //   caseStudy: [
  //     "/assets/projects/tifiCaseStudy1.svg",
  //     "/assets/projects/tifiCaseStudy2.svg",
  //   ],
  //   simple:
  //     "I approached this project with a straightforward, traditional design strategy, focusing on simplicity while adding a touch of fun. My goal was to avoid overwhelming users with unnecessary elements, ensuring they could easily accomplish tasks—such as summarizing a podcast—in the most user-friendly way possible.",
  //   conclusion:
  //     "Working on TiFi has been one of my most fulfilling projects to date. TiFi, designed to compete in the AI-assisted content creation sector, had an existing framework before I joined the team. My role focused on enhancing the overall user experience, ensuring a cohesive design, and improving the information architecture. Throughout this project, I gained invaluable experience collaborating with a large, dynamic team of creatives, adhering to tight deadlines, and participating in regular standups to deliver a live product. It was an enriching opportunity to help optimize content management for users.",
  //   tags: ["React", "Next.js", "TypeScript"],
  //   homeImage: "/assets/logos/tifi-logo-black.svg",
  //   extraCaseStudies: [
  //     "/assets/projects/tifiCaseStudy3.svg",
  //     "/assets/projects/tifiCaseStudy4.svg",
  //   ],
  // },
  // {
  //   id: "sparkpay",
  //   logo: "/assets/logos/sparkpay-logo.svg",
  //   title: "Empowering content creators with AI-driven solutions",
  //   client: "HNG Tech.",
  //   role: "Product Designer",
  //   year: "August 2024",
  //   projectBackground:
  //     "Content creators and businesses often struggle with managing, creating, and distributing digital content efficiently, leading to time-consuming workflows and inconsistent quality. TiFi was developed to address these challenges by streamlining content creation and management processes.",
  //   goals:
  //     "TiFi&apos;s goal is to revolutionize content creation by leveraging the power of AI and machine learning. It simplifies the entire process, allowing users to effortlessly transcribe, summarize, and generate high-quality content. By automating these tasks, TiFi empowers users to focus on creativity and productivity, transforming the way content creators and businesses manage their digital output.",
  //   challenge:
  //     "Content creators often feel bogged down by tasks like transcription and summarization, leaving little time for creativity. With so much to juggle, they need a faster, smarter way to streamline content creation. The real challenge is finding a solution that makes these processes easier, freeing them up to focus on creativity and innovation.",
  //   impact:
  //     "I led the redesign of the podcast summarizer and subscribe-to-plan flows for TiFi, with a focus on enhancing the overall user experience. My objective was to transform the initial design, ensuring consistency across components and pages while optimizing the usability of each flow.",
  //   designProcess: [
  //     "Ideation and Iteration",
  //     "When I joined the TiFi project, initially called AI-Convey, the foundation of the design system had already been established. I collaborated with a sub-team, including a Product Manager and developers across frontend, backend, and mobile. My first task was to redesign the pricing landing page and create a complete subscribe-to-plan flow.",
  //     "Following this, I was asked to revamp the podcast summarizer feature, utilizing the existing design system and introducing new elements when necessary. Throughout the ideation phase, ensuring the product met user needs while maintaining the original design aesthetics was crucial. I explored various inspirations to refine the design, focusing on presenting information clearly and enhancing the overall user experience.",
  //   ],
  //   caseStudy: [
  //     "/assets/projects/tifiCaseStudy1.svg",
  //     "/assets/projects/tifiCaseStudy2.svg",
  //   ],
  //   simple:
  //     "I approached this project with a straightforward, traditional design strategy, focusing on simplicity while adding a touch of fun. My goal was to avoid overwhelming users with unnecessary elements, ensuring they could easily accomplish tasks—such as summarizing a podcast—in the most user-friendly way possible.",
  //   conclusion:
  //     "Working on TiFi has been one of my most fulfilling projects to date. TiFi, designed to compete in the AI-assisted content creation sector, had an existing framework before I joined the team. My role focused on enhancing the overall user experience, ensuring a cohesive design, and improving the information architecture. Throughout this project, I gained invaluable experience collaborating with a large, dynamic team of creatives, adhering to tight deadlines, and participating in regular standups to deliver a live product. It was an enriching opportunity to help optimize content management for users.",
  //   tags: ["React", "Next.js", "TypeScript"],
  //   homeImage: "/assets/logos/tifi-logo-black.svg",
  //   extraCaseStudies: [
  //     "/assets/projects/tifiCaseStudy3.svg",
  //     "/assets/projects/tifiCaseStudy4.svg",
  //   ],
  // },
];

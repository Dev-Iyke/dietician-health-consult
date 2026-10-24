export const siteContent = {
  businessName: "Dietitian Health Consult",
  slogan: "Better health with foods you love",
  location: "Edmonton, Alberta, Canada",
  bookingUrl: "https://www.colib.io/Booking/dietitian-health-consult",
  contact: {
    email: "info@dietitianhealthconsult.com",
    phone: null as string | null,
    socials: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/dietitianhealthconsult?rpxt=eDRmNmdmNWw1cHBt",
      },
      { name: "TikTok", url: "https://tiktok.com/@dietitianhealthconsult" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/grace-kanu-459a46157?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
    ],
  },
  practitioner: {
    name: "Grace Kanu",
    displayName: "Grace",
    title: "Registered Dietitian",
    credentials: ["Certified Diabetes Educator", "Certified Craving Change expert"],
    experience: "Over 8 years of experience",
    bio: "Grace is a registered dietitian who works with people from diverse cultural backgrounds to make sense of nutrition and chronic health conditions. Her guidance is grounded in evidence and shaped around each person’s goals, routines, culture, and the foods they love.",
  },
  about: {
    eyebrow: "Meet Grace",
    title: "Guidance that fits your health, culture, and everyday life.",
    imageAlt: "Grace Kanu smiling among flowering shrubs in a garden",
    approachTitle: "What working together can look like",
  },
  hero: {
    eyebrow: "Nutrition care, shaped around you",
    title: "Better health,",
    titleAccent: "with the foods you love.",
    description:
      "Support for diabetes and other chronic health concerns, shaped around your culture, routines, preferences, and goals—not rigid food rules.",
    imageAlt: "Grace Kanu, Registered Dietitian, smiling in her office",
    primaryCta: "Book a free discovery call",
    secondaryCta: "Explore nutrition support",
  },
  conditions: [
    "Type 1, type 2 & gestational diabetes",
    "Weight management",
    "High blood pressure",
    "High cholesterol",
    "Fatty liver disease",
    "Chronic kidney disease",
    "PCOS",
    "Menopause & metabolic health",
  ],
  services: {
    eyebrow: "How I can help",
    title: "Nutrition support for the health concerns you’re navigating",
    description:
      "Get clear, practical nutrition guidance for chronic health concerns and changing needs—shaped around your goals, culture, routines, and the foods you enjoy.",
    areas: [
      {
        title: "Diabetes & blood sugar",
        description:
          "Personalized support for making sense of nutrition and blood sugar in everyday life.",
        concerns: ["Type 1 diabetes", "Type 2 diabetes", "Gestational diabetes"],
      },
      {
        title: "Heart health",
        description:
          "Evidence-informed guidance for nutrition habits related to heart health.",
        concerns: ["High blood pressure", "High cholesterol"],
      },
      {
        title: "Liver & kidney health",
        description:
          "Nutrition care tailored to your needs when navigating liver or kidney conditions.",
        concerns: ["Fatty liver disease", "Chronic kidney disease"],
      },
      {
        title: "Weight & women’s metabolic health",
        description:
          "Support that considers your health, preferences, and life stage—not one-size-fits-all rules.",
        concerns: ["Weight management", "PCOS", "Menopause & metabolic health"],
      },
    ],
  },
  approach: [
    {
      number: "01",
      title: "Understand your whole picture",
      description:
        "Start with a thoughtful conversation about your health, food preferences, culture, routines, and goals.",
    },
    {
      number: "02",
      title: "Get clear, practical guidance",
      description:
        "Make sense of nutrition information and turn it into recommendations that fit your real life.",
    },
    {
      number: "03",
      title: "Build habits at your pace",
      description:
        "Choose sustainable next steps and get support as you put them into practice.",
    },
  ],
  packageSection: {
    eyebrow: "Nutrition support programs",
    title: "Find the level of support that fits your goals.",
    description:
      "Choose from a focused two-week start to consistent support over two months. Each program combines personalized nutrition guidance with practical next steps.",
    bookingNote: "Booking and payment are completed through the Colib client portal.",
  },
  packages: [
    {
      name: "Starter",
      price: "$199",
      duration: "14 days",
      description: "A clear place to begin when you have a specific concern.",
      bestFor:
        "Someone looking for professional direction without committing to a longer program.",
      includes: [
        "60-minute comprehensive nutrition assessment",
        "Personalized nutrition recommendations",
        "Goal-setting session",
        "Practical action plan",
        "Nutrition resources",
        "14 days of secure messaging support",
      ],
    },
    {
      name: "Thrive",
      price: "$399",
      duration: "1 month",
      description: "Support to turn nutrition advice into everyday habits.",
      bestFor: "Many chronic health conditions and weight management goals.",
      featured: true,
      includes: [
        "60-minute comprehensive assessment",
        "2 × 45-minute follow-up sessions",
        "Personalized nutrition plan",
        "Goal setting and progress review",
        "1 month of secure messaging support",
        "Nutrition education tailored to your goals",
        "Practical meal ideas",
        "Accountability and troubleshooting",
      ],
    },
    {
      name: "Nourish",
      price: "$599",
      duration: "2 months",
      description: "Consistent support and accountability over time.",
      bestFor:
        "Clients who know they would benefit from ongoing support rather than a one-time appointment.",
      includes: [
        "60-minute comprehensive assessment",
        "3 × 45-minute follow-up sessions",
        "Personalized nutrition strategy",
        "2 months of secure messaging support",
        "Personalized meal ideas and menu guidance",
        "Nutrition education sessions",
        "Goal tracking and accountability check-ins",
        "Adjustments based on progress",
      ],
    },
  ],
  oneOffSection: {
    eyebrow: "One-time nutrition support",
    title: "Looking for one-time nutrition support?",
    description:
      "Choose a focused consultation or personalized 7-day meal plan for practical support without committing to a multi-week program.",
  },
  oneOffServices: [
    {
      name: "Initial nutrition consultation",
      duration: "60 minutes",
      price: "$170",
      description:
        "A comprehensive conversation about your nutrition needs, with personalized strategies and goals to guide your next steps.",
      note: "A standalone appointment; no follow-up sessions are included.",
    },
    {
      name: "Follow-up consultation",
      duration: "45 minutes",
      price: "$110",
      description:
        "A focused follow-up for people who have already completed an initial consultation with Grace.",
      note: "For returning clients after an initial session.",
    },
    {
      name: "Personalized 7-day meal plan",
      duration: "Documentation",
      price: "$120",
      description:
        "A personalized meal-plan option for people who want a plan without booking a consultation.",
      note: "Complete the required details through the Colib booking flow.",
    },
  ],
  quickCheckIn: {
    name: "Quick check-in",
    duration: "45 minutes",
    price: "$95",
    eligibility: "Available to previous clients only",
    description:
      "A lower-cost, 45-minute option for returning clients whose package has ended and who need brief follow-up support. This is not an initial appointment; it is reserved for people who have worked with Grace before.",
  },
  faqs: [
    {
      question: "What kinds of concerns can Grace help with?",
      answer:
        "Grace supports people navigating type 1, type 2, and gestational diabetes, weight management, high blood pressure, high cholesterol, fatty liver disease, chronic kidney disease, PCOS, and metabolic health during menopause.",
    },
    {
      question: "Do I need to choose a package?",
      answer:
        "No. You can choose a package for ongoing support, book a one-off consultation, or select a personalized 7-day meal plan through the booking portal.",
    },
    {
      question: "What is the difference between Thrive and Nourish?",
      answer:
        "Thrive is a one-month program with an assessment, two follow-up sessions, and one month of secure messaging. Nourish provides a longer two-month support period, three follow-up sessions, two months of messaging, goal tracking, and adjustments as you progress.",
    },
    {
      question: "Can I book a single appointment?",
      answer:
        "Yes. The booking portal offers an initial nutrition consultation, a follow-up consultation for people who have already had an initial session, and a personalized 7-day meal plan.",
    },
    {
      question: "What is a quick check-in?",
      answer:
        "It is a 45-minute, $95 appointment for returning clients who have worked with Grace before and need brief support after a package ends. It is intended for previous clients, not as a first appointment.",
    },
    {
      question: "Are appointments virtual or in person?",
      answer:
        "Appointments may be available virtually or in person, as needed. The Colib booking page shows the format available for the appointment you choose.",
    },
    {
      question: "How do I book?",
      answer:
        "Select any Book button to open the Colib booking page. You can choose a package or one-off service there and continue with booking and payment.",
    },
    {
      question: "Where should I share personal health information?",
      answer:
        "Please use the Colib booking and client portal for forms or health information. This website does not collect health information.",
    },
    {
      question: "How can I contact Grace?",
      answer:
        "Email info@dietitianhealthconsult.com or connect through the social links on this page. A business phone number will be added if Grace chooses to provide one.",
    },
  ],
} as const;

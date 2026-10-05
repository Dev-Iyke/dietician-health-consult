export const siteContent = {
  businessName: "Dietitian Health Consult",
  slogan: "Better health with foods you love",
  location: "Edmonton, Alberta, Canada",
  practitioner: {
    name: "Grace K.",
    title: "Registered Dietitian & Certified Diabetes Educator",
    experience: "Over 8 years of experience",
  },
  hero: {
    eyebrow: "Evidence-led nutrition care",
    title: "A healthier relationship with food starts here.",
    description:
      "Personalized nutrition guidance for chronic health conditions—rooted in evidence, culture, and the foods you genuinely enjoy.",
  },
  packages: [
    {
      name: "Starter",
      price: "$199",
      duration: "14 day program",
      description:
        "Professional direction for a specific concern, without committing to a longer program.",
      featured: false,
    },
    {
      name: "Thrive",
      price: "$259",
      duration: "1 month program",
      description:
        "A supportive plan for making sustainable progress with a chronic health condition.",
      featured: true,
    },
    {
      name: "Nourish",
      price: "$350",
      duration: "2 month program",
      description:
        "Consistent support and accountability for clients ready to build lasting habits.",
      featured: false,
    },
  ],
  appointments: [
    { name: "Discovery call", duration: "15 min", price: "Free" },
    { name: "Initial nutrition assessment", duration: "60 min", price: "$175" },
    { name: "Follow-up session", duration: "45 min", price: "$100" },
    { name: "Quick check-in", duration: "30 min", price: "$75" },
    { name: "Personalized 7-day menu", duration: "—", price: "$120" },
  ],
  conditions: [
    "Diabetes",
    "Weight management",
    "High blood pressure",
    "High cholesterol",
    "Fatty liver disease",
    "Chronic kidney disease",
    "PCOS and menopause",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Accounts", href: "#accounts" },
  { label: "Company", href: "#company" },
  { label: "Insight", href: "#insight" },
];

export const PARTNERS = [
  "loom",
  "HubSpot",
  "OpenAI",
  "Raycast",
  "zenefits",
];

export const FAQ_ITEMS = [
  {
    question: "How sending a bank transfer?",
    answer:
      "You can send a bank transfer from the app by entering the recipient details and amount, then confirming with your security method.",
  },
  {
    question: "What is the scheduled payments feature?",
    answer:
      "The scheduled payment features allows you to manage all of your subscriptions including payments at a specific date. This also includes details for every payment, which includes the amount, frequency, payment accounts.",
  },
  {
    question: "How can I reactivate a terminated card?",
    answer:
      "Contact support or use the card management section in your account to request reactivation of a terminated card.",
  },
  {
    question: "How about with a refund?",
    answer:
      "Refunds are typically credited back to your account within 5–10 business days, depending on the merchant.",
  },
  {
    question: "How can I add money to my account?",
    answer:
      "You can add money via bank transfer, linked card, or other supported methods in the Add money section of the app.",
  },
];

export const FOOTER_LINKS = {
  Account: ["Terms", "Agreements", "Login", "Profile", "Communities"],
  Help: ["Contact", "Customer care", "Help center", "Blog"],
  Finance: ["Cards", "Investments", "Saving", "Payment"],
  Company: ["About us", "Careers", "Newsroom", "Social"],
};

export const FEATURES_SPEND_ITEMS = [
  {
    title: "Transparency",
    description:
      "Build your trust by providing transparent and secure solutions to your company",
    icon: "network",
  },
  {
    title: "Creative expansion",
    description:
      "Build a robust and high performance platform for seamless and secure investments",
    icon: "circles",
  },
  {
    title: "Private Credit investments",
    description:
      "Receive access to unique and secure investments, at market rates and at competitive margins perfectly",
    icon: "arrow-circle",
    variant: "cream" as const,
  },
];

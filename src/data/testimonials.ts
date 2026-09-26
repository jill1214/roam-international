/**
 * Traveler testimonials, transcribed from ROAM's Facebook recommendations
 * (roam-reviews1–3.png in the ROAM Intl Drive folder). Wording lightly tidied only.
 */
export type Testimonial = {
  name: string;
  destination: string;
  date: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "GT Salazar",
    destination: "Da Nang, Vietnam",
    date: "July 2025",
    quote:
      "We joined their Da Nang trip and the experience was great! We stayed in 5-star hotels and the food was always good and overflowing. The tour leaders and guide were chill. We had so much fun. Thank you so much Raul, Miggie, Betsy and Mr. T. We highly recommend ROAM International Travel & Tours!",
  },
  {
    name: "Larry Salazar",
    destination: "Da Nang, Vietnam",
    date: "July 2025",
    quote:
      "Great travel experience in Da Nang, Vietnam. Great food, great hotels, great company, great tour operators. Thank you for the new friends we met. Thank you Raul, Miggie and Betsy. See you around.",
  },
  {
    name: "Clarissa Rabago Faytaren",
    destination: "South Korea",
    date: "February 2020",
    quote:
      "Thank you ROAM International Travel & Tours, c/o Miggie Macasinag, for a wonderful 5-day tour to South Korea!",
  },
];

import { site } from "@/data/site";

export type InquiryDetails = {
  name: string;
  mobile: string;
  email?: string;
  tour: string;
  travelDate?: string;
  travelers?: string;
  adults?: string;
  children?: string;
  departureCity?: string;
  message?: string;
  tourSpecific?: boolean;
};

export function waLink(text?: string): string {
  const base = "https://api.whatsapp.com/send?phone=639175581494";
  if (!text) return base;
  const encodedMessage = encodeURIComponent(text);
  return `${base}&text=${encodedMessage}`;
}

export function quickInquiryText(tourName?: string): string {
  return tourName
    ? `Hi ${site.name},

I'd like to inquire about the ${tourName} tour.

Additional Questions:
Please send me more information about this tour.`
    : `Hi ${site.name},

I'd like to inquire about a trip.

Message:
I'd like to ask about planning a trip.`;
}

function formatDate(value?: string): string {
  if (!value) return "";
  const d = new Date(`${value}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? value
    : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function buildInquiryMessage(d: InquiryDetails): string {
  const travelDate = formatDate(d.travelDate) || "Flexible";
  const travelers = d.travelers || "-";
  const departureCity = d.departureCity || "-";
  const message = d.message?.trim() || "-";

  if (d.tourSpecific) {
    return `Hi ${site.name},

I'd like to inquire about the ${d.tour} tour.

Name: ${d.name}
Preferred Travel Date: ${travelDate}
Number of Travelers: ${travelers}
Departure City: ${departureCity}

Additional Questions:
${message}`;
  }

  return `Hi ${site.name},

I'd like to inquire about a trip.

Name: ${d.name}
Destination: ${d.tour || "-"}
Preferred Travel Date: ${travelDate}
Number of Travelers: ${travelers}

Message:
${message}`;
}

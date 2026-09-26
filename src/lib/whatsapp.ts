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
};

export function waLink(text?: string): string {
  const base = `https://wa.me/${site.whatsapp.waNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function quickInquiryText(tourName?: string): string {
  return tourName
    ? `Hi ${site.name},\n\nI'd like to inquire about ${tourName}. Please send me more information about this tour.`
    : `Hi ${site.name},\n\nI'd like to ask about planning a trip.`;
}

function formatDate(value?: string): string {
  if (!value) return "";
  const d = new Date(`${value}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? value
    : d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function buildInquiryMessage(d: InquiryDetails): string {
  const isGeneral = !d.tour || d.tour === "Not sure yet";
  const lines = [
    `Hi ${site.name},`,
    "",
    isGeneral ? "I'd like to inquire about a trip." : `I'd like to inquire about ${d.tour}.`,
    "",
    `Name: ${d.name}`,
    `Preferred travel date: ${formatDate(d.travelDate) || "Flexible"}`,
    `Number of travelers: ${d.travelers || "-"}`,
    `Adults: ${d.adults || "-"}`,
    `Children: ${d.children || "0"}`,
    `Departure city: ${d.departureCity || "-"}`,
    `Mobile number: ${d.mobile}`,
  ];
  if (d.email) lines.push(`Email: ${d.email}`);
  lines.push(`Message: ${d.message?.trim() || "-"}`, "");
  lines.push(isGeneral ? "Please send me more information." : "Please send me more information about this tour.");
  return lines.join("\n");
}

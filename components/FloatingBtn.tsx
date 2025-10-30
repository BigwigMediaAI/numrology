import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+61457733000"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-24 right-6 w-12 h-12 bg-green-500 rounded-full items-center justify-center shadow-lg z-50"
    >
      <FaWhatsapp className="text-white" size={28} />
    </a>
  );
}

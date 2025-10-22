// import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/astrology-bg.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Head Numerologist",
    image:
      "https://mysta.peerduck.com/wp-content/uploads/2022/02/adult-man-woman-sit-together-after-practicing-asana-yoga-concept-energy-practices-mixed-media.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Numerology Expert",
    image: "https://mysta.peerduck.com/wp-content/uploads/2022/02/w-about.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mike Johnson",
    role: "Spiritual Advisor",
    image:
      "https://mysta.peerduck.com/wp-content/uploads/2022/02/Group-1035.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "John Doe",
    role: "Head Numerologist",
    image:
      "https://mysta.peerduck.com/wp-content/uploads/2022/02/adult-man-woman-sit-together-after-practicing-asana-yoga-concept-energy-practices-mixed-media.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Numerology Expert",
    image: "https://mysta.peerduck.com/wp-content/uploads/2022/02/w-about.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mike Johnson",
    role: "Spiritual Advisor",
    image:
      "https://mysta.peerduck.com/wp-content/uploads/2022/02/Group-1035.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // Add more members as needed
];

export default function ContactPage() {
  return (
    <div className="  min-h-screen  bg-[var(--background-color)]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}

        {/* Content */}
        <div className="relative text-[var(--primary-color)] z-20 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
            Meet our team
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Our team of expert numerologists and spiritual advisors bring years
            of experience and profound insights to guide you on your journey
            towards clarity, balance, and purpose.
          </p>
        </div>
      </div>

      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center rounded-xl p-6 shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition"
            >
              {/* Circular Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full mb-4"
              />

              {/* Name and Role */}
              <h3 className="text-xl font-semibold text-[var(--primary-color)]">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+919999000183"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+919999000172"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:block"></div>
      <Footer />
    </div>
  );
}

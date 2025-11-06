// import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/astrology-bg.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import amit from "../../../assets/Untitled design (26).png";
import kamal from "../../../assets/Untitled design (25).png";
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
    <div className=" min-h-screen bg-[var(--background-color)] py-20 md:py-0">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] lg:h-[35vh] 2xl:h-[45vh]   flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-35"
        />

        {/* Overlay */}

        {/* Content */}
        <div className="relative text-[var(--title)] montserrat leading-tight  tracking-widest z-20 mt-16">
          <h1 className="text-4xl md:text-5xl tracking-widest">
            Meet our team
          </h1>
          <p className="mt-4 font-thin text-[var(--text)] md:text-xl max-w-2xl mx-auto">
            Our team of expert numerologists and spiritual advisors bring years
            of experience and profound insights to guide you on your journey
            towards clarity, balance, and purpose.
          </p>
        </div>
      </div>

      <section className="w-11/12 md:w-5/6 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-[var(--primary-color)] hover:scale-105 transition-transform duration-300">
              <Image
                src={amit}
                alt="Founder of Destiny by Numbers"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Statement */}
          <div className="flex flex-col col-span-2 justify-center text-gray-800">
            <span className="block font-semibold text-[var(--title)] text-lg md:text-xl">
              Amit Paal Siingh (he/him)
            </span>
            <p className="text-lg md:text-xl leading-relaxed italic font-light text-[var(--text)] mt-6 text-justify">
              <strong>Amit</strong> is a certified numerologist with a rich and
              diverse background. Born in India and having lived in New Zealand
              and Australia since his early twenties, he brings a global
              perspective to his work. With a successful corporate career
              spanning many years, he combined his analytical skills and life
              experience with a deep passion for numerology, studying under an
              expert in the field. He{" "}
              <strong>specialises in name correction</strong>, helping clients
              realign their name vibrations to match their life path for greater
              clarity, success, and fulfillment. Today, he uses his knowledge to
              guide clients toward personal growth and to unlock the true
              potential hidden within their numbers.
            </p>
            <span className="block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Location – Face to Face Consultations - Melbourne
            </span>
            <span className="block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Online - Worldwide
            </span>
            <span className="block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Languages Spoken – English, Hindi & Punjabi
            </span>

            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/+61457733000" // 🔁 Replace with actual WhatsApp number (with country code)
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20.52 3.48A11.74 11.74 0 0012.04 0C5.55 0 .32 5.23.32 11.71a11.6 11.6 0 001.56 5.8L0 24l6.69-1.73a11.8 11.8 0 005.36 1.32h.01c6.49 0 11.72-5.23 11.72-11.72 0-3.13-1.22-6.06-3.26-8.1zM12.04 21.5c-1.73 0-3.42-.45-4.9-1.3l-.35-.2-3.97 1.02 1.06-3.87-.23-.4a9.5 9.5 0 01-1.44-5c0-5.26 4.28-9.54 9.54-9.54 2.55 0 4.95.99 6.76 2.79a9.45 9.45 0 012.78 6.75c0 5.26-4.28 9.55-9.54 9.55zm5.37-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.89 1.13-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.45-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.16.19-.27.29-.45.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.36 0 1.39 1.01 2.73 1.15 2.92.14.19 1.99 3.05 4.82 4.28.67.29 1.19.46 1.6.59.67.21 1.27.18 1.75.11.53-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.11-.26-.18-.55-.32z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Founder Image — Show First on Mobile */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-[var(--primary-color)] hover:scale-105 transition-transform duration-300">
              <Image
                src={kamal}
                alt="Founder of Destiny by Numbers"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Statement — Show Second on Mobile */}
          <div className="flex flex-col col-span-2 justify-center text-gray-800 order-2 md:order-1">
            <span className="block font-semibold text-[var(--title)] text-lg md:text-xl">
              Kamal Chauhan (she/her)
            </span>
            <p className="text-lg md:text-xl leading-relaxed italic font-light text-[var(--text)] mt-6 text-justify">
              <strong>Kamal</strong> brings a wealth of experience and insight
              to <strong>Destiny By Nummbers</strong>. After a distinguished
              career in a senior government position, she retired with a
              reputation for leadership, precision, and integrity. Guided by a
              lifelong curiosity about the deeper patterns in life, she embraced
              numerology and became a certified practitioner, combining
              professional expertise with spiritual insight. Today, Kamal helps
              clients uncover the hidden energies in their numbers, offering
              guidance that is both practical and transformative, empowering
              them to align with their true purpose.
            </p>
            <span className="block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Location – Face to Face Consultations - Melbourne and Delhi
            </span>
            <span className="block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Online - Worldwide
            </span>
            <span className="block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Languages Spoken – English, Hindi & Punjabi
            </span>
            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/+61490405145" // 🔁 Replace with actual WhatsApp number (with country code)
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20.52 3.48A11.74 11.74 0 0012.04 0C5.55 0 .32 5.23.32 11.71a11.6 11.6 0 001.56 5.8L0 24l6.69-1.73a11.8 11.8 0 005.36 1.32h.01c6.49 0 11.72-5.23 11.72-11.72 0-3.13-1.22-6.06-3.26-8.1zM12.04 21.5c-1.73 0-3.42-.45-4.9-1.3l-.35-.2-3.97 1.02 1.06-3.87-.23-.4a9.5 9.5 0 01-1.44-5c0-5.26 4.28-9.54 9.54-9.54 2.55 0 4.95.99 6.76 2.79a9.45 9.45 0 012.78 6.75c0 5.26-4.28 9.55-9.54 9.55zm5.37-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.89 1.13-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.45-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.16.19-.27.29-.45.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.36 0 1.39 1.01 2.73 1.15 2.92.14.19 1.99 3.05 4.82 4.28.67.29 1.19.46 1.6.59.67.21 1.27.18 1.75.11.53-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.11-.26-.18-.55-.32z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Mobile Call + WhatsApp bar */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[99999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+61457733000"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-[var(--whatsapp)] text-white text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+61457733000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

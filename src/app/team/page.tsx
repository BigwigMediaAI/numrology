// import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, Phone } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import banner from "../../../assets/astrology-bg.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import amit from "../../../assets/amit.png";
import kamal from "../../../assets/kamal (1).jpg";
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
      <div className="relative h-[40vh] lg:h-[30vh] 2xl:h-[50vh] flex flex-col justify-center items-center text-center px-6 tracking-widest">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-35"
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
            <span className=" block font-semibold text-[var(--primary-color)] text-lg md:text-xl">
              Amit Paal Siingh (he/him)
            </span>
            <p className="text-xl leading-relaxed italic font-light text-gray-800 mt-6 text-justify">
              <strong>Amit</strong> is a certified numerologist with a rich and
              diverse background. Born in India and having lived in New Zealand
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
            <span className=" block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Location – Face to Face Consultations - Melbourne
              <br />{" "}
            </span>
            <span className=" block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Online - Worldwide
            </span>
            <span className=" block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Languages Spoken – English, Hindi & Punjabi
            </span>
          </div>
        </div>
      </section>
      <section className="w-11/12 md:w-5/6 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Founder Statement */}
          <div className="flex flex-col col-span-2 justify-center text-gray-800">
            <span className=" block font-semibold text-[var(--primary-color)] text-lg md:text-xl">
              Kamal Chauhan (she/her)
            </span>
            <p className="text-xl leading-relaxed italic font-light text-gray-800 mt-6 text-justify">
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
            <span className=" block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Location – Face to Face Consultations - Melbourne and Delhi{" "}
              <br />{" "}
            </span>
            <span className=" block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Online - Worldwide
            </span>
            <span className=" block font-light italic text-[var(--primary-color)] text-lg md:text-xl mt-6">
              Languages Spoken – English, Hindi & Punjabi
            </span>
          </div>
          {/* Founder Image */}
          <div className="flex justify-center">
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
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
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

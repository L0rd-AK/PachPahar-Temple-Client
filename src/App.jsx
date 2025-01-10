import { SlCalender } from "react-icons/sl";
import { FaPray, FaOm } from "react-icons/fa";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF8F0]">
        <main>
          <section id="home" className="relative h-[600px]">
            <img
              src="https://i.ibb.co.com/kMB3F8F/image-2025-01-10-143605451.png"
              alt="Beautiful temple entrance with ornate decorations"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-[#FFF8F0]">
                <h1 className="text-4xl md:text-6xl font-crimson-text mb-4">
                  Welcome to
                </h1>
                <h1 className="text-4xl md:text-6xl font-crimson-text mb-4">
                পাঁচ পাহাড় কালী মন্দির
                </h1>
                <p className="text-xl md:text-2xl">
                শান্তি এবং আধ্যাত্মিকতার একটি স্থান
                </p>
              </div>
            </div>
          </section>

          <section id="about" className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-crimson-text text-[#8B4513] text-center mb-8">
              আমাদের মন্দির সম্পর্কে
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://i.ibb.co.com/PDb5N1j/temple1.jpg"
                    alt="Peaceful temple interior showing shrine area"
                    className="rounded-lg w-full h-auto object-cover object-center top-0"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#8B4513] text-5xl mb-3">আমাদের মন্দির পরিদর্শ করুন</h1>
                  <p className="text-lg font-crimson-text">
                  আমাদের মন্দির আধ্যাত্মিক বৃদ্ধি এবং অভ্যন্তরীণ শান্তির জন্য নিবেদিত একটি পবিত্র স্থান। প্রার্থনা এবং ধ্যানে আমাদের সাথে যোগ দেওয়ার জন্য আমরা সর্বস্তরের ভক্তদের স্বাগত জানাই।
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="bg-[#8B4513] text-[#FFF8F0] py-16 px-4"
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-crimson-text text-center mb-8">
              আমাদের সেবা
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col justify-center items-center p-6 bg-[#FFF8F0] text-[#8B4513] rounded-lg">
                  <FaPray className="text-3xl" />
                  <h3 className="text-xl font-crimson-text mb-2">
                  প্রতিদিনের প্রার্থনা
                  </h3>
                  <p className="text-black">সকাল ও সন্ধ্যার প্রার্থনা সেশন</p>
                </div>
                <div className="flex flex-col justify-center items-center p-6 bg-[#FFF8F0] text-[#8B4513] rounded-lg">
                  <FaOm className="text-3xl" />
                  <h3 className="text-xl font-crimson-text mb-2">ধ্যান</h3>
                  <p className="text-black">নির্দেশিত ধ্যান সেশন</p>
                </div>
                <div className="flex flex-col justify-center items-center p-6 bg-[#FFF8F0] text-[#8B4513] rounded-lg">
                  <SlCalender className="text-3xl mb-1" />
                  <h3 className="text-xl font-crimson-text mb-2">
                  কমিউনিটি সার্ভিস
                  </h3>
                  <p className="text-center text-black">ছোট শিশুদের জন্য গীতা-পাঠ শেখান<br/>
                  <span className="text-[#8B4513]">9:00 AM - 11:00 AM</span> </p>
                </div>
              </div>
            </div>
          </section>

          <section id="events" className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-crimson-text text-[#8B4513] text-center mb-8">
                Upcoming Events
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-crimson-text text-[#8B4513] mb-2">
                    Annual Festival
                  </h3>
                  <p className="mb-2">
                    <i className="far fa-calendar-alt mr-2"></i>October 31, 2025
                  </p>
                  <p>Join us for our biggest celebration of the year</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-crimson-text text-[#8B4513] mb-2">
                    Weekly Bhajan
                  </h3>
                  <p className="mb-2">
                    <i className="far fa-calendar-alt mr-2"></i>Every Sunday
                  </p>
                  <p>Experience divine music and chanting</p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="bg-[#8B4513] text-[#FFF8F0] py-16 px-4"
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-crimson-text text-center mb-8">
                Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-crimson-text mb-4">Visit Us</h3>
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt mr-2"></i>123 Temple
                    Street
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-phone mr-2"></i>(555) 123-4567
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-2"></i>
                    info@divinetemple.com
                  </p>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 rounded text-[#8B4513]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 rounded text-[#8B4513]"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-2 rounded text-[#8B4513]"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#FFD700] text-[#8B4513] px-6 py-2 rounded hover:bg-[#FFE55C]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

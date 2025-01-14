import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact=()=>{
    return(
        <>
            <section
            id="contact"
            className="bg-[#8B4513] text-[#FFF8F0] py-16 px-4"
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-crimson-text text-center mb-8">
              আমাদের সাথে যোগাযোগ করুন
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-crimson-text mb-4">আমাদের মন্দিরে আসুন</h3>
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt mr-2"></i>বিশ্রামপুর ঘোষপাড়া

                  </p>
                  <p className="mb-2 flex gap-1">
                    <div className=" flex gap-2 justify-center items-center">
                    <FaPhone/>+88 01788133927
                    </div>
                  </p>
                  <p className="flex gap-1">
                    <div className="flex gap-2 justify-center items-center">
                    <MdEmail />
                    amitkumar89155@gmail.com
                    </div>
                  </p>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="আপনার নাম"
                    className="w-full p-2 rounded text-[#8B4513]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="আপনার ইমেইল"
                    className="w-full p-2 rounded text-[#8B4513]"
                  />
                  <textarea
                    name="message"
                    placeholder="আপনার বার্তা"
                    rows="4"
                    className="w-full p-2 rounded text-[#8B4513]"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#FFD700] text-[#8B4513] px-6 py-2 rounded hover:bg-[#FFE55C]"
                  >
                    বার্তা পাঠান
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
    );
}
export default Contact;
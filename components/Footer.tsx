import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter 
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-[#2EC5A7] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">تواصل معنا</h2>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 mb-8">
          <div className="flex items-center gap-3 hover:text-gray-300 transition-colors duration-200">
            <span className="text-base mx-2">+91 123456789</span>
            <FaPhone className="text-2xl" />
          </div>
          <div className="flex items-center gap-3 hover:text-gray-300 transition-colors duration-200">
            <span className="text-base mx-2">info@greenify.com</span>
            <FaEnvelope className="text-2xl" />
          </div>
          <div className="flex items-center gap-3 hover:text-gray-300 transition-colors duration-200">
            <span className="text-base mx-2">102-Complex, Xyz Road</span>
            <FaMapMarkerAlt className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-center flex-row-reverse gap-6 mb-8">
          <FaFacebookF className="cursor-pointer text-2xl hover:text-gray-300 transition-transform duration-200 transform hover:scale-110" />
          <FaInstagram className="cursor-pointer text-2xl hover:text-gray-300 transition-transform duration-200 transform hover:scale-110" />
          <FaLinkedinIn className="cursor-pointer text-2xl hover:text-gray-300 transition-transform duration-200 transform hover:scale-110" />
          <FaTwitter className="cursor-pointer text-2xl hover:text-gray-300 transition-transform duration-200 transform hover:scale-110" />
        </div>
        <hr className="border-gray-400/30 mb-8" />
        <div className="flex flex-col  md:flex-row-reverse items-center justify-between text-sm text-gray-300">
          <div className="flex gap-6 mb-4 md:mb-0">
          <span className="text-center rtl">Greenify © جميع الحقوق محفوظة 2023</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-200">شروط الخدمة</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-200">سياسة الخصوصية</span>
          </div>
          <div className="flex gap-4 text-2xl">
            <img src="/Frame 405.png" alt="payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

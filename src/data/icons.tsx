import { 
  FaLeaf, 
  FaHandsHelping, 
  FaWater, 
  FaShieldAlt, 
  FaChartLine, 
  FaRegLightbulb, 
  FaSeedling,
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaUsers, 
  FaNewspaper,
  FaArrowRight,
  FaMountain,
  FaShip,
  FaCogs,
  FaIndustry,
  FaTwitter,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

export const OperationsIcons = {
  FaMountain: <FaMountain className="text-4xl text-secondary" />,
  FaShip: <FaShip className="text-4xl text-secondary" />,
  FaCogs: <FaCogs className="text-4xl text-secondary" />,
  FaIndustry: <FaIndustry className="text-4xl text-secondary" />
}

export const SustainabilityIcons = {
  Leaf: <FaLeaf className="text-5xl text-secondary text-opacity-80" />,
  HandsHelping: <FaHandsHelping className="text-5xl text-secondary text-opacity-80" />,
  Water: <FaWater className="text-5xl text-secondary text-opacity-80" />,
  ShieldAlt: <FaShieldAlt className="text-3xl text-secondary" />,
  ChartLine: <FaChartLine className="text-3xl text-secondary" />,
  LightBulb: <FaRegLightbulb className="text-3xl text-secondary" />,
  Seedling: <FaSeedling className="text-3xl text-secondary" />
};

export const ContactIcons = {
  Email: <FaEnvelope className="text-secondary" size={20} />,
  Location: <FaMapMarkerAlt className="text-secondary" size={20} />,
  Suppliers: <FaTruck className="text-secondary" size={20} />,
  HR: <FaUsers className="text-secondary" size={20} />,
  Press: <FaNewspaper className="text-secondary" size={20} />,
  Ethics: <FaShieldAlt className="text-secondary" size={20} />,
};

export const FooterIcons = {
  LinkedIn: <FaLinkedin className="text-secondary" size={20} />,
  Facebook: <FaFacebook className="text-secondary" size={20} />,
  Twitter: <FaTwitter className="text-secondary" size={20} />,
  Instagram: <FaInstagram className="text-secondary" size={20} />,
  Location: <FaMapMarkerAlt className="text-secondary" size={20} />,
  Phone: <FaPhone className="text-secondary" size={20} />,
  Email: <FaEnvelope className="text-secondary" size={20} />
};

export const VerMasIcon = <FaArrowRight size={20} />;

import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, isActive, setActivePage  }) => {

    const handleClick = () => {
        setActivePage(href);
      };

    return (
    <Link href={href}>
        <motion.a
        className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 ${isActive ? 'text-white' : ''}`}
        whileHover={{ scale: 1.1, color: "#FFFFFF" }}
        onClick={handleClick}
        >
        {title}
        {isActive && <div className="h-1 bg-primary-500 rounded-t-md"></div>}
        </motion.a>
    </Link>
    );
};

export default NavLink;
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const LINKEDIN_URL = "https://www.linkedin.com/in/ivan-federico-ameri-82770b235";
const GITHUB_URL = "https://github.com/FIvanAmeri/";
const EMAIL = "ivan.ameri.f@gmail.com";

const IconLink = ({ href, children, colorClass }: { href: string, children: React.ReactNode, colorClass: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      transition-all duration-300 ease-in-out
      text-gray-600 dark:text-gray-300
      hover:scale-110 
      ${colorClass}
    `}
  >
    {children}
  </a>
);

export default function Contactame() {
  return (
 
    <div className="flex gap-2 p-4"> 
      
      <IconLink 
        href={LINKEDIN_URL} 
        colorClass="hover:text-blue-600"
      >
        <FaLinkedinIn size={30} />
      </IconLink>

      <IconLink 
        href={GITHUB_URL} 
        colorClass="hover:text-purple-600 dark:hover:text-purple-400"
      >
        <FaGithub size={30} />
      </IconLink>

      <IconLink 
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Contacto%20desde%20Portafolio%20Full%20Stack`} 
        colorClass="hover:text-red-600 dark:hover:text-red-400"
      >
        <IoMailOutline size={30} />
      </IconLink>
      
    </div>
  );
}
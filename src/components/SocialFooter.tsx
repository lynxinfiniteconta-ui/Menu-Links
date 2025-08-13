import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contato@exemplo.com', label: 'Email' },
];


const SocialFooter = () => {
  return (
    <motion.footer 
      className="mt-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      
      
      <motion.p 
        className="text-sm text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        © 2025 - Criado por Hydr4 Lab. ❤️
      </motion.p>
    </motion.footer>
  );
};

export default SocialFooter;

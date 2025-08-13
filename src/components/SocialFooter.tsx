import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
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
      <div className="flex justify-center space-x-6 mb-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center group"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon 
              size={18} 
              className="text-muted group-hover:text-primary transition-colors duration-300" 
            />
          </motion.a>
        ))}
      </div>
      
      <motion.p 
        className="text-sm text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
      </motion.p>
    </motion.footer>
  );
};

export default SocialFooter;

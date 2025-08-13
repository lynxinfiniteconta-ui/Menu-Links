import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  delay?: number;
}

const LinkButton = ({ href, icon: Icon, title, description, delay = 0 }: LinkButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 md:p-5 glass glass-hover rounded-2xl group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
            <Icon size={20} className="text-secondary group-hover:text-primary" />
          </div>
        </div>
        
        <div className="flex-1 text-left">
          <h3 className="text-lg font-semibold text-primary group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted group-hover:text-secondary transition-colors duration-300 mt-1">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            className="w-5 h-5 text-muted group-hover:text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default LinkButton;
import { motion } from 'framer-motion';
import ProfileSection from '@/components/ProfileSection';
import LinkButton from '@/components/LinkButton';
import SocialFooter from '@/components/SocialFooter';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  ShoppingBag, 
  BookOpen, 
  Calendar,
  Camera,
  Podcast
} from 'lucide-react';

const linkData = [
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Siga para conteúdo diário',
    href: 'https://instagram.com'
  },
  {
    icon: Facebook,
    title: 'Facebook',
    description: 'Siga para conteúdo diário',
    href: 'https://youtube.com'
  },
  {
    icon: ShoppingBag,
    title: 'Portfolio',
    description: 'Produtos exclusivos',
    href: 'https://loja.exemplo.com'
  },
  {
    icon: BookOpen,
    title: 'Portfolio de Protudos',
    description: 'Artigos e insights',
    href: 'https://blog.exemplo.com'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        <ProfileSection />
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {linkData.map((link, index) => (
            <LinkButton
              key={link.title}
              icon={link.icon}
              title={link.title}
              description={link.description}
              href={link.href}
              delay={0.9 + index * 0.1}
            />
          ))}
        </motion.div>
        
        <SocialFooter />
      </div>
    </div>
  );
};

export default Index;

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
  TikTok
} from 'lucide-react';

const linkData = [
  {
    icon: ShoppingBag,
    title: 'Sem Sono',
    description: 'Produtos exclusivos.',
    href: 'https://www.hydr4lab.site/'
  },
  {
    icon: ShoppingBag,
    title: 'Guia Sono Profundo',
    description: 'Rotina de sono que funciona para seu bebê',
    href: 'http://guiaparasonoprofundo.hydr4lab.site/'
  },
  {
    icon: BookOpen,
    title: 'Portfolio de Produtos',
    description: 'Veja Todos nossos produtos.',
    href: 'https://blog.exemplo.com'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Siga para conteúdo diário.',
    href: 'https://www.instagram.com/hydr4.lab/'
  },
  {
    icon: TikTok,
    title: 'TikTok',
    description: 'Siga para conteúdo diário.',
    href: 'https://www.facebook.com/hydr4.lab'
  },
  {
    icon: Facebook,
    title: 'Facebook',
    description: 'Siga para conteúdo diário.',
    href: 'https://www.facebook.com/hydr4.lab'
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

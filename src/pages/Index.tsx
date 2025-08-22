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
} from 'lucide-react';

const linkData = [
  {
    icon: ShoppingBag,
    title: 'Método Oculto',
    description: 'Emagrecimento Natural Sem Usar Canetinhas Milagrosas.',
    href: 'https://pay.cakto.com.br/8azou3d_525892'
  },
  {
    icon: ShoppingBag,
    title: '104 Receitas Para Emagrecer (Sem Deixar o Doce de Lado)',
    description: 'Perfeito para quem quer perder peso sem abrir mão do sabor!',
    href: 'https://pay.cakto.com.br/ss4t24p_520762'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Siga para conteúdo diário.',
    href: 'https://www.instagram.com/hydr4.lab/'
  },
  {
    icon: Camera,
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

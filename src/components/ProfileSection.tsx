import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

const ProfileSection = () => {
  return (
    <motion.div 
      className="text-center mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="relative inline-block mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 profile-glow animate-glow-pulse mx-auto">
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 p-1 animate-spin" style={{animationDuration: '3s'}}>
          <div className="w-full h-full rounded-full bg-transparent"></div>
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-primary mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Seu Nome
      </motion.h1>
      
      <motion.p 
        className="text-lg text-secondary max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Criador de conteúdo digital • Designer • Desenvolvedor
      </motion.p>
    </motion.div>
  );
};

export default ProfileSection;
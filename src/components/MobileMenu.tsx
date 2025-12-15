
import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
      <div className="fixed right-0 top-0 h-full w-80 bg-black  shadow-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button 
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-6">
          <div className="space-y-6">
            <Link 
              to="/solucoes" 
              className="block text-lg text-white hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Soluções
            </Link>
            <Link 
              to="/quem-somos" 
              className="block text-lg text-white hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Quem Somos
            </Link>
            <Link 
              to="#" 
              className="block text-lg text-white hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Notícias
            </Link>
            <Link 
              to="/contato" 
              className="block text-lg text-white hover:text-[#7918f9] transition-colors"
              onClick={onClose}
            >
              Contato
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

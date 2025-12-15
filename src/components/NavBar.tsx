
import React, { useState, useEffect, memo } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo, LogoMobile } from './Logo';
import { MobileMenu } from './MobileMenu';
import { useCriticalImages } from '@/hooks/useImagePreloader';

const NavBar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Precarregar imagens críticas
  useCriticalImages();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
        <div className="mx-auto w-10/12 py-4 flex justify-between items-center lg:py-6">
          <Link to="/">
            <div className="block lg:hidden">
              <Logo />
            </div>
            <div className="hidden lg:block">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/solucoes" className="text-white hover:text-[#7918f9] transition-colors xl:text-xs 2xl:text-base">
              Soluções
            </Link>
            <Link to="/quem-somos" className="text-white hover:text-[#7918f9] transition-colors xl:text-xs 2xl:text-base">
            Institucional
            </Link>
            <Link to="/noticias" className="text-white hover:text-[#7918f9] transition-colors xl:text-xs 2xl:text-base">
              Notícias
            </Link>
          </nav>

          {/* Mobile/Desktop Actions */}
          <div className="flex items-center space-x-4">
            {/* <button className="text-white hover:text-[#7918f9] transition-colors">
              <Search className="w-5 h-5 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7" />
            </button> */}
            <button
              className="text-white hover:text-[#7918f9] transition-colors lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
});

NavBar.displayName = 'NavBar';

export { NavBar };

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import SmoothScrollLink from './SmoothScrollLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="transition-colors duration-300">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img src="/images/logo smart.webp" alt="Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-neutral-800">Smart Accounting</span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" label="Главная" scrolled={scrolled} />
            <NavLink href="/services" label="Услуги" scrolled={scrolled} />
            <NavLink href="/#principles" label="Наши принципы" scrolled={scrolled} />
            <NavLink href="/contact" label="Контакты" scrolled={scrolled} />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? 'text-[#2e2e2e] hover:text-[#c9a875]' : 'text-[#2e2e2e] hover:text-[#c9a875]'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 mt-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" label="Главная" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/services" label="Услуги" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/#principles" label="Наши принципы" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/contact" label="Контакты" onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

// Desktop navigation link component
const NavLink: React.FC<{ href: string; label: string; scrolled: boolean }> = ({ href, label, scrolled }) => {
  const isHashLink = href.includes('#');
  const textClass = scrolled ? 'text-[#2e2e2e] hover:text-[#c9a875]' : 'text-[#2e2e2e] hover:text-[#c9a875]';
  
  if (isHashLink) {
    return (
      <SmoothScrollLink 
        href={href} 
        className={`${textClass} relative group transition-colors duration-300`}
      >
        {label}
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-[#c9a875]' : 'bg-[#c9a875]'}`}></span>
      </SmoothScrollLink>
    );
  }

  return (
    <Link 
      href={href} 
      className={`${textClass} relative group transition-colors duration-300`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-[#c9a875]' : 'bg-[#c9a875]'}`}></span>
    </Link>
  );
};

// Mobile navigation link component
const MobileNavLink: React.FC<{ href: string; label: string; onClick: () => void }> = ({ href, label, onClick }) => {
  const isHashLink = href.includes('#');
  
  if (isHashLink) {
    return (
      <SmoothScrollLink 
        href={href} 
        className="text-[#2e2e2e] hover:text-[#c9a875] py-2 block transition-colors duration-300"
        onClick={onClick}
      >
        {label}
      </SmoothScrollLink>
    );
  }

  return (
    <Link 
      href={href} 
      className="text-[#2e2e2e] hover:text-[#c9a875] py-2 block transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header; 
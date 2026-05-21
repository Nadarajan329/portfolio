import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '15px 0' : '30px 0',
      background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.5px'
        }}>
          Portfolio<span style={{ color: 'var(--accent)' }}>.</span>
        </a>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <ul style={{
            display: 'flex',
            gap: '2rem',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#about" style={navLinkStyle}>About</a></li>
            <li><a href="#skills" style={navLinkStyle}>Skills</a></li>
            <li><a href="#projects" style={navLinkStyle}>Projects</a></li>
            <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
          </ul>
          
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={iconStyle}><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={iconStyle}><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  fontSize: '0.9rem',
  fontWeight: '500',
  color: 'var(--text-secondary)',
  transition: 'var(--transition-fast)'
};

const iconStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1.2rem',
  transition: 'var(--transition-fast)'
};

export default Navbar;

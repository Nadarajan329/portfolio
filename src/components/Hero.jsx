import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: -1
      }}></div>

      <div className="container animate-fade-in" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            fontSize: '0.875rem',
            color: 'var(--accent)',
            fontWeight: '500',
            marginBottom: '1.5rem'
          }}>
            👋 Welcome to my portfolio
          </div>
          <h1 style={{
            fontSize: '4.5rem',
            marginBottom: '1.5rem',
            letterSpacing: '-1px'
          }}>
            Creative <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Developer</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '480px'
          }}>
            I build exceptional and accessible digital experiences for the web. Turning complex problems into beautiful, intuitive designs.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#" className="btn btn-secondary">
              Resume <FaDownload />
            </a>
          </div>
        </div>
        
        <div style={{ position: 'relative' }}>
          <div className="glass" style={{
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
            boxShadow: 'inset 0 0 50px rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            animation: 'morph 8s ease-in-out infinite'
          }}>
             <div style={{
               width: '85%',
               height: '85%',
               borderRadius: '50%',
               background: 'rgba(255, 255, 255, 0.03)',
               backdropFilter: 'blur(10px)',
               border: '1px solid rgba(255, 255, 255, 0.1)',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               overflow: 'hidden'
             }}>
               {/* Placeholder for an image */}
               <div style={{
                 fontSize: '5rem',
                 color: 'var(--accent)'
               }}>👨‍💻</div>
             </div>
          </div>
          
          {/* Keyframes for morph animation would be in CSS, but let's just add it dynamically here for simplicity, or to index.css */}
          <style>{`
            @keyframes morph {
              0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
              50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
              100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem'
          }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <form className="glass contact-form" style={{
            padding: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            textAlign: 'left'
          }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
              <input type="text" id="name" style={inputStyle} placeholder="Nadarajan" required />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
              <input type="email" id="email" style={inputStyle} placeholder="john@example.com" required />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea id="message" rows="5" style={{...inputStyle, resize: 'vertical'}} placeholder="Hello..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      
      <footer style={{
        textAlign: 'center',
        padding: '3rem 0',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginTop: '3rem'
      }}>
        <p>Built with React & Vanilla CSS.</p>
        <p>&copy; {new Date().getFullYear()} Nadarajan. All rights reserved.</p>
      </footer>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(0,0,0,0.2)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  fontSize: '1rem',
  fontFamily: 'var(--font-main)',
  outline: 'none',
  transition: 'var(--transition-fast)'
};

export default Contact;

import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{
      background: 'var(--bg-light)'
    }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div className="glass" style={{
            position: 'relative',
            padding: '2rem',
            borderRadius: '20px'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '60px',
              height: '60px',
              borderTop: '3px solid var(--accent)',
              borderLeft: '3px solid var(--accent)',
              borderRadius: '8px 0 0 0'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: '-15px',
              width: '60px',
              height: '60px',
              borderBottom: '3px solid var(--accent-secondary)',
              borderRight: '3px solid var(--accent-secondary)',
              borderRadius: '0 0 8px 0'
            }}></div>
            
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop" 
              alt="Profile placeholder" 
              style={{
                width: '100%',
                borderRadius: '12px',
                filter: 'grayscale(100%)',
                transition: 'var(--transition-normal)'
              }}
              onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              I'm a passionate web developer building modern applications.
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.8'
            }}>
              With a strong foundation in the MERN stack, I enjoy turning complex problems into simple, beautiful, and intuitive designs. My focus is on writing clean, elegant, and efficient code that delivers exceptional user experiences.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
            
            <div className="about-info-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              <InfoItem label="Name" value="Nadarajan" />
              <InfoItem label="Email" value="njnj33997@gmail.com" />
              <InfoItem label="Location" value="Kallakurichi, Tamil Nadu" />
              <InfoItem label="Availability" value="Open for Work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{label}</p>
    <p style={{ fontWeight: '600', fontSize: '1.05rem' }}>{value}</p>
  </div>
);

export default About;

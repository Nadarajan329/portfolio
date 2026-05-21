import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Full Stack Development Training',
      company: 'NXTWAVE Academy',
      date: '2023 - 2027',
      description: 'Comprehensive training in modern web development using the MERN stack (MongoDB, Express, React, Node.js).'
    },
    {
      title: 'BTech Information Technology',
      company: 'Mahendra Institute of Technology',
      date: '2022 - 2026',
      description: 'Currently pursuing Bachelor of Technology in IT.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 0
          }}></div>
          
          {experiences.map((exp, index) => (
            <div key={index} style={{
              position: 'relative',
              paddingLeft: '60px',
              marginBottom: index === experiences.length - 1 ? 0 : '3rem',
              zIndex: 1
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '4px solid var(--bg-dark)',
                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)'
              }}></div>
              
              <div className="glass" style={{
                padding: '2rem',
                borderRadius: '16px',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '400' }}>{exp.company}</h4>
                  </div>
                  <div style={{
                    padding: '0.4rem 1rem',
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--accent)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {exp.date}
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

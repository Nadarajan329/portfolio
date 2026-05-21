import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and Stripe payment integration. Built using the MERN stack with Redux for state management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management tool featuring real-time updates, drag-and-drop boards, and team workspaces. Implemented using Socket.io for live synchronization.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'TailwindCSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'An application that leverages OpenAI API to generate unique images from text prompts. Features a sleek UI with glassmorphism design and image download capabilities.',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
      tags: ['React', 'OpenAI API', 'Express', 'CSS Modules'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Project Image */}
              <div className="project-img-wrapper" style={{
                order: index % 2 === 0 ? 1 : 2,
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--accent)',
                  opacity: 0.2,
                  transition: 'var(--transition-normal)',
                  zIndex: 1
                }} className="project-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-slow)'
                  }}
                  className="project-img"
                />
              </div>
              
              {/* Project Info */}
              <div className="project-info-wrapper" style={{
                order: index % 2 === 0 ? 2 : 1,
                textAlign: index % 2 === 0 ? 'left' : 'right',
                zIndex: 2
              }}>
                <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '0.5rem' }}>Featured Project</p>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{project.title}</h3>
                
                <div className="glass project-desc-glass" style={{
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  marginLeft: index % 2 === 0 ? '-4rem' : '0',
                  marginRight: index % 2 === 0 ? '0' : '-4rem',
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'left'
                }}>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.description}</p>
                </div>
                
                <ul className="project-tags" style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '1.5rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem'
                }}>
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                
                <div className="project-links" style={{
                  display: 'flex',
                  gap: '1.5rem',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                }}>
                  <a href={project.github} style={{ fontSize: '1.5rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>
                    <FaGithub />
                  </a>
                  <a href={project.live} style={{ fontSize: '1.5rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <style>{`
          .project-card:hover .project-overlay { opacity: 0; }
          .project-card:hover .project-img { transform: scale(1.05); }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;

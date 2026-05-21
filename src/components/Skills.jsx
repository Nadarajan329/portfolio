import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#fff' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {skills.map((skill, index) => (
            <div key={index} className="glass" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = skill.color;
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${skill.color}50`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: '3rem',
                color: skill.color,
                filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))'
              }}>
                {skill.icon}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '500' }}>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// Section.js - Enhanced with better animations
import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

export function SectionWrap({ id, children, className = '' }) {
  return (
    <section id={id} className={`section-wrap ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ num, title, subtitle, alignment = 'left' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`section-head section-head--${alignment} ${isVisible ? 'section-head--visible' : ''}`}
    >
      <div className="section-head-inner">
        <div className="section-head-left">
          <span className="section-num-wrapper">
            <span className="section-num-bracket">{'<'}</span>
            <span className="section-num">{num.padStart(2, '0')}</span>
            <span className="section-num-bracket">{'>'}</span>
          </span>
          <div className="section-line"></div>
        </div>
        
        <div className="section-head-right">
          <h2 className="section-title">
            <span className="section-title-text">{title}</span>
            <span className="section-title-underline"></span>
          </h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export function FadeIn({ children, delay = 0, direction = 'up', duration = 0.6 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`fade-in fade-in--${direction}`}
      style={{ 
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}ms`
      }}
      data-visible={isVisible}
    >
      {children}
    </div>
  );
}

// New component for staggered children animations
export function StaggerContainer({ children, staggerDelay = 80, className = '' }) {
  return (
    <div className={`stagger-container ${className}`}>
      {React.Children.map(children, (child, index) => (
        <FadeIn key={index} delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
}
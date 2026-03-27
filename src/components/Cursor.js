import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pos = useRef({ fx: 0, fy: 0 });
  const mouse = useRef({ mx: 0, my: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.mx = e.clientX;
      mouse.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };
    document.addEventListener('mousemove', onMove);

    let animId;
    const animate = () => {
      pos.current.fx += (mouse.current.mx - pos.current.fx) * 0.12;
      pos.current.fy += (mouse.current.my - pos.current.fy) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${pos.current.fx - 18}px, ${pos.current.fy - 18}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
}

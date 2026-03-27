import { useEffect, useState } from 'react';
import './ScrollIndicator.css';

export default function ScrollIndicator() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setWidth(Math.min(pct, 100));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-indicator" style={{ width: `${width}%` }} />;
}

import { useEffect, useState } from 'react';

const slides = [
  { title: 'Welcome back!', text: 'Here is what is happening with your store today.', color: '#6366f1' },
  { title: 'Sales up 8%', text: 'Revenue grew compared to last month.', color: '#0ea5e9' },
  { title: 'New feature', text: 'Export reports to CSV from the Orders page.', color: '#10b981' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const go = (i) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="carousel">
      <div className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s) => (
          <div key={s.title} className="slide" style={{ background: s.color }}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={() => go(index - 1)} aria-label="Previous">‹</button>
      <button className="arrow right" onClick={() => go(index + 1)} aria-label="Next">›</button>
      <div className="dots">
        {slides.map((s, i) => (
          <button key={s.title} className={i === index ? 'dot active' : 'dot'} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

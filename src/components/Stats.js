import './Stats.css';

export default function Stats({ stats }) {
  return (
    <div className="stats-outer">
      <div className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

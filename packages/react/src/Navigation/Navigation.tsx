import './navigation.css';

export function Tabs({ items, active = 0 }: { items: string[]; active?: number }) {
  return <div className="xw-tabs" role="tablist">{items.map((item, index) => <button key={item} role="tab" aria-selected={active === index}>{item}</button>)}</div>;
}

export function Steps({ items, current = 0 }: { items: string[]; current?: number }) {
  return <ol className="xw-steps">{items.map((item, index) => <li key={item} className={index < current ? 'is-done' : index === current ? 'is-current' : ''}><span>{index < current ? '✓' : index + 1}</span><strong>{item}</strong></li>)}</ol>;
}

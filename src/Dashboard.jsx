import Carousel from './Carousel.jsx';

const stats = [
  { label: 'Users', value: '12,480', change: '+4.2%' },
  { label: 'Revenue', value: '$48,920', change: '+8.1%' },
  { label: 'Orders', value: '1,236', change: '-1.3%' },
  { label: 'Conversion', value: '3.6%', change: '+0.4%' },
];

const monthly = [
  { month: 'Jan', value: 32 },
  { month: 'Feb', value: 41 },
  { month: 'Mar', value: 38 },
  { month: 'Apr', value: 52 },
  { month: 'May', value: 47 },
  { month: 'Jun', value: 61 },
];

const orders = [
  { id: '#1042', customer: 'Priya Sharma', amount: '$120.00', status: 'Paid' },
  { id: '#1041', customer: 'Rahul Verma', amount: '$89.50', status: 'Pending' },
  { id: '#1040', customer: 'Ananya Gupta', amount: '$240.00', status: 'Paid' },
  { id: '#1039', customer: 'Vikram Singh', amount: '$45.99', status: 'Refunded' },
];

export default function Dashboard() {
  const max = Math.max(...monthly.map((m) => m.value));

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>MyApp</h2>
        <nav>
          <a className="active">Dashboard</a>
          <a>Orders</a>
          <a>Customers</a>
          <a>Settings</a>
        </nav>
      </aside>

      <div className="main">
      <header className="navbar">
        <input className="search" type="search" placeholder="Search..." />
        <div className="nav-right">
          <button className="icon-btn" title="Notifications">🔔</button>
          <div className="avatar">A</div>
        </div>
      </header>

      <main className="content">
        <h1>Dashboard</h1>

        <Carousel />

        <section className="stats">
          {stats.map((s) => (
            <div key={s.label} className="card">
              <span className="label">{s.label}</span>
              <span className="value">{s.value}</span>
              <span className={s.change.startsWith('-') ? 'down' : 'up'}>{s.change}</span>
            </div>
          ))}
        </section>

        <section className="card">
          <h3>Monthly sales (k$)</h3>
          <div className="chart">
            {monthly.map((m) => (
              <div key={m.month} className="bar-col">
                <div className="bar" style={{ height: `${(m.value / max) * 100}%` }} title={m.value} />
                <span>{m.month}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h3>Recent orders</h3>
          <table>
            <thead>
              <tr><th>Order</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.amount}</td>
                  <td><span className={`badge ${o.status.toLowerCase()}`}>{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      </div>
    </div>
  );
}

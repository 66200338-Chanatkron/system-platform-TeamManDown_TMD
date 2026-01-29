'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(''); // เอาไว้โชว์สถานะ
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('Checking...');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('✅ Login Success! Redirecting...');
        // ตรงนี้คุณอาจจะ redirect ไปหน้า dashboard
        // router.push('/dashboard'); 
      } else {
        setStatus('❌ Login Failed: ' + data.message);
      }
    } catch (err) {
      setStatus('❌ Error: Something went wrong');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>WiFi Login System</h1>
        <p style={styles.subtitle}>TeamManDown Platform</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
}

// Style แบบบ้านๆ (Inline Style) เพื่อความง่ายในการก๊อปแปะ
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' },
  card: { padding: '2rem', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '350px', textAlign: 'center' },
  title: { margin: '0 0 10px 0', color: '#333' },
  subtitle: { margin: '0 0 20px 0', color: '#666', fontSize: '14px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' },
  button: { padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#0070f3', color: 'white', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' },
  status: { marginTop: '15px', fontSize: '14px', fontWeight: 'bold' }
};
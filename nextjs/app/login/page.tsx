'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(''); // เอาไว้โชว์สถานะ
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
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
         // Redirect to dashboard (cookie is already set by API)
         router.push('/'); 
         router.refresh(); 
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
        <h1 style={styles.title}>DooDram</h1>
        <p style={styles.subtitle}>Sign In to Watch</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
            className="text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
            className="text-black" 
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
}

// Style แบบบ้านๆ (Inline Style)
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', color: 'white' },
  card: { padding: '3rem', backgroundColor: 'rgba(0,0,0,0.75)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '400px', textAlign: 'center' as const, border: '1px solid #333' },
  title: { margin: '0 0 10px 0', color: '#e50914', fontSize: '2.5rem', fontWeight: 'bold' },
  subtitle: { margin: '0 0 20px 0', color: '#aaa', fontSize: '14px' },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '20px' },
  input: { padding: '15px', borderRadius: '5px', border: 'none', fontSize: '16px', backgroundColor: '#333', color: 'white', outline: 'none' },
  button: { padding: '15px', borderRadius: '5px', border: 'none', backgroundColor: '#e50914', color: 'white', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' },
  status: { marginTop: '15px', fontSize: '14px', fontWeight: 'bold', color: '#ffa00a' }
};

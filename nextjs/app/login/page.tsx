'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Checking...');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('✅ Login Success!');
        router.push('/');
        router.refresh();
      } else {
        setStatus('❌ ' + data.message);
        setIsLoading(false);
      }
    } catch (err) {
      setStatus('❌ Something went wrong');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* พื้นหลังแบบจางๆ (Optional: ใส่ URL รูปหนังของคุณได้) */}
      <div className="absolute inset-0 z-0 opacity-40">
         <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/74d37302-2229-40ee-896e-fac30c3a173b/842e23b2-4d69-42b7-873e-32d733568c0b/TH-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="background" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Login Card: ปรับขนาดตามหน้าจออัตโนมัติ */}
      <div className="relative z-10 w-full max-w-[450px] p-8 md:p-16 bg-black/75 rounded-md border border-white/10 shadow-2xl mx-4">
        <h1 className="text-4xl font-black text-red-600 mb-8 tracking-tighter">
          DooDram
        </h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600 transition-all border-b-2 border-transparent focus:border-red-600"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded bg-[#333] text-white outline-none focus:ring-2 focus:ring-red-600 transition-all border-b-2 border-transparent focus:border-red-600"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-4 mt-4 rounded font-bold text-lg transition-all active:scale-95 ${
              isLoading ? 'bg-red-800 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {isLoading ? 'Signing In...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-4 text-sm text-gray-400">
           {status && <p className={`font-medium ${status.includes('✅') ? 'text-green-500' : 'text-orange-500'}`}>{status}</p>}
           
        </div>

        
      </div>
    </div>
  );
}
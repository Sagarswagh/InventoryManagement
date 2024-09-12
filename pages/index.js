'use client';
//index.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login/login'); 
  }, [router]);

  return null;
};

export default HomePage;


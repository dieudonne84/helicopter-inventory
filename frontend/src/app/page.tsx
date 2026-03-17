'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const isAuth = sessionStorage.getItem('helixtrack_auth');
    router.replace(isAuth ? '/inventory' : '/login');
  }, [router]);
  return null;
}

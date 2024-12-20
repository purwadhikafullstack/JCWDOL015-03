'use client';
import { createToken } from '@/lib/server';
import { useAppDispatch } from '@/redux/hook';
import { updatedCartFromDatabase } from '@/redux/slice/cartSlice';
import { loginAction } from '@/redux/slice/userSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PasswordlessPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const saveTokenAndRedirect = async () => {
      const url = new URL(window.location.href);
      const token = url.searchParams.get('token');

      if (token) {
        await createToken(token);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const userData = await response.json()
        dispatch(updatedCartFromDatabase(userData.user.cart.CartItem))
        dispatch(loginAction(userData.user))

        if (response.ok) {          
          window.location.href = '/'
        }
      }
    };
    saveTokenAndRedirect();
  }, [router, dispatch]);

  return <p>Redirecting...</p>;
}

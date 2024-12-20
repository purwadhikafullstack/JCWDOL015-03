// src/app/providers.tsx
'use client'
import {NextUIProvider} from '@nextui-org/react'
import { AppStore, makeStore } from '@/redux/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '@/components/reduxStore/storeLoading';

export function AppProvider({children}: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
      storeRef.current = makeStore();
    }
    
    return (
      <NextUIProvider>
        <Provider store={storeRef.current}>
          <PersistGate
            persistor={persistStore(storeRef.current)}
            loading={<Loading />}
          >
            {children}
            
          </PersistGate>
        </Provider>
      </NextUIProvider>
    )
}
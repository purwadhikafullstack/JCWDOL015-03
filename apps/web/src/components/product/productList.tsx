'use client';
import { IProduct, IStocks } from '@/type/product';
import ProductCard from './productCard';
import { getStoreStock } from '@/lib/store.handler';
import { useAppSelector } from '@/redux/hook';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const store = useAppSelector((state) => state.store);
  const [data, setData] = useState<IStocks[]>([]);
  const getData = async () => {
    const res = await getStoreStock(store.id);
    if (res) {
      setData([...res]);
    }
  };

  useEffect(() => {
    if(store.id !== 0) {
      getData();
    }
  }, [store]);
  return (
    <>
      {store.id === 0 && <p>Please Login & create address / Allow our site to access your location</p>}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {data.map((stock) => (
          <ProductCard key={stock.id} stock={stock} />
        ))}
      </div>
    </>
  );
}

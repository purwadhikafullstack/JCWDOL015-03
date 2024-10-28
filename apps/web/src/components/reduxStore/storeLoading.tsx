import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="/logo.png" alt="Grocery Logo" width={50} height={50} />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
          Grocery
        </span>
      </div>
    </div>
  );
}

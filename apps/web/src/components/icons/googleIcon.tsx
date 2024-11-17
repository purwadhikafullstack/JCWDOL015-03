interface GoogleIconProps {
  size?: number; // ukuran default dari icon
  width?: number; // lebar icon
  height?: number; // tinggi icon
  [key: string]: any; // menambahkan tipe untuk props lainnya
}

export const GoogleIcon = ({
  size = 24,
  width,
  height,
  ...props
}: GoogleIconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.6739 12.2254C22.6739 11.4415 22.6043 10.6761 22.4771 9.9364H12.2559V14.2908H17.8508C17.611 15.5248 16.8966 16.5932 15.8787 17.3126L19.3624 19.9615C21.4672 18.0376 22.6739 15.3736 22.6739 12.2254Z"
      fill="#4285F4"
    />
    <path
      d="M12.2559 23.0009C15.1221 23.0009 17.5477 22.019 19.3624 20.3901L15.8787 17.7412C14.9394 18.3992 13.7166 18.7706 12.2559 18.7706C9.50351 18.7706 7.21879 16.906 6.41259 14.366H2.78784L1.64877 17.1045C3.44815 20.811 7.51856 23.0009 12.2559 23.0009Z"
      fill="#34A853"
    />
    <path
      d="M6.41263 14.366C6.16213 13.708 6.01883 13.0044 6.01883 12.2769C6.01883 11.5495 6.16213 10.8459 6.41263 10.1879L2.78787 7.44934L1.6488 10.1879C0.919996 11.764 0.502441 13.487 0.502441 15.3135C0.502441 17.14 0.919996 18.863 1.6488 20.4391L6.41263 14.366Z"
      fill="#FBBC05"
    />
    <path
      d="M12.2559 6.55465C13.7801 6.55465 15.1583 7.10865 16.2294 8.11997L19.4471 4.9022C17.5353 3.12533 15.1241 2.00001 12.2559 2.00001C7.5186 2.00001 3.44819 4.18999 1.64881 7.8965L6.41264 10.635C7.21884 8.09496 9.50356 6.55465 12.2559 6.55465Z"
      fill="#EA4335"
    />
  </svg>
);

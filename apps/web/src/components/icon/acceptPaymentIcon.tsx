
export default function AcceptPaymentIcon({ size, height, width, fill, ...props }: {size?: number, height?: number, width?:number, fill?:string}) {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      height= {size || height || 24} 
      width= {size || width || 24}
      fill= {fill || '#000000'} 
      viewBox="0 0 24 24"
      {...props}
    >
      <path id="accept" style={{fillRule:'evenodd'}} d="M1008,120a12,12,0,1,1,12-12A12,12,0,0,1,1008,120Zm0-22a10,10,0,1,0,10,10A10,10,0,0,0,1008,98Zm-0.08,14.333a0.819,0.819,0,0,1-.22.391,0.892,0.892,0,0,1-.72.259,0.913,0.913,0,0,1-.94-0.655l-2.82-2.818a0.9,0.9,0,0,1,1.27-1.271l2.18,2.184,4.46-7.907a1,1,0,0,1,1.38-.385,1.051,1.051,0,0,1,.36,1.417Z" transform="translate(-996 -96)"/>
    </svg>   
  )
}
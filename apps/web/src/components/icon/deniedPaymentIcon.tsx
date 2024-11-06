export default function DeniedPaymentIcon({ size, height, width, fill, ...props }: {size?: number, height?: number, width?:number, fill?:string}) {

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            height= {size || height || 24} 
            width= {size || width || 24}
            viewBox="0 0 15 15" 
            fill={"none"}
            {...props}
        >
        <path fillRule="evenodd" clipRule="evenodd" 
        d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM2.56379 3.27089C1.58895 4.40766 1 5.88505 1 7.5C1 11.0899 3.91015 14 7.5 14C9.11495 14 10.5923 13.411 11.7291 12.4362L2.56379 3.27089ZM3.27089 2.56379L12.4362 11.7291C13.411 10.5923 14 9.11495 14 7.5C14 3.91015 11.0899 1 7.5 1C5.88505 1 4.40766 1.58895 3.27089 2.56379Z" 
        fill={fill || "#000000"}/>
        </svg>
    )
}
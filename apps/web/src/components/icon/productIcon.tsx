export default function ProductIcon({ size, height, width, ...props }: {size?: number, height?: number, width?:number}) {

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height= {size || height || 24} 
            width= {size || width || 24}
            viewBox="0 0 32 32" 
            fill="#000000" 
            {...props}
        >
            <g fill="none" fillRule="evenodd">

            <path d="m0 0h32v32h-32z"/>

            <path d="m16 0 13.8564065 8v16l-13.8564065 8-13.85640646-8v-16zm0 2.309-11.857 6.846v13.689l11.857 6.846 11.856-6.846v-13.689zm6.550845 8.3654304.9389431 1.7658952-6.5015238 3.4551048.0002619 7.7701392h-2l-.0002619-7.7691392-6.50100003-3.4561048.93894312-1.7658952 6.56205691 3.489z" fill="#000000" fillRule="nonzero"/>

</g>
        </svg>
    )
}



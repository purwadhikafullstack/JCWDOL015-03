'use client'
import { cancelOrder, getMidtransStatus } from "@/lib/order"
import { IOrder } from "@/type/order"
import { Button } from "@nextui-org/react"
import { Dispatch, SetStateAction, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function PaymentRedirectMidtrans({token, orderId, data, setData, onClickCancelOrder}: {token: string, orderId:number, data: IOrder | null, setData:Dispatch<SetStateAction<IOrder | null>>, onClickCancelOrder:() => any}) {
    const [isError, setIsError] = useState<string | null>(null)
    const onClickRedirect = () => {
        window.open(`https://app.sandbox.midtrans.com/snap/v4/redirection/${token}`, '_blank', 'popup,noopener,norefferer')
    }
    const onClickCheckStatus = async () => {
        const status = await getMidtransStatus(orderId)
        console.log(status.midtrans);
        
        if(status.status === "NOT_FOUND") {
            return setIsError("Please choose method in 'Pay with Gateway' first before 'check status'")
        } 
        
        switch (status.midtrans) {
            case "expire":
                toast.error('your payment is Expired')
                break;
            
            case "settlement":
                toast.success('your payment success and confirmed')
                setData({...data!, status: "Proccessed"})
                break;
            default:
                toast.info('Your payment still waiting to be paid')
                break;
        }
        
    }

    const onCancel = async () => {
        const status = await onClickCancelOrder()
        if(status.msg === 'NOT_FOUND') {
            setIsError("Please choose method in 'Pay with Gateway' first before 'Cancel Payment'")
        }
        
    }
    return (
        <div className="grid grid-row-[auto] gap-2 justify-end">
            {isError && <p className="text-warning text-[12px]">{isError}</p>}
            <div className="grid grid-cols-[2fr_1fr] gap-2">
                <Button color={'primary'} onPress={onClickRedirect} className="">Pay with Gateway</Button>
                <Button color={'primary'} variant="bordered" onPress={onClickCheckStatus} className="">Check Status</Button>
            </div>
            <Button color={'danger'} variant="light" size="sm" onPress={onCancel} className="">Cancel Payment</Button>
            
        </div>
    )
}
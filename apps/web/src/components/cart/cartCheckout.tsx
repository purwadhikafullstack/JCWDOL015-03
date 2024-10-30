import currencyRupiah from '@/lib/rupiahCurrency'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
export default function CartCheckout({ totalPayment, checkout, onCheckout }: { totalPayment: number, checkout: number[], onCheckout: () => void }) {

    const nextCardDesktop = 
    <div className='sticky top-2 hidden md:block'>
        <Card className='w-full rounded-none md:rounded-md' >
            <CardHeader>
                <h2 className='font-bold text-lg'>Checkout Details</h2>
            </CardHeader>
            <CardBody>
                <div className='flex flex-col justify-between'>
                    <p>Total : </p>
                    <p>{currencyRupiah(totalPayment)}</p>
                </div>
            </CardBody>
            <CardFooter className='flex w-full justify-end'>
                <Button color='primary' size='md' isDisabled={checkout.length === 0} onPress={onCheckout}>Checkout</Button>
            </CardFooter>
        </Card>
    </div>

    const nextCardMobile = 
    <div className='sticky bottom-0 block md:hidden'>
        <Card className='w-full rounded-none md:rounded-md' >
            <CardBody>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-between'>
                        <p>Total : </p>
                        <p>{currencyRupiah(totalPayment)}</p>
                    </div>
                    <Button color='primary' size='md' isDisabled={checkout.length === 0} onPress={onCheckout}>Checkout</Button>
                </div>
            </CardBody>
        </Card>
    </div>
    return (
        <>
            {nextCardDesktop}
            {nextCardMobile}
        </>
    )
}
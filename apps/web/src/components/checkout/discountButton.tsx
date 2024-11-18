'use client'
import { getAvailableDiscountOnCheckout } from '@/lib/discount.handler'
import currencyRupiah from '@/lib/rupiahCurrency'
import { useAppSelector } from '@/redux/hook'
import { IDiscount } from '@/type/discount'
import { Button, Card, CardBody, CardHeader, Divider, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useMemo, useState } from 'react'
import DiscountSelectionModal from '../modal/discountSelection'

export default function DiscountButton({discount, itemTotalPayment, onSelectDiscount}: {discount: IDiscount | null, itemTotalPayment:number, onSelectDiscount: (discount: IDiscount|null) => void}) {
    const store = useAppSelector(state => state.store)
    const [dataDiscount, setDataDiscount] = useState<IDiscount[]>([])
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    useEffect(() => {
        const getData = async () => {
            const { status, discount } = await getAvailableDiscountOnCheckout(store.id)
            setDataDiscount([...discount])
        }
        getData()
    }, [store])
  return (
    <>
        <Card fullWidth shadow='sm' isHoverable isDisabled={dataDiscount.length === 0} className='p-2' isPressable={dataDiscount.length !== 0} onPress={onOpen}>
            <CardHeader>
                <h2 className='font-bold'>Discount/Voucher</h2>
            </CardHeader>   
            <Divider />
            <CardBody>
                {
                    !discount && 
                    <p>{dataDiscount.length !== 0 ?`You have discount/voucher can be used`: `There is no available discount/voucher`}</p>
                }
                {
                    discount &&
                    <div>
                        <p>{discount.discountType}</p>
                        <p>Discount cut : {currencyRupiah(discount.value)}</p>
                        <p>Minimum purchase : {currencyRupiah(discount.minPurchase!)}</p>
                    </div> 
                }
            </CardBody>
        </Card>
        <DiscountSelectionModal itemTotalPayment={itemTotalPayment} dataDiscount={dataDiscount} onSelectDiscount={onSelectDiscount} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
    )
}
'use client'
import { getUserAddressess } from "@/lib/address"
import { useAppSelector } from "@/redux/hook"
import { IAddress } from "@/type/address"
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function AddressessList({ selectedAddress, updateSelectedAddress }: 
    { selectedAddress:IAddress | undefined, updateSelectedAddress:(address: IAddress | undefined) => void  }) {
    const user = useAppSelector(state => state.user)
    const [addressess, setAddressess] = useState<IAddress[]>([])
    
    //get address user from database
    const getData = async () => {
        const data: IAddress[] = await getUserAddressess(user.id)        
        setAddressess([...data])
        
        //select the primary address
        updateSelectedAddress(data.find((item) => item.isPrimary))
    }

    //load data when rendered
    useEffect(() => {
        getData()           
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Card className="flex flex-col p-2">
            <CardHeader>
                <h2 className="text-lg font-semibold">Alamat Pengiriman</h2>
            </CardHeader>
            <CardBody>
                {
                    !selectedAddress && 
                    <p className="text-danger">Alamat tidak ada, bikin alamat pengiriman agar paket bisa dikirim</p>
                }
                {
                    selectedAddress &&
                        <p className="">{selectedAddress?.addressLine}, {selectedAddress?.city}, {selectedAddress?.state}, {selectedAddress?.postalCode}</p>
                }
            </CardBody>
            <CardFooter className="flex justify-end w-full">
                <Button color="secondary" size="sm" variant="light">Buat Alamat Baru</Button>
                <Button color="secondary" size="sm" variant="light">Ganti Alamat</Button>
            </CardFooter>
        </Card>
    )
}
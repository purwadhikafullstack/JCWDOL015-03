import { IStore } from "@/type/store"
import { getToken } from "./server"

export const getStoreProducts = async (storeId: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}store/stocks/${storeId}`, {next: {revalidate: 1}})
    const { status, stock } = await res.json()
    
    return stock
}
export const getStoreOrders = async () => {
    const token = await getToken()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}store/order`, {
        headers: {
            
            "Content-type":"application/json",
            'Authorization': `Bearer ${token}`
        },
        next: { revalidate: 1 } })
    const { status, msg, order } = await res.json()
    
    return { status, msg, order }
}

export const getNearestStore = async (lat: number, lon: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}store/nearest?lat=${lat}&lon=${lon}`)
    const { status, msg }: { status: string, msg: IStore } = await res.json()

    return { status, msg }
}
export const getStoresList = async () => {
    const token = await getToken()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}store/`, {
        headers: {
            "Content-type":"application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    const { status, msg }: { status: string, msg: IStore[] } = await res.json()

    return { status, msg }
}


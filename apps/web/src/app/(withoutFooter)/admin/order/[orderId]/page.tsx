import OrderCard from "@/components/order/orderCard"
import { getAdminOrderById } from "@/lib/admin.handler"
import { getOrderById } from "@/lib/order.handler"
import { IOrder } from "@/type/order"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
    params: { orderId: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const orderId = params.orderId
   
    // fetch data
    const data: {status: string, msg: IOrder}= await getAdminOrderById(Number(orderId))
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: `Order No ${data.msg.id} | Bermuda Store`,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }

export default async function page({params}: { params: { orderId: string } }) {
    const data = await getAdminOrderById(Number(params.orderId))
    const order = data.msg as IOrder
    
    return (
        <div className="grid md:grid-cols-[1fr_3fr_1fr]">
            <OrderCard order={order} className="md:col-start-2 flex flex-col gap-2 my-2"/>
        </div>
    )
}
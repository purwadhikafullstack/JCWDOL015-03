import AcceptPaymentIcon from '@/components/icon/acceptPaymentIcon'
import CancelOrderIcon from '@/components/icon/cancelOrderIcon'
import DeniedPaymentIcon from '@/components/icon/deniedPaymentIcon'
import OpenFileIcon from '@/components/icon/OpenFileIcon'
import ShippingOrderIcon from '@/components/icon/ShipOrderIcon'
import { IOrder } from '@/type/order'
import React from 'react'
import TableActionTooltip from './tableActionTooltip'
import { useRouter } from 'next/navigation'
import OpenOrderIcon from '@/components/icon/openOrderIcon'
import { useDisclosure } from '@nextui-org/react'
import PaymentProofModal from '@/components/modal/paymentProofModal'

export default function AdminActionsCell({
    order, isAcceptAble,isCancelAble,isDenyAble,isImageExist,isShippedAble, onAccept, onCancel, onDeny, onShip
}: {
	order:IOrder,isImageExist: Boolean, isDenyAble: Boolean, isAcceptAble: Boolean, isCancelAble: Boolean, isShippedAble: Boolean,
	onDeny:(orderId: number) => void, onAccept:(orderId: number) => void, onCancel:(orderId: number) => void, onShip:(orderId: number) => void
}) {
	const router = useRouter()
	const {isOpen, onOpen, onOpenChange} = useDisclosure()
	const openOrder = () => {
		router.push(`/admin/order-management/${order.id}`)
	}

  return (
    <div className="flex gap-2">
						<TableActionTooltip content='Open Image' isDisabled={isImageExist} onClick={onOpen} noModal>
							<OpenFileIcon fill={!isImageExist? '#aaaaaa': undefined}/>
							<PaymentProofModal imgLink={order.paymentProofUrl!} isOpen={isOpen} onOpenChange={onOpenChange} title={`${order.id!}`} />
						</TableActionTooltip>
						<TableActionTooltip content='Deny Payment' isDisabled={isDenyAble} onClick={() => onDeny(order.id)}>
							<DeniedPaymentIcon fill={!isDenyAble? '#aaaaaa': undefined}/>
						</TableActionTooltip>
						<TableActionTooltip content='Accept Payment' isDisabled={isAcceptAble} onClick={() => onAccept(order.id)}>
							<AcceptPaymentIcon fill={!isAcceptAble? '#aaaaaa': undefined}/>
						</TableActionTooltip>
						<TableActionTooltip content='Cancel Order' isDisabled={isCancelAble} onClick={() => onCancel(order.id)}>
							<CancelOrderIcon fill={!isCancelAble? '#aaaaaa': undefined}/>
						</TableActionTooltip>
						<TableActionTooltip content='Deliver Order' isDisabled={isShippedAble} onClick={() => onShip(order.id)}>
							<ShippingOrderIcon fill={!isShippedAble? '#aaaaaa': undefined}/>
						</TableActionTooltip>
						<TableActionTooltip content='Look order' isDisabled={true} onClick={() => openOrder()} noModal>
							<OpenOrderIcon fill={!true? '#aaaaaa': undefined}/>
						</TableActionTooltip>
					</div>
  )
}

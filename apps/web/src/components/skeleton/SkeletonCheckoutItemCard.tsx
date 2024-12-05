import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export default function SkeletonCheckoutItemCard() {
  return (
    <Card>
        <CardHeader className="font-semibold">
            <h2>{`Item(s) checkout`}</h2>
        </CardHeader>
        <CardBody className="grid grid-rows-[auto] gap-2">
                <div className={`flex gap-2 items-center w-full`}>
                    <Skeleton className="w-[80px] h-[80px] rounded-lg" />
                    <div className={`flex flex-col justify-evenly md:h-full w-full`}>
                        <Skeleton className="w-1/5" />
                        <div className="flex justify-between">
                            <Skeleton className="w-1/5" />
                            <Skeleton className="w-1/5" />
                        </div>
                    </div>
                </div>
        </CardBody>
    </Card>
  )
}

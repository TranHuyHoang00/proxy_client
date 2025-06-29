import { ProxyIPV4 } from "@user/components/proxy/ProxyIPV4"
export const Proxy = () => {
    return (
        <div className="bg-white py-[100px] space-y-[20px] px-[25px] md:px-[50px] lg:px-[100px] xl:px-[200px]">
            <div>Bang Gia Proxy</div>
            <ProxyIPV4 />
        </div>
    )
}
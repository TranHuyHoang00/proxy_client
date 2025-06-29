
import { ProxyItem } from "@user/components/proxy/components/ProxyItem";
const dataDescriptions = [
    { id: 1, label: "Unlimited data" },
    { id: 2, label: "Long-term IP retention" },
    { id: 3, label: "Permanent static IP session" },
    { id: 4, label: "Get IPs from real ISPs" },
    { id: 5, label: "24/7 IP availability " },
]
export const ProxyIPV4Private = () => {
    return (
        <div className="space-y-[20px]">
            <div> Proxy IPV4 Private</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px] text-[#144f6c] ">
                <ProxyItem type="Private V4" title="Proxy Việt Nam" price="67.500" dataDescriptions={dataDescriptions} />
                <ProxyItem type="Private V4" title="Proxy Nước Ngoài" price="52.468" dataDescriptions={dataDescriptions} />
            </div>
        </div>
    )
}
import { ProxyIPV4Private } from "@user/components/proxy/ProxyIPV4Private"
import { ProxyIPV4Share } from "@user/components/proxy/ProxyIPV4Share"
export const Proxy = () => {
    return (
        <div>
            <div>Bang Gia Proxy</div>
            <ProxyIPV4Private />
            <ProxyIPV4Share />
        </div>
    )
}
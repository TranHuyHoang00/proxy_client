import { ProxyItem } from "@user/components/proxy/components/ProxyItem";
const dataDescriptions = [
  { id: 1, label: "Unlimited data" },
  { id: 2, label: "Long-term IP retention" },
  { id: 3, label: "Permanent static IP session" },
  { id: 4, label: "Get IPs from real ISPs" },
  { id: 5, label: "24/7 IP availability " },
];
export const ProxyIPV6Private = () => {
  return (
    <div
      className="py-[50px] px-[15px] sm:px-[25px] md:px-[50px] lg:px-[100px] xl:px-[200px]"
      style={{
        backgroundImage: 'url("/images/bg_proxy.webp")',
      }}
    >
      <div className="space-y-[20px]">
        <div className="text-center text-[30px] text-[#3e4150] font-[700]">
          <label>Proxy IPV6 Private</label>
        </div>
        <div className="text-center text-[14px] text-[#9ca1ac] pb-[10px]">
          <label>Empowering Your Business Success Across Various Fields</label>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px] text-[#144f6c] ">
          <ProxyItem
            flatType="VN"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Private V6"
            titleProxy="Proxy Việt Nam - Xoay"
            priceProxy="1.350"
            dataDescriptions={dataDescriptions}
          />
          <ProxyItem
            flatType="US"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Private V6"
            titleProxy="Proxy nước ngoài - Xoay"
            priceProxy="1.350"
            dataDescriptions={dataDescriptions}
          />
          <ProxyItem
            tagProxy="Hot"
            flatType="US"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Private V6"
            titleProxy="Proxy nước ngoài"
            priceProxy="351"
            dataDescriptions={dataDescriptions}
          />
        </div>
      </div>
    </div>
  );
};

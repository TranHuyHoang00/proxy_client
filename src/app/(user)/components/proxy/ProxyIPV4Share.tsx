"use client";
import { ProxyItem } from "@user/components/proxy/components/ProxyItem";
const dataDescriptions = [
  { id: 1, label: "Unlimited data" },
  { id: 2, label: "Long-term IP retention" },
  { id: 3, label: "Permanent static IP session" },
  { id: 4, label: "Get IPs from real ISPs" },
  { id: 5, label: "24/7 IP availability " },
];
export const ProxyIPV4Share = () => {
  return (
    <div
      className="py-[50px] px-[15px] sm:px-[25px] md:px-[50px] lg:px-[100px] xl:px-[200px]"
      style={{
        backgroundImage: 'url("/images/bg_proxy.webp")',
      }}
    >
      <div className="space-y-[20px]">
        <div className="text-center text-[30px] text-[#3e4150] font-[700]">
          <label>Proxy IPV4 Share</label>
        </div>
        <div className="text-center text-[14px] text-[#9ca1ac] pb-[10px]">
          <label>Empowering Your Business Success Across Various Fields</label>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px] text-[#144f6c] ">
          <ProxyItem
            flatType="VN"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Share V4"
            titleProxy="Proxy Việt Nam - Dân cư nhà mạng tĩnh"
            priceProxy="800"
            dataDescriptions={dataDescriptions}
          />
          <ProxyItem
            tagProxy="Hot"
            flatType="VN"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Share V4"
            titleProxy="Proxy Việt Nam - Datacenter tĩnh"
            priceProxy="800"
            dataDescriptions={dataDescriptions}
          />
          <ProxyItem
            flatType="VN"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Share V4"
            titleProxy="Proxy Việt Nam - Dân cư nhà mạng xoay"
            priceProxy="4.600"
            dataDescriptions={dataDescriptions}
            unitProxy="GB"
          />
          <ProxyItem
            flatType="US"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Share V4"
            titleProxy="Proxy nước ngoài - Dân cư tĩnh"
            priceProxy="700"
            dataDescriptions={dataDescriptions}
          />
          <ProxyItem
            tagProxy="Hot"
            flatType="US"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Share V4"
            titleProxy="Proxy nước ngoài - Datacenter tĩnh"
            priceProxy="480"
            dataDescriptions={dataDescriptions}
          />
          <ProxyItem
            flatType="US"
            titleTime="1 Ngày"
            timeType="01"
            typeProxy="Share V4"
            titleProxy="Proxy nước ngoài - Dân cư nhà mạng xoay"
            priceProxy="4.600"
            dataDescriptions={dataDescriptions}
            unitProxy="GB"
          />
        </div>
      </div>
    </div>
  );
};

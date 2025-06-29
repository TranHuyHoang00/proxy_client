
import Image from "next/image";
import Image30Day from "@assets/images/30_day.webp";
import { FaCheck } from "react-icons/fa";
import "@user/components/proxy/Proxy.css"
type ProxyItemProps = {
    type: string;
    title: string;
    price: string;
    dataDescriptions: any[];
}
export const ProxyItem = ({ type, title, price, dataDescriptions }: ProxyItemProps) => {
    return (
        <div className="relative p-[25px] rounded-[15px] grid-item-default-gradient text-[#144f6c]">
            <div className="absolute left-0 top-0 h-[120px] w-full bg-[linear-gradient(180deg,rgba(179,230,255,0.4),rgba(179,230,255,0))] rounded-t-[15px]"></div>
            <div className="absolute right-[10px] bottom-[10px] p-[5px] rounded-[5px] gradient-border bg-white">
                <span className="gradient-text">{type}</span>
            </div>
            <div className="relative">
                <div className="text-center space-y-[15px]">
                    <div className="flex items-center justify-center">
                        <Image src={Image30Day} alt="proxy-30-ngay"
                            loading="lazy" className="h-[50px] w-auto" />
                    </div>
                    <div className="font-[700] text-[18px]"><label>30 Ngày</label></div>
                    <div className="font-[700] text-[22px]">
                        <label >{title}</label>
                    </div>
                    <div className="text-[40px] text-[#13c8e6] font-[700]">
                        <label >{price}<label className="text-[18px]"> VNĐ</label></label>
                    </div>
                    <div className="py-[5px]">
                        <button className="gradient-border w-full h-[50px] rounded-full cursor-pointer">
                            <span className="gradient-text font-medium text-[18px]">Mua Ngay</span>
                        </button>
                    </div>
                    <div className="text-[14px] text-[#3e4150] space-y-[15px]">
                        {dataDescriptions && dataDescriptions.map((item) => {
                            return (
                                <div key={item?.id} className="flex items-center gap-x-[10px]">
                                    <FaCheck className="text-[16px] text-[#02d016]" />
                                    <label className="break-words whitespace-normal">{item?.label}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
"use client";
import { ProxyIPV4Private } from "@user/components/proxy/ProxyIPV4Private";
import { ProxyIPV4Share } from "@user/components/proxy/ProxyIPV4Share";
import { ProxyIPV6Private } from "@user/components/proxy/ProxyIPV6Private";
import { ProxyComboIPV4 } from "@user/components/proxy/ProxyComboIPV4";
export const Proxy = () => {
  return (
    <div>
      <ProxyComboIPV4 />
      <ProxyIPV4Private />
      <ProxyIPV4Share />
      <ProxyIPV6Private />
    </div>
  );
};

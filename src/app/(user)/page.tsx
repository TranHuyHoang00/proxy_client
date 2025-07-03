import { MapProxy } from "@user/components/map_proxy/MapProxy";
import { Worldwide } from "@user/components/worldwide/Worldwide";
import { Proxy } from "@user/components/proxy/Proxy";
import { Banner } from "@user/components/banner/Banner";
const PageUser = () => {
  return (
    <div>
      <Banner />
      <Proxy />
      {/* <MapProxy /> */}
      {/* <Worldwide /> */}
    </div>
  );
};
export default PageUser;

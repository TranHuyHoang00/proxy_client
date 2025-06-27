"use client";
import Image from "next/image";
import ImageWorldMap from "@assets/images/world_map.webp";
import ImageFlagCanada from "@assets/images/flag_canada.svg";
import ImageFlagUs from "@assets/images/flag_us.svg";
import ImageFlagMexico from "@assets/images/flag_mexico.svg";
import ImageFlagBrazil from "@assets/images/flag_brazil.svg";
import ImageFlagArgentina from "@assets/images/flag_argentina.svg";
import ImageFlagFrance from "@assets/images/flag_france.svg";
import ImageFlagMalaysia from "@assets/images/flag_malaysia.svg";
import ImageFlagPhilippines from "@assets/images/flag_philippines.svg";
import ImageArrowRight from "@assets/images/arrow-right.svg";
export const MapProxy = () => {
  return (
    <article className="index-white-module">
      <div className="index-module-box w1400">
        <div className="worldwide-box">
          <h2 className="worldwide-box-title">Unlock Web data Worldwide</h2>
          <div className="worldwide-box-title-tip">
            PYPROXY provides high-quality proxies in most regions all around the
            world. Target the country or city you need to unlock sites and data
            there.
          </div>
          <div className="worldwide-content">
            <div
              className="worldwide-content-map-box minpage__horizontal__scrolle"
              data-index="0"
            >
              <div className="worldwide-map">
                <Image
                  className="map"
                  alt="mua-proxy"
                  loading="lazy"
                  src={ImageWorldMap}
                />

                <div className="map-country-node map-country-node1 map-country-node-top">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagCanada}
                        alt="proxy-Canada"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">Canada</div>
                      <div className="map-country-num">231,080 IPs</div>
                    </div>
                  </div>
                </div>

                <div className="map-country-node map-country-node2 map-country-node-right">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagUs}
                        alt="proxy-USA"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">USA</div>
                      <div className="map-country-num">1,293,640 IPs</div>
                    </div>
                  </div>
                </div>

                <div className="map-country-node map-country-node3 map-country-node-left">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagMexico}
                        alt="proxy-Mexico"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">Mexico</div>
                      <div className="map-country-num">2,138,920 IPs</div>
                    </div>
                  </div>
                </div>

                <div className="map-country-node map-country-node4 map-country-node-top">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagBrazil}
                        alt="proxy-Brazil"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">Brazil</div>
                      <div className="map-country-num">4,726,806 IPs</div>
                    </div>
                  </div>
                </div>

                <div className="map-country-node map-country-node5 map-country-node-bottom">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagArgentina}
                        alt="proxy-Argentina"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">Argentina</div>
                      <div className="map-country-num">1,034,820 IPs</div>
                    </div>
                  </div>
                </div>
                <div className="map-country-node map-country-node6 map-country-node-bottom">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagFrance}
                        alt="proxy-France"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">France</div>
                      <div className="map-country-num">905,340 IPs</div>
                    </div>
                  </div>
                </div>
                <div className="map-country-node map-country-node8 map-country-node-bottom">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagMalaysia}
                        alt="proxy-Malaysia"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">Malaysia</div>
                      <div className="map-country-num">1,520,080 IPs</div>
                    </div>
                  </div>
                </div>
                <div className="map-country-node map-country-node9 map-country-node-right">
                  <div className="map-icon map__icon"></div>
                  <div className="map-country map__icon_country">
                    <div className="map-country-flag">
                      <Image
                        className="flag-icon"
                        src={ImageFlagPhilippines}
                        alt="proxy-Philippines"
                        loading="lazy"
                      />
                    </div>
                    <div className="map-country-detail">
                      <div className="map-country-name">Philippines</div>
                      <div className="map-country-num">1,616,220 IPs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="map_country_list">
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagCanada}
                    alt="proxy-Canada"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">Canada</div>
                  <div className="map-country-num">231,080 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagUs}
                    alt="proxy-USA"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">USA</div>
                  <div className="map-country-num">1,293,640 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagMexico}
                    alt="proxy-Mexico"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">Mexico</div>
                  <div className="map-country-num">2,138,920 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagBrazil}
                    alt="proxy-Brazil"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">Brazil</div>
                  <div className="map-country-num">4,726,806 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagArgentina}
                    alt="proxy-Argentina"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">Argentina</div>
                  <div className="map-country-num">1,034,820 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagFrance}
                    alt="proxy-France"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">France</div>
                  <div className="map-country-num">905,340 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagMalaysia}
                    alt="proxy-Malaysia"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">Malaysia</div>
                  <div className="map-country-num">1,520,080 IPs</div>
                </div>
              </div>
              <div className="map-country">
                <div className="map-country-flag">
                  <Image
                    className="flag-icon"
                    src={ImageFlagPhilippines}
                    alt="proxy-Philippines"
                    loading="lazy"
                  />
                </div>
                <div className="map-country-detail">
                  <div className="map-country-name">Philippines</div>
                  <div className="map-country-num">1,616,220 IPs</div>
                </div>
              </div>
            </div>
            <div className="worldwide-content-btn">
              <button className="btn py_btn">
                <span>See All Locations</span>
                <span className="btn-Image no">
                  <Image
                    src={ImageArrowRight}
                    alt="arrow-right"
                    loading="lazy"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

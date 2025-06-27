"use client";
import Image from "next/image";
import ImageHistoryCourse from "@assets/images/history_course.webp";
import ImageHistoryTeam from "@assets/images/history_team.svg";
import ImageHistoryProduct from "@assets/images/history_product.svg";
import ImageHistoryS5 from "@assets/images/history_s5.svg";
import ImageHistoryUnlimited from "@assets/images/history_unlimited.svg";
import ImageHistoryReseller from "@assets/images/history_reseller.svg";
import ImageHistoryDC from "@assets/images/history_dc.svg";
import ImageHistoryWallet from "@assets/images/history_wallet.svg";
import ImageArrowRight from "@assets/images/arrow-right.svg";
export const Worldwide = () => {
  return (
    <article className="index-grey-module index-history-module">
      <div className="index-module-box w1400">
        <div className="history-box">
          <h2 className="history-box-title">Product History of PYPROXY</h2>
          <div className="history-content">
            <div
              className="history-content-course minpage__horizontal__scrolle"
              data-index="1"
            >
              <div className="course-map">
                <Image
                  className="map"
                  alt="history-course"
                  loading="lazy"
                  src={ImageHistoryCourse}
                />
                <div className="course-comet"></div>
                <div className="history-node history-node1 history-node-bottom">
                  <div className="history-node-icon">
                    <div className="history-node-date">Mar 2016</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon">
                      <Image
                        className="icon"
                        src={ImageHistoryTeam}
                        alt="Company Founded"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>Company Founded</span>
                    </div>
                  </div>
                </div>
                <div className="history-node history-node2 history-node-top">
                  <div className="history-node-icon">
                    <div className="history-node-date">Apr 2022</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon">
                      <Image
                        className="icon"
                        src={ImageHistoryProduct}
                        alt="New Product Released"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>New Product Released</span>
                    </div>
                  </div>
                </div>
                <div className="history-node history-node3 history-node-right">
                  <div className="history-node-icon">
                    <div className="history-node-date">Aug 2022</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon">
                      <Image
                        className="icon"
                        src={ImageHistoryS5}
                        alt="S5 Proxies"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>S5 Proxies</span>
                    </div>
                  </div>
                </div>
                <div className="history-node history-node4 history-node-top">
                  <div className="history-node-icon">
                    <div className="history-node-date">Oct 2022</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon history-node-content-icon-width">
                      <Image
                        className="icon"
                        src={ImageHistoryUnlimited}
                        alt="Unlimited Resi Proxies"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>Unlimited Resi Proxies</span>
                    </div>
                  </div>
                </div>
                <div className="history-node history-node5 history-node-bottom">
                  <div className="history-node-icon">
                    <div className="history-node-date">Mar 2023</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon">
                      <Image
                        className="icon"
                        src={ImageHistoryReseller}
                        alt="Reseller System"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>Reseller System</span>
                    </div>
                  </div>
                </div>
                <div className="history-node history-node6 history-node-bottom">
                  <div className="history-node-icon">
                    <div className="history-node-date">Apr 2023</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon">
                      <Image
                        className="icon"
                        src={ImageHistoryDC}
                        alt="Datacenter Proxies"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>Datacenter Proxies</span>
                    </div>
                  </div>
                </div>
                <div className="history-node history-node7 history-node-bottom">
                  <div className="history-node-icon">
                    <div className="history-node-date">Jul 2023</div>
                  </div>
                  <div className="history-node-content">
                    <div className="history-node-content-icon">
                      <Image
                        className="icon"
                        src={ImageHistoryWallet}
                        alt="PY Wallet"
                        loading="lazy"
                      />
                    </div>
                    <div className="history-node-content-text">
                      <span>PY Wallet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-content-btn">
              <button className="btn py_btn">
                <span>Learn more</span>
                <span className="btn-img no">
                  <Image src={ImageArrowRight} alt="arrow" loading="lazy" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

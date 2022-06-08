import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/progressbar.module.css";
import Barchart from "chart/Barchart";
const zIndex = () => {
  return (
    <Layout title="Inso | Stats" bgColor="bg-gray-background">
      <div className="py-25 px-40">
        {" "}
        <div className=" rounded-sm  px-32 h-81  bg-white-white w-full flex items-center justify-start  gap-40 vp-min-601:gap-20 vp-min-601:justify-between shadow-xs mb-61">
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText text-xs">Discussions created</p>
            <h3 className=" text-primary-darkGreen">4</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText text-xs">Posts made</p>
            <h3 className=" text-primary-darkGreen">114</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText text-xs">Posts read</p>
            <h3 className=" text-primary-darkGreen">132</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText text-xs">Comments received</p>
            <h3 className=" text-primary-darkGreen">100</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText text-xs">Upvotes received</p>
            <h3 className=" text-primary-darkGreen">38</h3>
          </div>
          <div className="flex flex-col  items-start">
            <p className="  text-black-analText text-xs">Reactions made</p>
            <h3 className=" text-primary-darkGreen">14</h3>
          </div>
        </div>
        <div className=" grid grid-cols-7 gap-14 mb-41">
          <div className=" col-span-4">
            {" "}
            <h4 className=" text-primary-darkGreen mb-15">Achievements</h4>
            <div className=" px-30 vp-min-601:px-15 py-13 h-auto rounded-xl bg-white-white shadow-lg">
              <div className="flex justify-between mb-14">
                <p className=" text-primary-darkGreen">
                  Badges <span className=" text-other-disabledText">(2)</span>{" "}
                </p>
                <Link passHref href="/badges">
                  <h6 className="  cursor-pointer text-primary-blue">
                    View all{" "}
                  </h6>
                </Link>
              </div>
              <div className="mb-36 flex items-center gap-10">
                <Image
                  src="/illustrations/badge.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_love.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
                <Image
                  src="/illustrations/badge_empty.svg"
                  alt=" Discussion dropdown "
                  draggable="false"
                  layout="fixed"
                  width="33"
                  height="45"
                />
              </div>
              <div className="">
                <p className=" text-primary-darkGreen mb-15">
                  Progress tracker
                </p>
                <div className="grid grid-cols-2">
                  <div className="pr-25">
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-150 h-30 rounded px-14   text-xs flex items-center mr-10">
                        Make exactly 10 posts
                      </div>
                      <div className="w-100  bg-blue-progressBlue h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <progress
                          className={`${styles.progressBarBadge} w-full`}
                          value={65}
                          max={100}
                        />
                        <h6> In progress</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-150 h-30 rounded px-14   text-xs flex items-center mr-10">
                        Give 30 upvotes
                      </div>
                      <div className="w-100  bg-blue-progressBlue h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <progress
                          className={`${styles.progressBarBadge} w-full`}
                          value={20}
                          max={100}
                        />
                        <h6> In progress</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-150 h-30 rounded px-14   text-xs flex items-center mr-10">
                        Obtain a max score
                      </div>
                      <div className="w-100 bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                  </div>
                  <div className="border border-blue-inputBlue pl-25 flex flex-col items-end">
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-150 h-30 rounded px-14   text-xs flex items-center mr-10">
                        Reply in a thread
                      </div>
                      <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-150 h-30 rounded px-14   text-xs flex items-center mr-10">
                        Reply in a thread
                      </div>
                      <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                    <div className=" flex items-center mb-7">
                      <div className=" bg-green-lightGreen w-150 h-30 rounded px-14   text-xs flex items-center mr-10">
                        Reply in a thread
                      </div>
                      <div className="w-100  bg-other-disabled h-30 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                        <h6> Undone</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 flex flex-col">
            {" "}
            <h4 className=" text-primary-darkGreen mb-15">Active days</h4>
            <div className=" h-272 rounded-xl bg-white-white shadow-lg flex-grow flex justify-between flex-col  py-14 px-22  vp-min-601:px-15 ">
              <div className="mb-40 flex items-center gap-4">
                <div className=" flex-grow h-34 px-21   bg-border-green  rounded-xl  flex items-center ">
                  <p className=" text-black-analText mr-14">
                    Discussion set / Discussions
                  </p>
                  <Image
                    src="/icons/arrow_down_green.svg"
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="fixed"
                    width="10"
                    height="5"
                  />
                </div>
                <div className=" h-34  bg-other-lightRed  rounded-xl px-15 vp-min-601:px-10  flex items-center ">
                  <Image
                    src="/icons/clock.svg"
                    alt=" Discussion dropdown "
                    draggable="false"
                    layout="fixed"
                    width="14"
                    height="14"
                  />
                  <span className=" text-black-analText text-xs  ml-15 vp-min-601:ml-2">
                    <span className=" text-other-danger">14</span> days to close
                    date
                  </span>
                </div>
              </div>
              <Barchart
                title="Product Sales"
                thick={9}
                labels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "May",
                  "Jun",
                  "Jul",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ]}
                barData={[
                  12, 19, 3, 5, 2, 12, 19, 3, 12, 19, 3, 10, 19, 3, 19, 3, 12,
                  19, 3, 19, 3, 12, 19, 3,
                ]}
              />
              <div className="flex justify-between w-full items-center">
                <p className="text-black-analText">Mar 1 </p>
                <p className="text-black-analText">Mar 28 </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-7 gap-14">
          <div className=" col-span-5">
            <h4 className=" text-primary-darkGreen mb-15">Stats</h4>
            <div className="  h-272 rounded-xl bg-white-white shadow-lg"></div>
          </div>
          <div className=" col-span-2">
            {" "}
            <h4 className="  text-white-white mb-15">Active days</h4>
            <div className=" h-272 rounded-xl bg-white-white shadow-lg"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default zIndex;

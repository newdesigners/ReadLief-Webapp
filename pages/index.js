import { useState } from "react"
import NavBar from "../components/NavBar"
import TrendingBar from "../components/TrendingBar"
import ChartComponent from "../components/ChartComponent"
import Groupchat from "../components/Groupchat";

import Footer from "../components/Footer";

export default function Home() {

  const data = [
    { value: 25, color: "#CF8AB7", name: "Airport" },
    { value: 68, color: "#1F355C", name: "Train" },
    { value: 42, color: "#F08833", name: "Cars" },
    { value: 49, color: "#49A489", name: "Boat" },
  ];

  return (
    <div className="w-full">
      <NavBar />

      <div className="w-10/12 m-auto flex gap-6 mt-20 h-fit">
        <div className="w-1/2">
          <div className="bg-appGrey h-fit pb-10 rounded-md">
            <p className="w-full text-center mt-4 mb-4 pt-3 font-medium text-2xl">Trending topics</p>

            <div className="w-full flex flex-col gap-5">
              <TrendingBar index={1} label="Transport" value={0.70} percentage={38} />
              <TrendingBar index={2} label="Payment" value={0.55} percentage={21} />
              <TrendingBar index={3} label="Shelter" value={0.45} percentage={12} />
              <TrendingBar index={4} label="Human" value={0.36} percentage={8} />
              <TrendingBar index={5} label="Contact" value={0.31} percentage={6} />
              <TrendingBar index={6} label="Questions" value={0.29} percentage={5} />
              <TrendingBar index={7} label="Country" value={0.29} percentage={5} />
              <TrendingBar index={8} label="Red Cross" value={0.29} percentage={5} />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="bg-appGrey h-fit rounded-md">
            <p className="text-center w-full mb-4 mt-4 pt-3 font-medium text-2xl">Transport</p>
            <div className="w-96 flex gap-1 items-center justify-center ml-10 pb-4">
              <ChartComponent data={data} />
            </div>
          </div>
          <div className="bg-appGrey h-fit rounded-md pb-6">
            <p className="mt-4 mr-8 pt-3 text-appRed underline text-right text-base">more detail</p>
            <p className="text-center w-full mb-4 font-medium text-2xl">Telegram group overview</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 mx-8">
              <Groupchat logo={4} />
              <Groupchat logo={1} />
              <Groupchat logo={3} />
              <Groupchat logo={7} />
              <Groupchat logo={3} />
              <Groupchat logo={2} deleted={true} />
              <Groupchat logo={3} />
              <Groupchat logo={6} />
              <Groupchat logo={5} />

              <div onClick={() => window.location.href = "/messages"} className="border-2 flex items-center justify-center border-appBlue bg-appBlue rounded-md hover:cursor-pointer">
                <svg width="74" height="79" viewBox="0 0 74 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.34863 72L8.37109 69.2246H4.5498L3.57227 72H1.84277L5.56152 61.9648H7.37988L11.0918 72H9.34863ZM7.94727 67.8164L6.99707 65.082C6.96061 64.9635 6.9082 64.7972 6.83984 64.583C6.77148 64.3643 6.70312 64.1432 6.63477 63.9199C6.56641 63.6921 6.50944 63.5007 6.46387 63.3457C6.41829 63.5326 6.36133 63.7422 6.29297 63.9746C6.22917 64.2025 6.16536 64.4167 6.10156 64.6172C6.04232 64.8177 5.99674 64.9727 5.96484 65.082L5.00781 67.8164H7.94727ZM14.79 72.1367C13.8877 72.1367 13.1631 71.8086 12.6162 71.1523C12.0739 70.4915 11.8027 69.5186 11.8027 68.2334C11.8027 66.9346 12.0785 65.9525 12.6299 65.2871C13.1859 64.6217 13.9173 64.2891 14.8242 64.2891C15.207 64.2891 15.542 64.3415 15.8291 64.4463C16.1162 64.5465 16.3623 64.6833 16.5674 64.8564C16.777 65.0296 16.9548 65.2233 17.1006 65.4375H17.1758C17.153 65.2962 17.1257 65.0934 17.0938 64.8291C17.0664 64.5602 17.0527 64.3118 17.0527 64.084V61.3633H18.666V72H17.4082L17.1211 70.9678H17.0527C16.916 71.1865 16.7428 71.3848 16.5332 71.5625C16.3281 71.7357 16.082 71.8747 15.7949 71.9795C15.5124 72.0843 15.1774 72.1367 14.79 72.1367ZM15.2412 70.8311C15.9294 70.8311 16.4147 70.6328 16.6973 70.2363C16.9798 69.8398 17.1257 69.2451 17.1348 68.4521V68.2402C17.1348 67.3926 16.998 66.7432 16.7246 66.292C16.4512 65.8363 15.9521 65.6084 15.2275 65.6084C14.6488 65.6084 14.2067 65.8431 13.9014 66.3125C13.6006 66.7773 13.4502 67.4268 13.4502 68.2607C13.4502 69.0947 13.6006 69.7327 13.9014 70.1748C14.2067 70.6123 14.6533 70.8311 15.2412 70.8311ZM23.5127 72.1367C22.6104 72.1367 21.8857 71.8086 21.3389 71.1523C20.7965 70.4915 20.5254 69.5186 20.5254 68.2334C20.5254 66.9346 20.8011 65.9525 21.3525 65.2871C21.9085 64.6217 22.64 64.2891 23.5469 64.2891C23.9297 64.2891 24.2646 64.3415 24.5518 64.4463C24.8389 64.5465 25.085 64.6833 25.29 64.8564C25.4997 65.0296 25.6774 65.2233 25.8232 65.4375H25.8984C25.8757 65.2962 25.8483 65.0934 25.8164 64.8291C25.7891 64.5602 25.7754 64.3118 25.7754 64.084V61.3633H27.3887V72H26.1309L25.8438 70.9678H25.7754C25.6387 71.1865 25.4655 71.3848 25.2559 71.5625C25.0508 71.7357 24.8047 71.8747 24.5176 71.9795C24.235 72.0843 23.9001 72.1367 23.5127 72.1367ZM23.9639 70.8311C24.652 70.8311 25.1374 70.6328 25.4199 70.2363C25.7025 69.8398 25.8483 69.2451 25.8574 68.4521V68.2402C25.8574 67.3926 25.7207 66.7432 25.4473 66.292C25.1738 65.8363 24.6748 65.6084 23.9502 65.6084C23.3714 65.6084 22.9294 65.8431 22.624 66.3125C22.3232 66.7773 22.1729 67.4268 22.1729 68.2607C22.1729 69.0947 22.3232 69.7327 22.624 70.1748C22.9294 70.6123 23.376 70.8311 23.9639 70.8311ZM35.4893 75.3633C34.4639 75.3633 33.6777 75.1787 33.1309 74.8096C32.584 74.4404 32.3105 73.9232 32.3105 73.2578C32.3105 72.793 32.4564 72.3988 32.748 72.0752C33.0397 71.7562 33.4567 71.5352 33.999 71.4121C33.7939 71.321 33.6162 71.1797 33.4658 70.9883C33.32 70.7923 33.2471 70.5758 33.2471 70.3389C33.2471 70.0563 33.3268 69.8148 33.4863 69.6143C33.6458 69.4137 33.8851 69.2201 34.2041 69.0332C33.8076 68.8646 33.4886 68.5911 33.2471 68.2129C33.0101 67.8301 32.8916 67.3812 32.8916 66.8662C32.8916 66.3193 33.0078 65.8545 33.2402 65.4717C33.4727 65.0843 33.8122 64.7904 34.2588 64.5898C34.7054 64.3848 35.2454 64.2822 35.8789 64.2822C36.0156 64.2822 36.1637 64.2913 36.3232 64.3096C36.4873 64.3232 36.6377 64.3415 36.7744 64.3643C36.9157 64.3825 37.0228 64.403 37.0957 64.4258H39.7139V65.3213L38.4287 65.5605C38.5518 65.7337 38.6497 65.932 38.7227 66.1553C38.7956 66.374 38.832 66.6133 38.832 66.873C38.832 67.6569 38.5609 68.2744 38.0186 68.7256C37.4808 69.1722 36.738 69.3955 35.79 69.3955C35.5622 69.3864 35.3411 69.3682 35.127 69.3408C34.9629 69.4411 34.8376 69.5527 34.751 69.6758C34.6644 69.7943 34.6211 69.9287 34.6211 70.0791C34.6211 70.2021 34.6644 70.3024 34.751 70.3799C34.8376 70.4528 34.9652 70.5075 35.1338 70.5439C35.307 70.5804 35.5166 70.5986 35.7627 70.5986H37.0684C37.8978 70.5986 38.5312 70.7741 38.9688 71.125C39.4062 71.4759 39.625 71.9909 39.625 72.6699C39.625 73.5312 39.2695 74.1943 38.5586 74.6592C37.8477 75.1286 36.8245 75.3633 35.4893 75.3633ZM35.5508 74.2354C36.1113 74.2354 36.583 74.1807 36.9658 74.0713C37.3486 73.9619 37.638 73.8047 37.834 73.5996C38.0299 73.3991 38.1279 73.1598 38.1279 72.8818C38.1279 72.6357 38.0664 72.4466 37.9434 72.3145C37.8203 72.1823 37.6357 72.0911 37.3896 72.041C37.1436 71.9909 36.8382 71.9658 36.4736 71.9658H35.2842C34.988 71.9658 34.7259 72.0114 34.498 72.1025C34.2702 72.1982 34.0924 72.335 33.9648 72.5127C33.8418 72.6904 33.7803 72.9046 33.7803 73.1553C33.7803 73.5016 33.9329 73.7682 34.2383 73.9551C34.5482 74.1419 34.9857 74.2354 35.5508 74.2354ZM35.8652 68.3428C36.3346 68.3428 36.6833 68.2152 36.9111 67.96C37.139 67.7002 37.2529 67.3356 37.2529 66.8662C37.2529 66.3558 37.1344 65.973 36.8975 65.7178C36.665 65.4626 36.3187 65.335 35.8584 65.335C35.4072 65.335 35.0632 65.4648 34.8262 65.7246C34.5938 65.9844 34.4775 66.3695 34.4775 66.8799C34.4775 67.3402 34.5938 67.7002 34.8262 67.96C35.0632 68.2152 35.4095 68.3428 35.8652 68.3428ZM44.9297 64.2891C45.0573 64.2891 45.1963 64.2959 45.3467 64.3096C45.4971 64.3232 45.627 64.3415 45.7363 64.3643L45.5859 65.8682C45.4902 65.8408 45.3717 65.8203 45.2305 65.8066C45.0938 65.793 44.9707 65.7861 44.8613 65.7861C44.5742 65.7861 44.3008 65.834 44.041 65.9297C43.7812 66.0208 43.5511 66.1621 43.3506 66.3535C43.1501 66.5404 42.9928 66.7751 42.8789 67.0576C42.765 67.3402 42.708 67.6683 42.708 68.042V72H41.0947V64.4326H42.3525L42.5713 65.7656H42.6465C42.7969 65.4967 42.9837 65.2507 43.207 65.0273C43.4303 64.804 43.6855 64.6263 43.9727 64.4941C44.2643 64.3574 44.5833 64.2891 44.9297 64.2891ZM53.8369 68.1992C53.8369 68.8281 53.7549 69.3864 53.5908 69.874C53.4268 70.3617 53.1875 70.7741 52.873 71.1113C52.5586 71.444 52.1803 71.6992 51.7383 71.877C51.2962 72.0501 50.7972 72.1367 50.2412 72.1367C49.7217 72.1367 49.2454 72.0501 48.8125 71.877C48.3796 71.6992 48.0036 71.444 47.6846 71.1113C47.3701 70.7741 47.1263 70.3617 46.9531 69.874C46.7799 69.3864 46.6934 68.8281 46.6934 68.1992C46.6934 67.3652 46.8369 66.6589 47.124 66.0801C47.4157 65.4967 47.8304 65.0524 48.3682 64.7471C48.9059 64.4417 49.5462 64.2891 50.2891 64.2891C50.9863 64.2891 51.6016 64.4417 52.1348 64.7471C52.668 65.0524 53.085 65.4967 53.3857 66.0801C53.6865 66.6634 53.8369 67.3698 53.8369 68.1992ZM48.3477 68.1992C48.3477 68.7507 48.4137 69.2223 48.5459 69.6143C48.6826 70.0062 48.8923 70.307 49.1748 70.5166C49.4574 70.7217 49.8219 70.8242 50.2686 70.8242C50.7152 70.8242 51.0798 70.7217 51.3623 70.5166C51.6449 70.307 51.8522 70.0062 51.9844 69.6143C52.1165 69.2223 52.1826 68.7507 52.1826 68.1992C52.1826 67.6478 52.1165 67.1807 51.9844 66.7979C51.8522 66.4105 51.6449 66.1165 51.3623 65.916C51.0798 65.7109 50.7129 65.6084 50.2617 65.6084C49.5964 65.6084 49.111 65.8317 48.8057 66.2783C48.5003 66.7249 48.3477 67.3652 48.3477 68.1992ZM62.2793 64.4326V72H61.0146L60.7959 70.9814H60.707C60.5475 71.2412 60.3447 71.4577 60.0986 71.6309C59.8525 71.7995 59.5791 71.9248 59.2783 72.0068C58.9775 72.0934 58.6608 72.1367 58.3281 72.1367C57.7585 72.1367 57.2708 72.041 56.8652 71.8496C56.4642 71.6536 56.1566 71.3529 55.9424 70.9473C55.7282 70.5417 55.6211 70.0176 55.6211 69.375V64.4326H57.2344V69.0742C57.2344 69.6621 57.3529 70.1019 57.5898 70.3936C57.8314 70.6852 58.2051 70.8311 58.7109 70.8311C59.1986 70.8311 59.5859 70.7308 59.873 70.5303C60.1602 70.3298 60.363 70.0335 60.4814 69.6416C60.6045 69.2497 60.666 68.7689 60.666 68.1992V64.4326H62.2793ZM68.4658 64.2891C69.3636 64.2891 70.0837 64.6172 70.626 65.2734C71.1729 65.9297 71.4463 66.9049 71.4463 68.1992C71.4463 69.056 71.3187 69.7783 71.0635 70.3662C70.8128 70.9495 70.4596 71.3916 70.0039 71.6924C69.5527 71.9886 69.0264 72.1367 68.4248 72.1367C68.042 72.1367 67.7093 72.0866 67.4268 71.9863C67.1442 71.8861 66.9027 71.7562 66.7021 71.5967C66.5016 71.4326 66.333 71.2549 66.1963 71.0635H66.1006C66.1234 71.2458 66.1439 71.4486 66.1621 71.6719C66.1849 71.8906 66.1963 72.0911 66.1963 72.2734V75.3564H64.583V64.4326H65.8955L66.1211 65.4785H66.1963C66.3376 65.2643 66.5085 65.0661 66.709 64.8838C66.9141 64.7015 67.1602 64.5579 67.4473 64.4531C67.7389 64.3438 68.0785 64.2891 68.4658 64.2891ZM68.0352 65.6016C67.5931 65.6016 67.2376 65.6904 66.9688 65.8682C66.7044 66.0413 66.5107 66.3034 66.3877 66.6543C66.2692 67.0052 66.2054 67.445 66.1963 67.9736V68.1992C66.1963 68.7598 66.2533 69.236 66.3672 69.6279C66.4857 70.0153 66.6794 70.3115 66.9482 70.5166C67.2217 70.7171 67.5908 70.8174 68.0557 70.8174C68.4476 70.8174 68.7712 70.7103 69.0264 70.4961C69.2861 70.2819 69.4798 69.9766 69.6074 69.5801C69.735 69.1836 69.7988 68.7165 69.7988 68.1787C69.7988 67.363 69.653 66.7295 69.3613 66.2783C69.0742 65.8271 68.6322 65.6016 68.0352 65.6016Z" fill="white" />
                  <circle cx="37" cy="25.2692" r="25" fill="#A5C6EB" fill-opacity="0.5" />
                  <g clip-path="url(#clip0_73_3)">
                    <path d="M47.4342 26.1392H38.1392V35.4342H35.0408V26.1392H25.7458V23.0408H35.0408V13.7458H38.1392V23.0408H47.4342V26.1392Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_73_3">
                      <rect width="37.18" height="37.18" fill="white" transform="translate(18 6)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  )
}
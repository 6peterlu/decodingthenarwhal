import HandwrittenNoteSvg from "../../resources/HandwrittenNote.svg";
import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export default function HandwrittenNote({
  animatePercentage,
}: {
  animatePercentage: number;
}) {
  return (
    <div>
      <svg
        width="408"
        height="169"
        viewBox="0 0 408 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2.25098 29.5354V56.7812"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          animate={{ pathLength: animatePercentage }}
        />
        <motion.path
          d="M1.57031 30.8977C8.51247 27.4266 16.3917 26.8109 24.0481 26.8109C29.5242 26.8109 32.378 27.7496 28.8161 33.0925C25.449 38.1432 20.7989 42.1081 14.8148 43.1962C12.512 43.6148 3.14733 47.6746 1.57031 44.5206"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M36.308 35.6657C39.0587 35.6657 46.5252 36.3008 46.5252 31.9194C46.5252 29.3004 38.2402 27.9827 36.308 29.0056C32.8549 30.8337 32.2436 39.8031 33.5834 42.8177C35.2208 46.5017 41.9435 45.2017 45.1629 45.2017"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M59.4678 29.5354C59.4678 33.554 59.4279 37.8406 63.5547 39.904C65.5461 40.8997 74.0015 42.9086 74.453 39.0714C75.0292 34.1734 76.7867 32.8531 72.9393 29.0056C70.1848 26.2512 64.5248 26.1297 60.8301 26.1297"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M83.9888 26.8109C83.9888 31.1248 83.9888 35.4387 83.9888 39.7526C83.9888 43.911 85.6895 52.5273 83.3076 56.1001"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M83.9883 28.1731C89.0968 28.1731 94.2054 28.1731 99.314 28.1731C101.698 28.1731 104.082 28.1731 106.466 28.1731C107.05 28.1731 112.659 28.4254 109.872 30.0652C104.479 33.2372 100.853 38.8238 94.9244 41.4176C92.6776 42.4006 83.924 46.4354 82.626 43.8394"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M118.046 2.28961C118.046 9.44163 118.046 16.5936 118.046 23.7457C118.046 27.3026 116.534 38.6561 120.089 40.4337"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M129.625 32.26C133.92 32.26 140.072 33.273 143.097 29.3841C143.64 28.6864 140.827 28.8721 140.524 28.8543C139.594 28.7996 138.88 27.6121 137.799 27.492C135.196 27.2028 132.734 26.8109 129.966 26.8109C128.235 26.8109 124.857 30.147 124.857 31.9194C124.857 35.8527 126.388 38.9367 128.604 42.1366C131.829 46.7955 137.927 45.386 142.567 43.8395"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M184.798 30.8977C180.522 30.8977 176.191 30.0617 172.878 32.6384C170.741 34.3006 168.597 41.0221 171.856 42.3258C176.943 44.3607 182.968 42.0268 184.155 36.6874C185.099 32.4362 185.704 36.902 186.312 38.5417C187.04 40.5072 189.8 44.2969 191.61 45.2017"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M197.74 31.5788C197.74 34.5304 197.74 37.4821 197.74 40.4337C197.74 41.9237 197.059 42.6811 197.059 44.1043C197.059 45.4841 197.41 41.2992 198.08 40.0931C200.787 35.2206 204.116 28.1731 210.681 28.1731"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M214.087 37.7091C216.585 37.7091 219.082 37.7091 221.58 37.7091C223.465 37.7091 225.201 35.6232 226.499 34.4548C231.126 30.2905 220.856 28.3433 218.326 30.3679C215.778 32.4062 211.663 40.1446 214.239 43.0069C216.385 45.3919 223.957 45.2017 227.029 45.2017"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M262.449 30.8977C258.375 30.8977 256.666 31.634 254.615 35.3251C252.917 38.3817 252.231 39.3452 252.231 43.1583C252.231 46.5203 252.782 49.0703 256.659 49.9319C258.898 50.4295 263.509 49.2119 264.492 47.2452"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M278.115 33.6223C272.937 33.6223 271.984 39.9746 271.984 43.8394C271.984 48.7439 277.674 51.332 282.202 51.332C287.455 51.332 292.011 43.7213 291.738 39.0714C291.532 35.5725 282.554 34.3034 280.158 34.3034"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M295.144 32.26C295.144 36.69 294.796 41.4689 298.02 45.0504C299.452 46.6419 299.743 47.7746 302.296 47.2073C303.988 46.8314 305.599 45.9024 306.08 44.2179C306.495 42.7641 307.287 40.5281 307.934 39.0715C308.616 37.5377 308.085 32.3602 308.085 34.0386C308.085 36.8767 309.314 39.9149 310.81 42.3258C312.036 44.3008 312.779 47.5485 314.897 48.6075"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M318.983 32.9412C318.983 37.2551 318.983 41.569 318.983 45.8829C318.983 50.2397 320.664 36.6882 323.903 33.7737C327.608 30.4393 330.794 31.0961 333.817 34.4548C335.586 36.4205 335.331 43.9595 335.331 46.564"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M348.273 1.60846C348.273 13.0492 348.273 24.4899 348.273 35.9306C348.273 38.4975 347.282 43.5977 348.424 45.8829C349.983 49.0002 354.964 47.9263 357.809 47.9263"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M338.736 32.9412H353.722"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M364.62 30.8977V47.9263"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M361.214 21.3617H362.576"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M370.751 32.26C370.751 36.9145 370.751 41.569 370.751 46.2235C370.751 50.476 370.457 45.6694 370.788 44.18C371.248 42.1137 372.49 39.0732 374.005 37.5578C376.526 35.0363 380.412 31.4954 383.011 36.0441C385.203 39.8795 383.178 44.8532 385.055 48.6075"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M402.764 34.3034C398.649 34.3034 394.342 33.7951 391.563 37.3686C390.946 38.1623 389.522 41.6235 389.974 42.4772C390.72 43.8877 393.776 43.8432 394.59 44.8612C397.132 48.0389 402.044 45.1522 403.975 43.007C405.393 41.4312 405.489 38.6751 405.489 36.6875C405.489 32.9426 404.807 35.3795 404.807 37.7092C404.807 46.218 406.17 53.6181 406.17 61.8898C406.17 71.845 392.977 71.7664 385.735 71.7664"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M4.29479 85.3893C4.29479 89.1306 1.0985 93.104 2.2892 97.2714C2.6187 98.4247 6.3237 99.0121 7.35994 99.0121C10.111 99.0121 11.9218 99.0968 14.1714 97.3471C15.2326 96.5217 18.5019 95.2102 18.5988 93.563C18.7203 91.4977 19.2734 88.2997 17.2365 87.2813C15.1719 86.249 5.93133 80.7539 4.29479 84.027"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M23.3662 81.9835C23.3662 87.7733 23.3662 93.563 23.3662 99.3527C23.3662 100.071 24.0147 95.9142 24.5771 94.3955C25.6833 91.4089 27.5961 87.2897 29.8371 85.0487C31.5424 83.3434 38.2559 75.6752 39.0325 82.6647C39.3326 85.3649 40.3948 87.5829 40.3948 90.4978C40.3948 92.6548 40.3948 94.8117 40.3948 96.9687"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M77.1768 79.9401C77.1768 86.3698 86.0316 89.8139 86.0316 95.6064"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M95.5677 81.3024C95.5677 88.5592 92.3716 96.8639 88.9076 103.099C86.8609 106.783 81.2637 111.131 81.2637 115.36"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M108.51 77.8967C102.587 78.5548 103.061 87.58 103.061 91.8601C103.061 97.0561 110.504 97.0932 114.3 96.2497C118.906 95.2261 122.748 90.3278 120.468 85.7677C118.858 82.548 117.719 82.4832 114.981 80.9618C113.737 80.2705 109.542 79.2789 109.191 78.5778"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M127.582 75.8532C127.582 81.208 126.813 87.6385 128.225 92.5791C130.765 101.469 140.068 93.7111 143.626 89.1355C145.223 87.0826 146.654 84.2286 146.654 81.6051C146.654 80.2428 146.654 77.5182 146.654 77.5182C146.654 77.5182 146.654 80.041 146.654 81.3024C146.654 83.2424 148.847 97.5498 152.784 94.9253"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M183.436 64.2738V101.737"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M175.262 84.7081H188.203"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M202.507 84.7081C199.911 84.7081 198.087 84.9805 197.739 88.1138C197.508 90.1944 195.343 92.4411 196.907 94.3955C198.495 96.3814 199.051 98.4268 201.296 100.223C202.319 101.041 206.63 100.448 207.956 100.374C211.781 100.162 216.19 92.3358 214.616 88.795C212.279 83.5364 207.53 83.3458 202.507 83.3458"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M235.202 85.3893C235.202 89.0221 235.202 92.6548 235.202 96.2876C235.202 101.173 234.815 97.8292 235.732 95.0767C237.271 90.4591 241.304 86.0906 245.268 83.3459C248.428 81.1583 249.043 80.6213 252.912 80.6213"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M251.55 91.5196C252.991 91.5196 256.375 92.1574 257.15 90.8384C258.215 89.0285 259.843 87.0901 261.237 85.5406C263.022 83.5581 253.215 82.8215 251.247 83.3837C246.672 84.6909 249.409 91.7919 250.528 94.9253C251.766 98.3904 255.95 101.737 259.724 101.737"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M266.536 86.0704C266.536 88.795 266.536 91.5196 266.536 94.2441C266.536 95.9996 265.756 102.448 266.574 97.9526C266.972 95.762 275.031 83.2885 278.645 86.9029C279.526 87.7835 278.796 94.2825 278.796 94.2441C278.796 91.1725 283.282 86.2325 285.608 84.4054C289.194 81.5877 289.364 85.0632 289.732 88.5679C290.098 92.0368 290.376 102.5 290.376 99.0121"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M297.868 91.5196C300.706 91.5196 303.544 91.5196 306.382 91.5196C309.996 91.5196 310.206 89.2444 311.793 86.0704C313.787 82.0833 309.817 83.3458 306.723 83.3458C304.202 83.3458 300.726 83.0359 298.7 84.8595C297.394 86.0355 294.462 88.6489 294.462 90.4978C294.462 94.3295 294.943 94.7255 297.527 97.3093C299.835 99.6174 308.837 102.652 310.809 99.6933"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M317.621 86.0704C317.621 90.6114 317.621 104.234 317.621 99.6933C317.621 96.2803 319.521 93.9599 321.557 91.1412C322.998 89.1448 326.476 82.3309 326.476 87.4327C326.476 90.2925 327.157 95.9849 327.157 95.9849C327.157 95.9849 327.911 92.9826 328.86 91.8223C329.858 90.603 331.895 87.9753 332.455 86.6002C332.579 86.2951 334.841 82.1421 335.293 83.7243C335.612 84.84 335.331 86.4252 335.331 87.5841C335.331 90.9394 335.331 94.2946 335.331 97.6499"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M342.143 69.723C342.143 77.5561 342.143 85.3893 342.143 93.2224C342.143 93.9061 342.143 96.9067 342.143 96.2876C342.143 94.6147 342.51 93.4404 342.862 91.8602C343.436 89.2729 345.343 86.327 346.911 84.3676C347.962 83.0533 354.206 80.7269 355.614 82.1349C357.253 83.7734 354.598 89.7697 354.403 91.5196C353.607 98.6854 346.681 100.374 340.78 100.374"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M359.171 92.8819C363.388 92.8819 367.535 92.8795 368.669 87.7733C368.949 86.5139 364.654 86.0704 363.561 86.0704C360.43 86.0704 360.331 86.1534 358.641 88.2652C356.907 90.4327 360.072 97.9969 361.214 99.9961C363.2 103.47 369.047 101.567 371.432 100.374"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M376.881 87.4327C376.881 91.0655 376.881 94.6982 376.881 98.331C376.881 99.0776 376.881 103.631 376.881 101.056C376.881 98.9152 377.347 97.4924 378.395 95.6064C380.497 91.8219 383.587 91.3314 386.568 88.9464C389.455 86.6371 393.658 88.7414 395.272 84.7081"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M13.1494 128.982V161.677"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M2.25098 148.736C8.33737 148.736 14.9422 148.055 20.6419 148.055"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M26.0914 129.664C26.0914 138.859 26.0914 148.055 26.0914 157.25C26.0914 159.748 26.0914 162.245 26.0914 164.743C26.0914 166.458 25.7587 166.077 26.1292 164.78C26.7089 162.752 27.6237 160.893 28.8159 159.104C29.4885 158.095 37.3078 148.649 38.352 150.476C40.5303 154.288 40.3954 160.098 40.3954 164.402"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M45.1632 156.228C50.0372 156.228 56.5553 156.714 58.1428 151.158C59.1841 147.513 50.3816 148.055 47.2067 148.055C42.5632 148.055 42.7886 158.335 44.4821 161.299C46.1139 164.155 57.9101 167.516 59.4673 164.402"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M63.5537 148.736C63.5537 154.529 64.916 160.202 64.916 165.764"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M60.8301 141.243C62.4319 141.243 63.5011 140.562 64.9169 140.562"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M72.4088 148.055C72.4088 152.255 72.4088 156.455 72.4088 160.656C72.4088 161.868 73.0136 165.349 72.2574 166.294C71.2467 167.558 71.7277 163.564 71.7277 162.699C71.7277 159.402 74.0909 154.413 76.4957 152.141C80.121 148.718 86.0279 148.736 90.7997 148.736"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M109.191 148.055C109.191 151.107 109.191 154.16 109.191 157.212C109.191 158.562 109.191 159.912 109.191 161.261C109.191 162.371 108.988 159.015 109.229 157.931C109.617 156.187 111.402 151.679 112.975 150.779C113.496 150.481 118.695 145.387 119.371 147.752C119.542 148.35 120.634 154.563 120.771 154.563C121.04 154.563 121.523 152.509 121.603 152.293C122.095 150.964 123.196 149.852 124.025 148.736C125.543 146.692 127.418 143.374 129.626 142.076C133.218 139.962 131.669 147.595 131.669 150.098C131.669 153.504 131.669 156.909 131.669 160.315"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M135.755 151.46C141.215 151.46 146.538 152.636 150.589 148.584C152.405 146.769 150.598 145.151 149.378 143.627C147.593 141.395 144.797 141.924 142.226 141.924C137.461 141.924 135.074 149.439 135.074 153.163C135.074 154.976 139.548 159.925 141.205 160.845C143.619 162.186 146.677 161.677 149.378 161.677"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M168.451 143.968C166.748 143.968 165.045 143.968 163.342 143.968C161.892 143.968 160.598 147.205 159.937 148.395C158.754 150.524 157.665 157.135 159.937 158.953C162.649 161.123 166.39 162.151 168.451 158.802C171.154 154.409 172.538 147.659 172.538 142.605C172.538 139.814 173.553 134.488 172.197 132.048C171.71 131.171 171.175 127.609 171.175 130.723C171.175 133.708 170.844 136.888 171.213 139.843C171.983 146.003 178.668 163.117 178.668 156.909"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M184.117 144.649V159.634"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M183.436 137.837C184.934 137.837 186.077 137.156 187.522 137.156"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M204.551 144.649C201.784 144.649 198.178 143.723 196.718 146.352C195.464 148.608 194.334 151.598 194.334 154.185C194.334 156.675 193.574 161.677 197.399 161.677C199.494 161.677 203.153 163.792 204.551 160.996"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M223.623 144.649C218.332 144.649 212.044 142.917 212.044 149.757C212.044 152.467 209.041 161.677 214.087 161.677C216.665 161.677 217.933 161.87 219.877 160.315C221.786 158.788 224.421 154.171 224.948 151.801C225.139 150.939 224.986 148.269 224.986 149.152C224.986 151.147 224.838 153.001 225.667 154.866C226.956 157.766 227.288 163.721 231.116 163.721"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M237.927 122.852C237.927 132.107 237.384 141.54 237.927 150.779C238.035 152.622 239.413 155.468 239.933 157.288C240.252 158.405 239.971 165.916 239.971 161.677"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M227.71 145.33C232.169 145.33 239.45 146.612 243.376 144.649"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M251.55 144.649V161.677"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M250.869 136.475H251.55"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M267.897 143.968C267.673 145.988 265.668 147.701 265.211 149.757C264.739 151.88 263.811 153.877 263.811 156.228C263.811 161.11 270.961 163.731 274.709 161.526C279.063 158.965 278.796 154.622 278.796 150.098C278.796 145.269 273.446 144.649 269.941 144.649"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M283.563 143.287C283.563 149.056 284.245 166.349 284.245 160.58C284.245 155.361 285.435 150.744 287.802 146.011C289.467 142.68 289.675 141.924 293.44 141.924C296.429 141.924 299.016 141.007 299.949 144.27C300.528 146.297 300.556 149.506 301.425 151.46C302.199 153.203 301.115 158.193 302.636 158.953"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M321.708 143.287C316.437 143.287 313.927 143.381 309.788 146.692C308.194 147.967 308.085 150.216 308.085 152.141C308.085 154.5 312.585 153.438 314.367 153.504C317.869 153.633 326.108 157.946 320.005 161.337C316.644 163.204 312.68 164.402 308.766 164.402"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M333.287 116.722C333.287 126.952 333.968 137.505 333.968 147.373"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          d="M332.606 160.315L331.925 159.634"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
    </div>
  );
}

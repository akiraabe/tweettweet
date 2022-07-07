/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function NavBarMobile(props) {
  const { overrides, ...rest } = props;
  const postsOnClick = useNavigateAction({ type: "url", url: "/posts" });
  const vectorThreeThreeSixOneTwoFiveThreeTwoOnClick = useNavigateAction({
    type: "url",
    url: "/users",
  });
  const profileOnClick = useNavigateAction({ type: "url", url: "/newProfile" });
  const signOutOnClick = useAuthSignOutAction({ global: false });
  const vectorThreeThreeSixOneTwoFiveTwoTwoOnClick = useAuthSignOutAction({
    global: false,
  });
  return (
    <View
      width="375px"
      height="40px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarMobile")}
    >
      <View
        width="88px"
        height="24px"
        position="absolute"
        top="10px"
        left="3px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="18px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          paths={[
            {
              d: "M8.12249 1.60573C8.50171 0.911796 9.49829 0.911796 9.87751 1.60573L10.9602 3.58693C11.1657 3.96292 11.5879 4.16622 12.0099 4.09244L14.234 3.70368C15.0129 3.56751 15.6343 4.34666 15.3282 5.07581L14.4543 7.15757C14.2884 7.55264 14.3927 8.00946 14.7135 8.29344L16.4041 9.78987C16.9963 10.314 16.7745 11.2856 16.0136 11.5009L13.8412 12.1156C13.4289 12.2323 13.1367 12.5986 13.1147 13.0265L12.9989 15.2813C12.9583 16.071 12.0604 16.5034 11.4176 16.0427L9.58254 14.7275C9.23429 14.4779 8.76571 14.4779 8.41746 14.7275L6.58236 16.0427C5.9396 16.5034 5.04172 16.071 5.00113 15.2813L4.88526 13.0265C4.86327 12.5986 4.57112 12.2323 4.15884 12.1156L1.98638 11.5009C1.22546 11.2856 1.0037 10.314 1.59585 9.78987L3.28646 8.29344C3.6073 8.00946 3.71156 7.55264 3.54571 7.15757L2.6718 5.07581C2.36571 4.34666 2.98706 3.56751 3.76604 3.70368L5.99007 4.09244C6.41214 4.16622 6.83431 3.96292 7.03978 3.58693L8.12249 1.60573Z",
              fill: "rgba(20,155,252,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="1.5px"
          left="0px"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="18px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Twetwe"
          {...getOverrideProps(overrides, "Twetwe")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        position="absolute"
        top="8px"
        left="100px"
        onClick={() => {
          postsOnClick();
        }}
        {...getOverrideProps(overrides, "Posts")}
      >
        <MyIcon
          width="24px"
          height="24px"
          position="absolute"
          top="0px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          type="chat"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        position="absolute"
        top="7px"
        left="145px"
        {...getOverrideProps(overrides, "Users")}
      >
        <View
          width="24px"
          height="24px"
          position="absolute"
          top="0px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "clarity:users-line")}
        >
          <Icon
            width="6.466796875px"
            height="6.466667175292969px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 6.466796875,
              height: 6.466667175292969,
            }}
            paths={[
              {
                d: "M3.26667 6.46667C5.06667 6.46667 6.46667 5 6.46667 3.2C6.46667 1.4 5 0 3.2 0C1.4 0 0 1.46667 0 3.2C0 5 1.46667 6.46667 3.26667 6.46667ZM3.2 1.33333C3.26667 1.33333 3.26667 1.33333 3.2 1.33333C4.26667 1.33333 5.13333 2.2 5.13333 3.26667C5.13333 4.33333 4.26667 5.13333 3.2 5.13333C2.13333 5.13333 1.33333 4.26667 1.33333 3.26667C1.33333 2.2 2.2 1.33333 3.2 1.33333L3.2 1.33333Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="21.11%"
            bottom="51.94%"
            left="36.11%"
            right="36.94%"
            {...getOverrideProps(overrides, "Vector33612526")}
          ></Icon>
          <Icon
            width="6px"
            height="7.20501708984375px"
            viewBox={{ minX: 0, minY: 0, width: 6, height: 7.20501708984375 }}
            paths={[
              {
                d: "M5.8 1.67168C4.53333 0.538351 2.86667 -0.0616499 1.13333 0.00501679L0.6 0.00501679C0.466666 0.53835 0.266667 1.00502 0 1.40502C0.4 1.33835 0.733334 1.33835 1.13333 1.33835C2.4 1.27168 3.66667 1.67168 4.66667 2.40502L4.66667 7.20502L6 7.20502L6 1.87168L5.8 1.67168Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="39.42%"
            bottom="30.56%"
            left="66.67%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector33612527")}
          ></Icon>
          <Icon
            width="5.466796875px"
            height="5.9333343505859375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.466796875,
              height: 5.9333343505859375,
            }}
            paths={[
              {
                d: "M0.933333 2.33333C1.26667 1.53333 2.2 1.13333 3.06667 1.46667C3.86667 1.8 4.26667 2.73333 3.93333 3.6C3.66667 4.2 3.06667 4.6 2.46667 4.6C2.33333 4.6 2.13333 4.6 2 4.53333C2.06667 4.86667 2.06667 5.2 2.06667 5.46667L2.06667 5.86667C2.2 5.86667 2.33333 5.93333 2.46667 5.93333C4.13333 5.93333 5.46667 4.6 5.46667 3C5.46667 1.33333 4.13333 0 2.53333 0C1.46667 0 0.533333 0.533333 0 1.46667C0.333333 1.66667 0.666666 1.93333 0.933333 2.33333L0.933333 2.33333Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="11.94%"
            bottom="63.33%"
            left="61.11%"
            right="16.11%"
            {...getOverrideProps(overrides, "Vector33612528")}
          ></Icon>
          <Icon
            width="6px"
            height="7.138359069824219px"
            viewBox={{ minX: 0, minY: 0, width: 6, height: 7.138359069824219 }}
            paths={[
              {
                d: "M6 1.40502C5.73333 1.00502 5.53333 0.538359 5.4 0.00502528L4.86667 0.00502528C3.13333 -0.0616414 1.46667 0.538359 0.2 1.60503L0 1.80502L0 7.13836L1.33333 7.13836L1.33333 2.33836C2.4 1.60502 3.6 1.20503 4.86667 1.27169C5.26667 1.27169 5.66667 1.33836 6 1.40502Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="39.7%"
            bottom="30.56%"
            left="8.33%"
            right="66.67%"
            {...getOverrideProps(overrides, "Vector33612529")}
          ></Icon>
          <Icon
            width="5.50390625px"
            height="5.904014587402344px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 5.50390625,
              height: 5.904014587402344,
            }}
            paths={[
              {
                d: "M2.97068 5.90401C3.10401 5.90401 3.23735 5.90401 3.37068 5.83735L3.37068 5.43735C3.37068 5.10401 3.37068 4.77068 3.43735 4.50401C3.30401 4.57068 3.10401 4.57068 2.97068 4.57068C2.10401 4.57068 1.37068 3.83735 1.37068 2.97068C1.37068 2.10401 2.10401 1.37068 2.97068 1.37068C3.63735 1.37068 4.23735 1.77068 4.50401 2.37068C4.77068 2.03735 5.17068 1.70401 5.50401 1.43735C4.63735 0.0373461 2.83735 -0.429321 1.43735 0.437346C0.037346 1.30401 -0.429321 3.10401 0.437346 4.50401C0.970679 5.37068 1.90401 5.90401 2.97068 5.90401L2.97068 5.90401Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="11.79%"
            bottom="63.61%"
            left="16.23%"
            right="60.83%"
            {...getOverrideProps(overrides, "Vector33612530")}
          ></Icon>
          <Icon
            width="10.7998046875px"
            height="8.67025375366211px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.7998046875,
              height: 8.67025375366211,
            }}
            paths={[
              {
                d: "M10.7333 2.47025L10.6 2.27025C9.26667 0.803586 7.4 -0.0630799 5.4 0.00358676C3.4 -0.0630799 1.46667 0.803586 0.133333 2.27025L0 2.47025L0 7.53692C0 8.13692 0.466667 8.67025 1.13333 8.67025L9.66667 8.67025C10.2667 8.67025 10.8 8.13692 10.8 7.53692L10.8 2.47025L10.7333 2.47025ZM9.4 7.33692L1.33333 7.33692L1.33333 2.93692C2.4 1.87025 3.86667 1.33692 5.4 1.33692C6.86667 1.27025 8.33333 1.87025 9.4 2.93692L9.4 7.33692Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="52.76%"
            bottom="11.11%"
            left="27.78%"
            right="27.22%"
            {...getOverrideProps(overrides, "Vector33612531")}
          ></Icon>
          <Icon
            width="24px"
            height="24px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            paths={[]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            onClick={() => {
              vectorThreeThreeSixOneTwoFiveThreeTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Vector33612532")}
          ></Icon>
        </View>
      </View>
      <Icon
        width="16.17236328125px"
        height="17px"
        viewBox={{ minX: 0, minY: 0, width: 16.17236328125, height: 17 }}
        paths={[
          {
            d: "M11.6567 11.1968C12.1778 10.928 12.7744 10.7749 13.4096 10.7749L13.4118 10.7749C13.4764 10.7749 13.5065 10.7005 13.4592 10.6591C12.7985 10.0897 12.0438 9.62984 11.226 9.2983C11.2174 9.29416 11.2088 9.29209 11.2002 9.28796C12.5375 8.35523 13.4075 6.83929 13.4075 5.12895C13.4075 2.29562 11.0214 0 8.07767 0C5.13389 0 2.75002 2.29562 2.75002 5.12895C2.75002 6.83929 3.62001 8.35523 4.95946 9.28796C4.95085 9.29209 4.94223 9.29416 4.93362 9.2983C3.97103 9.68917 3.10749 10.2496 2.36455 10.9652C1.6259 11.6733 1.03783 12.5127 0.63317 13.4366C0.235024 14.3413 0.0201488 15.3107 5.38493e-05 16.2927C-0.000520919 16.3148 0.00351041 16.3367 0.0119104 16.3573C0.0203104 16.3778 0.0329091 16.3966 0.048964 16.4124C0.0650189 16.4282 0.0842053 16.4407 0.105393 16.4493C0.12658 16.4579 0.14934 16.4623 0.17233 16.4623L1.46225 16.4623C1.55485 16.4623 1.63237 16.3899 1.63453 16.301C1.6776 14.7044 2.34301 13.2091 3.52095 12.0758C4.73766 10.9032 6.35706 10.2579 8.07982 10.2579C9.30083 10.2579 10.4723 10.5826 11.4823 11.1906C11.5082 11.2063 11.538 11.2151 11.5686 11.2162C11.5992 11.2173 11.6296 11.2106 11.6567 11.1968L11.6567 11.1968ZM8.07982 8.68613C7.09354 8.68613 6.1654 8.31594 5.46552 7.6438C5.12118 7.31395 4.84819 6.92193 4.66228 6.49032C4.47638 6.0587 4.38124 5.59603 4.38234 5.12895C4.38234 4.17968 4.7678 3.28625 5.46552 2.61411C6.16324 1.94197 7.09138 1.57178 8.07982 1.57178C9.06826 1.57178 9.99424 1.94197 10.6941 2.61411C11.0385 2.94396 11.3115 3.33598 11.4974 3.76759C11.6833 4.1992 11.7784 4.66187 11.7773 5.12895C11.7773 6.07822 11.3918 6.97165 10.6941 7.6438C9.99424 8.31594 9.0661 8.68613 8.07982 8.68613ZM16.0002 13.6083L14.1913 13.6083L14.1913 11.871C14.1913 11.78 14.1138 11.7056 14.0191 11.7056L12.8131 11.7056C12.7184 11.7056 12.6408 11.78 12.6408 11.871L12.6408 13.6083L10.8319 13.6083C10.7372 13.6083 10.6597 13.6827 10.6597 13.7737L10.6597 14.9319C10.6597 15.0229 10.7372 15.0973 10.8319 15.0973L12.6408 15.0973L12.6408 16.8346C12.6408 16.9255 12.7184 17 12.8131 17L14.0191 17C14.1138 17 14.1913 16.9255 14.1913 16.8346L14.1913 15.0973L16.0002 15.0973C16.095 15.0973 16.1725 15.0229 16.1725 14.9319L16.1725 13.7737C16.1725 13.6827 16.095 13.6083 16.0002 13.6083Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="27.5%"
        bottom="30%"
        left="52.59%"
        right="43.1%"
        onClick={() => {
          profileOnClick();
        }}
        {...getOverrideProps(overrides, "Profile")}
      ></Icon>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="8px"
        left="340px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        onClick={() => {
          signOutOnClick();
        }}
        {...getOverrideProps(overrides, "SignOut")}
      >
        <Icon
          width="18.00390625px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18.00390625, height: 18 }}
          paths={[
            {
              d: "M0 2C0 0.9 0.9 0 2 0L10 0L10 2L2 2L2 16L10 16L10 18L2 18C0.9 18 0 17.1 0 16L0 2ZM14.176 8L11.64 5.464L13.054 4.05L18.004 9L13.054 13.95L11.64 12.536L14.176 10L7.59 10L7.59 8L14.176 8Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.48%"
          onClick={() => {
            vectorThreeThreeSixOneTwoFiveTwoTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Vector33612522")}
        ></Icon>
      </View>
    </View>
  );
}

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
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const [postsColor, setPostsColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [usersColor, setUsersColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [profileColor, setProfileColor] =
    useStateMutationAction("rgba(0,0,0,1)");
  const [signOutColor, setSignOutColor] =
    useStateMutationAction("rgba(0,0,0,1)");
  const logoOnClick = useNavigateAction({ type: "url", url: "/posts" });
  const postsOnClick = useNavigateAction({ type: "url", url: "/posts" });
  const postsOnMouseEnter = () => {
    setPostsColor("blue");
  };
  const postsOnMouseLeave = () => {
    setPostsColor("black");
  };
  const usersOnClick = useNavigateAction({ type: "url", url: "/users" });
  const usersOnMouseEnter = () => {
    setUsersColor("blue");
  };
  const usersOnMouseLeave = () => {
    setUsersColor("black");
  };
  const profileOnClick = useNavigateAction({ type: "url", url: "/newProfile" });
  const profileOnMouseEnter = () => {
    setProfileColor("blue");
  };
  const profileOnMouseLeave = () => {
    setProfileColor("black");
  };
  const signOutOnClick = useAuthSignOutAction({ global: false });
  const signOutOnMouseEnter = () => {
    setSignOutColor("blue");
  };
  const signOutOnMouseLeave = () => {
    setSignOutColor("black");
  };
  return (
    <Flex
      gap="32px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <View
        width="113px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          logoOnClick();
        }}
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="24px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[
            {
              d: "M11.1225 1.60573C11.5017 0.911796 12.4983 0.911796 12.8775 1.60573L14.7282 4.99222C14.9337 5.3682 15.3558 5.57151 15.7779 5.49773L19.5794 4.83321C20.3584 4.69704 20.9798 5.47619 20.6737 6.20534L19.1799 9.76371C19.0141 10.1588 19.1183 10.6156 19.4392 10.8996L22.3289 13.4574C22.9211 13.9816 22.6993 14.9532 21.9384 15.1685L18.225 16.2192C17.8127 16.3358 17.5206 16.7022 17.4986 17.1301L17.3005 20.9842C17.2599 21.7739 16.362 22.2063 15.7193 21.7457L12.5825 19.4975C12.2343 19.2479 11.7657 19.2479 11.4175 19.4975L8.28071 21.7457C7.63795 22.2063 6.74007 21.7739 6.69948 20.9842L6.50142 17.1301C6.47943 16.7022 6.18728 16.3358 5.775 16.2192L2.0616 15.1685C1.30068 14.9532 1.07892 13.9816 1.67107 13.4574L4.56084 10.8996C4.88167 10.6156 4.98594 10.1588 4.82009 9.76371L3.32631 6.20534C3.02022 5.47619 3.64157 4.69704 4.42055 4.83321L8.2221 5.49773C8.64416 5.57151 9.06633 5.3682 9.2718 4.99222L11.1225 1.60573Z",
              fill: "rgba(20,155,252,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="80px"
          height="24px"
          position="absolute"
          top="0px"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Twetwe"
          {...getOverrideProps(overrides, "Twetwe")}
        ></Text>
      </View>
      <View
        width="175px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FrameLeft")}
      >
        <View
          width="37px"
          height="24px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color={postsColor}
            lineHeight="21px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            textDecoration="underline"
            width="37px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Posts"
            onClick={() => {
              postsOnClick();
            }}
            onMouseEnter={() => {
              postsOnMouseEnter();
            }}
            onMouseLeave={() => {
              postsOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "Posts")}
          ></Text>
        </View>
        <View
          width="45px"
          height="24px"
          position="absolute"
          top="0px"
          left="59px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color={usersColor}
            lineHeight="21px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            textDecoration="underline"
            width="39px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Users"
            onClick={() => {
              usersOnClick();
            }}
            onMouseEnter={() => {
              usersOnMouseEnter();
            }}
            onMouseLeave={() => {
              usersOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "Users")}
          ></Text>
        </View>
        <View
          width="55px"
          height="24px"
          position="absolute"
          top="0px"
          left="120px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color={profileColor}
            lineHeight="21px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            textDecoration="underline"
            width="43px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Profile"
            onClick={() => {
              profileOnClick();
            }}
            onMouseEnter={() => {
              profileOnMouseEnter();
            }}
            onMouseLeave={() => {
              profileOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "Profile")}
          ></Text>
        </View>
      </View>
      <View
        width="53px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FrameRight")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color={signOutColor}
          lineHeight="21px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="center"
          textDecoration="underline"
          position="absolute"
          top="1.5px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="SignOut"
          onClick={() => {
            signOutOnClick();
          }}
          onMouseEnter={() => {
            signOutOnMouseEnter();
          }}
          onMouseLeave={() => {
            signOutOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "SignOut")}
        ></Text>
      </View>
    </Flex>
  );
}

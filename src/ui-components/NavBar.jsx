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
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { user, overrides, ...rest } = props;
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
      height="56px"
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
          left="43px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Twetwe"
          {...getOverrideProps(overrides, "Twetwe")}
        ></Text>
        <Image
          width="24px"
          height="24px"
          position="absolute"
          top="0px"
          left="12px"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          src={user?.profilePic}
          {...getOverrideProps(overrides, "profilePicture")}
        ></Image>
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

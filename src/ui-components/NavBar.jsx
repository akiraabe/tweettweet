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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { like, overrides, ...rest } = props;
  const [postsColor, setPostsColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [usersColor, setUsersColor] = useStateMutationAction("rgba(0,0,0,1)");
  const [newprofileColor, setNewprofileColor] =
    useStateMutationAction("rgba(0,0,0,1)");
  const [signOutColor, setSignOutColor] =
    useStateMutationAction("rgba(0,0,0,1)");
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
  const newprofileOnClick = useNavigateAction({
    type: "url",
    url: "/newProfile",
  });
  const newprofileOnMouseEnter = () => {
    setNewprofileColor("blue");
  };
  const newprofileOnMouseLeave = () => {
    setNewprofileColor("black");
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
      gap="14px"
      direction="row"
      width="531px"
      height="36px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="20px 5px 20px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="14px"
        direction="row"
        width="292px"
        alignItems="flex-start"
        shrink="0"
        height="36px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FrameLeft")}
      >
        <Flex
          gap="2px"
          direction="row"
          width="fit-content"
          height="36px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 7px"
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
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Star 1")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            textTransform="capitalize"
            lineHeight="18.75px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Twetwe"
            {...getOverrideProps(overrides, "Twetwe")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="36px"
          position="relative"
          padding="6px 6px 6px 6px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color={postsColor}
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            letterSpacing="0px"
            shrink="0"
            position="relative"
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
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="36px"
          position="relative"
          padding="6px 5px 6px 5px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color={usersColor}
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            letterSpacing="0px"
            shrink="0"
            position="relative"
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
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="36px"
          position="relative"
          padding="6px 0px 6px 0px"
          {...getOverrideProps(overrides, "Frame 3")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color={newprofileColor}
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            letterSpacing="0px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New profile"
            onClick={() => {
              newprofileOnClick();
            }}
            onMouseEnter={() => {
              newprofileOnMouseEnter();
            }}
            onMouseLeave={() => {
              newprofileOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "New profile")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="69px"
        height="36px"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="4px 3px 1px 0px"
        {...getOverrideProps(overrides, "FrameRight")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color={signOutColor}
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0px"
          width="57px"
          height="24px"
          shrink="0"
          position="relative"
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
      </Flex>
    </Flex>
  );
}

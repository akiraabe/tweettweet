/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function CommentCardNew(props) {
  const { user, post, overrides, ...rest } = props;
  const [bodyBackgroundColor, setBodyBackgroundColor] = useStateMutationAction(
    "rgba(255,255,255,0.29)"
  );
  const [authorColor, setAuthorColor] =
    useStateMutationAction("rgba(13,26,38,1)");
  const bodyOnMouseEnter = () => {
    setBodyBackgroundColor("#e8eaed");
  };
  const bodyOnMouseLeave = () => {
    setBodyBackgroundColor("transparent");
  };
  const authorOnMouseEnter = () => {
    setAuthorColor("blue");
  };
  const authorOnMouseLeave = () => {
    setAuthorColor("black");
  };
  return (
    <View
      width="443px"
      height="167px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCardNew")}
    >
      <View
        position="absolute"
        top="5px"
        bottom="6px"
        left="5px"
        right="5px"
        padding="0px 0px 0px 0px"
        backgroundColor={bodyBackgroundColor}
        onMouseEnter={() => {
          bodyOnMouseEnter();
        }}
        onMouseLeave={() => {
          bodyOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "Body")}
      ></View>
      <Image
        width="60px"
        height="60px"
        position="absolute"
        top="9px"
        left="5px"
        borderRadius="64px"
        padding="0px 0px 0px 0px"
        src={user?.profilePic}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        position="absolute"
        top="72px"
        bottom="29px"
        left="92px"
        right="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={post?.content}
        {...getOverrideProps(
          overrides,
          "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
        )}
      ></Text>
      <View
        width="281px"
        height="31px"
        position="absolute"
        top="18px"
        left="72px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="400"
          color={authorColor}
          lineHeight="15px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          textDecoration="underline"
          letterSpacing="0px"
          width="163px"
          height="13px"
          position="absolute"
          top="8px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          as="a"
          href={`${"/users/"}${user?.id}`}
          children={user?.handle}
          onMouseEnter={() => {
            authorOnMouseEnter();
          }}
          onMouseLeave={() => {
            authorOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "Author")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0px"
          width="128px"
          height="30px"
          position="absolute"
          top="1px"
          right="-10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.postedAt}
          {...getOverrideProps(overrides, "Timestamp")}
        ></Text>
      </View>
      <Flex
        gap="16px"
        position="absolute"
        top="85px"
        left="11px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Like")}
      >
        <MyIcon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="favorite_border"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.likes}
          {...getOverrideProps(overrides, "99")}
        ></Text>
      </Flex>
    </View>
  );
}

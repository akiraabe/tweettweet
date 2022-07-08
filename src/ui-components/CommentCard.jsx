/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function CommentCard(props) {
  const { user, post, overrides, ...rest } = props;
  return (
    <View
      width="356px"
      height="171px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCard")}
    >
      <View
        height="126px"
        position="absolute"
        top="16px"
        left="16px"
        right="28px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Image
          width="80px"
          height="80px"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          src={user?.profilePic}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <View
          height="139px"
          position="absolute"
          top="0px"
          left="90px"
          right="-5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
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
            height="72px"
            position="absolute"
            top="45px"
            left="10px"
            right="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.content}
            {...getOverrideProps(
              overrides,
              "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0px"
            width="88px"
            position="absolute"
            top="7px"
            right="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.postedAt}
            {...getOverrideProps(overrides, "Timestamp")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(92,103,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0px"
            height="24px"
            position="absolute"
            top="7px"
            left="10px"
            right="131px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            as="a"
            href={`${"/users/"}${user?.id}`}
            children={`${"@"}${user?.handle}`}
            {...getOverrideProps(overrides, "handle")}
          ></Text>
        </View>
      </View>
      <View
        width="61px"
        height="24px"
        position="absolute"
        bottom="7px"
        left="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Like")}
      >
        <MyIcon
          width="24px"
          height="24px"
          position="absolute"
          top="0px"
          left="0px"
          overflow="hidden"
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
          position="absolute"
          top="0px"
          left="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.likes}
          {...getOverrideProps(overrides, "99")}
        ></Text>
      </View>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function CommentCard(props) {
  const { user, post, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="374px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="3px 31px 3px 26px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCard")}
    >
      <Flex
        gap="11px"
        direction="row"
        width="fit-content"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="8px 0px 8px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="11px"
          direction="column"
          shrink="0"
          height="115px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 5")}
        >
          <Image
            width="80px"
            height="80px"
            shrink="0"
            position="relative"
            borderRadius="64px"
            padding="0px 0px 0px 0px"
            src={user?.profilePic}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <View
            width="61px"
            height="24px"
            shrink="0"
            position="relative"
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
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="247px"
          shrink="0"
          height="206px"
          position="relative"
          padding="7px 0px 7px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 4")}
          >
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
              textDecoration="underline"
              letterSpacing="0px"
              width="132px"
              height="24px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              as="a"
              href={`${"/users/"}${user?.id}`}
              children={`${"@"}${user?.handle}`}
              {...getOverrideProps(overrides, "handle")}
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
              width="139px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.postedAt}
              {...getOverrideProps(overrides, "Timestamp")}
            ></Text>
          </Flex>
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
            width="246px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.content}
            {...getOverrideProps(overrides, "Content")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

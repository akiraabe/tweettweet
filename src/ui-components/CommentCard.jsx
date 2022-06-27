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
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function CommentCard(props) {
  const { post, user, overrides, ...rest } = props;
  const [cardContentBackgroundColor, setCardContentBackgroundColor] =
    useStateMutationAction(undefined);
  const [authorColor, setAuthorColor] =
    useStateMutationAction("rgba(13,26,38,1)");
  const cardContentOnMouseEnter = () => {
    setCardContentBackgroundColor("#00000008");
  };
  const cardContentOnMouseLeave = () => {
    setCardContentBackgroundColor("transparent");
  };
  const authorOnMouseEnter = () => {
    setAuthorColor("blue");
  };
  const authorOnMouseLeave = () => {
    setAuthorColor("black");
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="578px"
      height="160px"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCard")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="552px"
        height="132px"
        shrink="0"
        position="relative"
        backgroundColor={cardContentBackgroundColor}
        onMouseEnter={() => {
          cardContentOnMouseEnter();
        }}
        onMouseLeave={() => {
          cardContentOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "CardContent")}
      >
        <Flex
          gap="16px"
          position="absolute"
          top="0px"
          left="0px"
          direction="row"
          width="552px"
          height="88px"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Body")}
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
          <Flex
            gap="8px"
            direction="column"
            width="442px"
            height="88px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame29766879")}
          >
            <Flex
              gap="16px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame29766880")}
            >
              <Flex
                gap="16px"
                direction="row"
                width="396px"
                alignItems="flex-start"
                shrink="0"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame29766881")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color={authorColor}
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  textDecoration="underline"
                  letterSpacing="0.01px"
                  width="122px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  as="a"
                  href={`${"/users/"}${user?.id}`}
                  children={user?.name}
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
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(92,103,112,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  letterSpacing="0.01px"
                  width="140px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={`${"@"}${user?.handle}`}
                  {...getOverrideProps(overrides, "handle")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(92,102,112,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  letterSpacing="0.01px"
                  width="122px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={post?.postedAt}
                  {...getOverrideProps(overrides, "Timestamp")}
                ></Text>
              </Flex>
              <Flex
                gap="0"
                direction="row"
                width="34px"
                justifyContent="flex-end"
                alignItems="flex-start"
                shrink="0"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame29766885")}
              >
                <MyIcon
                  width="20px"
                  height="24px"
                  shrink="0"
                  overflow="hidden"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="more_horiz"
                  {...getOverrideProps(overrides, "MyIcon29766886")}
                ></MyIcon>
              </Flex>
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
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.content}
              {...getOverrideProps(
                overrides,
                "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="80px"
          position="absolute"
          top="105.6px"
          left="0px"
          direction="row"
          width="445px"
          height="26.4px"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
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
              {...getOverrideProps(overrides, "MyIcon29766896")}
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
        </Flex>
      </Flex>
    </Flex>
  );
}

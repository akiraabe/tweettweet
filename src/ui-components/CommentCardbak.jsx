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
export default function CommentCardbak(props) {
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
      gap="10px"
      direction="column"
      width="698px"
      height="237px"
      position="relative"
      padding="6px 6px 6px 6px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCardbak")}
    >
      <View
        width="741px"
        height="236px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 4")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="702px"
          height="231px"
          position="absolute"
          top="0px"
          left="0px"
          backgroundColor={cardContentBackgroundColor}
          onMouseEnter={() => {
            cardContentOnMouseEnter();
          }}
          onMouseLeave={() => {
            cardContentOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "CardContent")}
        >
          <View
            width="702px"
            height="231px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 5")}
          >
            <Flex
              gap="16px"
              position="absolute"
              top="0px"
              bottom="-0.09px"
              left="0px"
              right="0px"
              direction="row"
              width="702px"
              height="231.09px"
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
              <View
                width="526px"
                height="147px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame29766879")}
              >
                <View
                  height="31px"
                  position="absolute"
                  top="0px"
                  left="0px"
                  right="158px"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame29766880")}
                >
                  <View
                    height="31px"
                    position="absolute"
                    top="0px"
                    left="0px"
                    right="-88px"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Frame29766881")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="16px"
                      fontWeight="400"
                      color={authorColor}
                      lineHeight="24px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      textDecoration="underline"
                      letterSpacing="0.01px"
                      width="64px"
                      height="24px"
                      position="absolute"
                      top="0px"
                      left="0px"
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
                      fontSize="14px"
                      fontWeight="400"
                      color="rgba(92,103,112,1)"
                      lineHeight="24px"
                      textAlign="left"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      letterSpacing="0px"
                      width="140px"
                      position="absolute"
                      top="0px"
                      left="calc(50% - 70px - -40px)"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={`${"@"}${user?.handle}`}
                      {...getOverrideProps(overrides, "handle")}
                    ></Text>
                    <Text
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="400"
                      color="rgba(92,102,112,1)"
                      lineHeight="24px"
                      textAlign="center"
                      display="flex"
                      direction="column"
                      justifyContent="flex-start"
                      letterSpacing="0px"
                      width="167px"
                      position="absolute"
                      top="0px"
                      right="-70px"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={post?.postedAt}
                      {...getOverrideProps(overrides, "Timestamp")}
                    ></Text>
                  </View>
                </View>
                <View
                  height="80px"
                  position="absolute"
                  top="42px"
                  left="0px"
                  right="32px"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Comment")}
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
                    height="122px"
                    position="absolute"
                    top="2px"
                    left="0px"
                    right="-45px"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={post?.content}
                    {...getOverrideProps(
                      overrides,
                      "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
                    )}
                  ></Text>
                </View>
              </View>
            </Flex>
          </View>
          <View
            position="absolute"
            top="155.25px"
            bottom="27px"
            left="0px"
            right="429.73px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Share")}
          >
            <Flex
              gap="16px"
              position="absolute"
              top="0px"
              left="3.33px"
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
        </View>
      </View>
    </Flex>
  );
}

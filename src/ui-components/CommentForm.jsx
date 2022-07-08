/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CommentForm(props) {
  const { user, overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="0"
      direction="column"
      width="750px"
      height="364px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentForm")}
    >
      <Flex
        gap="16px"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EnterComment")}
      >
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="20.83%"
            bottom="20.83%"
            left="20.83%"
            right="20.83%"
            onClick={() => {
              vectorOnClick();
            }}
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CommentForm"
          {...getOverrideProps(overrides, "CommentForm32432761")}
        ></Text>
      </Flex>
      <Divider
        width="392px"
        height="1px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <View
        width="96px"
        height="96px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Profile")}
      >
        <Image
          width="96px"
          height="96px"
          position="absolute"
          top="12px"
          left="24px"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          src={user?.profilePic}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </View>
      <View
        width="692px"
        height="116px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Forms")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          bottom="-69px"
          left="24px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="13px"
          left="24px"
          right="10px"
          direction="column"
          width="658px"
          height="81px"
          justifyContent="space-between"
          padding="0px 0px 0px 0px"
          label="Content"
          placeholder="いまの気持ちを書こう！"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
      </View>
    </Flex>
  );
}

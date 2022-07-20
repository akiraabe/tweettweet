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
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CommentCard2(props) {
  const { user, post, overrides, ...rest } = props;
  const [likeIconColor, setLikeIconColor] = useStateMutationAction(undefined);
  const likeIconOnClick = () => {
    setLikeIconColor("blue");
  };
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/users/"}${user?.id}`,
  });
  return (
    <Flex
      gap="16px"
      direction="row"
      width="375px"
      alignItems="flex-start"
      position="relative"
      padding="8px 16px 8px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentCard2")}
    >
      <View
        width="40px"
        height="68px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons")}
      >
        <Icon
          width="16px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
          paths={[
            {
              d: "M8 2.4L7.55651 2.63091L8 3.48269L8.44349 2.63091L8 2.4ZM8 16L7.72106 16.415L7.99885 16.6017L8.27735 16.416L8 16ZM11.6364 -0.5C9.88938 -0.5 8.38971 0.568815 7.55651 2.16909L8.44349 2.63091C9.13756 1.29785 10.3288 0.5 11.6364 0.5L11.6364 -0.5ZM8.44349 2.16909C7.61029 0.568815 6.11062 -0.5 4.36364 -0.5L4.36364 0.5C5.67119 0.5 6.86244 1.29785 7.55651 2.63091L8.44349 2.16909ZM4.36364 -0.5C1.59836 -0.5 -0.5 2.22235 -0.5 5.33333L0.5 5.33333C0.5 2.57765 2.32891 0.5 4.36364 0.5L4.36364 -0.5ZM-0.5 5.33333C-0.5 6.77921 0.0451972 8.19723 0.821443 9.48881C1.59946 10.7834 2.62915 11.9834 3.64596 13.0031C4.66437 14.0243 5.68087 14.8754 6.4419 15.4709C6.82281 15.7689 7.14074 16.0037 7.36425 16.1645C7.47602 16.2449 7.56425 16.3069 7.62501 16.349C7.65539 16.3701 7.67891 16.3863 7.69508 16.3973C7.70317 16.4028 7.70941 16.4071 7.71376 16.41C7.71594 16.4115 7.71764 16.4127 7.71886 16.4135C7.71946 16.4139 7.71995 16.4142 7.72032 16.4145C7.7205 16.4146 7.72069 16.4147 7.72078 16.4148C7.72093 16.4149 7.72106 16.415 8 16C8.27894 15.585 8.27901 15.5851 8.27904 15.5851C8.27901 15.5851 8.27901 15.5851 8.27895 15.585C8.27883 15.585 8.27859 15.5848 8.27823 15.5846C8.27751 15.5841 8.27631 15.5833 8.27464 15.5821C8.2713 15.5799 8.26607 15.5763 8.25902 15.5715C8.24492 15.5619 8.22351 15.5472 8.1953 15.5276C8.13888 15.4884 8.05523 15.4297 7.94825 15.3527C7.73426 15.1988 7.42719 14.9721 7.0581 14.6833C6.31913 14.1051 5.33563 13.2812 4.35404 12.2969C3.37085 11.311 2.40054 10.175 1.67856 8.97369C0.954803 7.76944 0.5 6.5319 0.5 5.33333L-0.5 5.33333ZM8 16C8.27735 16.416 8.27747 16.4159 8.27763 16.4158C8.27772 16.4158 8.27791 16.4157 8.27809 16.4155C8.27846 16.4153 8.27895 16.415 8.27956 16.4145C8.28078 16.4137 8.28249 16.4126 8.28467 16.4111C8.28902 16.4082 8.29528 16.404 8.30337 16.3985C8.31956 16.3875 8.3431 16.3715 8.3735 16.3506C8.43429 16.3087 8.52256 16.2472 8.63437 16.1673C8.85795 16.0076 9.17596 15.7744 9.55697 15.478C10.3182 14.886 11.3349 14.0389 12.3536 13.0202C13.3706 12.0032 14.4006 10.8042 15.1787 9.50725C15.9553 8.21294 16.5 6.78961 16.5 5.33333L15.5 5.33333C15.5 6.54372 15.0447 7.78706 14.3213 8.99275C13.5994 10.1958 12.6294 11.3302 11.6464 12.3131C10.6651 13.2945 9.68183 14.114 8.94303 14.6887C8.57404 14.9756 8.26705 15.2007 8.05313 15.3535C7.94619 15.4299 7.86258 15.4882 7.80619 15.527C7.778 15.5465 7.75661 15.561 7.74253 15.5706C7.73548 15.5753 7.73026 15.5789 7.72693 15.5811C7.72526 15.5822 7.72407 15.583 7.72335 15.5835C7.72299 15.5837 7.72276 15.5839 7.72264 15.584C7.72258 15.584 7.72258 15.584 7.72255 15.584C7.72259 15.584 7.72265 15.584 8 16ZM16.5 5.33333C16.5 2.22235 14.4016 -0.5 11.6364 -0.5L11.6364 0.5C13.6711 0.5 15.5 2.57765 15.5 5.33333L16.5 5.33333Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
            {
              d: "M11.6364 0C10.1091 0 8.76364 0.933333 8 2.4C7.23636 0.933333 5.89091 0 4.36364 0C1.96364 0 0 2.4 0 5.33333C0 10.6222 8 16 8 16C8 16 16 10.6667 16 5.33333C16 2.4 14.0364 0 11.6364 0Z",
              fill: "rgba(235,47,193,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="48px"
          left="4px"
          color={likeIconColor}
          onClick={() => {
            likeIconOnClick();
          }}
          {...getOverrideProps(overrides, "LikeIcon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="21px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="center"
          width="24px"
          height="24px"
          position="absolute"
          top="44px"
          left="18px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.likes}
          {...getOverrideProps(overrides, "Like")}
        ></Text>
        <Image
          width="40px"
          height="40px"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          src={user?.profilePic}
          onClick={() => {
            imageOnClick();
          }}
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </View>
      <Flex
        gap="7px"
        direction="column"
        width="281px"
        shrink="0"
        height="74px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ContentFrame")}
      >
        <View
          width="277px"
          height="25px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Header")}
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
            width="119px"
            height="24px"
            position="absolute"
            top="0px"
            left="0px"
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
            justifyContent="flex-end"
            letterSpacing="0px"
            width="141px"
            position="absolute"
            top="1px"
            left="136px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.postedAt}
            {...getOverrideProps(overrides, "Timestamp")}
          ></Text>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="277px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={post?.content}
          {...getOverrideProps(overrides, "Content")}
        ></Text>
      </Flex>
    </Flex>
  );
}

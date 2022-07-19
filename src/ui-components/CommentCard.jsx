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
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CommentCard(props) {
  const { user, post, overrides, ...rest } = props;
  const [vectorFill, setVectorFill] = useStateMutationAction(undefined);
  const vectorOnMouseEnter = () => {
    setVectorFill("red");
  };
  const vectorOnMouseLeave = () => {
    setVectorFill("white");
  };
  return (
    <Flex
      gap="8px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="8px 16px 8px 16px"
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
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="9px"
          direction="column"
          width="66px"
          alignItems="center"
          shrink="0"
          height="101px"
          position="relative"
          padding="6px 0px 14px 0px"
          {...getOverrideProps(overrides, "Frame 5")}
        >
          <Image
            width="48px"
            height="48px"
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
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="21px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="40px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.likes}
              {...getOverrideProps(overrides, "99")}
            ></Text>
            <Icon
              width="23px"
              height="19px"
              viewBox={{ minX: 0, minY: 0, width: 23, height: 19 }}
              paths={[
                {
                  d: "M11.5 2.85L10.654 3.3832L11.5 4.72546L12.346 3.3832L11.5 2.85ZM11.5 19L11.0145 19.8742L11.498 20.1427L11.9824 19.8759L11.5 19ZM16.7273 -1C14.1873 -1 11.9343 0.285525 10.654 2.3168L12.346 3.3832C13.2612 1.93114 14.8764 1 16.7273 1L16.7273 -1ZM12.346 2.3168C11.0657 0.285525 8.81274 -1 6.27273 -1L6.27273 1C8.12362 1 9.73882 1.93114 10.654 3.3832L12.346 2.3168ZM6.27273 -1C2.2614 -1 -1 2.3068 -1 6.33333L1 6.33333C1 3.3932 3.38406 1 6.27273 1L6.27273 -1ZM-1 6.33333C-1 8.2031 -0.149693 9.98631 0.988237 11.5504C2.13403 13.1253 3.64029 14.5728 5.11207 15.792C6.58872 17.0152 8.06043 18.033 9.1603 18.7439C9.71121 19.1 10.1712 19.3805 10.495 19.573C10.6569 19.6692 10.7849 19.7435 10.8733 19.7942C10.9176 19.8196 10.9519 19.8391 10.9757 19.8525C10.9876 19.8592 10.9968 19.8643 11.0033 19.868C11.0065 19.8698 11.0091 19.8712 11.011 19.8723C11.0119 19.8728 11.0127 19.8732 11.0133 19.8736C11.0136 19.8737 11.0139 19.8739 11.014 19.874C11.0143 19.8741 11.0145 19.8742 11.5 19C11.9855 18.1258 11.9856 18.1258 11.9857 18.1259C11.9857 18.1259 11.9857 18.1259 11.9857 18.1259C11.9856 18.1258 11.9853 18.1256 11.9848 18.1254C11.9839 18.1249 11.9823 18.124 11.98 18.1227C11.9755 18.1202 11.9682 18.1161 11.9583 18.1105C11.9386 18.0994 11.9084 18.0822 11.8684 18.0593C11.7883 18.0134 11.6693 17.9443 11.5168 17.8537C11.2116 17.6723 10.7732 17.405 10.2459 17.0642C9.18957 16.3814 7.78628 15.4102 6.38793 14.2518C4.98471 13.0894 3.61597 11.7627 2.60551 10.3738C1.58719 8.9741 1 7.60384 1 6.33333L-1 6.33333ZM11.5 19C11.9824 19.8759 11.9826 19.8758 11.9829 19.8757C11.983 19.8756 11.9834 19.8754 11.9837 19.8753C11.9842 19.8749 11.985 19.8745 11.986 19.874C11.9878 19.8729 11.9904 19.8715 11.9937 19.8697C12.0002 19.8661 12.0094 19.8609 12.0213 19.8543C12.0451 19.841 12.0795 19.8216 12.1238 19.7964C12.2123 19.7461 12.3403 19.6723 12.5023 19.5767C12.8262 19.3856 13.2864 19.1068 13.8374 18.7528C14.9376 18.0459 16.4098 17.0329 17.8869 15.8126C19.3592 14.5964 20.866 13.1502 22.0122 11.572C23.1511 10.004 24 8.21467 24 6.33333L22 6.33333C22 7.61867 21.4114 8.99604 20.394 10.3967C19.384 11.7873 18.0158 13.1119 16.6131 14.2707C15.2152 15.4255 13.8124 16.3916 12.7563 17.0701C12.2293 17.4088 11.791 17.6743 11.486 17.8542C11.3335 17.9442 11.2145 18.0127 11.1345 18.0582C11.0946 18.081 11.0644 18.0979 11.0446 18.109C11.0348 18.1145 11.0275 18.1185 11.023 18.1211C11.0207 18.1223 11.0191 18.1232 11.0182 18.1237C11.0178 18.1239 11.0175 18.1241 11.0174 18.1242C11.0173 18.1242 11.0174 18.1242 11.0174 18.1242C11.0175 18.1241 11.0176 18.1241 11.5 19ZM24 6.33333C24 2.3068 20.7386 -1 16.7273 -1L16.7273 1C19.6159 1 22 3.3932 22 6.33333L24 6.33333Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
                {
                  d: "M16.7273 0C14.5318 0 12.5977 1.10833 11.5 2.85C10.4023 1.10833 8.46818 0 6.27273 0C2.82273 0 0 2.85 0 6.33333C0 12.6139 11.5 19 11.5 19C11.5 19 23 12.6667 23 6.33333C23 2.85 20.1773 0 16.7273 0Z",
                  fill: "rgba(254,254,254,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="12.5%"
              bottom="8.33%"
              left="13.11%"
              right="49.18%"
              fill={vectorFill}
              onMouseEnter={() => {
                vectorOnMouseEnter();
              }}
              onMouseLeave={() => {
                vectorOnMouseLeave();
              }}
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          alignItems="center"
          shrink="0"
          height="72px"
          position="relative"
          padding="0px 0px 16px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <View
            width="230px"
            height="24px"
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
              height="24px"
              position="absolute"
              top="0px"
              left="0px"
              right="139px"
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
              width="139px"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.postedAt}
              {...getOverrideProps(overrides, "Timestamp")}
            ></Text>
          </View>
          <Flex
            gap="8px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 9px 0px 9px"
            {...getOverrideProps(overrides, "ContentContainer")}
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
              width="233px"
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
    </Flex>
  );
}

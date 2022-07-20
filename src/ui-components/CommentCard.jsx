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
            width="55px"
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
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="27px"
              position="absolute"
              top="0.5px"
              left="27.5px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.likes}
              {...getOverrideProps(overrides, "99")}
            ></Text>
            <Icon
              width="20.73779296875px"
              height="19px"
              viewBox={{ minX: 0, minY: 0, width: 20.73779296875, height: 19 }}
              paths={[
                {
                  d: "M10.3689 2.85L9.49943 3.34407L10.3689 4.87399L11.2383 3.34407L10.3689 2.85ZM10.3689 19L9.84444 19.8515L10.3667 20.1731L10.8901 19.8534L10.3689 19ZM15.082 -1C12.7081 -1 10.6491 0.332886 9.49943 2.35593L11.2383 3.34407C12.0681 1.88378 13.4968 1 15.082 1L15.082 -1ZM11.2383 2.35593C10.0886 0.332886 8.02963 -1 5.65574 -1L5.65574 1C7.24086 1 8.66958 1.88378 9.49943 3.34407L11.2383 2.35593ZM5.65574 -1C1.8894 -1 -1 2.40712 -1 6.33333L1 6.33333C1 3.29288 3.20076 1 5.65574 1L5.65574 -1ZM-1 6.33333C-1 8.17359 -0.244499 9.94273 0.783977 11.5106C1.81753 13.0862 3.17756 14.536 4.50787 15.7583C5.84211 16.9841 7.17198 18.0042 8.1661 18.7168C8.66406 19.0737 9.07997 19.3551 9.37296 19.5483C9.51951 19.6449 9.63545 19.7195 9.7157 19.7705C9.75583 19.796 9.78704 19.8157 9.8087 19.8292C9.81954 19.836 9.82799 19.8413 9.83397 19.845C9.83696 19.8468 9.83933 19.8483 9.84108 19.8494C9.84196 19.8499 9.84267 19.8504 9.84324 19.8507C9.84351 19.8509 9.84382 19.8511 9.84396 19.8512C9.84422 19.8513 9.84444 19.8515 10.3689 19C10.8933 18.1485 10.8934 18.1486 10.8935 18.1487C10.8935 18.1487 10.8936 18.1487 10.8935 18.1487C10.8935 18.1487 10.8932 18.1485 10.8928 18.1483C10.8921 18.1478 10.8907 18.1469 10.8887 18.1457C10.8847 18.1432 10.8783 18.1392 10.8695 18.1337C10.8519 18.1227 10.8249 18.1058 10.7891 18.083C10.7175 18.0374 10.6106 17.9687 10.4737 17.8784C10.1996 17.6978 9.80546 17.4312 9.33133 17.0913C8.3813 16.4103 7.11896 15.4413 5.86098 14.2855C4.59908 13.1261 3.36689 11.8018 2.45629 10.4136C1.54061 9.01769 1 7.63336 1 6.33333L-1 6.33333ZM10.3689 19C10.8901 19.8534 10.8903 19.8533 10.8906 19.8531C10.8907 19.853 10.891 19.8528 10.8913 19.8527C10.8919 19.8523 10.8926 19.8519 10.8935 19.8513C10.8952 19.8503 10.8976 19.8488 10.9006 19.8469C10.9066 19.8433 10.9151 19.838 10.9259 19.8313C10.9476 19.8178 10.9789 19.7983 11.019 19.773C11.0994 19.7223 11.2154 19.6482 11.362 19.5522C11.6551 19.3604 12.0712 19.0808 12.5693 18.7258C13.5638 18.0172 14.8941 17.0019 16.2288 15.779C17.5596 14.5597 18.9202 13.1111 19.9541 11.5322C20.9834 9.96051 21.7377 8.18526 21.7377 6.33333L19.7377 6.33333C19.7377 7.64807 19.1959 9.0395 18.281 10.4365C17.3708 11.8264 16.1391 13.1487 14.8777 14.3043C13.6202 15.4565 12.3584 16.4203 11.4087 17.0971C10.9347 17.4348 10.5407 17.6995 10.2668 17.8787C10.1299 17.9683 10.0231 18.0365 9.95156 18.0817C9.91577 18.1043 9.8888 18.1211 9.87125 18.132C9.86249 18.1374 9.85608 18.1414 9.85211 18.1438C9.85012 18.1451 9.84875 18.1459 9.84799 18.1464C9.84761 18.1466 9.84739 18.1467 9.84732 18.1468C9.84729 18.1468 9.84736 18.1467 9.84734 18.1468C9.84745 18.1467 9.84759 18.1466 10.3689 19ZM21.7377 6.33333C21.7377 2.40712 18.8483 -1 15.082 -1L15.082 1C17.5369 1 19.7377 3.29288 19.7377 6.33333L21.7377 6.33333Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
                {
                  d: "M15.082 0C13.1025 0 11.3586 1.10833 10.3689 2.85C9.3791 1.10833 7.63525 0 5.65574 0C2.54508 0 0 2.85 0 6.33333C0 12.6139 10.3689 19 10.3689 19C10.3689 19 20.7377 12.6667 20.7377 6.33333C20.7377 2.85 18.1926 0 15.082 0Z",
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
          height="120px"
          position="relative"
          padding="0px 0px 16px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <View
            width="260px"
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
              right="141px"
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
            width="259px"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
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

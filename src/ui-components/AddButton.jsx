/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function AddButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="374px"
      height="40px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddButton")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        position="absolute"
        top="8px"
        left="8px"
        {...getOverrideProps(overrides, "AddIcon")}
      >
        <View
          width="24px"
          height="24px"
          position="absolute"
          top="0px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "carbon:add-alt")}
        >
          <Icon
            width="19.8623046875px"
            height="19.86206817626953px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 19.8623046875,
              height: 19.86206817626953,
            }}
            paths={[
              {
                d: "M19.8621 9.93103C19.8621 15.4158 15.4158 19.8621 9.93103 19.8621C4.44628 19.8621 0 15.4158 0 9.93103C0 4.44628 4.44628 0 9.93103 0C15.4158 0 19.8621 4.44628 19.8621 9.93103Z",
                fill: "rgba(4,125,149,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="10.34%"
            bottom="6.9%"
            left="6.9%"
            right="10.34%"
            {...getOverrideProps(overrides, "Ellipse 1")}
          ></Icon>
          <Icon
            width="12px"
            height="12px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
            paths={[
              {
                d: "M12 5.25L6.75 5.25L6.75 0L5.25 0L5.25 5.25L0 5.25L0 6.75L5.25 6.75L5.25 12L6.75 12L6.75 6.75L12 6.75L12 5.25Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="27.59%"
            bottom="22.41%"
            left="24.14%"
            right="25.86%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}

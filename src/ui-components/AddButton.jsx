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
      width="421px"
      height="34px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddButton")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="29px"
        height="29px"
        position="absolute"
        top="2px"
        left="9px"
        {...getOverrideProps(overrides, "AddIcon")}
      >
        <View
          width="29px"
          height="29px"
          position="absolute"
          top="0px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "carbon:add-alt")}
        >
          <Icon
            width="25.375px"
            height="25.375px"
            viewBox={{ minX: 0, minY: 0, width: 25.375, height: 25.375 }}
            paths={[
              {
                d: "M12.6875 1.8125C18.6688 1.8125 23.5625 6.70625 23.5625 12.6875C23.5625 18.6688 18.6688 23.5625 12.6875 23.5625C6.70625 23.5625 1.8125 18.6688 1.8125 12.6875C1.8125 6.70625 6.70625 1.8125 12.6875 1.8125ZM12.6875 0C5.70938 0 0 5.70938 0 12.6875C0 19.6656 5.70938 25.375 12.6875 25.375C19.6656 25.375 25.375 19.6656 25.375 12.6875C25.375 5.70938 19.6656 0 12.6875 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="6.25%"
            bottom="6.25%"
            left="6.25%"
            right="6.25%"
            {...getOverrideProps(overrides, "Vector33612534")}
          ></Icon>
          <Icon
            width="14.5px"
            height="14.5px"
            viewBox={{ minX: 0, minY: 0, width: 14.5, height: 14.5 }}
            paths={[
              {
                d: "M14.5 6.34375L8.15625 6.34375L8.15625 0L6.34375 0L6.34375 6.34375L0 6.34375L0 8.15625L6.34375 8.15625L6.34375 14.5L8.15625 14.5L8.15625 8.15625L14.5 8.15625L14.5 6.34375Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="25%"
            bottom="25%"
            left="25%"
            right="25%"
            {...getOverrideProps(overrides, "Vector33612535")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}

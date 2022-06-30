/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function AddButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="328px"
      height="36px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      viewBox={{ minX: 0, minY: 0, width: 328, height: 36 }}
      paths={[
        {
          d: "M2 1.88571L18 1.88571L18 13.2L3.17 13.2L2 14.3031L2 1.88571ZM2 0C0.9 0 0.00999999 0.848571 0.00999999 1.88571L0 18.8571L4 15.0857L18 15.0857C19.1 15.0857 20 14.2371 20 13.2L20 1.88571C20 0.848571 19.1 0 18 0L2 0ZM4 9.42857L12 9.42857L12 11.3143L4 11.3143L4 9.42857ZM4 6.6L16 6.6L16 8.48571L4 8.48571L4 6.6ZM4 3.77143L16 3.77143L16 5.65714L4 5.65714L4 3.77143Z",
          fill: "rgba(13,26,38,1)",
          fillRule: "nonzero",
          style: { transform: "translate(29px, calc(50% - 9.43px - 0px))" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "AddButton")}
    ></Icon>
  );
}

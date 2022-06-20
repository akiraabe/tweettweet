/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import CommentCard from "./CommentCard";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function CommentCardCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CommentCardCollection")}
    >
      {(item, index) => (
        <CommentCard
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CommentCard>
      )}
    </Collection>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Post, User } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type CommentCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    user?: User;
    post?: Post;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CommentCard2(props: CommentCard2Props): React.ReactElement;

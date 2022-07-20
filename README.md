# 再起動時の手順

amplify configure


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### GitHubから持ってきた後の処理

```
amplify configure
npm install
amplify pull
```

### ReactRouterのPathParametersの渡し方
https://reffect.co.jp/react/react-router-6

### 自動生成コンポーネントの手加工
禁じ手であるが致し方なく以下の手加工を実施している。

```
126:        <Flex
127:          gap="8px"
128:          direction="column"
129:          alignItems="center"
130:          shrink="0"
131:          // height="120px" // Hand made height!!!
132:          position="relative"
133:          padding="0px 0px 16px 0px"
134:          {...getOverrideProps(overrides, "Frame")}
135:        >
```


### Stroke付きのハート

```Javascript
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
  const [likeIconColor, setLikeIconColor] = useStateMutationAction('rgba(235,47,193,1)'); // rgb(246, 143, 70)
  // const [likeIconColor, setLikeIconColor] = useStateMutationAction('rgba(246,143,70,1)'); // rgb(246, 143, 70)
  const likeIconOnClick = () => {
    console.log('#### likeIconOnClick ####');
    setLikeIconColor("rgba(246,143,70,1)");
    console.log('likeIconOnClick: ' + likeIconColor);
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
              d: "M8 2.4L7.11302 2.86181L8 4.56537L8.88698 2.86181L8 2.4ZM8 16L7.44211 16.8299L7.99769 17.2034L8.5547 16.8321L8 16ZM11.6364 -1C9.66966 -1 8.01579 0.204296 7.11302 1.93819L8.88698 2.86181C9.51148 1.66237 10.5485 1 11.6364 1L11.6364 -1ZM8.88698 1.93819C7.98421 0.204296 6.33034 -1 4.36364 -1L4.36364 1C5.45148 1 6.48852 1.66237 7.11302 2.86181L8.88698 1.93819ZM4.36364 -1C1.23308 -1 -1 2.0447 -1 5.33333L1 5.33333C1 2.7553 2.69419 1 4.36364 1L4.36364 -1ZM-1 5.33333C-1 6.90286 -0.409606 8.41112 0.392886 9.74638C1.19892 11.0875 2.2583 12.3196 3.29191 13.3561C4.32875 14.3958 5.36174 15.2606 6.13379 15.8647C6.52063 16.1673 6.84399 16.4061 7.07224 16.5703C7.18642 16.6525 7.27694 16.7161 7.33986 16.7598C7.37133 16.7816 7.39591 16.7985 7.41311 16.8102C7.42171 16.8161 7.42847 16.8207 7.43333 16.824C7.43575 16.8256 7.4377 16.8269 7.43917 16.8279C7.4399 16.8284 7.44052 16.8288 7.44101 16.8292C7.44125 16.8293 7.44153 16.8295 7.44165 16.8296C7.4419 16.8298 7.44211 16.8299 8 16C8.55789 15.1701 8.55804 15.1702 8.55817 15.1703C8.55817 15.1703 8.55826 15.1703 8.55826 15.1703C8.55827 15.1703 8.55815 15.1703 8.55792 15.1701C8.55744 15.1698 8.5565 15.1691 8.55508 15.1682C8.55224 15.1663 8.54752 15.1631 8.54099 15.1586C8.52792 15.1497 8.50758 15.1357 8.48045 15.1169C8.42619 15.0792 8.34483 15.0221 8.24026 14.9468C8.03101 14.7963 7.72937 14.5736 7.36621 14.2895C6.63826 13.7199 5.67125 12.9097 4.70809 11.9439C3.7417 10.9748 2.80108 9.8708 2.10711 8.71612C1.40961 7.55555 1 6.40825 1 5.33333L-1 5.33333ZM8 16C8.5547 16.8321 8.55492 16.8319 8.55517 16.8317C8.55529 16.8317 8.55557 16.8315 8.55582 16.8313C8.55631 16.831 8.55693 16.8306 8.55767 16.8301C8.55914 16.8291 8.5611 16.8278 8.56353 16.8261C8.5684 16.8229 8.57518 16.8183 8.5838 16.8125C8.60103 16.8008 8.62565 16.784 8.65715 16.7623C8.72014 16.7189 8.81074 16.6558 8.92499 16.5742C9.15339 16.411 9.47692 16.1737 9.86394 15.8727C10.6363 15.2719 11.6698 14.4111 12.7071 13.3738C13.7412 12.3396 14.8011 11.1085 15.6075 9.7645C16.4107 8.42589 17 6.91255 17 5.33333L15 5.33333C15 6.42078 14.5893 7.57411 13.8925 8.7355C13.1989 9.89154 12.2588 10.9937 11.2929 11.9596C10.3302 12.9222 9.36366 13.7281 8.63606 14.294C8.27308 14.5763 7.97161 14.7973 7.76251 14.9467C7.65801 15.0213 7.57673 15.078 7.52254 15.1153C7.49545 15.134 7.47514 15.1478 7.4621 15.1566C7.45558 15.161 7.45088 15.1642 7.44806 15.1661C7.44665 15.167 7.44571 15.1677 7.44525 15.168C7.44502 15.1681 7.4449 15.1682 7.44491 15.1682C7.44492 15.1682 7.44501 15.1681 7.44502 15.1681C7.44514 15.1681 7.4453 15.1679 8 16ZM17 5.33333C17 2.0447 14.7669 -1 11.6364 -1L11.6364 1C13.3058 1 15 2.7553 15 5.33333L17 5.33333Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M11.6364 0C10.1091 0 8.76364 0.933333 8 2.4C7.23636 0.933333 5.89091 0 4.36364 0C1.96364 0 0 2.4 0 5.33333C0 10.6222 8 16 8 16C8 16 16 10.6667 16 5.33333C16 2.4 14.0364 0 11.6364 0Z",
              // fill: "rgba(235,47,193,1)",
              fill: {likeIconColor},
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
```
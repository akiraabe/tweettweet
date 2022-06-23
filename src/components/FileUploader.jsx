import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react/legacy';
import { useEffect } from 'react';
import { Amplify, Hub } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

/**
 * 課題が多いのでこのコンポーネントは使っていません。
 * Reference:
 * https://qiita.com/azuharu07/items/e47e01160a8d3f6f3720
 * https://github.com/aws-amplify/amplify-ui/issues/249
 */
const FileUploader = () => {
  useEffect(() => {
    Hub.listen('Storage', (data) => console.log(data));
  }, []);

  return (
    <>
      <AmplifyS3ImagePicker trace />
    </>
  );
};

export default FileUploader;

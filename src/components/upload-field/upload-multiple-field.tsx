import React from 'react';
import { DropZone, Label } from '@adminjs/design-system';

export const uploadMultipleField: React.FC = (props) => {
  console.log({ props });
  return (
    <>
      <Label required label="Upload">
        Images
      </Label>
      <DropZone
        translations={{
          acceptedSize: 'Max size: {{maxSize}}',
          acceptedType: 'Supports: {{mimeTypes}}',
          placeholder: 'Drop your file here, or click to browse',
          unsupportedSize: 'File {{fileName}} is too big',
          unsupportedType:
            'File {{fileName}} has unsupported type: {{fileType}}',
        }}
        uploadLimitIn="MB"
        multiple
        validate={{
          maxSize: 10240000,
          mimeTypes: ['image/png', 'image/jpeg'],
        }}
      />
    </>
  );
};

export default uploadMultipleField;

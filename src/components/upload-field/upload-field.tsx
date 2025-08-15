import React from 'react';
import { DropZone, Label } from '@adminjs/design-system';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadField: React.FC = (props: any) => {
  const { property } = props;
  return (
    <>
      <Label required label="Upload">
        {property.label ?? 'Image'}
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
        validate={{
          maxSize: 10240000,
          mimeTypes: ['image/png', 'image/jpeg'],
        }}
      />
    </>
  );
};

export default uploadField;

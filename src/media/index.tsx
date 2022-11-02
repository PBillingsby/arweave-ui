import React, { FC, HTMLAttributes, useState, useEffect } from 'react';

export interface IArweaveMediaProps
  extends HTMLAttributes<HTMLImageElement | HTMLIFrameElement> {
  hash: string;
}

export const ArweaveMedia: FC<IArweaveMediaProps> = ({ hash, ...props }) => {
  const [type, setType] = useState<string | null>('');

  useEffect(() => {
    checkType();
  }, [type]);

  const checkType = async () => {
    const res = await fetch(`https://arweave.net/${hash}`, { method: 'HEAD' });
    const types = res.headers.get('content-type');
    setType(types);
  };

  if (type?.startsWith('image')) {
    return <img src={`https://arweave.net/${hash}`} {...props} />;
  } else if (type?.startsWith('video')) {
    return <iframe src={`https://arweave.net/${hash}`} {...props} />;
  } else {
    return <p>No Content Found</p>;
  }
};

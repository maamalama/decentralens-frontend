import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { siteName, titleMerge } from './meta.config';
import { ISeo } from './meta.interface';
import { onlyText } from '../utils/clear-text';

const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  image = '/favicon.ico',
  children,
  type = 'website',
}) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp='headline'>{titleMerge(title)}</title>
        <link type='image/x-icon' href='/favicon.ico' rel='shortcut icon' />
        {description ? (
          <>
            <meta
              itemProp='description'
              name='description'
              content={onlyText(description, 152)}
            />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            />
            <link rel='canonical' href={currentUrl} />
            <meta property='og:type' content={type} />
            <meta property='og:locale' content='en' />
            <meta property='og:title' content={titleMerge(title)} />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={image} />
            <meta property='og:site_name' content={siteName} />
            <meta
              property='og:description'
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow' />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;

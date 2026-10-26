import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ReactElement} from 'react';

import styles from './styles.module.css';

type ThemedScreenshotProps = {
    light: string;
    dark: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
};

/**
 * Renders both theme variants on top of each other and fades between them, so switching the theme
 * doesn't swap the image abruptly or wait for the other variant to download.
 */
export default function ThemedScreenshot({
    light,
    dark,
    alt,
    width,
    height,
    className,
}: ThemedScreenshotProps): ReactElement {
    return (
        <span className={clsx(styles.stack, className)}>
            <img
                className={clsx(styles.image, styles.light)}
                src={useBaseUrl(light)}
                alt={alt}
                width={width}
                height={height}
            />

            <img
                className={clsx(styles.image, styles.dark)}
                src={useBaseUrl(dark)}
                alt=""
                aria-hidden="true"
                width={width}
                height={height}
            />
        </span>
    );
}

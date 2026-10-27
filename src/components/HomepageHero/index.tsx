import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import ThemedScreenshot from '@site/src/components/ThemedScreenshot';
import {ReactElement} from 'react';

import styles from './styles.module.css';

export default function HomepageHero(): ReactElement {
    return (
        <header className={styles.hero}>
            <div className="container">
                <div className={styles.intro}>
                    <Link className={styles.announcement} to="/docs/guides/upstream-mirroring">
                        New in 0.16: upstream mirroring →
                    </Link>

                    <Heading as="h1" className={styles.title}>
                        Your PHP packages, under your control, installing every time.
                    </Heading>

                    <p className={styles.lead}>
                        We think private packages should be simple to host and easy to control, and a deploy
                        shouldn't fail because Packagist or GitHub is having a bad day. Packistry is an
                        open-source Composer registry that runs in one container.
                    </p>

                    <div className={styles.buttons}>
                        <Link className="button button--lg" to="/docs/installation">
                            Get started
                        </Link>

                        <Link className="button button--lg button--outline" href="https://github.com/packistry/packistry">
                            View on GitHub
                        </Link>
                    </div>

                    <p className={styles.license}>Free and open source under GPL-3.0</p>
                </div>

                <div className={styles.frame}>
                    <div className={styles.frameBar} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>

                    <ThemedScreenshot
                        light="/img/home/packages-light.webp"
                        dark="/img/home/packages-dark.webp"
                        alt="The Packistry packages page, listing private and mirrored packages"
                        width={2200}
                        height={1375}
                    />
                </div>
            </div>
        </header>
    );
}

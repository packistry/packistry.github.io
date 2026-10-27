import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import {ReactElement} from 'react';

import styles from './styles.module.css';

const installCommands = [
    'echo "APP_KEY=base64:$(openssl rand -base64 32)" > .env',
    'docker run -d --name packistry -p 80:80 --env-file .env \\',
    '  -v packistry-data:/data ghcr.io/packistry/packistry:latest',
    'docker exec -it packistry packistry add:user',
].join('\n');

export default function HomepageCallToAction(): ReactElement {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <Heading as="h2" className={styles.heading}>
                        Set it up this afternoon.
                    </Heading>

                    <p className={styles.copy}>
                        Three commands, and you have your own registry running. When you're ready for HTTPS, MySQL
                        or S3, the guides take it from there.
                    </p>

                    <CodeBlock language="bash" className={styles.code}>
                        {installCommands}
                    </CodeBlock>

                    <div className={styles.buttons}>
                        <Link className="button button--lg" to="/docs/installation">
                            Read the installation guide
                        </Link>

                        <Link className="button button--lg button--outline" href="https://github.com/packistry/packistry">
                            Star on GitHub
                        </Link>
                    </div>

                    <p className={styles.note}>
                        Found a bug or missing something?{' '}
                        <Link href="https://github.com/packistry/packistry/issues">Open an issue on GitHub</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
}

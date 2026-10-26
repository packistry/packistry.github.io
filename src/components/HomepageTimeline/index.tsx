import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import {ReactElement, ReactNode} from 'react';

import styles from './styles.module.css';

type Step = {
    title: string;
    benefit: ReactNode;
    code?: string;
    optional?: boolean;
};

const steps: Step[] = [
    {
        title: 'Start the container',
        benefit: 'One Docker image with SQLite built in, so there is nothing else to install.',
        code: [
            'echo "APP_KEY=base64:$(openssl rand -base64 32)" > .env',
            'docker run -d --name packistry -p 80:80 --env-file .env \\',
            '  -v packistry-data:/data ghcr.io/packistry/packistry:latest',
        ].join('\n'),
    },
    {
        title: 'Connect your code',
        benefit: (
            <>
                Link GitHub, GitLab, Gitea or Bitbucket and Packistry adds the webhooks for you, so new tags
                arrive on their own. No Git host? Upload zips from CI with a write token.
            </>
        ),
    },
    {
        title: 'Point Composer at it',
        benefit: (
            <>
                One line in <code>composer.json</code>, and your team keeps using Composer the way they always have.
            </>
        ),
        code: 'composer config repositories.packistry composer https://repo.example.com',
    },
    {
        title: 'Mirror upstreams',
        benefit: 'Add Packagist or a private registry, and cached packages keep installing during their outages.',
        optional: true,
    },
];

type TimelineStepProps = Step & {
    number: number;
};

function TimelineStep({title, benefit, code, optional, number}: TimelineStepProps): ReactElement {
    return (
        <li className={clsx(styles.step, optional && styles.optional)}>
            <span className={styles.marker} aria-hidden="true">
                {number}
            </span>

            <div className={styles.body}>
                <Heading as="h3" className={styles.stepTitle}>
                    {title}

                    {optional && <span className={styles.pill}>Optional</span>}
                </Heading>

                <p className={styles.benefit}>{benefit}</p>

                {code && (
                    <CodeBlock language="bash" className={styles.code}>
                        {code}
                    </CodeBlock>
                )}
            </div>
        </li>
    );
}

export default function HomepageTimeline(): ReactElement {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <Heading as="h2" className={styles.heading}>
                        From <code>docker run</code> to <code>composer install</code> in four steps
                    </Heading>

                    <p className={styles.subheading}>
                        No build pipeline, no extra services. Here's the whole path.
                    </p>

                    <ol className={styles.steps}>
                        {steps.map((step, index) => (
                            <TimelineStep key={step.title} number={index + 1} {...step} />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}

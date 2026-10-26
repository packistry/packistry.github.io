import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import {ComponentProps, ComponentType, ReactElement, ReactNode} from 'react';

import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: ComponentType<ComponentProps<'svg'>>;
    description: ReactNode;
    link?: {
        label: string;
        to: string;
    };
    featured?: boolean;
    extra?: ReactNode;
};

type BenchmarkRun = {
    label: string;
    seconds: number;
    source: 'packistry' | 'packagist';
};

const benchmarkRuns: BenchmarkRun[] = [
    {
        label: 'Packistry on the same network',
        seconds: 2.0,
        source: 'packistry',
    },
    {
        label: 'Packistry 30 ms away',
        seconds: 2.6,
        source: 'packistry',
    },
    {
        label: 'Straight from Packagist',
        seconds: 4.2,
        source: 'packagist',
    },
];

function InstallBenchmark(): ReactElement {
    const slowest = Math.max(...benchmarkRuns.map((run) => run.seconds));

    return (
        <figure className={styles.benchmark}>
            {benchmarkRuns.map((run) => (
                <div key={run.label} className={clsx(styles.benchmarkRow, styles[run.source])}>
                    <span className={styles.benchmarkLabel}>{run.label}</span>

                    <span className={styles.benchmarkTrack}>
                        <span className={styles.benchmarkBar} style={{width: `${(run.seconds / slowest) * 100}%`}} />
                    </span>

                    <span className={styles.benchmarkValue}>{run.seconds.toFixed(1)} s</span>
                </div>
            ))}

            <figcaption className={styles.benchmarkCaption}>
                <code>composer install</code> from a lock file for the laravel/laravel skeleton (110 packages),
                over HTTPS with an empty local cache. Median of seven runs.
            </figcaption>
        </figure>
    );
}

type TrafficStat = {
    amount: string;
    label: string;
    source: 'packistry' | 'packagist';
};

const trafficStats: TrafficStat[] = [
    {
        amount: '17 MB',
        label: 'through Packistry on your network, plus new releases',
        source: 'packistry',
    },
    {
        amount: '17 GB',
        label: 'straight from Packagist',
        source: 'packagist',
    },
];

function TrafficComparison(): ReactElement {
    return (
        <figure className={styles.traffic}>
            <figcaption className={styles.trafficTitle}>Internet traffic for 1,000 builds</figcaption>

            <div className={styles.trafficStats}>
                {trafficStats.map((stat) => (
                    <div key={stat.label} className={clsx(styles.trafficStat, styles[stat.source])}>
                        <span className={styles.trafficAmount}>{stat.amount}</span>
                        <span className={styles.trafficLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>

            <p className={styles.benchmarkCaption}>
                One install of the same skeleton downloads about 17 MB of packages. Packistry fetches each one
                from the internet once and serves it from your network after that.
            </p>
        </figure>
    );
}

function DashboardScreenshot(): ReactElement {
    const sources = {
        light: useBaseUrl('/img/home/dashboard-light.webp'),
        dark: useBaseUrl('/img/home/dashboard-dark.webp'),
    };

    return (
        <ThemedImage
            className={styles.screenshot}
            sources={sources}
            alt="The Packistry dashboard with a chart of downloads over the last 90 days"
            width={1800}
            height={679}
        />
    );
}

const features: FeatureItem[] = [
    {
        title: 'Installs that survive outages',
        Svg: require('@site/static/img/refresh-cw.svg').default,
        description: (
            <>
                Mirror Packagist, a GitLab group, Private Packagist, Satis or another Packistry. Metadata and
                dists are cached, so <code>composer install</code> keeps working while an upstream is down. Put it
                on the same network as your CI and installs take about half the time. Your builds also stop
                downloading the same packages over and over, which adds up on metered connections such as a cloud
                NAT gateway.
            </>
        ),
        link: {
            label: 'Set up mirroring',
            to: '/docs/guides/upstream-mirroring',
        },
        featured: true,
        extra: (
            <>
                <InstallBenchmark />
                <TrafficComparison />
            </>
        ),
    },
    {
        title: 'Yours to run',
        Svg: require('@site/static/img/server.svg').default,
        description: (
            <>
                Open source under GPL-3.0. Packages, tokens and download data stay on your infrastructure, in
                SQLite or MySQL, with archives on disk or in S3.
            </>
        ),
        link: {
            label: 'Browse the source',
            to: 'https://github.com/packistry/packistry',
        },
    },
    {
        title: 'Releases import themselves',
        Svg: require('@site/static/img/webhook.svg').default,
        description: (
            <>
                Push a tag and the webhook brings in the new version, branches included. No manual sync, no
                rebuild step.
            </>
        ),
        link: {
            label: 'Add a source',
            to: '/docs/installation#6-add-sources',
        },
    },
    {
        title: 'Tokens with just enough access',
        Svg: require('@site/static/img/token.svg').default,
        description: (
            <>
                Deploy tokens for CI, scoped to whole repositories or single packages, and personal tokens for
                your laptop. Read or write, with an optional expiry date.
            </>
        ),
        link: {
            label: 'About tokens',
            to: '/docs/concepts#deploy-tokens',
        },
    },
    {
        title: 'Sign in with what you already use',
        Svg: require('@site/static/img/log-in.svg').default,
        description: (
            <>
                SSO through OpenID Connect (Okta, Keycloak, Entra ID), GitHub, GitLab, Bitbucket or Google. New
                users get a default role and repository access on their first login.
            </>
        ),
        link: {
            label: 'About SSO',
            to: '/docs/concepts#authentication-sources',
        },
    },
    {
        title: 'See what gets installed',
        Svg: require('@site/static/img/chart-column.svg').default,
        description: (
            <>
                Download counts per package, with 90-day charts on the dashboard and on every package page.
            </>
        ),
        extra: <DashboardScreenshot />,
    },
];

function Feature({title, Svg, description, link, featured, extra}: FeatureItem): ReactElement {
    return (
        <article className={clsx(styles.card, featured && styles.featured)}>
            <div className={styles.text}>
                <span className={styles.icon}>
                    <Svg aria-hidden="true" />
                </span>

                <Heading as="h3" className={styles.title}>
                    {title}
                </Heading>

                <p className={styles.description}>{description}</p>

                {link && (
                    <Link className={styles.link} to={link.to}>
                        {link.label} →
                    </Link>
                )}
            </div>

            {extra && <div className={styles.extra}>{extra}</div>}
        </article>
    );
}

export default function HomepageFeatures(): ReactElement {
    return (
        <section className={styles.section}>
            <div className="container">
                <Heading as="h2" className={styles.heading}>
                    What you get
                </Heading>

                <div className={styles.grid}>
                    {features.map((feature) => (
                        <Feature key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

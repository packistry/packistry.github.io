import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import ThemedScreenshot from '@site/src/components/ThemedScreenshot';
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

type MirrorBenefit = {
    context: string;
    figure: string;
    detail: ReactNode;
};

const mirrorBenefits: MirrorBenefit[] = [
    {
        context: 'During an outage',
        figure: '2.3 s',
        detail: 'A cached install with Packagist and GitHub unreachable still finishes.',
    },
    {
        context: 'On the same network as CI',
        figure: '2× faster',
        detail: '2.0 s instead of 4.2 s straight from Packagist.',
    },
    {
        context: 'Internet traffic',
        figure: 'Once',
        detail: 'Each package is downloaded once, not on every build. A new Laravel app pulls 17 MB.',
    },
];

function MirrorBenefits(): ReactElement {
    return (
        <figure className={styles.benefits}>
            <div className={styles.benefitGrid}>
                {mirrorBenefits.map((benefit) => (
                    <div key={benefit.context} className={styles.benefit}>
                        <span className={styles.benefitContext}>{benefit.context}</span>
                        <span className={styles.benefitFigure}>{benefit.figure}</span>
                        <span className={styles.benefitDetail}>{benefit.detail}</span>
                    </div>
                ))}
            </div>

            <figcaption className={styles.benefitCaption}>
                Measured with <code>composer install</code> for a new Laravel app (110 packages) over HTTPS, with
                an empty local cache. Median of seven runs.
            </figcaption>
        </figure>
    );
}

function DashboardScreenshot(): ReactElement {
    return (
        <ThemedScreenshot
            className={styles.screenshot}
            light="/img/home/dashboard-light.webp"
            dark="/img/home/dashboard-dark.webp"
            alt="The Packistry dashboard with a chart of downloads over the last 90 days"
            width={1162}
            height={798}
        />
    );
}

const features: FeatureItem[] = [
    {
        title: "Builds that don't depend on Packagist",
        Svg: require('@site/static/img/refresh-cw.svg').default,
        description: (
            <>
                Mirror Packagist, a GitLab group, Private Packagist, Satis or another Packistry. Packistry caches
                the metadata and dists of everything you install, so your builds only need to reach Packistry.
            </>
        ),
        link: {
            label: 'Set up mirroring',
            to: '/docs/guides/upstream-mirroring',
        },
        featured: true,
        extra: <MirrorBenefits />,
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

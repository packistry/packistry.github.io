import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageCallToAction from '@site/src/components/HomepageCallToAction';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageTimeline from '@site/src/components/HomepageTimeline';
import {ReactElement} from 'react';

const description = 'Packistry is an open-source Composer registry for private PHP packages that you can self-host, '
    + 'with webhooks, tokens, SSO and Packagist mirroring.';

function StructuredData(): ReactElement {
    const {siteConfig} = useDocusaurusContext();

    const application = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Packistry',
        description,
        url: siteConfig.url,
        image: `${siteConfig.url}/img/social-card.png`,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Docker',
        license: 'https://www.gnu.org/licenses/gpl-3.0.html',
        isAccessibleForFree: true,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        sameAs: [
            'https://github.com/packistry/packistry',
        ],
    };

    return (
        <Head>
            <script type="application/ld+json">{JSON.stringify(application)}</script>
        </Head>
    );
}

export default function Home(): ReactElement {
    return (
        <Layout title="Open-source Composer registry" description={description}>
            <StructuredData />
            <HomepageHero />

            <main>
                <HomepageTimeline />
                <HomepageFeatures />
                <HomepageCallToAction />
            </main>
        </Layout>
    );
}

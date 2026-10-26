import Layout from '@theme/Layout';
import HomepageCallToAction from '@site/src/components/HomepageCallToAction';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageTimeline from '@site/src/components/HomepageTimeline';
import {ReactElement} from 'react';

export default function Home(): ReactElement {
    return (
        <Layout
            title="Self-hosted Composer registry"
            description="Packistry is an open-source, self-hosted Composer registry for private PHP packages, with webhooks, tokens, SSO and Packagist mirroring."
        >
            <HomepageHero />

            <main>
                <HomepageTimeline />
                <HomepageFeatures />
                <HomepageCallToAction />
            </main>
        </Layout>
    );
}

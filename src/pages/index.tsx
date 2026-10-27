import Layout from '@theme/Layout';
import HomepageCallToAction from '@site/src/components/HomepageCallToAction';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageTimeline from '@site/src/components/HomepageTimeline';
import {ReactElement} from 'react';

export default function Home(): ReactElement {
    return (
        <Layout
            title="Open-source Composer registry"
            description="Packistry is an open-source Composer registry for private PHP packages that you can self-host, with webhooks, tokens, SSO and Packagist mirroring."
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

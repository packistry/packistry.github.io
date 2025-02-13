import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {ReactElement} from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactElement;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Private Repository Support',
        Svg: require('@site/static/img/repository.svg').default,
        description: (
            <>
                Securely host your sensitive or proprietary packages in private repositories, ensuring your data remains protected.
            </>
        ),
    },
    {
        title: 'Import and Synchronize with Source',
        Svg: require('@site/static/img/source.svg').default,
        description: (
            <>
                Effortlessly manage and synchronize Composer packages from platforms like GitHub, GitLab, and Gitea.
            </>
        ),
    },
    {
        title: 'Authenticate Users',
        Svg: require('@site/static/img/users.svg').default,
        description: (
            <>
                Create user accounts to manage and control access to private repositories, ensuring only authorized individuals can interact with your packages.
            </>
        ),
    },
    {
        title: 'Authenticate Machines',
        Svg: require('@site/static/img/token.svg').default,
        description: (
            <>
                Generate deploy tokens to grant machines (e.g., build systems, CI/CD pipelines) secure access to private repositories, enabling seamless automation.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} style={{maxHeight: 60}} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

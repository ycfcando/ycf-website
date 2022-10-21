import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <video id="mse" autoPlay playsInline controls>
          <source src="/static/img/background1.mp4" type="video/mp4"/>
        </video>
      </main>
    </Layout>
  );
}

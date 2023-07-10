
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Baruckdev</title>
      </Head>
      <main className={styles.homeContainer}>

        <div className={styles.homeContent}>
          <div className={styles.bioContainer}>
            <Image src='https://github.com/MatheusBLopes.png' alt='Bio photo' height='400' width='400'/>

            <section>
              <h1>Matheus B. Lopes</h1>

              <p>
                Python developer, graduated in Systems Analysis and Development, passionate about technology. I have public speaking skills, ease of working in a team, willingness to learn and build something new.
              </p>
            </section>
          </div>

          <div className={styles.experienceContainer}>
            <h1>Experience</h1>

            <div className={styles.listContainer}>
              <div className={styles.listItem}><time>01/08/2019 - 23/11/2021</time><p><strong>PUC-PR</strong>Graduated in Systems Analysis and Development</p></div>
              <div className={styles.listItem}><time>23/11/2020 - 23/05/2022</time><p><strong>Olist</strong>I worked with systems integration, more specifically marketplaces, where we build the system to integrate orders, products with stock and price and notifications for the seller. The technologies I worked with were Python, Django, Docker, Microservices, AWS, Unit Tests, GitHub/GitLab and Grafana.</p></div>
              <div className={styles.listItem}><time>05/10/2022 - Now</time><p><strong>Itaú Bank</strong>In my current role, I thrive in the fast-paced Investment Services community, utilizing a range of technologies such as Python, lambdas, Terraform, CloudFormation, AWS, Grafana, and SQL/NoSQL databases. I excel at building efficient and scalable solutions, leveraging lambdas to streamline processes. With expertise in infrastructure management using Terraform and CloudFormation, I architect secure and robust solutions using AWS cloud provider. I harness the power of Grafana for monitoring and utilize SQL/NoSQL databases for efficient data storage and retrieval. Additionally, I am meticulous in conducting unit tests to ensure software reliability. Overall, I contribute to the success of our organization by delivering exceptional results and maintaining high-quality standards.</p></div>
            </div>
          </div>

          <div className={styles.linksContainer}>
            <h1>Links</h1>

            <section>
              <Link
                href="https://github.com/MatheusBLopes"
              >
                <a>
                  <FaGithub />
                </a>
              </Link>

              <Link
                href="https://www.linkedin.com/in/matheus-bachiste-lopes/"
              >
                <a>
                  <FaLinkedin />
                </a>
              </Link>
            </section>
          </div>


        </div>



      </main>
    </>
  )
}


import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'

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
              <div className={styles.listItem}><time>From 01/08/2019 to 23/11/2021</time><p><strong>PUC-PR</strong>Graduated in Systems Analysis and Development</p></div>
              <div className={styles.listItem}><time>From 23/11/2020 to 23/05/2022</time><p><strong>Olist</strong>I worked with systems integration, more specifically marketplaces, where we build the system to integrate orders, products with stock and price and notifications for the seller. The technologies I worked with were Python, Django, Docker, Microservices, AWS, Unit Tests, GitHub/GitLab and Grafana.</p></div>
            </div>
          </div>


        </div>



      </main>
    </>
  )
}

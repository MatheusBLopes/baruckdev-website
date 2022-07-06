import Head from "next/head";
import styles from './styles.module.scss'
import Link from "next/link";

import { getCategories, getProjectsPosts } from "../../services/wordpress";


export default function Portfolio({ categories, projectsPosts }) {
    return (
        <>
            <Head>
                <title>Portfolio | Baruckdev</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.projects}>
                    {categories.map(category => {
                        return (
                            <section key={category.id} className={styles.languageSection}>
                                <h1>{category.name}</h1>                                
                                <div className={styles.projectsList}>
                                    {projectsPosts.map(projectPost => {
                                        if (projectPost.categoryId == category.id) {
                                            return (
                                                    <Link key={projectPost.id} href={`/portfolio/${projectPost.slug}`}>
                                                        <a>
                                                            <time>{projectPost.updatedAt}</time>
                                                            <strong>{projectPost.title}</strong>
                                                            <div
                                                                className={styles.excerpt}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: projectPost.excerpt
                                                                }} />

                                                        </a>
                                                    </Link>

                                            )
                                        }
                                    })}
                                </div>

                            </section>
                        )
                    })}

                </div>

            </main>

        </>
    )
}



export async function getServerSideProps() {
    const categories = await getCategories()

    const projectsPosts = await getProjectsPosts()

    return {
        props: {
            categories,
            projectsPosts
        }
    }
}
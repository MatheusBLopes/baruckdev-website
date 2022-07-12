import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { api } from "../../services/api"
import styles from './project.module.scss'


type ProjectPost = {
    slug: string
    title: string
    content: string
    updatedAt: string
}

export interface PostProps {
    post: ProjectPost
}

export default function ProjectPost({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>Ignews | Baruckdev</title>
            </Head>
            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div className={styles.postContent}
                        dangerouslySetInnerHTML={{
                            __html: post.content
                        }}
                    />
                
                </article>
            </main>
        </>
    )

}


export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const slug = context.params.slug

    const { data: postData } = await api.get(`/project-post?slug=${slug}`);

    const post =  {
            slug: postData[0].slug,
            title: postData[0].title.rendered,
            content: postData[0].content.rendered,
            updatedAt: new Date(postData[0].modified).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
            })
    }

    return {
        props: {post},
        revalidate: 60 * 5 // 5 minutes
    }
}
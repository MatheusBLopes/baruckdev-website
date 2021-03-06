import Head from "next/head";
import styles from "./post.module.scss";
import { api } from "../../services/api"
import { GetStaticPaths, GetStaticProps } from "next";

type Post = {
    slug: string
    title: string
    content: string
    updatedAt: string
}

export interface PostProps {
    post: Post
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>{post.title} | Baruckdev</title>
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

    const { data: postData } = await api.get(`/posts?slug=${slug}`);

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
        revalidate: 60 * 60 // 1 hour
    }
}
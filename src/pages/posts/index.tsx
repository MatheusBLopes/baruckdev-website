import Head from "next/head";
import styles from './styles.module.scss';
import { api } from "../../services/api";
import Link from "next/link";

export type Post = {
    slug: string
    title: string
    excerpt: string
    updatedAt: string
}

export interface Posts {
    posts: Post[]
}

export default function Posts({ posts }: Posts) {
    return (
        <>
            <Head>
                <title>Posts | Baruckdev</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts?.map((post: Post) => (
                        <Link
                            key={post.slug}
                            href={`/posts/${post.slug}`}
                        >
                            <a>
                                <time>{post.updatedAt}</time>
                                <strong>{post.title}</strong>
                                <div 
                                    className={styles.excerpt}
                                    dangerouslySetInnerHTML={{
                                    __html: post.excerpt
                                }} />

                            </a>
                        </Link>
                    ))}


                </div>
            </main>


        </>
    )
}

export async function getServerSideProps() {

    const response = await api.get('/posts');

    const posts = response.data?.map((post: any) => {
        return {
            slug: post.slug,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            updatedAt: new Date(post.modified).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
            })
        }
    })

    return {
        props:  {
            posts
        } 
    }
}
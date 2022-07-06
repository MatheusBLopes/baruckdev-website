import ProjectPost from '../pages/portfolio/[slug]'
import { api } from './api'

type Category = {
    id: string
    name: string
    slug: string
}

type GetCategoriesResponse = {
    categories: Category[]
}

export async function getCategories(): Promise<GetCategoriesResponse> {
    const response = await api.get('/categories')

    const filteredCategories = response.data?.filter(category =>  !['posts', 'uncategorized'].includes(category.slug))

    const categories = filteredCategories.map(category => {
        return {
            id: category.id,
            name: category.name,
            slug: category.slug
        }
    })

    return categories

}

type ProjectPost = {
    id: string
    name: string
    slug: string
    updatedAt: string
    categoryId: string
    excerpt: string
}

type GetProjectsPostsResponse = {
    projectsPosts?: ProjectPost[]
}


export async function getProjectsPosts(): Promise<GetProjectsPostsResponse> {
    const response = await api.get('project-post')

    const projectsPosts = response.data?.map(projectPost => {
        return {
            categoryId: projectPost.categories[0],
            slug: projectPost.slug,
            title: projectPost.title.rendered,
            excerpt: projectPost.excerpt.rendered,
            updatedAt: new Date(projectPost.modified).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
            }),
        }
    })

    return projectsPosts
}
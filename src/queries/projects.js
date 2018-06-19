import gql from 'graphql-tag'

export const ALL_PROJECTS = gql`
    query allProjects($first: Int!, $skip: Int!) {
        allProjects(orderBy: dateCreated_DESC, first: $first, skip: $skip){
            name
            id
            slug
            shortDescription
            tools{
                icon{
                    url
                    id
                }
                name
                description
            }
        }
    }`

export const PROJECT = gql`
    query project($slug: String!) {
        project: Project(slug: $slug) {
            id
            slug
            name
            shortDescription
            tools{
                name
                id
            }
        }
    }`

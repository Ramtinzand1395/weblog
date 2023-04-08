import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      createdBy {
        name
        picture
      }
      title
      slug
      id
      coverpic {
        url
      }
    }
  }
`;
export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query getauthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverpic {
          url
        }
        id
        slug
        title
      }
    }
  }
`;
export const GET_BLOG_INFO = gql`
  query getblog($slug: String!) {
    post(where: { slug: $slug }) {
      createdBy {
        name
        picture
      }
      title
      content {
        html
      }
      coverpic {
        url
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getslug($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

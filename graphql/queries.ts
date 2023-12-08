import { gql } from "@apollo/client";

export const postsQuery = gql`
  query allPosts {
    allPost {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      categories {
        title
      }
      publishedAt
      bodyRaw
    }
  }
`;

export const postsCategoriesQuery = gql`
  query allPostCategories {
    allCategory {
      title
      slug {
        current
      }
    }
  }
`;

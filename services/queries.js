export const homeData = JSON.stringify({
  query: `query HomePage {
 nodeByUri(uri: "/") {
   __typename
   ... on ContentType {
     id
     name
     isFrontPage
   }
   ... on Page {
     id
     title
     author {
       node {
         id
       }
     }
     authorId
     date
     enclosure
     slug
     status
     template {
       templateName
     }
   }
 }
}`,
  variables: {},
});

export const postData = JSON.stringify({
  query: `query getPostDetails {
 posts {
   nodes {
     id
     postId
     title
     excerpt
     featuredImage {
       node {
         mediaItemUrl
         uri
         srcSet
         altText
       }
     }
     date
     author {
       node {
         firstName
         lastName
         nicename
         url
         avatar {
           url
         }
         description
       }
     }
     slug
     uri
     status
     content
   }
   pageInfo {
     endCursor
     hasNextPage
     hasPreviousPage
     startCursor
   }
 }
}`,
  variables: {},
});

export const menuData = JSON.stringify({
  query: `query MenuItems {
  menus {
    nodes {
      id
      databaseId
      name
      menuItems(where: {location: PRIMARY}) {
        edges {
          node {
            id
            label
            parentId
          }
        }
      }
    }
  }
}`,
  variables: {},
});

export const postsWithCategoryData = JSON.stringify({
  query: `query getPostsWithCategoryName {
 posts {
   nodes {
     categories {
       nodes {
         name
       }
     }
     date
     excerpt
     featuredImage {
       node {
         altText
       }
     }
     postId
     slug
     title
     template {
       templateName
     }
     uri
   }
 }
}`,
  variables: {},
});

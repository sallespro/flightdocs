import { useStaticQuery, graphql } from "gatsby"

const usePathList = () => {
  const data = useStaticQuery(graphql`
    {
      # allSitePage (sort: {fields: path, order: ASC}) {
      allSitePage(filter: { path: { regex: "/^((?!.*404.*).)*$/" } }) {
        nodes {
          path
        }
      }
    }
  `)
  return data.allSitePage.nodes
}

export default usePathList

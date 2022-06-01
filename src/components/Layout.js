import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"
import usePathList from "../hooks/usePathList"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const pages = usePathList()

  return (
    <>
      <SEO />
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <div className="inline text-gray-700 text-xl font-bold">
                    {title}
                  </div>
                </div>

                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="hidden -mx-4 md:flex md:items-center">
                <Link
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                  to="/"
                >
                  home
                </Link>

                {pages.map((page, index) => (
                  <div key={index}>
                    <Link
                      className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                      to={page.path}
                    >
                      {page.path.replace(/^\/|\/$/g, "")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      {/* <footer className="py-2 text-center text-gray-600 text-xs">
        &copy; 2022 - {description}
      </footer> */}
    </>
  )
}

export default Layout

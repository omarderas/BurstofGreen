import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./home/home.scss"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "./home/components/hero"
import Welcome from "./home/components/welcome"
import Services from "./home/components/services"
import About from "./home/components/about"
import Plans from "./home/components/plans"


const IndexPage = () => (

 <Layout>
 <Seo title="Home" />
    <Hero/>
    <Welcome/>
    <Services/>
    <About/>
    <Plans/>

   </Layout>
)

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"


import Link from "gatsby-link"



import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">What is SweetHome?</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">
                  <ul>
                    <li>The easiest way to search and compare more than 500 condo projects, 5,000 floor plans and 200 developers in Toronto and the GTA</li>
                    <li>Exclusive access to the most comprehensive new house and condo inventory</li>
                    <li>Find your next new house by price, location, occupancy date, amenities and much more, using an easy-to-use, map-based search engine</li>
                    <li>Access to free, up-to-date, unbiased info to make the best possible buying decisions</li>
                    <li>Instant alerts for projects of interest, deals and promotions</li>
                    <li>New house Buyers and Investors can contact Developers directly or work through an Agent</li>
                  </ul>
                </p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                  <Link to = "/ivst/"><h3 className="h4 mb-2">Hot Investments</h3> </Link>
                  <p className="text-muted mb-0">Get Priority Access to the best Investment house before public launch</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <Link to = "/movein/"><h3 className="h4 mb-2">Move-in Now</h3></Link>
                  <p className="text-muted mb-0">Search from more than 100 New house ready to move into now</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                  <Link to = "/deals/"><h3 className="h4 mb-2">Promotions and Deals</h3></Link>
                  <p className="text-muted mb-0">Take advantage and save thousands on your purchase with limited time offers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <Link to = "/coming/"><h3 className="h4 mb-2">Coming Soon</h3></Link>
                  <p className="text-muted mb-0">Stay on top of upcoming New house and townhome launches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an
                  email
                  and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+1 (202) 555-0149</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

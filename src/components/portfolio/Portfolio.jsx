import React from "react";
import "./portfolio.css";
import watch_guard from "../../assets/certificates/Network_security_Essentials.jpeg";
import az_700 from "../../assets/certificates/AZ-700.jpeg";
import azure_administrator_associate from "../../assets/certificates/azure_administrator_associate.jpg";
import aws_solutions_architect_associate from "../../assets/certificates/aws_solutions_architect_associate.jpg";

const data = [
  {
    id: 1,
    image: watch_guard,
    title: "Network Security Technical Certification",
    Credential: null,
    //   "https://learn.microsoft.com/en-us/users/yashmistry-1855/credentials/dbea2cc60eb4a1db?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 2,
    image: az_700,
    title: "Microsoft Certified: Azure Network Engineer Associate",
    Credential:
      "https://learn.microsoft.com/en-us/users/yashmistry-1855/credentials/dbea2cc60eb4a1db?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 3,
    image: azure_administrator_associate,
    title: "Microsoft Certified: Azure Administrator",
    Credential: null,
    // "https://learn.microsoft.com/en-us/users/yashmistry-1855/credentials/dbea2cc60eb4a1db?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
  {
    id: 3,
    image: aws_solutions_architect_associate,
    title: "AWS: Solutions Architect Associate",
    Credential: null,
    // "https://learn.microsoft.com/en-us/users/yashmistry-1855/credentials/dbea2cc60eb4a1db?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    // demo: "https://chatgpt-clone-kristixxg.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>
        A collection of industry-recognized certifications reflecting my
        expertise in cloud infrastructure and network security.
      </h5>
      <h2>Certificates</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, Credential, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {Credential !== null ? (
                  <a href={Credential} className="btn" target="#">
                    Credentials
                  </a>
                ) : null}
                {/* <a href={demo} className="btn btn-primary" target="#">
                  View Page
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

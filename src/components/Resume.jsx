import React from "react";
import Head from "./Head";
import Title from "./Title";

const Resume = () => {
  return (
    <>
      <Head title="Resume" />
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <Title title="Resume">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Title>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Arslan khan</h4>
                <p>
                  <em>
                    Adaptable and results-oriented Software Developer with over
                    1 years of expertise in crafting robust, user-centric
                    software solutions. Proficient in the end-to-end development
                    process, translating concepts into high-quality, functional
                    applications that meet client needs. Dedicated to delivering
                    polished, innovative solutions within project timelines.
                  </em>
                </p>
                <p>
                  <ul>
                    <li>Pakistan</li>
                    <li>(+92) 3224388580</li>
                    <li>arslankhan2029@gmail.com</li>
                  </ul>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>MERN Stack Development Course</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>PNY Training Institute, Lahore, Pakistan</em>
                </p>
                <p>
                  Completed an intensive MERN (MongoDB, Express.js, React,
                  Node.js) Stack Development Course at PNY Training Institute in
                  Lahore, Pakistan. Acquired hands-on experience in building
                  full-stack web applications using modern technologies.
                  Developed expertise in leveraging MERN components to create
                  robust and dynamic web solutions, gaining practical skills in
                  [specific areas or projects].
                </p>
              </div>

              <div className="resume-item">
                <h4>Bachelor of Science in Software Engineering</h4>
                <h5>2017 - 2021</h5>
                <p>
                  <em>Minhaj University, Lahore, Pakistan</em>
                </p>
                <p>
                  Attended Minhaj University in Lahore, Pakistan, majoring in
                  Software Engineering. Developed a solid foundation in software
                  development methodologies and tools, gaining expertise in
                  building efficient and scalable applications. Relevant
                  coursework encompassed [specific courses or key learnings].
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Junior Web Developer</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Sunsprinkle Software House, Pakistan </em>
                </p>
                <ul>
                  <li>
                    Actively contribute to the development and deployment of
                    responsive web applications, involving coding, testing, and
                    maintenance tasks.
                  </li>
                  <li>
                    Engage closely with senior developers to acquire and apply
                    best practices in web development, supporting various phases
                    of project execution.
                  </li>
                  <li>
                    Offer innovative ideas and solutions to improve user
                    experience and functionality, participating in team
                    discussions and problem-solving activities.
                  </li>
                  <li>
                    Assist in the management and optimization of web solutions,
                    ensuring compliance with design standards and project
                    specifications.
                  </li>
                </ul>
              </div>

              {/* <div className="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2017 - 2018</h5>
                <p>
                  <em>Stepping Stone Advertising, New York, NY</em>
                </p>
                <p>
                  <ul>
                    <li>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

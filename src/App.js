import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    
        this.setState({ resumeData:  {
          "basic_info": {
            "description_header": "Hi",
            "description": "👋 I'm N Ishan Pranshu. I'm working with newest Technologies like MEAN and MERN, having an experience of more than 1.5 years.Thank you 💜",
            "section_name": {
              "about": "About me",
              "projects": "Projects",
              "skills": "Skills",
              "experience": "Experience"
            }
          },
          "projects": [
            {
              "title": "NowGrocery",
              "startDate": "2020",
              "description": "A complete Ecommerce Platform With Mobile app and Website",
              "images": [
                "images/portfolio/animal-shelter/p1.jpg",
                "images/portfolio/animal-shelter/p2.jpg"
              ],
              "url": "",
              "technologies": [
                {
                  "class": "devicon-angularjs-plain",
                  "name": "Angular"
                },
                {
                  "class": "devicon-microsoftsqlserver-plain",
                  "name": "MSSQL"
                },
                {
                  "class": "devicon-csharp-plain",
                  "name": "C#"
                }
              ]
            },
            {
              "title": "Best Drop",
              "startDate": "2021",
              "description": "An Inventory management webapp for managing edible oil stocks from raw oil to processing, packaging distributing",
              "images": [
                "images/portfolio/photography/p1.jpg",
                "images/portfolio/photography/p2.jpg"
              ],
              "url": "https://github.com",
              "technologies": [
                {
                  "class": "devicon-ionic-original",
                  "name": "Ionic"
                },
                {
                  "class": "devicon-angularjs-plain",
                  "name": "Angular"
                },
                {
                  "class": "devicon-nodejs-plain",
                  "name": "NodeJS"
                },
                {
                  "class": "devicon-microsoftsqlserver-plain",
                  "name": "MSSQL"
                }
              ]
            },
            {
              "title": "DAP",
              "startDate": "2021",
              "description": "Digital Air Products is an indoor air qualty monitoring system integrated with thingsboard IOT core",
              "images": [
                "images/portfolio/adventure/p1.jpg",
                "images/portfolio/adventure/p2.jpg"
              ],
              "url": "https://github.com",
              "technologies": [
                {
                  "class": "devicon-ionic-original",
                  "name": "Ionic"
                },
                {
                  "class": "devicon-react-original",
                  "name": "React"
                },
                {
                  "class": "devicon-nodejs-plain",
                  "name": "NodeJS"
                },
                {
                  "class": "devicon-mongodb-plain",
                  "name": "MongoDB"
                }
              ]
            },
            {
              "title": "PIE ROOMS",
              "startDate": "2020",
              "description": "Pie Rooms is a hourly hotel booking platform with user hotelier and admin panel.",
              "images": [
                "images/portfolio/adventure/p1.jpg",
                "images/portfolio/adventure/p2.jpg"
              ],
              "url": "https://github.com",
              "technologies": [
                {
                  "class": "devicon-ionic-original",
                  "name": "Ionic"
                },
                
                {
                  "class": "devicon-nodejs-plain",
                  "name": "NodeJS"
                },{
                  "class": "devicon-microsoftsqlserver-plain",
                  "name": "MSSQL"
                } ,{
                  "class": "devicon-angularjs-plain",
                  "name": "Angular"
                }
               
              ]
            }
          ],
          "experience": [
            {
              "company": "Ajatus Software",
              "title": "Software Developer",
              "years": "06.2020 - present",
              "mainTech": [
                "Angular 8/9/10",
                "Ionic 4/5",
                "ReactJs 16/17",
                "NodeJs 15/16"
              ],
              "technologies": [
                "Mssql",
                "MongoDB",
                "REST API",
                "RxJS",
                "TypeScript",
               
              ]
            },
            {
              "company": "Ajatus Software",
              "title": "Intern",
              "years": "01.2020 - 05.2019",
              "mainTech": [
                "Angular 7/8",
                "Ionic 3/4"
              ],
              "technologies": [
                "RxJs",
                "JavaScript",
                "TypeScript"
              ]
            }
          ]
        } });
      
  }

  loadSharedData() {
   


    this.setState({ sharedData: {
      "basic_info": {
        "name": "N Ishan Pranshu",
        "titles": ["MEAN Stack Developer", "MERN Stack Developer", "Mobile App Developer", "Front-end Developer",  ],
        "social": [
          {
            "name": "github",
            "url": "https://github.com",
            "class": "fab fa-github"
          },
          {
            "name": "instagram",
            "url": "https://www.instagram.com",
            "class": "fab fa-instagram"
          }
        ],
        "image": "myProfile.jpg"
      },
      "skills": {
        "icons": [
          {
            "name": "HTML 5",
            "class": "devicon-html5-plain",
            "level": "95"
          },
          {
            "name": "CSS 3",
            "class": "devicon-css3-plain",
            "level": "95"
          },
          {
            "name": "Angular",
            "class": "devicon-angularjs-plain",
            "level": "80"
          },
          {
            "name": "TypeScript",
            "class": "devicon-typescript-plain",
            "level": "90"
          },
          {
            "name": "JavaScript",
            "class": "devicon-javascript-plain",
            "level": "70"
          },
          {
            "name": "React JS",
            "class": "devicon-react-original",
            "level": "75"
          },
          {
            "name": "Bootstrap",
            "class": "devicon-bootstrap-plain",
            "level": "85"
          },
          {
            "name": "MongoDB",
            "class": "devicon-mongodb-plain",
            "level": "65"
          },
          {
            "name": "MSSql",
            "class": "devicon-mysql-plain",
            "level": "60"
          }
        ]
      }
    } });

   
    // document.title = `${this.state.sharedData.basic_info.name}`;
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-poland"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;

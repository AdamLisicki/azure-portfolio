/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adam Lisicki",
  title: "Hi all, I'm Adam",
  subTitle: emoji(
    "A passionate Cloud/DevOps Engineer ☁"
  ),
  resumeLink:
   "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adamlisicki",
  linkedin: "https://www.linkedin.com/in/adamlisickci/",
  gmail: "adam.lisicki@adamlisicki.pl",
  twitter: "https://twitter.com/AdamLisicki",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What am I passionate about",
  subTitle: "ENTRY-LEVEL CLOUD/DEVOPS ENGINEER WHO WANTS TO EXPLORE CLOUD AND DEVOPS WORLD",
  skills: [
    emoji(
      "⚡ Design, implement and manage cloud-based systems"
    ),
    emoji("⚡ Automate deployment with IaC tools (Terraform, Ansible) "),
    emoji(
      "⚡ Build and manage CI/CD pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker" 
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Warsaw School of Information Technology",
      logo: require("./assets/images/witlogo.png"),
      subHeader: "",
      duration: "",
      desc: "",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Systems Administrator",
      company: "KodeKloud Engineer",
      companylogo: require("./assets/images/kodekloudlogo.png"),
      date: "January 2022 – October 2022",
      desc: "Platform where I was working for a fictional company as a Systems Administrator.",
      descBullets: [
        "Linux System Administration",
        "Users & Groups",
        "Filesystems",
        "Storage, LVM",
        "Packages",
        "Services",
        "Networking",
        "IPTables",
        "Firewalls",
        "Deploy Simple Applications"
      ],
     
    },
    {
    role: "DevOps Engineer",
    company: "KodeKloud Engineer",
    companylogo: require("./assets/images/kodekloudlogo.png"),
    date: "October 2022 - Present",
    desc: "Platform where I am working for a fictional company as a DevOps Engineer.",
    descBullets: [
      "Deploy multi-tier applications", 
      "Troubleshoot Issues",
      "Develop Automation Playbooks",
      "Build CI/CD Pipelines",
      "Storage, LVM",
      "Containerize Applications",
      "Build Container Clusters",
      "Deploy Monitoring Solutions",
      "Regular Maintenance Activities",
      "Guiding Systems Administrators",
    ]
  },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/azurelogo.png"),
      projectName: "Static website hosted on Azure with Function App to count visitors",
      projectDesc: "HTML, CSS, Azure Blob Storage, Azure CDN, Azure Functions, Azure CosmosDB, GitHub Actions",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.showcase.adamlisicki.pl/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("https://raw.githubusercontent.com/AdamLisicki/AdamLisicki/6e39d1470ae9b2ac8359c47e240d402aa7ac7fbc/aws-cpb-gold-badge.svg"),
      projectName: "CRUD web app hosted on AWS",
      projectDesc: "Docker, DynamoDB, AWS X-Ray, AWS CloudWatch, AWS RDS, Amazon Cognito, AWS ECS (Fargate), AWS ECR, AWS CDK, Amazon CloudFront, AWS API Gateway, AWS CodeBuild, AWS CodePipeline, AWS CloudFormation, AWS SAM, AWS Lambda, AWS S3, AWS ELB, AWS Route53, GitHub, GitHub Actions, Bash, Python, Ruby, Diagraming (Lucid.app, draw.io)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AdamLisicki/aws-bootcamp-cruddur-2023"
        },
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and badges 🏆 "),
  subtitle:
    "",

  achievementsCards: [
     {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      subtitle:
        "",
      image: require("./assets/images/az305.png"),
      imageAlt: "AZ-305",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/e2032e8c-b18d-4d63-bf44-8e6e0c3dcda8"
        },
      ]
     },
     {
      title: "Microsoft Certified: DevOps Engineer Expert",
      subtitle:
        "",
      image: require("./assets/images/az400.png"),
      imageAlt: "AZ-400",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/d7db7c70-1fda-43dd-8a27-d6dc297a758b"
        },
      ]
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle:
        "",
      image: require("./assets/images/az-104.8eb34669.png"),
      imageAlt: "AZ-104",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/972fec60-6526-4766-bcbd-f4a7b2bd9073"
        },
      ]
    },
    {
      title: "AWS Partner: Accreditation (Technical)",
      subtitle:
        "",
      image: require("./assets/images/awspat.png"),
      imageAlt: "AWS Partner: Accreditation (Technical)",
      footerLink: [
        {
          name: "View Badge",
          url: "https://www.credly.com/badges/76d361da-22e8-4508-bf28-a4c8a00f7ca5"
        },
      ]
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      subtitle:
        "",
      image: require("./assets/images/awscloudquestcp.png"),
      imageAlt: "AWS Partner: Accreditation (Technical)",
      footerLink: [
        {
          name: "View Badge",
          url: "https://www.credly.com/badges/5ff666b9-ef58-4111-958d-f51d6c101daa"
        },
      ]
    },
    {
      title: "Well-Architected Proficient",
      subtitle:
        "",
      image: require("./assets/images/awswap.png"),
      imageAlt: "AWS Partner: Accreditation (Technical)",
      footerLink: [
        {
          name: "View Badge",
          url: "https://www.credly.com/badges/c9e393b3-a933-43eb-a69a-e891a4da1378"
        },
      ]
    },
    {
      title: "Google Cloud badges",
      subtitle:
        "",
      image: require("./assets/images/gcplogo2.png"),
      imageAlt: "Google Cloud badges",
      footerLink: [
        {
          name: "View Badges",
          url: "https://www.cloudskillsboost.google/public_profiles/7e3a32a9-bbc9-478b-860d-5e2018016235"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
   "",
  number: "",
  email_address: "adam.lisicki@adamlisicki.pl"
};

// Twitter Section

const twitterDetails = {
  userName: "AdamLisicki", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

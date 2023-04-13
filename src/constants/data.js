import {images} from '../constants';
const data ={
  abouts:[
    {title: 'Web Development', description: 'HTML/CSS, JavaScript Animation, WordPress, Responsive Website.', imgUrl:images.aboutIcon1, 
    color:'linear-gradient(to left top, #f3f9ff, #f3f9fe, #E6EFF9 79.74%, #E6EFF9 64.16%, #C2DAF2 98.23%)'},
    {title: 'UI/UX', description: 'User Flow, Wireframing, Prototyping, App Design.', imgUrl:images.aboutIcon2, 
    color: "linear-gradient(to left top, #f3f9ff, #f3f9fe,  #E6E6F9 79.74%, #E6E6F9 64.16%, #C2C2F2 98.23%)"},
    {title: 'Methodologies', description: 'Agile, Waterfall, Lean IT, Scrum.', imgUrl: images.aboutIcon3, 
    color: "linear-gradient(to left top, #f3f9ff, #f3f9fe, #F9F0E6 79.74%, #F9F0E6 64.16%, #F2DAC2 98.23%)"},
    {title: 'Tools', description: 'Version control, Api Testing, Browser Developer tools.', imgUrl: images.aboutIcon4, 
    color: "linear-gradient(to left top, #f3f9ff, #f3f9ff, #F8EAFC 79.74%, #F8EAFC 64.16%, #EFCDF7 98.23%)"},
  ],
  jobs:[
    {
      name:'Assistant Business Analyst',
      description: 'Primarily worked with project management team to identify and improve existing technologies, potential business process and alternative income streams in an hybrid environment', 
      company:'Ngalaya Indigenous Corporation', 
      experience: '2020'
    },
    {
      name:'Freelance Software developer', 
      description: 'Remotely assisted and maintained codebase in internal web functions and produced a basic user-friendly mobile app using the React Native framework, Stripe, UI Materials, and Typescript.', 
      company: 'ATM ONLINE VN',
      experience: '2021',
    },
    {
      name:'Studio Developer', 
      description: 'Worked with a team of two designers to build a coaching website intergrated with content blogs for Queen of My University , an ambitious startup originating from Melbourne.', 
      company: 'Queen Of My Universe', 
      experience: '2022'
    },
  ],
  skills:[
    {name: 'React', icon: images.react},
    {name: 'Next JS', icon: images.nextjs},
    {name: 'JavaScript', icon: images.javascript},
    {name: 'Sass', icon: images.sass},
    {name: 'Tailwind', icon: images.tailwind},
    {name: 'PHP', icon: images.php},
    {name: 'Wordpress', icon: images.wordpress},
    {name: 'Node', icon: images.node},
    {name: 'GraphQL', icon: images.graphql},
    {name: 'MongoDB', icon: images.mongodb},
    {name: 'Git', icon: images.git},
    {name: 'Jira', icon: images.jira},
    {name: 'Illustrator', icon: images.ai},
    {name: 'Figma', icon: images.figma},
  ],
  work:[
    {
      title: 'Expense Tracker', 
      description: 'My first react web app made for fun - a single page web app for helping me to manage my expense. I was interesting in learning React, so I found a simple tutorial and it spun into a weekend project.', 
      imgUrl:images.expenseT, 
      tags:['Web App', 'All'],
      tech: ['React', 'Particles js' ],
      projectLink:'https://phucle-gin.github.io/react-expense-tracker/',
      source:'https://github.com/phucle-gin/react-expense-tracker',
    },
    {
      title: 'Queen of My Own Universe', 
      description: 'A life coaching website built with a custom WordPress theme and several plugins allowing Queen of My Own Universe to connect out to its community and live up to its full potential.', 
      imgUrl:images.queenSite, 
      tags:['WordPress', 'All'],
      tech:['Wordpress' , 'WP Plugins','Seo'],
      projectLink:"https://queenofmyownuniverse.com",
      source:"#",
    },
    {
      title: 'Smart Brain', 
      description: 'A smart web app that makes use of an image recognition API and is built with React, Node/Express as a server, and SQL to keep track of data.', 
      imgUrl:images.about01, 
      tags:['Web App', 'All'],
      tech:['React', 'Express Js','SQL', 'Netlify'],
      upcoming:'upcoming'
    },
    {
      title: 'React Portfolio', 
      description: 'My first portfolio website I designed and built in 2021. Developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.', 
      imgUrl:images.reactSite, 
      tags:['React Web', 'All'],
      tech: ['React', 'SCSS', 'Netlify','Cloudflare'],
      projectLink:'https://phucle.org',
      source:'https://github.com/phucle-gin/react-portfolio',
    },
    {
      title: 'Virtualality', 
      description: 'An UI/UX website to stimulate virtual reality experience in the mordern world. Developed with Next.js, Framer Motion, Tailwind Css and Netlify', 
      imgUrl:images.nextjsweb, 
      tags:['UI/UX', 'All'],
      tech: ['Next.js', 'Framer Motion', 'Netlify','Tailwind CSS'],
      projectLink:'https://virtualality.netlify.app',
      source:'https://github.com/phucle-gin/nextjs-website',
    },
  ], 
};

export default data;
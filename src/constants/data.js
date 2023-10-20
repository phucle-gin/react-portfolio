import {images} from '../constants';
const data ={
   aboutContent: [
    {
      id: "intro",
      text: "Hello! My name is Henry and I'm a software engineer focusing on building exceptional digital experiences."
    },
    {
      id: "interests",
      text: "I enjoy creating things that live on the internet. My interest in web programming began in 2015 when I was introduced to Wix to attempt modifying a button for lab exercises — turns out hacking together a custom button taught me a lot about HTML & CSS!"
    },
    {
      id: "projects",
      text: "I'm currently working on different side projects that could aid me in developing my skill sets. Here are a few technologies that I've been working with recently:"
    }
   ],
   abouts:[
    {title: 'Web Development', description: 'HTML/CSS, JavaScript Animation, WordPress, Responsive Website.', imgUrl:images.aboutIcon1},
    {title: 'UI/UX', description: 'User Flow, Wireframing, Prototyping, App Design.', imgUrl:images.aboutIcon2},
    {title: 'Methodologies', description: 'Agile, Waterfall, Lean IT, Scrum.', imgUrl: images.aboutIcon3},
    {title: 'Tools', description: 'Version control, Api Testing, Browser Developer tools.', imgUrl: images.aboutIcon4},
  ],
  jobs:[
    {
      name:'Assistant Business Analyst',
      description: 'Primarily worked with project management team to identify and improve existing technologies, potential business process and alternative income streams in an hybrid environment', 
      company:'Ngalaya Indigenous Corporation', 
      link:'https://www.ngalaya.org.au/',
      experience: '2020'
    },
    {
      name:'Software Developer', 
      description: 'Remotely assisted and maintained codebase in internal web functions and produced a basic user-friendly mobile app using the React Native framework, Stripe, UI Materials, and Typescript.', 
      company: 'ATM ONLINE VN',
      link:'https://atmonline.vn/',
      experience: '2021',
    },
    {
      name:'Studio Web Developer', 
      description: 'Worked with a team of two designers to build a coaching website intergrated with content blogs for Queen of My University , an ambitious startup originating from Melbourne.', 
      company: 'Queen Of My Universe', 
      link:'https://queenofmyownuniverse.com/',
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
      tech:['Wordpress' , 'WP Plugins','Seo' ,'PHP'],
      projectLink:"https://queenofmyownuniverse.com",
      source:"#",
    },
    {
      title: 'Gizmozle Ecommerce', 
      description: 'A Modern Full Stack Ecommerce Application with Stripe API and Sanity CMS', 
      imgUrl:images.ecommerce, 
      tags:['Web App', 'All'],
      tech:['NextJs' , 'Sanity CMS','Stripe' ,'API'],
      projectLink:"https://gizmozle.vercel.app",
      source:"https://github.com/phucle-gin/ecommerce-nextjs",
    },
    {
      title: 'ATM ONLINE website', 
      description: 'A modern loan provider website crafted using a powerful MERN stack. I take pride in having personally contributed to the development and design of this website. Their serivce platform is designed to offer a diverse range of loan solutions, leveraging the latest technologies, including React, TypeScript, styled-components, SQL databases and MongoDB.', 
      imgUrl:images.atm, 
      tags:['Web App', 'All'],
      tech:['React', 'TypeScript', 'MongoDB','SQL'],
      projectLink:"https://atmonline.vn/",
      source:"#",
    },
    {
      title: 'React Portfolio', 
      description: 'My first portfolio website I designed and built in 2021. Developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.', 
      imgUrl:images.reactSite, 
      tags:['React Web', 'All'],
      tech: ['React', 'SCSS', 'Netlify','Cloudflare'],
      projectLink:'https://henryle.net',
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
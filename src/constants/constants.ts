// Skill Cards images

import cplus from "../assets/c++.svg";
import css from "../assets/css.svg";
import express from "../assets/express.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import typescript from "../assets/typescript.svg";
import redux from "../assets/redux.svg";
import stripe from "../assets/stripe.png";
import postgresql from "../assets/postgresql.svg";
import prisma from "../assets/prisma.svg";
import redis from "../assets/redis.svg";
import firebase from "../assets/firebase.svg";
import socket from "../assets/socket.svg";
import graphql from "../assets/graphql.jpg";
// Project Cards images
import twitterClone from "../assets/twitter-clone.png";
import portfolio from "../assets/portfolio.png";
import redditClone from "../assets/redditClone1.png";
import reactNote from "../assets/reactNote-app.png";
import urlshortner from "../assets/url-shortner.png";
import ecommerce from "../assets/ecommerce.png";
import mylinks from "../assets/mylinks.png";

interface Skill {
  name: string;
  img: string;
}

interface Project {
  name: string;
  description: string;
  img: string;
  githubLink?: string;
  siteLink?: string;
  tools?: string[];
}

// Skill Cards Values (info)

export const Skills: Skill[] = [
  {
    name: "C++",
    img: cplus,
  },
  {
    name: "Html",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "Javascript",
    img: js,
  },
  {
    name: "React",
    img: react,
  },
  {
    name: "Tailwind CSS",
    img: tailwindcss,
  },
  {
    name: "Typescript",
    img: typescript,
  },
  {
    name: "Mongodb",
    img: mongodb,
  },
  {
    name: "Express",
    img: express,
  },
  {
    name: "Nodejs",
    img: nodejs,
  },
  {
    name: "Nextjs",
    img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "Prisma",
    img: prisma,
  },
  {
    name: "PostgreSQL",
    img: postgresql,
  },
  {
    name: "Stripe",
    img: stripe,
  },
  {
    name: "Redis",
    img: redis,
  },
  {
    name: "Firebase",
    img: firebase,
  },
  {
    name: "Socket.io",
    img: socket,
  },
  {
    name: "GraphQL",
    img: graphql,
  },
];

// Project Cards Values (info)
export const Projects: Project[] = [
  {
    name: "My Links",
    description:
      "An open-source application for efficiently storing, organizing, and managing personal links.",
    img: mylinks,
    githubLink: "https://github.com/lalo-xd/mylinks",
    tools: ["Next.js", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    name: "URL Shortener",
    description:
      "A fast and simple URL shortener for generating clean, shareable links.",
    img: urlshortner,
    githubLink: "https://github.com/lalo-xd/url-shortner",
    siteLink: "https://links-shortify.vercel.app/",
    tools: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    name: "Ecommerce",
    description:
      "A full-featured e-commerce application built with secure payments and modern web technologies.",
    img: ecommerce,
    githubLink: "https://github.com/lalo-xd/nextjs-ecommerce",
    tools: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    name: "Twitter Clone",
    description:
      "A social media platform clone featuring real-time interactions, user authentication, and scalable architecture.",
    img: twitterClone,
    githubLink: "https://github.com/lalo-xd/twitter-clone",
    tools: ["Next.js", "PostgreSQL", "Prisma", "GraphQL", "Node.js"],
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website built with React to showcase projects, skills, and experience.",
    img: portfolio,
    githubLink: "https://github.com/lalo-xd/portfolio",
    siteLink: "https://lalo-xd.netlify.app",
    tools: ["React", "JavaScript", "Motion", "CSS"],
  },
  {
    name: "Reddit Clone",
    description:
      "A full-stack Reddit clone developed using the MERN stack, supporting posts, comments, and user interactions.",
    img: redditClone,
    githubLink: "https://github.com/lalo-xd/reddit-clone",
    tools: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    name: "React Note App",
    description:
      "A simple and intuitive note-taking application built with React, focusing on clean UI and usability.",
    img: reactNote,
    githubLink: "https://github.com/lalo-xd/react-note-app",
    tools: ["React", "JavaScript", "CSS"],
  },
];

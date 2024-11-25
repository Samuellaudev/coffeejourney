export const config = {
  title: 'Web Developer',
  sections: ["home", "flyToUk", "jobless", "wellGrounded", "skills", "projects", "contact"],
  home: {
    title: "Web Developer",
    subtitle: "",
  },
  jobless: {
    dynamicTitle: "One Year",
    staticTitle: "Employment \nBreak"
  },
  wellGrounded: {
    dynamicTitle: "Well Grounded",
    staticTitle: "New \nChallenge"
  },
  contact: {
    mail: "info@samuellau.dev",
  },
  skills: [
    {
      name: "React",
      icon: "icons/react-native.png",
      level: 80,
    },
    {
      name: "JavaScript",
      icon: "icons/javascript.png",
      level: 80,
    },
    {
      name: "Three.js",
      icon: "icons/threejs.png",
      level: 70,
    },
    {
      name: "Blender",
      icon: "icons/blender-3d.png",
      level: 50,
    },
    {
      name: "French",
      icon: "icons/france.png",
      level: 100,
    },
    {
      name: "English",
      icon: "icons/usa.png",
      level: 90,
    },
    {
      name: "Japanese",
      icon: "icons/japan.png",
      level: 30,
    },
  ],
  projects: [
    {
      name: "Dissolve tutorial",
      description: "Create a dissolve effect with React Three Fiber",
      image: "projects/project1.jpg",
      link: "https://www.youtube.com/watch?v=ma9t7HAOZRg",
    },
    {
      name: "Transition effect",
      description: "Shader based transition effect",
      image: "projects/project2.jpg",
      link: "https://www.youtube.com/watch?v=SOF7GBmC6gE",
    },
    {
      name: "Portals",
      description: "Create portals with React Three Fiber",
      image: "projects/project3.jpg",
      link: "https://www.youtube.com/watch?v=2W_VR92Pqgs",
    },
    {
      name: "3D Portfolio",
      description: "Learn how to build a 3D portfolio",
      image: "projects/project4.jpg",
      link: "https://www.youtube.com/watch?v=pGMKIyALcK0",
    },
  ],
  contact: {
    name: "Samuel Lau",
    address: "Bristol, United Kingdom",
    socials: {
      linkedin: "https://www.linkedin.com/in/samuel-cf-lau/",
      twitter: "",
    },
    mail: "info@samuellau.dev",
  },
};
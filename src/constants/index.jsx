import { Cloud, Server, Code, Layers, Terminal, ShieldCheck } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
];

export const features = [
  {
    icon: <Cloud />,
    text: "Cloud Computing",
    description:
      "Master AWS and Azure services, including compute, storage, networking, and security best practices.",
  },
  {
    icon: <Server />,
    text: "DevOps & Automation",
    description:
      "Learn CI/CD, Infrastructure as Code (IaC), monitoring, and automation using industry-leading tools.",
  },
  {
    icon: <Code />,
    text: "Python Programming",
    description:
      "Develop strong coding skills in Python, covering data structures, automation, APIs, and web development.",
  },
  {
    icon: <Layers />,
    text: "Full-Stack Development",
    description:
      "Build scalable web applications using Next.js, React, and backend APIs with modern frameworks.",
  },
  {
    icon: <Terminal />,
    text: "Containerization & Orchestration",
    description:
      "Deploy and manage containers with Docker and Kubernetes for scalable applications.",
  },
  {
    icon: <ShieldCheck />,
    text: "Cloud Security & Compliance",
    description:
      "Implement security best practices, IAM, encryption, and compliance standards in cloud environments.",
  },
];


export const testimonials = [
  {
    user: "Alex Chen",
    company: "Silicon Innovations",
    image: user1,
    text: "From zero coding experience to full-stack developer in 6 months. The project-based learning approach made complex concepts click.",
  },
  {
    user: "Maria Rodriguez",
    company: "Data Dynamics",
    image: user2,
    text: "The data science track gave me the perfect mix of statistics and programming. Now I'm confidently building ML models at work.",
  },
  {
    user: "James Wilson",
    company: "Cloud Solutions Inc",
    image: user3,
    text: "The cloud computing modules were fantastic. Learning AWS and Azure simultaneously gave me a competitive edge in the job market.",
  },
  {
    user: "Priya Patel",
    company: "Mobile Innovators",
    image: user4,
    text: "Transitioning from web to mobile development was seamless thanks to the comprehensive React Native and Swift courses.",
  },
  {
    user: "Thomas Schmidt",
    company: "Security First",
    image: user5,
    text: "The cybersecurity program covered everything from network security to ethical hacking. It prepared me perfectly for my Security+ certification.",
  },
  {
    user: "Lisa Montgomery",
    company: "DevOps Enterprise",
    image: user6,
    text: "Whether it's CI/CD or cloud architecture, the hands-on labs made learning DevOps principles engaging and practical.",
  },
];

export const checklistItems = [
  {
    title: "Master Modern Development",
    description:
      "Build full-stack applications using popular frameworks like React, Node.js, and Python Django.",
  },
  {
    title: "Cloud & DevOps Excellence",
    description:
      "Deploy and scale applications across major cloud platforms while implementing DevOps best practices.",
  },
  {
    title: "Data Science & AI",
    description:
      "Learn data analysis, machine learning, and AI implementation using Python, TensorFlow, and PyTorch.",
  },
  {
    title: "Mobile Development",
    description:
      "Create cross-platform mobile apps using React Native and native development with Swift and Kotlin.",
  },
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Understand security principles, implement secure systems, and prepare for key industry certifications.",
  },
  {
    title: "UI/UX Design",
    description:
      "Master user interface design, prototyping tools, and user research methodologies.",
  },
];

export const devopsResourcesLinks = [
  { href: "https://roadmap.sh", text: "Roadmaps" },
  { href: "#", text: "Course Modules" },
  { href: "#", text: "Practice Labs" },
  { href: "#", text: "Study Guides" },
  { href: "#", text: "Certification Prep" },
];

export const toolsLinks = [
  { href: "https://docker.com/", text: "Docker" },
  { href: "https://kubernetes.io/", text: "Kubernetes" },
  { href: "https://jenkins.io/", text: "Jenkins" },
  { href: "https://terraform.io/", text: "Terraform" },
  { href: "https://git-scm.com/", text: "Git" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "https://meet.google.com", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "https://linkedin.com", text: "Jobs" },
];

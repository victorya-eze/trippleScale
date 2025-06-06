import AwsLogo from "../assets/aws-logo.svg";
import AzureLogo from "../assets/azure-logo.svg";
import DevOpsLogo from "../assets/devops-logo.svg";
import NextJsLogo from "../assets/next-js-logo.svg";
import PythonLogo from "../assets/python-logo.svg";
import LgtmLogo from "../assets/lgtm-logo.svg";

const courses = [
  {
    id: 1,
    title: "AWS Cloud Computing",
    logo: AwsLogo,
    price: "£500",
    duration: "12 weeks",
    level: "Intermediate",
    students: 1234,
    rating: 4.8,
    category: "Cloud Computing",
    outline: [
      "Introduction to Cloud Computing: Understanding cloud models, deployment methods, and architecture.",
      "AWS Services Overview: Deep dive into EC2, S3, Lambda, and other critical AWS services.",
      "Deploying Applications on AWS: Learn how to deploy and scale applications using AWS services.",
      "AWS Security Best Practices: Implementing IAM, VPC security, and encryption in AWS.",
      "Cost Management in AWS: Understand cost estimation, monitoring, and optimization using AWS tools.",
    ],
  },
  {
    id: 2,
    title: "Azure Cloud Computing",
    logo: AzureLogo,
    price: "£500",
    duration: "10 weeks",
    level: "Intermediate",
    students: 987,
    rating: 4.7,
    category: "Cloud Computing",
    outline: [
      "Introduction to Azure: Understanding Azure services, regions, and resource groups.",
      "Azure Virtual Machines: Deep dive into VMs, storage, and networking in Azure.",
      "Azure App Services: Deploying web applications using Azure App Services.",
      "Azure Security Best Practices: Implementing role-based access control and security policies.",
      "Azure Cost Management: Monitoring and optimizing costs in Azure subscriptions.",
    ],
  },
  {
    id: 3,
    title: "DevOps Fundamentals",
    logo: DevOpsLogo,
    price: "£700",
    duration: "8 weeks",
    level: "Beginner",
    students: 654,
    rating: 4.5,
    category: "DevOps",
    outline: [
      "Introduction to DevOps: Understanding DevOps principles, practices, and tools.",
      "Version Control with Git: Learn how to use Git for version control and collaboration.",
      "Continuous Integration with Jenkins: Automate build, test, and deployment pipelines with Jenkins.",
      "Containerization with Docker: Building, deploying, and managing applications using Docker.",
      "Infrastructure as Code: Managing infrastructure using Terraform and Ansible.",
    ],
  },
  {
    id: 4,
    title: "Next.js Web Development",
    logo: NextJsLogo,
    price: "£500",
    duration: "6 weeks",
    level: "Beginner",
    students: 432,
    rating: 4.3,
    category: "Web Development",
    outline: [
      "Introduction to Next.js: Understanding the Next.js framework and its features.",
      "Building Static Websites: Creating static websites using Next.js and Vercel.",
      "Server-Side Rendering: Implementing server-side rendering in Next.js applications.",
      "Authentication and Authorization: Adding user authentication using NextAuth.js.",
      "Deploying Next.js Apps: Deploying applications to Vercel and other platforms.",
    ],
  },
  {
    id: 5,
    title: "Python Programming",
    logo: PythonLogo,
    price: "£500",
    duration: "4 weeks",
    level: "Beginner",
    students: 632,
    rating: 4.9,
    category: "Programming",
    outline: [
      "Introduction to Python: Understanding Python syntax, data types, and basic programming concepts.",
      "Control Structures: Implementing loops, conditionals, and functions in Python.",
      "Object-Oriented Programming (OOP): Learning about classes, objects, and inheritance in Python.",
      "Working with Libraries: Exploring NumPy, Pandas, and Matplotlib for data analysis and visualization.",
      "Building Python Applications: Writing and deploying Python applications with best practices.",
    ],
  },
  {
    id: 6,
    title: "obseverbility",
    logo: LgtmLogo,
    price: "£300",
    duration: "6 weeks",
    level: "Intermediate",
    students: 0,
    rating: 4.0,
    category: "DevOps",
    outline: [
      "Introduction to Observability tools and principles.",
      "Setting up logging, metrics, and tracing for applications.",
      "Visualizing system health and performance metrics.",
      "Alerting strategies and best practices.",
      "Hands-on with popular observability platforms.",
    ],
  },
];

export default courses;

import CodeIcon from '@mui/icons-material/Code';
import { CloudQueue, Lightbulb } from '@mui/icons-material';
import { Storage } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import { School } from '@mui/icons-material';
import BugReportIcon from '@mui/icons-material/BugReport';


export const CAPABILITIES = [
  { id: "frontend", icon: CodeIcon, title: "Front-End Development", blurb: "React, TypeScript, UX accessibility" },
  { id: "qa", icon: BugReportIcon, title: "Quality & Testing", blurb: "QA automation, integration tests, reliability" },
  { id: "data", icon: Storage, title: "Data & Analysis", blurb: "SQL, Python, Looker dashboards" },
  { id: "product", icon: Lightbulb, title: "Product & Strategy", blurb: "CSPO, user stories, cross-functional collaboration" },
  { id: "writing", icon: Edit, title: "Writing & Documentation", blurb: "Process docs, guides, and release notes" },
  { id: "backend-cloud", icon: CloudQueue, title: "Backend, AWS & Infrastructure", blurb: "Microservices in Go with AWS Lambda, DynamoDB, and Terraform IaC." },
  { id: "instructional-design", icon: School, title: "Instructional Design & eLearning", blurb: "Learner-centered digital content grounded in pedagogy and user experience. Combines classroom expertise with data-driven curriculum development, writing clarity, and modern eLearning tools." }
];

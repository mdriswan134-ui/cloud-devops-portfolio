import { Project, SkillCategory, AwsService, Certification, Experience, Education } from '../types';

export const personalInfo = {
  name: "MOHAMED RISWAN S",
  title: "Cloud & DevOps Engineer",
  tagline: "AWS Certified Cloud Practitioner specializing in Infrastructure as Code, CI/CD pipelines, containerization, and resilient cloud architectures.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91-9943924384",
  email: "mdriswan134@gmail.com",
  linkedin: "https://www.linkedin.com/in/mdriswan134",
  github: "https://github.com/mdriswan134-ui",
  openToWork: true,
  status: "Actively seeking Cloud / DevOps Engineer roles",
  bio: "AWS & DevOps engineer with hands-on exposure to cloud platforms and DevOps automation through academic and personal projects. Skilled in containerization, CI/CD pipelines, and Infrastructure as Code using Docker, Kubernetes, Jenkins, and Terraform. Strong fundamentals in Linux administration, networking, and scripting, with a keen interest in building reliable, automated, and scalable deployment systems.",
  quickStats: [
    { label: "Cloud Platform", value: "AWS Specialist" },
    { label: "Certification", value: "AWS Certified" },
    { label: "Hands-on Architectures", value: "2-Tier & Serverless" },
    { label: "Core Competency", value: "IaC & CI/CD" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "job-portal-ec2-rds",
    title: "Online Job Portal",
    subtitle: "2-Tier Cloud Architecture on AWS EC2 & RDS",
    date: "July 2026",
    category: "cloud",
    featured: true,
    summary: "Architected and deployed a highly resilient 2-tier online job portal decoupling the application compute tier from the managed relational database tier with strict VPC security boundaries.",
    problem: "Traditional single-server deployments face severe security vulnerabilities, lack isolation between application traffic and sensitive user data, and fail under unpredictable job search traffic surges.",
    solution: "Designed a secure 2-tier AWS infrastructure where the Apache web/app layer resides on EC2 in a public subnet, while the MySQL database is isolated in a private tier on Amazon RDS, guarded by fine-grained AWS Security Groups allowing only authenticated port 3306 traffic from the web tier.",
    tools: [
      "AWS EC2", "AWS VPC", "AWS Security Groups", "Amazon RDS (MySQL)",
      "Linux (Ubuntu/RHEL)", "Apache HTTP Server", "HTML/CSS/JS", "AWS IAM", "SSH (PuTTY)"
    ],
    architectureDetails: [
      "Custom Virtual Private Cloud (VPC) with segregated public and private subnet topologies across availability zones",
      "Web/Application tier hosted on Amazon EC2 running Linux and Apache HTTP Server",
      "Database tier provisioned on Amazon RDS MySQL with automated backups and read isolation",
      "Security Groups acting as stateful firewalls restricting MySQL access strictly to EC2 application instances",
      "SSH key-pair authentication and IAM role-based least privilege enforcement for secure instance management via PuTTY"
    ],
    features: [
      "Secure 2-tier isolation separating web application workloads from persistent database storage",
      "Automated Apache virtual host routing with custom error handling and static asset caching",
      "Robust relational schema handling candidate profiles, job postings, resumes, and recruiter applications",
      "Strict network security policies preventing external internet access to backend database endpoints",
      "Centralized system and access log tracking on Linux for real-time traffic monitoring"
    ],
    challenges: [
      "Configuring strict bidirectional security group rules while preventing any database port exposure to the public internet",
      "Fine-tuning Apache MPM worker processes on EC2 to handle simultaneous applicant page requests efficiently",
      "Establishing deterministic database reconnection and connection pooling between application scripts and RDS"
    ],
    outcomes: [
      "Achieved 100% database network isolation, completely shielding relational records from public internet vectors",
      "Enhanced response times and page delivery with optimized Apache web server configuration on Linux",
      "Successfully demonstrated enterprise-grade multi-tier architecture aligned with AWS Well-Architected Framework guidelines"
    ],
    metrics: [
      { label: "Architecture", value: "2-Tier High Security" },
      { label: "Database Isolation", value: "100% Private" },
      { label: "Deployment", value: "AWS EC2 + RDS" },
      { label: "Access Security", value: "IAM + SG Enforced" }
    ],
    githubUrl: "https://github.com/mdriswan134-ui",
    architectureNodes: [
      { id: "users", label: "End Users / Job Seekers", tier: "Client", icon: "Users", description: "Sends HTTPS/HTTP requests over the internet" },
      { id: "igw", label: "Internet Gateway (IGW)", tier: "Network Edge", icon: "Globe", description: "VPC ingress/egress for public web traffic" },
      { id: "ec2", label: "AWS EC2 Web App Layer", tier: "Public Subnet (App Tier)", icon: "Server", description: "Apache HTTP Server, Linux OS, Application logic" },
      { id: "sg", label: "Security Groups Filter", tier: "Firewall Boundary", icon: "Shield", description: "Stateful rule: Allow port 3306 ONLY from EC2 SG" },
      { id: "rds", label: "Amazon RDS (MySQL)", tier: "Private Subnet (DB Tier)", icon: "Database", description: "Isolated storage for user profiles and job listings" }
    ]
  },
  {
    id: "serverless-food-delivery",
    title: "Serverless Food Delivery Platform",
    subtitle: "Event-Driven Microservices Architecture on AWS",
    date: "September 2026",
    category: "serverless",
    featured: true,
    summary: "Engineered an asynchronous, highly scalable event-driven food delivery backend using AWS Lambda, Amazon API Gateway, DynamoDB, S3, SQS, SNS, and CloudWatch.",
    problem: "Real-time food delivery platforms face massive intermittent traffic spikes during peak meal hours. Monolithic synchronous systems frequently suffer from cascading timeouts, high idle infrastructure costs, and single points of failure.",
    solution: "Built a fully serverless, event-driven architecture where microservices are decoupled using Amazon SQS queues and SNS topics. AWS Lambda handles orders, payments, restaurant dispatch, and delivery notifications on-demand with zero server management overhead and sub-second scaling.",
    tools: [
      "AWS Lambda", "Amazon API Gateway", "Amazon DynamoDB", "Amazon S3",
      "Amazon SNS", "Amazon SQS", "Amazon EventBridge", "AWS IAM", "Amazon CloudWatch"
    ],
    architectureDetails: [
      "API Gateway REST endpoints providing secure authentication, rate limiting, and request payload validation",
      "Modular AWS Lambda microservices for Order Placement, Payment Processing, Kitchen Dispatch, and Courier Notification",
      "Amazon SQS dead-letter queues (DLQ) and buffer queues ensuring zero message loss during peak traffic surges",
      "Amazon SNS pub/sub messaging broadcasting order status updates to multiple downstream subscriber channels",
      "Amazon DynamoDB single-digit millisecond latency NoSQL storage for fast customer order state retrieval",
      "Amazon S3 buckets storing restaurant digital menus, food images, and invoice PDFs",
      "Amazon CloudWatch providing distributed metric alarms and centralized execution log streams"
    ],
    features: [
      "Fully asynchronous event-driven order processing pipeline with zero idle server cost",
      "Microservices decoupling ensuring order placement succeeds even if kitchen notification services experience transient delays",
      "DynamoDB key-value partition indexing optimized for fast real-time order status polling",
      "Automatic failover and retry logic with SQS Dead Letter Queues for anomalous payment transactions",
      "Centralized IAM least-privilege execution roles scoping Lambda access strictly to target resources"
    ],
    challenges: [
      "Mitigating Lambda cold starts by tuning runtime memory allocations and bundle sizes",
      "Designing idempotent event handling in SQS consumer Lambdas to prevent duplicate order charges",
      "Orchestrating multi-step transaction rollbacks if payment gateway callbacks reported downstream failures"
    ],
    outcomes: [
      "Achieved sub-150ms average order ingestion API latency under simulated traffic surges",
      "Attained 99.99% theoretical service availability with zero ongoing server maintenance or patching requirements",
      "Demonstrated modern cloud-native architectural patterns benchmarked against top SaaS standards"
    ],
    metrics: [
      { label: "Architecture", value: "Serverless Event-Driven" },
      { label: "Cost Model", value: "Pay-Per-Execution" },
      { label: "Decoupling", value: "SQS + SNS Pub/Sub" },
      { label: "Data Store", value: "DynamoDB NoSQL" }
    ],
    githubUrl: "https://github.com/mdriswan134-ui",
    architectureNodes: [
      { id: "client", label: "Mobile / Web Client", tier: "Client Tier", icon: "Smartphone", description: "Submits food order & tracks delivery live" },
      { id: "apigw", label: "Amazon API Gateway", tier: "API Management", icon: "Layers", description: "REST endpoints, auth tokens, throttling" },
      { id: "lambda_order", label: "Order & Payment Lambda", tier: "Compute Tier", icon: "Cpu", description: "Validates order and writes to DynamoDB" },
      { id: "sqs_sns", label: "SQS Queues & SNS Topics", tier: "Event Broker", icon: "Radio", description: "Decouples kitchen order queue and notifications" },
      { id: "dynamo", label: "Amazon DynamoDB", tier: "NoSQL Database", icon: "HardDrive", description: "Fast single-digit ms state storage" },
      { id: "cloudwatch", label: "Amazon CloudWatch", tier: "Observability", icon: "Activity", description: "Logs, metrics, alarms, and tracing" }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    description: "Core cloud infrastructure, identity management, and serverless compute",
    skills: [
      { name: "AWS (Amazon Web Services)", level: 85, experience: "Hands-on Projects & Certified", icon: "Cloud", highlight: true, tags: ["EC2", "S3", "IAM", "VPC", "Lambda", "RDS", "DynamoDB"] },
      { name: "Microsoft Azure", level: 60, experience: "Fundamentals & Basic Labs", icon: "CloudSun", tags: ["Virtual Machines", "Blob Storage", "Azure AD"] },
      { name: "Google Cloud Platform (GCP)", level: 55, experience: "Fundamentals", icon: "CloudCog", tags: ["Compute Engine", "Cloud Storage", "IAM"] }
    ]
  },
  {
    title: "Containerization & Orchestration",
    description: "Packaging applications and running containerized workloads",
    skills: [
      { name: "Docker", level: 80, experience: "Hands-on", icon: "Box", highlight: true, tags: ["Dockerfiles", "Multi-stage Builds", "Docker Compose", "Image Optimization"] },
      { name: "Kubernetes (K8s)", level: 70, experience: "Academic & Personal Labs", icon: "Boxes", highlight: true, tags: ["Pods", "Deployments", "Services", "ConfigMaps", "Helm (basic)"] }
    ]
  },
  {
    title: "CI/CD & Automation",
    description: "Continuous integration pipelines and automated release engineering",
    skills: [
      { name: "Jenkins", level: 75, experience: "Hands-on Automation", icon: "GitCommit", highlight: true, tags: ["Pipeline as Code", "Declarative Pipelines", "Build Triggers", "Plugins"] },
      { name: "GitHub Actions", level: 75, experience: "CI/CD Workflows", icon: "PlayCircle", tags: ["Workflows", "Secrets Management", "Automated Testing"] },
      { name: "GitLab CI", level: 60, experience: "Basic Concepts", icon: "GitBranch", tags: [".gitlab-ci.yml", "Runners", "Pipelines"] }
    ]
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Declarative infrastructure provisioning and configuration management",
    skills: [
      { name: "Terraform", level: 72, experience: "Hands-on IaC", icon: "Code2", highlight: true, tags: ["HCL Syntax", "Providers", "State Management", "Modules", "AWS Provider"] },
      { name: "Ansible", level: 60, experience: "Configuration Management (Basic)", icon: "Terminal", tags: ["Playbooks", "Inventory", "SSH Automation", "YAML"] }
    ]
  },
  {
    title: "Monitoring, Observability & Networking",
    description: "System health checks, metric visualization, and core network fundamentals",
    skills: [
      { name: "Prometheus & Grafana", level: 68, experience: "Monitoring Dashboards", icon: "LineChart", tags: ["Metrics Scraping", "PromQL", "Dashboard Visualizations"] },
      { name: "ELK Stack", level: 60, experience: "Log Aggregation (Basic)", icon: "FileSearch", tags: ["Elasticsearch", "Logstash", "Kibana"] },
      { name: "Networking Fundamentals", level: 78, experience: "Core Engineering", icon: "Network", tags: ["TCP/IP", "DNS", "Subnetting", "Routing Tables", "NAT Gateways", "CIDR"] }
    ]
  },
  {
    title: "Operating Systems & Scripting",
    description: "System administration, command-line mastery, and programmatic automation",
    skills: [
      { name: "Linux / Unix Administration", level: 82, experience: "Production System Ops", icon: "TerminalSquare", highlight: true, tags: ["Ubuntu", "RHEL", "Systemd", "User Permissions", "Package Managers"] },
      { name: "Shell Scripting (Bash)", level: 80, experience: "Task & Server Automation", icon: "FileCode", highlight: true, tags: ["Cron Jobs", "Log Parsers", "Instance Bootstrap Scripts"] },
      { name: "Python", level: 72, experience: "Scripting & Flask Backend", icon: "Cpu", tags: ["Flask API", "Boto3 (AWS SDK)", "Automation Scripts", "Data Handling"] },
      { name: "Git & GitHub", level: 85, experience: "Version Control", icon: "GitPullRequest", tags: ["Branching Strategies", "Pull Requests", "Merge Conflict Resolution"] }
    ]
  },
  {
    title: "Professional Soft Skills",
    description: "Interpersonal effectiveness and operational resilience in engineering teams",
    skills: [
      { name: "Technical Troubleshooting", level: 90, experience: "Systematic Root-Cause Analysis", icon: "Wrench", tags: ["Log Inspection", "Connectivity Tests", "Fault Isolation"] },
      { name: "Teamwork & Collaboration", level: 88, experience: "Cross-functional Coordination", icon: "Users", tags: ["Peer Reviews", "Documentation", "Agile Standups"] },
      { name: "Adaptability & Continuous Learning", level: 92, experience: "Rapid Tech Adoption", icon: "Sparkles", tags: ["Cloud Trends", "Self-Taught Labs", "Certifications"] }
    ]
  }
];

export const awsServicesData: AwsService[] = [
  {
    name: "Amazon EC2",
    category: "Compute",
    icon: "Server",
    badge: "Core Compute",
    description: "Elastic Compute Cloud providing scalable, secure virtual servers in the cloud with custom AMI and security configurations.",
    keyFeatures: ["Instance resizing", "Custom Security Groups", "EBS volume mounting", "SSH key authentication"],
    usedIn: "Online Job Portal & Login360 Internship Flask Applications"
  },
  {
    name: "Amazon S3",
    category: "Storage",
    icon: "HardDrive",
    badge: "Object Storage",
    description: "Scalable object storage with 99.999999999% (11 9s) of data durability for assets, media, and backup storage.",
    keyFeatures: ["Bucket policies", "Lifecycle rules", "Static website hosting", "Versioning"],
    usedIn: "Serverless Food Delivery Platform asset hosting"
  },
  {
    name: "AWS IAM",
    category: "Security & Identity",
    icon: "ShieldCheck",
    badge: "Access Governance",
    description: "Identity and Access Management to securely manage access to AWS services and resources with granular least-privilege policies.",
    keyFeatures: ["Role-based access (RBAC)", "Custom JSON policies", "MFA enforcement", "Instance Profiles"],
    usedIn: "EC2 service role delegation and Lambda least-privilege execution"
  },
  {
    name: "Amazon VPC",
    category: "Networking",
    icon: "Network",
    badge: "Isolated Network",
    description: "Virtual Private Cloud enabling provision of logically isolated sections of AWS to launch resources in defined virtual networks.",
    keyFeatures: ["Public/Private subnets", "Internet Gateways", "Route tables", "Network ACLs & Security Groups"],
    usedIn: "2-Tier Job Portal network segregation and tier isolation"
  },
  {
    name: "AWS Lambda",
    category: "Serverless Compute",
    icon: "Zap",
    badge: "Event-Driven",
    description: "Run code without provisioning or managing servers, scaling automatically from a few requests per day to thousands per second.",
    keyFeatures: ["Pay-per-use execution", "Event source triggers", "Sub-second elasticity", "Zero server patching"],
    usedIn: "Food Delivery order processing, payment verification, and dispatch"
  },
  {
    name: "Amazon RDS",
    category: "Managed Database",
    icon: "Database",
    badge: "Relational DB",
    description: "Managed relational database service offering easy setup, operation, and scaling of MySQL engines in the cloud.",
    keyFeatures: ["Multi-AZ deployment", "Automated backups", "Storage autoscaling", "Private subnet placement"],
    usedIn: "Online Job Portal relational candidate & recruiter data tier"
  },
  {
    name: "Amazon DynamoDB",
    category: "Serverless NoSQL",
    icon: "Layers",
    badge: "Key-Value DB",
    description: "Fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale.",
    keyFeatures: ["Single-digit ms latency", "On-demand capacity", "Fine-grained access control", "TTL automation"],
    usedIn: "Food delivery order tracking and Login360 Flask API integration"
  },
  {
    name: "Amazon API Gateway",
    category: "Networking & Content",
    icon: "Radio",
    badge: "API Management",
    description: "Fully managed service making it simple for developers to create, publish, maintain, monitor, and secure RESTful APIs at scale.",
    keyFeatures: ["API keys & rate throttling", "CORS management", "Request/Response transformation", "Lambda proxy integration"],
    usedIn: "Serverless Food Delivery Platform public API entrypoint"
  },
  {
    name: "Amazon SQS & SNS",
    category: "Application Integration",
    icon: "MessageSquare",
    badge: "Decoupling & Pub/Sub",
    description: "Message queuing and publish/subscribe notification services for building loosely coupled, fault-tolerant microservices.",
    keyFeatures: ["Standard & FIFO queues", "Dead Letter Queues (DLQ)", "Fanout pattern", "SMS/Email push alerts"],
    usedIn: "Asynchronous order dispatch and customer notifications"
  },
  {
    name: "Amazon CloudWatch",
    category: "Monitoring & Observability",
    icon: "Activity",
    badge: "Metrics & Logs",
    description: "Observability service providing actionable insights to monitor applications, respond to performance changes, and optimize resources.",
    keyFeatures: ["Alarms & notifications", "Log streaming & querying", "Custom metric dashboards", "Event triggers"],
    usedIn: "Real-time error tracking and health alarms across all cloud workloads"
  }
];

export const experienceData: Experience[] = [
  {
    role: "Cloud/DevOps Intern",
    company: "Login 360",
    location: "Chennai, Tamil Nadu, India",
    period: "July 2026 – September 2026",
    type: "Internship",
    summary: "Hands-on engineering internship focused on deploying scalable cloud applications on AWS, configuring secure Linux environments, and developing RESTful microservices with Python Flask and DynamoDB.",
    responsibilities: [
      "Developed and deployed cloud-based applications utilizing Amazon EC2, Linux OS, and Python Flask web framework.",
      "Integrated Amazon DynamoDB NoSQL databases and REST APIs for efficient application functionality and dynamic data storage.",
      "Configured AWS Security Groups, inbound/outbound traffic rules, and tested application network connectivity using curl, Postman, and SSH.",
      "Administered Linux server environments, managing package installations, user permissions, and daemon configurations.",
      "Collaborated with senior engineers on infrastructure security audits and continuous integration validation."
    ],
    technologies: ["AWS EC2", "AWS DynamoDB", "Python Flask", "Linux (Ubuntu)", "REST APIs", "AWS Security Groups", "Git"],
    achievements: [
      "Streamlined deployment routines for Python Flask services onto Amazon EC2 using automated bash bootstrap scripts.",
      "Validated end-to-end connectivity and zero-exposure security rules for cloud database backends.",
      "Earned official DevOps and AWS Training certifications upon successful completion of production capstone evaluations."
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    badgeColor: "from-amber-500 to-orange-600",
    description: "Validates comprehensive overall understanding of the AWS Cloud platform, covering cloud concepts, security, compliance, core architectures, billing, and pricing models.",
    skills: ["Cloud Architecture", "AWS Core Services", "Security & Compliance", "Cloud Economics", "Shared Responsibility Model"],
    verified: true
  },
  {
    id: "aws-training-login360",
    title: "AWS Cloud Training",
    issuer: "Login 360, Chennai",
    date: "2026",
    badgeColor: "from-blue-500 to-indigo-600",
    description: "Intensive hands-on practical training covering AWS infrastructure provisioning (EC2, VPC, S3, IAM, RDS), network security, and cloud deployment best practices.",
    skills: ["AWS EC2 & RDS", "VPC Subnetting", "IAM Policies", "S3 Storage Classes", "CloudWatch Monitoring"],
    verified: true
  },
  {
    id: "devops-training-login360",
    title: "DevOps Engineering Training",
    issuer: "Login 360, Chennai",
    date: "2026",
    badgeColor: "from-cyan-500 to-blue-600",
    description: "Comprehensive industry-oriented training on modern DevOps tooling including Docker containerization, Kubernetes cluster management, Jenkins CI/CD automation, and Terraform IaC.",
    skills: ["Docker & Multi-stage Builds", "Kubernetes Pods & Services", "Jenkins Pipelines", "Terraform HCL", "Git Version Control"],
    verified: true
  },
  {
    id: "pitla-it-support",
    title: "IT Support Operations Course",
    issuer: "PITLA (Independent Freelance Educational Organization), Maldives",
    date: "2024 - 2025",
    badgeColor: "from-emerald-500 to-teal-600",
    description: "International coursework covering enterprise IT infrastructure diagnostics, network topology troubleshooting, operating system internals, and customer technical support operations.",
    skills: ["Hardware & Network Troubleshooting", "Operating Systems Administration", "Network Diagnostics (Ping, Traceroute)", "ITIL Support Fundamentals"],
    verified: true
  }
];

export const educationData: Education[] = [
  {
    degree: "B.Sc Information Technology",
    institution: "JJ College of Arts and Science / Bharathidasan University",
    period: "June 2023 – April 2026",
    score: "72%",
    highlights: [
      "Rigorous coursework in Computer Networks, Operating Systems, Relational Database Management Systems, and Software Engineering",
      "Led academic projects focusing on cloud infrastructure, web architectures, and system administration",
      "Consistently achieved top marks in practical laboratory sessions for Unix/Linux commands and networking protocols"
    ]
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Government Boys Higher Secondary School",
    period: "June 2022 – March 2023",
    score: "66%",
    highlights: [
      "Core focus on Science, Mathematics, and Computer Science fundamentals",
      "Developed foundational interest in programming logic and computer hardware"
    ]
  }
];

export const toolsGrid = [
  { name: "AWS", category: "Cloud Provider", color: "#FF9900" },
  { name: "Docker", category: "Containerization", color: "#2496ED" },
  { name: "Kubernetes", category: "Orchestration", color: "#326CE5" },
  { name: "Terraform", category: "Infrastructure as Code", color: "#7B42BC" },
  { name: "Linux", category: "Operating System", color: "#FCC624" },
  { name: "Git & GitHub", category: "Version Control", color: "#F05032" },
  { name: "Jenkins", category: "CI/CD Pipeline", color: "#D24939" },
  { name: "VS Code", category: "IDE & Tooling", color: "#007ACC" },
  { name: "Python", category: "Automation & API", color: "#3776AB" },
  { name: "Bash", category: "Shell Scripting", color: "#4EAA25" },
  { name: "Ansible", category: "Config Management", color: "#EE0000" },
  { name: "Prometheus", category: "Metrics Collection", color: "#E6522C" },
  { name: "Grafana", category: "Visual Dashboards", color: "#F46800" },
  { name: "MySQL", category: "Relational DB", color: "#4479A1" },
  { name: "DynamoDB", category: "NoSQL DB", color: "#4053D6" },
  { name: "Apache", category: "Web Server", color: "#D22128" }
];

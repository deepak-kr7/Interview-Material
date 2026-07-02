// 20 DevOps & Azure DevOps MCQ Questions
const mcqData = [
  {
    "id": 1,
    "category": "Terraform (IaC)",
    "question": "What is the primary purpose of the Terraform State file?",
    "options": [
      "To store the history of all git commits for the infrastructure",
      "To map real-world resources to your configuration and track metadata",
      "To encrypt secrets and passwords used in the configuration",
      "To write temporary bash scripts for VM initialization"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "Terraform uses state to map real-world resources to your configuration, keep track of metadata, and improve performance for large infrastructures."
  },
  {
    "id": 2,
    "category": "Docker & Kubernetes",
    "question": "Which Kubernetes resource is best suited for running a stateless web application?",
    "options": [
      "StatefulSet",
      "DaemonSet",
      "Deployment",
      "Job"
    ],
    "correctAnswer": [2],
    "multipleSelect": false,
    "explanation": "A Deployment is the standard Kubernetes resource designed for deploying and scaling stateless applications. For stateful applications (like databases), StatefulSet is preferred."
  },
  {
    "id": 3,
    "category": "Docker & Kubernetes",
    "question": "Which of the following are components of the Kubernetes Control Plane? (Select all that apply)",
    "options": [
      "kube-apiserver",
      "kube-scheduler",
      "kube-controller-manager",
      "etcd",
      "All of the above"
    ],
    "correctAnswer": [0, 1, 2, 3, 4],
    "multipleSelect": true,
    "explanation": "All options listed (kube-apiserver, kube-scheduler, kube-controller-manager, and etcd) are core components of the Kubernetes Control Plane, meaning 'All of the above' is correct."
  },
  {
    "id": 4,
    "category": "DevOps General",
    "question": "What does a 403 HTTP status code mean?",
    "options": [
      "Bad Request - The request could not be understood",
      "Unauthorized - Authentication is required",
      "Forbidden - The server understands the request but refuses to authorize it",
      "Not Found - The resource could not be found"
    ],
    "correctAnswer": [2],
    "multipleSelect": false,
    "explanation": "A 403 Forbidden status code indicates that the server understands who you are, but you do not have permission to access the requested resource."
  },
  {
    "id": 5,
    "category": "Linux & Git",
    "question": "In Git, what is the key difference between git merge and git rebase?",
    "options": [
      "git merge deletes the branch history, while git rebase preserves it",
      "git rebase rewrites the commit history by applying commits on top of another branch, whereas git merge combines branches with a merge commit",
      "git merge is only used for local repositories, while git rebase is for remote repositories",
      "There is no difference; they are aliases of the same command"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "git rebase reapplies commits on top of another base tip, creating a linear history. git merge joins two or more development histories together, creating a merge commit and preserving the chronological order."
  },
  {
    "id": 6,
    "category": "Azure & Azure DevOps",
    "question": "Which of the following are core services provided by Azure DevOps? (Select all that apply)",
    "options": [
      "Azure Repos",
      "Azure Pipelines",
      "Azure Boards",
      "Azure Artifacts",
      "All of the above"
    ],
    "correctAnswer": [0, 1, 2, 3, 4],
    "multipleSelect": true,
    "explanation": "Azure DevOps consists of Azure Repos (Git), Azure Pipelines (CI/CD), Azure Boards (work tracking), and Azure Artifacts (package feeds). All listed services are core to ADO, making 'All of the above' correct."
  },
  {
    "id": 7,
    "category": "Docker & Kubernetes",
    "question": "What is the default port used by the Docker Daemon for unencrypted communication?",
    "options": [
      "8080",
      "2375",
      "2376",
      "5000"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "Docker daemon uses port 2375 for unencrypted communication, and port 2376 for encrypted (TLS) communication. Port 5000 is typically used for Docker Registry."
  },
  {
    "id": 8,
    "category": "Terraform (IaC)",
    "question": "In Terraform, which command is used to check whether your configuration is syntactically valid and internally consistent?",
    "options": [
      "terraform plan",
      "terraform fmt",
      "terraform validate",
      "terraform show"
    ],
    "correctAnswer": [2],
    "multipleSelect": false,
    "explanation": "terraform validate checks the syntax, variable definitions, and consistency of your configuration files without connecting to remote services."
  },
  {
    "id": 9,
    "category": "DevOps General",
    "question": "Which of the following are types of virtualization? (Select all that apply)",
    "options": [
      "Type 1 Hypervisor (Bare-metal)",
      "Type 2 Hypervisor (Hosted)",
      "OS-level Virtualization (Containerization)",
      "Network Virtualization",
      "All of the above"
    ],
    "correctAnswer": [0, 1, 2, 3, 4],
    "multipleSelect": true,
    "explanation": "Bare-metal hypervisors, hosted hypervisors, OS-level containerization, and software-defined network virtualization are all valid forms of virtualization, making 'All of the above' correct."
  },
  {
    "id": 10,
    "category": "Azure & Azure DevOps",
    "question": "What is a 'Self-hosted Agent' in Azure Pipelines?",
    "options": [
      "A virtual machine managed by Microsoft to run your builds",
      "An agent you set up, configure, and manage yourself to run build and deployment tasks",
      "A local Git repository on your machine",
      "An automated testing tool built into Azure Boards"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "A self-hosted agent is an agent that you set up and manage on your own infrastructure (virtual machine, physical server, or container) to run build and deployment jobs."
  },
  {
    "id": 11,
    "category": "Docker & Kubernetes",
    "question": "Which Dockerfile instruction specifies the command that will always run when the container starts, and cannot be easily overridden?",
    "options": [
      "RUN",
      "CMD",
      "ENTRYPOINT",
      "ENV"
    ],
    "correctAnswer": [2],
    "multipleSelect": false,
    "explanation": "ENTRYPOINT specifies the executable that will run when the container starts. Unlike CMD, it cannot be overridden by simply passing arguments at the command line; arguments are appended to the ENTRYPOINT."
  },
  {
    "id": 12,
    "category": "Linux & Git",
    "question": "Which of the following are common branching strategies used in Git? (Select all that apply)",
    "options": [
      "GitFlow",
      "Trunk-Based Development",
      "GitHub Flow",
      "GitLab Flow",
      "All of the above"
    ],
    "correctAnswer": [0, 1, 2, 3, 4],
    "multipleSelect": true,
    "explanation": "GitFlow, Trunk-Based Development, GitHub Flow, and GitLab Flow are all industry-standard branching patterns, making 'All of the above' correct."
  },
  {
    "id": 13,
    "category": "Azure & Azure DevOps",
    "question": "What is the primary purpose of Azure Key Vault?",
    "options": [
      "To host website domain names",
      "To securely store and manage secrets, encryption keys, and certificates",
      "To act as a load balancer for virtual machines",
      "To store large video and database backup files"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "Azure Key Vault is a cloud service that safeguards cryptographic keys, secrets (like API keys, database passwords), and certificates."
  },
  {
    "id": 14,
    "category": "Docker & Kubernetes",
    "question": "In Kubernetes, what is a Pod?",
    "options": [
      "A physical node in the cluster",
      "The smallest deployable unit that can contain one or more tightly coupled containers",
      "A database storage volume",
      "A network firewall rule"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "A Pod is the basic execution unit of a Kubernetes application. It represents a single instance of a running process in your cluster and can contain one or more containers."
  },
  {
    "id": 15,
    "category": "DevOps General",
    "question": "What does Continuous Integration (CI) typically involve? (Select all that apply)",
    "options": [
      "Automated building of the code",
      "Automated testing of the code",
      "Developers merging their code changes back to the main branch frequently",
      "Automated code quality analysis (Linting)",
      "All of the above"
    ],
    "correctAnswer": [0, 1, 2, 3, 4],
    "multipleSelect": true,
    "explanation": "Continuous Integration comprises automated building, automated testing, frequent code merges, and static code linting/security analysis, making 'All of the above' correct."
  },
  {
    "id": 16,
    "category": "Terraform (IaC)",
    "question": "What is the purpose of the 'terraform init' command?",
    "options": [
      "To apply the infrastructure changes to the cloud provider",
      "To delete all existing resources created by Terraform",
      "To initialize the working directory and download the required provider plugins and modules",
      "To format the terraform configuration files"
    ],
    "correctAnswer": [2],
    "multipleSelect": false,
    "explanation": "terraform init initializes a working directory containing Terraform configuration files. It downloads the required provider plugins (like Azure, AWS) and modules."
  },
  {
    "id": 17,
    "category": "DevOps General",
    "question": "Which port does Jenkins typically run on by default?",
    "options": [
      "80",
      "443",
      "8080",
      "9000"
    ],
    "correctAnswer": [2],
    "multipleSelect": false,
    "explanation": "Jenkins runs on port 8080 by default. Port 9000 is typically used by SonarQube, and 80/443 are standard HTTP/HTTPS ports."
  },
  {
    "id": 18,
    "category": "Linux & Git",
    "question": "Which of the following Linux commands can be used to monitor system resources (CPU, Memory, Disk)? (Select all that apply)",
    "options": [
      "top",
      "free",
      "df",
      "vmstat",
      "All of the above"
    ],
    "correctAnswer": [0, 1, 2, 3, 4],
    "multipleSelect": true,
    "explanation": "All four commands are resource utilities: top (processes/CPU), free (memory), df (disk space), and vmstat (virtual memory/kernel statistics). Hence, 'All of the above' is correct."
  },
  {
    "id": 19,
    "category": "Docker & Kubernetes",
    "question": "What is the role of an Ingress Controller in Kubernetes?",
    "options": [
      "To build Docker images from a Dockerfile",
      "To manage external access to the services in a cluster, typically HTTP/HTTPS, by providing load balancing and routing",
      "To store database credentials securely",
      "To allocate IP addresses to the worker nodes"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "An Ingress Controller is a daemon that manages external access to services in a Kubernetes cluster, providing routing rules, SSL termination, and name-based virtual hosting."
  },
  {
    "id": 20,
    "category": "Linux & Git",
    "question": "What is the difference between 'git pull' and 'git fetch'?",
    "options": [
      "git pull only downloads metadata, while git fetch downloads all files",
      "git pull downloads and immediately merges the changes into your current branch, while git fetch only downloads the changes without merging them",
      "git fetch is a newer command that replaces git pull completely",
      "git pull is used for pushing changes, while git fetch is for pulling changes"
    ],
    "correctAnswer": [1],
    "multipleSelect": false,
    "explanation": "git fetch gets the latest changes from the remote repository but does not merge them. git pull is a combination of git fetch followed by git merge, which immediately updates your local working branch."
  }
];

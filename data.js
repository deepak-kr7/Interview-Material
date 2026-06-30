// DevOps Q&A Data
const qaData = [
  {
    "id": 1,
    "category": "Azure & Azure DevOps",
    "question": "Explain Azure Role-Based Access Control (RBAC)",
    "answer": "Azure RBAC is an authorization system that controls who can access Azure resources and what actions they can perform.\nRBAC consists of three components:\n\t•\tSecurity Principal – User, Group, Service Principal, or Managed Identity. \n\t•\tRole Definition – Collection of permissions (Owner, Contributor, Reader, etc.). \n\t•\tScope – Where the role is assigned. \n\t•\tManagement Group \n\t•\tSubscription \n\t•\tResource Group \n\t•\tResource \nExample: Assigning the Contributor role to a user at the Resource Group scope allows them to manage resources in that Resource Group but not grant permissions to others.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 2,
    "category": "DevOps General",
    "question": "Basic steps to give Contributor and Reader role",
    "answer": "•\tSign in to Azure Portal. \n\t•\tGo to the Subscription/Resource Group/Resource. \n\t•\tSelect Access Control (IAM). \n\t•\tClick Add > Add Role Assignment. \n\t•\tSelect the role: \n\t•\tContributor \n\t•\tReader \n\t•\tSelect the User, Group, or Service Principal. \n\t•\tClick Review + Assign.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 3,
    "category": "Linux & Git",
    "question": "How can I give user permission to files in Linux?",
    "answer": "Change ownership\nsudo chown username filename\nChange permissions\nchmod 755 filename\nAdd user to group\nsudo usermod -aG groupname username\nUsing ACL\nsetfacl -m u:username:rwx filename\nCheck permissions:\nls -l",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 4,
    "category": "Docker & Kubernetes",
    "question": "What is Docker? Tell about Dockerfile",
    "answer": "Docker is a containerization platform that packages applications along with their dependencies so they run consistently across different environments.\nDockerfile\nA Dockerfile is a text file containing instructions to build a Docker image.\nExample:\nFROM ubuntu:22.04\n\nRUN apt update\n\nCOPY . /app\n\nWORKDIR /app\n\nRUN apt install -y python3\n\nCMD [\"python3\",\"app.py\"]\nCommon instructions:\n\t•\tFROM \n\t•\tRUN \n\t•\tCOPY \n\t•\tADD \n\t•\tWORKDIR \n\t•\tENV \n\t•\tEXPOSE \n\t•\tCMD \n\t•\tENTRYPOINT",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 5,
    "category": "DevOps General",
    "question": "How can I give Owner permission to a user?",
    "answer": "•\tAzure Portal \n\t•\tGo to Resource Group/Subscription \n\t•\tOpen Access Control (IAM) \n\t•\tAdd Role Assignment \n\t•\tChoose Owner \n\t•\tSelect User \n\t•\tReview + Assign \nOwner can:\n\t•\tCreate resources \n\t•\tDelete resources \n\t•\tManage RBAC permissions",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 6,
    "category": "DevOps General",
    "question": "Tell steps to build a VM",
    "answer": "•\tAzure Portal \n\t•\tCreate Resource Group \n\t•\tCreate Virtual Machine \n\t•\tSelect Image (Ubuntu/Windows) \n\t•\tChoose VM Size \n\t•\tConfigure Username & Password/SSH Key \n\t•\tConfigure Networking (VNet, NSG) \n\t•\tConfigure Disk \n\t•\tReview \n\t•\tCreate \nAfter deployment:\n\t•\tConnect using SSH/RDP \n\t•\tInstall required software",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 7,
    "category": "DevOps General",
    "question": "Which type of VM have you built?",
    "answer": "Example answer:\n\"I have created Ubuntu Linux VMs such as Ubuntu 20.04 and Ubuntu 22.04 for hosting applications, Jenkins, Docker, and Kubernetes. I have also worked with Windows Server VMs for administration and testing.\"",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 8,
    "category": "Docker & Kubernetes",
    "question": "Tell about Kubernetes and Kubernetes Cluster",
    "answer": "Kubernetes (K8s) is an orchestration platform used to deploy, manage, scale, and monitor containerized applications.\nKubernetes Cluster\nA cluster consists of:\nControl Plane\n\t•\tAPI Server \n\t•\tScheduler \n\t•\tController Manager \n\t•\tetcd \nWorker Nodes\n\t•\tkubelet \n\t•\tkube-proxy \n\t•\tContainer Runtime \nBenefits:\n\t•\tAuto Scaling \n\t•\tSelf Healing \n\t•\tLoad Balancing \n\t•\tRolling Updates \n\t•\tHigh Availability",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 9,
    "category": "Azure & Azure DevOps",
    "question": "Explain Azure Pipelines and process",
    "answer": "Azure Pipelines is a CI/CD service used to automate build, test, and deployment.\nFlow:\nDeveloper\n     ↓\nPush code to Git\n     ↓\nPipeline Trigger\n     ↓\nBuild\n     ↓\nRun Tests\n     ↓\nCreate Artifact\n     ↓\nDeploy to Dev\n     ↓\nApproval\n     ↓\nDeploy to QA\n     ↓\nDeploy to Production\nPipeline is usually defined using YAML.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 10,
    "category": "Terraform (IaC)",
    "question": "Explain Terraform Lock",
    "answer": "Terraform Lock prevents multiple users from modifying the same infrastructure simultaneously.\nDuring:\nterraform apply\nTerraform creates a lock.\nBackend examples:\n\t•\tAzure Storage \n\t•\tAWS S3 + DynamoDB \n\t•\tTerraform Cloud \nBenefits:\n\t•\tPrevents corruption \n\t•\tPrevents concurrent updates",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 11,
    "category": "Terraform (IaC)",
    "question": "Explain Terraform commands",
    "answer": "terraform init\nInitialize Terraform.\nterraform fmt\nFormat configuration.\nterraform validate\nValidate syntax.\nterraform plan\nShow execution plan.\nterraform apply\nCreate or update infrastructure.\nterraform destroy\nDelete infrastructure.\nterraform show\nDisplay state.\nterraform output\nShow outputs.\nterraform state list\nList resources.\nterraform refresh\nRefresh state (older command; newer workflows refresh during plan/apply).",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 12,
    "category": "Linux & Git",
    "question": "Share 10 Linux commands",
    "answer": "pwd\nCurrent directory\nls\nList files\ncd\nChange directory\nmkdir\nCreate directory\nrm\nRemove files\ncp\nCopy files\nmv\nMove files\ncat\nView file\nchmod\nChange permissions\nchown\nChange ownership",
    "difficulty": "Easy",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 13,
    "category": "Terraform (IaC)",
    "question": "Do we use terraform apply on pipelines?",
    "answer": "Yes.\nTypical CI/CD process:\nGit Push\n      ↓\nTerraform Init\n      ↓\nTerraform Validate\n      ↓\nTerraform Plan\n      ↓\nApproval\n      ↓\nTerraform Apply\nUsually:\n\t•\tterraform plan runs automatically. \n\t•\tterraform apply runs after approval for production.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 14,
    "category": "Behavioral & Project",
    "question": "Why need to change company?",
    "answer": "Sample answer:\n\"I have learned a lot in my current organization and gained hands-on experience in Azure, Terraform, Docker, Kubernetes, Linux, and CI/CD. Now I'm looking for a role with more challenging projects, greater responsibility, and opportunities to enhance my DevOps and cloud skills while contributing to business growth.\"",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 15,
    "category": "Linux & Git",
    "question": "If error occurs in Linux without hardware or service issues, what will you check?",
    "answer": "Check:\n\t•\tSystem logs\njournalctl\n\t•\tMessages\ndmesg\n\t•\tDisk space\ndf -h\n\t•\tMemory\nfree -h\n\t•\tCPU\ntop\n\t•\tFile permissions \n\t•\tNetwork connectivity \n\t•\tDNS resolution \n\t•\tRecent configuration changes \n\t•\tRunning processes",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 16,
    "category": "Docker & Kubernetes",
    "question": "Suppose error occurs in Docker, what will you check?",
    "answer": "I would check:\n\t•\tContainer status \ndocker ps -a\n\t•\tContainer logs \ndocker logs <container>\n\t•\tDocker service \nsystemctl status docker\n\t•\tImage availability \ndocker images\n\t•\tPort conflicts \ndocker port <container>\n\t•\tVolume mounts \n\t•\tNetwork configuration \n\t•\tDisk space \ndf -h\n\t•\tRestart container if required",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 17,
    "category": "DevOps General",
    "question": "Before DevOps what was the gap?",
    "answer": "Before DevOps:\n\t•\tDevelopment and Operations worked separately. \n\t•\tManual deployments. \n\t•\tSlow software releases. \n\t•\tPoor communication. \n\t•\tFrequent deployment failures. \n\t•\tLonger recovery times. \n\t•\tEnvironment inconsistencies (\"works on my machine\" problem).",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 18,
    "category": "DevOps General",
    "question": "How were things running before DevOps?",
    "answer": "Traditional software delivery process:\n\t•\tDevelopers wrote code. \n\t•\tQA tested manually. \n\t•\tOperations deployed manually. \n\t•\tReleases took weeks or months. \n\t•\tMany manual approvals. \n\t•\tHigher chances of human error. \n\t•\tLimited automation and slower feedback. \nDevOps introduced automation, CI/CD, Infrastructure as Code, monitoring, and collaboration, enabling faster and more reliable releases.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 19,
    "category": "Docker & Kubernetes",
    "question": "What deployment strategy are you following in your organization?",
    "answer": "Sample Answer:\n\"In my organization, we primarily follow a Rolling Deployment strategy for production workloads running on Kubernetes (AKS). This allows us to update pods gradually without downtime. Before production deployment, the application is deployed to Dev, QA, and UAT environments through Azure DevOps multi-stage YAML pipelines. We also use health checks and monitor the deployment through Grafana and Prometheus. If any issue is detected, we either perform a rollback using Kubernetes deployment history or redeploy the previous stable version.\"\nOther deployment strategies you can mention:\n\t•\tRolling Deployment (most common) \n\t•\tBlue-Green Deployment \n\t•\tCanary Deployment \n\t•\tRecreate Deployment",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 20,
    "category": "DevOps General",
    "question": "Frontend team deployed code to production, found an issue. How would you handle it as an Infrastructure Engineer?",
    "answer": "Sample Answer:\n\"As an Infrastructure Engineer, my first responsibility is to determine whether the issue is infrastructure-related or application-related.\"\nSteps:\n\t•\tCheck Azure DevOps pipeline status. \n\t•\tVerify deployment completed successfully. \n\t•\tCheck Kubernetes pod status:\nkubectl get pods\nkubectl describe pod <pod-name>\n\t•\tReview application logs:\nkubectl logs <pod-name>\n\t•\tCheck ingress/load balancer configuration. \n\t•\tVerify backend API connectivity. \n\t•\tMonitor Grafana dashboards for CPU, memory, latency, and errors. \n\t•\tIf the issue is caused by the latest deployment, coordinate with the development team and perform a rollback:\nkubectl rollout undo deployment <deployment-name>\n\t•\tDocument the root cause and actions taken.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 21,
    "category": "Azure & Azure DevOps",
    "question": "How would you migrate a 3-tier application from on-premises to Azure with minimal downtime?",
    "answer": "A typical approach:\nStep 1: Assessment\n\t•\tInventory servers and applications. \n\t•\tIdentify dependencies. \n\t•\tAssess databases and storage. \nStep 2: Azure Landing Zone\n\t•\tCreate Resource Groups. \n\t•\tConfigure VNets and Subnets. \n\t•\tConfigure NSGs. \n\t•\tSet up Azure Load Balancer or Application Gateway. \nStep 3: Migrate Each Tier\n\t•\tWeb Tier → Azure VM or AKS. \n\t•\tApplication Tier → Azure VM Scale Set or AKS. \n\t•\tDatabase Tier → Azure SQL Database or Azure Database for PostgreSQL/MySQL (or SQL VM if required). \nStep 4: Data Synchronization\n\t•\tUse Azure Database Migration Service. \n\t•\tSynchronize data until cutover. \nStep 5: Validation\n\t•\tTest application functionality. \n\t•\tValidate network connectivity. \n\t•\tPerform performance testing. \nStep 6: Cutover\n\t•\tSchedule a maintenance window. \n\t•\tUpdate DNS. \n\t•\tSwitch production traffic. \n\t•\tMonitor application health. \nThis phased approach minimizes downtime and reduces migration risk.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 22,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Blob Storage? How does it work?",
    "answer": "Azure Blob Storage is Microsoft's object storage service used for storing unstructured data.\nExamples:\n\t•\tImages \n\t•\tVideos \n\t•\tDocuments \n\t•\tBackups \n\t•\tLogs \nHierarchy\nStorage Account\n      ↓\nContainer\n      ↓\nBlob\nBlob Types\n\t•\tBlock Blob \n\t•\tAppend Blob \n\t•\tPage Blob \nHow it works\n\t•\tCreate a Storage Account. \n\t•\tCreate one or more Containers. \n\t•\tUpload blobs. \n\t•\tAccess blobs securely using Azure AD, Shared Access Signatures (SAS), or access keys. \nUse cases:\n\t•\tStatic website hosting \n\t•\tApplication logs \n\t•\tBackup and archival \n\t•\tData lake storage",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 23,
    "category": "Azure & Azure DevOps",
    "question": "Have you worked with Multi-Stage YAML Pipelines?",
    "answer": "Sample Answer:\n\"Yes. I have worked with Azure DevOps multi-stage YAML pipelines.\"\nTypical stages:\nBuild\n    ↓\nUnit Test\n    ↓\nSecurity Scan\n    ↓\nDeploy to Dev\n    ↓\nDeploy to QA\n    ↓\nApproval\n    ↓\nDeploy to UAT\n    ↓\nApproval\n    ↓\nDeploy to Production\nBenefits:\n\t•\tSingle YAML definition \n\t•\tReusable templates \n\t•\tAutomated approvals \n\t•\tBetter traceability \n\t•\tConsistent deployments",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 24,
    "category": "Azure & Azure DevOps",
    "question": "How do you implement Environment Approval in Azure DevOps?",
    "answer": "Steps:\n\t•\tAzure DevOps \n\t•\tPipelines \n\t•\tEnvironments \n\t•\tCreate or select an Environment. \n\t•\tConfigure Approvals and Checks. \n\t•\tAdd approvers (e.g., Team Lead or Manager). \n\t•\tReference the environment in the YAML pipeline. \nExample:\nstages:\n- stage: Production\n  jobs:\n  - deployment: DeployProd\n    environment: Production\nWhen the pipeline reaches the Production stage, it pauses until an approver approves the deployment.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 25,
    "category": "DevOps General",
    "question": "Grafana shows a 404 API error. How would you troubleshoot and find the RCA?",
    "answer": "Troubleshooting steps:\n\t•\tConfirm the error in Grafana dashboards. \n\t•\tCheck API logs. \n\t•\tVerify if the API endpoint exists. \n\t•\tCheck Kubernetes Ingress configuration. \n\t•\tVerify Service and Endpoints:\nkubectl get svc\nkubectl get endpoints\n\t•\tCheck pod health:\nkubectl get pods\nkubectl logs\n\t•\tTest the API directly:\ncurl http://api-url\n\t•\tCheck DNS resolution. \n\t•\tVerify Azure Application Gateway or Load Balancer routing. \n\t•\tReview recent deployments. \nPossible Root Causes (RCA):\n\t•\tIncorrect API URL. \n\t•\tWrong ingress path. \n\t•\tService selector mismatch. \n\t•\tBackend pods unavailable. \n\t•\tFailed deployment. \n\t•\tDNS issues. \n\t•\tApplication routing changes.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 26,
    "category": "DevOps General",
    "question": "You are getting a 404 error. How would you troubleshoot from an infrastructure perspective?",
    "answer": "As an Infrastructure Engineer, I would check the infrastructure layer before assuming it's an application issue.\nStep 1: DNS\n\t•\tIs the domain resolving correctly?\nnslookup <domain>\nStep 2: Network\n\t•\tVerify connectivity.\nping\ntraceroute\nStep 3: Load Balancer/Application Gateway\n\t•\tCheck backend health. \n\t•\tVerify listener and routing rules. \nStep 4: Kubernetes\n\t•\tCheck Ingress:\nkubectl get ingress\nkubectl describe ingress\n\t•\tCheck Services:\nkubectl get svc\n\t•\tCheck Pods:\nkubectl get pods\nkubectl logs <pod-name>\nStep 5: Web Server\n\t•\tVerify NGINX or Apache configuration. \n\t•\tCheck reverse proxy rules. \nStep 6: Firewall/NSG\n\t•\tEnsure required ports (80/443) are open. \nStep 7: SSL\n\t•\tValidate certificates if HTTPS is used. \nStep 8: Deployment\n\t•\tConfirm the latest deployment is healthy. \n\t•\tRoll back if needed. \nConclusion: If all infrastructure components (DNS, networking, load balancer, ingress, services, and pods) are healthy, I would escalate the issue to the application team with my findings, as the 404 is likely due to an application routing or API configuration issue rather than the infrastructure itself.\nThese responses are suitable for Azure DevOps/Cloud Engineer interviews with around 3–5 years of experience, as they demonstrate both technical knowledge and a structured troubleshooting approach.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 27,
    "category": "DevOps General",
    "question": "Trying to clone a repository and getting a 403 error. What will you do?",
    "answer": "A 403 Forbidden error means authentication succeeded or reached the server, but you don't have permission to access the repository.\nTroubleshooting steps:\n\t•\tVerify the repository URL. \n\t•\tCheck if I have access to the repository. \n\t•\tVerify my Git credentials or Personal Access Token (PAT). \n\t•\tEnsure the PAT hasn't expired and has the correct scopes (e.g., Code: Read). \n\t•\tCheck if SSH keys are configured correctly (if using SSH). \n\t•\tConfirm I'm logged into the correct GitHub/Azure DevOps account. \n\t•\tTest network/proxy settings if behind a corporate firewall. \n\t•\tAsk the repository administrator to verify my permissions.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 28,
    "category": "Docker & Kubernetes",
    "question": "How to reduce Docker image size if it's 2.5 GB?",
    "answer": "Ways to reduce image size:\n\t•\tUse lightweight base images (e.g., alpine or slim images). \n\t•\tUse multi-stage builds. \n\t•\tRemove unnecessary packages and cache:\napt-get clean\nrm -rf /var/lib/apt/lists/*\n\t•\tCombine RUN commands to reduce image layers. \n\t•\tAdd a .dockerignore file to exclude unnecessary files. \n\t•\tCopy only required files instead of the entire project. \n\t•\tAvoid installing development tools in the production image. \nThis can often reduce an image from several GB to a few hundred MB.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 29,
    "category": "Docker & Kubernetes",
    "question": "Difference between CMD and ENTRYPOINT in Docker",
    "answer": "CMD\nENTRYPOINT\nProvides default command\nDefines the main executable\nCan be overridden easily\nAlways runs unless explicitly overridden\nUsed for default arguments\nUsed when the container should always execute a specific program\nExample:\nENTRYPOINT [\"python\"]\nCMD [\"app.py\"]\nRunning:\ndocker run image test.py\nResults in:\npython test.py",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 30,
    "category": "DevOps General",
    "question": "Difference between Ingress Controller and API Gateway",
    "answer": "Ingress Controller\nAPI Gateway\nKubernetes component\nApplication/API management layer\nRoutes HTTP/HTTPS traffic\nManages APIs\nSupports path and host routing\nAuthentication, rate limiting, caching\nWorks inside Kubernetes\nCan serve multiple applications and clients\nIngress = traffic routing.\nAPI Gateway = API management and security.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 31,
    "category": "Docker & Kubernetes",
    "question": "Difference between PV and PVC in Kubernetes",
    "answer": "Persistent Volume (PV)\n\t•\tActual storage resource. \n\t•\tCreated by administrator or dynamically provisioned. \nPersistent Volume Claim (PVC)\n\t•\tRequest for storage by a Pod. \n\t•\tKubernetes binds PVC to a suitable PV. \nFlow:\nPod\n ↓\nPVC\n ↓\nPV\n ↓\nStorage",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 32,
    "category": "Docker & Kubernetes",
    "question": "How do you monitor Kubernetes applications?",
    "answer": "Typical monitoring stack:\n\t•\tPrometheus → Collect metrics. \n\t•\tGrafana → Dashboards. \n\t•\tAlertmanager → Alerts. \n\t•\tLoki / ELK Stack → Logs. \n\t•\tAzure Monitor / Azure Container Insights (for AKS). \nMetrics monitored:\n\t•\tCPU \n\t•\tMemory \n\t•\tPod status \n\t•\tNode health \n\t•\tNetwork \n\t•\tAPI latency \n\t•\tError rates",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 33,
    "category": "Docker & Kubernetes",
    "question": "Explain the working of CNI in Kubernetes",
    "answer": "CNI (Container Network Interface) provides networking for Pods.\nHow it works:\n\t•\tPod is created. \n\t•\tKubelet calls the CNI plugin. \n\t•\tCNI assigns an IP address. \n\t•\tConfigures routing and networking. \n\t•\tPod communicates with other Pods. \nPopular CNI plugins:\n\t•\tAzure CNI \n\t•\tCalico \n\t•\tFlannel \n\t•\tCilium \n\t•\tWeave Net",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 34,
    "category": "Docker & Kubernetes",
    "question": "Why do we require multiple containers in a Pod?",
    "answer": "Containers in the same Pod:\n\t•\tShare the same network namespace. \n\t•\tShare storage volumes. \n\t•\tCommunicate using localhost. \nUse cases:\n\t•\tMain application + logging agent. \n\t•\tMain application + monitoring agent. \n\t•\tMain application + proxy.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 35,
    "category": "Docker & Kubernetes",
    "question": "What is the use case of a Sidecar Container?",
    "answer": "A Sidecar Container runs alongside the main application container.\nCommon use cases:\n\t•\tLog collection (Fluent Bit) \n\t•\tMonitoring (Prometheus exporters) \n\t•\tService mesh proxy (Envoy) \n\t•\tConfiguration synchronization \n\t•\tSecurity agents \nExample:\nPod\n├── App Container\n├── Fluent Bit Sidecar\n└── Envoy Sidecar",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 36,
    "category": "Terraform (IaC)",
    "question": "Difference between count and for_each in Terraform",
    "answer": "count\nCreates resources using an index.\ncount = 3\nCreates:\n\t•\tVM0 \n\t•\tVM1 \n\t•\tVM2 \nfor_each\nCreates resources using keys.\nfor_each = {\ndev = \"eastus\"\nprod = \"westus\"\n}\nCreates:\n\t•\tdev VM \n\t•\tprod VM \nRule: Use count for identical resources and for_each when each resource has a unique name or configuration.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 37,
    "category": "Terraform (IaC)",
    "question": "What is a State File in Terraform?",
    "answer": "The Terraform State File (terraform.tfstate) stores the current state of the infrastructure.\nIt contains:\n\t•\tResource IDs \n\t•\tAttributes \n\t•\tDependencies \n\t•\tMetadata \nWhy it's important:\n\t•\tTracks managed resources. \n\t•\tDetects changes. \n\t•\tGenerates execution plans. \n\t•\tSupports updates without recreating resources. \nFor teams, store the state remotely (e.g., Azure Storage Account) with state locking.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 38,
    "category": "DevOps General",
    "question": "Explain the CI/CD workflow",
    "answer": "Developer\n    ↓\nGit Push\n    ↓\nCI Pipeline\n    ↓\nBuild\n    ↓\nUnit Tests\n    ↓\nSecurity Scan\n    ↓\nArtifact Creation\n    ↓\nCD Pipeline\n    ↓\nDeploy to Dev\n    ↓\nDeploy to QA/UAT\n    ↓\nApproval\n    ↓\nProduction\nBenefits:\n\t•\tFaster releases \n\t•\tAutomation \n\t•\tReduced manual effort \n\t•\tConsistent deployments",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 39,
    "category": "Terraform (IaC)",
    "question": "You need to provision an Azure Storage Account in multiple environments. What Terraform setup would you design?",
    "answer": "Recommended structure:\nterraform/\n├── modules/\n│   └── storage-account/\n├── env/\n│   ├── dev/\n│   ├── qa/\n│   └── prod/\n├── backend.tf\n├── provider.tf\n└── variables.tf\nApproach:\n\t•\tCreate a reusable Storage Account module. \n\t•\tUse separate variable files (dev.tfvars, qa.tfvars, prod.tfvars). \n\t•\tUse separate remote state files for each environment. \n\t•\tDeploy through Azure DevOps pipelines.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 40,
    "category": "Terraform (IaC)",
    "question": "How do you configure a Terraform pipeline?",
    "answer": "Typical Azure DevOps pipeline:\nCheckout\n    ↓\nTerraform Init\n    ↓\nTerraform Validate\n    ↓\nTerraform Format Check\n    ↓\nTerraform Plan\n    ↓\nManual Approval\n    ↓\nTerraform Apply\nUse:\n\t•\tAzure Service Connection \n\t•\tRemote Backend \n\t•\tSecure Variable Groups \n\t•\tEnvironment Approvals",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 41,
    "category": "Azure & Azure DevOps",
    "question": "Should we have more than one pipeline for multiple environments?",
    "answer": "Usually No.\nA single multi-stage YAML pipeline is preferred.\nExample stages:\n\t•\tDev \n\t•\tQA \n\t•\tUAT \n\t•\tProduction \nThe pipeline determines the environment using:\n\t•\tPipeline parameters \n\t•\tVariables \n\t•\tBranch names \n\t•\tStage conditions \n\t•\tVariable groups \nExample:\n\t•\tdevelop → Dev \n\t•\trelease/* → QA \n\t•\tmain → Production",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 42,
    "category": "Azure & Azure DevOps",
    "question": "In CI/CD, which pipeline have you used?",
    "answer": "Sample Answer:\n\"I have primarily worked with Azure DevOps YAML pipelines because they are version-controlled, reusable, and support Infrastructure as Code. I have basic knowledge of Classic pipelines but prefer YAML for modern CI/CD implementations.\"",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 43,
    "category": "Azure & Azure DevOps",
    "question": "What is a Template in a YAML pipeline?",
    "answer": "A template is a reusable YAML file that avoids repeating common pipeline logic.\nExample:\nbuild-template.yml\nUsed by multiple pipelines:\n- template: build-template.yml\nBenefits:\n\t•\tReusability \n\t•\tEasier maintenance \n\t•\tStandardization",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 44,
    "category": "Azure & Azure DevOps",
    "question": "Difference between Parameters and Variables in a pipeline",
    "answer": "Parameters\nVariables\nEvaluated before the pipeline starts\nCan change during execution\nUsed for pipeline structure\nUsed for runtime values\nImmutable\nMutable\nCompile time\nRuntime",
    "difficulty": "Easy",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 45,
    "category": "Linux & Git",
    "question": "How do you change a username using a Git command?",
    "answer": "For the current repository:\ngit config user.name \"John Doe\"\nFor all repositories:\ngit config --global user.name \"John Doe\"\nTo verify:\ngit config --global --list",
    "difficulty": "Easy",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 46,
    "category": "Docker & Kubernetes",
    "question": "In a microservices architecture, how does a request reach a specific Pod?",
    "answer": "Request flow:\nUser\n   ↓\nDNS\n   ↓\nAzure Front Door / Load Balancer\n   ↓\nApplication Gateway\n   ↓\nIngress Controller\n   ↓\nKubernetes Service\n   ↓\nTarget Pod\n   ↓\nApplication Container\nIf multiple microservices exist, the Ingress routes requests based on the host or URL path (e.g., /orders, /users) to the appropriate Kubernetes Service, which then load-balances traffic across healthy Pods.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 47,
    "category": "Azure & Azure DevOps",
    "question": "Explain the process of designing and deploying infrastructure on Azure",
    "answer": "Typical process:\n\t•\tGather requirements (compute, networking, security, storage). \n\t•\tDesign architecture (VNets, subnets, NSGs, Load Balancers, Storage, AKS/VMs). \n\t•\tWrite Infrastructure as Code using Terraform. \n\t•\tStore code in Git. \n\t•\tConfigure Azure DevOps or GitHub Actions pipeline. \n\t•\tRun terraform init, validate, and plan. \n\t•\tReview changes and obtain approval. \n\t•\tExecute terraform apply. \n\t•\tValidate deployed resources. \n\t•\tConfigure monitoring (Azure Monitor, Prometheus, Grafana) and backups.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 48,
    "category": "Docker & Kubernetes",
    "question": "Explain CI/CD deployment using GitHub",
    "answer": "A typical GitHub-based workflow:\nDeveloper\n    ↓\nGit Commit\n    ↓\nGit Push\n    ↓\nGitHub Repository\n    ↓\nGitHub Actions Trigger\n    ↓\nBuild\n    ↓\nRun Tests\n    ↓\nCode Quality & Security Scan\n    ↓\nBuild Docker Image\n    ↓\nPush Image to Azure Container Registry (ACR)\n    ↓\nDeploy to AKS / Azure App Service\n    ↓\nSmoke Tests\n    ↓\nProduction Deployment\nKey components:\n\t•\tGitHub: Source code management. \n\t•\tGitHub Actions: CI/CD automation. \n\t•\tAzure Container Registry (ACR): Stores Docker images. \n\t•\tAzure Kubernetes Service (AKS) or Azure App Service: Hosts the application. \n\t•\tSecrets: Store Azure credentials and tokens securely. \n\t•\tEnvironments: Add manual approvals for production deployments. \nThis workflow provides automated, repeatable, and secure deployments with minimal manual intervention.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 49,
    "category": "DevOps General",
    "question": "Suppose your organization wants to ensure that no resources are deployed outside specific regions. How would you enforce this?",
    "answer": "I would use Azure Policy to restrict resource deployment to approved Azure regions.\nSteps:\n\t•\tCreate or use the built-in Allowed Locations policy. \n\t•\tAssign the policy at the appropriate scope: \n\t•\tManagement Group (preferred) \n\t•\tSubscription \n\t•\tResource Group \n\t•\tSpecify the allowed regions (e.g., East US, Central India). \n\t•\tAny deployment outside these regions will be denied. \nExample:\n\t•\tAllowed Regions: \n\t•\tCentral India \n\t•\tEast US \n\t•\tIf someone tries to deploy a VM in West Europe, Azure blocks the deployment. \nBenefits:\n\t•\tGovernance \n\t•\tCompliance \n\t•\tCost control \n\t•\tStandardization \nInterview Tip: Mention that assigning the policy at the Management Group level ensures it applies to all subscriptions beneath it.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 50,
    "category": "Azure & Azure DevOps",
    "question": "Explain the structure of subscriptions in an Azure Landing Zone for multiple environments.",
    "answer": "A Landing Zone organizes Azure resources in a secure, scalable, and governed way.\nTypical structure:\nManagement Group\n│\n├── Platform\n│   ├── Connectivity Subscription\n│   ├── Identity Subscription\n│   └── Management Subscription\n│\n├── Production\n│   ├── Prod Subscription 1\n│   ├── Prod Subscription 2\n│\n├── Non-Production\n│   ├── Dev Subscription\n│   ├── QA Subscription\n│   └── UAT Subscription\n│\n└── Sandbox\n    └── Developer Subscription\nPurpose of each:\nPlatform\n\t•\tShared networking \n\t•\tIdentity \n\t•\tMonitoring \n\t•\tSecurity \nProduction\n\t•\tLive business workloads \nNon-Production\n\t•\tDevelopment \n\t•\tTesting \n\t•\tUAT \nSandbox\n\t•\tLearning \n\t•\tExperimentation \nThis separation improves:\n\t•\tSecurity \n\t•\tBilling \n\t•\tRBAC \n\t•\tPolicy management",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 51,
    "category": "Terraform (IaC)",
    "question": "How can you integrate Azure Landing Zone deployment with DevOps pipelines?",
    "answer": "Azure Landing Zone infrastructure is typically deployed using Infrastructure as Code (Terraform or Bicep) through Azure DevOps or GitHub Actions.\nPipeline flow:\nDeveloper\n     ↓\nGit Repository\n     ↓\nAzure DevOps Pipeline\n     ↓\nTerraform Init\n     ↓\nTerraform Validate\n     ↓\nTerraform Plan\n     ↓\nApproval\n     ↓\nTerraform Apply\n     ↓\nLanding Zone Resources Created\nResources created may include:\n\t•\tManagement Groups \n\t•\tSubscriptions \n\t•\tVNets \n\t•\tNSGs \n\t•\tAzure Policies \n\t•\tRBAC \n\t•\tLog Analytics \n\t•\tKey Vault \n\t•\tAzure Monitor \nBest Practices:\n\t•\tStore Terraform state remotely in Azure Storage. \n\t•\tUse Azure Service Connections. \n\t•\tUse separate variable files for Dev, QA, and Prod. \n\t•\tRequire approvals before production deployment.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 52,
    "category": "Azure & Azure DevOps",
    "question": "Suppose you are migrating on-prem workloads to Azure. How does a Landing Zone help?",
    "answer": "An Azure Landing Zone provides a pre-configured, secure, and governed Azure environment before migrating workloads.\nBenefits:\n\t•\tStandardized network architecture. \n\t•\tBuilt-in security policies. \n\t•\tCentralized identity with Azure AD. \n\t•\tRBAC configured. \n\t•\tLogging and monitoring enabled. \n\t•\tBackup and disaster recovery configured. \n\t•\tCompliance policies enforced. \nMigration approach:\n\t•\tBuild the Landing Zone. \n\t•\tConfigure networking (Hub-and-Spoke). \n\t•\tConfigure Azure Policies. \n\t•\tConfigure monitoring. \n\t•\tMigrate applications. \n\t•\tValidate workloads. \n\t•\tCut over production traffic. \nWithout a Landing Zone, every application team would configure Azure differently, leading to inconsistencies and governance challenges.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 53,
    "category": "Azure & Azure DevOps",
    "question": "Can you explain Azure Policy Assignment?",
    "answer": "An Azure Policy Assignment applies a policy definition to a specific scope so Azure can enforce compliance.\nComponents:\n\t•\tPolicy Definition \n\t•\tThe rule to enforce. \n\t•\tExample: Only allow approved VM sizes. \n\t•\tAssignment \n\t•\tWhere the policy is applied. \n\t•\tScope \n\t•\tManagement Group \n\t•\tSubscription \n\t•\tResource Group \n\t•\tParameters \n\t•\tCustomize the policy (e.g., allowed regions). \nCommon Policy Effects:\n\t•\tDeny – Blocks non-compliant deployments. \n\t•\tAudit – Reports non-compliance. \n\t•\tAppend – Adds settings during deployment. \n\t•\tModify – Updates resources automatically. \n\t•\tDeployIfNotExists – Deploys required resources if missing. \n\t•\tAuditIfNotExists – Checks whether required resources exist. \nExample:\n\t•\tPolicy: Allow only Standard VM SKUs. \n\t•\tAssigned at the Production Management Group. \n\t•\tAny non-compliant VM deployment is denied.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 54,
    "category": "DevOps General",
    "question": "Explain Hub-and-Spoke Network Architecture.",
    "answer": "Hub-and-Spoke is a network topology where a central Hub VNet provides shared services, and multiple Spoke VNets host application workloads.\nDiagram:\n                    On-Premises\n                         │\n                  VPN / ExpressRoute\n                         │\n                    Hub VNet\n        ┌──────────┼──────────┐\n        │          │          │\n Azure Firewall  Bastion   DNS/Shared Services\n        │\n ┌──────┴───────────────┐\n │                      │\nSpoke VNet 1       Spoke VNet 2\n(Web App)          (Database)\n │                      │\nAKS/VMs              SQL/VMs\nHub VNet contains:\n\t•\tAzure Firewall \n\t•\tVPN Gateway \n\t•\tExpressRoute Gateway \n\t•\tAzure Bastion \n\t•\tDNS \n\t•\tShared services \nSpoke VNets contain:\n\t•\tApplication workloads \n\t•\tAKS clusters \n\t•\tVirtual Machines \n\t•\tDatabases \nCommunication:\n\t•\tSpokes connect to the Hub using VNet Peering. \n\t•\tTraffic between spokes typically passes through the Hub for centralized inspection and control. \nBenefits:\n\t•\tCentralized security \n\t•\tReduced management overhead \n\t•\tScalable architecture \n\t•\tBetter isolation between applications \n\t•\tCost optimization by sharing common services \nInterview Tip:\nIf asked why this architecture is preferred, explain that it allows organizations to centralize networking and security while keeping application environments isolated, which is ideal for enterprise-scale Azure deployments.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 55,
    "category": "Behavioral & Project",
    "question": "Tell Me About Yourself",
    "answer": "“Hello, my self  Deepak Kumar, and I am currently working as a Senior Consultant at Infosys in Pune. I have over 10 years of experience in IT, including more than 4+  years in DevOps and Cloud Engineering. \nMy major responsibilities are managing cloud infrastructure on Microsoft Azure, creating Infrastructure as Code using Terraform, and maintaining CI/CD pipelines using Azure DevOps.\nI am also working on AKS (Azure Kubernetes Service), where I deploy and manage containerized applications using Docker and Kubernetes. Along with deployment, I monitor application performance, troubleshoot production issues, and ensure high availability and scalability of applications.\nI have good hands-on experience with tools like Terraform, Azure DevOps, Docker, Kubernetes, Git, SonarQube, and Azure services such as ACR, Key Vault, Application Gateway, VNets, NSG, and Azure Monitor.",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 56,
    "category": "Behavioral & Project",
    "question": "Tell Me About Your Project",
    "answer": "“Currently, I am working on a project where we are migrating a large e-commerce application from on-premises infrastructure to Azure Cloud. The client is a Europe-based company named Qiagen, which provides genomic products for scientific research.\nThe application was initially monolithic, and our goal was to convert it into microservices architecture and deploy it on AKS.\nOur team included Development, Testing, and DevOps teams, and I was part of the DevOps team. My responsibility was to design the infrastructure, automate deployments, and build CI/CD pipelines.\nFor infrastructure provisioning, we used Terraform. We followed Azure Landing Zone architecture and created separate subscriptions for Dev, QA, and Production environments under management groups.\nI enjoy solving infrastructure and deployment-related challenges and continuously learning new DevOps technologies.”\n\nUsing Terraform, we provisioned resources such as:\n\t•\tAKS Cluster \n\t•\tACR \n\t•\tVNets and Subnets \n\t•\tKey Vault \n\t•\tApplication Gateway \n\t•\tStorage Accounts \n\t•\tAzure Bastion \n\t•\tDatabases \nExample:-   AKS (Azure Kubernetes service) Cluster – Managed Kubernetes service used to deploy and manage containerized applications in Microsoft Azure Azure. \n  ACR (Azure Container Registry) – Private container image registry used to store and manage Docker images securely. \n  VNets and Subnets – Virtual networking components used to isolate and securely connect Azure resources. \n  Key Vault – Secure service used to store secrets, passwords, certificates, and encryption keys. \n  Application Gateway – Layer 7 load balancer used for traffic routing, SSL termination, and web application firewall (WAF). \n  Storage Accounts – Azure storage service used to store blobs, files, queues, and tables. \n  Azure Bastion – Secure remote access service used to connect to VMs without exposing public IPs. \n  Databases – Managed database services used to store and manage application data securely and efficiently.\n\nWe created reusable Terraform modules and maintained the code in Git repositories. We also built Terraform CI/CD pipelines with stages like Init, Plan, and Apply. Additionally, we integrated tfsec scanning for security validation.\nFor application deployment:\n  Git Repository – Source code was pulled from Git repositories for version control and collaboration. \n  SonarQube – Used for static code analysis to identify bugs, vulnerabilities, and code quality issues. \n  Docker Image Build – Application code was containerized by building Docker images. \n  Anchore Scanner – Used to scan Docker images for security vulnerabilities and compliance issues. \n  Azure Container Registry (ACR) – Securely stored and managed Docker container images in Microsoft Azure. \n  AKS Deployment using Azure Pipelines – Applications were deployed automatically to AKS clusters using CI/CD pipelines in Azure DevOps. \n\nFor security:-\n\n  Application Gateway with WAF – Used for load balancing, SSL termination, and protecting applications from web attacks. \n  SSL Certificates & Custom Domains – Configured secure HTTPS communication and custom domain access for applications. \n  Azure Key Vault Integration – Secrets, certificates, and sensitive credentials were securely managed using Key Vault integrated with AKS. \n  Azure Monitor & Container Insights – Used for monitoring AKS clusters, application performance, logs, metrics, and troubleshooting.\nWe also enabled monitoring using Azure Monitor and Container Insights.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 57,
    "category": "Terraform (IaC)",
    "question": "Tell Me About Terraform Implementation",
    "answer": "“We used Terraform as Infrastructure as Code for provisioning and managing Azure resources.\nOur Terraform setup had:\n\t•\tOne repository for main Terraform code \n\t•\tAnother repository for reusable modules \nInside the main repository, we maintained separate folders for:\n\t•\tDev \n\t•\tStage \n\t•\tProd \nWe used remote backend storage in Azure Blob Storage for maintaining Terraform state files.\nTerraform Workflow Explanation\n\t•\tDeveloper Creates PR – Developer raises a Pull Request after making infrastructure code changes in Git. \n\t•\tPipeline Trigger – CI/CD pipeline in Azure DevOps automatically triggers on PR creation. \n\t•\tTerraform Init – Initializes Terraform providers, backend configuration, and modules. \n\t•\tTerraform Plan – Generates an execution plan showing what infrastructure changes will be created, modified, or deleted. \n\t•\tPlan Review – Team reviews the Terraform plan for validation and approval before deployment. \n\t•\tTerraform Apply – After approval, Terraform applies the changes and provisions/updates resources in Microsoft Azure. \nShort Interview Answer\n“Our Terraform workflow starts with a PR creation, which triggers the pipeline automatically. Then Terraform Init and Plan run, the team reviews the execution plan, and after approval Terraform Apply deploys the infrastructure changes.”\n\nWe also implemented the following best practices in our Terraform setup to ensure secure, scalable, and reliable infrastructure management:\n🔒 State Locking\n\t•\tPrevents multiple users or pipelines from modifying the Terraform state file simultaneously. \n\t•\tHelps avoid: \n\t•\tState corruption \n\t•\tConcurrent deployment conflicts \n\t•\tInfrastructure inconsistency \n\t•\tImplemented using remote backend locking in Azure Blob Storage. \n🧩 Modular Code Structure\n\t•\tTerraform code was divided into reusable modules such as: \n\t•\tVNet Module \n\t•\tAKS Module \n\t•\tNSG Module \n\t•\tStorage Module \n\t•\tBenefits: \n\t•\tBetter reusability       \n\t•\tStandardization \n\t•\tEasier maintenance \n\t•\tImproved team collaboration \n🌍 Environment-Based Variable Files\n\t•\tSeparate variable files maintained for each environment: \n\t•\tdev.tfvars \n\t•\tqa.tfvars \n\t•\tstage.tfvars \n\t•\tprod.tfvars \n\t•\tThis helped manage: \n\t•\tEnvironment-specific configurations \n\t•\tResource naming \n\t•\tScaling settings \n\t•\tNetwork ranges \n\t•\tImproved flexibility and reduced configuration errors. \n🛡️ tfsec Security Scanning\n\t•\tIntegrated tfsec into the CI/CD pipeline for Terraform security validation. \n\t•\tAutomatically scanned Terraform code for: \n\t•\tOpen security groups \n\t•\tPublicly exposed resources \n\t•\tUnencrypted storage \n\t•\tWeak network configurations \n\t•\tPipeline failed automatically if high-severity security issues were detected. \n\t•\tHelped enforce DevSecOps and infrastructure compliance standards.\nThis approach helped us maintain reusable, scalable, and secure infrastructure.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 58,
    "category": "DevOps General",
    "question": "Explain Your CI/CD Process",
    "answer": "“We use Azure DevOps YAML pipelines for implementing CI/CD.\nWe have two different pipelines:\n\t•\tTerraform Pipeline \n\t•\tApplication Pipeline \n🚀 Terraform Pipeline Flow\nWhenever code is merged into the main branch, the Terraform CI/CD pipeline is triggered automatically in Azure DevOps.\n🔄 Pipeline Workflow\n1️⃣ Terraform Init\n\t•\tInitializes Terraform working directory. \n\t•\tDownloads: \n\t•\tRequired providers \n\t•\tModules \n\t•\tBackend configuration \n\t•\tConnects to remote backend storage for Terraform state management. \n2️⃣ Terraform Plan\n\t•\tGenerates an execution plan. \n\t•\tValidates infrastructure changes before deployment. \n\t•\tShows: \n\t•\tResources to be created \n\t•\tModified resources \n\t•\tDeleted resources \n\t•\tHelps the team review changes safely before applying. \n3️⃣ tfsec Security Scanning\n\t•\tRuns automated security validation on Terraform code. \n\t•\tDetects issues such as: \n\t•\tOpen security groups \n\t•\tPublicly exposed resources \n\t•\tWeak configurations \n\t•\tMissing encryption settings \n\t•\tPipeline fails automatically if critical vulnerabilities are found. \n4️⃣ Manual Approval Stage\n\t•\tInfrastructure changes are reviewed by authorized team members. \n\t•\tEnsures: \n\t•\tChange validation \n\t•\tCompliance checks \n\t•\tProduction safety \n\t•\tPrevents accidental or unintended infrastructure modifications. \n5️⃣ Terraform Apply\n\t•\tAfter approval, Terraform applies the approved changes. \n\t•\tInfrastructure gets provisioned or updated automatically in Azure. \n\n🎯 Short Interview Answer\n“Our Terraform pipeline starts automatically when code is merged into the main branch. It executes Terraform Init, Plan, tfsec security scanning, manual approval, and finally Terraform Apply to provision infrastructure securely and automatically.”\n🚀 Application CI/CD Pipeline Flow\nWhen developers merge code into the Dev or Stage branch, the Application CI/CD pipeline is triggered automatically in Azure DevOps.\n\n🔄 Application Pipeline Workflow\n1️⃣ Repository Clone\n\t•\tSource code is pulled from the Git repository. \n\t•\tEnsures the latest application code is available for build and deployment. \n2️⃣ Application Build\n\t•\tApplication build process starts. \n\t•\tDependencies are installed and application artifacts are generated. \n3️⃣ Unit Testing\n\t•\tAutomated unit tests are executed. \n\t•\tHelps identify application issues early in the CI stage. \n4️⃣ SonarQube Static Code Analysis\n\t•\tSonarQube scans the application code for: \n\t•\tBugs \n\t•\tVulnerabilities \n\t•\tCode smells \n\t•\tSecurity issues \n\t•\tEnsures code quality and compliance standards. \n5️⃣ Docker Image Build\n\t•\tApplication is containerized using Docker. \n\t•\tDocker image is created using Dockerfile. \n6️⃣ Vulnerability Scanning using Anchore\n\t•\tDocker image is scanned for: \n\t•\tSecurity vulnerabilities \n\t•\tOutdated packages \n\t•\tCompliance issues \n\t•\tPipeline can fail if critical vulnerabilities are detected. \n7️⃣ Push Docker Image to ACR\n\t•\tSecurely pushes the Docker image to: \n\t•\tAzure Container Registry (ACR) \n\t•\tACR acts as a private image repository. \n8️⃣ Deployment to AKS\n\t•\tApplication deployment happens automatically on: \n\t•\tAzure Kubernetes Service (AKS) \n\t•\tDeployment is performed using: \n\t•\tKubernetes manifests \n\t•\tHelm charts \n\n☸️ Kubernetes Deployment Components\n🟢 Kubernetes Manifests\nUsed for defining:\n\t•\tDeployments \n\t•\tServices \n\t•\tIngress \n\t•\tConfigMaps \n\t•\tSecrets \n🟢 Helm Charts\nUsed for:\n\t•\tReusable deployments \n\t•\tParameterized configurations \n\t•\tSimplified Kubernetes package management \n\n🎯 Short Interview Answer\n“When developers merge code into Dev or Stage branches, the pipeline automatically clones the repository, builds the application, runs unit tests, performs SonarQube analysis, builds Docker images, scans them using Anchore, pushes images to ACR, and deploys applications to AKS using Kubernetes manifests or Helm charts.”\nThis complete automation helped reduce manual work, improved deployment speed, and minimized production issues.”\n\n\n\n☸️ AKS Architecture Explanation\nWe used Azure Kubernetes Service (AKS) as a managed Kubernetes platform for deploying and managing containerized applications in Azure.\n\n🏗️ AKS Cluster Architecture\n🔹 Node Pool Design\nOur AKS cluster was designed with multiple node pools based on workload requirements.\n🟦 Frontend Node Pool\n\t•\tConfigured with high-memory nodes \n\t•\tUsed for frontend/UI applications \n\t•\tOptimized for handling: \n\t•\tUser sessions \n\t•\tWeb traffic \n\t•\tApplication caching \n🟩 Backend Node Pool\n\t•\tConfigured with high-CPU nodes \n\t•\tUsed for backend microservices and APIs \n\t•\tOptimized for: \n\t•\tProcessing requests \n\t•\tBusiness logic execution \n\t•\tAPI workloads \n\n⚙️ Kubernetes Features Used\n🟢 Node Selectors\n\t•\tUsed for workload scheduling. \n\t•\tEnsured frontend and backend applications were deployed on the appropriate node pools. \nExample:\n\t•\tFrontend pods ➜ High-memory nodes \n\t•\tBackend pods ➜ High-CPU nodes \n\n🟢 HPA (Horizontal Pod Autoscaler)\n\t•\tAutomatically scaled application pods based on: \n\t•\tCPU usage \n\t•\tMemory usage \n\t•\tMetrics \n\t•\tHelped maintain: \n\t•\tHigh availability \n\t•\tBetter performance \n\t•\tEfficient resource utilization \n\n🟢 Namespaces\n\t•\tUsed for logical isolation of applications and environments. \n\t•\tHelped separate: \n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction workloads \nBenefits:\n\t•\tBetter resource management \n\t•\tImproved security \n\t•\tEasier administration \n\n🟢 RBAC (Role-Based Access Control)\n\t•\tImplemented RBAC for secure cluster access management. \n\t•\tControlled: \n\t•\tUser permissions \n\t•\tTeam access \n\t•\tKubernetes operations \nExamples:\n\t•\tRead-only access \n\t•\tDeployment access \n\t•\tAdmin access \n\n🟢 Ingress Controller\n\t•\tUsed for managing external HTTP/HTTPS traffic routing to applications inside AKS. \n\t•\tSupported: \n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tTraffic management \n\n🌐 Application Exposure\n🟣 Application Gateway Ingress Controller (AGIC)\nApplications were exposed externally using:\n\t•\tAzure Application Gateway \n\t•\tApplication Gateway Ingress Controller (AGIC) \nBenefits:\n\t•\tLayer 7 load balancing \n\t•\tSSL offloading \n\t•\tWeb Application Firewall (WAF) \n\t•\tSecure traffic routing \n\t•\tBetter scalability \n\n📊 Monitoring & Observability\n🟢 Azure Monitor\nUsed for:\n\t•\tInfrastructure monitoring \n\t•\tMetrics collection \n\t•\tAlerting \n\t•\tPerformance tracking \n\n🟢 Container Insights\nUsed for:\n\t•\tPod monitoring \n\t•\tNode health monitoring \n\t•\tContainer logs \n\t•\tTroubleshooting \n\t•\tAKS performance analysis \n\n🎯 Short Interview Answer\n“We used AKS as a managed Kubernetes platform with separate node pools for frontend and backend workloads. We implemented node selectors, HPA, namespaces, RBAC, and ingress controllers for workload management, scaling, security, and traffic routing. Applications were exposed using Application Gateway Ingress Controller, and monitoring was handled through Azure Monitor and Container Insights.”\n\n\nTroubleshooting Example (CrashLoopBackOff)\n“If I encounter a CrashLoopBackOff issue in AKS, I follow these steps:\n\t•\tCheck pod status \nkubectl get pods\n\t•\tCheck pod logs \nkubectl logs pod-name\n\t•\tDescribe pod for events \nkubectl describe pod pod-name\n\t•\tVerify: \n\t•\tEnvironment variables \n\t•\tSecrets and ConfigMaps \n\t•\tImage version \n\t•\tResource limits \n\t•\tDatabase connectivity \n\t•\tCoordinate with developers if application-level issue exists \n\t•\tIf issue impacts production, rollback deployment: \nkubectl rollout undo deployment deployment-name\nThis approach helps quickly restore service availability.”\n\n📅 Day-to-Day Activities\nMy daily responsibilities as a DevOps & Cloud Engineer include managing cloud infrastructure, supporting deployments, monitoring systems, and ensuring platform stability and security.\n\n🔄 Daily Responsibilities\n🚀 Monitoring CI/CD Pipelines\n\t•\tMonitoring Azure DevOps pipelines \n\t•\tValidating build and deployment status \n\t•\tTroubleshooting pipeline failures \n\t•\tEnsuring smooth CI/CD execution \n\n☁️ Managing Azure Infrastructure\n\t•\tManaging Azure cloud resources \n\t•\tMonitoring infrastructure health and utilization \n\t•\tHandling scaling and configuration updates \n\t•\tSupporting environment maintenance activities \n\n☸️ Deploying Applications on AKS\n\t•\tDeploying containerized applications to AKS \n\t•\tManaging Kubernetes deployments and services \n\t•\tHandling Helm chart or manifest updates \n\t•\tMonitoring application rollout status \n\n🏗️ Creating & Updating Terraform Code\n\t•\tWriting Infrastructure as Code using Terraform \n\t•\tUpdating reusable Terraform modules \n\t•\tManaging environment-specific configurations \n\t•\tReviewing and validating infrastructure changes \n\n🛠️ Troubleshooting Production Issues\n\t•\tInvestigating deployment failures \n\t•\tTroubleshooting AKS pod/application issues \n\t•\tAnalyzing logs and monitoring alerts \n\t•\tCoordinating with development and support teams \n\n🐳 Managing Docker Images\n\t•\tBuilding Docker images \n\t•\tManaging container image versions \n\t•\tPushing images to Azure Container Registry (ACR) \n\t•\tRemoving outdated or unused images \n\n👨‍💻 Supporting Developers\n\t•\tAssisting developers with deployment issues \n\t•\tHelping with CI/CD integration \n\t•\tSupporting environment access and configuration \n\t•\tResolving infrastructure-related concerns \n\n📊 Monitoring Application Performance\n\t•\tMonitoring applications using Azure Monitor & Container Insights \n\t•\tChecking resource utilization and application health \n\t•\tConfiguring alerts and dashboards \n\t•\tIdentifying performance bottlenecks \n\n🎫 Handling Tickets & Change Requests\n\t•\tWorking on incident, service, and change requests \n\t•\tImplementing approved infrastructure changes \n\t•\tSupporting release and deployment activities \n\t•\tFollowing ITIL and change management processes \n\n🔐 Ensuring Security & Compliance\n\t•\tMonitoring security compliance \n\t•\tManaging RBAC and access controls \n\t•\tValidating vulnerability scans \n\t•\tEnsuring secure secret management using Key Vault \n\n🎯 Short Interview Answer\n“My daily activities include monitoring CI/CD pipelines, managing Azure infrastructure, deploying applications on AKS, writing Terraform code, troubleshooting production issues, managing Docker images, supporting developers, monitoring application performance, handling tickets and change requests, and ensuring security and compliance.”\n\n☁️ Azure Services Worked On\nI have worked on multiple Azure services across compute, networking, security, monitoring, storage, and DevOps domains.\n\n🚀 Compute & Container Services\n☸️ AKS (Azure Kubernetes Service)\n\t•\tManaged Kubernetes platform used for deploying and managing containerized applications. \n\t•\tWorked on: \n\t•\tDeployments \n\t•\tScaling \n\t•\tIngress \n\t•\tMonitoring \n\t•\tTroubleshooting \n\n💻 Virtual Machines (VMs)\n\t•\tProvisioned and managed Linux/Windows VMs. \n\t•\tWorked on: \n\t•\tVM configuration \n\t•\tScaling \n\t•\tNetworking \n\t•\tSecurity hardening \n\n🔄 DevOps & CI/CD Services\n🛠️ Azure DevOps\n\t•\tUsed for: \n\t•\tCI/CD pipelines \n\t•\tSource code management \n\t•\tRelease automation \n\t•\tYAML pipelines \n\t•\tBuild and deployment orchestration \n\n📦 Azure Container Registry (ACR)\n\t•\tPrivate container registry used for securely storing Docker images. \n\t•\tIntegrated with: \n\t•\tAKS \n\t•\tAzure DevOps pipelines \n\n🔐 Security Services\n🔑 Azure Key Vault\n\t•\tUsed for securely managing: \n\t•\tSecrets \n\t•\tCertificates \n\t•\tAPI keys \n\t•\tConnection strings \n\n🛡️ Azure AD (Azure Active Directory)\n\t•\tUsed for: \n\t•\tAuthentication \n\t•\tAuthorization \n\t•\tRBAC \n\t•\tIdentity management \n\t•\tSingle Sign-On (SSO) \n\n🔒 NSG (Network Security Group)\n\t•\tImplemented inbound and outbound traffic control using security rules. \n\t•\tUsed for subnet and NIC-level security. \n\n🌐 Private Endpoints\n\t•\tEnabled secure private connectivity to Azure services without public internet exposure. \n\n🖥️ Azure Bastion\n\t•\tUsed for secure RDP/SSH access to VMs without exposing public IP addresses. \n\n🌐 Networking Services\n🌍 Virtual Networks (VNets)\n\t•\tDesigned and managed isolated Azure networks. \n\t•\tCreated: \n\t•\tSubnets \n\t•\tRouting configurations \n\t•\tSecure connectivity \n\n⚖️ Load Balancer\n\t•\tDistributed incoming traffic across backend resources for high availability. \n\n🚦 Application Gateway\n\t•\tLayer 7 load balancer used for: \n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tWeb Application Firewall (WAF) \n\n🌎 Azure Front Door\n\t•\tUsed for: \n\t•\tGlobal traffic routing \n\t•\tLow-latency access \n\t•\tWAF protection \n\t•\tCDN integration \n\n📊 Monitoring & Logging\n📈 Azure Monitor\n\t•\tUsed for: \n\t•\tMonitoring infrastructure \n\t•\tMetrics collection \n\t•\tAlerts \n\t•\tLog analysis \n\t•\tPerformance monitoring \n\n💾 Storage & Database Services\n🗂️ Azure Storage Account\n\t•\tUsed for: \n\t•\tBlob storage \n\t•\tFile shares \n\t•\tTerraform backend state storage \n\n🛢️ Azure SQL\n\t•\tManaged relational database service used for application data storage. \n\n🌌 Cosmos DB\n\t•\tNoSQL database service used for globally distributed applications and scalable data storage. \n\n🎯 Short Interview Answer\n“I have worked on multiple Azure services including AKS, Azure DevOps, ACR, Key Vault, VNets, NSG, Azure Bastion, Azure Monitor, Application Gateway, Azure Front Door, Storage Accounts, Azure SQL, Cosmos DB, Azure AD, Load Balancer, Virtual Machines, and Private Endpoints.”\n\nCommon Interview Questions with Smart Answers\nBranching Strategy\nFeature Branching\n\t•\tEach developer works on a separate feature branch. \n\t•\tCode is merged through Pull Requests after review. \nExample:\n\t•\tfeature/login \n\t•\tfeature/payment \nGitFlow\n\t•\tUses main, develop, feature, release, and hotfix branches. \n\t•\tBest for large enterprise projects. \nTrunk-Based Development\n\t•\tDevelopers create short-lived branches and merge quickly into the main branch. \n\t•\tCI/CD validation runs automatically. \nInterview Answer:\n“We mainly use feature branching and trunk-based development in Azure DevOps for faster integration, automated testing, and reduced merge conflicts.”\n\nVNet and Subnet\nVNet\n\t•\tPrivate network in Microsoft Azure Azure. \n\t•\tEnables secure communication between resources. \nExample:\n\t•\t10.0.0.0/16 \nSubnet\n\t•\tSmaller network inside a VNet. \n\t•\tUsed for network segmentation. \nExample:\n\t•\tWeb subnet \n\t•\tApp subnet \n\t•\tDB subnet \nInterview Answer:\n“VNet provides isolated networking in Azure, and subnets divide the VNet into smaller logical networks for better security and traffic management.”\n\nBackend Block in Terraform\n\t•\tBackend block stores Terraform state remotely. \nExample:\n\t•\tAzure Storage Account backend \nBenefits:\n\t•\tTeam collaboration \n\t•\tState locking \n\t•\tPrevents state corruption \nInterview Answer:\n“We use backend blocks to store Terraform state files remotely in Azure Storage Account for centralized state management and locking.”\n\nDeployment Errors Faced\nTerraform Errors\n\t•\tState lock issue \n\t•\tResource already exists \n\t•\tDependency issues \nAzure Errors\n\t•\tRBAC permission denied \n\t•\tNSG blocking traffic \n\t•\tQuota limit exceeded \nCI/CD Errors\n\t•\tYAML syntax issues \n\t•\tService connection failures \nAKS Errors\n\t•\tImagePullBackOff \n\t•\tPod crash loops \nInterview Answer:\n“I have handled Terraform state lock issues, RBAC permission errors, NSG misconfigurations, CI/CD pipeline failures, and AKS image pull errors.”\n\nTerraform Modules\n\t•\tModules are reusable Terraform components. \nExamples:\n\t•\tVNet module \n\t•\tNSG module \n\t•\tAKS module \n\t•\tStorage module \nBenefits:\n\t•\tReusability \n\t•\tStandardization \n\t•\tEasy maintenance \nInterview Answer:\n“I worked on reusable Terraform modules for VNet, subnet, NSG, AKS, storage accounts, and virtual machines.”\n\nNSG and ASG\nNSG (Network Security Group)\n\t•\tActs like a firewall. \n\t•\tControls inbound and outbound traffic using rules. \nExample:\n\t•\tAllow port 80 \n\t•\tAllow SSH 22 \n\t•\tDeny all others \nASG (Application Security Group)\n\t•\tLogical grouping of VMs. \n\t•\tSimplifies NSG rule management. \nExample:\n\t•\tweb-asg \n\t•\tapp-asg \n\t•\tdb-asg",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 59,
    "category": "Azure & Azure DevOps",
    "question": "Difference Between NSG and ASG",
    "answer": "NSG\nASG\nControls traffic using rules\nGroups VMs logically\nWorks like firewall\nUsed inside NSG rules\nApplied to subnet/NIC\nApplied to VM groups",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 60,
    "category": "Terraform (IaC)",
    "question": "Why Terraform?",
    "answer": "“Terraform provides Infrastructure as Code, automation, version control, modularity, and multi-cloud support. It helps maintain consistent infrastructure and reduces manual configuration errors.”",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 61,
    "category": "Docker & Kubernetes",
    "question": "Why AKS?",
    "answer": "“AKS simplifies Kubernetes management, provides scalability, integrates well with Azure services, and reduces operational overhead because the control plane is managed by Azure.”",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 62,
    "category": "Behavioral & Project",
    "question": "What Challenges Did You Face?",
    "answer": "“One major challenge was Terraform auto-apply causing unintended infrastructure changes. To solve this, we introduced manual approval before Apply stage.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 63,
    "category": "DevOps General",
    "question": "How Do You Secure Secrets?",
    "answer": "“We use Azure Key Vault integrated with AKS and RBAC policies to securely manage secrets like API keys, database credentials, and certificates.”",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 64,
    "category": "Linux & Git",
    "question": "Difference Between git fetch and git pull?",
    "answer": "•\tgit fetch → Downloads changes only \n\t•\tgit pull → Downloads + merges changes",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 65,
    "category": "Docker & Kubernetes",
    "question": "Difference Between Deployment and StatefulSet?",
    "answer": "•\tDeployment → Stateless applications \n\t•\tStatefulSet → Stateful applications like databases",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 66,
    "category": "Terraform (IaC)",
    "question": "How do you use tfsec and other security tools in CI/CD pipeline?",
    "answer": "“In our project, security was integrated as part of the CI/CD pipeline to follow DevSecOps practices.\nFor Terraform code security scanning, we used tfsec. Whenever a developer created a pull request or merged code, the Terraform pipeline automatically triggered and executed tfsec scans to identify security misconfigurations such as:\n\t•\tOpen security groups \n\t•\tPublicly exposed resources \n\t•\tUnencrypted storage \n\t•\tWeak network rules \nIf tfsec detected any high-severity issue, the pipeline failed automatically.\nApart from tfsec, we also used:\n\t•\tSonarQube for static code analysis \n\t•\tAnchore for Docker image vulnerability scanning \n\t•\tAzure Key Vault for secret management \n\t•\tRBAC and Azure Policies for access control \nThis helped us ensure infrastructure, application code, and container images were secure before deployment.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 67,
    "category": "DevOps General",
    "question": "What is trunk-based branching strategy?",
    "answer": "“Trunk-based development is a branching strategy where developers frequently commit small changes directly into a single main branch, usually called the trunk or main branch.\nInstead of maintaining long-running feature branches, developers create short-lived branches and merge changes quickly after validation.\nAdvantages:\n\t•\tFaster integration \n\t•\tReduced merge conflicts \n\t•\tBetter collaboration \n\t•\tSupports continuous integration and continuous deployment \nIn our project, we mainly used:\n\t•\tMain branch → Production \n\t•\tDev branch → Development \n\t•\tStage branch → Testing \nFeature branches were short-lived and merged quickly after code review.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 68,
    "category": "DevOps General",
    "question": "Have you made MCP server?",
    "answer": "“Yes, I have basic understanding and exposure to MCP (Model Context Protocol) servers in AI-integrated systems.\nMCP servers are used to provide context, tools, APIs, or external integrations to AI models securely and efficiently.\nAlthough I was not directly responsible for core MCP server development, I have worked on infrastructure setup, containerization, deployment, and CI/CD automation for AI-driven applications and APIs using:\n\t•\tDocker \n\t•\tKubernetes \n\t•\tAzure Cloud \n\t•\tTerraform \n\t•\tCI/CD pipelines \nI can also support deployment, monitoring, scaling, and infrastructure automation for MCP-based systems.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 69,
    "category": "Terraform (IaC)",
    "question": "How VM is managed by Terraform?",
    "answer": "“Terraform manages Virtual Machines using Infrastructure as Code.\nIn Azure, we define VM resources in Terraform configuration files using the azurerm provider.\nTypical VM components managed by Terraform:\n\t•\tResource Group \n\t•\tVirtual Network \n\t•\tSubnet \n\t•\tNetwork Interface \n\t•\tNSG \n\t•\tPublic IP \n\t•\tVirtual Machine \n\t•\tOS Disk \nWorkflow:\n\t•\tWrite Terraform code \n\t•\tRun terraform init \n\t•\tRun terraform plan \n\t•\tRun terraform apply \nTerraform automatically provisions and manages the VM infrastructure.\nBenefits:\n\t•\tAutomation \n\t•\tVersion control \n\t•\tReusability \n\t•\tConsistency \n\t•\tEasy scaling and modification”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 70,
    "category": "DevOps General",
    "question": "How do you manage multiple environments in production systems?",
    "answer": "“In our project, we managed multiple environments like Dev, QA, Stage, and Production using proper segregation and Infrastructure as Code.\nWe followed Azure Landing Zone architecture.\nOur approach:\n\t•\tSeparate subscriptions for each environment \n\t•\tSeparate resource groups \n\t•\tSeparate Terraform variable files \n\t•\tSeparate backend state files \n\t•\tEnvironment-specific CI/CD pipelines \nFor Kubernetes:\n\t•\tSeparate namespaces \n\t•\tSeparate configurations and secrets \n\t•\tDifferent ingress and scaling settings \nWe also implemented:\n\t•\tRBAC access control \n\t•\tApproval-based deployments for production \n\t•\tEnvironment-specific monitoring and alerts \nThis helped maintain isolation, security, and stability across environments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 71,
    "category": "DevOps General",
    "question": "Have you used PowerShell in project?",
    "answer": "“Yes, I have used PowerShell in multiple tasks, especially in Azure and automation activities.\nUse cases:\n\t•\tAzure resource management \n\t•\tAutomation scripts \n\t•\tVM administration \n\t•\tLog collection \n\t•\tBackup automation \n\t•\tDeployment tasks in pipelines \nExamples:\n\t•\tManaging Azure resources using Az PowerShell modules \n\t•\tAutomating cleanup tasks \n\t•\tCreating scheduled jobs \n\t•\tRetrieving logs and monitoring information \nPowerShell helped reduce manual work and improved operational efficiency.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 72,
    "category": "DevOps General",
    "question": "What is another method to create multiple Resource Groups apart from for_each?",
    "answer": "“Apart from for_each, we can use:\n\t•\tcount \n\t•\tmodules \n\t•\tdynamic blocks (in some scenarios) \nExample using count:\nTerraform creates multiple resources based on numeric count values.\nDifference:\n\t•\tcount is index-based \n\t•\tfor_each is key/value-based and more flexible \nUsually:\n\t•\tcount is preferred for similar resources \n\t•\tfor_each is preferred when resources have unique names or configurations”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 73,
    "category": "Docker & Kubernetes",
    "question": "Have you deployed applications on Docker and Kubernetes?",
    "answer": "“Yes, I have deployed applications using both Docker and Kubernetes.\nDocker Responsibilities:\n\t•\tWriting Dockerfiles \n\t•\tCreating Docker images \n\t•\tMulti-stage Docker builds \n\t•\tPushing images to Azure Container Registry \nKubernetes Responsibilities:\n\t•\tCreating deployments \n\t•\tServices \n\t•\tIngress configurations \n\t•\tConfigMaps and Secrets \n\t•\tAutoscaling using HPA \n\t•\tNamespace management \nDeployment Process:\n\t•\tBuild Docker image \n\t•\tPush image to ACR \n\t•\tDeploy application on AKS through CI/CD pipeline \nWe used Helm charts and Kubernetes manifests for deployments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 74,
    "category": "Behavioral & Project",
    "question": "Have you used AI Driven system in your project?",
    "answer": "“Yes, we have worked on AI-enabled and automation-driven systems indirectly in our projects.\nMy contribution was mainly on:\n\t•\tInfrastructure provisioning \n\t•\tCI/CD automation \n\t•\tContainer orchestration \n\t•\tMonitoring and scalability \nWe supported applications that used:\n\t•\tAI APIs \n\t•\tData processing services \n\t•\tAutomated analytics systems \nAs a DevOps Engineer, my role focused on ensuring:\n\t•\tHigh availability \n\t•\tSecure deployment \n\t•\tScalability \n\t•\tMonitoring \n\t•\tAutomation of AI-based workloads”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 75,
    "category": "Terraform (IaC)",
    "question": "Which type of resources have you created from Terraform?",
    "answer": "“I have created and managed multiple Azure resources using Terraform, including:\nCompute:\n\t•\tVirtual Machines \n\t•\tVM Scale Sets \n\t•\tAKS Cluster \nNetworking:\n\t•\tVirtual Networks \n\t•\tSubnets \n\t•\tNSG \n\t•\tLoad Balancer \n\t•\tApplication Gateway \n\t•\tPublic IPs \n\t•\tAzure Firewall \n\t•\tBastion Host \nStorage & Database:\n\t•\tStorage Accounts \n\t•\tAzure SQL \n\t•\tCosmos DB \nSecurity:\n\t•\tAzure Key Vault \n\t•\tRBAC roles \n\t•\tManaged Identities \nDevOps:\n\t•\tAzure Container Registry \n\t•\tMonitoring resources \n\t•\tLog Analytics Workspace \nOthers:\n\t•\tResource Groups \n\t•\tPrivate Endpoints \n\t•\tDNS Zones \n\t•\tAzure Monitor Alerts \nWe managed all these resources using reusable Terraform modules and automated pipelines.”\n\n\nTerraform Best Practices — Interview Answer",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 76,
    "category": "Terraform (IaC)",
    "question": "Modularize Everything (Don’t write monolithic code)",
    "answer": "“Terraform code should always be modularized instead of writing everything in a single file.\nFor example:\n\t•\tSeparate module for VNet \n\t•\tSeparate module for AKS \n\t•\tSeparate module for Storage Account \n\t•\tSeparate module for VM \nBenefits:\n\t•\tReusability \n\t•\tEasy maintenance \n\t•\tBetter readability \n\t•\tTeam collaboration becomes easier \nIn our project, we maintained separate reusable modules and called them from environment-specific code.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 77,
    "category": "Terraform (IaC)",
    "question": "Use Remote State + Locking",
    "answer": "“In production environments, Terraform state should never be stored locally.\nWe used Azure Blob Storage as remote backend storage for Terraform state files.\nBenefits:\n\t•\tCentralized state management \n\t•\tTeam collaboration \n\t•\tPrevents state file loss \n\t•\tBetter security \nWe also enabled state locking to avoid multiple users modifying infrastructure simultaneously.\nIf state gets locked accidentally, we can release it using:\nterraform force-unlock\n```”\n\n---\n\n# 3. Keep Environments Isolated\n\n“We always keep Dev, QA, Stage, and Production environments isolated.\n\nMethods used:\n- Separate subscriptions\n- Separate resource groups\n- Separate backend state files\n- Separate variable files\n- Separate CI/CD pipelines\n\nThis prevents accidental changes in production and improves security and governance.”\n\n---\n\n# 4. Never Hardcode Values\n\n“Hardcoding values is not recommended in Terraform.\n\nInstead, we use:\n- variables.tf\n- terraform.tfvars\n- environment variables\n- Key Vault secrets\n\nExamples:\n- VM sizes\n- Passwords\n- IP ranges\n- Environment names\n\nBenefits:\n- Flexibility\n- Reusability\n- Better security\n- Easier environment management”\n\n---\n\n# 5. Follow Consistent Naming Conventions\n\n“We follow standard naming conventions for all resources.\n\nExample:\n- dev-vnet-eastus\n- prod-aks-cluster\n- qa-storage-account\n\nBenefits:\n- Easy identification\n- Better management\n- Improved readability\n- Simplified troubleshooting”\n\n---\n\n# 6. Use for_each over count\n\n“Generally, for_each is preferred over count.\n\nReason:\n- for_each works with key-value pairs\n- Better resource tracking\n- Easier updates\n- Avoids index-related issues\n\nExample:\nDifferent resource groups with different names can easily be managed using for_each.”\n\n---\n\n# 7. Avoid Provisioners\n\n“Provisioners like:\n- local-exec\n- remote-exec\n\nshould be avoided whenever possible.\n\nReason:\n- Less predictable\n- Difficult to maintain\n- Can cause failures\n\nInstead, we prefer:\n- Cloud-init\n- Custom scripts\n- Configuration management tools\n- CI/CD automation”\n\n---\n\n# 8. Store Secrets Securely\n\n“Secrets should never be stored directly in Terraform code.\n\nWe used:\n- Azure Key Vault\n- Environment variables\n- Secret management systems\n\nExamples:\n- Database passwords\n- API keys\n- Certificates\n\nThis improves security and compliance.”\n\n---\n\n# 9. Use terraform plan before apply\n\n“Before applying any infrastructure changes, we always execute:\n```bash id=\"7jkl8r\"\nterraform plan\nThis helps:\n\t•\tReview changes \n\t•\tIdentify mistakes \n\t•\tPrevent accidental deletion \n\t•\tValidate infrastructure modifications \nIn our pipeline, manual approval was required after the plan stage before production apply.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 78,
    "category": "Terraform (IaC)",
    "question": "Enable Version Control (Git)",
    "answer": "“All Terraform code should be stored in Git repositories.\nBenefits:\n\t•\tVersion tracking \n\t•\tTeam collaboration \n\t•\tRollback capability \n\t•\tPull request reviews \n\t•\tCI/CD integration \nWe used branching strategies and pull request approvals before merging Terraform changes.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 79,
    "category": "DevOps General",
    "question": "Pin Provider Versions",
    "answer": "“We always define provider versions explicitly.\nExample:\nrequired_providers {\n  azurerm = {\n    source  = \"hashicorp/azurerm\"\n    version = \"~> 3.0\"\n  }\n}\nBenefits:\n\t•\tPrevents unexpected behavior \n\t•\tEnsures stability \n\t•\tAvoids compatibility issues after upgrades”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 80,
    "category": "Terraform (IaC)",
    "question": "Use Lifecycle Rules Carefully",
    "answer": "“Terraform lifecycle rules help control resource behavior.\nExamples:\n\t•\tprevent_destroy \n\t•\tignore_changes \n\t•\tcreate_before_destroy \nUse cases:\n\t•\tPrevent accidental deletion of production resources \n\t•\tIgnore dynamic property changes \n\t•\tReduce downtime during updates \nThese should be used carefully because incorrect usage can create infrastructure drift.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 81,
    "category": "Terraform (IaC)",
    "question": "Keep Code Clean & Structured",
    "answer": "“Terraform code should always be:\n\t•\tWell organized \n\t•\tProperly indented \n\t•\tCommented \n\t•\tStructured into files \nTypical structure:\n\t•\tmain.tf \n\t•\tvariables.tf \n\t•\toutputs.tf \n\t•\tproviders.tf \n\t•\tbackend.tf \nBenefits:\n\t•\tEasy maintenance \n\t•\tBetter readability \n\t•\tFaster troubleshooting \n\t•\tEasier onboarding for new team members” \n\nInterview Closing Line\n“In our project, we followed these Terraform best practices to maintain scalable, secure, reusable, and production-ready infrastructure. These practices helped us reduce manual errors, improve automation, and maintain consistency across all environments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 82,
    "category": "Azure & Azure DevOps",
    "question": "What are the core services in Azure DevOps?",
    "answer": "“Azure DevOps provides multiple services that help manage the complete software development lifecycle.\nMain services are:",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 83,
    "category": "Azure & Azure DevOps",
    "question": "Azure Repos",
    "answer": "Used for source code management using:\n\t•\tGit \n\t•\tTFVC \nFeatures:\n\t•\tBranching \n\t•\tPull requests \n\t•\tCode reviews \n\t•\tVersion control",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 84,
    "category": "Azure & Azure DevOps",
    "question": "Azure Pipelines",
    "answer": "Used for:\n\t•\tContinuous Integration (CI) \n\t•\tContinuous Delivery/Deployment (CD) \nIt automates:\n\t•\tBuild \n\t•\tTesting \n\t•\tDeployment",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 85,
    "category": "Azure & Azure DevOps",
    "question": "Azure Boards",
    "answer": "Used for project and work tracking:\n\t•\tUser stories \n\t•\tTasks \n\t•\tBugs \n\t•\tSprint planning",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 86,
    "category": "Azure & Azure DevOps",
    "question": "Azure Artifacts",
    "answer": "Used for package management:\n\t•\tnpm \n\t•\tMaven \n\t•\tNuGet \n\t•\tPython packages",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 87,
    "category": "Azure & Azure DevOps",
    "question": "Azure Test Plans",
    "answer": "Used for:\n\t•\tManual testing \n\t•\tTest case management \n\t•\tAutomated testing integration \nOne-line Answer:\nAzure DevOps provides Repos, Pipelines, Boards, Artifacts, and Test Plans for complete DevOps lifecycle management.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 88,
    "category": "DevOps General",
    "question": "What is CI/CD?",
    "answer": "“CI/CD is a DevOps practice that automates software build, testing, and deployment processes.\nCI – Continuous Integration\nDevelopers frequently merge code into a shared repository.\nCI automatically:\n\t•\tBuilds application \n\t•\tRuns unit tests \n\t•\tPerforms code quality checks \nGoal:\nDetect issues early.\nCD – Continuous Delivery / Deployment\nAfter CI success:\n\t•\tApplication gets deployed automatically to environments like Dev, QA, and Production. \nBenefits:\n\t•\tFaster releases \n\t•\tReduced manual work \n\t•\tBetter reliability \nOne-line Answer:\nCI/CD automates build, testing, and deployment processes for faster and reliable software delivery.”\n\nYAML vs Classic Pipeline\n“We can create pipelines in two ways:\nYAML Pipeline\n\t•\tCode-based pipeline \n\t•\tStored in repository \n\t•\tVersion-controlled \n\t•\tSupports templates and reuse \n\t•\tPreferred for modern DevOps \nExample:\ntrigger:\n- main\nClassic Pipeline\n\t•\tUI-based pipeline \n\t•\tEasy for beginners \n\t•\tLimited flexibility \n\t•\tHarder to version control",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 89,
    "category": "DevOps General",
    "question": "Which one do you prefer?",
    "answer": "We mostly use YAML pipelines because they are reusable, scalable, and version-controlled.\nOne-line Answer:\nYAML pipelines are code-driven and scalable, while Classic pipelines are UI-driven and simpler.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 90,
    "category": "DevOps General",
    "question": "What is a Self-hosted Agent?",
    "answer": "“A self-hosted agent is an agent installed on our own server or VM to run pipelines.\nWe use self-hosted agents when:\n\t•\tCustom tools are needed \n\t•\tSpecific network access required \n\t•\tSecurity restrictions exist \n\t•\tLarge builds require dedicated resources \nBenefits:\n\t•\tFull control \n\t•\tBetter customization \n\t•\tFaster execution for large workloads \nOne-line Answer:\nSelf-hosted agents run pipelines on our own infrastructure with more control and customization.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 91,
    "category": "DevOps General",
    "question": "What is Microsoft-hosted Agent?",
    "answer": "“Microsoft-hosted agents are managed by Microsoft.\nFeatures:\n\t•\tPreconfigured environments \n\t•\tNo maintenance required \n\t•\tAutomatically provisioned \n\t•\tSupports Windows/Linux/macOS \nBest for:\n\t•\tStandard builds \n\t•\tSmall to medium projects \nLimitation:\n\t•\tLess customization \nOne-line Answer:\nMicrosoft-hosted agents are ready-to-use build environments managed by Microsoft.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 92,
    "category": "DevOps General",
    "question": "What are stages, jobs, and tasks?",
    "answer": "“In Azure DevOps pipeline hierarchy:\nStage\nLogical grouping like:\n\t•\tBuild \n\t•\tTest \n\t•\tDeploy \nJob\nRuns on an agent.\nExample:\n\t•\tLinux job \n\t•\tWindows job \nTask\nIndividual execution step.\nExamples:\n\t•\tRun script \n\t•\tInstall Terraform \n\t•\tBuild Docker image \nHierarchy:\nStage → Job → Task\nOne-line Answer:\nStages organize workflows, jobs run on agents, and tasks perform individual actions.”\n\nAZURE",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 93,
    "category": "Azure & Azure DevOps",
    "question": "What are variables in Azure DevOps?",
    "answer": "“Variables are used to store reusable values in pipelines.\nTypes:\n\t•\tPipeline variables \n\t•\tVariable groups \n\t•\tSecret variables \nExamples:\n\t•\tEnvironment names \n\t•\tResource names \n\t•\tURLs \n\t•\tCredentials \nBenefits:\n\t•\tReusability \n\t•\tCentralized configuration \n\t•\tBetter security \nOne-line Answer:\nVariables store reusable configuration values used across pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 94,
    "category": "Azure & Azure DevOps",
    "question": "How do you secure secrets in pipelines?",
    "answer": "“We never hardcode secrets in pipeline YAML files.\nWe use:\n\t•\tAzure Key Vault \n\t•\tSecret variables \n\t•\tRBAC access control \nExamples of secrets:\n\t•\tPasswords \n\t•\tAPI keys \n\t•\tConnection strings \nWe integrate Azure Key Vault with Azure DevOps pipelines so secrets are fetched securely during runtime.\nOne-line Answer:\nI secure secrets using Azure Key Vault, secret variables, and RBAC permissions.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 95,
    "category": "DevOps General",
    "question": "What is Service Connection?",
    "answer": "“A Service Connection securely connects Azure DevOps to external services like:\n\t•\tAzure subscription \n\t•\tDocker Hub \n\t•\tGitHub \n\t•\tKubernetes clusters \nIt stores authentication details securely.\nExample:\nAzure Resource Manager service connection used for deploying infrastructure to Azure.\nOne-line Answer:\nService Connection securely connects Azure DevOps with external platforms and cloud services.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 96,
    "category": "Azure & Azure DevOps",
    "question": "Pipeline is failing – how do you troubleshoot?",
    "answer": "“My troubleshooting approach is systematic.\nSteps:\n\t•\tCheck pipeline logs \n\t•\tIdentify failed stage/task \n\t•\tVerify: \n\t•\tVariables \n\t•\tService connections \n\t•\tPermissions \n\t•\tAgent availability \n\t•\tEnable debug logging: \nsystem.debug: true\n\t•\tReproduce issue locally if possible \nIf infrastructure-related:\n\t•\tValidate Terraform \n\t•\tCheck Kubernetes events/logs \nOne-line Answer:\nI isolate failures using logs, validate configurations, and debug step-by-step.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 97,
    "category": "Docker & Kubernetes",
    "question": "Deployment failed in production – what will you do?",
    "answer": "“First priority is restoring service quickly.\nSteps:\n\t•\tCheck deployment logs \n\t•\tIdentify root cause \n\t•\tRollback to previous stable version \n\t•\tFix issue in lower environment \n\t•\tValidate changes \n\t•\tRedeploy safely \nWe usually maintain rollback strategies in AKS and CI/CD pipelines.\nOne-line Answer:\nI perform rollback immediately, fix root cause, validate, and redeploy safely.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 98,
    "category": "Docker & Kubernetes",
    "question": "How do you handle zero-downtime deployment?",
    "answer": "“We use deployment strategies like:\nBlue-Green Deployment\n\t•\tTwo environments: \n\t•\tBlue (current) \n\t•\tGreen (new) \n\t•\tTraffic switches after validation \nRolling Updates\n\t•\tGradual pod replacement \n\t•\tNo complete downtime \nWe also:\n\t•\tMonitor application health \n\t•\tUse load balancers \n\t•\tValidate readiness probes \nOne-line Answer:\nI use rolling updates and blue-green deployments for zero downtime.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 99,
    "category": "Azure & Azure DevOps",
    "question": "Pipeline is slow – how to optimize?",
    "answer": "“To optimize pipelines:\n\t•\tEnable caching \n\t•\tUse parallel jobs \n\t•\tRemove unnecessary tasks \n\t•\tOptimize Docker layers \n\t•\tUse lightweight agents \n\t•\tReduce repeated downloads \nWe also split pipelines logically for faster execution.\nOne-line Answer:\nI optimize pipelines using caching, parallel execution, and task optimization.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 100,
    "category": "Azure & Azure DevOps",
    "question": "How do you implement approvals in pipeline?",
    "answer": "“We use:\n\t•\tEnvironment approvals \n\t•\tManual validation tasks \n\t•\tRBAC restrictions \nProduction deployments require manual approval from authorized team members before execution.\nBenefits:\n\t•\tControlled deployment \n\t•\tReduced production risk \nOne-line Answer:\nI use environment-based approvals and validation steps for controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 101,
    "category": "DevOps General",
    "question": "Agent not picking job – why?",
    "answer": "“Possible reasons:\n\t•\tAgent offline \n\t•\tCapability mismatch \n\t•\tIncorrect pool configuration \n\t•\tPermission issue \nTroubleshooting:\n\t•\tCheck agent service status \n\t•\tValidate pool assignment \n\t•\tVerify required capabilities \nOne-line Answer:\nI verify agent health, capabilities, and pool configuration.”\n\nPipeline triggered but not running\n“Common reasons:\n\t•\tTrigger misconfiguration \n\t•\tWrong branch filters \n\t•\tYAML syntax issue \n\t•\tDisabled pipeline \nI check:\n\t•\ttrigger section \n\t•\tbranch filters \n\t•\tpipeline logs \n\t•\tYAML validation \nOne-line Answer:\nI verify triggers, branch filters, and YAML syntax.”\n\nPermission denied error\n“This usually happens because of:\n\t•\tRBAC issue \n\t•\tInvalid service connection \n\t•\tMissing access rights \nSteps:\n\t•\tValidate service connection \n\t•\tCheck Azure IAM roles \n\t•\tVerify Kubernetes RBAC \n\t•\tEnsure resource permissions \nOne-line Answer:\nI resolve permission errors by validating RBAC and service connection access.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 102,
    "category": "Azure & Azure DevOps",
    "question": "How do you design reusable pipelines?",
    "answer": "“We create reusable pipelines using:\n\t•\tYAML templates \n\t•\tShared repositories \n\t•\tParameterized pipelines \nBenefits:\n\t•\tDRY principle \n\t•\tStandardization \n\t•\tEasier maintenance \nExample:\nCommon build template reused across applications.\nOne-line Answer:\nI use YAML templates and parameters to create reusable and scalable pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 103,
    "category": "Azure & Azure DevOps",
    "question": "How do you implement pipeline-as-code best practices?",
    "answer": "“We treat pipelines like application code.\nBest practices:\n\t•\tStore YAML in Git \n\t•\tUse PR reviews \n\t•\tModular templates \n\t•\tNaming standards \n\t•\tVersion control \n\t•\tSeparate environments \nBenefits:\n\t•\tTraceability \n\t•\tAuditability \n\t•\tBetter collaboration \nOne-line Answer:\nI manage pipelines as version-controlled code using templates and reviews.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 104,
    "category": "Azure & Azure DevOps",
    "question": "How do you manage multi-branch pipelines?",
    "answer": "“We configure branch-based triggers.\nExamples:\n\t•\tfeature/* \n\t•\tdevelop \n\t•\tmain \nWe also:\n\t•\tEnable PR validation \n\t•\tUse separate deployment rules \n\t•\tApply environment-specific approvals \nOne-line Answer:\nI use branch filters and PR validation for managing multi-branch pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 105,
    "category": "Azure & Azure DevOps",
    "question": "How would you migrate on-prem CI/CD to Azure DevOps?",
    "answer": "“Migration approach:\n\t•\tAnalyze existing setup \n\t•\tMove repositories to Azure Repos \n\t•\tRebuild pipelines in YAML \n\t•\tConfigure agents \n\t•\tMigrate gradually \nWe avoid big-bang migration and move incrementally to reduce risks.\nOne-line Answer:\nI migrate incrementally using YAML pipelines with minimal business disruption.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 106,
    "category": "DevOps General",
    "question": "How do you handle secrets leakage incident?",
    "answer": "“Immediate actions:\n\t•\tRotate credentials \n\t•\tRevoke compromised access \n\t•\tAudit logs \n\t•\tIdentify root cause \n\t•\tStrengthen security policies \nPreventive measures:\n\t•\tKey Vault \n\t•\tSecret scanning \n\t•\tRBAC \nOne-line Answer:\nI handle secret leakage using credential rotation, access revocation, and security audits.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 107,
    "category": "Behavioral & Project",
    "question": "What challenges did you face in project?",
    "answer": "“Some challenges we faced:\n\t•\tPipeline failures \n\t•\tEnvironment mismatch \n\t•\tDeployment downtime \n\t•\tSecret management \n\t•\tSlow pipelines \nSolutions:\n\t•\tVariable groups + Key Vault \n\t•\tBlue-green deployments \n\t•\tPipeline optimization \n\t•\tBetter monitoring \n\t•\tStandardized environments \nOne-line Answer:\nI solved deployment, security, and pipeline issues using automation and DevOps best practices.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 108,
    "category": "Azure & Azure DevOps",
    "question": "Describe your CI/CD pipeline flow",
    "answer": "“Our pipeline flow:\n\t•\tDeveloper pushes code \n\t•\tCI pipeline triggers \n\t•\tBuild application \n\t•\tRun tests \n\t•\tSonarQube analysis \n\t•\tBuild Docker image \n\t•\tVulnerability scanning \n\t•\tPush image to ACR \n\t•\tCD deployment: \n\t•\tDev \n\t•\tQA \n\t•\tProduction \n\t•\tManual approval before production \nOne-line Answer:\nMy CI/CD pipeline automates build, testing, security scanning, and controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 109,
    "category": "Docker & Kubernetes",
    "question": "Difference between Continuous Delivery vs Continuous Deployment",
    "answer": "Continuous Delivery\nDeployment requires manual approval before production.\nContinuous Deployment\nProduction deployment happens automatically without manual intervention.\nOne-line Answer:\nContinuous Delivery requires approval; Continuous Deployment is fully automated.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 110,
    "category": "Azure & Azure DevOps",
    "question": "Why YAML pipelines over Classic?",
    "answer": "“Advantages of YAML:\n\t•\tVersion-controlled \n\t•\tReusable \n\t•\tScalable \n\t•\tTemplate support \n\t•\tEasier automation \nThat’s why most modern projects prefer YAML pipelines.\nOne-line Answer:\nYAML pipelines are flexible, reusable, scalable, and version-controlled.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 111,
    "category": "Terraform (IaC)",
    "question": "How do you integrate Terraform in pipeline?",
    "answer": "“We automate infrastructure provisioning using Terraform in CI/CD pipelines.\nPipeline flow:\n\t•\tInstall Terraform \n\t•\tRun terraform init \n\t•\tRun terraform plan \n\t•\tSecurity scan using tfsec \n\t•\tManual approval \n\t•\tRun terraform apply \nState file stored securely in Azure Blob Storage backend.\nOne-line Answer:\nI automate infrastructure deployment using Terraform integrated into Azure DevOps pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 112,
    "category": "Azure & Azure DevOps",
    "question": "What are Azure Service Models?",
    "answer": "“Azure provides three main cloud service models based on how much control and responsibility the customer wants.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 113,
    "category": "DevOps General",
    "question": "IaaS (Infrastructure as a Service)",
    "answer": "Azure provides infrastructure like:\n\t•\tVirtual Machines \n\t•\tNetworking \n\t•\tStorage \nCustomer manages:\n\t•\tOS \n\t•\tApplications \n\t•\tRuntime \n\t•\tSecurity patches \nExamples:\n\t•\tAzure VM \n\t•\tVirtual Network \n\t•\tLoad Balancer \nBest for:\n\t•\tLift-and-shift migration \n\t•\tFull infrastructure control",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 114,
    "category": "DevOps General",
    "question": "PaaS (Platform as a Service)",
    "answer": "Azure manages:\n\t•\tInfrastructure \n\t•\tOS \n\t•\tRuntime \nCustomer manages:\n\t•\tApplication \n\t•\tData \nExamples:\n\t•\tAzure App Service \n\t•\tAzure SQL Database \nBenefits:\n\t•\tFaster development \n\t•\tLess maintenance",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 115,
    "category": "DevOps General",
    "question": "SaaS (Software as a Service)",
    "answer": "Everything managed by provider.\nUsers only consume software.\nExamples:\n\t•\tOffice 365 \n\t•\tOutlook \n\t•\tTeams \n\nOne-line Answer:\nAzure service models define control levels: IaaS gives maximum control, PaaS provides managed platforms, and SaaS delivers ready-to-use software.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 116,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Active Directory?",
    "answer": "“Azure Active Directory (Azure AD) is Microsoft’s cloud-based identity and access management service.\nIt provides:\n\t•\tAuthentication \n\t•\tAuthorization \n\t•\tSingle Sign-On (SSO) \n\t•\tMulti-Factor Authentication (MFA) \nUses:\n\t•\tUser login management \n\t•\tSecure application access \n\t•\tRBAC integration \nExample:\nUsers can login once and access multiple applications securely.\nOne-line Answer:\nAzure AD securely manages user identity, authentication, and access control.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 117,
    "category": "Azure & Azure DevOps",
    "question": "What is NSG?",
    "answer": "“NSG stands for Network Security Group.\nIt acts like a firewall that controls:\n\t•\tInbound traffic \n\t•\tOutbound traffic \nRules are based on:\n\t•\tSource IP \n\t•\tDestination IP \n\t•\tPort \n\t•\tProtocol \nNSG can be attached to:\n\t•\tSubnets \n\t•\tNetwork Interfaces \nExample:\nAllow port 80 and block port 22 from public internet.\nOne-line Answer:\nNSG controls inbound and outbound traffic using security rules.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 118,
    "category": "Azure & Azure DevOps",
    "question": "What is RBAC?",
    "answer": "“RBAC stands for Role-Based Access Control.\nIt controls who can:\n\t•\tAccess resources \n\t•\tPerform actions \nExamples of roles:\n\t•\tOwner \n\t•\tContributor \n\t•\tReader \nBenefits:\n\t•\tLeast privilege access \n\t•\tBetter security \n\t•\tControlled permissions \nExample:\nDeveloper gets Contributor access only to Dev resource group.\nOne-line Answer:\nRBAC controls access to Azure resources based on assigned roles.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 119,
    "category": "Azure & Azure DevOps",
    "question": "What is Load Balancer?",
    "answer": "“Azure Load Balancer distributes incoming traffic across multiple servers or VMs.\nBenefits:\n\t•\tHigh availability \n\t•\tFault tolerance \n\t•\tBetter performance \nIt works at:\n\t•\tLayer 4 (TCP/UDP) \nUse cases:\n\t•\tVM traffic distribution \n\t•\tBackend server balancing \nOne-line Answer:\nLoad Balancer distributes traffic across multiple resources for high availability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 120,
    "category": "DevOps General",
    "question": "What is VPN Gateway?",
    "answer": "“Azure VPN Gateway securely connects:\n\t•\tOn-premises datacenter \n\t•\tRemote users \n\t•\tAzure VNets \nTypes:\n\t•\tSite-to-Site VPN \n\t•\tPoint-to-Site VPN \nTraffic is encrypted over internet.\nOne-line Answer:\nVPN Gateway securely connects on-premises environments to Azure.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 121,
    "category": "DevOps General",
    "question": "What is Availability Set?",
    "answer": "“Availability Set improves VM uptime and availability.\nIt protects against:\n\t•\tHardware failure \n\t•\tPlanned maintenance \nUses:\n\t•\tFault Domains \n\t•\tUpdate Domains \nThis ensures all VMs don’t go down together.\nOne-line Answer:\nAvailability Set improves VM availability during failures and maintenance.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 122,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Scale Set?",
    "answer": "“Azure VM Scale Set manages multiple identical VMs automatically.\nFeatures:\n\t•\tAuto scaling \n\t•\tLoad balancing \n\t•\tHigh availability \nScaling based on:\n\t•\tCPU \n\t•\tMemory \n\t•\tCustom metrics \nBest for:\n\t•\tWeb applications \n\t•\tLarge workloads \nOne-line Answer:\nScale Set automatically scales and manages multiple VM instances.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 123,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Application Gateway?",
    "answer": "“Application Gateway is a Layer 7 load balancer.\nFeatures:\n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tWeb Application Firewall (WAF) \n\t•\tSession affinity \nBest for:\n\t•\tWeb applications \n\t•\tHTTP/HTTPS traffic \nOne-line Answer:\nApplication Gateway is a Layer 7 load balancer with intelligent routing and WAF support.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 124,
    "category": "Azure & Azure DevOps",
    "question": "Difference between Load Balancer vs Application Gateway",
    "answer": "Load Balancer\nApplication Gateway\nLayer 4\nLayer 7\nTCP/UDP traffic\nHTTP/HTTPS traffic\nBasic traffic distribution\nIntelligent routing\nNo WAF\nSupports WAF\nOne-line Answer:\nLoad Balancer works at Layer 4, while Application Gateway works at Layer 7 with advanced routing.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 125,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Functions?",
    "answer": "“Azure Functions is a serverless compute service.\nFeatures:\n\t•\tEvent-driven execution \n\t•\tPay-per-use \n\t•\tNo server management \nTriggers:\n\t•\tHTTP \n\t•\tTimer \n\t•\tBlob storage \n\t•\tQueue messages \nOne-line Answer:\nAzure Functions executes code without managing servers.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 126,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Key Vault?",
    "answer": "“Azure Key Vault securely stores:\n\t•\tSecrets \n\t•\tPasswords \n\t•\tCertificates \n\t•\tEncryption keys \nBenefits:\n\t•\tCentralized secret management \n\t•\tRBAC integration \n\t•\tSecure CI/CD integration \nUsed in:\n\t•\tTerraform \n\t•\tAzure DevOps pipelines \n\t•\tAKS \nOne-line Answer:\nKey Vault securely stores and manages secrets, keys, and certificates.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 127,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Site Recovery (ASR)?",
    "answer": "“Azure Site Recovery is a disaster recovery solution.\nFeatures:\n\t•\tWorkload replication \n\t•\tFailover support \n\t•\tBusiness continuity \nIt replicates workloads to another region for recovery during disaster.\nOne-line Answer:\nASR provides disaster recovery through workload replication and failover.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 128,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Bastion?",
    "answer": "“Azure Bastion provides secure RDP and SSH access to VMs.\nBenefits:\n\t•\tNo public IP needed \n\t•\tBrowser-based access \n\t•\tImproved security \nOne-line Answer:\nAzure Bastion securely accesses VMs without exposing public IPs.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 129,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Front Door?",
    "answer": "“Azure Front Door is a global Layer 7 load balancer.\nFeatures:\n\t•\tGlobal routing \n\t•\tCDN integration \n\t•\tSSL offloading \n\t•\tWAF support \n\t•\tLow latency routing \nBest for:\n\t•\tGlobal applications \nOne-line Answer:\nAzure Front Door provides global traffic routing with low latency and high availability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 130,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Traffic Manager?",
    "answer": "“Traffic Manager is a DNS-based traffic routing service.\nRouting methods:\n\t•\tPriority \n\t•\tPerformance \n\t•\tGeographic \n\t•\tWeighted \nBest for:\n\t•\tMulti-region applications \nOne-line Answer:\nTraffic Manager distributes global traffic using DNS-based routing.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 131,
    "category": "DevOps General",
    "question": "What is Managed Identity?",
    "answer": "“Managed Identity provides Azure resources with identities to access other services securely.\nBenefits:\n\t•\tNo credential storage \n\t•\tAutomatic credential management \n\t•\tIntegrated with Azure AD \nUsed for:\n\t•\tAccessing Key Vault \n\t•\tDatabase authentication \nOne-line Answer:\nManaged Identity securely accesses Azure services without storing credentials.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 132,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Policy?",
    "answer": "“Azure Policy enforces governance and compliance rules.\nExamples:\n\t•\tRestrict VM sizes \n\t•\tEnforce tagging \n\t•\tDeny public IPs \nActions:\n\t•\tAudit \n\t•\tDeny \n\t•\tAppend \nOne-line Answer:\nAzure Policy enforces governance and compliance rules across Azure resources.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 133,
    "category": "DevOps General",
    "question": "What is Private Endpoint?",
    "answer": "“Private Endpoint assigns a private IP to Azure services within a VNet.\nBenefits:\n\t•\tNo public internet exposure \n\t•\tSecure communication \n\t•\tBetter compliance \nUsed for:\n\t•\tStorage Accounts \n\t•\tSQL Databases \n\t•\tKey Vault \nOne-line Answer:\nPrivate Endpoint securely connects Azure services through private IP addresses.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 134,
    "category": "DevOps General",
    "question": "Difference between Service Endpoint vs Private Endpoint",
    "answer": "Service Endpoint\nPrivate Endpoint\nUses public endpoint\nUses private IP\nSimpler setup\nMore secure\nTraffic still public\nTraffic private\nOne-line Answer:\nPrivate Endpoint is more secure because it uses private IP connectivity.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 135,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Landing Zone?",
    "answer": "“Landing Zone is a preconfigured Azure environment designed using best practices.\nIncludes:\n\t•\tNetworking \n\t•\tSecurity \n\t•\tGovernance \n\t•\tIdentity management \nBuilt using:\n\t•\tTerraform \n\t•\tARM \n\t•\tBicep \nOne-line Answer:\nLanding Zone provides a secure and scalable Azure foundation.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 136,
    "category": "DevOps General",
    "question": "What is Zero Trust Security?",
    "answer": "“Zero Trust follows:\n‘Never trust, always verify.’\nPrinciples:\n\t•\tIdentity verification \n\t•\tLeast privilege access \n\t•\tContinuous monitoring \nUsed with:\n\t•\tMFA \n\t•\tConditional Access \n\t•\tRBAC \nOne-line Answer:\nZero Trust verifies every access request before granting permissions.”\n\nEvent Hub vs Service Bus\nEvent Hub\nService Bus\nStreaming platform\nMessaging platform\nHigh throughput\nGuaranteed delivery\nTelemetry data\nEnterprise messaging\nOne-line Answer:\nEvent Hub handles streaming data, while Service Bus handles reliable messaging.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 137,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Firewall?",
    "answer": "“Azure Firewall is a managed network security service.\nFeatures:\n\t•\tTraffic filtering \n\t•\tThreat intelligence \n\t•\tLogging \n\t•\tCentralized control \nSupports:\n\t•\tApplication rules \n\t•\tNetwork rules \nOne-line Answer:\nAzure Firewall protects Azure resources by filtering network traffic.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 138,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Disk Types?",
    "answer": "“Azure provides multiple disk types:\nStandard HDD\n\t•\tLow cost \n\t•\tBasic workloads \nStandard SSD\n\t•\tBalanced performance \nPremium SSD\n\t•\tHigh-performance applications \nUltra Disk\n\t•\tExtremely high IOPS \nOne-line Answer:\nAzure offers multiple disk types based on cost and performance requirements.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 139,
    "category": "DevOps General",
    "question": "Difference between Availability Zone vs Region Pair",
    "answer": "Availability Zone\nRegion Pair\nSame region\nDifferent regions\nLow latency\nDisaster recovery\nLocal redundancy\nGeo redundancy\nOne-line Answer:\nAvailability Zones provide local redundancy, while Region Pairs provide disaster recovery.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 140,
    "category": "DevOps General",
    "question": "What is ExpressRoute?",
    "answer": "“ExpressRoute provides private connectivity between:\n\t•\tOn-premises datacenter \n\t•\tAzure \nBenefits:\n\t•\tFaster connection \n\t•\tMore secure \n\t•\tNo internet exposure \nUsed by enterprises requiring dedicated connectivity.\nOne-line Answer:\nExpressRoute provides private, secure, and high-speed Azure connectivity.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 141,
    "category": "DevOps General",
    "question": "How do you design highly available architecture?",
    "answer": "“We use:\n\t•\tAvailability Zones \n\t•\tMultiple instances \n\t•\tLoad Balancers \n\t•\tAuto scaling \n\t•\tBackup and disaster recovery \nGoal:\nAvoid single point of failure.\nOne-line Answer:\nHigh availability is achieved using redundancy, load balancing, and failover mechanisms.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 142,
    "category": "DevOps General",
    "question": "How do you design scalable architecture?",
    "answer": "“We design scalable systems using:\n\t•\tVM Scale Sets \n\t•\tAuto scaling \n\t•\tStateless applications \n\t•\tCDN \n\t•\tRedis caching \nOne-line Answer:\nScalability is achieved using auto-scaling and stateless architecture design.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 143,
    "category": "Azure & Azure DevOps",
    "question": "How do you secure Azure resources?",
    "answer": "“We secure resources using:\n\t•\tRBAC \n\t•\tNSG \n\t•\tFirewall \n\t•\tKey Vault \n\t•\tPrivate Endpoints \n\t•\tMonitoring and alerts \nOne-line Answer:\nAzure resources are secured using access control, network isolation, and monitoring.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 144,
    "category": "DevOps General",
    "question": "What is fault domain vs update domain?",
    "answer": "Fault Domain\nProtects against hardware failures.\nUpdate Domain\nProtects during planned maintenance.\nOne-line Answer:\nFault domains isolate hardware failures, while update domains isolate maintenance events.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 145,
    "category": "DevOps General",
    "question": "What is Hub-Spoke Architecture?",
    "answer": "“In Hub-Spoke architecture:\nHub\nContains shared services:\n\t•\tFirewall \n\t•\tVPN \n\t•\tDNS \nSpoke\nContains application VNets.\nBenefits:\n\t•\tCentralized security \n\t•\tBetter scalability \nOne-line Answer:\nHub-Spoke centralizes networking and improves security and scalability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 146,
    "category": "Terraform (IaC)",
    "question": "What is Terraform State & why is it critical?",
    "answer": "“Terraform state is a file that stores the current mapping between Terraform configuration and real infrastructure resources.\nWhenever Terraform creates infrastructure, it stores resource details inside the state file.\nThe state file contains:\n\t•\tResource IDs \n\t•\tMetadata \n\t•\tDependencies \n\t•\tCurrent infrastructure status \nTerraform compares:\n\t•\tDesired configuration\nvs \n\t•\tCurrent state \nto determine:\n\t•\tWhat to create \n\t•\tWhat to update \n\t•\tWhat to delete \nWithout state, Terraform cannot properly track infrastructure.\nFor example:\nIf a VM already exists but Terraform has no state information, Terraform may try to create the same VM again.\nThat’s why state is extremely critical in Terraform.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 147,
    "category": "Terraform (IaC)",
    "question": "Infrastructure Tracking",
    "answer": "Terraform knows which resources it manages.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 148,
    "category": "Terraform (IaC)",
    "question": "Change Detection",
    "answer": "Terraform identifies infrastructure drift and required modifications.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 149,
    "category": "Terraform (IaC)",
    "question": "Dependency Management",
    "answer": "Terraform maintains resource relationships and execution order.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 150,
    "category": "Terraform (IaC)",
    "question": "Performance Optimization",
    "answer": "Terraform does not query every resource every time.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 151,
    "category": "DevOps General",
    "question": "Collaboration",
    "answer": "Remote state allows teams to work together safely.\n\nRemote State Best Practice\n“In production, we never store state locally.\nWe store Terraform state in:\n\t•\tAzure Blob Storage \n\t•\tS3 bucket \n\t•\tTerraform Cloud \nWe also enable:\n\t•\tState locking \n\t•\tVersioning \n\t•\tBackup \nThis prevents corruption and concurrent modifications.”\n\nOne-line Answer\n“Terraform state is the source of truth that Terraform uses to track and manage infrastructure resources.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 152,
    "category": "Terraform (IaC)",
    "question": "What if your Terraform state file is deleted?",
    "answer": "“If the Terraform state file gets deleted, Terraform loses track of all infrastructure resources.\nThe infrastructure may still exist in Azure or cloud provider, but Terraform will no longer know it manages those resources.\nAs a result:\n\t•\tTerraform may try to recreate existing resources \n\t•\tDuplicate resources may be created \n\t•\tConflicts and deployment failures can happen \nThat’s why state backup is very important.”\n\nRecovery Methods\nScenario 1: Remote Backend with Backup\n“If remote backend versioning is enabled:\n\t•\tRestore previous state version \n\t•\tContinue normal operations \nExample:\nAzure Blob Storage versioning or S3 versioning.”\n\nScenario 2: No Backup Available\n“We rebuild the state using:\nterraform import\nTerraform import maps existing infrastructure into Terraform state manually.”\nExample:\nterraform import azurerm_resource_group.rg my-rg\n\nBest Practices to Prevent State Loss\n\t•\tUse remote backend \n\t•\tEnable versioning \n\t•\tEnable state locking \n\t•\tRestrict access \n\t•\tTake backups regularly \n\nOne-line Answer\n“If the state file is deleted, Terraform loses infrastructure tracking and may try to recreate existing resources.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 153,
    "category": "Terraform (IaC)",
    "question": "What are Terraform Workspaces?",
    "answer": "“Terraform Workspaces allow multiple state files using the same Terraform configuration.\nEach workspace maintains:\n\t•\tSeparate state \n\t•\tSeparate infrastructure \nThis is useful for environments like:\n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction \nDefault workspace name:\ndefault\nExample:\nSame Terraform code can create:\n\t•\tDev infrastructure in one workspace \n\t•\tProduction infrastructure in another workspace \nwithout changing the code.”\n\nWorkspace Commands\nCreate Workspace\nterraform workspace new dev\nSwitch Workspace\nterraform workspace select prod\nList Workspaces\nterraform workspace list\n\nBenefits of Workspaces\n\t•\tEnvironment isolation \n\t•\tReusability \n\t•\tSimplified management \n\t•\tSeparate state tracking \n\nLimitation\n“For large enterprise projects, separate folders and separate backend configurations are usually preferred over only workspaces.”\n\nOne-line Answer\n“Terraform workspaces allow multiple isolated state files using the same Terraform code.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 154,
    "category": "DevOps General",
    "question": "How do you manage multiple environments (Dev/Stage/Prod)?",
    "answer": "“In real projects, we manage multiple environments carefully to avoid conflicts and maintain isolation.\nWe usually use:\n\t•\tSeparate folders \n\t•\tSeparate variable files \n\t•\tSeparate backend state files \n\t•\tSeparate subscriptions/resource groups \nfor:\n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction” \n\nOur Approach",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 155,
    "category": "DevOps General",
    "question": "Separate Variable Files",
    "answer": "Example:\n\t•\tdev.tfvars \n\t•\tqa.tfvars \n\t•\tprod.tfvars \nEach file contains environment-specific values.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 156,
    "category": "DevOps General",
    "question": "Separate State Files",
    "answer": "Each environment has:\n\t•\tIndependent backend \n\t•\tSeparate state management \nThis avoids accidental production impact.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 157,
    "category": "DevOps General",
    "question": "Resource Naming Convention",
    "answer": "Examples:\n\t•\tdev-vnet \n\t•\tqa-aks \n\t•\tprod-storage \nThis improves readability and management.",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 158,
    "category": "DevOps General",
    "question": "CI/CD Integration",
    "answer": "“We use Azure DevOps pipelines for controlled deployments.\nProduction deployment requires:\n\t•\tApproval \n\t•\tValidation \n\t•\tSecurity checks”",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 159,
    "category": "DevOps General",
    "question": "Environment Isolation",
    "answer": "We isolate:\n\t•\tNetworking \n\t•\tAccess control \n\t•\tMonitoring \n\t•\tSecrets \nfor each environment.\n\nOne-line Answer\n“I manage multiple environments using separate state files, variable files, naming conventions, and CI/CD-controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 160,
    "category": "DevOps General",
    "question": "count",
    "answer": "“count is used for creating multiple similar resources using numeric indexing.”\nExample:\ncount = 3\nResources created:\n\t•\tVM[0] \n\t•\tVM[1] \n\t•\tVM[2] \nBest Use Case\nWhen resources are almost identical.\nLimitation\nIndex-based tracking can cause issues if order changes.",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 161,
    "category": "DevOps General",
    "question": "for_each",
    "answer": "“for_each is used for looping through:\n\t•\tMaps \n\t•\tSets \n\t•\tKey-value pairs \nIt provides better resource identification.”\nExample:\nfor_each = toset([\"dev\",\"qa\",\"prod\"])\nBenefits:\n\t•\tBetter flexibility \n\t•\tEasier updates \n\t•\tStable resource tracking \nBest Use Case\nWhen resources have unique names/configurations.",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 162,
    "category": "DevOps General",
    "question": "dynamic",
    "answer": "“dynamic blocks are used to generate nested configuration blocks dynamically.”\nUsed when:\n\t•\tNested blocks repeat \n\t•\tConfiguration changes dynamically \nExample use cases:\n\t•\tMultiple security rules \n\t•\tMultiple disks \n\t•\tMultiple ingress rules \n\nComparison Table\nFeature\ncount\nfor_each\ndynamic\nWorks with\nNumbers\nMaps/Sets\nNested blocks\nTracking\nIndex-based\nKey-based\nDynamic generation\nFlexibility\nLow\nHigh\nVery High\nBest for\nSimilar resources\nUnique resources\nNested configurations\n\nOne-line Answer\n“count is index-based looping, for_each is key-based looping, and dynamic is used for generating nested blocks dynamically.”\nScenario-Based DevOps / Cloud Interview Questions & Answers",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 163,
    "category": "Terraform (IaC)",
    "question": "If You Need to Create 100 VMs in Multiple Regions, What Approach Will You Use?",
    "answer": "For large-scale VM deployment, I would use:\n\t•\tTerraform \n\t•\tfor_each \n\t•\treusable modules \n\t•\tregion-based architecture \nExample Strategy\n\t•\t100 VMs in West Europe \n\t•\t100 VMs in Central US \nBest Practices\n\t•\tSeparate VNets per region \n\t•\tGlobal VNet Peering \n\t•\tReusable Terraform modules \n\t•\tSeparate Terraform state files \nCommunication Between Regions\nUse:\n\t•\tGlobal VNet Peering \n\t•\tAzure backbone network \n\t•\tPrivate communication",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 164,
    "category": "DevOps General",
    "question": "How Will You Reduce Latency Between Multi-Region VMs?",
    "answer": "Best Practices\n\t•\tKeep workloads regional \n\t•\tUse local database/cache \n\t•\tAvoid synchronous cross-region calls \n\t•\tUse async communication \n\t•\tUse Redis caching \n\t•\tUse Azure Front Door \nNetworking\n\t•\tGlobal VNet Peering \n\t•\tAccelerated networking \nArchitecture\nUsers\n   │\nAzure Front Door\n   │\n ├── Europe Region\n └── US Region",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 165,
    "category": "Azure & Azure DevOps",
    "question": "How Do You Manage Secrets in Azure?",
    "answer": "Use:\n\t•\tMicrosoft \nStore:\n\t•\tPasswords \n\t•\tAPI keys \n\t•\tCertificates \n\t•\tConnection strings \nBest Practice\nUse:\n\t•\tManaged Identity \n\t•\tRBAC \n\t•\tPrivate Endpoint \nAvoid\n❌ Hardcoding secrets\n❌ Storing secrets in GitHub",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 166,
    "category": "Terraform (IaC)",
    "question": "Explain Full Terraform Key Vault Setup",
    "answer": "Steps\n\t•\tCreate Key Vault \n\t•\tStore secrets \n\t•\tEnable Managed Identity on VM \n\t•\tAssign RBAC permissions \n\t•\tAccess secrets securely \nTerraform Resources Used\n\t•\tazurerm_key_vault \n\t•\tazurerm_key_vault_secret \n\t•\tazurerm_role_assignment",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 167,
    "category": "Terraform (IaC)",
    "question": "If One Resource Needs to Be Deleted in Terraform, How Will You Do It?",
    "answer": "Best Method\nRemove resource block from code.\nThen run:\nterraform plan\nterraform apply\nAlternative\nterraform destroy -target=RESOURCE_NAME",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 168,
    "category": "Terraform (IaC)",
    "question": "What Happens During Terraform Lifecycle?",
    "answer": "Lifecycle Flow\nterraform init\nterraform validate\nterraform plan\nterraform apply\nterraform destroy\nPurpose\n\t•\tInitialize providers \n\t•\tCheck syntax \n\t•\tCreate execution plan \n\t•\tCreate/update infrastructure \n\t•\tDestroy infrastructure",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 169,
    "category": "Terraform (IaC)",
    "question": "What is Terraform Import?",
    "answer": "Used to import existing infrastructure into Terraform state.\nExample\nterraform import azurerm_resource_group.rg RESOURCE_ID",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 170,
    "category": "Terraform (IaC)",
    "question": "Scenario: Production VM Accidentally Deleted. What Will You Do?",
    "answer": "Steps\n\t•\tCheck monitoring alerts \n\t•\tCheck Terraform state \n\t•\tRecreate VM using Terraform \n\t•\tRestore backup if needed \n\t•\tCheck root cause \nPrevention\n\t•\tBackup \n\t•\tAvailability Sets/Zones \n\t•\tVMSS \n\t•\tMonitoring alerts",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 171,
    "category": "Docker & Kubernetes",
    "question": "Scenario: Application is Down in Kubernetes. How Will You Troubleshoot?",
    "answer": "Steps\nCheck pods:\nkubectl get pods",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 172,
    "category": "Docker & Kubernetes",
    "question": "Describe pod:",
    "answer": "kubectl describe pod POD_NAME\nCheck logs:\nkubectl logs POD_NAME\nCheck:\n\t•\tCrashLoopBackOff \n\t•\tImage pull errors \n\t•\tCPU/memory issues \n\t•\tNetwork issue \n\t•\tConfigMap/Secret issue",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 173,
    "category": "DevOps General",
    "question": "Scenario: Jenkins Build Failed. What Will You Check?",
    "answer": "Troubleshooting\n\t•\tConsole logs \n\t•\tDisk space \n\t•\tJenkins agent status \n\t•\tGit access \n\t•\tDocker daemon \n\t•\tCredentials \nCommands\nsystemctl status jenkins",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 174,
    "category": "Linux & Git",
    "question": "Scenario: Disk Space Full on Linux Server",
    "answer": "Check Disk Usage\ndf -h\nFind Large Files\ndu -sh /*\nCleanup\n\t•\tOld logs \n\t•\tDocker images \n\t•\tTemporary files",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 175,
    "category": "Terraform (IaC)",
    "question": "Scenario: How Will You Secure Terraform State?",
    "answer": "Best Practices\n\t•\tRemote backend \n\t•\tState locking \n\t•\tEncryption \n\t•\tRBAC \nUse:\n\t•\tMicrosoft \n\t•\tStorage account backend",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 176,
    "category": "Terraform (IaC)",
    "question": "Scenario: How Will You Deploy Zero-Downtime Application?",
    "answer": "Kubernetes\nUse:\n\t•\tRolling updates \n\t•\tMultiple replicas \n\t•\tReadiness probes \nTerraform\ncreate_before_destroy = true",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 177,
    "category": "Docker & Kubernetes",
    "question": "Scenario: How Will You Scale Kubernetes Application?",
    "answer": "Manual Scaling\nkubectl scale deployment nginx --replicas=5\nAuto Scaling\nUse:\n\t•\tHPA (Horizontal Pod Autoscaler)",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 178,
    "category": "DevOps General",
    "question": "Scenario: How Will You Handle Multi-Environment Infra?",
    "answer": "Structure\ndev/\nstage/\nprod/\nBest Practices\n\t•\tSeparate state \n\t•\tSeparate variables \n\t•\tReusable modules",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 179,
    "category": "Docker & Kubernetes",
    "question": "Scenario: Application Works Locally but Fails in Docker",
    "answer": "Check:\n\t•\tPort mapping \n\t•\tEnvironment variables \n\t•\tDependencies \n\t•\tContainer logs \nLogs\ndocker logs CONTAINER_ID",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 180,
    "category": "DevOps General",
    "question": "Scenario: How Will You Monitor Production Infrastructure?",
    "answer": "Use:\n\t•\tPrometheus \n\t•\tGrafana \n\t•\tAzure Monitor \n\t•\tCloudWatch \nMonitor:\n\t•\tCPU \n\t•\tMemory \n\t•\tDisk \n\t•\tNetwork \n\t•\tApplication logs",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 181,
    "category": "Docker & Kubernetes",
    "question": "Scenario: How Will You Secure Kubernetes Cluster?",
    "answer": "Security Best Practices\n\t•\tRBAC \n\t•\tNetwork policies \n\t•\tSecrets management \n\t•\tPrivate cluster \n\t•\tImage scanning \n\t•\tNamespace isolation",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 182,
    "category": "Azure & Azure DevOps",
    "question": "Scenario: How Will You Handle Secrets in CI/CD Pipeline?",
    "answer": "Best Practice\nUse:\n\t•\tAzure Key Vault \n\t•\tJenkins credentials \n\t•\tKubernetes secrets \nAvoid:\n❌ Hardcoded passwords\n❌ Secrets in GitHub\n\nFinal Interview Closing Line\n“I have experience in cloud infrastructure, CI/CD, Terraform, Docker, Kubernetes, and Linux administration. I enjoy automating infrastructure and solving production issues using DevOps best practices.”\nDevOps / Cloud Engineer Interview Notes (Q&A)",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 183,
    "category": "DevOps General",
    "question": "Self Introduction",
    "answer": "Hi, my name is [Your Name].\nI am working as a DevOps/Cloud Engineer with experience in:\n\t•\tLinux Administration \n\t•\tCloud Infrastructure \n\t•\tCI/CD pipelines \n\t•\tDocker & Kubernetes \n\t•\tTerraform \n\t•\tMonitoring and deployment automation \nCurrently, I am working mainly on Microsoft cloud platform.\nDay-to-Day Activities\n\t•\tManaging cloud infrastructure \n\t•\tCreating CI/CD pipelines using Jenkins \n\t•\tDeploying applications \n\t•\tWriting Terraform code \n\t•\tMonitoring Linux servers \n\t•\tManaging Docker containers and Kubernetes clusters \n\t•\tTroubleshooting production issues \n\t•\tManaging secrets using Microsoft \n\nLinux Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 184,
    "category": "Linux & Git",
    "question": "What is systemctl in Linux?",
    "answer": "systemctl is a command used to manage services in Linux systems that use systemd.\nUses:\n\t•\tStart service \n\t•\tStop service \n\t•\tRestart service \n\t•\tEnable/Disable service \n\t•\tCheck service status \nCommands\nsystemctl start nginx\nsystemctl stop nginx\nsystemctl restart nginx\nsystemctl status nginx\nBackend Working\n\t•\tsystemctl talks to systemd \n\t•\tsystemd is PID 1 process \n\t•\tReads service unit files \n\t•\tManages service lifecycle \nService files location:\n/etc/systemd/system/",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 185,
    "category": "DevOps General",
    "question": "Difference Between du and df",
    "answer": "Command\nPurpose\ndf\nFilesystem disk usage\ndu\nDirectory/file size\ndf\ndf -h\nShows:\n\t•\tTotal disk \n\t•\tUsed space \n\t•\tFree space \ndu\ndu -sh /var/log\nShows:\n\t•\tSize of directory/files",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 186,
    "category": "DevOps General",
    "question": "How to Check Running Processes/Services?",
    "answer": "Running Processes\nps -ef\nCount:\nps -ef | wc -l\nReal-time Monitoring\ntop\nor\nhtop\nRunning Services\nsystemctl list-units --type=service --state=running\nCount:\nsystemctl list-units --type=service --state=running | wc -l\n\nJenkins Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 187,
    "category": "Azure & Azure DevOps",
    "question": "What is Jenkins Pipeline?",
    "answer": "Jenkins pipeline automates:\n\t•\tBuild \n\t•\tTest \n\t•\tDeployment \n\t•\tCI/CD process \nFlow\nCode → Build → Test → Deploy\nBenefits\n\t•\tAutomation \n\t•\tFaster deployment \n\t•\tReduced manual work \n\t•\tContinuous Integration \nExample\npipeline {\n  agent any\n\n  stages {\n    stage('Build') {\n      steps {\n        echo 'Building'\n      }\n    }\n\n    stage('Deploy') {\n      steps {\n        echo 'Deploying'\n      }\n    }\n  }\n}\n\nDocker Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 188,
    "category": "Docker & Kubernetes",
    "question": "Have You Worked on Docker?",
    "answer": "Yes, I have worked on Docker.\nWork Done:\n\t•\tDocker image creation \n\t•\tDockerfile writing \n\t•\tContainer deployment \n\t•\tDocker Compose \n\t•\tRegistry push/pull \nCommands\ndocker build\ndocker run\ndocker ps\ndocker logs\n\nSample Dockerfile\nFROM nginx\n\nCOPY . /usr/share/nginx/html\nBuild Image:\ndocker build -t myapp .\nRun Container:\ndocker run -d -p 80:80 myapp\n\nKubernetes Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 189,
    "category": "Docker & Kubernetes",
    "question": "Have You Deployed Applications on Docker or Kubernetes?",
    "answer": "Yes, I have deployed applications on both Docker and Kubernetes.\nKubernetes Work:\n\t•\tDeployments \n\t•\tServices \n\t•\tIngress \n\t•\tConfigMaps \n\t•\tSecrets \n\t•\tAutoscaling \n\t•\tTroubleshooting pods \nCommands\nkubectl get pods\nkubectl get svc\nkubectl logs pod-name\nkubectl describe pod pod-name\n\nKubernetes Deployment Example\napiVersion: apps/v1\nkind: Deployment\n\nmetadata:\n  name: nginx\n\nspec:\n  replicas: 2\n\n  selector:\n    matchLabels:\n      app: nginx\n\n  template:\n    metadata:\n      labels:\n        app: nginx\n\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\nApply:\nkubectl apply -f deployment.yaml\n\nTerraform Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 190,
    "category": "Terraform (IaC)",
    "question": "What is Terraform?",
    "answer": "Terraform is Infrastructure as Code tool used to automate cloud infrastructure creation.\n\nTerraform Lifecycle\nterraform init\nterraform plan\nterraform apply\nterraform destroy\nCommands\nterraform init\nterraform plan\nterraform apply\nterraform destroy",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 191,
    "category": "Terraform (IaC)",
    "question": "What is Terraform State?",
    "answer": "Terraform state file:\n\t•\ttracks infrastructure \n\t•\tstores resource metadata \nFile:\nterraform.tfstate\n\nTerraform Import\nUsed to import existing infrastructure into Terraform state.\nExample:\nterraform import azurerm_resource_group.rg RESOURCE_ID\n\nAzure Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 192,
    "category": "Azure & Azure DevOps",
    "question": "Which Azure Services Have You Used?",
    "answer": "Worked on:\n\t•\tVirtual Machines \n\t•\tVNets \n\t•\tNSGs \n\t•\tLoad Balancers \n\t•\tStorage Accounts \n\t•\tAKS \n\t•\tAzure Key Vault \n\t•\tAzure Monitor",
    "difficulty": "Easy",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 193,
    "category": "Terraform (IaC)",
    "question": "What is the difference between count and for_each in Terraform, and when should you use which?",
    "answer": "• 'count' uses a list and indexes resources numerically (0, 1, 2...). If you remove an item from the middle of the list, Terraform will recreate all subsequent resources because their index shifts.\n• 'for_each' uses a map or set of strings and identifies resources by their keys. Removing an item only deletes that specific resource without affecting others.\n• Best Practice: Use 'for_each' for almost all resource collections, especially when resources are independent. Use 'count' for simple toggle switches (e.g., creating a resource if a condition is true: count = var.create_resource ? 1 : 0).",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 194,
    "category": "Terraform (IaC)",
    "question": "What are Dynamic Blocks in Terraform and when should you use them?",
    "answer": "• Dynamic Blocks allow you to construct nested configuration blocks dynamically based on a list or map variable.\n• Example: Creating multiple security rules inside an 'azurerm_network_security_group' resource based on a list of port numbers.\n• Syntax:\n  dynamic \"security_rule\" {\n    for_each = var.rules\n    content {\n      name = security_rule.value.name\n      port = security_rule.value.port\n      # ... other attributes\n    }\n  }\n• Best Practice: Use them to keep your code DRY (Don't Repeat Yourself) when dealing with repeatable nested blocks, but avoid overusing them as they can make code harder to read.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 195,
    "category": "Terraform (IaC)",
    "question": "How do you handle infrastructure drift in Terraform?",
    "answer": "• Infrastructure drift occurs when the actual state of cloud resources deviates from the Terraform configuration (e.g., someone manually modifies a resource via the Azure Portal).\n• Detection: Run 'terraform plan'. Terraform refreshes the state against the cloud and highlights differences.\n• Remediation:\n  1. Align Code: Update your Terraform code to match the manual changes if they are intended.\n  2. Revert Changes: Run 'terraform apply' to overwrite manual changes and restore the state defined in your code.\n• Best Practice: Implement automated drift detection cron jobs in your pipelines and restrict write permissions to the cloud portal to prevent manual changes.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 196,
    "category": "Terraform (IaC)",
    "question": "How do you securely manage secrets in Terraform configurations?",
    "answer": "• Never hardcode secrets in .tf files.\n• Best Practices:\n  1. Use Variables: Declare variables and pass values using environment variables (TF_VAR_variable_name) or secure .tfvars files (added to .gitignore).\n  2. Key Vault Integration: Reference secrets stored in Azure Key Vault using data sources:\n     data \"azurerm_key_vault_secret\" \"db_password\" {\n       name         = \"db-pass\"\n       key_vault_id = data.azurerm_key_vault.main.id\n     }\n  3. Secure Remote Backend: Always store state files in a secure remote backend (like Azure Blob Storage) with encryption at rest and access control, as Terraform state contains secrets in plain text.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 197,
    "category": "Terraform (IaC)",
    "question": "What is the purpose of 'terraform import' and the newer 'import' block?",
    "answer": "• 'terraform import' is used to bring existing cloud resources (created manually or via other tools) under Terraform management.\n• Legacy Command: 'terraform import azurerm_resource_group.rg /subscriptions/123/resourceGroups/my-rg'. This updates the state file, but you still have to write the resource block in your code manually.\n• Modern Import Block (Terraform 1.5+): Write an 'import' block in your code:\n  import {\n    to = azurerm_resource_group.rg\n    id = \"/subscriptions/123/resourceGroups/my-rg\"\n  }\n  Then run 'terraform plan -generate-config-out=generated.tf' to automatically generate the resource code.\n• Best Practice: Use the modern 'import' block for a safer, code-first import workflow.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 198,
    "category": "Terraform (IaC)",
    "question": "What are Terraform Workspaces and when should you use them?",
    "answer": "• Workspaces allow you to manage multiple distinct state files from a single configuration directory. This is useful for deploying parallel copies of the same infrastructure.\n• Commands: 'terraform workspace new dev', 'terraform workspace select dev'.\n• Best Practice: Use workspaces for temporary, identical environments (e.g., testing branch deployments). For long-lived environments like Dev, QA, and Prod, use separate directories/folders with distinct backend configurations instead, as workspaces share the same code version and can lead to accidental deployments.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 199,
    "category": "Terraform (IaC)",
    "question": "What is Policy as Code in IaC, and what tools are used for it?",
    "answer": "• Policy as Code (PaC) involves writing rules to enforce security, compliance, and cost-control standards on your infrastructure code before it is provisioned.\n• Common Tools:\n  1. tfsec / Trivy: Scans Terraform code for security misconfigurations (e.g., open SSH ports, unencrypted disks).\n  2. Open Policy Agent (OPA) / Rego: A general-purpose policy engine to write custom compliance rules.\n  3. Sentinel: HashiCorp's proprietary policy-as-code framework.\n• Best Practice: Integrate PaC tools directly into the Pull Request validation stage of your CI/CD pipelines to block non-compliant changes before they reach the plan/apply stage.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 200,
    "category": "Docker & Kubernetes",
    "question": "Explain the difference between Liveness, Readiness, and Startup Probes in Kubernetes.",
    "answer": "• Liveness Probe: Checks if the container is alive. If it fails, Kubernetes kills the container and restarts it according to the restartPolicy.\n• Readiness Probe: Checks if the container is ready to accept network traffic. If it fails, the Pod is removed from the Service's endpoint list, so no traffic is sent to it.\n• Startup Probe: Checks if the application inside the container has started up. Disables liveness and readiness checks until it succeeds, preventing slow-starting apps from being killed prematurely.\n• Best Practice: Always define readiness probes to prevent traffic from hitting uninitialized pods, and liveness probes to recover from deadlocks.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 201,
    "category": "Docker & Kubernetes",
    "question": "How does the Horizontal Pod Autoscaler (HPA) work in Kubernetes?",
    "answer": "• HPA automatically scales the number of Pod replicas in a deployment or statefulset based on observed CPU utilization, memory usage, or custom metrics.\n• Workflow:\n  1. The HPA controller queries the Metrics Server at a regular interval (default is 15 seconds).\n  2. It calculates the required number of replicas using the formula: Replicas = ceil[Current Replicas * (Current Metric Value / Target Metric Value)].\n  3. It updates the replica count in the Deployment/ReplicaSet, causing Kubernetes to launch or terminate Pods.\n• Requirement: You must define CPU/Memory 'resources.requests' in your Pod spec for HPA to calculate utilization percentages.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 202,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between ConfigMaps and Secrets in Kubernetes?",
    "answer": "• ConfigMaps: Used to store non-confidential configuration data in key-value pairs (e.g., application properties, environment names).\n• Secrets: Used to store sensitive data like passwords, API tokens, and SSH keys. Secrets are stored in base64-encoded format.\n• Best Practice: Do not rely solely on Kubernetes Secrets for security, as base64 encoding is not encryption. Integrate with external KMS (Key Management Service) or Azure Key Vault using Secrets Store CSI Driver so secrets are fetched dynamically and never stored in plain text on disk.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 203,
    "category": "Docker & Kubernetes",
    "question": "Explain Node Affinity, Pod Affinity, and Pod Anti-Affinity.",
    "answer": "• Node Affinity: Directs Pods to be scheduled on specific Nodes based on labels (e.g., schedule this Pod only on nodes with SSDs).\n• Pod Affinity: Schedules Pods close to other Pods (e.g., schedule the web client Pod on the same node/zone as the cache Pod to reduce latency).\n• Pod Anti-Affinity: Prevents Pods from being scheduled close to each other (e.g., do not schedule two replicas of the same web app on the same node to ensure high availability during node failures).\n• Types: 'requiredDuringSchedulingIgnoredDuringExecution' (hard requirement) and 'preferredDuringSchedulingIgnoredDuringExecution' (soft preference).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 204,
    "category": "Docker & Kubernetes",
    "question": "What are Taints and Tolerations in Kubernetes?",
    "answer": "• Taints: Applied to Nodes. They allow a node to repel a set of pods. Syntax: 'kubectl taint nodes node1 key1=value1:NoSchedule'.\n• Tolerations: Applied to Pods. They allow the scheduler to schedule pods with matching tolerations onto tainted nodes.\n• Difference from Affinity: Node Affinity attracts pods to nodes, while Taints allow nodes to repel pods unless the pod explicitly tolerates the taint.\n• Use Case: Dedicating specific nodes for GPU workloads, or marking control plane nodes so application pods aren't scheduled on them.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 205,
    "category": "Docker & Kubernetes",
    "question": "What is Helm in Kubernetes and why do we use it?",
    "answer": "• Helm is the package manager for Kubernetes. It allows you to define, install, upgrade, and share complex Kubernetes applications.\n• Key Components:\n  1. Chart: A bundle of YAML templates that describe a set of Kubernetes resources.\n  2. Values.yaml: A file containing configuration variables to customize the templates for different environments (Dev, QA, Prod).\n  3. Release: A running instance of a chart in a Kubernetes cluster.\n• Benefits: Simplifies deployment, supports versioning and easy rollbacks ('helm rollback'), and avoids writing duplicate YAML files.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 206,
    "category": "Docker & Kubernetes",
    "question": "What is the Sidecar Pattern in Kubernetes?",
    "answer": "• The Sidecar Pattern involves running an extra helper container inside the same Pod alongside the main application container.\n• Features: Since containers in the same Pod share the same network namespace, storage volumes, and loopback interface (localhost), they can communicate efficiently.\n• Common Use Cases:\n  1. Log Shipping: A sidecar container (like Fluentd) reads application logs from a shared volume and ships them to Elasticsearch.\n  2. Service Mesh: A proxy sidecar (like Envoy in Istio) intercepts and manages incoming/outgoing network traffic for security and telemetry.\n  3. Secret Syncing: A sidecar that pulls secrets from Vault and writes them to a local volume.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 207,
    "category": "Docker & Kubernetes",
    "question": "How do you troubleshoot a Pod that is stuck in 'CrashLoopBackOff' status?",
    "answer": "• 'CrashLoopBackOff' means the pod starts, crashes, and Kubernetes tries to restart it repeatedly with an increasing delay.\n• Troubleshooting Steps:\n  1. Check Logs: Run 'kubectl logs <pod-name>' (add '--previous' to see logs from the crashed instance). This is the most common way to find application errors (e.g., database connection failed, missing env variables).\n  2. Describe Pod: Run 'kubectl describe pod <pod-name>' to check events, exit codes, and resource limits.\n  3. Check Exit Code: Exit code 137 means Out of Memory (OOMKilled), exit code 1 means application error.\n  4. Validate Configurations: Check ConfigMaps, Secrets, and database availability.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 208,
    "category": "Docker & Kubernetes",
    "question": "How do you troubleshoot a Pod that is stuck in 'Pending' status?",
    "answer": "• 'Pending' means the Pod could not be scheduled onto any worker node in the cluster.\n• Troubleshooting Steps:\n  1. Describe Pod: Run 'kubectl describe pod <pod-name>' and look at the 'Events' section at the bottom.\n  2. Common Causes:\n     • Insufficient Resources: No node has enough CPU or Memory requests free to fit the Pod.\n     • Taints and Tolerations: The Pod does not tolerate the taints on available nodes.\n     • Node Selector / Affinity: The Pod's node selector labels do not match any available nodes.\n     • Unattached Volumes: The Pod is waiting for a PersistentVolume (PV) to be created or bound.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 209,
    "category": "Docker & Kubernetes",
    "question": "What is a NetworkPolicy in Kubernetes?",
    "answer": "• By default, all pods in a Kubernetes cluster can communicate with each other freely. A NetworkPolicy allows you to restrict network traffic to and from Pods.\n• Features: Works like a firewall at the Pod level using labels and selectors.\n• Configuration: You can define Ingress (incoming) and Egress (outgoing) rules based on namespaces, pods, and IP blocks.\n• Requirement: You must use a network plugin (CNI) that supports NetworkPolicies, such as Calico, Cilium, or Azure CNI with network policies enabled. Default flannel does not enforce them.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 210,
    "category": "Docker & Kubernetes",
    "question": "What are Multi-stage Docker builds and why should you use them?",
    "answer": "• Multi-stage builds allow you to use multiple 'FROM' statements in a single Dockerfile. You can compile your code in an initial stage and copy only the compiled artifact into a final, lightweight stage.\n• Benefits: Reduces image size drastically (e.g., removing JDK, build tools, and source code, leaving only the JRE and the jar file). This improves security (fewer packages means smaller attack surface) and deployment speed.\n• Example:\n  FROM maven:3.8-openjdk-17 AS builder\n  RUN mvn package\n  \n  FROM openjdk:17-slim\n  COPY --from=builder /app/target/app.jar /app.jar\n  CMD [\"java\", \"-jar\", \"/app.jar\"]",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 211,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between COPY and ADD instructions in a Dockerfile?",
    "answer": "• COPY: Simply copies files and directories from the local host build context into the container. It is preferred for its simplicity and predictability.\n• ADD: Does everything COPY does, but also has two extra features:\n  1. It can extract local tar archives automatically into the container.\n  2. It can download files from remote URLs.\n• Best Practice: Use COPY for standard file transfers. Only use ADD when you explicitly need to auto-extract local tar files.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 212,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between Docker Volumes and Bind Mounts?",
    "answer": "• Docker Volumes: Managed entirely by Docker and stored in a directory managed by Docker on the host machine (/var/lib/docker/volumes/). They are isolated from the host OS and are the preferred way to persist container data.\n• Bind Mounts: Map any arbitrary file or directory on the host machine directly into the container. They rely on the host's directory structure and permissions.\n• Best Practice: Use Volumes for database persistence and production data. Use Bind Mounts for local development (e.g., mounting source code so changes reflect in the container instantly without rebuilding).",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 213,
    "category": "Docker & Kubernetes",
    "question": "What are Distroless and Alpine images, and why are they used?",
    "answer": "• Alpine: A lightweight Linux distribution based on musl libc and busybox, resulting in very small base images (~5MB).\n• Distroless: Images created by Google that contain only your application and its runtime dependencies. They do not contain package managers, shells (bash/sh), or standard Linux utilities.\n• Why use them: Both reduce the image size and, more importantly, minimize the security vulnerability footprint. Distroless is highly secure because an attacker who exploits the application cannot spawn a shell or install malicious tools.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 214,
    "category": "Docker & Kubernetes",
    "question": "How do you minimize the size of a Docker image?",
    "answer": "• Best Practices:\n  1. Use Multi-stage Builds: Compile in one stage, copy only artifacts to the runner stage.\n  2. Use Small Base Images: Use alpine, slim, or distroless base images instead of full OS images (like ubuntu or centos).\n  3. Minimize Layers: Combine multiple RUN commands using '&&' and line continuations ('\\') to reduce the number of image layers.\n  4. Clean Up: Delete package manager caches and temporary files in the same RUN layer they were created (e.g., 'apt-get clean && rm -rf /var/lib/apt/lists/*').\n  5. Use .dockerignore: Exclude node_modules, logs, and local build artifacts from the build context.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 215,
    "category": "Azure & Azure DevOps",
    "question": "Explain Blue-Green Deployment and Canary Deployment strategies.",
    "answer": "• Blue-Green: You maintain two identical production environments. 'Blue' is active (serving traffic), and 'Green' is idle. You deploy the new version to Green, run tests, and then switch the router/load balancer to point to Green. If issues arise, you switch back to Blue instantly.\n• Canary: You deploy the new version to a small subset of servers or pods (e.g., 5% of traffic). You monitor performance, error rates, and user feedback. If stable, you gradually roll out the new version to the remaining 95%. If it fails, only a tiny fraction of users are affected.\n• Comparison: Blue-Green requires double the resources; Canary is cost-effective and safer but requires sophisticated routing (e.g., Service Mesh).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 216,
    "category": "Azure & Azure DevOps",
    "question": "How do you implement caching in CI/CD pipelines, and why is it important?",
    "answer": "• Pipeline Caching: Saves dependencies (like npm node_modules, Maven .m2, NuGet packages) after the first build and restores them in subsequent runs.\n• Why: It significantly reduces build times by avoiding downloading gigabytes of dependencies over the internet for every single commit.\n• Azure Pipelines Syntax: Use the 'Cache@2' task, defining a key based on the package lock file (e.g., package-lock.json) so the cache is invalidated and rebuilt only when dependencies change.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 217,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Microsoft-hosted agents and Self-hosted agents in Azure DevOps?",
    "answer": "• Microsoft-hosted Agents: Managed entirely by Microsoft. A fresh virtual machine is created for every job and discarded afterward. Zero maintenance, but limited in CPU/Memory, cannot access private networks, and has execution time limits.\n• Self-hosted Agents: Installed and managed on your own infrastructure (VMs, physical servers, Kubernetes). They persist between builds, allowing faster caching. They can access resources inside your private VNet and have no execution time limits, but you are responsible for maintenance and updates.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 218,
    "category": "Azure & Azure DevOps",
    "question": "What are Multi-stage YAML pipelines and why are they preferred over Classic release pipelines?",
    "answer": "• Multi-stage YAML pipelines allow you to define both your Build (CI) and Release (CD) stages in a single YAML file (pipeline-as-code).\n• Why Preferred:\n  1. Version Control: The pipeline definition is stored in Git alongside the application code, allowing you to track changes, review via PRs, and roll back easily.\n  2. Reusability: You can use templates to share stages, jobs, and tasks across different pipelines.\n  3. Multi-stage: Clearly defines dependencies between stages (e.g., Dev -> QA -> Prod) with approvals and checks configured on environments.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 219,
    "category": "Azure & Azure DevOps",
    "question": "How do you handle secrets leakage prevention in CI/CD?",
    "answer": "• Best Practices:\n  1. Mask Secrets: Ensure all secret variables in Azure DevOps are marked as 'secret'. The pipeline will automatically mask their values (showing '***') in the console logs.\n  2. GitGuardian / Trufflehog: Integrate secret-scanning tools in the pre-commit stage or as a pipeline task to scan the codebase for exposed passwords, keys, or certificates.\n  3. Short-lived Credentials: Use Azure Service Connections with Workload Identity Federation (OIDC) instead of storing long-lived service principal client secrets.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 220,
    "category": "Linux & Git",
    "question": "How do you ensure a Bash script is robust and handles errors safely?",
    "answer": "• Add 'set' options at the beginning of the script:\n  1. 'set -e': Instructs the script to exit immediately if any command exits with a non-zero status.\n  2. 'set -u': Exits the script if it tries to use an uninitialized/unbound variable.\n  3. 'set -o pipefail': Ensures that if any command in a pipeline fails (e.g., cmd1 | cmd2), the exit status of the entire pipeline is that of the failed command, not the last one.\n• Best Practice: Use double quotes around variables to prevent word splitting, and implement a cleanup trap ('trap cleanup EXIT') to clean up temporary files.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 221,
    "category": "Linux & Git",
    "question": "Which Linux commands do you use to troubleshoot network connectivity issues?",
    "answer": "• ping: Check basic network reachability and latency to a host.\n• curl / wget: Test HTTP/HTTPS connections and fetch headers.\n• telnet / nc (netcat): Check if a specific port is open on a remote server (e.g., 'nc -zv 10.0.0.4 3306').\n• nslookup / dig: Query DNS records to troubleshoot hostname resolution.\n• netstat / ss: View active network connections and listening ports on the local machine (e.g., 'ss -tulpn').\n• traceroute / tracepath: Track the route packets take to reach a host, identifying where they are getting dropped.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 222,
    "category": "Linux & Git",
    "question": "What is systemd and how do you manage services with it?",
    "answer": "• systemd is the system and service manager for Linux operating systems, acting as the parent process (PID 1).\n• Service Management Commands:\n  • 'sudo systemctl start <service>' - Start a service.\n  • 'sudo systemctl stop <service>' - Stop a service.\n  • 'sudo systemctl restart <service>' - Restart a service.\n  • 'sudo systemctl enable <service>' - Configure the service to start automatically on boot.\n  • 'sudo systemctl status <service>' - View the current status and recent logs.\n• Logs: Use 'journalctl -u <service> -n 100 -f' to view and follow the service logs.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 223,
    "category": "Linux & Git",
    "question": "What is logrotate and why is it important in production Linux servers?",
    "answer": "• logrotate is a system utility that automatically rotates, compresses, and removes log files to prevent them from consuming all available disk space.\n• Features: It can be configured to run daily, weekly, or monthly, compress old logs into .gz files, and keep a specified number of old logs before deleting them.\n• Why: Without logrotate, application logs (like Nginx, Tomcat) would grow infinitely, eventually filling up the disk and causing services to crash.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 224,
    "category": "Linux & Git",
    "question": "Explain the syntax of a Linux cron job.",
    "answer": "• A cron job is a scheduled task that runs automatically at specified intervals.\n• Syntax: * * * * * /path/to/command\n  • Minute (0 - 59)\n  • Hour (0 - 23)\n  • Day of Month (1 - 31)\n  • Month (1 - 12)\n  • Day of Week (0 - 6, where 0 is Sunday)\n• Examples:\n  • '0 0 * * *' - Runs every day at midnight.\n  • '*/5 * * * *' - Runs every 5 minutes.\n  • '0 8 * * 1-5' - Runs at 8:00 AM, Monday through Friday.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 225,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Azure Service Endpoints and Private Endpoints?",
    "answer": "• Service Endpoints: Keep traffic to Azure services (like SQL, Storage) within the Microsoft backbone network. The service still uses its public IP address, but firewalls restrict access only to traffic originating from your specific subnet.\n• Private Endpoints: Allocate a private IP address from your VNet to the Azure service using a network interface (NIC). The service is accessed via this private IP, making it completely private and removing it from the public internet.\n• Best Practice: Use Private Endpoints for enterprise-grade security, as they completely isolate the service and protect against data exfiltration.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 226,
    "category": "Azure & Azure DevOps",
    "question": "Explain VNet Peering in Azure and its types.",
    "answer": "• VNet Peering connects two Azure Virtual Networks seamlessly, allowing resources in either VNet to communicate with each other directly using private IP addresses with low latency.\n• Types:\n  1. Regional VNet Peering: Connects VNets within the same Azure region.\n  2. Global VNet Peering: Connects VNets across different Azure regions.\n• Features: Peered traffic remains on Microsoft's private backbone network, not the public internet. Bandwidth is not restricted, but you are charged for ingress and egress data transfer.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 227,
    "category": "Azure & Azure DevOps",
    "question": "Explain the Hub-and-Spoke network topology in Azure.",
    "answer": "• Hub-and-Spoke is a network design where a central 'Hub' VNet acts as the single point of connectivity to on-premises networks and hosts shared services (like Azure Firewall, Bastion, VPN Gateway).\n• 'Spoke' VNets peer with the Hub and host individual application workloads (like AKS clusters, VMs).\n• Routing: Traffic between spokes, or between spokes and the internet, is routed through the Hub VNet where it can be inspected and filtered by a firewall.\n• Benefits: Centralized security management, reduced cost by sharing common resources, and prevents spokes from communicating directly with each other.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 228,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Azure Application Gateway and Azure Load Balancer?",
    "answer": "• Azure Load Balancer: Operates at Layer 4 (Transport layer). It routes TCP/UDP traffic based on IP address and port. It is extremely fast and suitable for simple VM load balancing.\n• Azure Application Gateway: Operates at Layer 7 (Application layer). It understands HTTP/HTTPS traffic, allowing routing based on URL paths (e.g., /images goes to one pool, /api goes to another). It supports SSL termination, cookie-based session affinity, and includes a Web Application Firewall (WAF).\n• Use Case: Use Application Gateway for web applications and microservices, and Load Balancer for non-HTTP workloads.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 229,
    "category": "Azure & Azure DevOps",
    "question": "How do Azure Monitor, Log Analytics, and Application Insights work together?",
    "answer": "• Azure Monitor: The overarching monitoring service that collects, analyzes, and acts on telemetry data from your Azure and on-premises environments.\n• Log Analytics: A tool within Azure Monitor used to write queries (using Kusto Query Language - KQL) and analyze log data collected from resources.\n• Application Insights: A sub-service of Azure Monitor designed for Application Performance Management (APM). It monitors live web applications, tracking response times, exception rates, dependencies, and user sessions.\n• Integration: Application Insights and Azure resources send their logs to a Log Analytics Workspace, where Azure Monitor uses them to trigger alerts and build dashboards.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 230,
    "category": "DevOps General",
    "question": "Explain SLA, SLO, and SLI in Site Reliability Engineering (SRE).",
    "answer": "• SLI (Service Level Indicator): A quantitative measure of a service's performance in real-time (e.g., HTTP request latency, error rate, uptime percentage).\n• SLO (Service Level Objective): A target reliability level for the service, agreed upon by the team (e.g., 99.9% of HTTP requests must have a latency under 200ms over a 30-day window).\n• SLA (Service Level Agreement): A legal agreement with users specifying the service reliability, including financial penalties or refunds if the SLO is not met (e.g., if uptime falls below 99.5%, users get a 10% refund).\n• Relationship: SLI measures -> SLO targets -> SLA promises.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 231,
    "category": "DevOps General",
    "question": "What is an Error Budget in SRE and how is it used?",
    "answer": "• Error Budget: The maximum allowable unreliability of a service, calculated as 100% - SLO (e.g., if your uptime SLO is 99.9%, your error budget is 0.1% of downtime).\n• Usage: It acts as a balance between feature velocity and service reliability:\n  • If the error budget is full, the development team can push new features rapidly.\n  • If the error budget is exhausted (spent due to outages or bugs), deployments are frozen, and the team must focus solely on stability, bug fixes, and reliability improvements.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 232,
    "category": "DevOps General",
    "question": "What is the difference between Monitoring and Observability?",
    "answer": "• Monitoring: Tells you *when* something is wrong by collecting predefined metrics (e.g., CPU is at 95%, database is down). It answers the question: 'Is the system working?'\n• Observability: Allows you to understand *why* something is wrong by analyzing the internal state of the system using three pillars: Metrics, Logs, and Traces (MelT). It answers the question: 'Why is this specific request failing?'\n• Summary: Monitoring is reactive and focuses on known failure modes. Observability is proactive and helps debug complex, distributed systems with unknown failure modes.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 233,
    "category": "DevOps General",
    "question": "What is a Blameless Post-Mortem?",
    "answer": "• A Blameless Post-Mortem is a meeting and document created after a production incident to analyze what happened, why it happened, and how to prevent it in the future, without pointing fingers or blaming individuals.\n• Key Mindset: Assume that everyone acted with good intentions based on the information they had. Focus on system failures (e.g., lack of guardrails, poor testing, missing alerts) rather than human error.\n• Outcome: Actionable tasks to improve the system, sharing the learnings with the wider organization.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 234,
    "category": "DevOps General",
    "question": "What is Chaos Engineering?",
    "answer": "• Chaos Engineering is the practice of deliberately introducing failures into a production or staging system to test its resilience and verify that it can handle unexpected outages gracefully.\n• Examples: Randomly killing Kubernetes Pods (using Chaos Mesh or Chaos Monkey), injecting network latency, blocking access to databases.\n• Goal: To identify weaknesses (e.g., failing failover mechanisms, missing alerts, cascading failures) before they cause real customer-facing outages.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 235,
    "category": "DevOps General",
    "question": "What is GitOps and how does it work?",
    "answer": "• GitOps is an operational framework where Git is used as the single source of truth for declarative infrastructure and application deployments.\n• Workflow:\n  1. The desired state of the system is defined in Git repositories (YAML manifests, Helm charts).\n  2. An operator/agent (like ArgoCD or Flux) runs inside the Kubernetes cluster.\n  3. The operator continuously compares the desired state in Git with the actual state in the cluster.\n  4. If a drift is detected, the operator automatically reconciles the cluster to match Git.\n• Benefits: Improved security (pipelines don't need cluster admin access; they just commit to Git), audit trail of all changes, and instant disaster recovery.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 236,
    "category": "DevOps General",
    "question": "What does 'Shift Left' mean in DevSecOps?",
    "answer": "• 'Shift Left' means integrating security testing and compliance validation as early as possible in the software development lifecycle (SDLC), rather than waiting until the deployment or production stage.\n• Implementation:\n  • Code Stage: IDE plugins that highlight insecure code, SAST (Static Application Security Testing) tools.\n  • Commit Stage: Automated secret scanning (checking for committed passwords) and SCA (Software Composition Analysis) to scan third-party dependencies for vulnerabilities.\n  • Build Stage: DAST (Dynamic Application Security Testing) and container image scanning.\n• Benefit: Finding and fixing security bugs early is significantly cheaper, faster, and safer than fixing them in production.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 237,
    "category": "Linux & Git",
    "question": "What is a git squash commit, and why is it useful?",
    "answer": "• Squashing involves combining multiple commits from a feature branch into a single, clean commit before merging it into the main branch.\n• Command: 'git rebase -i' or using the 'Squash and Merge' option in GitHub/Azure DevOps PRs.\n• Benefits: Keeps the commit history of the main branch clean and readable. Instead of showing intermediate commits like 'fixed typo', 'temp commit', 'testing again', it shows a single meaningful commit explaining the entire feature.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 238,
    "category": "DevOps General",
    "question": "What is the difference between SAST and DAST?",
    "answer": "• SAST (Static Application Security Testing): Analyzes the application's source code, byte code, or binaries for security vulnerabilities *without* running the application. It is a 'white-box' testing method.\n• DAST (Dynamic Application Security Testing): Analyzes a running application by simulating external attacks (like SQL injection, XSS) from the outside. It is a 'black-box' testing method.\n• Best Practice: Use both in your pipelines (SAST during the build stage, DAST during the staging/deployment stage) to cover both code-level and runtime vulnerabilities.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 239,
    "category": "DevOps General",
    "question": "What is Software Composition Analysis (SCA) and why is it critical?",
    "answer": "• SCA is the practice of scanning your application's open-source and third-party dependencies (e.g., npm packages, NuGet, Maven libraries) to identify known security vulnerabilities and license compliance issues.\n• Common Tools: Snyk, OWASP Dependency-Check, Black Duck, SonarQube.\n• Why Critical: Modern applications are made up of 80% open-source libraries. If a library you import has a critical vulnerability (like the Log4j vulnerability), your application becomes vulnerable even if your own code is secure.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 240,
    "category": "DevOps General",
    "question": "What is the difference between Immutable Infrastructure and Mutable Infrastructure?",
    "answer": "• Mutable Infrastructure: Servers are modified and updated in-place (e.g., SSHing into a VM to upgrade Nginx, apply patches, or change configs). This leads to 'configuration drift' where servers that should be identical become different over time.\n• Immutable Infrastructure: Servers are never updated in-place. If a configuration change or patch is needed, you build a new server image (AMI, VM image) and deploy new instances, destroying the old ones.\n• Best Practice: Use Immutable Infrastructure (using tools like Packer, Terraform, Docker) to ensure consistency, eliminate configuration drift, and make rollbacks trivial.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 241,
    "category": "Azure & Azure DevOps",
    "question": "What is Workload Identity Federation (OIDC) in Azure DevOps and why should you use it?",
    "answer": "• Workload Identity Federation allows Azure DevOps pipelines to authenticate with Azure securely without storing any long-lived credentials (like Service Principal client secrets) in Azure DevOps.\n• How it works: It uses OpenID Connect (OIDC) to exchange a short-lived federated token issued by Azure DevOps for an Azure AD access token at runtime.\n• Benefit: Eliminates the risk of secret leakage (since there are no secrets stored to leak) and removes the administrative overhead of rotating service principal secrets every year.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 242,
    "category": "DevOps General",
    "question": "Explain the concept of 'GitOps' vs 'ClickOps'.",
    "answer": "• ClickOps: A slang term for managing infrastructure by manually clicking buttons in a cloud provider's web console. It is error-prone, undocumented, and cannot be easily reproduced or rolled back.\n• GitOps / IaC: Managing infrastructure programmatically using code stored in Git. All changes are peer-reviewed via Pull Requests, automatically tested in pipelines, and fully documented by the commit history.\n• Summary: Shift from ClickOps to GitOps to achieve speed, scalability, consistency, and auditable governance.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 243,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between a Pod and a Container in Kubernetes?",
    "answer": "• Container: A single, isolated runtime environment wrapping an application and its dependencies (e.g., a Docker container).\n• Pod: The smallest deployable unit in Kubernetes. A Pod can host one or more containers (tightly coupled) that share the same network namespace, storage volumes, and IP address.\n• Analogy: Think of a container as a single person, and a Pod as a room. A room can hold one person or a group of people who need to work closely together.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 244,
    "category": "Linux & Git",
    "question": "What is 'git stash' and when should you use it?",
    "answer": "• 'git stash' temporarily shelves (saves) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later.\n• Use Cases: You are in the middle of a feature, and a critical production bug comes up. You don't want to make half-baked commits. You run 'git stash', switch to main, fix the bug, switch back, and run 'git stash pop' to resume your work.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 245,
    "category": "Terraform (IaC)",
    "question": "What is a Local Value (local) in Terraform and how does it differ from an Input Variable?",
    "answer": "• Input Variables (var): Act like function arguments. They allow users to customize the configuration by passing values at runtime.\n• Local Values (local): Act like local temporary variables in programming. They are defined internally within the module and cannot be set from outside.\n• Best Practice: Use local values to simplify complex expressions, avoid repeating the same values, or construct dynamic values (e.g., combining environment names and resource types for naming conventions).",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 246,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Resource Manager (ARM) and what are its benefits?",
    "answer": "• ARM is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account.\n• Benefits:\n  1. Declarative Templates: Use ARM templates (JSON) or Bicep to deploy infrastructure.\n  2. Resource Groups: Manage resources as a group rather than individually.\n  3. Access Control: Apply RBAC (Role-Based Access Control) to secure resources.\n  4. Tagging: Organize resources using tags for billing and management.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 247,
    "category": "DevOps General",
    "question": "What is the difference between Continuous Delivery and Continuous Deployment?",
    "answer": "• Continuous Delivery: Code changes are automatically built, tested, and prepared for a release to production. However, the actual trigger to deploy to production requires manual approval (a human clicks a button).\n• Continuous Deployment: Every change that passes all stages of the automated pipeline is deployed directly to production automatically, without any human intervention.\n• Summary: Continuous Delivery has a manual gate before production; Continuous Deployment is fully automated.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 248,
    "category": "DevOps General",
    "question": "What is the difference between Monolithic and Microservices architecture?",
    "answer": "• Monolithic: The entire application is built as a single, unified codebase and deployed as a single unit. It is simple to develop and deploy initially, but hard to scale, slow to build, and a single bug can bring down the whole system.\n• Microservices: The application is split into small, independent services that communicate via APIs (REST, gRPC). Each service has its own database and can be developed, deployed, and scaled independently. However, it increases operational complexity.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 249,
    "category": "Docker & Kubernetes",
    "question": "How do you run a Docker container in the background (detached mode) and how do you view its logs?",
    "answer": "• Run in Background: Use the '-d' flag. Example: 'docker run -d -p 80:80 nginx'. This starts the container and prints its ID, returning control to your terminal.\n• View Logs: Use 'docker logs <container_id_or_name>'. To follow the logs in real-time, add the '-f' flag (e.g., 'docker logs -f my-nginx').",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 250,
    "category": "Linux & Git",
    "question": "Which Linux commands do you use to check IP address and verify internet connectivity?",
    "answer": "• Check IP Address:\n  • 'ip addr show' (or 'ip a') - The modern and preferred command.\n  • 'ifconfig' - The legacy command (may require net-tools package).\n• Verify Internet Connectivity:\n  • 'ping 8.8.8.8' - Tests network reachability to Google's public DNS.\n  • 'curl -I https://www.google.com' - Tests DNS resolution and HTTP connectivity.",
    "difficulty": "Easy",
    "source": "Best DevOps Practices"
  },
  {
    "id": 251,
    "category": "CI/CD Pipelines",
    "question": "What is the difference between a Stage, a Job, and a Task in a CI/CD pipeline?",
    "answer": "• Stage: A major division in a pipeline that represents a logical phase of the workflow (e.g., Build, Test, Deploy to Dev, Deploy to Prod). Stages usually run sequentially.\n• Job: A collection of steps/tasks run by a single agent. Jobs within a stage can run in parallel if multiple agents are available.\n• Task/Step: The smallest building block of a pipeline. It is a linear sequence of operations executed within a job (e.g., running a bash script, copying files, compiling code).\n• Summary: A Pipeline has multiple Stages -> A Stage has multiple Jobs -> A Job has multiple Tasks.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 252,
    "category": "CI/CD Pipelines",
    "question": "What is a pipeline trigger, and what are the most common types of triggers?",
    "answer": "• A trigger is an event that automatically starts the execution of a CI/CD pipeline.\n• Common Types:\n  1. CI Trigger (Push): Triggers the pipeline whenever code is pushed to a specific branch (e.g., main or release/*).\n  2. PR Trigger (Pull Request): Triggers a validation pipeline when a PR is created or updated, ensuring code compiles and passes tests before merging.\n  3. Scheduled Trigger (Cron): Triggers the pipeline at specific times (e.g., nightly builds at 2:00 AM).\n  4. Pipeline Trigger (Chained): Triggers a pipeline upon the successful completion of another pipeline (e.g., deploying after a successful build).",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 253,
    "category": "CI/CD Pipelines",
    "question": "How do you implement automated rollbacks in a CD pipeline if a deployment fails?",
    "answer": "• Automated rollback restores the last known stable version of the application immediately when a deployment failure is detected.\n• Implementation Methods:\n  1. Kubernetes/Helm: Kubernetes automatically rolls back a rolling update if readiness probes fail. Helm supports 'helm rollback <release> <revision>'.\n  2. Pipeline Logic: Use a post-deployment script or task that triggers on failure (using 'condition: failed()' in YAML) to run a rollback script.\n  3. Deployment Slot Swap: In Azure App Services, if the swap to production fails health checks, it automatically swaps back to the staging slot.\n• Best Practice: Ensure database migrations are backward-compatible so that rolling back application code doesn't break the database.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 254,
    "category": "CI/CD Pipelines",
    "question": "What is a Deployment Gate (or Quality Gate) in a release pipeline?",
    "answer": "• A Deployment Gate is an automated check that evaluates health and compliance criteria before a deployment starts or completes.\n• How it works: The pipeline pauses and queries external services. If the criteria are met, the deployment proceeds. If not, it fails or waits.\n• Examples:\n  1. Azure Monitor Alerts: Ensure no active critical alerts exist on the infrastructure.\n  2. SonarQube Quality Gate: Block deployment if the code coverage falls below 80% or new security vulnerabilities are found.\n  3. Service Desk (Jira/ServiceNow): Ensure the change management ticket is approved before deploying to production.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 255,
    "category": "CI/CD Pipelines",
    "question": "How do you secure credentials, API keys, and certificates inside a CI/CD pipeline?",
    "answer": "• Best Practices:\n  1. Secret Variables: Store secrets in encrypted variable groups (Azure DevOps) or Secrets (GitHub) and mark them as hidden. The runner will mask them in logs.\n  2. Key Vault Integration: Fetch secrets dynamically at runtime from Azure Key Vault or HashiCorp Vault using a pipeline task.\n  3. Workload Identity (OIDC): Use passwordless authentication (OpenID Connect) so the pipeline uses temporary tokens rather than storing long-lived service principal client secrets.\n  4. Least Privilege: Restrict the pipeline's service connection permissions to only the resources it needs to manage.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 256,
    "category": "CI/CD Pipelines",
    "question": "What is the difference between a Declarative pipeline and a Scripted pipeline?",
    "answer": "• Declarative Pipeline (Preferred): Uses a structured, pre-defined schema (typically YAML in GitHub/Azure DevOps, or 'pipeline {}' block in Jenkins). It is easier to read, has built-in syntax checks, and enforces best practices.\n• Scripted Pipeline: Uses a programming language (like Groovy in Jenkins). It offers maximum flexibility and allows complex logic, loops, and error handling, but is harder to maintain and prone to errors.\n• Best Practice: Use Declarative (YAML) pipelines for 95% of use cases. Only use scripted blocks (like Groovy or inline Bash/Powershell) when complex dynamic logic is absolutely necessary.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 257,
    "category": "CI/CD Pipelines",
    "question": "How do you optimize pipeline execution speed using parallel execution?",
    "answer": "• Parallel execution runs independent jobs or tasks simultaneously rather than sequentially, reducing the total pipeline duration.\n• Implementation:\n  1. Parallel Jobs: Define multiple jobs in a stage that do not depend on each other (e.g., running unit tests, linting, and security scans in parallel).\n  2. Matrix Builds: Run the same job with different configurations (e.g., testing on Node.js 16, 18, and 20 simultaneously).\n  3. Multi-agent: Ensure you have multiple self-hosted agents or concurrent Microsoft-hosted jobs available in your organization to run parallel tasks.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 258,
    "category": "CI/CD Pipelines",
    "question": "What is Semantic Versioning (SemVer) and how do you automate it in pipelines?",
    "answer": "• Semantic Versioning uses a three-part version number: MAJOR.MINOR.PATCH (e.g., 1.4.2).\n  • MAJOR: Incompatible API changes.\n  • MINOR: Add functionality in a backwards-compatible manner.\n  • PATCH: Backwards-compatible bug fixes.\n• Automation: Use tools like 'Semantic Release' or 'GitVersion' in your build pipeline. These tools analyze Git commit messages (following Conventional Commits standard like 'feat:', 'fix:') to automatically calculate the next version, generate release notes, and tag the Git repository.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 259,
    "category": "CI/CD Pipelines",
    "question": "How do you handle database schema migrations in a Continuous Deployment pipeline?",
    "answer": "• Database migrations must be automated and run before the new application code is deployed.\n• Best Practices:\n  1. Use Migration Tools: Use tools like Liquibase, Flyway, or Entity Framework Migrations.\n  2. Run as a Pipeline Task: Run the migration task in the CD pipeline right before the deployment stage.\n  3. Expand and Contract Pattern: Design database changes to be backwards-compatible (e.g., if renaming a column, first add the new column, copy data, deploy code that writes to both, then remove the old column in a later release). This ensures the app doesn't crash during rolling updates or rollbacks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 260,
    "category": "CI/CD Pipelines",
    "question": "What is a 'Matrix Build' in CI/CD and when would you use it?",
    "answer": "• A Matrix Build allows you to run a single job multiple times in parallel with different variable configurations.\n• Example: Testing a Python library across multiple Python versions (3.8, 3.9, 3.10) and operating systems (Linux, Windows, macOS).\n• YAML Syntax (GitHub Actions / Azure Pipelines):\n  strategy:\n    matrix:\n      python-version: [3.8, 3.9, 3.10]\n      os: [ubuntu-latest, windows-latest]\n• Use Case: Highly useful for open-source libraries, cross-platform applications, and compatibility testing.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 261,
    "category": "CI/CD Pipelines",
    "question": "What is the purpose of a Pull Request (PR) validation pipeline?",
    "answer": "• A PR validation pipeline is triggered automatically when a developer opens or updates a Pull Request.\n• Purpose: It compiles the code, runs unit tests, executes linter checks, and performs security scans on the feature branch *before* it is merged into the main branch.\n• Branch Policies: In GitHub or Azure DevOps, you can configure branch protection rules that prevent a PR from being merged unless this validation pipeline completes successfully. This keeps the main branch stable and clean.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 262,
    "category": "CI/CD Pipelines",
    "question": "What are SAST, DAST, and Dependency Scanning, and where do they fit in a CI/CD pipeline?",
    "answer": "• SAST (Static Application Security Testing): Scans source code for vulnerabilities. Run in the **Build (CI) stage** (e.g., SonarQube).\n• Dependency Scanning (SCA): Scans third-party libraries for known vulnerabilities. Run in the **Build (CI) stage** (e.g., Snyk, OWASP Dependency Check).\n• DAST (Dynamic Application Security Testing): Scans the running application by simulating attacks. Run in the **Staging/QA stage** after deployment (e.g., OWASP ZAP).\n• Best Practice: Break the build if SAST or SCA finds high-severity vulnerabilities to enforce DevSecOps.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 263,
    "category": "CI/CD Pipelines",
    "question": "What is a containerized runner/agent and what are its advantages?",
    "answer": "• A containerized runner is a CI/CD agent that runs inside a Docker container (e.g., running Azure DevOps agent as a pod in a Kubernetes cluster using KEDA for autoscaling).\n• Advantages:\n  1. Isolation: Each build job runs in a clean, isolated container environment.\n  2. Dynamic Scaling: Scale the number of agents up or down instantly based on the number of queued jobs in the pipeline.\n  3. Cost-Effective: Only consumes infrastructure resources when jobs are actively running.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 264,
    "category": "CI/CD Pipelines",
    "question": "What is a Service Connection in Azure DevOps pipelines?",
    "answer": "• A Service Connection is a secure configuration that allows Azure Pipelines to connect to external services (e.g., Azure Subscription, Kubernetes Cluster, Docker Registry, GitHub, Jira) without exposing credentials in the pipeline code.\n• How it works: It stores the authentication details (Service Principal, OAuth token, or Kubernetes kubeconfig) securely in Azure DevOps. Developers simply reference the service connection name in their YAML code.\n• Best Practice: Restrict service connection access to specific pipelines and branches using security permissions.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 265,
    "category": "CI/CD Pipelines",
    "question": "How do you implement manual approvals and notifications in a CD pipeline?",
    "answer": "• Manual approvals ensure that deployments to critical environments (like Production) do not happen without sign-off from stakeholders.\n• Implementation:\n  1. Environments: In Azure DevOps or GitHub, define an environment (e.g., 'Production') and add 'Approvals and Checks'.\n  2. Approval Gate: When the pipeline reaches the deployment stage targeting that environment, it pauses and sends an email/notification to the designated approvers.\n  3. Notifications: Integrate webhooks to send automated messages to Slack or Microsoft Teams when a deployment starts, succeeds, or fails.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 266,
    "category": "CI/CD Pipelines",
    "question": "What is Pipeline-as-Code and what are its main benefits?",
    "answer": "• Pipeline-as-Code is the practice of defining your CI/CD pipelines using code (typically YAML, JSON, or Groovy) and storing the file in your Git repository alongside your application code.\n• Benefits:\n  1. Version Control: Track changes to the pipeline over time. You can see who modified a step, when, and why.\n  2. Code Review: Pipeline changes are reviewed via Pull Requests before being merged.\n  3. Consistency: Standardize pipelines across multiple projects using reusable templates.\n  4. Disaster Recovery: If the CI/CD server crashes, you can recreate all pipelines instantly from Git.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 267,
    "category": "CI/CD Pipelines",
    "question": "What is the difference between a Monorepo pipeline and a Multi-repo pipeline?",
    "answer": "• Monorepo Pipeline: A single Git repository contains multiple projects/microservices. The pipeline must use path filters ('paths' in YAML) to trigger only the jobs related to the specific microservice that was modified, avoiding rebuilding the entire repo.\n• Multi-repo Pipeline: Each microservice has its own Git repository and its own independent pipeline. It is simpler to manage but makes orchestrating cross-project deployments and managing shared dependencies more challenging.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 268,
    "category": "CI/CD Pipelines",
    "question": "How do you handle environment-specific configurations in a CD pipeline?",
    "answer": "• Keep your application build artifact environment-agnostic (build once, deploy many).\n• Best Practices:\n  1. Variable Groups / Environments: Use Azure DevOps Variable Groups or GitHub Environments to store variables (e.g., Database URLs, API endpoints) mapped to Dev, QA, and Prod.\n  2. Key Vault: Pull environment-specific secrets dynamically from environment-specific Key Vaults at deployment time.\n  3. Tokenization: Inject variables into configuration files (like appsettings.json or Kubernetes manifests) during the deployment stage using token replacement tasks.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 269,
    "category": "CI/CD Pipelines",
    "question": "What is a 'Dirty' build and how do you ensure clean builds in CI?",
    "answer": "• A 'Dirty' build occurs when files or artifacts left over from a previous build on the same agent affect the current build, leading to inconsistent results.\n• How to ensure Clean Builds:\n  1. Clean Workspace: Configure the pipeline to clean the workspace directory before running (e.g., 'clean: all' in Azure Pipelines, or running 'git clean -fdx').\n  2. Ephemeral Agents: Use Microsoft-hosted agents or containerized runners where a fresh, clean VM/container is created for every job and destroyed immediately afterward.",
    "difficulty": "Easy",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 270,
    "category": "CI/CD Pipelines",
    "question": "What is GitOps and how does it differ from traditional push-based CI/CD?",
    "answer": "• Push-based CI/CD (Traditional): The pipeline compiles code and then actively 'pushes' the deployment to the target environment (e.g., running 'kubectl apply' or SSHing into a VM). The pipeline needs admin credentials to the environment.\n• Pull-based GitOps: The pipeline builds the container image and updates a Git repo containing Kubernetes manifests. An operator (like ArgoCD) running *inside* the cluster detects the change in Git and 'pulls' the deployment to match the desired state.\n• Benefit: Higher security (no external credentials needed) and automatic drift correction.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  }
];

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
      "kubelet",
      "etcd"
    ],
    "correctAnswer": [0, 1, 3],
    "multipleSelect": true,
    "explanation": "The Control Plane consists of kube-apiserver, kube-scheduler, kube-controller-manager, and etcd. kubelet runs on the worker nodes, not the control plane."
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
      "Azure Container Instances"
    ],
    "correctAnswer": [0, 1, 2],
    "multipleSelect": true,
    "explanation": "Azure DevOps includes Azure Repos (Git), Azure Pipelines (CI/CD), Azure Boards (Agile tracking), Azure Artifacts, and Azure Test Plans. Azure Container Instances (ACI) is a standalone Azure cloud compute service."
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
      "Continuous Integration"
    ],
    "correctAnswer": [0, 1, 2],
    "multipleSelect": true,
    "explanation": "Type 1 Hypervisors run directly on hardware. Type 2 Hypervisors run on top of an OS. Containerization is OS-level virtualization. Continuous Integration is a software development practice, not a virtualization type."
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
      "Branch-Locking Strategy"
    ],
    "correctAnswer": [0, 1, 2],
    "multipleSelect": true,
    "explanation": "GitFlow, Trunk-Based Development, and GitHub Flow are industry-standard branching strategies. Branch-locking is a policy, not a branching strategy."
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
      "Manually deploying the application to the production server every month"
    ],
    "correctAnswer": [0, 1, 2],
    "multipleSelect": true,
    "explanation": "CI is the practice of automating the integration of code changes from multiple contributors into a single software project. It involves frequent commits, automated builds, and automated tests. Manual monthly deployments are contrary to CI/CD."
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
      "pwd"
    ],
    "correctAnswer": [0, 1, 2],
    "multipleSelect": true,
    "explanation": "'top' monitors CPU and processes in real-time, 'free' checks memory usage, and 'df' checks disk space. 'pwd' shows the current working directory, not system resources."
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

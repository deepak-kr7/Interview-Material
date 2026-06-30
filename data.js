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
    "answer": "“In Linux, file permissions and ownership can be managed using a variety of commands to control access:\n\n\t1. Changing File Ownership (`chown`):\n\t\t•   To change the owner of a file: `sudo chown username filename`\n\t\t•   To change both the owner and the group: `sudo chown username:groupname filename`\n\t\t•   To apply ownership changes recursively to all files in a directory: `sudo chown -R username:groupname /path/to/directory`\n\n\t2. Changing File Permissions (`chmod`):\n\t\t•   Using Octal (Numeric) Mode:\n\t\t\t•   `chmod 755 filename` -> Read, write, execute (7) for Owner; read and execute (5) for Group and Others.\n\t\t\t•   `chmod 644 filename` -> Read and write (6) for Owner; read-only (4) for Group and Others.\n\t\t•   Using Symbolic Mode:\n\t\t\t•   `chmod u+x filename` -> Adds execute (+x) permission for the owner (u).\n\t\t\t•   `chmod g-w filename` -> Removes write (-w) permission for the group (g).\n\n\t3. Managing Group Membership:\n\t\t•   Add a user to a supplementary group to grant them the group's permissions:\n\t\t    `sudo usermod -aG groupname username`\n\n\t4. Advanced Access Control Lists (ACLs):\n\t\t•   For fine-grained permissions (e.g., granting a specific user access without changing the owner or group):\n\t\t    `setfacl -m u:username:rwx filename`\n\t\t•   To view the ACL permissions: `getfacl filename`\n\nTo verify the permissions, run `ls -l filename`, which displays the owner, group, and the read (r), write (w), and execute (x) flags.”",
    "difficulty": "Hard",
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
    "answer": "“To grant 'Owner' permissions to a user in Microsoft Azure, you use Role-Based Access Control (RBAC) via the Azure Portal, Azure CLI, or Terraform:\n\n\t1. Via the Azure Portal:\n\t\t•   Navigate to the target Scope (e.g., a Subscription, Resource Group, or individual Resource).\n\t\t•   Click on the **Access Control (IAM)** tab in the left-hand menu.\n\t\t•   Click **+ Add** and select **Add role assignment**.\n\t\t•   Under the **Role** tab, search for and select the **Owner** role, then click Next.\n\t\t•   Under the **Members** tab, click **+ Select members**, search for the user's name or email, select them, and click Select.\n\t\t•   Click **Review + assign** to complete the process.\n\n\t2. Via the Azure CLI:\n\t\t•   Run the following command:\n\t\t    `az role assignment create --assignee \"user@example.com\" --role \"Owner\" --scope \"/subscriptions/<subscription-id>/resourceGroups/<rg-name>\"`\n\nWhat the Owner Role Can Do:\n\t•   **Full Control**: Create, read, update, and delete all resources within the assigned scope.\n\t•   **Access Management**: Delegate permissions to other users by creating new RBAC role assignments (this distinguishes the 'Owner' role from the 'Contributor' role, which cannot manage access control).”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 6,
    "category": "CI/CD & Pipelines",
    "question": "Tell steps to build a VM",
    "answer": "•\tAzure Portal \n\t•\tCreate Resource Group \n\t•\tCreate Virtual Machine \n\t•\tSelect Image (Ubuntu/Windows) \n\t•\tChoose VM Size \n\t•\tConfigure Username & Password/SSH Key \n\t•\tConfigure Networking (VNet, NSG) \n\t•\tConfigure Disk \n\t•\tReview \n\t•\tCreate \nAfter deployment:\n\t•\tConnect using SSH/RDP \n\t•\tInstall required software",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 7,
    "category": "DevOps General",
    "question": "Which type of VM have you built?",
    "answer": "“As a DevOps and Cloud Engineer, I have provisioned and configured various types of Virtual Machines in Azure and AWS, tailored to specific workload demands:\n\n\t1. Linux Virtual Machines:\n\t\t•   **Ubuntu Server (20.04 LTS / 22.04 LTS)**: Primarily used for hosting our core application workloads, Jenkins build agents, Docker hosts, and Kubernetes worker nodes.\n\t\t•   **Red Hat Enterprise Linux (RHEL) / CentOS**: Used for hosting enterprise database workloads (PostgreSQL) and legacy applications that require enterprise-grade stability and support.\n\n\t2. Windows Server Virtual Machines:\n\t\t•   **Windows Server 2019 / 2022**: Used for running Active Directory (Azure AD DS), testing application compatibility, and hosting IIS-based web applications.\n\n\t3. Standard VM Sizes Used (Azure Examples):\n\t\t•   **B-Series (Burstable)**: E.g., `Standard_B2s` for low-traffic development and testing environments to minimize costs.\n\t\t•   **D-Series (General Purpose)**: E.g., `Standard_D4s_v5` for production Jenkins controllers, application servers, and Kubernetes nodes requiring a balance of CPU and memory.\n\t\t•   **E-Series (Memory Optimized)**: E.g., `Standard_E8s_v5` for running memory-intensive database engines and caching servers like Redis.”",
    "difficulty": "Hard",
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
    "category": "CI/CD & Pipelines",
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
    "answer": "“Here are 10 essential Linux commands that I use daily for system administration, directory navigation, and troubleshooting:\n\n\t1. `pwd` (Print Working Directory): Displays the absolute path of the directory you are currently in.\n\t   *Example*: `pwd`\n\t2. `ls` (List): Lists the files and directories in the current folder.\n\t   *Example*: `ls -lah` (lists all files, including hidden ones, in long format with human-readable file sizes).\n\t3. `cd` (Change Directory): Navigates between directories in the filesystem.\n\t   *Example*: `cd /var/log`\n\t4. `mkdir` (Make Directory): Creates a new folder.\n\t   *Example*: `mkdir -p /app/config` (the `-p` flag creates parent directories if they don't exist).\n\t5. `rm` (Remove): Deletes files or directories.\n\t   *Example*: `rm -rf /tmp/cache` (recursively and forcefully deletes the directory).\n\t6. `cp` (Copy): Copies files or directories from one location to another.\n\t   *Example*: `cp -r /src /dest`\n\t7. `mv` (Move / Rename): Moves files or renames them.\n\t   *Example*: `mv oldname.txt newname.txt`\n\t8. `cat` (Concatenate): Outputs the contents of a file to the terminal.\n\t   *Example*: `cat /etc/resolv.conf`\n\t9. `chmod` (Change Mode): Modifies file and directory access permissions.\n\t   *Example*: `chmod 755 script.sh`\n\t10. `chown` (Change Owner): Modifies the owner and group of a file or directory.\n\t    *Example*: `chown -R admin:webgroup /var/www`”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 13,
    "category": "CI/CD & Pipelines",
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
    "answer": "“If an error occurs on a Linux server but the hardware is healthy and the service daemon is running, the issue is likely due to OS-level resource exhaustion, configuration drift, or permission blocks. I check the following:\n\n\t1. System and Kernel Logs:\n\t\t•   **System Log**: Run `journalctl -xe` or inspect `/var/log/syslog` (or `/var/log/messages` on RHEL) to check for system-level errors.\n\t\t•   **Kernel Ring Buffer**: Run `dmesg -T` to check for kernel-level alerts, such as the Out-Of-Memory (OOM) killer terminating processes.\n\n\t2. Resource Utilization:\n\t\t•   **Disk Space**: Run `df -h` to verify if any mount point is 100% full, which prevents writing logs or temp files.\n\t\t•   **Inodes**: Run `df -i` to check if the filesystem has run out of inodes (preventing new file creation even if disk space is free).\n\t\t•   **Memory & Swap**: Run `free -m` or `top` / `htop` to check if physical memory is exhausted and the system is swapping heavily.\n\t\t•   **CPU & Load Average**: Run `uptime` and `top` to check the CPU load average and identify high-CPU processes.\n\n\t3. Permissions and File Handles:\n\t\t•   **Permissions**: Verify file/directory ownership and read/write/execute permissions using `ls -la`.\n\t\t•   **Open Files**: Run `ulimit -n` and check `/proc/sys/fs/file-max` to see if the process has reached the maximum open file descriptors limit.\n\n\t4. Network and DNS:\n\t\t•   **DNS Resolution**: Run `nslookup google.com` or `dig` to verify if DNS resolution is working.\n\t\t•   **Network Ports**: Run `netstat -tuln` or `ss -tuln` to verify if the application is listening on the expected ports.”",
    "difficulty": "Hard",
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
    "category": "CI/CD & Pipelines",
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
    "answer": "“While both Ingress Controllers and API Gateways manage incoming traffic (North-South traffic) in a microservices architecture, they serve different purposes and operate at different levels:\n\n\t1. Ingress Controller:\n\t\t•\tWhat it is: A Kubernetes-native resource that manages external access to services within a cluster. It acts as a smart reverse proxy.\n\t\t•\tScope: Operates primarily at the entry point of a Kubernetes cluster.\n\t\t•\tCore Functions:\n\t\t\t•\tLayer 7 HTTP/HTTPS routing based on hostnames (e.g., api.example.com) or paths (e.g., /users).\n\t\t\t•\tSSL/TLS termination.\n\t\t\t•\tBasic path-based load balancing.\n\t\t•\tExamples: NGINX Ingress Controller, Traefik, HAProxy, Azure AGIC.\n\n\t2. API Gateway:\n\t\t•\tWhat it is: A comprehensive API management layer that acts as a single entry point for all clients. It is application-aware and designed to manage APIs as products.\n\t\t•\tScope: Can operate inside or outside Kubernetes, managing traffic across multiple clusters, VMs, or legacy systems.\n\t\t•\tCore Functions:\n\t\t\t•\tAdvanced Security: Authentication (JWT, OAuth2, API Keys) and Authorization.\n\t\t\t•\tTraffic Control: Rate limiting, throttling, request/response transformation.\n\t\t\t•\tAPI Lifecycle Management: Caching, request retries, circuit breaking, telemetry, and API analytics.\n\t\t\t•\tDeveloper Portal: API documentation and usage tracking.\n\t\t•\tExamples: Kong, Apigee, Azure API Management (APIM), AWS API Gateway.\n\nSummary of Differences:\n| Feature | Ingress Controller | API Gateway |\n| :--- | :--- | :--- |\n| Primary Focus | Simple routing and load balancing within Kubernetes. | Advanced API management, security, and traffic control. |\n| Scope | Cluster-bound (runs inside Kubernetes). | Global (can span across Kubernetes, VMs, and cloud services). |\n| Key Capabilities | Path/Host routing, SSL termination. | Rate limiting, JWT validation, caching, transformations. |\n| Target Audience | DevOps / Platform Engineers. | API Developers / Product Owners. |\n\nIn a production enterprise architecture, we often use both together: an external API Gateway (like Azure APIM or Kong) handles authentication, rate limiting, and global routing, and then forwards the traffic to an Ingress Controller (like NGINX) inside the AKS cluster to distribute traffic to specific pods.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 31,
    "category": "Docker & Kubernetes",
    "question": "Difference between PV and PVC in Kubernetes",
    "answer": "“In Kubernetes, Persistent Volumes (PV) and Persistent Volume Claims (PVC) decouple storage provisioning from storage consumption:\n\n\t1. Persistent Volume (PV):\n\t\t•\tWhat it is: The actual storage resource in the cluster, provisioned by an administrator or dynamically via a StorageClass. It represents a physical disk in the cloud (like Azure Disk, Azure Files, or AWS EBS).\n\t\t•\tLifecycle: It has its own lifecycle independent of any individual pod that uses it.\n\t\t•\tScope: It is a cluster-wide resource (not bound to a namespace).\n\n\t2. Persistent Volume Claim (PVC):\n\t\t•\tWhat it is: A request for storage by a developer or a Pod. It specifies the size, access mode (e.g., ReadWriteOnce, ReadWriteMany), and optionally a specific StorageClass.\n\t\t•\tLifecycle: It is bound to a specific namespace. When a pod needs storage, it references the PVC, and Kubernetes automatically binds it to a matching PV.\n\nFlow of Storage:\nPod ---> requests storage via ---> PVC ---> binds to ---> PV ---> points to physical ---> Storage (Azure Disk/S3)\n\nKey Differences:\n| Feature | Persistent Volume (PV) | Persistent Volume Claim (PVC) |\n| :--- | :--- | :--- |\n| Concept | The actual storage resource (like a VM). | A request for storage (like a VM request). |\n| Created By | Cluster Administrator or StorageClass. | Application Developer or Helm Chart. |\n| Scope | Cluster-wide (Namespace-agnostic). | Namespace-scoped. |\n| Reusability | Can be reused depending on Reclaim Policy. | Bound to a single pod/workload at a time. |\n\nReclaim Policies:\n\t•\tRetain: Keeps the PV and its data after PVC deletion (requires manual cleanup).\n\t•\tDelete: Automatically deletes the PV and physical storage when the PVC is deleted.\n\t•\tRecycle: Performs a basic scrub (`rm -rf`) and makes it available again (deprecated).”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 32,
    "category": "Docker & Kubernetes",
    "question": "How do you monitor Kubernetes applications?",
    "answer": "“I implement a comprehensive 3-tier monitoring strategy for Kubernetes applications:\n\n\t1. Metrics Collection (Prometheus & Grafana):\n\t\t•\tPrometheus: Scrapes time-series metrics from Kubernetes nodes, kube-state-metrics, and application-specific endpoints (using Prometheus exporters).\n\t\t•\tGrafana: Visualizes these metrics through dashboards, showing real-time CPU, memory, network I/O, and disk utilization.\n\t2. Log Aggregation (EFK/LKF Stack or Azure Log Analytics):\n\t\t•\tWe use Fluentd or Promtail as a DaemonSet to collect stdout/stderr logs from all containers and forward them to Elasticsearch or Loki.\n\t\t•\tKibana or Grafana is used to query logs for troubleshooting application errors.\n\t3. Key Metrics to Monitor:\n\t\t•\tNode Health: Disk pressure, memory pressure, CPU usage, and network saturation.\n\t\t•\tPod Metrics: Restart counts, CPU/Memory limits vs. requests, and pending pod counts.\n\t\t•\tApplication Health: HTTP request rates, error rates (5xx/4xx), and latency.\n\t4. Alerting (Alertmanager / Azure Alerts):\n\t\t•\tSet up alerts for critical events (e.g., `CrashLoopBackOff`, Node status `NotReady`, or disk usage exceeding 85%) to notify the team via Slack or PagerDuty.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 33,
    "category": "Docker & Kubernetes",
    "question": "Explain the working of CNI in Kubernetes",
    "answer": "“CNI (Container Network Interface) is a standardized specification that defines how network plugins should configure networking for Kubernetes Pods.\n\nHow CNI Works Step-by-Step:\n\t1. Pod Creation: The API Server schedules a Pod to a Node, and the local Kubelet begins creating the Pod.\n\t2. Network Namespace Creation: Kubelet creates a network namespace (netns) for the Pod.\n\t3. CNI Trigger: Kubelet calls the CNI plugin (configured on the node) with `ADD` command, passing the container ID and netns path.\n\t4. IP Assignment & Routing:\n\t\t•\tThe CNI plugin allocates an IP address to the Pod from the node's CIDR block.\n\t\t•\tIt creates a virtual ethernet pair (`veth` pair): one end is attached to the pod's namespace (as `eth0`), and the other end is attached to the host network (e.g., a bridge).\n\t5. Communication: CNI configures the routing tables so the Pod can communicate with other Pods across the cluster.\n\nPopular CNI Plugins:\n\t•\tAzure CNI: Gives each Pod a real IP address from the Azure VNet (highly performant, but consumes many VNet IPs).\n\t•\tKubenet: A basic plugin where Pods get IPs from a private range, and the host performs NAT (saves IPs but has routing overhead).\n\t•\tCalico: Uses BGP for high-performance routing and supports fine-grained Network Policies for security.\n\t•\tCilium: Uses eBPF (Extended Berkeley Packet Filter) for secure, high-performance networking and observability without iptables overhead.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 34,
    "category": "Docker & Kubernetes",
    "question": "Why do we require multiple containers in a Pod?",
    "answer": "“While the standard practice is to run a single container per Pod, there are scenarios where multiple containers are required to run together. These containers share the same network namespace (can communicate via `localhost`), storage volumes, and lifecycle.\n\nCommon Use Cases:\n\t1. Sidecar Pattern: A helper container that assists the main container without modifying its code.\n\t   Example: The main container runs a web app, and the sidecar container (like Fluent Bit) collects logs and sends them to Elasticsearch.\n\t2. Ambassador Pattern: A proxy container that manages external connections for the main container.\n\t   Example: A database proxy that handles connection pooling and encryption to a remote database.\n\t3. Adapter Pattern: A container that standardizes the output of the main container.\n\t   Example: Formats application-specific metrics into a format Prometheus can scrape.\n\t4. Init Containers: Containers that run and complete before the main application container starts.\n\t   Example: A container that waits for a database to become online or downloads configuration files.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 35,
    "category": "Docker & Kubernetes",
    "question": "What is the use case of a Sidecar Container?",
    "answer": "“A Sidecar Container runs alongside the main application container in the same Pod to extend and enhance its functionality. This separation of concerns allows the main application to remain simple and focused.\n\nCommon Use Cases:\n\t1. Log Shipping: The main application writes logs to a shared volume, and the sidecar container (e.g., Fluent Bit, Logstash) reads those logs and ships them to a central logging server.\n\t2. Monitoring & Metrics: A sidecar container collects application-level metrics (e.g., Prometheus JMX Exporter) and exposes them on a `/metrics` endpoint.\n\t3. Service Mesh Proxy: In a service mesh (like Istio or Linkerd), a sidecar proxy (Envoy) is injected into every Pod. It intercepts all inbound and outbound network traffic to handle service discovery, mutual TLS (mTLS), load balancing, and rate limiting.\n\t4. Configuration Syncing: A sidecar container monitors a remote repository (like Git or Consul) for configuration changes and automatically updates the local config files used by the main application without restarting the pod.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 36,
    "category": "Terraform (IaC)",
    "question": "Difference between count and for_each in Terraform",
    "answer": "“Both `count` and `for_each` are meta-arguments used in Terraform to create multiple instances of a resource, but they behave differently and are suited for different use cases:\n\n\t1. count:\n\t\t•\tHow it works: Creates a list of resources based on a numeric index.\n\t\t•\tExample:\n\t\t  ```hcl\n\t\t  resource \"azurerm_virtual_machine\" \"vm\" {\n\t\t    count = 3\n\t\t    name  = \"vm-${count.index}\"\n\t\t  }\n\t\t  ```\n\t\t•\tLimitation: Since resources are tracked by index (e.g., `vm[0]`, `vm[1]`, `vm[2]`), if you delete `vm[1]`, Terraform will shift the index of `vm[2]` to `vm[1]`, causing it to destroy and recreate the remaining resources.\n\n\t2. for_each:\n\t\t•\tHow it works: Loops through a map or set of strings, tracking each resource by a unique key.\n\t\t•\tExample:\n\t\t  ```hcl\n\t\t  resource \"azurerm_virtual_machine\" \"vm\" {\n\t\t    for_each = toset([\"web\", \"app\", \"db\"])\n\t\t    name     = \"vm-${each.key}\"\n\t\t  }\n\t\t  ```\n\t\t•\tAdvantage: Resources are tracked by their key (e.g., `vm[\"web\"]`, `vm[\"app\"]`). Deleting or modifying one item has zero impact on the others.\n\nSummary of Differences:\n| Feature | count | for_each |\n| :--- | :--- | :--- |\n| Data Type | Number or List. | Map or Set of strings. |\n| Resource Tracking | Index-based (0, 1, 2). | Key-based (string keys). |\n| Best For | Creating identical resources. | Creating resources with unique configurations. |\n| Deletion Safety | Low (shifting index causes recreations). | High (deleting one key does not affect others). |”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 37,
    "category": "Terraform (IaC)",
    "question": "What is a State File in Terraform?",
    "answer": "“The Terraform State File (`terraform.tfstate`) is a JSON file that acts as the single source of truth for your managed infrastructure. \n\nKey Functions:\n\t1. Mapping to Real Resources: It maps the resource declarations in your `.tf` files to the actual physical resources created in your cloud provider.\n\t2. Metadata & Dependencies: It tracks metadata, resource dependencies, and resource attributes that are not visible in your code.\n\t3. Performance Optimization: By caching the state of resources, Terraform avoids querying the cloud provider APIs for every single resource during a `plan` or `apply` operation.\n\nBest Practices for Teams:\n\t•\tNever commit state files to Git (they contain plain-text secrets).\n\t•\tUse a Remote Backend (like Azure Storage Account) with Encryption-at-Rest enabled.\n\t•\tEnable State Locking (using Azure Storage native leases) to prevent concurrent runs from corrupting the state file.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 38,
    "category": "CI/CD & Pipelines",
    "question": "Explain the CI/CD workflow",
    "answer": "“A robust CI/CD (Continuous Integration / Continuous Delivery) workflow automates the software release lifecycle from code commit to production deployment:\n\n\t1. Continuous Integration (CI) Phase:\n\t\t•\tGit Push: A developer pushes code or opens a Pull Request (PR).\n\t\t•\tTrigger: The CI pipeline (e.g., Azure Pipelines, Jenkins, GitHub Actions) starts automatically.\n\t\t•\tBuild: The application is compiled, and dependencies are installed.\n\t\t•\tUnit Testing: Automated unit tests are run to catch code bugs early.\n\t\t•\tCode Quality & Security: Tools like SonarQube scan the code for code smells, and tfsec/Trivy scan for vulnerabilities.\n\t\t•\tArtifact Creation: If all checks pass, a build artifact (e.g., a zip file, jar file, or Docker image) is generated and pushed to a registry (like ACR or Artifactory).\n\n\t2. Continuous Delivery / Deployment (CD) Phase:\n\t\t•\tDeploy to Dev/QA: The artifact is deployed automatically to lower environments.\n\t\t•\tIntegration & UAT Testing: Automated integration tests or manual User Acceptance Testing (UAT) is performed.\n\t\t•\tManual Approval: For production environments, a gatekeeper (release manager) reviews the release and provides manual approval.\n\t\t•\tProduction Release: The application is deployed to production using zero-downtime strategies (like Rolling Updates or Blue-Green deployments).”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 39,
    "category": "Terraform (IaC)",
    "question": "You need to provision an Azure Storage Account in multiple environments. What Terraform setup would you design?",
    "answer": "“To deploy an Azure Storage Account across multiple environments (Dev, QA, Prod) while maintaining clean, reusable, and secure code, I would design a modular directory structure using remote backends:\n\n\t1. Directory Structure:\n```text\nterraform/\n├── modules/\n│   └── storage_account/\n│       ├── main.tf        # Resource definition\n│       ├── variables.tf   # Module input variables\n│       └── outputs.tf     # Outputs (e.g., connection strings)\n└── environments/\n    ├── dev/\n    │   ├── main.tf        # Calls the storage module\n    │   ├── variables.tf\n    │   ├── terraform.tfvars # Dev-specific values\n    │   └── backend.tf     # Dev remote state configuration\n    └── prod/\n        ├── main.tf        # Calls the storage module\n        ├── variables.tf\n        ├── terraform.tfvars # Prod-specific values\n        └── backend.tf     # Prod remote state configuration\n```\n\n\t2. Key Design Principles:\n\t\t•\tReusable Modules: The `modules/storage_account/` directory contains the generic definition of the storage account. We do not hardcode environment names or sizes here.\n\t\t•\tEnvironment Isolation: Each environment (dev, prod) has its own directory and its own `backend.tf` file pointing to a separate storage container. This ensures that a change in Dev cannot accidentally modify or corrupt the Prod state.\n\t\t•\tParameterization: We use `terraform.tfvars` in each environment to pass specific values (e.g., LRS storage for Dev to save costs, and GRS storage for Prod for high availability).”\nApproach:\n\t•\tCreate a reusable Storage Account module. \n\t•\tUse separate variable files (dev.tfvars, qa.tfvars, prod.tfvars). \n\t•\tUse separate remote state files for each environment. \n\t•\tDeploy through Azure DevOps pipelines.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 40,
    "category": "CI/CD & Pipelines",
    "question": "How do you configure a Terraform pipeline?",
    "answer": "Typical Azure DevOps pipeline:\nCheckout\n    ↓\nTerraform Init\n    ↓\nTerraform Validate\n    ↓\nTerraform Format Check\n    ↓\nTerraform Plan\n    ↓\nManual Approval\n    ↓\nTerraform Apply\nUse:\n\t•\tAzure Service Connection \n\t•\tRemote Backend \n\t•\tSecure Variable Groups \n\t•\tEnvironment Approvals",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 41,
    "category": "CI/CD & Pipelines",
    "question": "Should we have more than one pipeline for multiple environments?",
    "answer": "Usually No.\nA single multi-stage YAML pipeline is preferred.\nExample stages:\n\t•\tDev \n\t•\tQA \n\t•\tUAT \n\t•\tProduction \nThe pipeline determines the environment using:\n\t•\tPipeline parameters \n\t•\tVariables \n\t•\tBranch names \n\t•\tStage conditions \n\t•\tVariable groups \nExample:\n\t•\tdevelop → Dev \n\t•\trelease/* → QA \n\t•\tmain → Production",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 42,
    "category": "CI/CD & Pipelines",
    "question": "In CI/CD, which pipeline have you used?",
    "answer": "Sample Answer:\n\"I have primarily worked with Azure DevOps YAML pipelines because they are version-controlled, reusable, and support Infrastructure as Code. I have basic knowledge of Classic pipelines but prefer YAML for modern CI/CD implementations.\"",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 43,
    "category": "CI/CD & Pipelines",
    "question": "What is a Template in a YAML pipeline?",
    "answer": "“A Template in an Azure DevOps YAML pipeline is a reusable file that allows you to define common pipeline logic once and share it across multiple pipelines. This follows the DRY (Don't Repeat Yourself) principle.\n\nKey Types of Templates:\n\t1. Stage Templates: Define a complete deployment stage (e.g., a Dev deployment stage).\n\t2. Job Templates: Define a set of jobs (e.g., a build job that runs on multiple OS platforms).\n\t3. Step Templates: Define a sequence of tasks (e.g., a step to install Node.js, run npm build, and publish artifacts).\n\nBenefits of Using Templates:\n\t•   Reusability: Avoids duplicate YAML code across different repositories or pipelines.\n\t•   Security & Governance: Centralizes security scans or compliance tasks in a single template that all teams must reference.\n\t•   Maintainability: If a task version changes, you only need to update it in the template file rather than in hundreds of individual pipelines.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 44,
    "category": "CI/CD & Pipelines",
    "question": "Difference between Parameters and Variables in a pipeline",
    "answer": "“In Azure DevOps YAML pipelines, both parameters and variables are used to store and pass values, but they differ significantly in their evaluation time, mutability, and security:\n\n\t1. Parameters (Compile-Time):\n\t\t•   What they are: Strongly-typed inputs defined at the top of the YAML file. They are evaluated at compile-time (before the pipeline starts running).\n\t\t•   Mutability: Immutable. Once the pipeline starts, their values cannot be changed.\n\t\t•   Use Case: Used to control the structure of the pipeline (e.g., passing a boolean to decide whether to run a deployment stage, or choosing a target environment from a dropdown list).\n\n\t2. Variables (Runtime):\n\t\t•   What they are: Dynamic values that can be defined in the YAML, in variable groups, or via the UI. They are evaluated at runtime.\n\t\t•   Mutability: Mutable. Their values can be updated dynamically during pipeline execution using logging commands (e.g., `##vso[task.setvariable]`).\n\t\t•   Use Case: Used to store secrets, build numbers, or dynamic outputs from one task to be used in a later task.\n\nSummary of Differences:\n| Feature | Parameters | Variables |\n| :--- | :--- | :--- |\n| Evaluation Time | Compile-Time (before execution). | Runtime (during execution). |\n| Mutability | Immutable (read-only). | Mutable (can be changed). |\n| Data Types | Strongly typed (string, number, boolean, object). | Only strings. |\n| Security | Highly secure (cannot be injected at runtime). | Vulnerable to runtime injection if not handled carefully. |\n| UI Prompting | Can prompt the user for input before running. | Cannot prompt the user with dropdowns. |”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet"
  },
  {
    "id": 45,
    "category": "Linux & Git",
    "question": "How do you change a username using a Git command?",
    "answer": "“To change the author name associated with your Git commits, you use the `git config` command. You can set it at different scopes depending on your needs:\n\n\t1. For the Current Repository Only:\n\t\t•   Run the command inside the specific repository folder:\n\t\t    `git config user.name \"John Doe\"`\n\t\t•   This writes the configuration to the `.git/config` file of that repository.\n\n\t2. Globally (For All Repositories on Your Machine):\n\t\t•   Run the command with the `--global` flag:\n\t\t    `git config --global user.name \"John Doe\"`\n\t\t•   This writes the configuration to the global Git config file (typically `~/.gitconfig` on Linux/Mac).\n\n\t3. To Change the Associated Email Address:\n\t\t•   You should also update your email, as Git commits track both name and email:\n\t\t    `git config --global user.email \"john.doe@example.com\"`\n\n\t4. To Verify the Configuration:\n\t\t•   List all active configurations to confirm the changes:\n\t\t    `git config --list` or `git config user.name`”",
    "difficulty": "Hard",
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
    "category": "CI/CD & Pipelines",
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
    "category": "CI/CD & Pipelines",
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
    "category": "CI/CD & Pipelines",
    "question": "Explain Your CI/CD Process",
    "answer": "“We use Azure DevOps YAML pipelines for implementing CI/CD.\nWe have two different pipelines:\n\t•\tTerraform Pipeline \n\t•\tApplication Pipeline \n🚀 Terraform Pipeline Flow\nWhenever code is merged into the main branch, the Terraform CI/CD pipeline is triggered automatically in Azure DevOps.\n🔄 Pipeline Workflow\n1️⃣ Terraform Init\n\t•\tInitializes Terraform working directory. \n\t•\tDownloads: \n\t•\tRequired providers \n\t•\tModules \n\t•\tBackend configuration \n\t•\tConnects to remote backend storage for Terraform state management. \n2️⃣ Terraform Plan\n\t•\tGenerates an execution plan. \n\t•\tValidates infrastructure changes before deployment. \n\t•\tShows: \n\t•\tResources to be created \n\t•\tModified resources \n\t•\tDeleted resources \n\t•\tHelps the team review changes safely before applying. \n3️⃣ tfsec Security Scanning\n\t•\tRuns automated security validation on Terraform code. \n\t•\tDetects issues such as: \n\t•\tOpen security groups \n\t•\tPublicly exposed resources \n\t•\tWeak configurations \n\t•\tMissing encryption settings \n\t•\tPipeline fails automatically if critical vulnerabilities are found. \n4️⃣ Manual Approval Stage\n\t•\tInfrastructure changes are reviewed by authorized team members. \n\t•\tEnsures: \n\t•\tChange validation \n\t•\tCompliance checks \n\t•\tProduction safety \n\t•\tPrevents accidental or unintended infrastructure modifications. \n5️⃣ Terraform Apply\n\t•\tAfter approval, Terraform applies the approved changes. \n\t•\tInfrastructure gets provisioned or updated automatically in Azure. \n\n🎯 Short Interview Answer\n“Our Terraform pipeline starts automatically when code is merged into the main branch. It executes Terraform Init, Plan, tfsec security scanning, manual approval, and finally Terraform Apply to provision infrastructure securely and automatically.”\n🚀 Application CI/CD Pipeline Flow\nWhen developers merge code into the Dev or Stage branch, the Application CI/CD pipeline is triggered automatically in Azure DevOps.\n\n🔄 Application Pipeline Workflow\n1️⃣ Repository Clone\n\t•\tSource code is pulled from the Git repository. \n\t•\tEnsures the latest application code is available for build and deployment. \n2️⃣ Application Build\n\t•\tApplication build process starts. \n\t•\tDependencies are installed and application artifacts are generated. \n3️⃣ Unit Testing\n\t•\tAutomated unit tests are executed. \n\t•\tHelps identify application issues early in the CI stage. \n4️⃣ SonarQube Static Code Analysis\n\t•\tSonarQube scans the application code for: \n\t•\tBugs \n\t•\tVulnerabilities \n\t•\tCode smells \n\t•\tSecurity issues \n\t•\tEnsures code quality and compliance standards. \n5️⃣ Docker Image Build\n\t•\tApplication is containerized using Docker. \n\t•\tDocker image is created using Dockerfile. \n6️⃣ Vulnerability Scanning using Anchore\n\t•\tDocker image is scanned for: \n\t•\tSecurity vulnerabilities \n\t•\tOutdated packages \n\t•\tCompliance issues \n\t•\tPipeline can fail if critical vulnerabilities are detected. \n7️⃣ Push Docker Image to ACR\n\t•\tSecurely pushes the Docker image to: \n\t•\tAzure Container Registry (ACR) \n\t•\tACR acts as a private image repository. \n8️⃣ Deployment to AKS\n\t•\tApplication deployment happens automatically on: \n\t•\tAzure Kubernetes Service (AKS) \n\t•\tDeployment is performed using: \n\t•\tKubernetes manifests \n\t•\tHelm charts \n\n☸️ Kubernetes Deployment Components\n🟢 Kubernetes Manifests\nUsed for defining:\n\t•\tDeployments \n\t•\tServices \n\t•\tIngress \n\t•\tConfigMaps \n\t•\tSecrets \n🟢 Helm Charts\nUsed for:\n\t•\tReusable deployments \n\t•\tParameterized configurations \n\t•\tSimplified Kubernetes package management \n\n🎯 Short Interview Answer\n“When developers merge code into Dev or Stage branches, the pipeline automatically clones the repository, builds the application, runs unit tests, performs SonarQube analysis, builds Docker images, scans them using Anchore, pushes images to ACR, and deploys applications to AKS using Kubernetes manifests or Helm charts.”\nThis complete automation helped reduce manual work, improved deployment speed, and minimized production issues.”\n\n\n\n☸️ AKS Architecture Explanation\nWe used Azure Kubernetes Service (AKS) as a managed Kubernetes platform for deploying and managing containerized applications in Azure.\n\n🏗️ AKS Cluster Architecture\n🔹 Node Pool Design\nOur AKS cluster was designed with multiple node pools based on workload requirements.\n🟦 Frontend Node Pool\n\t•\tConfigured with high-memory nodes \n\t•\tUsed for frontend/UI applications \n\t•\tOptimized for handling: \n\t•\tUser sessions \n\t•\tWeb traffic \n\t•\tApplication caching \n🟩 Backend Node Pool\n\t•\tConfigured with high-CPU nodes \n\t•\tUsed for backend microservices and APIs \n\t•\tOptimized for: \n\t•\tProcessing requests \n\t•\tBusiness logic execution \n\t•\tAPI workloads \n\n⚙️ Kubernetes Features Used\n🟢 Node Selectors\n\t•\tUsed for workload scheduling. \n\t•\tEnsured frontend and backend applications were deployed on the appropriate node pools. \nExample:\n\t•\tFrontend pods ➜ High-memory nodes \n\t•\tBackend pods ➜ High-CPU nodes \n\n🟢 HPA (Horizontal Pod Autoscaler)\n\t•\tAutomatically scaled application pods based on: \n\t•\tCPU usage \n\t•\tMemory usage \n\t•\tMetrics \n\t•\tHelped maintain: \n\t•\tHigh availability \n\t•\tBetter performance \n\t•\tEfficient resource utilization \n\n🟢 Namespaces\n\t•\tUsed for logical isolation of applications and environments. \n\t•\tHelped separate: \n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction workloads \nBenefits:\n\t•\tBetter resource management \n\t•\tImproved security \n\t•\tEasier administration \n\n🟢 RBAC (Role-Based Access Control)\n\t•\tImplemented RBAC for secure cluster access management. \n\t•\tControlled: \n\t•\tUser permissions \n\t•\tTeam access \n\t•\tKubernetes operations \nExamples:\n\t•\tRead-only access \n\t•\tDeployment access \n\t•\tAdmin access \n\n🟢 Ingress Controller\n\t•\tUsed for managing external HTTP/HTTPS traffic routing to applications inside AKS. \n\t•\tSupported: \n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tTraffic management \n\n🌐 Application Exposure\n🟣 Application Gateway Ingress Controller (AGIC)\nApplications were exposed externally using:\n\t•\tAzure Application Gateway \n\t•\tApplication Gateway Ingress Controller (AGIC) \nBenefits:\n\t•\tLayer 7 load balancing \n\t•\tSSL offloading \n\t•\tWeb Application Firewall (WAF) \n\t•\tSecure traffic routing \n\t•\tBetter scalability \n\n📊 Monitoring & Observability\n🟢 Azure Monitor\nUsed for:\n\t•\tInfrastructure monitoring \n\t•\tMetrics collection \n\t•\tAlerting \n\t•\tPerformance tracking \n\n🟢 Container Insights\nUsed for:\n\t•\tPod monitoring \n\t•\tNode health monitoring \n\t•\tContainer logs \n\t•\tTroubleshooting \n\t•\tAKS performance analysis \n\n🎯 Short Interview Answer\n“We used AKS as a managed Kubernetes platform with separate node pools for frontend and backend workloads. We implemented node selectors, HPA, namespaces, RBAC, and ingress controllers for workload management, scaling, security, and traffic routing. Applications were exposed using Application Gateway Ingress Controller, and monitoring was handled through Azure Monitor and Container Insights.”\n\n\nTroubleshooting Example (CrashLoopBackOff)\n“If I encounter a CrashLoopBackOff issue in AKS, I follow these steps:\n\t•\tCheck pod status \nkubectl get pods\n\t•\tCheck pod logs \nkubectl logs pod-name\n\t•\tDescribe pod for events \nkubectl describe pod pod-name\n\t•\tVerify: \n\t•\tEnvironment variables \n\t•\tSecrets and ConfigMaps \n\t•\tImage version \n\t•\tResource limits \n\t•\tDatabase connectivity \n\t•\tCoordinate with developers if application-level issue exists \n\t•\tIf issue impacts production, rollback deployment: \nkubectl rollout undo deployment deployment-name\nThis approach helps quickly restore service availability.”\n\n📅 Day-to-Day Activities\nMy daily responsibilities as a DevOps & Cloud Engineer include managing cloud infrastructure, supporting deployments, monitoring systems, and ensuring platform stability and security.\n\n🔄 Daily Responsibilities\n🚀 Monitoring CI/CD Pipelines\n\t•\tMonitoring Azure DevOps pipelines \n\t•\tValidating build and deployment status \n\t•\tTroubleshooting pipeline failures \n\t•\tEnsuring smooth CI/CD execution \n\n☁️ Managing Azure Infrastructure\n\t•\tManaging Azure cloud resources \n\t•\tMonitoring infrastructure health and utilization \n\t•\tHandling scaling and configuration updates \n\t•\tSupporting environment maintenance activities \n\n☸️ Deploying Applications on AKS\n\t•\tDeploying containerized applications to AKS \n\t•\tManaging Kubernetes deployments and services \n\t•\tHandling Helm chart or manifest updates \n\t•\tMonitoring application rollout status \n\n🏗️ Creating & Updating Terraform Code\n\t•\tWriting Infrastructure as Code using Terraform \n\t•\tUpdating reusable Terraform modules \n\t•\tManaging environment-specific configurations \n\t•\tReviewing and validating infrastructure changes \n\n🛠️ Troubleshooting Production Issues\n\t•\tInvestigating deployment failures \n\t•\tTroubleshooting AKS pod/application issues \n\t•\tAnalyzing logs and monitoring alerts \n\t•\tCoordinating with development and support teams \n\n🐳 Managing Docker Images\n\t•\tBuilding Docker images \n\t•\tManaging container image versions \n\t•\tPushing images to Azure Container Registry (ACR) \n\t•\tRemoving outdated or unused images \n\n👨‍💻 Supporting Developers\n\t•\tAssisting developers with deployment issues \n\t•\tHelping with CI/CD integration \n\t•\tSupporting environment access and configuration \n\t•\tResolving infrastructure-related concerns \n\n📊 Monitoring Application Performance\n\t•\tMonitoring applications using Azure Monitor & Container Insights \n\t•\tChecking resource utilization and application health \n\t•\tConfiguring alerts and dashboards \n\t•\tIdentifying performance bottlenecks \n\n🎫 Handling Tickets & Change Requests\n\t•\tWorking on incident, service, and change requests \n\t•\tImplementing approved infrastructure changes \n\t•\tSupporting release and deployment activities \n\t•\tFollowing ITIL and change management processes \n\n🔐 Ensuring Security & Compliance\n\t•\tMonitoring security compliance \n\t•\tManaging RBAC and access controls \n\t•\tValidating vulnerability scans \n\t•\tEnsuring secure secret management using Key Vault \n\n🎯 Short Interview Answer\n“My daily activities include monitoring CI/CD pipelines, managing Azure infrastructure, deploying applications on AKS, writing Terraform code, troubleshooting production issues, managing Docker images, supporting developers, monitoring application performance, handling tickets and change requests, and ensuring security and compliance.”\n\n☁️ Azure Services Worked On\nI have worked on multiple Azure services across compute, networking, security, monitoring, storage, and DevOps domains.\n\n🚀 Compute & Container Services\n☸️ AKS (Azure Kubernetes Service)\n\t•\tManaged Kubernetes platform used for deploying and managing containerized applications. \n\t•\tWorked on: \n\t•\tDeployments \n\t•\tScaling \n\t•\tIngress \n\t•\tMonitoring \n\t•\tTroubleshooting \n\n💻 Virtual Machines (VMs)\n\t•\tProvisioned and managed Linux/Windows VMs. \n\t•\tWorked on: \n\t•\tVM configuration \n\t•\tScaling \n\t•\tNetworking \n\t•\tSecurity hardening \n\n🔄 DevOps & CI/CD Services\n🛠️ Azure DevOps\n\t•\tUsed for: \n\t•\tCI/CD pipelines \n\t•\tSource code management \n\t•\tRelease automation \n\t•\tYAML pipelines \n\t•\tBuild and deployment orchestration \n\n📦 Azure Container Registry (ACR)\n\t•\tPrivate container registry used for securely storing Docker images. \n\t•\tIntegrated with: \n\t•\tAKS \n\t•\tAzure DevOps pipelines \n\n🔐 Security Services\n🔑 Azure Key Vault\n\t•\tUsed for securely managing: \n\t•\tSecrets \n\t•\tCertificates \n\t•\tAPI keys \n\t•\tConnection strings \n\n🛡️ Azure AD (Azure Active Directory)\n\t•\tUsed for: \n\t•\tAuthentication \n\t•\tAuthorization \n\t•\tRBAC \n\t•\tIdentity management \n\t•\tSingle Sign-On (SSO) \n\n🔒 NSG (Network Security Group)\n\t•\tImplemented inbound and outbound traffic control using security rules. \n\t•\tUsed for subnet and NIC-level security. \n\n🌐 Private Endpoints\n\t•\tEnabled secure private connectivity to Azure services without public internet exposure. \n\n🖥️ Azure Bastion\n\t•\tUsed for secure RDP/SSH access to VMs without exposing public IP addresses. \n\n🌐 Networking Services\n🌍 Virtual Networks (VNets)\n\t•\tDesigned and managed isolated Azure networks. \n\t•\tCreated: \n\t•\tSubnets \n\t•\tRouting configurations \n\t•\tSecure connectivity \n\n⚖️ Load Balancer\n\t•\tDistributed incoming traffic across backend resources for high availability. \n\n🚦 Application Gateway\n\t•\tLayer 7 load balancer used for: \n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tWeb Application Firewall (WAF) \n\n🌎 Azure Front Door\n\t•\tUsed for: \n\t•\tGlobal traffic routing \n\t•\tLow-latency access \n\t•\tWAF protection \n\t•\tCDN integration \n\n📊 Monitoring & Logging\n📈 Azure Monitor\n\t•\tUsed for: \n\t•\tMonitoring infrastructure \n\t•\tMetrics collection \n\t•\tAlerts \n\t•\tLog analysis \n\t•\tPerformance monitoring \n\n💾 Storage & Database Services\n🗂️ Azure Storage Account\n\t•\tUsed for: \n\t•\tBlob storage \n\t•\tFile shares \n\t•\tTerraform backend state storage \n\n🛢️ Azure SQL\n\t•\tManaged relational database service used for application data storage. \n\n🌌 Cosmos DB\n\t•\tNoSQL database service used for globally distributed applications and scalable data storage. \n\n🎯 Short Interview Answer\n“I have worked on multiple Azure services including AKS, Azure DevOps, ACR, Key Vault, VNets, NSG, Azure Bastion, Azure Monitor, Application Gateway, Azure Front Door, Storage Accounts, Azure SQL, Cosmos DB, Azure AD, Load Balancer, Virtual Machines, and Private Endpoints.”\n\nCommon Interview Questions with Smart Answers\nBranching Strategy\nFeature Branching\n\t•\tEach developer works on a separate feature branch. \n\t•\tCode is merged through Pull Requests after review. \nExample:\n\t•\tfeature/login \n\t•\tfeature/payment \nGitFlow\n\t•\tUses main, develop, feature, release, and hotfix branches. \n\t•\tBest for large enterprise projects. \nTrunk-Based Development\n\t•\tDevelopers create short-lived branches and merge quickly into the main branch. \n\t•\tCI/CD validation runs automatically. \nInterview Answer:\n“We mainly use feature branching and trunk-based development in Azure DevOps for faster integration, automated testing, and reduced merge conflicts.”\n\nVNet and Subnet\nVNet\n\t•\tPrivate network in Microsoft Azure Azure. \n\t•\tEnables secure communication between resources. \nExample:\n\t•\t10.0.0.0/16 \nSubnet\n\t•\tSmaller network inside a VNet. \n\t•\tUsed for network segmentation. \nExample:\n\t•\tWeb subnet \n\t•\tApp subnet \n\t•\tDB subnet \nInterview Answer:\n“VNet provides isolated networking in Azure, and subnets divide the VNet into smaller logical networks for better security and traffic management.”\n\nBackend Block in Terraform\n\t•\tBackend block stores Terraform state remotely. \nExample:\n\t•\tAzure Storage Account backend \nBenefits:\n\t•\tTeam collaboration \n\t•\tState locking \n\t•\tPrevents state corruption \nInterview Answer:\n“We use backend blocks to store Terraform state files remotely in Azure Storage Account for centralized state management and locking.”\n\nDeployment Errors Faced\nTerraform Errors\n\t•\tState lock issue \n\t•\tResource already exists \n\t•\tDependency issues \nAzure Errors\n\t•\tRBAC permission denied \n\t•\tNSG blocking traffic \n\t•\tQuota limit exceeded \nCI/CD Errors\n\t•\tYAML syntax issues \n\t•\tService connection failures \nAKS Errors\n\t•\tImagePullBackOff \n\t•\tPod crash loops \nInterview Answer:\n“I have handled Terraform state lock issues, RBAC permission errors, NSG misconfigurations, CI/CD pipeline failures, and AKS image pull errors.”\n\nTerraform Modules\n\t•\tModules are reusable Terraform components. \nExamples:\n\t•\tVNet module \n\t•\tNSG module \n\t•\tAKS module \n\t•\tStorage module \nBenefits:\n\t•\tReusability \n\t•\tStandardization \n\t•\tEasy maintenance \nInterview Answer:\n“I worked on reusable Terraform modules for VNet, subnet, NSG, AKS, storage accounts, and virtual machines.”\n\nNSG and ASG\nNSG (Network Security Group)\n\t•\tActs like a firewall. \n\t•\tControls inbound and outbound traffic using rules. \nExample:\n\t•\tAllow port 80 \n\t•\tAllow SSH 22 \n\t•\tDeny all others \nASG (Application Security Group)\n\t•\tLogical grouping of VMs. \n\t•\tSimplifies NSG rule management. \nExample:\n\t•\tweb-asg \n\t•\tapp-asg \n\t•\tdb-asg",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 59,
    "category": "Azure & Azure DevOps",
    "question": "Difference Between NSG and ASG",
    "answer": "“In Azure networking, Network Security Groups (NSGs) and Application Security Groups (ASGs) work together to secure network traffic, but they serve different purposes:\n\n\t1. Network Security Group (NSG):\n\t\t•\tWhat it is: A security filter that contains a list of Access Control List (ACL) rules to allow or deny inbound/outbound network traffic.\n\t\t•\tScope: Can be applied to a Subnet or an individual Network Interface (NIC) of a VM.\n\t\t•\tHow it works: Filters traffic based on 5-tuple information (Source IP, Source Port, Destination IP, Destination Port, Protocol).\n\n\t2. Application Security Group (ASG):\n\t\t•\tWhat it is: An object that allows you to group virtual machines based on their application function (e.g., web-servers, app-servers, db-servers).\n\t\t•\tScope: Used as a source or destination in NSG rules. You do not apply rules to an ASG directly; instead, you write an NSG rule and use the ASG as the source or destination.\n\t\t•\tHow it works: Simplifies NSG rule management by letting you write a single rule for a group of VMs rather than writing rules for individual IP addresses.\n\nSummary of Differences:\n| Feature | NSG (Network Security Group) | ASG (Application Security Group) |\n| :--- | :--- | :--- |\n| Primary Purpose | Filters network traffic at the packet level. | Groups VMs logically to simplify security rules. |\n| Configuration | Contains allow/deny security rules. | Contains no rules; acts as a label/grouping. |\n| Association | Associated with Subnets or NICs. | Associated with VM Network Interfaces (NICs). |\n| Key Benefit | Acts as a firewall for subnets/VMs. | Eliminates the need to maintain IP addresses in NSG rules. |\n\nExample Scenario:\nInstead of writing three NSG rules to allow traffic from Web-VM1, Web-VM2, and Web-VM3 to DB-VM1 on port 3306, we associate the Web VMs with `web-asg` and the DB VM with `db-asg`. Then, we write a single NSG rule: Allow inbound from `web-asg` to `db-asg` on port 3306.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 60,
    "category": "Terraform (IaC)",
    "question": "Why Terraform?",
    "answer": "“We use Terraform as our primary Infrastructure as Code (IaC) tool because of several enterprise-grade benefits it provides:\n\n\t1. Multi-Cloud Support: Unlike cloud-specific tools (like Azure ARM Templates or AWS CloudFormation), Terraform uses a single, consistent syntax (HCL) to manage resources across Azure, AWS, GCP, and on-premises systems.\n\t2. Declarative Programming: You define the desired end-state of your infrastructure (e.g., 'I want a virtual network with 3 subnets'), and Terraform automatically calculates the creation order, dependencies, and API calls needed to reach that state.\n\t3. State Management: The state file (`terraform.tfstate`) acts as a single source of truth, allowing Terraform to detect infrastructure drift (differences between real-world resources and your code) and perform incremental updates without destroying existing resources.\n\t4. Modularity: We can package common infrastructure patterns into reusable modules, ensuring standardization, faster deployments, and easier maintenance across different teams.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 61,
    "category": "Docker & Kubernetes",
    "question": "Why AKS?",
    "answer": "“We chose Azure Kubernetes Service (AKS) as our container orchestration platform because it is a fully managed service that reduces operational complexity and integrates seamlessly with the Azure ecosystem:\n\n\t1. Managed Control Plane: Azure manages the Kubernetes master nodes (API server, etcd) for free, guaranteeing high availability (SLA up to 99.95%) and handling automated upgrades and patching. We only pay for the worker nodes.\n\t2. Seamless Integration: It integrates natively with Azure Active Directory / Entra ID (for RBAC), Azure Key Vault (for secret management via CSI driver), and Azure Monitor/Container Insights (for logging and metrics).\n\t3. Scaling and Speed: Supports fast autoscaling using the Horizontal Pod Autoscaler (HPA) and Cluster Autoscaler, and allows using Virtual Nodes (backed by Azure Container Instances) for serverless, instant scaling.\n\t4. Security & Compliance: Provides enterprise security features like private clusters, Azure Network Policies, and Microsoft Defender for Containers integration.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 62,
    "category": "Behavioral & Project",
    "question": "What Challenges Did You Face?",
    "answer": "“One of the major technical challenges we faced was **infrastructure drift and concurrent state file conflicts** in our Terraform deployments:\n\n\t1. The Challenge: Early in the project, team members ran Terraform from their local machines. This led to state file conflicts, accidental overwrites, and untracked manual changes (drift) in the Azure portal.\n\t2. The Solution:\n\t\t•   We migrated the Terraform state file to a centralized **Azure Storage Account** with secure remote backend storage and enabled **state locking** to prevent concurrent executions.\n\t\t•   We integrated Terraform into an **Azure DevOps CI/CD pipeline**. This removed local access, ensuring that all infrastructure changes are executed through the pipeline.\n\t\t•   We introduced a **manual approval gate** before the `Apply` stage, requiring a senior engineer to review the output of `terraform plan` before any changes are pushed to production.\n\t\t•   We set up automated nightly drift detection pipelines that run `terraform plan -detailed-exitcode` and alert the team via Slack if any manual changes are detected in the portal.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 63,
    "category": "DevOps General",
    "question": "How Do You Secure Secrets?",
    "answer": "“We follow a strict, multi-layered approach to secure secrets (passwords, API keys, certificates) across our environments:\n\n\t1. Centralized Secret Storage:\n\t\t•\tWe use Azure Key Vault (or AWS Secrets Manager) as the single source of truth for all secrets. No secrets are ever hardcoded in the application code, configuration files, or committed to Git.\n\t2. Integration with AKS (Secrets Store CSI Driver):\n\t\t•\tInstead of storing secrets as Kubernetes secret objects in plaintext, we use the Azure Key Vault Secrets Store CSI Driver. This mounts the secrets directly from Key Vault into the application pods as temporary volumes (in-memory tmpfs) or syncs them as Kubernetes secrets.\n\t3. Access Control (RBAC & Managed Identities):\n\t\t•\tWe use Azure AD Workload Identity (or IAM Roles for Service Accounts in AWS) to assign a managed identity to our AKS Pods. The Pods authenticate to Key Vault securely without requiring any credentials.\n\t\t•\tWe enforce the principle of least privilege using Key Vault Access Policies or Azure RBAC, granting only read-only access to specific secrets.\n\t4. Pipeline Security:\n\t\t•\tIn Azure DevOps / Jenkins, we use Service Connections and secret variables. Secret masking is enabled to prevent secrets from being printed in the pipeline console logs.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 64,
    "category": "Linux & Git",
    "question": "Difference Between git fetch and git pull?",
    "answer": "“In Git, both `git fetch` and `git pull` are used to retrieve changes from a remote repository, but they differ in how they apply those changes to your local branch:\n\n\t1. git fetch:\n\t\t•\tWhat it does: Downloads all new data (branches, commits, tags) from the remote repository to your local repository.\n\t\t•\tImpact: It does not modify your working directory or your current local branch. It simply updates your remote-tracking branches (e.g., `origin/main`).\n\t\t•\tSafety: 100% safe. It allows you to inspect the changes using `git log` or `git diff` before merging them.\n\t2. git pull:\n\t\t•\tWhat it does: Performs a `git fetch` followed immediately by a `git merge` (or `git rebase` if configured) to merge the remote changes into your current local branch.\n\t\t•\tImpact: It updates your local working files directly.\n\t\t•\tSafety: Less safe. If there are conflicting changes between your local commits and the remote commits, it will immediately trigger a merge conflict that you must resolve.\n\nSummary:\n`git pull` = `git fetch` + `git merge`\n\nBest Practice:\nI prefer using `git fetch` followed by `git diff origin/main` to review what my teammates have pushed, and then running `git merge` or `git rebase` manually. This prevents accidental merge conflicts and keeps the commit history clean.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 65,
    "category": "Docker & Kubernetes",
    "question": "Difference Between Deployment and StatefulSet?",
    "answer": "“In Kubernetes, both Deployments and StatefulSets are controllers used to manage pods, but they are designed for different types of workloads:\n\n\t1. Deployment:\n\t\t•\tUse Case: Designed for stateless applications (e.g., web servers, frontend apps, stateless APIs).\n\t\t•\tPod Identity: Pods are interchangeable and have random, non-sticky identities (e.g., `web-7f84-abcde`, `web-7f84-fghij`).\n\t\t•\tStorage: All replicas typically share the same persistent volume (if any) or do not require persistent storage at all.\n\t\t•\tScaling: Pods are created and destroyed in parallel, in no particular order.\n\t2. StatefulSet:\n\t\t•\tUse Case: Designed for stateful applications that require unique identities and persistent data (e.g., databases like PostgreSQL, MySQL, MongoDB, or Kafka, Elasticsearch clusters).\n\t\t•\tPod Identity: Pods have a sticky, unique network identifier and a persistent index starting from 0 (e.g., `db-0`, `db-1`, `db-2`).\n\t\t•\tStorage: Each Pod gets its own dedicated Persistent Volume (PV) via a `volumeClaimTemplates`. When a pod is rescheduled, it reconnects to the exact same PV.\n\t\t•\tScaling: Pods are created, updated, and terminated sequentially (e.g., `db-1` is not created until `db-0` is running and healthy).\n\nSummary of Differences:\n| Feature | Deployment | StatefulSet |\n| :--- | :--- | :--- |\n| Workload Type | Stateless (Web Apps, APIs). | Stateful (Databases, Message Queues). |\n| Pod Naming | Random hash suffix (e.g., `app-xyz12`). | Ordinal index (e.g., `mysql-0`, `mysql-1`). |\n| Storage | Shared volume or no volume. | Dedicated volume per Pod (Volume Claim Template). |\n| DNS / Network | Shared service DNS. | Headless service providing unique DNS per Pod (e.g., `mysql-0.db-service`). |\n| Scaling Order | Parallel (fast scaling). | Sequential (one-by-one, ordered). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 66,
    "category": "CI/CD & Pipelines",
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
    "answer": "“I have created and managed multiple Azure resources using Terraform, including:\nCompute:\n\t•\tVirtual Machines \n\t•\tVM Scale Sets \n\t•\tAKS Cluster \nNetworking:\n\t•\tVirtual Networks \n\t•\tSubnets \n\t•\tNSG \n\t•\tLoad Balancer \n\t•\tApplication Gateway \n\t•\tPublic IPs \n\t•\tAzure Firewall \n\t•\tBastion Host \nStorage & Database:\n\t•\tStorage Accounts \n\t•\tAzure SQL \n\t•\tCosmos DB \nSecurity:\n\t•\tAzure Key Vault \n\t•\tRBAC roles \n\t•\tManaged Identities \nDevOps:\n\t•\tAzure Container Registry \n\t•\tMonitoring resources \n\t•\tLog Analytics Workspace \nOthers:\n\t•\tResource Groups \n\t•\tPrivate Endpoints \n\t•\tDNS Zones \n\t•\tAzure Monitor Alerts \nWe managed all these resources using reusable Terraform modules and automated pipelines.”\n\n\nTerraform Best Practices — Interview Answer\n1. Modularize Everything (Don’t write monolithic code)\n“Terraform code should always be modularized instead of writing everything in a single file.\nFor example:\n\t•\tSeparate module for VNet \n\t•\tSeparate module for AKS \n\t•\tSeparate module for Storage Account \n\t•\tSeparate module for VM \nBenefits:\n\t•\tReusability \n\t•\tEasy maintenance \n\t•\tBetter readability \n\t•\tTeam collaboration becomes easier \nIn our project, we maintained separate reusable modules and called them from environment-specific code.”\n\n2. Use Remote State + Locking\n“In production environments, Terraform state should never be stored locally.\nWe used Azure Blob Storage as remote backend storage for Terraform state files.\nBenefits:\n\t•\tCentralized state management \n\t•\tTeam collaboration \n\t•\tPrevents state file loss \n\t•\tBetter security \nWe also enabled state locking to avoid multiple users modifying infrastructure simultaneously.\nIf state gets locked accidentally, we can release it using:\nterraform force-unlock\n```”\n\n---\n\n# 3. Keep Environments Isolated\n\n“We always keep Dev, QA, Stage, and Production environments isolated.\n\nMethods used:\n- Separate subscriptions\n- Separate resource groups\n- Separate backend state files\n- Separate variable files\n- Separate CI/CD pipelines\n\nThis prevents accidental changes in production and improves security and governance.”\n\n---\n\n# 4. Never Hardcode Values\n\n“Hardcoding values is not recommended in Terraform.\n\nInstead, we use:\n- variables.tf\n- terraform.tfvars\n- environment variables\n- Key Vault secrets\n\nExamples:\n- VM sizes\n- Passwords\n- IP ranges\n- Environment names\n\nBenefits:\n- Flexibility\n- Reusability\n- Better security\n- Easier environment management”\n\n---\n\n# 5. Follow Consistent Naming Conventions\n\n“We follow standard naming conventions for all resources.\n\nExample:\n- dev-vnet-eastus\n- prod-aks-cluster\n- qa-storage-account\n\nBenefits:\n- Easy identification\n- Better management\n- Improved readability\n- Simplified troubleshooting”\n\n---\n\n# 6. Use for_each over count\n\n“Generally, for_each is preferred over count.\n\nReason:\n- for_each works with key-value pairs\n- Better resource tracking\n- Easier updates\n- Avoids index-related issues\n\nExample:\nDifferent resource groups with different names can easily be managed using for_each.”\n\n---\n\n# 7. Avoid Provisioners\n\n“Provisioners like:\n- local-exec\n- remote-exec\n\nshould be avoided whenever possible.\n\nReason:\n- Less predictable\n- Difficult to maintain\n- Can cause failures\n\nInstead, we prefer:\n- Cloud-init\n- Custom scripts\n- Configuration management tools\n- CI/CD automation”\n\n---\n\n# 8. Store Secrets Securely\n\n“Secrets should never be stored directly in Terraform code.\n\nWe used:\n- Azure Key Vault\n- Environment variables\n- Secret management systems\n\nExamples:\n- Database passwords\n- API keys\n- Certificates\n\nThis improves security and compliance.”\n\n---\n\n# 9. Use terraform plan before apply\n\n“Before applying any infrastructure changes, we always execute:\n```bash id=\"7jkl8r\"\nterraform plan\nThis helps:\n\t•\tReview changes \n\t•\tIdentify mistakes \n\t•\tPrevent accidental deletion \n\t•\tValidate infrastructure modifications \nIn our pipeline, manual approval was required after the plan stage before production apply.”\n\n10. Enable Version Control (Git)\n“All Terraform code should be stored in Git repositories.\nBenefits:\n\t•\tVersion tracking \n\t•\tTeam collaboration \n\t•\tRollback capability \n\t•\tPull request reviews \n\t•\tCI/CD integration \nWe used branching strategies and pull request approvals before merging Terraform changes.”\n\n11. Pin Provider Versions\n“We always define provider versions explicitly.\nExample:\nrequired_providers {\n  azurerm = {\n    source  = \"hashicorp/azurerm\"\n    version = \"~> 3.0\"\n  }\n}\nBenefits:\n\t•\tPrevents unexpected behavior \n\t•\tEnsures stability \n\t•\tAvoids compatibility issues after upgrades” \n\n12. Use Lifecycle Rules Carefully\n“Terraform lifecycle rules help control resource behavior.\nExamples:\n\t•\tprevent_destroy \n\t•\tignore_changes \n\t•\tcreate_before_destroy \nUse cases:\n\t•\tPrevent accidental deletion of production resources \n\t•\tIgnore dynamic property changes \n\t•\tReduce downtime during updates \nThese should be used carefully because incorrect usage can create infrastructure drift.”\n\n13. Keep Code Clean & Structured\n“Terraform code should always be:\n\t•\tWell organized \n\t•\tProperly indented \n\t•\tCommented \n\t•\tStructured into files \nTypical structure:\n\t•\tmain.tf \n\t•\tvariables.tf \n\t•\toutputs.tf \n\t•\tproviders.tf \n\t•\tbackend.tf \nBenefits:\n\t•\tEasy maintenance \n\t•\tBetter readability \n\t•\tFaster troubleshooting \n\t•\tEasier onboarding for new team members” \n\nInterview Closing Line\n“In our project, we followed these Terraform best practices to maintain scalable, secure, reusable, and production-ready infrastructure. These practices helped us reduce manual errors, improve automation, and maintain consistency across all environments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 76,
    "category": "Azure & Azure DevOps",
    "question": "What are the core services in Azure DevOps?",
    "answer": "“Azure DevOps provides multiple services that help manage the complete software development lifecycle.\nMain services are:\n1. Azure Repos\nUsed for source code management using:\n\t•\tGit \n\t•\tTFVC \nFeatures:\n\t•\tBranching \n\t•\tPull requests \n\t•\tCode reviews \n\t•\tVersion control \n2. Azure Pipelines\nUsed for:\n\t•\tContinuous Integration (CI) \n\t•\tContinuous Delivery/Deployment (CD) \nIt automates:\n\t•\tBuild \n\t•\tTesting \n\t•\tDeployment \n3. Azure Boards\nUsed for project and work tracking:\n\t•\tUser stories \n\t•\tTasks \n\t•\tBugs \n\t•\tSprint planning \n4. Azure Artifacts\nUsed for package management:\n\t•\tnpm \n\t•\tMaven \n\t•\tNuGet \n\t•\tPython packages \n5. Azure Test Plans\nUsed for:\n\t•\tManual testing \n\t•\tTest case management \n\t•\tAutomated testing integration \nOne-line Answer:\nAzure DevOps provides Repos, Pipelines, Boards, Artifacts, and Test Plans for complete DevOps lifecycle management.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 77,
    "category": "CI/CD & Pipelines",
    "question": "What is CI/CD?",
    "answer": "“CI/CD is a DevOps practice that automates software build, testing, and deployment processes.\nCI – Continuous Integration\nDevelopers frequently merge code into a shared repository.\nCI automatically:\n\t•\tBuilds application \n\t•\tRuns unit tests \n\t•\tPerforms code quality checks \nGoal:\nDetect issues early.\nCD – Continuous Delivery / Deployment\nAfter CI success:\n\t•\tApplication gets deployed automatically to environments like Dev, QA, and Production. \nBenefits:\n\t•\tFaster releases \n\t•\tReduced manual work \n\t•\tBetter reliability \nOne-line Answer:\nCI/CD automates build, testing, and deployment processes for faster and reliable software delivery.”\n\nYAML vs Classic Pipeline\n“We can create pipelines in two ways:\nYAML Pipeline\n\t•\tCode-based pipeline \n\t•\tStored in repository \n\t•\tVersion-controlled \n\t•\tSupports templates and reuse \n\t•\tPreferred for modern DevOps \nExample:\ntrigger:\n- main\nClassic Pipeline\n\t•\tUI-based pipeline \n\t•\tEasy for beginners \n\t•\tLimited flexibility \n\t•\tHarder to version control",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 78,
    "category": "DevOps General",
    "question": "Which one do you prefer?",
    "answer": "“I strongly prefer **YAML pipelines** over Classic (UI-based) pipelines in Azure DevOps for several key reasons:\n\n\t1. Pipeline-as-Code: YAML pipelines are stored directly in the Git repository alongside the application code. This means they are version-controlled, support branching, and can be reviewed via Pull Requests (PRs) just like regular code.\n\t2. Reusability: YAML supports templates, allowing us to write a deployment or build step once and reuse it across multiple pipelines and projects, which is not easily possible in Classic pipelines.\n\t3. Multi-Stage Support: A single YAML file can define the entire workflow, including Build, Test, Dev deployment, QA deployment, and Production deployment, making the entire lifecycle visible in one place.\n\t4. Disaster Recovery: If the Azure DevOps project is accidentally deleted, we can restore all our pipelines instantly simply by importing the YAML files from our Git repository.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 79,
    "category": "CI/CD & Pipelines",
    "question": "What is a Self-hosted Agent?",
    "answer": "“A self-hosted agent is an agent installed on our own server or VM to run pipelines.\nWe use self-hosted agents when:\n\t•\tCustom tools are needed \n\t•\tSpecific network access required \n\t•\tSecurity restrictions exist \n\t•\tLarge builds require dedicated resources \nBenefits:\n\t•\tFull control \n\t•\tBetter customization \n\t•\tFaster execution for large workloads \nOne-line Answer:\nSelf-hosted agents run pipelines on our own infrastructure with more control and customization.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 80,
    "category": "CI/CD & Pipelines",
    "question": "What is Microsoft-hosted Agent?",
    "answer": "“Microsoft-hosted agents are managed by Microsoft.\nFeatures:\n\t•\tPreconfigured environments \n\t•\tNo maintenance required \n\t•\tAutomatically provisioned \n\t•\tSupports Windows/Linux/macOS \nBest for:\n\t•\tStandard builds \n\t•\tSmall to medium projects \nLimitation:\n\t•\tLess customization \nOne-line Answer:\nMicrosoft-hosted agents are ready-to-use build environments managed by Microsoft.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 81,
    "category": "DevOps General",
    "question": "What are stages, jobs, and tasks?",
    "answer": "“In Azure DevOps pipeline hierarchy:\nStage\nLogical grouping like:\n\t•\tBuild \n\t•\tTest \n\t•\tDeploy \nJob\nRuns on an agent.\nExample:\n\t•\tLinux job \n\t•\tWindows job \nTask\nIndividual execution step.\nExamples:\n\t•\tRun script \n\t•\tInstall Terraform \n\t•\tBuild Docker image \nHierarchy:\nStage → Job → Task\nOne-line Answer:\nStages organize workflows, jobs run on agents, and tasks perform individual actions.”\n\nAZURE",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 82,
    "category": "Azure & Azure DevOps",
    "question": "What are variables in Azure DevOps?",
    "answer": "“Variables are used to store reusable values in pipelines.\nTypes:\n\t•\tPipeline variables \n\t•\tVariable groups \n\t•\tSecret variables \nExamples:\n\t•\tEnvironment names \n\t•\tResource names \n\t•\tURLs \n\t•\tCredentials \nBenefits:\n\t•\tReusability \n\t•\tCentralized configuration \n\t•\tBetter security \nOne-line Answer:\nVariables store reusable configuration values used across pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 83,
    "category": "CI/CD & Pipelines",
    "question": "How do you secure secrets in pipelines?",
    "answer": "“We never hardcode secrets in pipeline YAML files.\nWe use:\n\t•\tAzure Key Vault \n\t•\tSecret variables \n\t•\tRBAC access control \nExamples of secrets:\n\t•\tPasswords \n\t•\tAPI keys \n\t•\tConnection strings \nWe integrate Azure Key Vault with Azure DevOps pipelines so secrets are fetched securely during runtime.\nOne-line Answer:\nI secure secrets using Azure Key Vault, secret variables, and RBAC permissions.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 84,
    "category": "DevOps General",
    "question": "What is Service Connection?",
    "answer": "“A Service Connection securely connects Azure DevOps to external services like:\n\t•\tAzure subscription \n\t•\tDocker Hub \n\t•\tGitHub \n\t•\tKubernetes clusters \nIt stores authentication details securely.\nExample:\nAzure Resource Manager service connection used for deploying infrastructure to Azure.\nOne-line Answer:\nService Connection securely connects Azure DevOps with external platforms and cloud services.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 85,
    "category": "CI/CD & Pipelines",
    "question": "Pipeline is failing – how do you troubleshoot?",
    "answer": "“My troubleshooting approach is systematic.\nSteps:\n\t•\tCheck pipeline logs \n\t•\tIdentify failed stage/task \n\t•\tVerify: \n\t•\tVariables \n\t•\tService connections \n\t•\tPermissions \n\t•\tAgent availability \n\t•\tEnable debug logging: \nsystem.debug: true\n\t•\tReproduce issue locally if possible \nIf infrastructure-related:\n\t•\tValidate Terraform \n\t•\tCheck Kubernetes events/logs \nOne-line Answer:\nI isolate failures using logs, validate configurations, and debug step-by-step.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 86,
    "category": "Docker & Kubernetes",
    "question": "Deployment failed in production – what will you do?",
    "answer": "“First priority is restoring service quickly.\nSteps:\n\t•\tCheck deployment logs \n\t•\tIdentify root cause \n\t•\tRollback to previous stable version \n\t•\tFix issue in lower environment \n\t•\tValidate changes \n\t•\tRedeploy safely \nWe usually maintain rollback strategies in AKS and CI/CD pipelines.\nOne-line Answer:\nI perform rollback immediately, fix root cause, validate, and redeploy safely.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 87,
    "category": "Docker & Kubernetes",
    "question": "How do you handle zero-downtime deployment?",
    "answer": "“We use deployment strategies like:\nBlue-Green Deployment\n\t•\tTwo environments: \n\t•\tBlue (current) \n\t•\tGreen (new) \n\t•\tTraffic switches after validation \nRolling Updates\n\t•\tGradual pod replacement \n\t•\tNo complete downtime \nWe also:\n\t•\tMonitor application health \n\t•\tUse load balancers \n\t•\tValidate readiness probes \nOne-line Answer:\nI use rolling updates and blue-green deployments for zero downtime.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 88,
    "category": "CI/CD & Pipelines",
    "question": "Pipeline is slow – how to optimize?",
    "answer": "“To optimize pipelines:\n\t•\tEnable caching \n\t•\tUse parallel jobs \n\t•\tRemove unnecessary tasks \n\t•\tOptimize Docker layers \n\t•\tUse lightweight agents \n\t•\tReduce repeated downloads \nWe also split pipelines logically for faster execution.\nOne-line Answer:\nI optimize pipelines using caching, parallel execution, and task optimization.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 89,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement approvals in pipeline?",
    "answer": "“We use:\n\t•\tEnvironment approvals \n\t•\tManual validation tasks \n\t•\tRBAC restrictions \nProduction deployments require manual approval from authorized team members before execution.\nBenefits:\n\t•\tControlled deployment \n\t•\tReduced production risk \nOne-line Answer:\nI use environment-based approvals and validation steps for controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 90,
    "category": "CI/CD & Pipelines",
    "question": "Agent not picking job – why?",
    "answer": "“Possible reasons:\n\t•\tAgent offline \n\t•\tCapability mismatch \n\t•\tIncorrect pool configuration \n\t•\tPermission issue \nTroubleshooting:\n\t•\tCheck agent service status \n\t•\tValidate pool assignment \n\t•\tVerify required capabilities \nOne-line Answer:\nI verify agent health, capabilities, and pool configuration.”\n\nPipeline triggered but not running\n“Common reasons:\n\t•\tTrigger misconfiguration \n\t•\tWrong branch filters \n\t•\tYAML syntax issue \n\t•\tDisabled pipeline \nI check:\n\t•\ttrigger section \n\t•\tbranch filters \n\t•\tpipeline logs \n\t•\tYAML validation \nOne-line Answer:\nI verify triggers, branch filters, and YAML syntax.”\n\nPermission denied error\n“This usually happens because of:\n\t•\tRBAC issue \n\t•\tInvalid service connection \n\t•\tMissing access rights \nSteps:\n\t•\tValidate service connection \n\t•\tCheck Azure IAM roles \n\t•\tVerify Kubernetes RBAC \n\t•\tEnsure resource permissions \nOne-line Answer:\nI resolve permission errors by validating RBAC and service connection access.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 91,
    "category": "CI/CD & Pipelines",
    "question": "How do you design reusable pipelines?",
    "answer": "“We create reusable pipelines using:\n\t•\tYAML templates \n\t•\tShared repositories \n\t•\tParameterized pipelines \nBenefits:\n\t•\tDRY principle \n\t•\tStandardization \n\t•\tEasier maintenance \nExample:\nCommon build template reused across applications.\nOne-line Answer:\nI use YAML templates and parameters to create reusable and scalable pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 92,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement pipeline-as-code best practices?",
    "answer": "“We treat pipelines like application code.\nBest practices:\n\t•\tStore YAML in Git \n\t•\tUse PR reviews \n\t•\tModular templates \n\t•\tNaming standards \n\t•\tVersion control \n\t•\tSeparate environments \nBenefits:\n\t•\tTraceability \n\t•\tAuditability \n\t•\tBetter collaboration \nOne-line Answer:\nI manage pipelines as version-controlled code using templates and reviews.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 93,
    "category": "CI/CD & Pipelines",
    "question": "How do you manage multi-branch pipelines?",
    "answer": "“We configure branch-based triggers.\nExamples:\n\t•\tfeature/* \n\t•\tdevelop \n\t•\tmain \nWe also:\n\t•\tEnable PR validation \n\t•\tUse separate deployment rules \n\t•\tApply environment-specific approvals \nOne-line Answer:\nI use branch filters and PR validation for managing multi-branch pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 94,
    "category": "CI/CD & Pipelines",
    "question": "How would you migrate on-prem CI/CD to Azure DevOps?",
    "answer": "“Migration approach:\n\t•\tAnalyze existing setup \n\t•\tMove repositories to Azure Repos \n\t•\tRebuild pipelines in YAML \n\t•\tConfigure agents \n\t•\tMigrate gradually \nWe avoid big-bang migration and move incrementally to reduce risks.\nOne-line Answer:\nI migrate incrementally using YAML pipelines with minimal business disruption.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 95,
    "category": "DevOps General",
    "question": "How do you handle secrets leakage incident?",
    "answer": "“Immediate actions:\n\t•\tRotate credentials \n\t•\tRevoke compromised access \n\t•\tAudit logs \n\t•\tIdentify root cause \n\t•\tStrengthen security policies \nPreventive measures:\n\t•\tKey Vault \n\t•\tSecret scanning \n\t•\tRBAC \nOne-line Answer:\nI handle secret leakage using credential rotation, access revocation, and security audits.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 96,
    "category": "Behavioral & Project",
    "question": "What challenges did you face in project?",
    "answer": "“Some challenges we faced:\n\t•\tPipeline failures \n\t•\tEnvironment mismatch \n\t•\tDeployment downtime \n\t•\tSecret management \n\t•\tSlow pipelines \nSolutions:\n\t•\tVariable groups + Key Vault \n\t•\tBlue-green deployments \n\t•\tPipeline optimization \n\t•\tBetter monitoring \n\t•\tStandardized environments \nOne-line Answer:\nI solved deployment, security, and pipeline issues using automation and DevOps best practices.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 97,
    "category": "CI/CD & Pipelines",
    "question": "Describe your CI/CD pipeline flow",
    "answer": "“Our pipeline flow:\n\t•\tDeveloper pushes code \n\t•\tCI pipeline triggers \n\t•\tBuild application \n\t•\tRun tests \n\t•\tSonarQube analysis \n\t•\tBuild Docker image \n\t•\tVulnerability scanning \n\t•\tPush image to ACR \n\t•\tCD deployment: \n\t•\tDev \n\t•\tQA \n\t•\tProduction \n\t•\tManual approval before production \nOne-line Answer:\nMy CI/CD pipeline automates build, testing, security scanning, and controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 98,
    "category": "Docker & Kubernetes",
    "question": "Difference between Continuous Delivery vs Continuous Deployment",
    "answer": "Continuous Delivery\nDeployment requires manual approval before production.\nContinuous Deployment\nProduction deployment happens automatically without manual intervention.\nOne-line Answer:\nContinuous Delivery requires approval; Continuous Deployment is fully automated.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 99,
    "category": "CI/CD & Pipelines",
    "question": "Why YAML pipelines over Classic?",
    "answer": "“Advantages of YAML:\n\t•\tVersion-controlled \n\t•\tReusable \n\t•\tScalable \n\t•\tTemplate support \n\t•\tEasier automation \nThat’s why most modern projects prefer YAML pipelines.\nOne-line Answer:\nYAML pipelines are flexible, reusable, scalable, and version-controlled.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 100,
    "category": "CI/CD & Pipelines",
    "question": "How do you integrate Terraform in pipeline?",
    "answer": "“We automate infrastructure provisioning using Terraform in CI/CD pipelines.\nPipeline flow:\n\t•\tInstall Terraform \n\t•\tRun terraform init \n\t•\tRun terraform plan \n\t•\tSecurity scan using tfsec \n\t•\tManual approval \n\t•\tRun terraform apply \nState file stored securely in Azure Blob Storage backend.\nOne-line Answer:\nI automate infrastructure deployment using Terraform integrated into Azure DevOps pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 101,
    "category": "Azure & Azure DevOps",
    "question": "What are Azure Service Models?",
    "answer": "“Azure provides three main cloud service models based on how much control and responsibility the customer wants.\n1. IaaS (Infrastructure as a Service)\nAzure provides infrastructure like:\n\t•\tVirtual Machines \n\t•\tNetworking \n\t•\tStorage \nCustomer manages:\n\t•\tOS \n\t•\tApplications \n\t•\tRuntime \n\t•\tSecurity patches \nExamples:\n\t•\tAzure VM \n\t•\tVirtual Network \n\t•\tLoad Balancer \nBest for:\n\t•\tLift-and-shift migration \n\t•\tFull infrastructure control \n\n2. PaaS (Platform as a Service)\nAzure manages:\n\t•\tInfrastructure \n\t•\tOS \n\t•\tRuntime \nCustomer manages:\n\t•\tApplication \n\t•\tData \nExamples:\n\t•\tAzure App Service \n\t•\tAzure SQL Database \nBenefits:\n\t•\tFaster development \n\t•\tLess maintenance \n\n3. SaaS (Software as a Service)\nEverything managed by provider.\nUsers only consume software.\nExamples:\n\t•\tOffice 365 \n\t•\tOutlook \n\t•\tTeams \n\nOne-line Answer:\nAzure service models define control levels: IaaS gives maximum control, PaaS provides managed platforms, and SaaS delivers ready-to-use software.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 102,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Active Directory?",
    "answer": "“Azure Active Directory (Azure AD) is Microsoft’s cloud-based identity and access management service.\nIt provides:\n\t•\tAuthentication \n\t•\tAuthorization \n\t•\tSingle Sign-On (SSO) \n\t•\tMulti-Factor Authentication (MFA) \nUses:\n\t•\tUser login management \n\t•\tSecure application access \n\t•\tRBAC integration \nExample:\nUsers can login once and access multiple applications securely.\nOne-line Answer:\nAzure AD securely manages user identity, authentication, and access control.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 103,
    "category": "Azure & Azure DevOps",
    "question": "What is NSG?",
    "answer": "“NSG stands for Network Security Group.\nIt acts like a firewall that controls:\n\t•\tInbound traffic \n\t•\tOutbound traffic \nRules are based on:\n\t•\tSource IP \n\t•\tDestination IP \n\t•\tPort \n\t•\tProtocol \nNSG can be attached to:\n\t•\tSubnets \n\t•\tNetwork Interfaces \nExample:\nAllow port 80 and block port 22 from public internet.\nOne-line Answer:\nNSG controls inbound and outbound traffic using security rules.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 104,
    "category": "Azure & Azure DevOps",
    "question": "What is RBAC?",
    "answer": "“RBAC stands for Role-Based Access Control.\nIt controls who can:\n\t•\tAccess resources \n\t•\tPerform actions \nExamples of roles:\n\t•\tOwner \n\t•\tContributor \n\t•\tReader \nBenefits:\n\t•\tLeast privilege access \n\t•\tBetter security \n\t•\tControlled permissions \nExample:\nDeveloper gets Contributor access only to Dev resource group.\nOne-line Answer:\nRBAC controls access to Azure resources based on assigned roles.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 105,
    "category": "Azure & Azure DevOps",
    "question": "What is Load Balancer?",
    "answer": "“Azure Load Balancer distributes incoming traffic across multiple servers or VMs.\nBenefits:\n\t•\tHigh availability \n\t•\tFault tolerance \n\t•\tBetter performance \nIt works at:\n\t•\tLayer 4 (TCP/UDP) \nUse cases:\n\t•\tVM traffic distribution \n\t•\tBackend server balancing \nOne-line Answer:\nLoad Balancer distributes traffic across multiple resources for high availability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 106,
    "category": "DevOps General",
    "question": "What is VPN Gateway?",
    "answer": "“Azure VPN Gateway securely connects:\n\t•\tOn-premises datacenter \n\t•\tRemote users \n\t•\tAzure VNets \nTypes:\n\t•\tSite-to-Site VPN \n\t•\tPoint-to-Site VPN \nTraffic is encrypted over internet.\nOne-line Answer:\nVPN Gateway securely connects on-premises environments to Azure.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 107,
    "category": "DevOps General",
    "question": "What is Availability Set?",
    "answer": "“Availability Set improves VM uptime and availability.\nIt protects against:\n\t•\tHardware failure \n\t•\tPlanned maintenance \nUses:\n\t•\tFault Domains \n\t•\tUpdate Domains \nThis ensures all VMs don’t go down together.\nOne-line Answer:\nAvailability Set improves VM availability during failures and maintenance.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 108,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Scale Set?",
    "answer": "“Azure VM Scale Set manages multiple identical VMs automatically.\nFeatures:\n\t•\tAuto scaling \n\t•\tLoad balancing \n\t•\tHigh availability \nScaling based on:\n\t•\tCPU \n\t•\tMemory \n\t•\tCustom metrics \nBest for:\n\t•\tWeb applications \n\t•\tLarge workloads \nOne-line Answer:\nScale Set automatically scales and manages multiple VM instances.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 109,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Application Gateway?",
    "answer": "“Application Gateway is a Layer 7 load balancer.\nFeatures:\n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tWeb Application Firewall (WAF) \n\t•\tSession affinity \nBest for:\n\t•\tWeb applications \n\t•\tHTTP/HTTPS traffic \nOne-line Answer:\nApplication Gateway is a Layer 7 load balancer with intelligent routing and WAF support.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 110,
    "category": "Azure & Azure DevOps",
    "question": "Difference between Load Balancer vs Application Gateway",
    "answer": "Load Balancer\nApplication Gateway\nLayer 4\nLayer 7\nTCP/UDP traffic\nHTTP/HTTPS traffic\nBasic traffic distribution\nIntelligent routing\nNo WAF\nSupports WAF\nOne-line Answer:\nLoad Balancer works at Layer 4, while Application Gateway works at Layer 7 with advanced routing.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 111,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Functions?",
    "answer": "“Azure Functions is a serverless compute service.\nFeatures:\n\t•\tEvent-driven execution \n\t•\tPay-per-use \n\t•\tNo server management \nTriggers:\n\t•\tHTTP \n\t•\tTimer \n\t•\tBlob storage \n\t•\tQueue messages \nOne-line Answer:\nAzure Functions executes code without managing servers.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 112,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Key Vault?",
    "answer": "“Azure Key Vault securely stores:\n\t•\tSecrets \n\t•\tPasswords \n\t•\tCertificates \n\t•\tEncryption keys \nBenefits:\n\t•\tCentralized secret management \n\t•\tRBAC integration \n\t•\tSecure CI/CD integration \nUsed in:\n\t•\tTerraform \n\t•\tAzure DevOps pipelines \n\t•\tAKS \nOne-line Answer:\nKey Vault securely stores and manages secrets, keys, and certificates.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 113,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Site Recovery (ASR)?",
    "answer": "“Azure Site Recovery is a disaster recovery solution.\nFeatures:\n\t•\tWorkload replication \n\t•\tFailover support \n\t•\tBusiness continuity \nIt replicates workloads to another region for recovery during disaster.\nOne-line Answer:\nASR provides disaster recovery through workload replication and failover.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 114,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Bastion?",
    "answer": "“Azure Bastion is a fully managed Platform-as-a-Service (PaaS) that provides secure, seamless Remote Desktop Protocol (RDP) and Secure Shell (SSH) access to your virtual machines directly over SSL/TLS:\n\n\t1. No Public IPs: With Azure Bastion, your virtual machines do not need public IP addresses, nor do you need to expose ports 3389 (RDP) or 22 (SSH) to the public internet. This drastically reduces the attack surface of your network.\n\t2. Web-Based Access: Users can log into their VMs directly through the Azure Portal using any modern web browser. No special client software or VPN is required.\n\t3. Integrated Security: Traffic is encrypted using HTTPS (port 443), and it integrates natively with Azure AD/Entra ID for multi-factor authentication (MFA) and conditional access policies.\n\t4. Bastion Host vs. Jumpbox: Unlike a traditional jumpbox VM (which requires manual OS patching, monitoring, and firewall configuration), Azure Bastion is a serverless, managed service that scales automatically and requires zero maintenance.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 115,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Front Door?",
    "answer": "“Azure Front Door is a global Layer 7 load balancer.\nFeatures:\n\t•\tGlobal routing \n\t•\tCDN integration \n\t•\tSSL offloading \n\t•\tWAF support \n\t•\tLow latency routing \nBest for:\n\t•\tGlobal applications \nOne-line Answer:\nAzure Front Door provides global traffic routing with low latency and high availability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 116,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Traffic Manager?",
    "answer": "“Traffic Manager is a DNS-based traffic routing service.\nRouting methods:\n\t•\tPriority \n\t•\tPerformance \n\t•\tGeographic \n\t•\tWeighted \nBest for:\n\t•\tMulti-region applications \nOne-line Answer:\nTraffic Manager distributes global traffic using DNS-based routing.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 117,
    "category": "DevOps General",
    "question": "What is Managed Identity?",
    "answer": "“Managed Identity provides Azure resources with identities to access other services securely.\nBenefits:\n\t•\tNo credential storage \n\t•\tAutomatic credential management \n\t•\tIntegrated with Azure AD \nUsed for:\n\t•\tAccessing Key Vault \n\t•\tDatabase authentication \nOne-line Answer:\nManaged Identity securely accesses Azure services without storing credentials.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 118,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Policy?",
    "answer": "“Azure Policy enforces governance and compliance rules.\nExamples:\n\t•\tRestrict VM sizes \n\t•\tEnforce tagging \n\t•\tDeny public IPs \nActions:\n\t•\tAudit \n\t•\tDeny \n\t•\tAppend \nOne-line Answer:\nAzure Policy enforces governance and compliance rules across Azure resources.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 119,
    "category": "DevOps General",
    "question": "What is Private Endpoint?",
    "answer": "“Private Endpoint assigns a private IP to Azure services within a VNet.\nBenefits:\n\t•\tNo public internet exposure \n\t•\tSecure communication \n\t•\tBetter compliance \nUsed for:\n\t•\tStorage Accounts \n\t•\tSQL Databases \n\t•\tKey Vault \nOne-line Answer:\nPrivate Endpoint securely connects Azure services through private IP addresses.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 120,
    "category": "DevOps General",
    "question": "Difference between Service Endpoint vs Private Endpoint",
    "answer": "“In Azure, both Service Endpoints and Private Endpoints are used to secure connectivity to PaaS services (like Storage Accounts or SQL Databases), but they differ fundamentally in how they route traffic and assign IP addresses:\n\n\t1. Azure Service Endpoint:\n\t\t•   How it works: Extends your virtual network's private address space to the PaaS service. The PaaS resource still uses its public IP address, but the firewall is configured to only accept traffic originating from your specific VNet subnet.\n\t\t•   Traffic Routing: Traffic remains on the Microsoft backbone network (does not go over the public internet), but the destination IP is public.\n\t\t•   Cost: Free.\n\n\t2. Azure Private Endpoint:\n\t\t•   How it works: Creates a network interface (NIC) inside your subnet and assigns it a private IP address from your VNet range. The PaaS service is now accessible via this private IP.\n\t\t•   Traffic Routing: Completely private. It disables all public access to the PaaS service, ensuring that traffic never leaves your private virtual network.\n\t\t•   Cost: Charged based on data processed and hourly resource usage.\n\nSummary of Differences:\n| Feature | Service Endpoint | Private Endpoint |\n| :--- | :--- | :--- |\n| IP Address | Uses the public IP of the PaaS service. | Uses a private IP from your VNet subnet. |\n| Public Access | Public endpoint remains active (restricted by firewall). | Public endpoint is completely disabled. |\n| On-Premises Access | Cannot be accessed over VPN/ExpressRoute easily. | Can be accessed securely over VPN/ExpressRoute. |\n| Security Level | High (restricts traffic to VNet). | Maximum (fully private network interface). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 121,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Landing Zone?",
    "answer": "“Landing Zone is a preconfigured Azure environment designed using best practices.\nIncludes:\n\t•\tNetworking \n\t•\tSecurity \n\t•\tGovernance \n\t•\tIdentity management \nBuilt using:\n\t•\tTerraform \n\t•\tARM \n\t•\tBicep \nOne-line Answer:\nLanding Zone provides a secure and scalable Azure foundation.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 122,
    "category": "DevOps General",
    "question": "What is Zero Trust Security?",
    "answer": "“Zero Trust follows:\n‘Never trust, always verify.’\nPrinciples:\n\t•\tIdentity verification \n\t•\tLeast privilege access \n\t•\tContinuous monitoring \nUsed with:\n\t•\tMFA \n\t•\tConditional Access \n\t•\tRBAC \nOne-line Answer:\nZero Trust verifies every access request before granting permissions.”\n\nEvent Hub vs Service Bus\nEvent Hub\nService Bus\nStreaming platform\nMessaging platform\nHigh throughput\nGuaranteed delivery\nTelemetry data\nEnterprise messaging\nOne-line Answer:\nEvent Hub handles streaming data, while Service Bus handles reliable messaging.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 123,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Firewall?",
    "answer": "“Azure Firewall is a managed network security service.\nFeatures:\n\t•\tTraffic filtering \n\t•\tThreat intelligence \n\t•\tLogging \n\t•\tCentralized control \nSupports:\n\t•\tApplication rules \n\t•\tNetwork rules \nOne-line Answer:\nAzure Firewall protects Azure resources by filtering network traffic.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 124,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Disk Types?",
    "answer": "“Azure provides multiple disk types:\nStandard HDD\n\t•\tLow cost \n\t•\tBasic workloads \nStandard SSD\n\t•\tBalanced performance \nPremium SSD\n\t•\tHigh-performance applications \nUltra Disk\n\t•\tExtremely high IOPS \nOne-line Answer:\nAzure offers multiple disk types based on cost and performance requirements.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 125,
    "category": "DevOps General",
    "question": "Difference between Availability Zone vs Region Pair",
    "answer": "“Azure provides different levels of redundancy to protect applications from localized failures and major disasters:\n\n\t1. Availability Zone (High Availability):\n\t\t•   What it is: Unique physical locations within the *same* Azure region. Each zone is made up of one or more datacenters equipped with independent power, cooling, and networking.\n\t\t•   Purpose: Protects against datacenter-level failures (e.g., a power outage in one building).\n\t\t•   Latency: Extremely low latency (typically < 2ms) because zones are close to each other, allowing synchronous replication.\n\n\t2. Region Pair (Disaster Recovery):\n\t\t•   What it is: A relationship between two Azure regions within the same geography (e.g., East US and West US), located at least 300 miles apart.\n\t\t•   Purpose: Protects against large-scale regional disasters (e.g., natural disasters, widespread power grid failures).\n\t\t•   Latency: Higher latency due to the physical distance, requiring asynchronous replication (e.g., GRS storage).\n\nSummary of Differences:\n| Feature | Availability Zone | Region Pair |\n| :--- | :--- | :--- |\n| Location | Inside the same Azure region. | Two separate regions (min. 300 miles apart). |\n| Primary Use | High Availability (HA) for active-active workloads. | Disaster Recovery (DR) and business continuity. |\n| Replication | Synchronous (no data loss). | Asynchronous (potential minimal data loss). |\n| Cost | Free (except for minimal inter-zone data transfer fees). | Higher cost (requires running resources in a second region). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 126,
    "category": "DevOps General",
    "question": "What is ExpressRoute?",
    "answer": "“ExpressRoute provides private connectivity between:\n\t•\tOn-premises datacenter \n\t•\tAzure \nBenefits:\n\t•\tFaster connection \n\t•\tMore secure \n\t•\tNo internet exposure \nUsed by enterprises requiring dedicated connectivity.\nOne-line Answer:\nExpressRoute provides private, secure, and high-speed Azure connectivity.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 127,
    "category": "DevOps General",
    "question": "How do you design highly available architecture?",
    "answer": "“We use:\n\t•\tAvailability Zones \n\t•\tMultiple instances \n\t•\tLoad Balancers \n\t•\tAuto scaling \n\t•\tBackup and disaster recovery \nGoal:\nAvoid single point of failure.\nOne-line Answer:\nHigh availability is achieved using redundancy, load balancing, and failover mechanisms.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 128,
    "category": "DevOps General",
    "question": "How do you design scalable architecture?",
    "answer": "“To design a highly scalable and resilient architecture in the cloud, I follow these key architectural patterns and Azure services:\n\n\t1. Stateless Application Design: Ensure application servers do not store session state locally. Session data should be stored in a centralized, fast caching layer like **Azure Cache for Redis** so that any instance can handle any user request.\n\t2. Horizontal Auto-Scaling: Use **Virtual Machine Scale Sets (VMSS)** or **Azure Kubernetes Service (AKS)** with Horizontal Pod Autoscaler (HPA) to dynamically add or remove instances based on real-time CPU, memory, or request queue metrics.\n\t3. Global Load Balancing & Caching: Use **Azure Front Door** or **Azure Traffic Manager** to route global users to the nearest healthy region, and leverage Content Delivery Networks (CDN) to cache static assets close to users, reducing the load on backend servers.\n\t4. Database Scalability: Use read-replicas to offload read traffic from the primary database, and implement database sharding or autoscale throughput (such as Azure SQL Serverless or Cosmos DB autoscale) to handle peak write loads.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 129,
    "category": "Azure & Azure DevOps",
    "question": "How do you secure Azure resources?",
    "answer": "“Securing Azure resources requires a multi-layered 'Defense in Depth' security strategy across identity, networking, storage, and monitoring:\n\n\t1. Identity and Access Management (IAM): Enforce the principle of least privilege using **Azure Role-Based Access Control (RBAC)**. Disable access keys where possible and use **Managed Identities** (System-assigned or User-assigned) so resources can authenticate securely without hardcoded credentials.\n\t2. Network Isolation: Deploy resources inside isolated **Virtual Networks (VNets)**. Block all public internet access to databases and backend APIs by using **Private Endpoints** and **Azure Bastion** for secure administrative access.\n\t3. Firewall & Traffic Filtering: Configure **Network Security Groups (NSGs)** at the subnet level to restrict inbound and outbound traffic, and deploy **Azure Application Gateway with Web Application Firewall (WAF)** to protect web apps from common exploits (SQL injection, XSS).\n\t4. Data Protection & Secrets: Enable encryption at rest and in transit for all Storage Accounts and SQL databases. Store all certificates, keys, and connection strings securely in **Azure Key Vault**.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 130,
    "category": "DevOps General",
    "question": "What is fault domain vs update domain?",
    "answer": "“In Azure, Fault Domains and Update Domains are logical groupings used within Availability Sets to ensure high availability and prevent single points of failure during hardware issues or maintenance:\n\n\t1. Fault Domain (Physical Isolation):\n\t\t•   What it is: A group of VMs that share a common physical power source and network switch (essentially, a physical server rack in the datacenter).\n\t\t•   Purpose: Protects against unexpected hardware, power, or network failures. If a rack fails, only VMs in that specific fault domain are affected.\n\t\t•   Action: Azure automatically distributes VMs in an Availability Set across multiple fault domains (usually 2 or 3).\n\n\t2. Update Domain (Planned Maintenance):\n\t\t•   What it is: A group of VMs and underlying physical hardware that can be rebooted or patched at the same time.\n\t\t•   Purpose: Protects against downtime during planned Azure platform updates.\n\t\t•   Action: When a patch is applied, Azure reboots VMs in one update domain at a time, waiting for them to recover before moving to the next domain (usually configured up to 20 update domains).\n\nSummary:\n* **Fault Domains** protect against *unplanned* hardware failures (rack level).\n* **Update Domains** protect against *planned* maintenance reboots (sequential patching).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 131,
    "category": "DevOps General",
    "question": "What is Hub-Spoke Architecture?",
    "answer": "“In Hub-Spoke architecture:\nHub\nContains shared services:\n\t•\tFirewall \n\t•\tVPN \n\t•\tDNS \nSpoke\nContains application VNets.\nBenefits:\n\t•\tCentralized security \n\t•\tBetter scalability \nOne-line Answer:\nHub-Spoke centralizes networking and improves security and scalability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 132,
    "category": "Terraform (IaC)",
    "question": "What is Terraform State & why is it critical?",
    "answer": "“Terraform state is a file that stores the current mapping between Terraform configuration and real infrastructure resources.\nWhenever Terraform creates infrastructure, it stores resource details inside the state file.\nThe state file contains:\n\t•\tResource IDs \n\t•\tMetadata \n\t•\tDependencies \n\t•\tCurrent infrastructure status \nTerraform compares:\n\t•\tDesired configuration\nvs \n\t•\tCurrent state \nto determine:\n\t•\tWhat to create \n\t•\tWhat to update \n\t•\tWhat to delete \nWithout state, Terraform cannot properly track infrastructure.\nFor example:\nIf a VM already exists but Terraform has no state information, Terraform may try to create the same VM again.\nThat’s why state is extremely critical in Terraform.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 133,
    "category": "Terraform (IaC)",
    "question": "Why Terraform State is Important",
    "answer": "1. Infrastructure Tracking\nTerraform knows which resources it manages.\n2. Change Detection\nTerraform identifies infrastructure drift and required modifications.\n3. Dependency Management\nTerraform maintains resource relationships and execution order.\n4. Performance Optimization\nTerraform does not query every resource every time.\n5. Collaboration\nRemote state allows teams to work together safely.\n\nRemote State Best Practice\n“In production, we never store state locally.\nWe store Terraform state in:\n\t•\tAzure Blob Storage \n\t•\tS3 bucket \n\t•\tTerraform Cloud \nWe also enable:\n\t•\tState locking \n\t•\tVersioning \n\t•\tBackup \nThis prevents corruption and concurrent modifications.”\n\nOne-line Answer\n“Terraform state is the source of truth that Terraform uses to track and manage infrastructure resources.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 134,
    "category": "Terraform (IaC)",
    "question": "What if your Terraform state file is deleted?",
    "answer": "“If the Terraform state file gets deleted, Terraform loses track of all infrastructure resources.\nThe infrastructure may still exist in Azure or cloud provider, but Terraform will no longer know it manages those resources.\nAs a result:\n\t•\tTerraform may try to recreate existing resources \n\t•\tDuplicate resources may be created \n\t•\tConflicts and deployment failures can happen \nThat’s why state backup is very important.”\n\nRecovery Methods\nScenario 1: Remote Backend with Backup\n“If remote backend versioning is enabled:\n\t•\tRestore previous state version \n\t•\tContinue normal operations \nExample:\nAzure Blob Storage versioning or S3 versioning.”\n\nScenario 2: No Backup Available\n“We rebuild the state using:\nterraform import\nTerraform import maps existing infrastructure into Terraform state manually.”\nExample:\nterraform import azurerm_resource_group.rg my-rg\n\nBest Practices to Prevent State Loss\n\t•\tUse remote backend \n\t•\tEnable versioning \n\t•\tEnable state locking \n\t•\tRestrict access \n\t•\tTake backups regularly \n\nOne-line Answer\n“If the state file is deleted, Terraform loses infrastructure tracking and may try to recreate existing resources.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 135,
    "category": "Terraform (IaC)",
    "question": "What are Terraform Workspaces?",
    "answer": "“Terraform Workspaces allow multiple state files using the same Terraform configuration.\nEach workspace maintains:\n\t•\tSeparate state \n\t•\tSeparate infrastructure \nThis is useful for environments like:\n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction \nDefault workspace name:\ndefault\nExample:\nSame Terraform code can create:\n\t•\tDev infrastructure in one workspace \n\t•\tProduction infrastructure in another workspace \nwithout changing the code.”\n\nWorkspace Commands\nCreate Workspace\nterraform workspace new dev\nSwitch Workspace\nterraform workspace select prod\nList Workspaces\nterraform workspace list\n\nBenefits of Workspaces\n\t•\tEnvironment isolation \n\t•\tReusability \n\t•\tSimplified management \n\t•\tSeparate state tracking \n\nLimitation\n“For large enterprise projects, separate folders and separate backend configurations are usually preferred over only workspaces.”\n\nOne-line Answer\n“Terraform workspaces allow multiple isolated state files using the same Terraform code.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 136,
    "category": "DevOps General",
    "question": "How do you manage multiple environments (Dev/Stage/Prod)?",
    "answer": "“In real projects, we manage multiple environments carefully to avoid conflicts and maintain isolation.\nWe usually use:\n\t•\tSeparate folders \n\t•\tSeparate variable files \n\t•\tSeparate backend state files \n\t•\tSeparate subscriptions/resource groups \nfor:\n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction” \n\nOur Approach\n1. Separate Variable Files\nExample:\n\t•\tdev.tfvars \n\t•\tqa.tfvars \n\t•\tprod.tfvars \nEach file contains environment-specific values.\n\n2. Separate State Files\nEach environment has:\n\t•\tIndependent backend \n\t•\tSeparate state management \nThis avoids accidental production impact.\n\n3. Resource Naming Convention\nExamples:\n\t•\tdev-vnet \n\t•\tqa-aks \n\t•\tprod-storage \nThis improves readability and management.\n\n4. CI/CD Integration\n“We use Azure DevOps pipelines for controlled deployments.\nProduction deployment requires:\n\t•\tApproval \n\t•\tValidation \n\t•\tSecurity checks” \n\n5. Environment Isolation\nWe isolate:\n\t•\tNetworking \n\t•\tAccess control \n\t•\tMonitoring \n\t•\tSecrets \nfor each environment.\n\nOne-line Answer\n“I manage multiple environments using separate state files, variable files, naming conventions, and CI/CD-controlled deployments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 137,
    "category": "DevOps General",
    "question": "Difference between count, for_each, and dynamic",
    "answer": "1. count\n“count is used for creating multiple similar resources using numeric indexing.”\nExample:\ncount = 3\nResources created:\n\t•\tVM[0] \n\t•\tVM[1] \n\t•\tVM[2] \nBest Use Case\nWhen resources are almost identical.\nLimitation\nIndex-based tracking can cause issues if order changes.\n\n2. for_each\n“for_each is used for looping through:\n\t•\tMaps \n\t•\tSets \n\t•\tKey-value pairs \nIt provides better resource identification.”\nExample:\nfor_each = toset([\"dev\",\"qa\",\"prod\"])\nBenefits:\n\t•\tBetter flexibility \n\t•\tEasier updates \n\t•\tStable resource tracking \nBest Use Case\nWhen resources have unique names/configurations.\n\n3. dynamic\n“dynamic blocks are used to generate nested configuration blocks dynamically.”\nUsed when:\n\t•\tNested blocks repeat \n\t•\tConfiguration changes dynamically \nExample use cases:\n\t•\tMultiple security rules \n\t•\tMultiple disks \n\t•\tMultiple ingress rules \n\nComparison Table\nFeature\ncount\nfor_each\ndynamic\nWorks with\nNumbers\nMaps/Sets\nNested blocks\nTracking\nIndex-based\nKey-based\nDynamic generation\nFlexibility\nLow\nHigh\nVery High\nBest for\nSimilar resources\nUnique resources\nNested configurations\n\nOne-line Answer\n“count is index-based looping, for_each is key-based looping, and dynamic is used for generating nested blocks dynamically.”\nScenario-Based DevOps / Cloud Interview Questions & Answers",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 138,
    "category": "Terraform (IaC)",
    "question": "If You Need to Create 100 VMs in Multiple Regions, What Approach Will You Use?",
    "answer": "For large-scale VM deployment, I would use:\n\t•\tTerraform \n\t•\tfor_each \n\t•\treusable modules \n\t•\tregion-based architecture \nExample Strategy\n\t•\t100 VMs in West Europe \n\t•\t100 VMs in Central US \nBest Practices\n\t•\tSeparate VNets per region \n\t•\tGlobal VNet Peering \n\t•\tReusable Terraform modules \n\t•\tSeparate Terraform state files \nCommunication Between Regions\nUse:\n\t•\tGlobal VNet Peering \n\t•\tAzure backbone network \n\t•\tPrivate communication",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 139,
    "category": "DevOps General",
    "question": "How Will You Reduce Latency Between Multi-Region VMs?",
    "answer": "Best Practices\n\t•\tKeep workloads regional \n\t•\tUse local database/cache \n\t•\tAvoid synchronous cross-region calls \n\t•\tUse async communication \n\t•\tUse Redis caching \n\t•\tUse Azure Front Door \nNetworking\n\t•\tGlobal VNet Peering \n\t•\tAccelerated networking \nArchitecture\nUsers\n   │\nAzure Front Door\n   │\n ├── Europe Region\n └── US Region",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 140,
    "category": "Azure & Azure DevOps",
    "question": "How Do You Manage Secrets in Azure?",
    "answer": "“We manage secrets, credentials, and API keys in Azure by centralizing them in **Azure Key Vault** and enforcing secure access patterns:\n\n\t1. Zero Hardcoded Secrets: No passwords or connection strings are stored in code, variables, or committed to Git. All secrets are stored in Azure Key Vault.\n\t2. Passwordless Authentication: We use **Managed Identities** (System-assigned or User-assigned) for our Azure resources (like VMs or AKS pods). This allows them to authenticate to Key Vault using Azure AD/Entra ID tokens, eliminating the need to store a client secret or password in the application configuration.\n\t3. Network Isolation: We restrict access to the Key Vault by disabling public network access and configuring a **Private Endpoint**, ensuring it is only accessible from within our private Virtual Network.\n\t4. Granular Access Control: We use Azure RBAC (Key Vault Secrets User role) to grant read-only access to specific identities, and enable **Soft Delete** and **Purge Protection** to prevent accidental deletion of critical secrets.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 141,
    "category": "Terraform (IaC)",
    "question": "Explain Full Terraform Key Vault Setup",
    "answer": "“A secure, production-grade Terraform setup for Azure Key Vault involves provisioning the vault, configuring network rules, and setting up access policies:\n\n\t1. Key Vault Provisioning:\n\t   We define the `azurerm_key_vault` resource, enabling features like soft delete, purge protection, and specifying the SKU (Standard or Premium).\n\t2. Access Policy or RBAC:\n\t   We use `azurerm_role_assignment` to assign the 'Key Vault Secrets Officer' role to our deployment service principal, and 'Key Vault Secrets User' to our application's Managed Identity.\n\t3. Network Rules:\n\t   We restrict access by defining `network_acls` inside the Key Vault resource, setting the default action to `Deny` and bypassing only trusted Microsoft services and specific subnets.\n\nExample Terraform Code:\n```hcl\nresource \"azurerm_key_vault\" \"kv\" {\n  name                        = \"prod-kv-enterprise\"\n  location                    = var.location\n  resource_group_name         = var.rg_name\n  tenant_id                   = data.azurerm_client_config.current.tenant_id\n  sku_name                    = \"standard\"\n  soft_delete_retention_days  = 7\n  purge_protection_enabled    = true\n\n  network_acls {\n    default_action             = \"Deny\"\n    bypass                     = \"AzureServices\"\n    virtual_network_subnet_ids = [var.private_subnet_id]\n  }\n}\n```”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 142,
    "category": "Terraform (IaC)",
    "question": "If One Resource Needs to Be Deleted in Terraform, How Will You Do It?",
    "answer": "“If I need to delete a specific resource managed by Terraform, I can use three primary approaches depending on the situation:\n\n\t1. The Standard/Clean Method (Recommended):\n\t\t•\tRemove the resource block (or module call) from the Terraform configuration files (`.tf`).\n\t\t•\tRun `terraform plan` to verify that Terraform intends to destroy only that specific resource.\n\t\t•\tRun `terraform apply` to execute the deletion.\n\t2. The Targeted Destroy Method (For Emergency/Temporary Deletions):\n\t\t•\tRun the targeted destroy command:\n\t\t  `terraform destroy -target=azurerm_virtual_machine.my_vm`\n\t\t•\tNote: Use this with caution, as it leaves the resource block in your code, meaning the next time anyone runs `terraform apply`, the resource will be recreated.\n\t3. The State Exclusion Method (To delete from Terraform management without destroying the physical resource):\n\t\t•\tRun `terraform state rm azurerm_virtual_machine.my_vm`.\n\t\t•\tDelete the resource block from the `.tf` code.\n\t\t•\tThis removes the resource from the state file without deleting it from Azure/AWS.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 143,
    "category": "Terraform (IaC)",
    "question": "What Happens During Terraform Lifecycle?",
    "answer": "“The Terraform lifecycle consists of five core phases that transition your infrastructure from code declarations to real-world resources:\n\n\t1. `terraform init` (Initialization):\n\t\t•   Initializes the working directory.\n\t\t•   Downloads the required provider plugins (e.g., AzureRM, AWS) and modules.\n\t\t•   Configures the backend storage (e.g., Azure Blob Storage) for the state file.\n\t2. `terraform validate` (Validation):\n\t\t•   Checks the configuration files for syntax errors, internal consistency, and invalid attribute arguments.\n\t3. `terraform plan` (Execution Planning):\n\t\t•   Queries the cloud provider to read the current state of existing resources.\n\t\t•   Compares it against the code and the state file to create an execution plan showing what resources will be created (`+`), modified (`~`), or destroyed (`-`).\n\t4. `terraform apply` (Execution):\n\t\t•   Executes the planned changes by making API calls to the cloud provider.\n\t\t•   Writes the new resource metadata and IDs to the `terraform.tfstate` file.\n\t5. `terraform destroy` (Teardown):\n\t\t•   Deletes all resources managed by the current Terraform configuration from the cloud provider.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 144,
    "category": "Terraform (IaC)",
    "question": "What is Terraform Import?",
    "answer": "“Terraform Import is a command used to bring existing, manually created cloud resources under Terraform management without recreating them.\n\nHow it works:\n\t1. Write the Code: First, write the Terraform resource block in the `.tf` file for the resource to be imported.\n\t   Example:\n\t   ```hcl\n\t   resource \"azurerm_resource_group\" \"rg\" {\n\t     name     = \"my-existing-rg\"\n\t     location = \"East US\"\n\t   }\n\t   ```\n\t2. Run the Import Command: Execute the import command, mapping the Terraform resource address to the actual cloud resource ID:\n\t   `terraform import azurerm_resource_group.rg /subscriptions/.../resourceGroups/my-existing-rg`\n\t3. Update the State: Terraform queries the cloud provider, retrieves the resource attributes, and writes them directly into the `terraform.tfstate` file.\n\t4. Verify Alignment: Run `terraform plan` to ensure that the code matches the imported state. If there are differences, adjust the `.tf` code until `terraform plan` shows 'No changes'.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 145,
    "category": "DevOps General",
    "question": "Scenario: Production VM Accidentally Deleted. What Will You Do?",
    "answer": "“If a production VM is accidentally deleted, I will follow a structured disaster recovery and incident response workflow:\n\n\t1. Immediate Mitigation:\n\t\t•\tCheck Monitoring & Alerts: Verify the alerts in Azure Monitor/Grafana to confirm when it went down and its impact.\n\t\t•\tAssess the State: Check if the VM was managed by Terraform. If yes, inspect the Terraform state file.\n\t2. Reconstruction:\n\t\t•\tRecreate via Terraform: Since we practice Infrastructure as Code, I will run `terraform plan` to see the delta. Since the physical VM is missing, Terraform will detect the difference and plan to recreate it. Then I will run `terraform apply` to recreate the VM with the exact same configuration (CPU, Memory, Network, IP, Security Groups).\n\t\t•\tRestore Data from Backup: If the VM has stateful data, I will restore the latest disk snapshot or backup from Azure Backup / AWS Backup.\n\t3. Root Cause Analysis (RCA):\n\t\t•\tAudit Logs: Inspect Azure Activity Logs or AWS CloudTrail to identify who or what deleted the VM (human error, script, or automated process).\n\t4. Prevention for Future:\n\t\t•\tEnable Resource Locks: Apply `CanNotDelete` locks on all production resource groups.\n\t\t•\tEnable Soft Delete: Enable soft-delete on disks and Key Vaults.\n\t\t•\tDeploy VMSS: Use Virtual Machine Scale Sets (VMSS) with multiple instances behind a Load Balancer instead of a single standalone VM.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 146,
    "category": "Docker & Kubernetes",
    "question": "Scenario: Application is Down in Kubernetes. How Will You Troubleshoot?",
    "answer": "“To troubleshoot an application that is down in a Kubernetes cluster, I follow a systematic bottom-up approach:\n\n\t1. Check Pod Status:\n\t\t•\tCommand: `kubectl get pods -n <namespace>`\n\t\t•\tLook for statuses like `CrashLoopBackOff`, `Pending`, `ImagePullBackOff`, or `Error`.\n\t2. Inspect the Pod Details:\n\t\t•\tCommand: `kubectl describe pod <pod-name> -n <namespace>`\n\t\t•\tCheck the 'Events' section at the bottom. This reveals issues like failed scheduling (insufficient CPU/Memory), volume mount failures, or failed readiness/liveness probes.\n\t3. Check Application Logs:\n\t\t•\tCommand: `kubectl logs <pod-name> -n <namespace> --tail=100` (add `-c <container-name>` if multi-container).\n\t\t•\tThis helps identify application-level crashes, unhandled exceptions, database connection failures, or missing environment variables.\n\t4. Check Cluster & Node Status:\n\t\t•\tCommand: `kubectl get nodes` and `kubectl describe node <node-name>` to check if the node is OutOfDisk, MemoryPressure, or NotReady.\n\t5. Check Networking & Services:\n\t\t•\tCommand: `kubectl get svc -n <namespace>` and `kubectl describe svc <service-name>`.\n\t\t•\tVerify if the service selector matches the pod labels. Test DNS resolution and network policies.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 147,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: Jenkins Build Failed. What Will You Check?",
    "answer": "“When a Jenkins build fails, I follow these steps to quickly identify and resolve the issue:\n\n\t1. Analyze Console Output:\n\t\t•\tGo to the specific build number and open 'Console Output'.\n\t\t•\tScroll to the bottom to find the exact error message (e.g., compilation error, test failure, syntax error in Jenkinsfile, or permission denied).\n\t2. Check Jenkins Agent/Worker Status:\n\t\t•\tVerify if the build agent went offline during the build. Check 'Manage Jenkins' -> 'Nodes' to ensure the agent is connected and has enough resources.\n\t3. Check Disk Space:\n\t\t•\tVerify if the Jenkins server or agent has run out of disk space. I can run `df -h` on the agent or check Jenkins logs for `No space left on device`.\n\t4. Check Integration & Credentials:\n\t\t•\tCheck if the git checkout failed due to credential expiry or network issues.\n\t\t•\tVerify if external tools like Docker, Maven, or SonarQube are running and accessible from the Jenkins agent.\n\t5. Command-line Verification:\n\t\t•\tIf needed, log into the Jenkins agent and run the build command manually in the workspace directory to reproduce the error.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 148,
    "category": "Linux & Git",
    "question": "Scenario: Disk Space Full on Linux Server",
    "answer": "“If a Linux server's disk space is full, it can cause services to crash. I resolve this using the following process:\n\n\t1. Check Disk Space Usage:\n\t\t•\tRun `df -h` to see which mount point (e.g., `/`, `/var`) is 100% full.\n\t2. Identify Large Files or Directories:\n\t\t•\tRun `du -sh /* 2>/dev/null | sort -h` starting from the root directory, and recursively drill down to find the offending directories (e.g., `/var/log`, `/var/lib/docker`).\n\t\t•\tTo find the top 10 largest files: `find / -type f -size +100M -exec ls -lh {} + 2>/dev/null | awk '{ print $5, $9 }' | sort -hr | head -n 10`\n\t3. Safe Cleanup:\n\t\t•\tClear Log Files safely (do not delete them while active): Clear them using `cat /dev/null > /var/log/syslog` or `truncate -s 0 /var/log/app.log`.\n\t\t•\tDocker Cleanup: If Docker is taking up space, run `docker system prune -a --volumes` to remove unused containers, networks, images, and build cache.\n\t\t•\tClean Package Manager Cache: Run `apt-get clean` (Debian/Ubuntu) or `yum clean all` (RHEL/CentOS).\n\t4. Long-term Prevention:\n\t\t•\tConfigure log rotation (`logrotate`) to compress and delete old logs.\n\t\t•\tSet up disk space alerts in Prometheus/Grafana or Azure Monitor to notify the team when disk usage exceeds 80%.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 149,
    "category": "Terraform (IaC)",
    "question": "Scenario: How Will You Secure Terraform State?",
    "answer": "“Terraform state files contain sensitive information (like database passwords, API keys, and private keys) in plain text. I secure it using the following best practices:\n\n\t1. Use a Remote Backend:\n\t\t•\tNever store `terraform.tfstate` locally or commit it to Git.\n\t\t•\tUse a secure remote backend like Azure Blob Storage, AWS S3, or HashiCorp Consul.\n\t2. Enable Encryption:\n\t\t•\tEnsure the storage bucket/container has Encryption-at-Rest enabled (e.g., using Azure Storage Service Encryption or AWS KMS).\n\t\t•\tEnsure all communication is encrypted in transit using HTTPS/TLS.\n\t3. Enable State Locking:\n\t\t•\tEnable state locking (using Azure Blob Storage native leases or AWS DynamoDB) to prevent concurrent writes that can corrupt the state.\n\t4. Implement Strict RBAC:\n\t\t•\tRestrict access to the storage account/S3 bucket using Role-Based Access Control (RBAC). Only the CI/CD pipeline service principal and senior administrators should have read/write access.\n\t5. Use Secrets Managers:\n\t\t•\tInstead of hardcoding secrets in variables, fetch them dynamically at runtime from Azure Key Vault or AWS Secrets Manager so they are not hardcoded in the state files where possible.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 150,
    "category": "DevOps General",
    "question": "Scenario: How Will You Deploy Zero-Downtime Application?",
    "answer": "“To deploy an application with zero downtime, I use a combination of Kubernetes deployment strategies and Terraform lifecycle configurations:\n\n\t1. Kubernetes Deployment Strategy (Rolling Update):\n\t\t•\tUse the `RollingUpdate` strategy in the Deployment manifest.\n\t\t•\tConfigure `maxSurge` (e.g., 25%) to define how many extra pods can be created during the update.\n\t\t•\tConfigure `maxUnavailable` (e.g., 0%) to ensure that no existing pods are terminated until new pods are ready.\n\t\t•\tDefine `readinessProbe` and `livenessProbe` so Kubernetes knows exactly when the new pod is healthy and ready to receive traffic before routing users to it.\n\t2. Terraform Lifecycle:\n\t\t•\tIf deploying VMs or infrastructure behind a load balancer, use the `create_before_destroy = true` lifecycle hook in Terraform. This ensures the new resource is provisioned and healthy before the old one is destroyed.\n\t3. Blue-Green or Canary Deployments:\n\t\t•\tFor critical applications, I configure Blue-Green deployments (switching traffic between two identical environments using a Load Balancer/DNS) or Canary deployments (routing 5-10% of traffic to the new version using Istio or NGINX Ingress to test stability before full rollout).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 151,
    "category": "Docker & Kubernetes",
    "question": "Scenario: How Will You Scale Kubernetes Application?",
    "answer": "“Scaling a Kubernetes application can be done either manually or automatically depending on the workload demands:\n\n\t1. Manual Scaling:\n\t\t•\tI can scale a deployment up or down instantly using the CLI:\n\t\t  `kubectl scale deployment/my-app --replicas=10 -n production`\n\t\t•\tAlternatively, I can edit the `replicas` field in the deployment YAML and apply it.\n\t2. Auto-Scaling (Recommended):\n\t\t•\tHorizontal Pod Autoscaler (HPA): Automatically adjusts the number of pods based on CPU or Memory utilization.\n\t\t  Example: `kubectl autoscale deployment my-app --cpu-percent=70 --min=2 --max=10`\n\t\t•\tVertical Pod Autoscaler (VPA): Automatically adjusts the CPU and Memory requests/limits of the pods.\n\t\t•\tCluster Autoscaler (CA): Scales the number of virtual machine nodes in the cluster if there are unschedulable pods due to resource constraints.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 152,
    "category": "DevOps General",
    "question": "Scenario: How Will You Handle Multi-Environment Infra?",
    "answer": "“To manage infrastructure across multiple environments (Dev, QA, Stage, Prod) efficiently and safely, I follow these key principles:\n\n\t1. Directory Structure (Environment Isolation):\n\t\t•\tI use a separate directory structure for each environment to keep them completely isolated:\n\t\t  ```\n\t\t  environments/\n\t\t  ├── dev/\n\t\t  │   ├── main.tf\n\t\t  │   └── terraform.tfvars\n\t\t  ├── prod/\n\t\t  │   ├── main.tf\n\t\t  │   └── terraform.tfvars\n\t\t  ```\n\t2. Reusable Modules:\n\t\t•\tWrite core infrastructure (like VNet, AKS, VMs) as reusable Terraform modules. The environment-specific directories simply call these modules with different input parameters.\n\t3. Separate Backend State:\n\t\t•\tEach environment must have its own remote state file in a separate storage container/bucket to prevent accidental modification of production state during dev testing.\n\t4. Variable Separation:\n\t\t•\tUse `.tfvars` files to define environment-specific values (e.g., small VM sizes for Dev, large VM sizes for Prod).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 153,
    "category": "Docker & Kubernetes",
    "question": "Scenario: Application Works Locally but Fails in Docker",
    "answer": "“When an application works on a developer's local machine but fails inside a Docker container, it is usually due to environment differences. I troubleshoot this using these steps:\n\n\t1. Inspect Container Logs:\n\t\t•\tRun `docker logs <container-id>` to see the application's stdout/stderr. This usually reveals startup crashes, missing packages, or database connection errors.\n\t2. Check Port Mapping:\n\t\t•\tVerify that the port exposed inside the Dockerfile matches the port mapped in the run command.\n\t\t  Example: `docker run -p 8080:80 my-image` (maps host port 8080 to container port 80).\n\t3. Check Environment Variables:\n\t\t•\tEnsure all required environment variables, config files, or secrets are passed into the container at runtime using the `-e` flag or `--env-file`.\n\t4. Debug Interactively:\n\t\t•\tRun a shell inside the running or failed container to inspect files and test network connectivity:\n\t\t  `docker exec -it <container-id> /bin/sh` or `docker run --entrypoint /bin/sh -it my-image`.\n\t5. Check Base Image and Permissions:\n\t\t•\tEnsure the container has the correct file permissions and is not running into permission issues when writing to directories, and that the base OS image has all required system libraries.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 154,
    "category": "DevOps General",
    "question": "Scenario: How Will You Monitor Production Infrastructure?",
    "answer": "“I implement a comprehensive 3-tier monitoring strategy to ensure production reliability, visibility, and quick alerting:\n\n\t1. Infrastructure Monitoring (Metrics):\n\t\t•\tUse Prometheus and Grafana or Azure Monitor / AWS CloudWatch.\n\t\t•\tMonitor system resource metrics: CPU usage, Memory utilization, Disk I/O, Network bandwidth, and Node status.\n\t2. Application & Kubernetes Monitoring:\n\t\t•\tMonitor application metrics using Prometheus exporters (like Node Exporter or JMX Exporter).\n\t\t•\tFor Kubernetes, monitor Pod restarts, crash loops, API server latency, and ingress controller traffic.\n\t3. Log Aggregation:\n\t\t•\tUse the ELK Stack (Elasticsearch, Logstash, Kibana) or EFK (Fluentd) or Azure Log Analytics.\n\t\t•\tAll container stdout/stderr logs are forwarded to a central repository where we can query and set up alerts for error spikes.\n\t4. Alerting:\n\t\t•\tConfigure Alertmanager or Azure Alerts to send high-priority notifications to Slack, PagerDuty, or Microsoft Teams when critical thresholds are breached (e.g., Disk > 85%, Pod restarts > 5 in 10 mins).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 155,
    "category": "Docker & Kubernetes",
    "question": "Scenario: How Will You Secure Kubernetes Cluster?",
    "answer": "“Securing a Kubernetes cluster requires a multi-layered security approach (Defense in Depth) across the entire stack:\n\n\t1. Network Security:\n\t\t•\tDeploy the cluster as a Private Cluster (control plane and worker nodes do not have public IPs).\n\t\t•\tUse Network Policies to restrict pod-to-pod communication (implement a default-deny policy and only allow necessary traffic).\n\t2. Authentication & Authorization:\n\t\t•\tEnable Role-Based Access Control (RBAC) and integrate it with Azure Active Directory (AAD) or AWS IAM.\n\t\t•\tEnforce the Principle of Least Privilege: developers get read-only access, CI/CD gets deployment access.\n\t3. Container Security:\n\t\t•\tRun containers as non-root users (configure `securityContext` in pod specs).\n\t\t•\tUse read-only root filesystems where possible.\n\t\t•\tEnable vulnerability scanning for Docker images in the container registry (e.g., Azure Container Registry or Trivy) before deployment.\n\t4. Secret Management:\n\t\t•\tDo not store secrets in plaintext config files. Use Kubernetes Secrets (preferably encrypted at rest using KMS keys) or integrate with Azure Key Vault using the Secret Store CSI Driver.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 156,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: How Will You Handle Secrets in CI/CD Pipeline?",
    "answer": "“Managing secrets securely in CI/CD pipelines is critical to prevent credential leaks. I follow these strict security practices:\n\n\t1. Use Integrated Secrets Managers:\n\t\t•\tStore all credentials, API keys, and certificates in a dedicated secrets manager like Azure Key Vault, HashiCorp Vault, or AWS Secrets Manager.\n\t2. Fetch Secrets Dynamically:\n\t\t•\tConfigure the CI/CD pipeline (Jenkins, Azure Pipelines, or GitHub Actions) to fetch secrets dynamically at runtime using secure service connections or OIDC, rather than hardcoding them in the repository.\n\t3. Masking in Logs:\n\t\t•\tEnsure secret masking is enabled in the pipeline settings so that if a secret is accidentally printed to the console, it is automatically replaced with asterisks (`***`).\n\t\t•\tNever store secrets in plaintext in variables files (`terraform.tfvars`) or Git. Use environment variables injected by the runner or encrypted variables (like GitHub Encrypted Secrets).\n\t4. Rotate Credentials:\n\t\t•\tImplement regular rotation policies for passwords, SSH keys, and API tokens.”\n\nFinal Interview Closing Line\n“I have experience in cloud infrastructure, CI/CD, Terraform, Docker, Kubernetes, and Linux administration. I enjoy automating infrastructure and solving production issues using DevOps best practices.”\nDevOps / Cloud Engineer Interview Notes (Q&A)\n1. Self Introduction\nHi, my name is [Your Name].\nI am working as a DevOps/Cloud Engineer with experience in:\n\t•\tLinux Administration \n\t•\tCloud Infrastructure \n\t•\tCI/CD pipelines \n\t•\tDocker & Kubernetes \n\t•\tTerraform \n\t•\tMonitoring and deployment automation \nCurrently, I am working mainly on Microsoft cloud platform.\nDay-to-Day Activities\n\t•\tManaging cloud infrastructure \n\t•\tCreating CI/CD pipelines using Jenkins \n\t•\tDeploying applications \n\t•\tWriting Terraform code \n\t•\tMonitoring Linux servers \n\t•\tManaging Docker containers and Kubernetes clusters \n\t•\tTroubleshooting production issues \n\t•\tManaging secrets using Microsoft \n\nLinux Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 157,
    "category": "Linux & Git",
    "question": "What is systemctl in Linux?",
    "answer": "systemctl is a command used to manage services in Linux systems that use systemd.\nUses:\n\t•\tStart service \n\t•\tStop service \n\t•\tRestart service \n\t•\tEnable/Disable service \n\t•\tCheck service status \nCommands\nsystemctl start nginx\nsystemctl stop nginx\nsystemctl restart nginx\nsystemctl status nginx\nBackend Working\n\t•\tsystemctl talks to systemd \n\t•\tsystemd is PID 1 process \n\t•\tReads service unit files \n\t•\tManages service lifecycle \nService files location:\n/etc/systemd/system/",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 158,
    "category": "DevOps General",
    "question": "Difference Between du and df",
    "answer": "“In Linux, both `du` and `df` are essential commands used to analyze disk space, but they report space from different perspectives:\n\n\t1. `df` (Disk Free):\n\t\t•   What it does: Reports the amount of available and used disk space on all mounted filesystems.\n\t\t•   How it works: It queries the filesystem superblock directly, making it extremely fast.\n\t\t•   Useful Command: `df -h` (displays space in human-readable format like GB/MB).\n\n\t2. `du` (Disk Usage):\n\t\t•   What it does: Estimates the disk space used by specific files or directories.\n\t\t•   How it works: It traverses the directory tree and sums up the space used by each individual file.\n\t\t•   Useful Command: `du -sh /var/log/*` (shows the total size of each file/folder in the log directory).\n\nSummary of Differences:\n| Feature | df (Disk Free) | du (Disk Usage) |\n| :--- | :--- | :--- |\n| Level | Filesystem level (mount points). | File and Directory level. |\n| Speed | Extremely fast (queries superblock). | Slower (must traverse directories). |\n| Perspective | Shows total capacity and free space. | Shows space consumed by specific files/folders. |\n| Open Deleted Files | Includes space of deleted files that are still held open by running processes. | Excludes open deleted files (since they have no directory entry). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 159,
    "category": "DevOps General",
    "question": "How to Check Running Processes/Services?",
    "answer": "“To monitor and manage active processes and system services in a Linux environment, I use the following commands:\n\n\t1. Checking Running Processes:\n\t\t•   **Snapshot view**: Run `ps -ef` to list all running processes with their User, PID, PPID, and command path. To find a specific process: `ps -ef | grep nginx`.\n\t\t•   **Real-time monitoring**: Run `top` or `htop` (interactive) to view CPU, memory usage, load average, and active processes in real time.\n\t\t•   **Thread/Process tree**: Run `pstree` to see the hierarchical relationship of active processes.\n\n\t2. Checking Running Services (systemd):\n\t\t•   **List all active services**: Run `systemctl list-units --type=service --state=running`.\n\t\t•   **Check specific service status**: Run `systemctl status nginx` to see if it is active, enabled on boot, and view its recent log lines.\n\t\t•   **Manage services**: Use `sudo systemctl start|stop|restart|reload <service-name>` to control service execution.”\n\nJenkins Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 160,
    "category": "CI/CD & Pipelines",
    "question": "What is Jenkins Pipeline?",
    "answer": "Jenkins pipeline automates:\n\t•\tBuild \n\t•\tTest \n\t•\tDeployment \n\t•\tCI/CD process \nFlow\nCode → Build → Test → Deploy\nBenefits\n\t•\tAutomation \n\t•\tFaster deployment \n\t•\tReduced manual work \n\t•\tContinuous Integration \nExample\npipeline {\n  agent any\n\n  stages {\n    stage('Build') {\n      steps {\n        echo 'Building'\n      }\n    }\n\n    stage('Deploy') {\n      steps {\n        echo 'Deploying'\n      }\n    }\n  }\n}\n\nDocker Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 161,
    "category": "Docker & Kubernetes",
    "question": "Have You Worked on Docker?",
    "answer": "Yes, I have worked on Docker.\nWork Done:\n\t•\tDocker image creation \n\t•\tDockerfile writing \n\t•\tContainer deployment \n\t•\tDocker Compose \n\t•\tRegistry push/pull \nCommands\ndocker build\ndocker run\ndocker ps\ndocker logs\n\nSample Dockerfile\nFROM nginx\n\nCOPY . /usr/share/nginx/html\nBuild Image:\ndocker build -t myapp .\nRun Container:\ndocker run -d -p 80:80 myapp\n\nKubernetes Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 162,
    "category": "Docker & Kubernetes",
    "question": "Have You Deployed Applications on Docker or Kubernetes?",
    "answer": "Yes, I have deployed applications on both Docker and Kubernetes.\nKubernetes Work:\n\t•\tDeployments \n\t•\tServices \n\t•\tIngress \n\t•\tConfigMaps \n\t•\tSecrets \n\t•\tAutoscaling \n\t•\tTroubleshooting pods \nCommands\nkubectl get pods\nkubectl get svc\nkubectl logs pod-name\nkubectl describe pod pod-name\n\nKubernetes Deployment Example\napiVersion: apps/v1\nkind: Deployment\n\nmetadata:\n  name: nginx\n\nspec:\n  replicas: 2\n\n  selector:\n    matchLabels:\n      app: nginx\n\n  template:\n    metadata:\n      labels:\n        app: nginx\n\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\nApply:\nkubectl apply -f deployment.yaml\n\nTerraform Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 163,
    "category": "Terraform (IaC)",
    "question": "What is Terraform?",
    "answer": "“Terraform is an open-source Infrastructure as Code (IaC) tool created by HashiCorp. It allows platform and DevOps engineers to define, provision, and manage cloud and on-premises infrastructure safely and efficiently using a declarative configuration language called HashiCorp Configuration Language (HCL).\n\nKey Characteristics:\n\t1. Declarative vs. Imperative: You write code describing the *what* (desired end state), and Terraform figures out the *how* (steps, ordering, and API calls to build it).\n\t2. Provider-Based Architecture: Uses plugins called 'Providers' to interact with cloud APIs (e.g., AzureRM, AWS, Google, Kubernetes, GitHub).\n\t3. State File (`terraform.tfstate`): Keeps track of the metadata of all resources it manages, allowing it to detect configuration drift and perform safe, incremental updates.\n\t4. Workflow: Follows a consistent lifecycle workflow: `init` (initialize provider plugins), `plan` (preview changes), and `apply` (deploy changes).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 164,
    "category": "Terraform (IaC)",
    "question": "What is Terraform State?",
    "answer": "Terraform state file:\n\t•\ttracks infrastructure \n\t•\tstores resource metadata \nFile:\nterraform.tfstate\n\nTerraform Import\nUsed to import existing infrastructure into Terraform state.\nExample:\nterraform import azurerm_resource_group.rg RESOURCE_ID\n\nAzure Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 165,
    "category": "Azure & Azure DevOps",
    "question": "Which Azure Services Have You Used?",
    "answer": "“As a DevOps and Cloud Engineer, I have worked extensively with a wide range of Azure services across compute, networking, security, monitoring, storage, and CI/CD:\n\n\t1. Compute & Containers:\n\t\t•\tAzure Kubernetes Service (AKS): Managed Kubernetes platform for containerized microservices.\n\t\t•\tVirtual Machines & VM Scale Sets (VMSS): For hosting legacy workloads and self-hosted build runners.\n\t2. Networking:\n\t\t•\tVirtual Networks (VNets) & Subnets: For logical network isolation.\n\t\t•\tNetwork Security Groups (NSGs) & Application Security Groups (ASGs): For packet-level firewall filtering.\n\t\t•\tAzure Load Balancers & Application Gateways (AGIC): For Layer 4 and Layer 7 load balancing and SSL offloading.\n\t\t•\tAzure Front Door: For global routing, CDN, and Web Application Firewall (WAF) security.\n\t\t•\tPrivate Endpoints & Azure Bastion: For secure, private access to cloud resources.\n\t3. Security & Identity:\n\t\t•\tAzure Key Vault: For secure management of secrets, certificates, and keys.\n\t\t•\tAzure Active Directory (AAD) / Entra ID: For identity, access management, and RBAC policies.\n\t4. Storage:\n\t\t•\tAzure Storage Accounts (Blob/Files): For storing application assets and Terraform remote state.\n\t5. Monitoring & Logging:\n\t\t•\tAzure Monitor & Container Insights: For infrastructure metrics and pod/node log analysis.”\n\t•\tAzure Monitor",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 166,
    "category": "Terraform (IaC)",
    "question": "What is the difference between count and for_each in Terraform, and when should you use which?",
    "answer": "• 'count' uses a list and indexes resources numerically (0, 1, 2...). If you remove an item from the middle of the list, Terraform will recreate all subsequent resources because their index shifts.\n• 'for_each' uses a map or set of strings and identifies resources by their keys. Removing an item only deletes that specific resource without affecting others.\n• Best Practice: Use 'for_each' for almost all resource collections, especially when resources are independent. Use 'count' for simple toggle switches (e.g., creating a resource if a condition is true: count = var.create_resource ? 1 : 0).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 167,
    "category": "Terraform (IaC)",
    "question": "What are Dynamic Blocks in Terraform and when should you use them?",
    "answer": "• Dynamic Blocks allow you to construct nested configuration blocks dynamically based on a list or map variable.\n• Example: Creating multiple security rules inside an 'azurerm_network_security_group' resource based on a list of port numbers.\n• Syntax:\n  dynamic \"security_rule\" {\n    for_each = var.rules\n    content {\n      name = security_rule.value.name\n      port = security_rule.value.port\n      # ... other attributes\n    }\n  }\n• Best Practice: Use them to keep your code DRY (Don't Repeat Yourself) when dealing with repeatable nested blocks, but avoid overusing them as they can make code harder to read.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 168,
    "category": "Terraform (IaC)",
    "question": "How do you handle infrastructure drift in Terraform?",
    "answer": "• Infrastructure drift occurs when the actual state of cloud resources deviates from the Terraform configuration (e.g., someone manually modifies a resource via the Azure Portal).\n• Detection: Run 'terraform plan'. Terraform refreshes the state against the cloud and highlights differences.\n• Remediation:\n  1. Align Code: Update your Terraform code to match the manual changes if they are intended.\n  2. Revert Changes: Run 'terraform apply' to overwrite manual changes and restore the state defined in your code.\n• Best Practice: Implement automated drift detection cron jobs in your pipelines and restrict write permissions to the cloud portal to prevent manual changes.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 169,
    "category": "Terraform (IaC)",
    "question": "How do you securely manage secrets in Terraform configurations?",
    "answer": "• Never hardcode secrets in .tf files.\n• Best Practices:\n  1. Use Variables: Declare variables and pass values using environment variables (TF_VAR_variable_name) or secure .tfvars files (added to .gitignore).\n  2. Key Vault Integration: Reference secrets stored in Azure Key Vault using data sources:\n     data \"azurerm_key_vault_secret\" \"db_password\" {\n       name         = \"db-pass\"\n       key_vault_id = data.azurerm_key_vault.main.id\n     }\n  3. Secure Remote Backend: Always store state files in a secure remote backend (like Azure Blob Storage) with encryption at rest and access control, as Terraform state contains secrets in plain text.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 170,
    "category": "Terraform (IaC)",
    "question": "What is the purpose of 'terraform import' and the newer 'import' block?",
    "answer": "• 'terraform import' is used to bring existing cloud resources (created manually or via other tools) under Terraform management.\n• Legacy Command: 'terraform import azurerm_resource_group.rg /subscriptions/123/resourceGroups/my-rg'. This updates the state file, but you still have to write the resource block in your code manually.\n• Modern Import Block (Terraform 1.5+): Write an 'import' block in your code:\n  import {\n    to = azurerm_resource_group.rg\n    id = \"/subscriptions/123/resourceGroups/my-rg\"\n  }\n  Then run 'terraform plan -generate-config-out=generated.tf' to automatically generate the resource code.\n• Best Practice: Use the modern 'import' block for a safer, code-first import workflow.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 171,
    "category": "Terraform (IaC)",
    "question": "What are Terraform Workspaces and when should you use them?",
    "answer": "• Workspaces allow you to manage multiple distinct state files from a single configuration directory. This is useful for deploying parallel copies of the same infrastructure.\n• Commands: 'terraform workspace new dev', 'terraform workspace select dev'.\n• Best Practice: Use workspaces for temporary, identical environments (e.g., testing branch deployments). For long-lived environments like Dev, QA, and Prod, use separate directories/folders with distinct backend configurations instead, as workspaces share the same code version and can lead to accidental deployments.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 172,
    "category": "DevOps General",
    "question": "What is Policy as Code in IaC, and what tools are used for it?",
    "answer": "• Policy as Code (PaC) involves writing rules to enforce security, compliance, and cost-control standards on your infrastructure code before it is provisioned.\n• Common Tools:\n  1. tfsec / Trivy: Scans Terraform code for security misconfigurations (e.g., open SSH ports, unencrypted disks).\n  2. Open Policy Agent (OPA) / Rego: A general-purpose policy engine to write custom compliance rules.\n  3. Sentinel: HashiCorp's proprietary policy-as-code framework.\n• Best Practice: Integrate PaC tools directly into the Pull Request validation stage of your CI/CD pipelines to block non-compliant changes before they reach the plan/apply stage.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 173,
    "category": "Docker & Kubernetes",
    "question": "Explain the difference between Liveness, Readiness, and Startup Probes in Kubernetes.",
    "answer": "• Liveness Probe: Checks if the container is alive. If it fails, Kubernetes kills the container and restarts it according to the restartPolicy.\n• Readiness Probe: Checks if the container is ready to accept network traffic. If it fails, the Pod is removed from the Service's endpoint list, so no traffic is sent to it.\n• Startup Probe: Checks if the application inside the container has started up. Disables liveness and readiness checks until it succeeds, preventing slow-starting apps from being killed prematurely.\n• Best Practice: Always define readiness probes to prevent traffic from hitting uninitialized pods, and liveness probes to recover from deadlocks.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 174,
    "category": "Docker & Kubernetes",
    "question": "How does the Horizontal Pod Autoscaler (HPA) work in Kubernetes?",
    "answer": "• HPA automatically scales the number of Pod replicas in a deployment or statefulset based on observed CPU utilization, memory usage, or custom metrics.\n• Workflow:\n  1. The HPA controller queries the Metrics Server at a regular interval (default is 15 seconds).\n  2. It calculates the required number of replicas using the formula: Replicas = ceil[Current Replicas * (Current Metric Value / Target Metric Value)].\n  3. It updates the replica count in the Deployment/ReplicaSet, causing Kubernetes to launch or terminate Pods.\n• Requirement: You must define CPU/Memory 'resources.requests' in your Pod spec for HPA to calculate utilization percentages.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 175,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between ConfigMaps and Secrets in Kubernetes?",
    "answer": "• ConfigMaps: Used to store non-confidential configuration data in key-value pairs (e.g., application properties, environment names).\n• Secrets: Used to store sensitive data like passwords, API tokens, and SSH keys. Secrets are stored in base64-encoded format.\n• Best Practice: Do not rely solely on Kubernetes Secrets for security, as base64 encoding is not encryption. Integrate with external KMS (Key Management Service) or Azure Key Vault using Secrets Store CSI Driver so secrets are fetched dynamically and never stored in plain text on disk.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 176,
    "category": "Docker & Kubernetes",
    "question": "Explain Node Affinity, Pod Affinity, and Pod Anti-Affinity.",
    "answer": "• Node Affinity: Directs Pods to be scheduled on specific Nodes based on labels (e.g., schedule this Pod only on nodes with SSDs).\n• Pod Affinity: Schedules Pods close to other Pods (e.g., schedule the web client Pod on the same node/zone as the cache Pod to reduce latency).\n• Pod Anti-Affinity: Prevents Pods from being scheduled close to each other (e.g., do not schedule two replicas of the same web app on the same node to ensure high availability during node failures).\n• Types: 'requiredDuringSchedulingIgnoredDuringExecution' (hard requirement) and 'preferredDuringSchedulingIgnoredDuringExecution' (soft preference).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 177,
    "category": "Docker & Kubernetes",
    "question": "What are Taints and Tolerations in Kubernetes?",
    "answer": "• Taints: Applied to Nodes. They allow a node to repel a set of pods. Syntax: 'kubectl taint nodes node1 key1=value1:NoSchedule'.\n• Tolerations: Applied to Pods. They allow the scheduler to schedule pods with matching tolerations onto tainted nodes.\n• Difference from Affinity: Node Affinity attracts pods to nodes, while Taints allow nodes to repel pods unless the pod explicitly tolerates the taint.\n• Use Case: Dedicating specific nodes for GPU workloads, or marking control plane nodes so application pods aren't scheduled on them.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 178,
    "category": "Docker & Kubernetes",
    "question": "What is Helm in Kubernetes and why do we use it?",
    "answer": "• Helm is the package manager for Kubernetes. It allows you to define, install, upgrade, and share complex Kubernetes applications.\n• Key Components:\n  1. Chart: A bundle of YAML templates that describe a set of Kubernetes resources.\n  2. Values.yaml: A file containing configuration variables to customize the templates for different environments (Dev, QA, Prod).\n  3. Release: A running instance of a chart in a Kubernetes cluster.\n• Benefits: Simplifies deployment, supports versioning and easy rollbacks ('helm rollback'), and avoids writing duplicate YAML files.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 179,
    "category": "Docker & Kubernetes",
    "question": "What is the Sidecar Pattern in Kubernetes?",
    "answer": "• The Sidecar Pattern involves running an extra helper container inside the same Pod alongside the main application container.\n• Features: Since containers in the same Pod share the same network namespace, storage volumes, and loopback interface (localhost), they can communicate efficiently.\n• Common Use Cases:\n  1. Log Shipping: A sidecar container (like Fluentd) reads application logs from a shared volume and ships them to Elasticsearch.\n  2. Service Mesh: A proxy sidecar (like Envoy in Istio) intercepts and manages incoming/outgoing network traffic for security and telemetry.\n  3. Secret Syncing: A sidecar that pulls secrets from Vault and writes them to a local volume.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 180,
    "category": "Docker & Kubernetes",
    "question": "How do you troubleshoot a Pod that is stuck in 'CrashLoopBackOff' status?",
    "answer": "• 'CrashLoopBackOff' means the pod starts, crashes, and Kubernetes tries to restart it repeatedly with an increasing delay.\n• Troubleshooting Steps:\n  1. Check Logs: Run 'kubectl logs <pod-name>' (add '--previous' to see logs from the crashed instance). This is the most common way to find application errors (e.g., database connection failed, missing env variables).\n  2. Describe Pod: Run 'kubectl describe pod <pod-name>' to check events, exit codes, and resource limits.\n  3. Check Exit Code: Exit code 137 means Out of Memory (OOMKilled), exit code 1 means application error.\n  4. Validate Configurations: Check ConfigMaps, Secrets, and database availability.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 181,
    "category": "Docker & Kubernetes",
    "question": "How do you troubleshoot a Pod that is stuck in 'Pending' status?",
    "answer": "• 'Pending' means the Pod could not be scheduled onto any worker node in the cluster.\n• Troubleshooting Steps:\n  1. Describe Pod: Run 'kubectl describe pod <pod-name>' and look at the 'Events' section at the bottom.\n  2. Common Causes:\n     • Insufficient Resources: No node has enough CPU or Memory requests free to fit the Pod.\n     • Taints and Tolerations: The Pod does not tolerate the taints on available nodes.\n     • Node Selector / Affinity: The Pod's node selector labels do not match any available nodes.\n     • Unattached Volumes: The Pod is waiting for a PersistentVolume (PV) to be created or bound.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 182,
    "category": "Docker & Kubernetes",
    "question": "What is a NetworkPolicy in Kubernetes?",
    "answer": "• By default, all pods in a Kubernetes cluster can communicate with each other freely. A NetworkPolicy allows you to restrict network traffic to and from Pods.\n• Features: Works like a firewall at the Pod level using labels and selectors.\n• Configuration: You can define Ingress (incoming) and Egress (outgoing) rules based on namespaces, pods, and IP blocks.\n• Requirement: You must use a network plugin (CNI) that supports NetworkPolicies, such as Calico, Cilium, or Azure CNI with network policies enabled. Default flannel does not enforce them.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 183,
    "category": "CI/CD & Pipelines",
    "question": "What are Multi-stage Docker builds and why should you use them?",
    "answer": "• Multi-stage builds allow you to use multiple 'FROM' statements in a single Dockerfile. You can compile your code in an initial stage and copy only the compiled artifact into a final, lightweight stage.\n• Benefits: Reduces image size drastically (e.g., removing JDK, build tools, and source code, leaving only the JRE and the jar file). This improves security (fewer packages means smaller attack surface) and deployment speed.\n• Example:\n  FROM maven:3.8-openjdk-17 AS builder\n  RUN mvn package\n  \n  FROM openjdk:17-slim\n  COPY --from=builder /app/target/app.jar /app.jar\n  CMD [\"java\", \"-jar\", \"/app.jar\"]",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 184,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between COPY and ADD instructions in a Dockerfile?",
    "answer": "• COPY: Simply copies files and directories from the local host build context into the container. It is preferred for its simplicity and predictability.\n• ADD: Does everything COPY does, but also has two extra features:\n  1. It can extract local tar archives automatically into the container.\n  2. It can download files from remote URLs.\n• Best Practice: Use COPY for standard file transfers. Only use ADD when you explicitly need to auto-extract local tar files.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 185,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between Docker Volumes and Bind Mounts?",
    "answer": "• Docker Volumes: Managed entirely by Docker and stored in a directory managed by Docker on the host machine (/var/lib/docker/volumes/). They are isolated from the host OS and are the preferred way to persist container data.\n• Bind Mounts: Map any arbitrary file or directory on the host machine directly into the container. They rely on the host's directory structure and permissions.\n• Best Practice: Use Volumes for database persistence and production data. Use Bind Mounts for local development (e.g., mounting source code so changes reflect in the container instantly without rebuilding).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 186,
    "category": "DevOps General",
    "question": "What are Distroless and Alpine images, and why are they used?",
    "answer": "• Alpine: A lightweight Linux distribution based on musl libc and busybox, resulting in very small base images (~5MB).\n• Distroless: Images created by Google that contain only your application and its runtime dependencies. They do not contain package managers, shells (bash/sh), or standard Linux utilities.\n• Why use them: Both reduce the image size and, more importantly, minimize the security vulnerability footprint. Distroless is highly secure because an attacker who exploits the application cannot spawn a shell or install malicious tools.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 187,
    "category": "Docker & Kubernetes",
    "question": "How do you minimize the size of a Docker image?",
    "answer": "• Best Practices:\n  1. Use Multi-stage Builds: Compile in one stage, copy only artifacts to the runner stage.\n  2. Use Small Base Images: Use alpine, slim, or distroless base images instead of full OS images (like ubuntu or centos).\n  3. Minimize Layers: Combine multiple RUN commands using '&&' and line continuations ('\\') to reduce the number of image layers.\n  4. Clean Up: Delete package manager caches and temporary files in the same RUN layer they were created (e.g., 'apt-get clean && rm -rf /var/lib/apt/lists/*').\n  5. Use .dockerignore: Exclude node_modules, logs, and local build artifacts from the build context.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 188,
    "category": "Docker & Kubernetes",
    "question": "Explain Blue-Green Deployment and Canary Deployment strategies.",
    "answer": "• Blue-Green: You maintain two identical production environments. 'Blue' is active (serving traffic), and 'Green' is idle. You deploy the new version to Green, run tests, and then switch the router/load balancer to point to Green. If issues arise, you switch back to Blue instantly.\n• Canary: You deploy the new version to a small subset of servers or pods (e.g., 5% of traffic). You monitor performance, error rates, and user feedback. If stable, you gradually roll out the new version to the remaining 95%. If it fails, only a tiny fraction of users are affected.\n• Comparison: Blue-Green requires double the resources; Canary is cost-effective and safer but requires sophisticated routing (e.g., Service Mesh).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 189,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement caching in CI/CD pipelines, and why is it important?",
    "answer": "• Pipeline Caching: Saves dependencies (like npm node_modules, Maven .m2, NuGet packages) after the first build and restores them in subsequent runs.\n• Why: It significantly reduces build times by avoiding downloading gigabytes of dependencies over the internet for every single commit.\n• Azure Pipelines Syntax: Use the 'Cache@2' task, defining a key based on the package lock file (e.g., package-lock.json) so the cache is invalidated and rebuilt only when dependencies change.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 190,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between Microsoft-hosted agents and Self-hosted agents in Azure DevOps?",
    "answer": "• Microsoft-hosted Agents: Managed entirely by Microsoft. A fresh virtual machine is created for every job and discarded afterward. Zero maintenance, but limited in CPU/Memory, cannot access private networks, and has execution time limits.\n• Self-hosted Agents: Installed and managed on your own infrastructure (VMs, physical servers, Kubernetes). They persist between builds, allowing faster caching. They can access resources inside your private VNet and have no execution time limits, but you are responsible for maintenance and updates.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 191,
    "category": "CI/CD & Pipelines",
    "question": "What are Multi-stage YAML pipelines and why are they preferred over Classic release pipelines?",
    "answer": "• Multi-stage YAML pipelines allow you to define both your Build (CI) and Release (CD) stages in a single YAML file (pipeline-as-code).\n• Why Preferred:\n  1. Version Control: The pipeline definition is stored in Git alongside the application code, allowing you to track changes, review via PRs, and roll back easily.\n  2. Reusability: You can use templates to share stages, jobs, and tasks across different pipelines.\n  3. Multi-stage: Clearly defines dependencies between stages (e.g., Dev -> QA -> Prod) with approvals and checks configured on environments.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 192,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle secrets leakage prevention in CI/CD?",
    "answer": "• Best Practices:\n  1. Mask Secrets: Ensure all secret variables in Azure DevOps are marked as 'secret'. The pipeline will automatically mask their values (showing '***') in the console logs.\n  2. GitGuardian / Trufflehog: Integrate secret-scanning tools in the pre-commit stage or as a pipeline task to scan the codebase for exposed passwords, keys, or certificates.\n  3. Short-lived Credentials: Use Azure Service Connections with Workload Identity Federation (OIDC) instead of storing long-lived service principal client secrets.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 193,
    "category": "Linux & Git",
    "question": "How do you ensure a Bash script is robust and handles errors safely?",
    "answer": "• Add 'set' options at the beginning of the script:\n  1. 'set -e': Instructs the script to exit immediately if any command exits with a non-zero status.\n  2. 'set -u': Exits the script if it tries to use an uninitialized/unbound variable.\n  3. 'set -o pipefail': Ensures that if any command in a pipeline fails (e.g., cmd1 | cmd2), the exit status of the entire pipeline is that of the failed command, not the last one.\n• Best Practice: Use double quotes around variables to prevent word splitting, and implement a cleanup trap ('trap cleanup EXIT') to clean up temporary files.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 194,
    "category": "Linux & Git",
    "question": "Which Linux commands do you use to troubleshoot network connectivity issues?",
    "answer": "• ping: Check basic network reachability and latency to a host.\n• curl / wget: Test HTTP/HTTPS connections and fetch headers.\n• telnet / nc (netcat): Check if a specific port is open on a remote server (e.g., 'nc -zv 10.0.0.4 3306').\n• nslookup / dig: Query DNS records to troubleshoot hostname resolution.\n• netstat / ss: View active network connections and listening ports on the local machine (e.g., 'ss -tulpn').\n• traceroute / tracepath: Track the route packets take to reach a host, identifying where they are getting dropped.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 195,
    "category": "DevOps General",
    "question": "What is systemd and how do you manage services with it?",
    "answer": "• systemd is the system and service manager for Linux operating systems, acting as the parent process (PID 1).\n• Service Management Commands:\n  • 'sudo systemctl start <service>' - Start a service.\n  • 'sudo systemctl stop <service>' - Stop a service.\n  • 'sudo systemctl restart <service>' - Restart a service.\n  • 'sudo systemctl enable <service>' - Configure the service to start automatically on boot.\n  • 'sudo systemctl status <service>' - View the current status and recent logs.\n• Logs: Use 'journalctl -u <service> -n 100 -f' to view and follow the service logs.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 196,
    "category": "Linux & Git",
    "question": "What is logrotate and why is it important in production Linux servers?",
    "answer": "• logrotate is a system utility that automatically rotates, compresses, and removes log files to prevent them from consuming all available disk space.\n• Features: It can be configured to run daily, weekly, or monthly, compress old logs into .gz files, and keep a specified number of old logs before deleting them.\n• Why: Without logrotate, application logs (like Nginx, Tomcat) would grow infinitely, eventually filling up the disk and causing services to crash.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 197,
    "category": "Linux & Git",
    "question": "Explain the syntax of a Linux cron job.",
    "answer": "• A cron job is a scheduled task that runs automatically at specified intervals.\n• Syntax: * * * * * /path/to/command\n  • Minute (0 - 59)\n  • Hour (0 - 23)\n  • Day of Month (1 - 31)\n  • Month (1 - 12)\n  • Day of Week (0 - 6, where 0 is Sunday)\n• Examples:\n  • '0 0 * * *' - Runs every day at midnight.\n  • '*/5 * * * *' - Runs every 5 minutes.\n  • '0 8 * * 1-5' - Runs at 8:00 AM, Monday through Friday.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 198,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Azure Service Endpoints and Private Endpoints?",
    "answer": "• Service Endpoints: Keep traffic to Azure services (like SQL, Storage) within the Microsoft backbone network. The service still uses its public IP address, but firewalls restrict access only to traffic originating from your specific subnet.\n• Private Endpoints: Allocate a private IP address from your VNet to the Azure service using a network interface (NIC). The service is accessed via this private IP, making it completely private and removing it from the public internet.\n• Best Practice: Use Private Endpoints for enterprise-grade security, as they completely isolate the service and protect against data exfiltration.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 199,
    "category": "Azure & Azure DevOps",
    "question": "Explain VNet Peering in Azure and its types.",
    "answer": "• VNet Peering connects two Azure Virtual Networks seamlessly, allowing resources in either VNet to communicate with each other directly using private IP addresses with low latency.\n• Types:\n  1. Regional VNet Peering: Connects VNets within the same Azure region.\n  2. Global VNet Peering: Connects VNets across different Azure regions.\n• Features: Peered traffic remains on Microsoft's private backbone network, not the public internet. Bandwidth is not restricted, but you are charged for ingress and egress data transfer.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 200,
    "category": "Azure & Azure DevOps",
    "question": "Explain the Hub-and-Spoke network topology in Azure.",
    "answer": "• Hub-and-Spoke is a network design where a central 'Hub' VNet acts as the single point of connectivity to on-premises networks and hosts shared services (like Azure Firewall, Bastion, VPN Gateway).\n• 'Spoke' VNets peer with the Hub and host individual application workloads (like AKS clusters, VMs).\n• Routing: Traffic between spokes, or between spokes and the internet, is routed through the Hub VNet where it can be inspected and filtered by a firewall.\n• Benefits: Centralized security management, reduced cost by sharing common resources, and prevents spokes from communicating directly with each other.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 201,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Azure Application Gateway and Azure Load Balancer?",
    "answer": "• Azure Load Balancer: Operates at Layer 4 (Transport layer). It routes TCP/UDP traffic based on IP address and port. It is extremely fast and suitable for simple VM load balancing.\n• Azure Application Gateway: Operates at Layer 7 (Application layer). It understands HTTP/HTTPS traffic, allowing routing based on URL paths (e.g., /images goes to one pool, /api goes to another). It supports SSL termination, cookie-based session affinity, and includes a Web Application Firewall (WAF).\n• Use Case: Use Application Gateway for web applications and microservices, and Load Balancer for non-HTTP workloads.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 202,
    "category": "Azure & Azure DevOps",
    "question": "How do Azure Monitor, Log Analytics, and Application Insights work together?",
    "answer": "• Azure Monitor: The overarching monitoring service that collects, analyzes, and acts on telemetry data from your Azure and on-premises environments.\n• Log Analytics: A tool within Azure Monitor used to write queries (using Kusto Query Language - KQL) and analyze log data collected from resources.\n• Application Insights: A sub-service of Azure Monitor designed for Application Performance Management (APM). It monitors live web applications, tracking response times, exception rates, dependencies, and user sessions.\n• Integration: Application Insights and Azure resources send their logs to a Log Analytics Workspace, where Azure Monitor uses them to trigger alerts and build dashboards.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 203,
    "category": "DevOps General",
    "question": "Explain SLA, SLO, and SLI in Site Reliability Engineering (SRE).",
    "answer": "• SLI (Service Level Indicator): A quantitative measure of a service's performance in real-time (e.g., HTTP request latency, error rate, uptime percentage).\n• SLO (Service Level Objective): A target reliability level for the service, agreed upon by the team (e.g., 99.9% of HTTP requests must have a latency under 200ms over a 30-day window).\n• SLA (Service Level Agreement): A legal agreement with users specifying the service reliability, including financial penalties or refunds if the SLO is not met (e.g., if uptime falls below 99.5%, users get a 10% refund).\n• Relationship: SLI measures -> SLO targets -> SLA promises.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 204,
    "category": "DevOps General",
    "question": "What is an Error Budget in SRE and how is it used?",
    "answer": "• Error Budget: The maximum allowable unreliability of a service, calculated as 100% - SLO (e.g., if your uptime SLO is 99.9%, your error budget is 0.1% of downtime).\n• Usage: It acts as a balance between feature velocity and service reliability:\n  • If the error budget is full, the development team can push new features rapidly.\n  • If the error budget is exhausted (spent due to outages or bugs), deployments are frozen, and the team must focus solely on stability, bug fixes, and reliability improvements.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 205,
    "category": "DevOps General",
    "question": "What is the difference between Monitoring and Observability?",
    "answer": "• Monitoring: Tells you *when* something is wrong by collecting predefined metrics (e.g., CPU is at 95%, database is down). It answers the question: 'Is the system working?'\n• Observability: Allows you to understand *why* something is wrong by analyzing the internal state of the system using three pillars: Metrics, Logs, and Traces (MelT). It answers the question: 'Why is this specific request failing?'\n• Summary: Monitoring is reactive and focuses on known failure modes. Observability is proactive and helps debug complex, distributed systems with unknown failure modes.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 206,
    "category": "DevOps General",
    "question": "What is a Blameless Post-Mortem?",
    "answer": "• A Blameless Post-Mortem is a meeting and document created after a production incident to analyze what happened, why it happened, and how to prevent it in the future, without pointing fingers or blaming individuals.\n• Key Mindset: Assume that everyone acted with good intentions based on the information they had. Focus on system failures (e.g., lack of guardrails, poor testing, missing alerts) rather than human error.\n• Outcome: Actionable tasks to improve the system, sharing the learnings with the wider organization.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 207,
    "category": "DevOps General",
    "question": "What is Chaos Engineering?",
    "answer": "• Chaos Engineering is the practice of deliberately introducing failures into a production or staging system to test its resilience and verify that it can handle unexpected outages gracefully.\n• Examples: Randomly killing Kubernetes Pods (using Chaos Mesh or Chaos Monkey), injecting network latency, blocking access to databases.\n• Goal: To identify weaknesses (e.g., failing failover mechanisms, missing alerts, cascading failures) before they cause real customer-facing outages.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 208,
    "category": "Linux & Git",
    "question": "What is GitOps and how does it work?",
    "answer": "• GitOps is an operational framework where Git is used as the single source of truth for declarative infrastructure and application deployments.\n• Workflow:\n  1. The desired state of the system is defined in Git repositories (YAML manifests, Helm charts).\n  2. An operator/agent (like ArgoCD or Flux) runs inside the Kubernetes cluster.\n  3. The operator continuously compares the desired state in Git with the actual state in the cluster.\n  4. If a drift is detected, the operator automatically reconciles the cluster to match Git.\n• Benefits: Improved security (pipelines don't need cluster admin access; they just commit to Git), audit trail of all changes, and instant disaster recovery.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 209,
    "category": "DevOps General",
    "question": "What does 'Shift Left' mean in DevSecOps?",
    "answer": "• 'Shift Left' means integrating security testing and compliance validation as early as possible in the software development lifecycle (SDLC), rather than waiting until the deployment or production stage.\n• Implementation:\n  • Code Stage: IDE plugins that highlight insecure code, SAST (Static Application Security Testing) tools.\n  • Commit Stage: Automated secret scanning (checking for committed passwords) and SCA (Software Composition Analysis) to scan third-party dependencies for vulnerabilities.\n  • Build Stage: DAST (Dynamic Application Security Testing) and container image scanning.\n• Benefit: Finding and fixing security bugs early is significantly cheaper, faster, and safer than fixing them in production.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 210,
    "category": "Linux & Git",
    "question": "What is a git squash commit, and why is it useful?",
    "answer": "• Squashing involves combining multiple commits from a feature branch into a single, clean commit before merging it into the main branch.\n• Command: 'git rebase -i' or using the 'Squash and Merge' option in GitHub/Azure DevOps PRs.\n• Benefits: Keeps the commit history of the main branch clean and readable. Instead of showing intermediate commits like 'fixed typo', 'temp commit', 'testing again', it shows a single meaningful commit explaining the entire feature.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 211,
    "category": "DevOps General",
    "question": "What is the difference between SAST and DAST?",
    "answer": "• SAST (Static Application Security Testing): Analyzes the application's source code, byte code, or binaries for security vulnerabilities *without* running the application. It is a 'white-box' testing method.\n• DAST (Dynamic Application Security Testing): Analyzes a running application by simulating external attacks (like SQL injection, XSS) from the outside. It is a 'black-box' testing method.\n• Best Practice: Use both in your pipelines (SAST during the build stage, DAST during the staging/deployment stage) to cover both code-level and runtime vulnerabilities.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 212,
    "category": "DevOps General",
    "question": "What is Software Composition Analysis (SCA) and why is it critical?",
    "answer": "• SCA is the practice of scanning your application's open-source and third-party dependencies (e.g., npm packages, NuGet, Maven libraries) to identify known security vulnerabilities and license compliance issues.\n• Common Tools: Snyk, OWASP Dependency-Check, Black Duck, SonarQube.\n• Why Critical: Modern applications are made up of 80% open-source libraries. If a library you import has a critical vulnerability (like the Log4j vulnerability), your application becomes vulnerable even if your own code is secure.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 213,
    "category": "DevOps General",
    "question": "What is the difference between Immutable Infrastructure and Mutable Infrastructure?",
    "answer": "• Mutable Infrastructure: Servers are modified and updated in-place (e.g., SSHing into a VM to upgrade Nginx, apply patches, or change configs). This leads to 'configuration drift' where servers that should be identical become different over time.\n• Immutable Infrastructure: Servers are never updated in-place. If a configuration change or patch is needed, you build a new server image (AMI, VM image) and deploy new instances, destroying the old ones.\n• Best Practice: Use Immutable Infrastructure (using tools like Packer, Terraform, Docker) to ensure consistency, eliminate configuration drift, and make rollbacks trivial.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 214,
    "category": "Azure & Azure DevOps",
    "question": "What is Workload Identity Federation (OIDC) in Azure DevOps and why should you use it?",
    "answer": "• Workload Identity Federation allows Azure DevOps pipelines to authenticate with Azure securely without storing any long-lived credentials (like Service Principal client secrets) in Azure DevOps.\n• How it works: It uses OpenID Connect (OIDC) to exchange a short-lived federated token issued by Azure DevOps for an Azure AD access token at runtime.\n• Benefit: Eliminates the risk of secret leakage (since there are no secrets stored to leak) and removes the administrative overhead of rotating service principal secrets every year.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 215,
    "category": "Linux & Git",
    "question": "Explain the concept of 'GitOps' vs 'ClickOps'.",
    "answer": "• ClickOps: A slang term for managing infrastructure by manually clicking buttons in a cloud provider's web console. It is error-prone, undocumented, and cannot be easily reproduced or rolled back.\n• GitOps / IaC: Managing infrastructure programmatically using code stored in Git. All changes are peer-reviewed via Pull Requests, automatically tested in pipelines, and fully documented by the commit history.\n• Summary: Shift from ClickOps to GitOps to achieve speed, scalability, consistency, and auditable governance.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices"
  },
  {
    "id": 216,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between a Pod and a Container in Kubernetes?",
    "answer": "• Container: A single, isolated runtime environment wrapping an application and its dependencies (e.g., a Docker container).\n• Pod: The smallest deployable unit in Kubernetes. A Pod can host one or more containers (tightly coupled) that share the same network namespace, storage volumes, and IP address.\n• Analogy: Think of a container as a single person, and a Pod as a room. A room can hold one person or a group of people who need to work closely together.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 217,
    "category": "Linux & Git",
    "question": "What is 'git stash' and when should you use it?",
    "answer": "• 'git stash' temporarily shelves (saves) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later.\n• Use Cases: You are in the middle of a feature, and a critical production bug comes up. You don't want to make half-baked commits. You run 'git stash', switch to main, fix the bug, switch back, and run 'git stash pop' to resume your work.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 218,
    "category": "Terraform (IaC)",
    "question": "What is a Local Value (local) in Terraform and how does it differ from an Input Variable?",
    "answer": "• Input Variables (var): Act like function arguments. They allow users to customize the configuration by passing values at runtime.\n• Local Values (local): Act like local temporary variables in programming. They are defined internally within the module and cannot be set from outside.\n• Best Practice: Use local values to simplify complex expressions, avoid repeating the same values, or construct dynamic values (e.g., combining environment names and resource types for naming conventions).",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 219,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Resource Manager (ARM) and what are its benefits?",
    "answer": "• ARM is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account.\n• Benefits:\n  1. Declarative Templates: Use ARM templates (JSON) or Bicep to deploy infrastructure.\n  2. Resource Groups: Manage resources as a group rather than individually.\n  3. Access Control: Apply RBAC (Role-Based Access Control) to secure resources.\n  4. Tagging: Organize resources using tags for billing and management.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 220,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between Continuous Delivery and Continuous Deployment?",
    "answer": "• Continuous Delivery: Code changes are automatically built, tested, and prepared for a release to production. However, the actual trigger to deploy to production requires manual approval (a human clicks a button).\n• Continuous Deployment: Every change that passes all stages of the automated pipeline is deployed directly to production automatically, without any human intervention.\n• Summary: Continuous Delivery has a manual gate before production; Continuous Deployment is fully automated.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 221,
    "category": "DevOps General",
    "question": "What is the difference between Monolithic and Microservices architecture?",
    "answer": "• Monolithic: The entire application is built as a single, unified codebase and deployed as a single unit. It is simple to develop and deploy initially, but hard to scale, slow to build, and a single bug can bring down the whole system.\n• Microservices: The application is split into small, independent services that communicate via APIs (REST, gRPC). Each service has its own database and can be developed, deployed, and scaled independently. However, it increases operational complexity.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 222,
    "category": "Docker & Kubernetes",
    "question": "How do you run a Docker container in the background (detached mode) and how do you view its logs?",
    "answer": "• Run in Background: Use the '-d' flag. Example: 'docker run -d -p 80:80 nginx'. This starts the container and prints its ID, returning control to your terminal.\n• View Logs: Use 'docker logs <container_id_or_name>'. To follow the logs in real-time, add the '-f' flag (e.g., 'docker logs -f my-nginx').",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 223,
    "category": "Linux & Git",
    "question": "Which Linux commands do you use to check IP address and verify internet connectivity?",
    "answer": "• Check IP Address:\n  • 'ip addr show' (or 'ip a') - The modern and preferred command.\n  • 'ifconfig' - The legacy command (may require net-tools package).\n• Verify Internet Connectivity:\n  • 'ping 8.8.8.8' - Tests network reachability to Google's public DNS.\n  • 'curl -I https://www.google.com' - Tests DNS resolution and HTTP connectivity.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices"
  },
  {
    "id": 224,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between a Stage, a Job, and a Task in a CI/CD pipeline?",
    "answer": "• Stage: A major division in a pipeline that represents a logical phase of the workflow (e.g., Build, Test, Deploy to Dev, Deploy to Prod). Stages usually run sequentially.\n• Job: A collection of steps/tasks run by a single agent. Jobs within a stage can run in parallel if multiple agents are available.\n• Task/Step: The smallest building block of a pipeline. It is a linear sequence of operations executed within a job (e.g., running a bash script, copying files, compiling code).\n• Summary: A Pipeline has multiple Stages -> A Stage has multiple Jobs -> A Job has multiple Tasks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 225,
    "category": "CI/CD & Pipelines",
    "question": "What is a pipeline trigger, and what are the most common types of triggers?",
    "answer": "• A trigger is an event that automatically starts the execution of a CI/CD pipeline.\n• Common Types:\n  1. CI Trigger (Push): Triggers the pipeline whenever code is pushed to a specific branch (e.g., main or release/*).\n  2. PR Trigger (Pull Request): Triggers a validation pipeline when a PR is created or updated, ensuring code compiles and passes tests before merging.\n  3. Scheduled Trigger (Cron): Triggers the pipeline at specific times (e.g., nightly builds at 2:00 AM).\n  4. Pipeline Trigger (Chained): Triggers a pipeline upon the successful completion of another pipeline (e.g., deploying after a successful build).",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 226,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement automated rollbacks in a CD pipeline if a deployment fails?",
    "answer": "• Automated rollback restores the last known stable version of the application immediately when a deployment failure is detected.\n• Implementation Methods:\n  1. Kubernetes/Helm: Kubernetes automatically rolls back a rolling update if readiness probes fail. Helm supports 'helm rollback <release> <revision>'.\n  2. Pipeline Logic: Use a post-deployment script or task that triggers on failure (using 'condition: failed()' in YAML) to run a rollback script.\n  3. Deployment Slot Swap: In Azure App Services, if the swap to production fails health checks, it automatically swaps back to the staging slot.\n• Best Practice: Ensure database migrations are backward-compatible so that rolling back application code doesn't break the database.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 227,
    "category": "CI/CD & Pipelines",
    "question": "What is a Deployment Gate (or Quality Gate) in a release pipeline?",
    "answer": "• A Deployment Gate is an automated check that evaluates health and compliance criteria before a deployment starts or completes.\n• How it works: The pipeline pauses and queries external services. If the criteria are met, the deployment proceeds. If not, it fails or waits.\n• Examples:\n  1. Azure Monitor Alerts: Ensure no active critical alerts exist on the infrastructure.\n  2. SonarQube Quality Gate: Block deployment if the code coverage falls below 80% or new security vulnerabilities are found.\n  3. Service Desk (Jira/ServiceNow): Ensure the change management ticket is approved before deploying to production.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 228,
    "category": "CI/CD & Pipelines",
    "question": "How do you secure credentials, API keys, and certificates inside a CI/CD pipeline?",
    "answer": "• Best Practices:\n  1. Secret Variables: Store secrets in encrypted variable groups (Azure DevOps) or Secrets (GitHub) and mark them as hidden. The runner will mask them in logs.\n  2. Key Vault Integration: Fetch secrets dynamically at runtime from Azure Key Vault or HashiCorp Vault using a pipeline task.\n  3. Workload Identity (OIDC): Use passwordless authentication (OpenID Connect) so the pipeline uses temporary tokens rather than storing long-lived service principal client secrets.\n  4. Least Privilege: Restrict the pipeline's service connection permissions to only the resources it needs to manage.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 229,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between a Declarative pipeline and a Scripted pipeline?",
    "answer": "• Declarative Pipeline (Preferred): Uses a structured, pre-defined schema (typically YAML in GitHub/Azure DevOps, or 'pipeline {}' block in Jenkins). It is easier to read, has built-in syntax checks, and enforces best practices.\n• Scripted Pipeline: Uses a programming language (like Groovy in Jenkins). It offers maximum flexibility and allows complex logic, loops, and error handling, but is harder to maintain and prone to errors.\n• Best Practice: Use Declarative (YAML) pipelines for 95% of use cases. Only use scripted blocks (like Groovy or inline Bash/Powershell) when complex dynamic logic is absolutely necessary.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 230,
    "category": "CI/CD & Pipelines",
    "question": "How do you optimize pipeline execution speed using parallel execution?",
    "answer": "• Parallel execution runs independent jobs or tasks simultaneously rather than sequentially, reducing the total pipeline duration.\n• Implementation:\n  1. Parallel Jobs: Define multiple jobs in a stage that do not depend on each other (e.g., running unit tests, linting, and security scans in parallel).\n  2. Matrix Builds: Run the same job with different configurations (e.g., testing on Node.js 16, 18, and 20 simultaneously).\n  3. Multi-agent: Ensure you have multiple self-hosted agents or concurrent Microsoft-hosted jobs available in your organization to run parallel tasks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 231,
    "category": "CI/CD & Pipelines",
    "question": "What is Semantic Versioning (SemVer) and how do you automate it in pipelines?",
    "answer": "• Semantic Versioning uses a three-part version number: MAJOR.MINOR.PATCH (e.g., 1.4.2).\n  • MAJOR: Incompatible API changes.\n  • MINOR: Add functionality in a backwards-compatible manner.\n  • PATCH: Backwards-compatible bug fixes.\n• Automation: Use tools like 'Semantic Release' or 'GitVersion' in your build pipeline. These tools analyze Git commit messages (following Conventional Commits standard like 'feat:', 'fix:') to automatically calculate the next version, generate release notes, and tag the Git repository.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 232,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle database schema migrations in a Continuous Deployment pipeline?",
    "answer": "• Database migrations must be automated and run before the new application code is deployed.\n• Best Practices:\n  1. Use Migration Tools: Use tools like Liquibase, Flyway, or Entity Framework Migrations.\n  2. Run as a Pipeline Task: Run the migration task in the CD pipeline right before the deployment stage.\n  3. Expand and Contract Pattern: Design database changes to be backwards-compatible (e.g., if renaming a column, first add the new column, copy data, deploy code that writes to both, then remove the old column in a later release). This ensures the app doesn't crash during rolling updates or rollbacks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 233,
    "category": "CI/CD & Pipelines",
    "question": "What is a 'Matrix Build' in CI/CD and when would you use it?",
    "answer": "• A Matrix Build allows you to run a single job multiple times in parallel with different variable configurations.\n• Example: Testing a Python library across multiple Python versions (3.8, 3.9, 3.10) and operating systems (Linux, Windows, macOS).\n• YAML Syntax (GitHub Actions / Azure Pipelines):\n  strategy:\n    matrix:\n      python-version: [3.8, 3.9, 3.10]\n      os: [ubuntu-latest, windows-latest]\n• Use Case: Highly useful for open-source libraries, cross-platform applications, and compatibility testing.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 234,
    "category": "CI/CD & Pipelines",
    "question": "What is the purpose of a Pull Request (PR) validation pipeline?",
    "answer": "• A PR validation pipeline is triggered automatically when a developer opens or updates a Pull Request.\n• Purpose: It compiles the code, runs unit tests, executes linter checks, and performs security scans on the feature branch *before* it is merged into the main branch.\n• Branch Policies: In GitHub or Azure DevOps, you can configure branch protection rules that prevent a PR from being merged unless this validation pipeline completes successfully. This keeps the main branch stable and clean.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 235,
    "category": "CI/CD & Pipelines",
    "question": "What are SAST, DAST, and Dependency Scanning, and where do they fit in a CI/CD pipeline?",
    "answer": "• SAST (Static Application Security Testing): Scans source code for vulnerabilities. Run in the **Build (CI) stage** (e.g., SonarQube).\n• Dependency Scanning (SCA): Scans third-party libraries for known vulnerabilities. Run in the **Build (CI) stage** (e.g., Snyk, OWASP Dependency Check).\n• DAST (Dynamic Application Security Testing): Scans the running application by simulating attacks. Run in the **Staging/QA stage** after deployment (e.g., OWASP ZAP).\n• Best Practice: Break the build if SAST or SCA finds high-severity vulnerabilities to enforce DevSecOps.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 236,
    "category": "CI/CD & Pipelines",
    "question": "What is a containerized runner/agent and what are its advantages?",
    "answer": "• A containerized runner is a CI/CD agent that runs inside a Docker container (e.g., running Azure DevOps agent as a pod in a Kubernetes cluster using KEDA for autoscaling).\n• Advantages:\n  1. Isolation: Each build job runs in a clean, isolated container environment.\n  2. Dynamic Scaling: Scale the number of agents up or down instantly based on the number of queued jobs in the pipeline.\n  3. Cost-Effective: Only consumes infrastructure resources when jobs are actively running.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 237,
    "category": "CI/CD & Pipelines",
    "question": "What is a Service Connection in Azure DevOps pipelines?",
    "answer": "• A Service Connection is a secure configuration that allows Azure Pipelines to connect to external services (e.g., Azure Subscription, Kubernetes Cluster, Docker Registry, GitHub, Jira) without exposing credentials in the pipeline code.\n• How it works: It stores the authentication details (Service Principal, OAuth token, or Kubernetes kubeconfig) securely in Azure DevOps. Developers simply reference the service connection name in their YAML code.\n• Best Practice: Restrict service connection access to specific pipelines and branches using security permissions.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 238,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement manual approvals and notifications in a CD pipeline?",
    "answer": "• Manual approvals ensure that deployments to critical environments (like Production) do not happen without sign-off from stakeholders.\n• Implementation:\n  1. Environments: In Azure DevOps or GitHub, define an environment (e.g., 'Production') and add 'Approvals and Checks'.\n  2. Approval Gate: When the pipeline reaches the deployment stage targeting that environment, it pauses and sends an email/notification to the designated approvers.\n  3. Notifications: Integrate webhooks to send automated messages to Slack or Microsoft Teams when a deployment starts, succeeds, or fails.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 239,
    "category": "CI/CD & Pipelines",
    "question": "What is Pipeline-as-Code and what are its main benefits?",
    "answer": "• Pipeline-as-Code is the practice of defining your CI/CD pipelines using code (typically YAML, JSON, or Groovy) and storing the file in your Git repository alongside your application code.\n• Benefits:\n  1. Version Control: Track changes to the pipeline over time. You can see who modified a step, when, and why.\n  2. Code Review: Pipeline changes are reviewed via Pull Requests before being merged.\n  3. Consistency: Standardize pipelines across multiple projects using reusable templates.\n  4. Disaster Recovery: If the CI/CD server crashes, you can recreate all pipelines instantly from Git.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 240,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between a Monorepo pipeline and a Multi-repo pipeline?",
    "answer": "• Monorepo Pipeline: A single Git repository contains multiple projects/microservices. The pipeline must use path filters ('paths' in YAML) to trigger only the jobs related to the specific microservice that was modified, avoiding rebuilding the entire repo.\n• Multi-repo Pipeline: Each microservice has its own Git repository and its own independent pipeline. It is simpler to manage but makes orchestrating cross-project deployments and managing shared dependencies more challenging.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 241,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle environment-specific configurations in a CD pipeline?",
    "answer": "• Keep your application build artifact environment-agnostic (build once, deploy many).\n• Best Practices:\n  1. Variable Groups / Environments: Use Azure DevOps Variable Groups or GitHub Environments to store variables (e.g., Database URLs, API endpoints) mapped to Dev, QA, and Prod.\n  2. Key Vault: Pull environment-specific secrets dynamically from environment-specific Key Vaults at deployment time.\n  3. Tokenization: Inject variables into configuration files (like appsettings.json or Kubernetes manifests) during the deployment stage using token replacement tasks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 242,
    "category": "CI/CD & Pipelines",
    "question": "What is a 'Dirty' build and how do you ensure clean builds in CI?",
    "answer": "• A 'Dirty' build occurs when files or artifacts left over from a previous build on the same agent affect the current build, leading to inconsistent results.\n• How to ensure Clean Builds:\n  1. Clean Workspace: Configure the pipeline to clean the workspace directory before running (e.g., 'clean: all' in Azure Pipelines, or running 'git clean -fdx').\n  2. Ephemeral Agents: Use Microsoft-hosted agents or containerized runners where a fresh, clean VM/container is created for every job and destroyed immediately afterward.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 243,
    "category": "CI/CD & Pipelines",
    "question": "What is GitOps and how does it differ from traditional push-based CI/CD?",
    "answer": "• Push-based CI/CD (Traditional): The pipeline compiles code and then actively 'pushes' the deployment to the target environment (e.g., running 'kubectl apply' or SSHing into a VM). The pipeline needs admin credentials to the environment.\n• Pull-based GitOps: The pipeline builds the container image and updates a Git repo containing Kubernetes manifests. An operator (like ArgoCD) running *inside* the cluster detects the change in Git and 'pulls' the deployment to match the desired state.\n• Benefit: Higher security (no external credentials needed) and automatic drift correction.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices"
  },
  {
    "id": 244,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: Your CI/CD pipeline fails during the Docker build stage with the error 'no space left on device'. How do you troubleshoot and resolve this?",
    "answer": "“This is a very common issue on self-hosted build agents or runners when old Docker layers, unused images, and build caches accumulate over time. Here is my step-by-step troubleshooting and resolution workflow:\n\n\t1. Immediate Mitigation (Cleanup):\n\t\t•   Log into the build agent via SSH/Bastion.\n\t\t•   Run `df -h` to identify which partition is full (usually `/var/lib/docker`).\n\t\t•   Run Docker prune commands to reclaim space immediately:\n\t\t\t•   `docker system prune -a --volumes` (removes all stopped containers, unused networks, dangling images, and build cache).\n\t\t\t•   `docker builder prune -a` (removes the buildkit cache, which often consumes hundreds of gigabytes).\n\t2. Root Cause Analysis:\n\t\t•   Check if there is a cleanup step in the pipeline. If developers are building Docker images without pruning old ones, the disk will always fill up.\n\t3. Long-Term Automated Prevention:\n\t\t•   **Pipeline Cleanup Step**: Add a post-build cleanup step in the YAML pipeline to prune local Docker images immediately after pushing them to the Azure Container Registry (ACR):\n\t\t\t`docker rmi $(docker images -f \\\"dangling=true\\\" -q)` or run `docker system prune -f` at the end of every run.\n\t\t•   **Cron Job Cleaner**: Set up a daily cron job on the build agent to run a system prune:\n\t\t\t`0 0 * * * /usr/bin/docker system prune -af --volumes`\n\t\t•   **Monitoring**: Configure alert thresholds in Azure Monitor or Prometheus/Grafana to notify the team when the build agent\\'s disk space exceeds 80%.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 245,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: A CI/CD pipeline fails at the 'Push Docker Image' stage with an 'Unauthorized' or 'Access Denied' error. How do you troubleshoot this?",
    "answer": "“An 'unauthorized' error during the push stage means the build runner is failing to authenticate with the Azure Container Registry (ACR). I troubleshoot this using the following steps:\n\n\t1. Verify Service Connection / Service Principal:\n\t\t•   In Azure DevOps, check the **Service Connection** used by the pipeline to connect to Azure/ACR.\n\t\t•   Verify if the associated **Service Principal (App Registration)** client secret has expired. (This is the most common cause). If expired, generate a new secret in Entra ID and update the Service Connection.\n\t2. Verify RBAC Permissions:\n\t\t•   Ensure the Service Principal has the **AcrPush** role assigned at the ACR resource scope. If it only has *AcrPull*, it can download images but will fail to push.\n\t3. Check Network & Firewall Settings:\n\t\t•   If the ACR has public access disabled (Private ACR), ensure the self-hosted build agent is in the same VNet (or a peered VNet) and can resolve the private endpoint IP of the ACR.\n\t\t•   Verify DNS resolution using `nslookup myregistry.azurecr.io` from the build agent.\n\t4. Manual Authentication Test:\n\t\t•   Log into the build agent and run:\n\t\t\t`az acr login --name myregistry` or `docker login myregistry.azurecr.io -u <ServicePrincipalID> -p <ClientSecret>`\n\t\t•   This isolates whether the issue is with the pipeline task configuration or the Azure credentials themselves.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 246,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: During a Continuous Deployment (CD) release, the database migration step fails, locking the database and halting the deployment. How do you handle this?",
    "answer": "“Database migrations are the most risk-prone part of a CD pipeline. When a migration fails, my immediate priority is to restore application availability and safely roll back or fix the migration:\n\n\t1. Immediate Action (Stop & Assess):\n\t\t•   Freeze the pipeline to prevent the new application pods from starting (since the schema is in an inconsistent state).\n\t\t•   Check the migration logs in the pipeline output to identify the failing SQL statement (e.g., table locks, constraint violations, or duplicate columns).\n\t2. Handling the Database Lock:\n\t\t•   If the migration tool (like Liquibase, Flyway, or Entity Framework) crashed mid-run, it might have left a lock table active (e.g., `DATABASECHANGELOGLOCK` in Liquibase).\n\t\t•   Log into the database securely and release the lock manually after ensuring no migration process is active:\n\t\t\t`UPDATE DATABASECHANGELOGLOCK SET LOCKED=ff, LOCKGRANTED=NULL, LOCKEDBY=NULL;`\n\t3. Rollback vs. Roll-Forward:\n\t\t•   **Rollback**: If the migration tool supports automatic rollback (and the migration was backward-compatible), trigger the rollback command via the pipeline.\n\t\t•   **Roll-Forward (Hotfix)**: If the migration made non-reversible changes (like dropping a column), the safest path is to write a corrective SQL script, commit it, and run a hotfix deployment to align the schema.\n\t4. Best Practices for Prevention:\n\t\t•   **Expand and Contract Pattern**: Never drop columns or rename tables in a single release. Step 1: Add new column (both old and new app versions work). Step 2: Migrate data. Step 3: Remove old column in a later release.\n\t\t•   **Pre-Deployment Backups**: Always trigger an automated database snapshot (Azure SQL / AWS RDS backup) right before running the migration step in the pipeline.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 247,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: A deployment pipeline fails with the error 'Key Vault Access Denied' or 'Secret Not Found' when trying to fetch application secrets. How do you troubleshoot this?",
    "answer": "“This error indicates that the pipeline's authentication identity (Service Connection / Service Principal) does not have the required permissions to read from the Azure Key Vault. I troubleshoot this using these steps:\n\n\t1. Check Key Vault Access Policies / RBAC:\n\t\t•   In the Azure Portal, go to the Key Vault -> **Access configuration**.\n\t\t•   If using **Vault Access Policies**: Verify that the Service Principal used by the Azure DevOps Service Connection has `Get` and `List` permissions under **Secret Permissions**.\n\t\t•   If using **Azure RBAC**: Verify that the Service Principal has the **Key Vault Secrets User** role assigned at the Key Vault scope.\n\t2. Check Firewall & Networking:\n\t\t•   If the Key Vault has 'Allow access from: Private endpoints and selected networks' enabled, ensure that:\n\t\t\t•   The pipeline is running on a **self-hosted agent** deployed inside a subnet that is whitelisted in the Key Vault firewall, OR\n\t\t\t•   If using Microsoft-hosted agents, the Key Vault must allow public access, or you must dynamically whitelist the hosted agent's IP during the pipeline run (using `az keyvault network-rule add`).\n\t3. Verify Secret Name and Status:\n\t\t•   Ensure the secret name referenced in the YAML pipeline matches the Key Vault secret name exactly.\n\t\t•   Verify in Key Vault that the secret is **Enabled** and that the current date is not past the secret's **Expiration Date**.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  },
  {
    "id": 248,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: Your application CI/CD pipeline takes over 20 minutes to complete, slowing down the development team. How do you optimize it for speed?",
    "answer": "“To optimize a slow CI/CD pipeline, I analyze the execution logs, identify the bottlenecks, and implement caching and parallelization strategies:\n\n\t1. Enable Dependency Caching:\n\t\t•   Most of the time is spent downloading packages (npm, Maven, NuGet, Python pip).\n\t\t•   I add a caching task in the YAML pipeline to cache these directories based on a hash of the lockfile (e.g., `package-lock.json` or `pom.xml`).\n\t\t•   In Azure DevOps: Use the `Cache@2` task to cache the `node_modules` or `.m2` directory.\n\t2. Optimize Docker Builds:\n\t\t•   **Multi-stage Builds**: Ensure the Dockerfile is optimized using multi-stage builds so only the final runtime binary is included.\n\t\t•   **Layer Caching**: Order the instructions in the Dockerfile from least-frequently changed to most-frequently changed (e.g., copy package files and run install *before* copying the application source code).\n\t\t•   **BuildKit Cache**: Enable remote caching in the docker build task:\n\t\t\t`docker buildx build --cache-from=type=registry,ref=myregistry.azurecr.io/cache --cache-to=type=registry,ref=myregistry.azurecr.io/cache,mode=max`\n\t3. Parallelize Jobs and Tasks:\n\t\t•   Split independent tasks (like running unit tests, static code analysis, and security scanning) into parallel jobs that run concurrently on different agents.\n\t4. Use Self-Hosted Runners with High Specs:\n\t\t•   If Microsoft-hosted agents (which are limited in CPU/Memory) are too slow, migrate the build stage to high-performance self-hosted runners on Azure VMs with SSD storage.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A"
  }
];

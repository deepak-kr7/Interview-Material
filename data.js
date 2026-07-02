// DevOps Q&A Data
const qaData = [
  {
    "id": 1,
    "category": "Azure & Azure DevOps",
    "question": "Explain Azure Role-Based Access Control (RBAC)",
    "answer": "Role-Based Access Control (RBAC) is the authorization system in Azure:\n1. **Core Concept**: Restricts access to resources based on assigned roles. It answers 'Who (Security Principal) can do What (Role definition) to Which resource (Scope)'.\n2. **Built-in Roles**: Owner (full access + delegate access), Contributor (full access except delegate), and Reader (view access only).\n3. **Best Practice**: Apply the principle of least privilege, assigning roles at the resource group or resource scope rather than the subscription level.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 2,
    "category": "DevOps General",
    "question": "Basic steps to give Contributor and Reader role",
    "answer": "•\tSign in to Azure Portal. \n\t•\tGo to the Subscription/Resource Group/Resource. \n\t•\tSelect Access Control (IAM). \n\t•\tClick Add > Add Role Assignment. \n\t•\tSelect the role: \n\t•\tContributor \n\t•\tReader \n\t•\tSelect the User, Group, or Service Principal. \n\t•\tClick Review + Assign.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 3,
    "category": "Linux & Git",
    "question": "How can I give user permission to files in Linux?",
    "answer": "“In Linux, file permissions and ownership can be managed using a variety of commands to control access:\n\n\t1. Changing File Ownership (`chown`):\n\t\t•   To change the owner of a file: `sudo chown username filename`\n\t\t•   To change both the owner and the group: `sudo chown username:groupname filename`\n\t\t•   To apply ownership changes recursively to all files in a directory: `sudo chown -R username:groupname /path/to/directory`\n\n\t2. Changing File Permissions (`chmod`):\n\t\t•   Using Octal (Numeric) Mode:\n\t\t\t•   `chmod 755 filename` -> Read, write, execute (7) for Owner; read and execute (5) for Group and Others.\n\t\t\t•   `chmod 644 filename` -> Read and write (6) for Owner; read-only (4) for Group and Others.\n\t\t•   Using Symbolic Mode:\n\t\t\t•   `chmod u+x filename` -> Adds execute (+x) permission for the owner (u).\n\t\t\t•   `chmod g-w filename` -> Removes write (-w) permission for the group (g).\n\n\t3. Managing Group Membership:\n\t\t•   Add a user to a supplementary group to grant them the group's permissions:\n\t\t    `sudo usermod -aG groupname username`\n\n\t4. Advanced Access Control Lists (ACLs):\n\t\t•   For fine-grained permissions (e.g., granting a specific user access without changing the owner or group):\n\t\t    `setfacl -m u:username:rwx filename`\n\t\t•   To view the ACL permissions: `getfacl filename`\n\nTo verify the permissions, run `ls -l filename`, which displays the owner, group, and the read (r), write (w), and execute (x) flags.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 4,
    "category": "Docker & Kubernetes",
    "question": "What is Docker? Tell about Dockerfile",
    "answer": "Docker is a containerization platform that packages applications along with their dependencies so they run consistently across different environments.\nDockerfile\nA Dockerfile is a text file containing instructions to build a Docker image.\nExample:\nFROM ubuntu:22.04\n\nRUN apt update\n\nCOPY . /app\n\nWORKDIR /app\n\nRUN apt install -y python3\n\nCMD [\"python3\",\"app.py\"]\nCommon instructions:\n\t•\tFROM \n\t•\tRUN \n\t•\tCOPY \n\t•\tADD \n\t•\tWORKDIR \n\t•\tENV \n\t•\tEXPOSE \n\t•\tCMD \n\t•\tENTRYPOINT",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 5,
    "category": "DevOps General",
    "question": "How can I give Owner permission to a user?",
    "answer": "“To grant 'Owner' permissions to a user in Microsoft Azure, you use Role-Based Access Control (RBAC) via the Azure Portal, Azure CLI, or Terraform:\n\n\t1. Via the Azure Portal:\n\t\t•   Navigate to the target Scope (e.g., a Subscription, Resource Group, or individual Resource).\n\t\t•   Click on the **Access Control (IAM)** tab in the left-hand menu.\n\t\t•   Click **+ Add** and select **Add role assignment**.\n\t\t•   Under the **Role** tab, search for and select the **Owner** role, then click Next.\n\t\t•   Under the **Members** tab, click **+ Select members**, search for the user's name or email, select them, and click Select.\n\t\t•   Click **Review + assign** to complete the process.\n\n\t2. Via the Azure CLI:\n\t\t•   Run the following command:\n\t\t    `az role assignment create --assignee \"user@example.com\" --role \"Owner\" --scope \"/subscriptions/<subscription-id>/resourceGroups/<rg-name>\"`\n\nWhat the Owner Role Can Do:\n\t•   **Full Control**: Create, read, update, and delete all resources within the assigned scope.\n\t•   **Access Management**: Delegate permissions to other users by creating new RBAC role assignments (this distinguishes the 'Owner' role from the 'Contributor' role, which cannot manage access control).”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 6,
    "category": "CI/CD & Pipelines",
    "question": "Tell steps to build a VM",
    "answer": "•\tAzure Portal \n\t•\tCreate Resource Group \n\t•\tCreate Virtual Machine \n\t•\tSelect Image (Ubuntu/Windows) \n\t•\tChoose VM Size \n\t•\tConfigure Username & Password/SSH Key \n\t•\tConfigure Networking (VNet, NSG) \n\t•\tConfigure Disk \n\t•\tReview \n\t•\tCreate \nAfter deployment:\n\t•\tConnect using SSH/RDP \n\t•\tInstall required software",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 7,
    "category": "DevOps General",
    "question": "Which type of VM have you built?",
    "answer": "“As a DevOps and Cloud Engineer, I have provisioned and configured various types of Virtual Machines in Azure and AWS, tailored to specific workload demands:\n\n\t1. Linux Virtual Machines:\n\t\t•   **Ubuntu Server (20.04 LTS / 22.04 LTS)**: Primarily used for hosting our core application workloads, Jenkins build agents, Docker hosts, and Kubernetes worker nodes.\n\t\t•   **Red Hat Enterprise Linux (RHEL) / CentOS**: Used for hosting enterprise database workloads (PostgreSQL) and legacy applications that require enterprise-grade stability and support.\n\n\t2. Windows Server Virtual Machines:\n\t\t•   **Windows Server 2019 / 2022**: Used for running Active Directory (Azure AD DS), testing application compatibility, and hosting IIS-based web applications.\n\n\t3. Standard VM Sizes Used (Azure Examples):\n\t\t•   **B-Series (Burstable)**: E.g., `Standard_B2s` for low-traffic development and testing environments to minimize costs.\n\t\t•   **D-Series (General Purpose)**: E.g., `Standard_D4s_v5` for production Jenkins controllers, application servers, and Kubernetes nodes requiring a balance of CPU and memory.\n\t\t•   **E-Series (Memory Optimized)**: E.g., `Standard_E8s_v5` for running memory-intensive database engines and caching servers like Redis.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 8,
    "category": "Docker & Kubernetes",
    "question": "Tell about Kubernetes and Kubernetes Cluster",
    "answer": "Kubernetes (K8s) is an orchestration platform used to deploy, manage, scale, and monitor containerized applications.\nKubernetes Cluster\nA cluster consists of:\nControl Plane\n\t•\tAPI Server \n\t•\tScheduler \n\t•\tController Manager \n\t•\tetcd \nWorker Nodes\n\t•\tkubelet \n\t•\tkube-proxy \n\t•\tContainer Runtime \nBenefits:\n\t•\tAuto Scaling \n\t•\tSelf Healing \n\t•\tLoad Balancing \n\t•\tRolling Updates \n\t•\tHigh Availability",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 9,
    "category": "CI/CD & Pipelines",
    "question": "Explain Azure Pipelines and process",
    "answer": "Azure Pipelines is a CI/CD service used to automate build, test, and deployment.\nFlow:\nDeveloper\n     ↓\nPush code to Git\n     ↓\nPipeline Trigger\n     ↓\nBuild\n     ↓\nRun Tests\n     ↓\nCreate Artifact\n     ↓\nDeploy to Dev\n     ↓\nApproval\n     ↓\nDeploy to QA\n     ↓\nDeploy to Production\nPipeline is usually defined using YAML.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 10,
    "category": "Terraform (IaC)",
    "question": "Explain Terraform Lock",
    "answer": "Terraform Lock prevents multiple users from modifying the same infrastructure simultaneously.\nDuring:\nterraform apply\nTerraform creates a lock.\nBackend examples:\n\t•\tAzure Storage \n\t•\tAWS S3 + DynamoDB \n\t•\tTerraform Cloud \nBenefits:\n\t•\tPrevents corruption \n\t•\tPrevents concurrent updates",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 11,
    "category": "Terraform (IaC)",
    "question": "Explain Terraform commands",
    "answer": "terraform init\nInitialize Terraform.\nterraform fmt\nFormat configuration.\nterraform validate\nValidate syntax.\nterraform plan\nShow execution plan.\nterraform apply\nCreate or update infrastructure.\nterraform destroy\nDelete infrastructure.\nterraform show\nDisplay state.\nterraform output\nShow outputs.\nterraform state list\nList resources.\nterraform refresh\nRefresh state (older command; newer workflows refresh during plan/apply).",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 12,
    "category": "Linux & Git",
    "question": "Share 10 Linux commands",
    "answer": "“Here are 10 essential Linux commands that I use daily for system administration, directory navigation, and troubleshooting:\n\n\t1. `pwd` (Print Working Directory): Displays the absolute path of the directory you are currently in.\n\t   *Example*: `pwd`\n\t2. `ls` (List): Lists the files and directories in the current folder.\n\t   *Example*: `ls -lah` (lists all files, including hidden ones, in long format with human-readable file sizes).\n\t3. `cd` (Change Directory): Navigates between directories in the filesystem.\n\t   *Example*: `cd /var/log`\n\t4. `mkdir` (Make Directory): Creates a new folder.\n\t   *Example*: `mkdir -p /app/config` (the `-p` flag creates parent directories if they don't exist).\n\t5. `rm` (Remove): Deletes files or directories.\n\t   *Example*: `rm -rf /tmp/cache` (recursively and forcefully deletes the directory).\n\t6. `cp` (Copy): Copies files or directories from one location to another.\n\t   *Example*: `cp -r /src /dest`\n\t7. `mv` (Move / Rename): Moves files or renames them.\n\t   *Example*: `mv oldname.txt newname.txt`\n\t8. `cat` (Concatenate): Outputs the contents of a file to the terminal.\n\t   *Example*: `cat /etc/resolv.conf`\n\t9. `chmod` (Change Mode): Modifies file and directory access permissions.\n\t   *Example*: `chmod 755 script.sh`\n\t10. `chown` (Change Owner): Modifies the owner and group of a file or directory.\n\t    *Example*: `chown -R admin:webgroup /var/www`”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 13,
    "category": "CI/CD & Pipelines",
    "question": "Do we use terraform apply on pipelines?",
    "answer": "Yes.\nTypical CI/CD process:\nGit Push\n      ↓\nTerraform Init\n      ↓\nTerraform Validate\n      ↓\nTerraform Plan\n      ↓\nApproval\n      ↓\nTerraform Apply\nUsually:\n\t•\tterraform plan runs automatically. \n\t•\tterraform apply runs after approval for production.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 14,
    "category": "Behavioral & Project",
    "question": "Why need to change company?",
    "answer": "Sample answer:\n\"I have learned a lot in my current organization and gained hands-on experience in Azure, Terraform, Docker, Kubernetes, Linux, and CI/CD. Now I'm looking for a role with more challenging projects, greater responsibility, and opportunities to enhance my DevOps and cloud skills while contributing to business growth.\"",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 15,
    "category": "Linux & Git",
    "question": "If error occurs in Linux without hardware or service issues, what will you check?",
    "answer": "“If an error occurs on a Linux server but the hardware is healthy and the service daemon is running, the issue is likely due to OS-level resource exhaustion, configuration drift, or permission blocks. I check the following:\n\n\t1. System and Kernel Logs:\n\t\t•   **System Log**: Run `journalctl -xe` or inspect `/var/log/syslog` (or `/var/log/messages` on RHEL) to check for system-level errors.\n\t\t•   **Kernel Ring Buffer**: Run `dmesg -T` to check for kernel-level alerts, such as the Out-Of-Memory (OOM) killer terminating processes.\n\n\t2. Resource Utilization:\n\t\t•   **Disk Space**: Run `df -h` to verify if any mount point is 100% full, which prevents writing logs or temp files.\n\t\t•   **Inodes**: Run `df -i` to check if the filesystem has run out of inodes (preventing new file creation even if disk space is free).\n\t\t•   **Memory & Swap**: Run `free -m` or `top` / `htop` to check if physical memory is exhausted and the system is swapping heavily.\n\t\t•   **CPU & Load Average**: Run `uptime` and `top` to check the CPU load average and identify high-CPU processes.\n\n\t3. Permissions and File Handles:\n\t\t•   **Permissions**: Verify file/directory ownership and read/write/execute permissions using `ls -la`.\n\t\t•   **Open Files**: Run `ulimit -n` and check `/proc/sys/fs/file-max` to see if the process has reached the maximum open file descriptors limit.\n\n\t4. Network and DNS:\n\t\t•   **DNS Resolution**: Run `nslookup google.com` or `dig` to verify if DNS resolution is working.\n\t\t•   **Network Ports**: Run `netstat -tuln` or `ss -tuln` to verify if the application is listening on the expected ports.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 16,
    "category": "Docker & Kubernetes",
    "question": "Suppose error occurs in Docker, what will you check?",
    "answer": "I would check:\n\t•\tContainer status \ndocker ps -a\n\t•\tContainer logs \ndocker logs <container>\n\t•\tDocker service \nsystemctl status docker\n\t•\tImage availability \ndocker images\n\t•\tPort conflicts \ndocker port <container>\n\t•\tVolume mounts \n\t•\tNetwork configuration \n\t•\tDisk space \ndf -h\n\t•\tRestart container if required",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 17,
    "category": "DevOps General",
    "question": "Before DevOps what was the gap?",
    "answer": "Before DevOps:\n\t•\tDevelopment and Operations worked separately. \n\t•\tManual deployments. \n\t•\tSlow software releases. \n\t•\tPoor communication. \n\t•\tFrequent deployment failures. \n\t•\tLonger recovery times. \n\t•\tEnvironment inconsistencies (\"works on my machine\" problem).",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 18,
    "category": "DevOps General",
    "question": "How were things running before DevOps?",
    "answer": "Traditional software delivery process:\n\t•\tDevelopers wrote code. \n\t•\tQA tested manually. \n\t•\tOperations deployed manually. \n\t•\tReleases took weeks or months. \n\t•\tMany manual approvals. \n\t•\tHigher chances of human error. \n\t•\tLimited automation and slower feedback. \nDevOps introduced automation, CI/CD, Infrastructure as Code, monitoring, and collaboration, enabling faster and more reliable releases.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 19,
    "category": "Docker & Kubernetes",
    "question": "What deployment strategy are you following in your organization?",
    "answer": "Sample Answer:\n\"In my organization, we primarily follow a Rolling Deployment strategy for production workloads running on Kubernetes (AKS). This allows us to update pods gradually without downtime. Before production deployment, the application is deployed to Dev, QA, and UAT environments through Azure DevOps multi-stage YAML pipelines. We also use health checks and monitor the deployment through Grafana and Prometheus. If any issue is detected, we either perform a rollback using Kubernetes deployment history or redeploy the previous stable version.\"\nOther deployment strategies you can mention:\n\t•\tRolling Deployment (most common) \n\t•\tBlue-Green Deployment \n\t•\tCanary Deployment \n\t•\tRecreate Deployment",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 20,
    "category": "DevOps General",
    "question": "Frontend team deployed code to production, found an issue. How would you handle it as an Infrastructure Engineer?",
    "answer": "Sample Answer:\n\"As an Infrastructure Engineer, my first responsibility is to determine whether the issue is infrastructure-related or application-related.\"\nSteps:\n\t•\tCheck Azure DevOps pipeline status. \n\t•\tVerify deployment completed successfully. \n\t•\tCheck Kubernetes pod status:\nkubectl get pods\nkubectl describe pod <pod-name>\n\t•\tReview application logs:\nkubectl logs <pod-name>\n\t•\tCheck ingress/load balancer configuration. \n\t•\tVerify backend API connectivity. \n\t•\tMonitor Grafana dashboards for CPU, memory, latency, and errors. \n\t•\tIf the issue is caused by the latest deployment, coordinate with the development team and perform a rollback:\nkubectl rollout undo deployment <deployment-name>\n\t•\tDocument the root cause and actions taken.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 21,
    "category": "Azure & Azure DevOps",
    "question": "How would you migrate a 3-tier application from on-premises to Azure with minimal downtime?",
    "answer": "A typical approach:\nStep 1: Assessment\n\t•\tInventory servers and applications. \n\t•\tIdentify dependencies. \n\t•\tAssess databases and storage. \nStep 2: Azure Landing Zone\n\t•\tCreate Resource Groups. \n\t•\tConfigure VNets and Subnets. \n\t•\tConfigure NSGs. \n\t•\tSet up Azure Load Balancer or Application Gateway. \nStep 3: Migrate Each Tier\n\t•\tWeb Tier → Azure VM or AKS. \n\t•\tApplication Tier → Azure VM Scale Set or AKS. \n\t•\tDatabase Tier → Azure SQL Database or Azure Database for PostgreSQL/MySQL (or SQL VM if required). \nStep 4: Data Synchronization\n\t•\tUse Azure Database Migration Service. \n\t•\tSynchronize data until cutover. \nStep 5: Validation\n\t•\tTest application functionality. \n\t•\tValidate network connectivity. \n\t•\tPerform performance testing. \nStep 6: Cutover\n\t•\tSchedule a maintenance window. \n\t•\tUpdate DNS. \n\t•\tSwitch production traffic. \n\t•\tMonitor application health. \nThis phased approach minimizes downtime and reduces migration risk.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 22,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Blob Storage? How does it work?",
    "answer": "Azure Blob Storage is Microsoft's object storage service used for storing unstructured data.\nExamples:\n\t•\tImages \n\t•\tVideos \n\t•\tDocuments \n\t•\tBackups \n\t•\tLogs \nHierarchy\nStorage Account\n      ↓\nContainer\n      ↓\nBlob\nBlob Types\n\t•\tBlock Blob \n\t•\tAppend Blob \n\t•\tPage Blob \nHow it works\n\t•\tCreate a Storage Account. \n\t•\tCreate one or more Containers. \n\t•\tUpload blobs. \n\t•\tAccess blobs securely using Azure AD, Shared Access Signatures (SAS), or access keys. \nUse cases:\n\t•\tStatic website hosting \n\t•\tApplication logs \n\t•\tBackup and archival \n\t•\tData lake storage",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 23,
    "category": "CI/CD & Pipelines",
    "question": "Have you worked with Multi-Stage YAML Pipelines?",
    "answer": "Sample Answer:\n\"Yes. I have worked with Azure DevOps multi-stage YAML pipelines.\"\nTypical stages:\nBuild\n    ↓\nUnit Test\n    ↓\nSecurity Scan\n    ↓\nDeploy to Dev\n    ↓\nDeploy to QA\n    ↓\nApproval\n    ↓\nDeploy to UAT\n    ↓\nApproval\n    ↓\nDeploy to Production\nBenefits:\n\t•\tSingle YAML definition \n\t•\tReusable templates \n\t•\tAutomated approvals \n\t•\tBetter traceability \n\t•\tConsistent deployments",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 24,
    "category": "Azure & Azure DevOps",
    "question": "How do you implement Environment Approval in Azure DevOps?",
    "answer": "Steps:\n\t•\tAzure DevOps \n\t•\tPipelines \n\t•\tEnvironments \n\t•\tCreate or select an Environment. \n\t•\tConfigure Approvals and Checks. \n\t•\tAdd approvers (e.g., Team Lead or Manager). \n\t•\tReference the environment in the YAML pipeline. \nExample:\nstages:\n- stage: Production\n  jobs:\n  - deployment: DeployProd\n    environment: Production\nWhen the pipeline reaches the Production stage, it pauses until an approver approves the deployment.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 25,
    "category": "DevOps General",
    "question": "Grafana shows a 404 API error. How would you troubleshoot and find the RCA?",
    "answer": "Troubleshooting steps:\n\t•\tConfirm the error in Grafana dashboards. \n\t•\tCheck API logs. \n\t•\tVerify if the API endpoint exists. \n\t•\tCheck Kubernetes Ingress configuration. \n\t•\tVerify Service and Endpoints:\nkubectl get svc\nkubectl get endpoints\n\t•\tCheck pod health:\nkubectl get pods\nkubectl logs\n\t•\tTest the API directly:\ncurl http://api-url\n\t•\tCheck DNS resolution. \n\t•\tVerify Azure Application Gateway or Load Balancer routing. \n\t•\tReview recent deployments. \nPossible Root Causes (RCA):\n\t•\tIncorrect API URL. \n\t•\tWrong ingress path. \n\t•\tService selector mismatch. \n\t•\tBackend pods unavailable. \n\t•\tFailed deployment. \n\t•\tDNS issues. \n\t•\tApplication routing changes.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 26,
    "category": "DevOps General",
    "question": "You are getting a 404 error. How would you troubleshoot from an infrastructure perspective?",
    "answer": "As an Infrastructure Engineer, I would check the infrastructure layer before assuming it's an application issue.\nStep 1: DNS\n\t•\tIs the domain resolving correctly?\nnslookup <domain>\nStep 2: Network\n\t•\tVerify connectivity.\nping\ntraceroute\nStep 3: Load Balancer/Application Gateway\n\t•\tCheck backend health. \n\t•\tVerify listener and routing rules. \nStep 4: Kubernetes\n\t•\tCheck Ingress:\nkubectl get ingress\nkubectl describe ingress\n\t•\tCheck Services:\nkubectl get svc\n\t•\tCheck Pods:\nkubectl get pods\nkubectl logs <pod-name>\nStep 5: Web Server\n\t•\tVerify NGINX or Apache configuration. \n\t•\tCheck reverse proxy rules. \nStep 6: Firewall/NSG\n\t•\tEnsure required ports (80/443) are open. \nStep 7: SSL\n\t•\tValidate certificates if HTTPS is used. \nStep 8: Deployment\n\t•\tConfirm the latest deployment is healthy. \n\t•\tRoll back if needed. \nConclusion: If all infrastructure components (DNS, networking, load balancer, ingress, services, and pods) are healthy, I would escalate the issue to the application team with my findings, as the 404 is likely due to an application routing or API configuration issue rather than the infrastructure itself.\nThese responses are suitable for Azure DevOps/Cloud Engineer interviews with around 3–5 years of experience, as they demonstrate both technical knowledge and a structured troubleshooting approach.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 27,
    "category": "DevOps General",
    "question": "Trying to clone a repository and getting a 403 error. What will you do?",
    "answer": "A 403 Forbidden error means authentication succeeded or reached the server, but you don't have permission to access the repository.\nTroubleshooting steps:\n\t•\tVerify the repository URL. \n\t•\tCheck if I have access to the repository. \n\t•\tVerify my Git credentials or Personal Access Token (PAT). \n\t•\tEnsure the PAT hasn't expired and has the correct scopes (e.g., Code: Read). \n\t•\tCheck if SSH keys are configured correctly (if using SSH). \n\t•\tConfirm I'm logged into the correct GitHub/Azure DevOps account. \n\t•\tTest network/proxy settings if behind a corporate firewall. \n\t•\tAsk the repository administrator to verify my permissions.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 28,
    "category": "Docker & Kubernetes",
    "question": "How to reduce Docker image size if it's 2.5 GB?",
    "answer": "Ways to reduce image size:\n\t•\tUse lightweight base images (e.g., alpine or slim images). \n\t•\tUse multi-stage builds. \n\t•\tRemove unnecessary packages and cache:\napt-get clean\nrm -rf /var/lib/apt/lists/*\n\t•\tCombine RUN commands to reduce image layers. \n\t•\tAdd a .dockerignore file to exclude unnecessary files. \n\t•\tCopy only required files instead of the entire project. \n\t•\tAvoid installing development tools in the production image. \nThis can often reduce an image from several GB to a few hundred MB.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 29,
    "category": "Docker & Kubernetes",
    "question": "Difference between CMD and ENTRYPOINT in Docker",
    "answer": "CMD\nENTRYPOINT\nProvides default command\nDefines the main executable\nCan be overridden easily\nAlways runs unless explicitly overridden\nUsed for default arguments\nUsed when the container should always execute a specific program\nExample:\nENTRYPOINT [\"python\"]\nCMD [\"app.py\"]\nRunning:\ndocker run image test.py\nResults in:\npython test.py",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 30,
    "category": "DevOps General",
    "question": "Difference between Ingress Controller and API Gateway",
    "answer": "“While both Ingress Controllers and API Gateways manage incoming traffic (North-South traffic) in a microservices architecture, they serve different purposes and operate at different levels:\n\n\t1. Ingress Controller:\n\t\t•\tWhat it is: A Kubernetes-native resource that manages external access to services within a cluster. It acts as a smart reverse proxy.\n\t\t•\tScope: Operates primarily at the entry point of a Kubernetes cluster.\n\t\t•\tCore Functions:\n\t\t\t•\tLayer 7 HTTP/HTTPS routing based on hostnames (e.g., api.example.com) or paths (e.g., /users).\n\t\t\t•\tSSL/TLS termination.\n\t\t\t•\tBasic path-based load balancing.\n\t\t•\tExamples: NGINX Ingress Controller, Traefik, HAProxy, Azure AGIC.\n\n\t2. API Gateway:\n\t\t•\tWhat it is: A comprehensive API management layer that acts as a single entry point for all clients. It is application-aware and designed to manage APIs as products.\n\t\t•\tScope: Can operate inside or outside Kubernetes, managing traffic across multiple clusters, VMs, or legacy systems.\n\t\t•\tCore Functions:\n\t\t\t•\tAdvanced Security: Authentication (JWT, OAuth2, API Keys) and Authorization.\n\t\t\t•\tTraffic Control: Rate limiting, throttling, request/response transformation.\n\t\t\t•\tAPI Lifecycle Management: Caching, request retries, circuit breaking, telemetry, and API analytics.\n\t\t\t•\tDeveloper Portal: API documentation and usage tracking.\n\t\t•\tExamples: Kong, Apigee, Azure API Management (APIM), AWS API Gateway.\n\nSummary of Differences:\n| Feature | Ingress Controller | API Gateway |\n| :--- | :--- | :--- |\n| Primary Focus | Simple routing and load balancing within Kubernetes. | Advanced API management, security, and traffic control. |\n| Scope | Cluster-bound (runs inside Kubernetes). | Global (can span across Kubernetes, VMs, and cloud services). |\n| Key Capabilities | Path/Host routing, SSL termination. | Rate limiting, JWT validation, caching, transformations. |\n| Target Audience | DevOps / Platform Engineers. | API Developers / Product Owners. |\n\nIn a production enterprise architecture, we often use both together: an external API Gateway (like Azure APIM or Kong) handles authentication, rate limiting, and global routing, and then forwards the traffic to an Ingress Controller (like NGINX) inside the AKS cluster to distribute traffic to specific pods.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 31,
    "category": "Docker & Kubernetes",
    "question": "Difference between PV and PVC in Kubernetes",
    "answer": "“In Kubernetes, Persistent Volumes (PV) and Persistent Volume Claims (PVC) decouple storage provisioning from storage consumption:\n\n\t1. Persistent Volume (PV):\n\t\t•\tWhat it is: The actual storage resource in the cluster, provisioned by an administrator or dynamically via a StorageClass. It represents a physical disk in the cloud (like Azure Disk, Azure Files, or AWS EBS).\n\t\t•\tLifecycle: It has its own lifecycle independent of any individual pod that uses it.\n\t\t•\tScope: It is a cluster-wide resource (not bound to a namespace).\n\n\t2. Persistent Volume Claim (PVC):\n\t\t•\tWhat it is: A request for storage by a developer or a Pod. It specifies the size, access mode (e.g., ReadWriteOnce, ReadWriteMany), and optionally a specific StorageClass.\n\t\t•\tLifecycle: It is bound to a specific namespace. When a pod needs storage, it references the PVC, and Kubernetes automatically binds it to a matching PV.\n\nFlow of Storage:\nPod ---> requests storage via ---> PVC ---> binds to ---> PV ---> points to physical ---> Storage (Azure Disk/S3)\n\nKey Differences:\n| Feature | Persistent Volume (PV) | Persistent Volume Claim (PVC) |\n| :--- | :--- | :--- |\n| Concept | The actual storage resource (like a VM). | A request for storage (like a VM request). |\n| Created By | Cluster Administrator or StorageClass. | Application Developer or Helm Chart. |\n| Scope | Cluster-wide (Namespace-agnostic). | Namespace-scoped. |\n| Reusability | Can be reused depending on Reclaim Policy. | Bound to a single pod/workload at a time. |\n\nReclaim Policies:\n\t•\tRetain: Keeps the PV and its data after PVC deletion (requires manual cleanup).\n\t•\tDelete: Automatically deletes the PV and physical storage when the PVC is deleted.\n\t•\tRecycle: Performs a basic scrub (`rm -rf`) and makes it available again (deprecated).”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 32,
    "category": "Docker & Kubernetes",
    "question": "How do you monitor Kubernetes applications?",
    "answer": "“I implement a comprehensive 3-tier monitoring strategy for Kubernetes applications:\n\n\t1. Metrics Collection (Prometheus & Grafana):\n\t\t•\tPrometheus: Scrapes time-series metrics from Kubernetes nodes, kube-state-metrics, and application-specific endpoints (using Prometheus exporters).\n\t\t•\tGrafana: Visualizes these metrics through dashboards, showing real-time CPU, memory, network I/O, and disk utilization.\n\t2. Log Aggregation (EFK/LKF Stack or Azure Log Analytics):\n\t\t•\tWe use Fluentd or Promtail as a DaemonSet to collect stdout/stderr logs from all containers and forward them to Elasticsearch or Loki.\n\t\t•\tKibana or Grafana is used to query logs for troubleshooting application errors.\n\t3. Key Metrics to Monitor:\n\t\t•\tNode Health: Disk pressure, memory pressure, CPU usage, and network saturation.\n\t\t•\tPod Metrics: Restart counts, CPU/Memory limits vs. requests, and pending pod counts.\n\t\t•\tApplication Health: HTTP request rates, error rates (5xx/4xx), and latency.\n\t4. Alerting (Alertmanager / Azure Alerts):\n\t\t•\tSet up alerts for critical events (e.g., `CrashLoopBackOff`, Node status `NotReady`, or disk usage exceeding 85%) to notify the team via Slack or PagerDuty.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 33,
    "category": "Docker & Kubernetes",
    "question": "Explain the working of CNI in Kubernetes",
    "answer": "“CNI (Container Network Interface) is a standardized specification that defines how network plugins should configure networking for Kubernetes Pods.\n\nHow CNI Works Step-by-Step:\n\t1. Pod Creation: The API Server schedules a Pod to a Node, and the local Kubelet begins creating the Pod.\n\t2. Network Namespace Creation: Kubelet creates a network namespace (netns) for the Pod.\n\t3. CNI Trigger: Kubelet calls the CNI plugin (configured on the node) with `ADD` command, passing the container ID and netns path.\n\t4. IP Assignment & Routing:\n\t\t•\tThe CNI plugin allocates an IP address to the Pod from the node's CIDR block.\n\t\t•\tIt creates a virtual ethernet pair (`veth` pair): one end is attached to the pod's namespace (as `eth0`), and the other end is attached to the host network (e.g., a bridge).\n\t5. Communication: CNI configures the routing tables so the Pod can communicate with other Pods across the cluster.\n\nPopular CNI Plugins:\n\t•\tAzure CNI: Gives each Pod a real IP address from the Azure VNet (highly performant, but consumes many VNet IPs).\n\t•\tKubenet: A basic plugin where Pods get IPs from a private range, and the host performs NAT (saves IPs but has routing overhead).\n\t•\tCalico: Uses BGP for high-performance routing and supports fine-grained Network Policies for security.\n\t•\tCilium: Uses eBPF (Extended Berkeley Packet Filter) for secure, high-performance networking and observability without iptables overhead.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 34,
    "category": "Docker & Kubernetes",
    "question": "Why do we require multiple containers in a Pod?",
    "answer": "“While the standard practice is to run a single container per Pod, there are scenarios where multiple containers are required to run together. These containers share the same network namespace (can communicate via `localhost`), storage volumes, and lifecycle.\n\nCommon Use Cases:\n\t1. Sidecar Pattern: A helper container that assists the main container without modifying its code.\n\t   Example: The main container runs a web app, and the sidecar container (like Fluent Bit) collects logs and sends them to Elasticsearch.\n\t2. Ambassador Pattern: A proxy container that manages external connections for the main container.\n\t   Example: A database proxy that handles connection pooling and encryption to a remote database.\n\t3. Adapter Pattern: A container that standardizes the output of the main container.\n\t   Example: Formats application-specific metrics into a format Prometheus can scrape.\n\t4. Init Containers: Containers that run and complete before the main application container starts.\n\t   Example: A container that waits for a database to become online or downloads configuration files.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 35,
    "category": "Docker & Kubernetes",
    "question": "What is the use case of a Sidecar Container?",
    "answer": "“A Sidecar Container runs alongside the main application container in the same Pod to extend and enhance its functionality. This separation of concerns allows the main application to remain simple and focused.\n\nCommon Use Cases:\n\t1. Log Shipping: The main application writes logs to a shared volume, and the sidecar container (e.g., Fluent Bit, Logstash) reads those logs and ships them to a central logging server.\n\t2. Monitoring & Metrics: A sidecar container collects application-level metrics (e.g., Prometheus JMX Exporter) and exposes them on a `/metrics` endpoint.\n\t3. Service Mesh Proxy: In a service mesh (like Istio or Linkerd), a sidecar proxy (Envoy) is injected into every Pod. It intercepts all inbound and outbound network traffic to handle service discovery, mutual TLS (mTLS), load balancing, and rate limiting.\n\t4. Configuration Syncing: A sidecar container monitors a remote repository (like Git or Consul) for configuration changes and automatically updates the local config files used by the main application without restarting the pod.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 36,
    "category": "Terraform (IaC)",
    "question": "Difference between count and for_each in Terraform",
    "answer": "“Both `count` and `for_each` are meta-arguments used in Terraform to create multiple instances of a resource, but they behave differently and are suited for different use cases:\n\n\t1. count:\n\t\t•\tHow it works: Creates a list of resources based on a numeric index.\n\t\t•\tExample:\n\t\t  ```hcl\n\t\t  resource \"azurerm_virtual_machine\" \"vm\" {\n\t\t    count = 3\n\t\t    name  = \"vm-${count.index}\"\n\t\t  }\n\t\t  ```\n\t\t•\tLimitation: Since resources are tracked by index (e.g., `vm[0]`, `vm[1]`, `vm[2]`), if you delete `vm[1]`, Terraform will shift the index of `vm[2]` to `vm[1]`, causing it to destroy and recreate the remaining resources.\n\n\t2. for_each:\n\t\t•\tHow it works: Loops through a map or set of strings, tracking each resource by a unique key.\n\t\t•\tExample:\n\t\t  ```hcl\n\t\t  resource \"azurerm_virtual_machine\" \"vm\" {\n\t\t    for_each = toset([\"web\", \"app\", \"db\"])\n\t\t    name     = \"vm-${each.key}\"\n\t\t  }\n\t\t  ```\n\t\t•\tAdvantage: Resources are tracked by their key (e.g., `vm[\"web\"]`, `vm[\"app\"]`). Deleting or modifying one item has zero impact on the others.\n\nSummary of Differences:\n| Feature | count | for_each |\n| :--- | :--- | :--- |\n| Data Type | Number or List. | Map or Set of strings. |\n| Resource Tracking | Index-based (0, 1, 2). | Key-based (string keys). |\n| Best For | Creating identical resources. | Creating resources with unique configurations. |\n| Deletion Safety | Low (shifting index causes recreations). | High (deleting one key does not affect others). |”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 37,
    "category": "Terraform (IaC)",
    "question": "What is a State File in Terraform?",
    "answer": "“The Terraform State File (`terraform.tfstate`) is a JSON file that acts as the single source of truth for your managed infrastructure. \n\nKey Functions:\n\t1. Mapping to Real Resources: It maps the resource declarations in your `.tf` files to the actual physical resources created in your cloud provider.\n\t2. Metadata & Dependencies: It tracks metadata, resource dependencies, and resource attributes that are not visible in your code.\n\t3. Performance Optimization: By caching the state of resources, Terraform avoids querying the cloud provider APIs for every single resource during a `plan` or `apply` operation.\n\nBest Practices for Teams:\n\t•\tNever commit state files to Git (they contain plain-text secrets).\n\t•\tUse a Remote Backend (like Azure Storage Account) with Encryption-at-Rest enabled.\n\t•\tEnable State Locking (using Azure Storage native leases) to prevent concurrent runs from corrupting the state file.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 38,
    "category": "CI/CD & Pipelines",
    "question": "Explain the CI/CD workflow",
    "answer": "“A robust CI/CD (Continuous Integration / Continuous Delivery) workflow automates the software release lifecycle from code commit to production deployment:\n\n\t1. Continuous Integration (CI) Phase:\n\t\t•\tGit Push: A developer pushes code or opens a Pull Request (PR).\n\t\t•\tTrigger: The CI pipeline (e.g., Azure Pipelines, Jenkins, GitHub Actions) starts automatically.\n\t\t•\tBuild: The application is compiled, and dependencies are installed.\n\t\t•\tUnit Testing: Automated unit tests are run to catch code bugs early.\n\t\t•\tCode Quality & Security: Tools like SonarQube scan the code for code smells, and tfsec/Trivy scan for vulnerabilities.\n\t\t•\tArtifact Creation: If all checks pass, a build artifact (e.g., a zip file, jar file, or Docker image) is generated and pushed to a registry (like ACR or Artifactory).\n\n\t2. Continuous Delivery / Deployment (CD) Phase:\n\t\t•\tDeploy to Dev/QA: The artifact is deployed automatically to lower environments.\n\t\t•\tIntegration & UAT Testing: Automated integration tests or manual User Acceptance Testing (UAT) is performed.\n\t\t•\tManual Approval: For production environments, a gatekeeper (release manager) reviews the release and provides manual approval.\n\t\t•\tProduction Release: The application is deployed to production using zero-downtime strategies (like Rolling Updates or Blue-Green deployments).”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 39,
    "category": "Terraform (IaC)",
    "question": "You need to provision an Azure Storage Account in multiple environments. What Terraform setup would you design?",
    "answer": "“To deploy an Azure Storage Account across multiple environments (Dev, QA, Prod) while maintaining clean, reusable, and secure code, I would design a modular directory structure using remote backends:\n\n\t1. Directory Structure:\n```text\nterraform/\n├── modules/\n│   └── storage_account/\n│       ├── main.tf        # Resource definition\n│       ├── variables.tf   # Module input variables\n│       └── outputs.tf     # Outputs (e.g., connection strings)\n└── environments/\n    ├── dev/\n    │   ├── main.tf        # Calls the storage module\n    │   ├── variables.tf\n    │   ├── terraform.tfvars # Dev-specific values\n    │   └── backend.tf     # Dev remote state configuration\n    └── prod/\n        ├── main.tf        # Calls the storage module\n        ├── variables.tf\n        ├── terraform.tfvars # Prod-specific values\n        └── backend.tf     # Prod remote state configuration\n```\n\n\t2. Key Design Principles:\n\t\t•\tReusable Modules: The `modules/storage_account/` directory contains the generic definition of the storage account. We do not hardcode environment names or sizes here.\n\t\t•\tEnvironment Isolation: Each environment (dev, prod) has its own directory and its own `backend.tf` file pointing to a separate storage container. This ensures that a change in Dev cannot accidentally modify or corrupt the Prod state.\n\t\t•\tParameterization: We use `terraform.tfvars` in each environment to pass specific values (e.g., LRS storage for Dev to save costs, and GRS storage for Prod for high availability).”\nApproach:\n\t•\tCreate a reusable Storage Account module. \n\t•\tUse separate variable files (dev.tfvars, qa.tfvars, prod.tfvars). \n\t•\tUse separate remote state files for each environment. \n\t•\tDeploy through Azure DevOps pipelines.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 40,
    "category": "CI/CD & Pipelines",
    "question": "How do you configure a Terraform pipeline?",
    "answer": "Typical Azure DevOps pipeline:\nCheckout\n    ↓\nTerraform Init\n    ↓\nTerraform Validate\n    ↓\nTerraform Format Check\n    ↓\nTerraform Plan\n    ↓\nManual Approval\n    ↓\nTerraform Apply\nUse:\n\t•\tAzure Service Connection \n\t•\tRemote Backend \n\t•\tSecure Variable Groups \n\t•\tEnvironment Approvals",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 41,
    "category": "CI/CD & Pipelines",
    "question": "Should we have more than one pipeline for multiple environments?",
    "answer": "Usually No.\nA single multi-stage YAML pipeline is preferred.\nExample stages:\n\t•\tDev \n\t•\tQA \n\t•\tUAT \n\t•\tProduction \nThe pipeline determines the environment using:\n\t•\tPipeline parameters \n\t•\tVariables \n\t•\tBranch names \n\t•\tStage conditions \n\t•\tVariable groups \nExample:\n\t•\tdevelop → Dev \n\t•\trelease/* → QA \n\t•\tmain → Production",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 42,
    "category": "CI/CD & Pipelines",
    "question": "In CI/CD, which pipeline have you used?",
    "answer": "Sample Answer:\n\"I have primarily worked with Azure DevOps YAML pipelines because they are version-controlled, reusable, and support Infrastructure as Code. I have basic knowledge of Classic pipelines but prefer YAML for modern CI/CD implementations.\"",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 43,
    "category": "CI/CD & Pipelines",
    "question": "What is a Template in a YAML pipeline?",
    "answer": "“A Template in an Azure DevOps YAML pipeline is a reusable file that allows you to define common pipeline logic once and share it across multiple pipelines. This follows the DRY (Don't Repeat Yourself) principle.\n\nKey Types of Templates:\n\t1. Stage Templates: Define a complete deployment stage (e.g., a Dev deployment stage).\n\t2. Job Templates: Define a set of jobs (e.g., a build job that runs on multiple OS platforms).\n\t3. Step Templates: Define a sequence of tasks (e.g., a step to install Node.js, run npm build, and publish artifacts).\n\nBenefits of Using Templates:\n\t•   Reusability: Avoids duplicate YAML code across different repositories or pipelines.\n\t•   Security & Governance: Centralizes security scans or compliance tasks in a single template that all teams must reference.\n\t•   Maintainability: If a task version changes, you only need to update it in the template file rather than in hundreds of individual pipelines.”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 44,
    "category": "CI/CD & Pipelines",
    "question": "Difference between Parameters and Variables in a pipeline",
    "answer": "“In Azure DevOps YAML pipelines, both parameters and variables are used to store and pass values, but they differ significantly in their evaluation time, mutability, and security:\n\n\t1. Parameters (Compile-Time):\n\t\t•   What they are: Strongly-typed inputs defined at the top of the YAML file. They are evaluated at compile-time (before the pipeline starts running).\n\t\t•   Mutability: Immutable. Once the pipeline starts, their values cannot be changed.\n\t\t•   Use Case: Used to control the structure of the pipeline (e.g., passing a boolean to decide whether to run a deployment stage, or choosing a target environment from a dropdown list).\n\n\t2. Variables (Runtime):\n\t\t•   What they are: Dynamic values that can be defined in the YAML, in variable groups, or via the UI. They are evaluated at runtime.\n\t\t•   Mutability: Mutable. Their values can be updated dynamically during pipeline execution using logging commands (e.g., `##vso[task.setvariable]`).\n\t\t•   Use Case: Used to store secrets, build numbers, or dynamic outputs from one task to be used in a later task.\n\nSummary of Differences:\n| Feature | Parameters | Variables |\n| :--- | :--- | :--- |\n| Evaluation Time | Compile-Time (before execution). | Runtime (during execution). |\n| Mutability | Immutable (read-only). | Mutable (can be changed). |\n| Data Types | Strongly typed (string, number, boolean, object). | Only strings. |\n| Security | Highly secure (cannot be injected at runtime). | Vulnerable to runtime injection if not handled carefully. |\n| UI Prompting | Can prompt the user for input before running. | Cannot prompt the user with dropdowns. |”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 45,
    "category": "Linux & Git",
    "question": "How do you change a username using a Git command?",
    "answer": "“To change the author name associated with your Git commits, you use the `git config` command. You can set it at different scopes depending on your needs:\n\n\t1. For the Current Repository Only:\n\t\t•   Run the command inside the specific repository folder:\n\t\t    `git config user.name \"John Doe\"`\n\t\t•   This writes the configuration to the `.git/config` file of that repository.\n\n\t2. Globally (For All Repositories on Your Machine):\n\t\t•   Run the command with the `--global` flag:\n\t\t    `git config --global user.name \"John Doe\"`\n\t\t•   This writes the configuration to the global Git config file (typically `~/.gitconfig` on Linux/Mac).\n\n\t3. To Change the Associated Email Address:\n\t\t•   You should also update your email, as Git commits track both name and email:\n\t\t    `git config --global user.email \"john.doe@example.com\"`\n\n\t4. To Verify the Configuration:\n\t\t•   List all active configurations to confirm the changes:\n\t\t    `git config --list` or `git config user.name`”",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 46,
    "category": "Docker & Kubernetes",
    "question": "In a microservices architecture, how does a request reach a specific Pod?",
    "answer": "Request flow:\nUser\n   ↓\nDNS\n   ↓\nAzure Front Door / Load Balancer\n   ↓\nApplication Gateway\n   ↓\nIngress Controller\n   ↓\nKubernetes Service\n   ↓\nTarget Pod\n   ↓\nApplication Container\nIf multiple microservices exist, the Ingress routes requests based on the host or URL path (e.g., /orders, /users) to the appropriate Kubernetes Service, which then load-balances traffic across healthy Pods.",
    "difficulty": "Medium",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 47,
    "category": "Azure & Azure DevOps",
    "question": "Explain the process of designing and deploying infrastructure on Azure",
    "answer": "Typical process:\n\t•\tGather requirements (compute, networking, security, storage). \n\t•\tDesign architecture (VNets, subnets, NSGs, Load Balancers, Storage, AKS/VMs). \n\t•\tWrite Infrastructure as Code using Terraform. \n\t•\tStore code in Git. \n\t•\tConfigure Azure DevOps or GitHub Actions pipeline. \n\t•\tRun terraform init, validate, and plan. \n\t•\tReview changes and obtain approval. \n\t•\tExecute terraform apply. \n\t•\tValidate deployed resources. \n\t•\tConfigure monitoring (Azure Monitor, Prometheus, Grafana) and backups.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 48,
    "category": "CI/CD & Pipelines",
    "question": "Explain CI/CD deployment using GitHub",
    "answer": "A typical GitHub-based workflow:\nDeveloper\n    ↓\nGit Commit\n    ↓\nGit Push\n    ↓\nGitHub Repository\n    ↓\nGitHub Actions Trigger\n    ↓\nBuild\n    ↓\nRun Tests\n    ↓\nCode Quality & Security Scan\n    ↓\nBuild Docker Image\n    ↓\nPush Image to Azure Container Registry (ACR)\n    ↓\nDeploy to AKS / Azure App Service\n    ↓\nSmoke Tests\n    ↓\nProduction Deployment\nKey components:\n\t•\tGitHub: Source code management. \n\t•\tGitHub Actions: CI/CD automation. \n\t•\tAzure Container Registry (ACR): Stores Docker images. \n\t•\tAzure Kubernetes Service (AKS) or Azure App Service: Hosts the application. \n\t•\tSecrets: Store Azure credentials and tokens securely. \n\t•\tEnvironments: Add manual approvals for production deployments. \nThis workflow provides automated, repeatable, and secure deployments with minimal manual intervention.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 49,
    "category": "DevOps General",
    "question": "Suppose your organization wants to ensure that no resources are deployed outside specific regions. How would you enforce this?",
    "answer": "I would use Azure Policy to restrict resource deployment to approved Azure regions.\nSteps:\n\t•\tCreate or use the built-in Allowed Locations policy. \n\t•\tAssign the policy at the appropriate scope: \n\t•\tManagement Group (preferred) \n\t•\tSubscription \n\t•\tResource Group \n\t•\tSpecify the allowed regions (e.g., East US, Central India). \n\t•\tAny deployment outside these regions will be denied. \nExample:\n\t•\tAllowed Regions: \n\t•\tCentral India \n\t•\tEast US \n\t•\tIf someone tries to deploy a VM in West Europe, Azure blocks the deployment. \nBenefits:\n\t•\tGovernance \n\t•\tCompliance \n\t•\tCost control \n\t•\tStandardization \nInterview Tip: Mention that assigning the policy at the Management Group level ensures it applies to all subscriptions beneath it.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 50,
    "category": "Azure & Azure DevOps",
    "question": "Explain the structure of subscriptions in an Azure Landing Zone for multiple environments.",
    "answer": "A Landing Zone organizes Azure resources in a secure, scalable, and governed way.\nTypical structure:\nManagement Group\n│\n├── Platform\n│   ├── Connectivity Subscription\n│   ├── Identity Subscription\n│   └── Management Subscription\n│\n├── Production\n│   ├── Prod Subscription 1\n│   ├── Prod Subscription 2\n│\n├── Non-Production\n│   ├── Dev Subscription\n│   ├── QA Subscription\n│   └── UAT Subscription\n│\n└── Sandbox\n    └── Developer Subscription\nPurpose of each:\nPlatform\n\t•\tShared networking \n\t•\tIdentity \n\t•\tMonitoring \n\t•\tSecurity \nProduction\n\t•\tLive business workloads \nNon-Production\n\t•\tDevelopment \n\t•\tTesting \n\t•\tUAT \nSandbox\n\t•\tLearning \n\t•\tExperimentation \nThis separation improves:\n\t•\tSecurity \n\t•\tBilling \n\t•\tRBAC \n\t•\tPolicy management",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 51,
    "category": "CI/CD & Pipelines",
    "question": "How can you integrate Azure Landing Zone deployment with DevOps pipelines?",
    "answer": "Azure Landing Zone infrastructure is typically deployed using Infrastructure as Code (Terraform or Bicep) through Azure DevOps or GitHub Actions.\nPipeline flow:\nDeveloper\n     ↓\nGit Repository\n     ↓\nAzure DevOps Pipeline\n     ↓\nTerraform Init\n     ↓\nTerraform Validate\n     ↓\nTerraform Plan\n     ↓\nApproval\n     ↓\nTerraform Apply\n     ↓\nLanding Zone Resources Created\nResources created may include:\n\t•\tManagement Groups \n\t•\tSubscriptions \n\t•\tVNets \n\t•\tNSGs \n\t•\tAzure Policies \n\t•\tRBAC \n\t•\tLog Analytics \n\t•\tKey Vault \n\t•\tAzure Monitor \nBest Practices:\n\t•\tStore Terraform state remotely in Azure Storage. \n\t•\tUse Azure Service Connections. \n\t•\tUse separate variable files for Dev, QA, and Prod. \n\t•\tRequire approvals before production deployment.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 52,
    "category": "Azure & Azure DevOps",
    "question": "Suppose you are migrating on-prem workloads to Azure. How does a Landing Zone help?",
    "answer": "An Azure Landing Zone provides a pre-configured, secure, and governed Azure environment before migrating workloads.\nBenefits:\n\t•\tStandardized network architecture. \n\t•\tBuilt-in security policies. \n\t•\tCentralized identity with Azure AD. \n\t•\tRBAC configured. \n\t•\tLogging and monitoring enabled. \n\t•\tBackup and disaster recovery configured. \n\t•\tCompliance policies enforced. \nMigration approach:\n\t•\tBuild the Landing Zone. \n\t•\tConfigure networking (Hub-and-Spoke). \n\t•\tConfigure Azure Policies. \n\t•\tConfigure monitoring. \n\t•\tMigrate applications. \n\t•\tValidate workloads. \n\t•\tCut over production traffic. \nWithout a Landing Zone, every application team would configure Azure differently, leading to inconsistencies and governance challenges.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 53,
    "category": "Azure & Azure DevOps",
    "question": "Can you explain Azure Policy Assignment?",
    "answer": "An Azure Policy Assignment applies a policy definition to a specific scope so Azure can enforce compliance.\nComponents:\n\t•\tPolicy Definition \n\t•\tThe rule to enforce. \n\t•\tExample: Only allow approved VM sizes. \n\t•\tAssignment \n\t•\tWhere the policy is applied. \n\t•\tScope \n\t•\tManagement Group \n\t•\tSubscription \n\t•\tResource Group \n\t•\tParameters \n\t•\tCustomize the policy (e.g., allowed regions). \nCommon Policy Effects:\n\t•\tDeny – Blocks non-compliant deployments. \n\t•\tAudit – Reports non-compliance. \n\t•\tAppend – Adds settings during deployment. \n\t•\tModify – Updates resources automatically. \n\t•\tDeployIfNotExists – Deploys required resources if missing. \n\t•\tAuditIfNotExists – Checks whether required resources exist. \nExample:\n\t•\tPolicy: Allow only Standard VM SKUs. \n\t•\tAssigned at the Production Management Group. \n\t•\tAny non-compliant VM deployment is denied.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 54,
    "category": "DevOps General",
    "question": "Explain Hub-and-Spoke Network Architecture.",
    "answer": "Hub-and-Spoke is a network topology where a central Hub VNet provides shared services, and multiple Spoke VNets host application workloads.\nDiagram:\n                    On-Premises\n                         │\n                  VPN / ExpressRoute\n                         │\n                    Hub VNet\n        ┌──────────┼──────────┐\n        │          │          │\n Azure Firewall  Bastion   DNS/Shared Services\n        │\n ┌──────┴───────────────┐\n │                      │\nSpoke VNet 1       Spoke VNet 2\n(Web App)          (Database)\n │                      │\nAKS/VMs              SQL/VMs\nHub VNet contains:\n\t•\tAzure Firewall \n\t•\tVPN Gateway \n\t•\tExpressRoute Gateway \n\t•\tAzure Bastion \n\t•\tDNS \n\t•\tShared services \nSpoke VNets contain:\n\t•\tApplication workloads \n\t•\tAKS clusters \n\t•\tVirtual Machines \n\t•\tDatabases \nCommunication:\n\t•\tSpokes connect to the Hub using VNet Peering. \n\t•\tTraffic between spokes typically passes through the Hub for centralized inspection and control. \nBenefits:\n\t•\tCentralized security \n\t•\tReduced management overhead \n\t•\tScalable architecture \n\t•\tBetter isolation between applications \n\t•\tCost optimization by sharing common services \nInterview Tip:\nIf asked why this architecture is preferred, explain that it allows organizations to centralize networking and security while keeping application environments isolated, which is ideal for enterprise-scale Azure deployments.",
    "difficulty": "Hard",
    "source": "Azure DevOps Cheat Sheet",
    "company": null
  },
  {
    "id": 55,
    "category": "Behavioral & Project",
    "question": "Tell Me About Yourself",
    "answer": "“Hello, my self  Deepak Kumar, and I am currently working as a Senior Consultant at Infosys in Pune. I have over 10 years of experience in IT, including more than 4+  years in DevOps and Cloud Engineering. \nMy major responsibilities are managing cloud infrastructure on Microsoft Azure, creating Infrastructure as Code using Terraform, and maintaining CI/CD pipelines using Azure DevOps.\nI am also working on AKS (Azure Kubernetes Service), where I deploy and manage containerized applications using Docker and Kubernetes. Along with deployment, I monitor application performance, troubleshoot production issues, and ensure high availability and scalability of applications.\nI have good hands-on experience with tools like Terraform, Azure DevOps, Docker, Kubernetes, Git, SonarQube, and Azure services such as ACR, Key Vault, Application Gateway, VNets, NSG, and Azure Monitor.",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 56,
    "category": "Behavioral & Project",
    "question": "Tell Me About Your Project",
    "answer": "“Currently, I am working on a project where we are migrating a large e-commerce application from on-premises infrastructure to Azure Cloud. The client is a Europe-based company named Qiagen, which provides genomic products for scientific research.\nThe application was initially monolithic, and our goal was to convert it into microservices architecture and deploy it on AKS.\nOur team included Development, Testing, and DevOps teams, and I was part of the DevOps team. My responsibility was to design the infrastructure, automate deployments, and build CI/CD pipelines.\nFor infrastructure provisioning, we used Terraform. We followed Azure Landing Zone architecture and created separate subscriptions for Dev, QA, and Production environments under management groups.\nI enjoy solving infrastructure and deployment-related challenges and continuously learning new DevOps technologies.”\n\nUsing Terraform, we provisioned resources such as:\n\t•\tAKS Cluster \n\t•\tACR \n\t•\tVNets and Subnets \n\t•\tKey Vault \n\t•\tApplication Gateway \n\t•\tStorage Accounts \n\t•\tAzure Bastion \n\t•\tDatabases \nExample:-   AKS (Azure Kubernetes service) Cluster – Managed Kubernetes service used to deploy and manage containerized applications in Microsoft Azure Azure. \n  ACR (Azure Container Registry) – Private container image registry used to store and manage Docker images securely. \n  VNets and Subnets – Virtual networking components used to isolate and securely connect Azure resources. \n  Key Vault – Secure service used to store secrets, passwords, certificates, and encryption keys. \n  Application Gateway – Layer 7 load balancer used for traffic routing, SSL termination, and web application firewall (WAF). \n  Storage Accounts – Azure storage service used to store blobs, files, queues, and tables. \n  Azure Bastion – Secure remote access service used to connect to VMs without exposing public IPs. \n  Databases – Managed database services used to store and manage application data securely and efficiently.\n\nWe created reusable Terraform modules and maintained the code in Git repositories. We also built Terraform CI/CD pipelines with stages like Init, Plan, and Apply. Additionally, we integrated tfsec scanning for security validation.\nFor application deployment:\n  Git Repository – Source code was pulled from Git repositories for version control and collaboration. \n  SonarQube – Used for static code analysis to identify bugs, vulnerabilities, and code quality issues. \n  Docker Image Build – Application code was containerized by building Docker images. \n  Anchore Scanner – Used to scan Docker images for security vulnerabilities and compliance issues. \n  Azure Container Registry (ACR) – Securely stored and managed Docker container images in Microsoft Azure. \n  AKS Deployment using Azure Pipelines – Applications were deployed automatically to AKS clusters using CI/CD pipelines in Azure DevOps. \n\nFor security:-\n\n  Application Gateway with WAF – Used for load balancing, SSL termination, and protecting applications from web attacks. \n  SSL Certificates & Custom Domains – Configured secure HTTPS communication and custom domain access for applications. \n  Azure Key Vault Integration – Secrets, certificates, and sensitive credentials were securely managed using Key Vault integrated with AKS. \n  Azure Monitor & Container Insights – Used for monitoring AKS clusters, application performance, logs, metrics, and troubleshooting.\nWe also enabled monitoring using Azure Monitor and Container Insights.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 57,
    "category": "Terraform (IaC)",
    "question": "Tell Me About Terraform Implementation",
    "answer": "“We used Terraform as Infrastructure as Code for provisioning and managing Azure resources.\nOur Terraform setup had:\n\t•\tOne repository for main Terraform code \n\t•\tAnother repository for reusable modules \nInside the main repository, we maintained separate folders for:\n\t•\tDev \n\t•\tStage \n\t•\tProd \nWe used remote backend storage in Azure Blob Storage for maintaining Terraform state files.\nTerraform Workflow Explanation\n\t•\tDeveloper Creates PR – Developer raises a Pull Request after making infrastructure code changes in Git. \n\t•\tPipeline Trigger – CI/CD pipeline in Azure DevOps automatically triggers on PR creation. \n\t•\tTerraform Init – Initializes Terraform providers, backend configuration, and modules. \n\t•\tTerraform Plan – Generates an execution plan showing what infrastructure changes will be created, modified, or deleted. \n\t•\tPlan Review – Team reviews the Terraform plan for validation and approval before deployment. \n\t•\tTerraform Apply – After approval, Terraform applies the changes and provisions/updates resources in Microsoft Azure. \nShort Interview Answer\n“Our Terraform workflow starts with a PR creation, which triggers the pipeline automatically. Then Terraform Init and Plan run, the team reviews the execution plan, and after approval Terraform Apply deploys the infrastructure changes.”\n\nWe also implemented the following best practices in our Terraform setup to ensure secure, scalable, and reliable infrastructure management:\n🔒 State Locking\n\t•\tPrevents multiple users or pipelines from modifying the Terraform state file simultaneously. \n\t•\tHelps avoid: \n\t•\tState corruption \n\t•\tConcurrent deployment conflicts \n\t•\tInfrastructure inconsistency \n\t•\tImplemented using remote backend locking in Azure Blob Storage. \n🧩 Modular Code Structure\n\t•\tTerraform code was divided into reusable modules such as: \n\t•\tVNet Module \n\t•\tAKS Module \n\t•\tNSG Module \n\t•\tStorage Module \n\t•\tBenefits: \n\t•\tBetter reusability       \n\t•\tStandardization \n\t•\tEasier maintenance \n\t•\tImproved team collaboration \n🌍 Environment-Based Variable Files\n\t•\tSeparate variable files maintained for each environment: \n\t•\tdev.tfvars \n\t•\tqa.tfvars \n\t•\tstage.tfvars \n\t•\tprod.tfvars \n\t•\tThis helped manage: \n\t•\tEnvironment-specific configurations \n\t•\tResource naming \n\t•\tScaling settings \n\t•\tNetwork ranges \n\t•\tImproved flexibility and reduced configuration errors. \n🛡️ tfsec Security Scanning\n\t•\tIntegrated tfsec into the CI/CD pipeline for Terraform security validation. \n\t•\tAutomatically scanned Terraform code for: \n\t•\tOpen security groups \n\t•\tPublicly exposed resources \n\t•\tUnencrypted storage \n\t•\tWeak network configurations \n\t•\tPipeline failed automatically if high-severity security issues were detected. \n\t•\tHelped enforce DevSecOps and infrastructure compliance standards.\nThis approach helped us maintain reusable, scalable, and secure infrastructure.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 58,
    "category": "CI/CD & Pipelines",
    "question": "Explain Your CI/CD Process",
    "answer": "We use Azure DevOps YAML pipelines to automate our infrastructure provisioning and application deployments:\n\n1. **Infrastructure (Terraform) Pipeline**:\n   * **Trigger**: Triggered automatically when infrastructure code is merged into the `main` branch.\n   * **Stages**:\n     * **Terraform Init**: Initializes the working directory and loads providers/modules.\n     * **Terraform Plan**: Generates an execution plan for validation.\n     * **tfsec Scan**: Scans the HCL code for security misconfigurations.\n     * **Manual Approval**: Gates production deployments using environment checks.\n     * **Terraform Apply**: Deploys approved infrastructure updates to Microsoft Azure.\n\n2. **Application CI/CD Pipeline**:\n   * **Trigger**: Triggered automatically when developers merge code changes into the `dev` or `stage` branches.\n   * **Continuous Integration (CI)**:\n     * Clones the repository, installs dependencies, and runs unit tests.\n     * Executes static code analysis via **SonarQube** (quality gate check).\n     * Containerizes the app using a Dockerfile, builds the image, and runs vulnerability scans via **Anchore**.\n     * Pushes the verified Docker image to **Azure Container Registry (ACR)**.\n   * **Continuous Deployment (CD)**:\n     * Deploys the containerized application to **Azure Kubernetes Service (AKS)** using declarative manifests or Helm charts.",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 59,
    "category": "Azure & Azure DevOps",
    "question": "Difference Between NSG and ASG",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 60,
    "category": "Terraform (IaC)",
    "question": "Why Terraform?",
    "answer": "“We use Terraform as our primary Infrastructure as Code (IaC) tool because of several enterprise-grade benefits it provides:\n\n\t1. Multi-Cloud Support: Unlike cloud-specific tools (like Azure ARM Templates or AWS CloudFormation), Terraform uses a single, consistent syntax (HCL) to manage resources across Azure, AWS, GCP, and on-premises systems.\n\t2. Declarative Programming: You define the desired end-state of your infrastructure (e.g., 'I want a virtual network with 3 subnets'), and Terraform automatically calculates the creation order, dependencies, and API calls needed to reach that state.\n\t3. State Management: The state file (`terraform.tfstate`) acts as a single source of truth, allowing Terraform to detect infrastructure drift (differences between real-world resources and your code) and perform incremental updates without destroying existing resources.\n\t4. Modularity: We can package common infrastructure patterns into reusable modules, ensuring standardization, faster deployments, and easier maintenance across different teams.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 61,
    "category": "Docker & Kubernetes",
    "question": "Why AKS?",
    "answer": "“We chose Azure Kubernetes Service (AKS) as our container orchestration platform because it is a fully managed service that reduces operational complexity and integrates seamlessly with the Azure ecosystem:\n\n\t1. Managed Control Plane: Azure manages the Kubernetes master nodes (API server, etcd) for free, guaranteeing high availability (SLA up to 99.95%) and handling automated upgrades and patching. We only pay for the worker nodes.\n\t2. Seamless Integration: It integrates natively with Azure Active Directory / Entra ID (for RBAC), Azure Key Vault (for secret management via CSI driver), and Azure Monitor/Container Insights (for logging and metrics).\n\t3. Scaling and Speed: Supports fast autoscaling using the Horizontal Pod Autoscaler (HPA) and Cluster Autoscaler, and allows using Virtual Nodes (backed by Azure Container Instances) for serverless, instant scaling.\n\t4. Security & Compliance: Provides enterprise security features like private clusters, Azure Network Policies, and Microsoft Defender for Containers integration.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 62,
    "category": "Behavioral & Project",
    "question": "What Challenges Did You Face?",
    "answer": "“One of the major technical challenges we faced was **infrastructure drift and concurrent state file conflicts** in our Terraform deployments:\n\n\t1. The Challenge: Early in the project, team members ran Terraform from their local machines. This led to state file conflicts, accidental overwrites, and untracked manual changes (drift) in the Azure portal.\n\t2. The Solution:\n\t\t•   We migrated the Terraform state file to a centralized **Azure Storage Account** with secure remote backend storage and enabled **state locking** to prevent concurrent executions.\n\t\t•   We integrated Terraform into an **Azure DevOps CI/CD pipeline**. This removed local access, ensuring that all infrastructure changes are executed through the pipeline.\n\t\t•   We introduced a **manual approval gate** before the `Apply` stage, requiring a senior engineer to review the output of `terraform plan` before any changes are pushed to production.\n\t\t•   We set up automated nightly drift detection pipelines that run `terraform plan -detailed-exitcode` and alert the team via Slack if any manual changes are detected in the portal.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 63,
    "category": "DevOps General",
    "question": "How Do You Secure Secrets?",
    "answer": "“We follow a strict, multi-layered approach to secure secrets (passwords, API keys, certificates) across our environments:\n\n\t1. Centralized Secret Storage:\n\t\t•\tWe use Azure Key Vault (or AWS Secrets Manager) as the single source of truth for all secrets. No secrets are ever hardcoded in the application code, configuration files, or committed to Git.\n\t2. Integration with AKS (Secrets Store CSI Driver):\n\t\t•\tInstead of storing secrets as Kubernetes secret objects in plaintext, we use the Azure Key Vault Secrets Store CSI Driver. This mounts the secrets directly from Key Vault into the application pods as temporary volumes (in-memory tmpfs) or syncs them as Kubernetes secrets.\n\t3. Access Control (RBAC & Managed Identities):\n\t\t•\tWe use Azure AD Workload Identity (or IAM Roles for Service Accounts in AWS) to assign a managed identity to our AKS Pods. The Pods authenticate to Key Vault securely without requiring any credentials.\n\t\t•\tWe enforce the principle of least privilege using Key Vault Access Policies or Azure RBAC, granting only read-only access to specific secrets.\n\t4. Pipeline Security:\n\t\t•\tIn Azure DevOps / Jenkins, we use Service Connections and secret variables. Secret masking is enabled to prevent secrets from being printed in the pipeline console logs.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 64,
    "category": "Linux & Git",
    "question": "Difference Between git fetch and git pull?",
    "answer": "“In Git, both `git fetch` and `git pull` are used to retrieve changes from a remote repository, but they differ in how they apply those changes to your local branch:\n\n\t1. git fetch:\n\t\t•\tWhat it does: Downloads all new data (branches, commits, tags) from the remote repository to your local repository.\n\t\t•\tImpact: It does not modify your working directory or your current local branch. It simply updates your remote-tracking branches (e.g., `origin/main`).\n\t\t•\tSafety: 100% safe. It allows you to inspect the changes using `git log` or `git diff` before merging them.\n\t2. git pull:\n\t\t•\tWhat it does: Performs a `git fetch` followed immediately by a `git merge` (or `git rebase` if configured) to merge the remote changes into your current local branch.\n\t\t•\tImpact: It updates your local working files directly.\n\t\t•\tSafety: Less safe. If there are conflicting changes between your local commits and the remote commits, it will immediately trigger a merge conflict that you must resolve.\n\nSummary:\n`git pull` = `git fetch` + `git merge`\n\nBest Practice:\nI prefer using `git fetch` followed by `git diff origin/main` to review what my teammates have pushed, and then running `git merge` or `git rebase` manually. This prevents accidental merge conflicts and keeps the commit history clean.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 65,
    "category": "Docker & Kubernetes",
    "question": "Difference Between Deployment and StatefulSet?",
    "answer": "“In Kubernetes, both Deployments and StatefulSets are controllers used to manage pods, but they are designed for different types of workloads:\n\n\t1. Deployment:\n\t\t•\tUse Case: Designed for stateless applications (e.g., web servers, frontend apps, stateless APIs).\n\t\t•\tPod Identity: Pods are interchangeable and have random, non-sticky identities (e.g., `web-7f84-abcde`, `web-7f84-fghij`).\n\t\t•\tStorage: All replicas typically share the same persistent volume (if any) or do not require persistent storage at all.\n\t\t•\tScaling: Pods are created and destroyed in parallel, in no particular order.\n\t2. StatefulSet:\n\t\t•\tUse Case: Designed for stateful applications that require unique identities and persistent data (e.g., databases like PostgreSQL, MySQL, MongoDB, or Kafka, Elasticsearch clusters).\n\t\t•\tPod Identity: Pods have a sticky, unique network identifier and a persistent index starting from 0 (e.g., `db-0`, `db-1`, `db-2`).\n\t\t•\tStorage: Each Pod gets its own dedicated Persistent Volume (PV) via a `volumeClaimTemplates`. When a pod is rescheduled, it reconnects to the exact same PV.\n\t\t•\tScaling: Pods are created, updated, and terminated sequentially (e.g., `db-1` is not created until `db-0` is running and healthy).\n\nSummary of Differences:\n| Feature | Deployment | StatefulSet |\n| :--- | :--- | :--- |\n| Workload Type | Stateless (Web Apps, APIs). | Stateful (Databases, Message Queues). |\n| Pod Naming | Random hash suffix (e.g., `app-xyz12`). | Ordinal index (e.g., `mysql-0`, `mysql-1`). |\n| Storage | Shared volume or no volume. | Dedicated volume per Pod (Volume Claim Template). |\n| DNS / Network | Shared service DNS. | Headless service providing unique DNS per Pod (e.g., `mysql-0.db-service`). |\n| Scaling Order | Parallel (fast scaling). | Sequential (one-by-one, ordered). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 66,
    "category": "CI/CD & Pipelines",
    "question": "How do you use tfsec and other security tools in CI/CD pipeline?",
    "answer": "“In our project, security was integrated as part of the CI/CD pipeline to follow DevSecOps practices.\nFor Terraform code security scanning, we used tfsec. Whenever a developer created a pull request or merged code, the Terraform pipeline automatically triggered and executed tfsec scans to identify security misconfigurations such as:\n\t•\tOpen security groups \n\t•\tPublicly exposed resources \n\t•\tUnencrypted storage \n\t•\tWeak network rules \nIf tfsec detected any high-severity issue, the pipeline failed automatically.\nApart from tfsec, we also used:\n\t•\tSonarQube for static code analysis \n\t•\tAnchore for Docker image vulnerability scanning \n\t•\tAzure Key Vault for secret management \n\t•\tRBAC and Azure Policies for access control \nThis helped us ensure infrastructure, application code, and container images were secure before deployment.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 67,
    "category": "DevOps General",
    "question": "What is trunk-based branching strategy?",
    "answer": "“Trunk-based development is a branching strategy where developers frequently commit small changes directly into a single main branch, usually called the trunk or main branch.\nInstead of maintaining long-running feature branches, developers create short-lived branches and merge changes quickly after validation.\nAdvantages:\n\t•\tFaster integration \n\t•\tReduced merge conflicts \n\t•\tBetter collaboration \n\t•\tSupports continuous integration and continuous deployment \nIn our project, we mainly used:\n\t•\tMain branch → Production \n\t•\tDev branch → Development \n\t•\tStage branch → Testing \nFeature branches were short-lived and merged quickly after code review.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 68,
    "category": "DevOps General",
    "question": "Have you made MCP server?",
    "answer": "“Yes, I have basic understanding and exposure to MCP (Model Context Protocol) servers in AI-integrated systems.\nMCP servers are used to provide context, tools, APIs, or external integrations to AI models securely and efficiently.\nAlthough I was not directly responsible for core MCP server development, I have worked on infrastructure setup, containerization, deployment, and CI/CD automation for AI-driven applications and APIs using:\n\t•\tDocker \n\t•\tKubernetes \n\t•\tAzure Cloud \n\t•\tTerraform \n\t•\tCI/CD pipelines \nI can also support deployment, monitoring, scaling, and infrastructure automation for MCP-based systems.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 69,
    "category": "Terraform (IaC)",
    "question": "How VM is managed by Terraform?",
    "answer": "“Terraform manages Virtual Machines using Infrastructure as Code.\nIn Azure, we define VM resources in Terraform configuration files using the azurerm provider.\nTypical VM components managed by Terraform:\n\t•\tResource Group \n\t•\tVirtual Network \n\t•\tSubnet \n\t•\tNetwork Interface \n\t•\tNSG \n\t•\tPublic IP \n\t•\tVirtual Machine \n\t•\tOS Disk \nWorkflow:\n\t•\tWrite Terraform code \n\t•\tRun terraform init \n\t•\tRun terraform plan \n\t•\tRun terraform apply \nTerraform automatically provisions and manages the VM infrastructure.\nBenefits:\n\t•\tAutomation \n\t•\tVersion control \n\t•\tReusability \n\t•\tConsistency \n\t•\tEasy scaling and modification”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 70,
    "category": "DevOps General",
    "question": "How do you manage multiple environments in production systems?",
    "answer": "“In our project, we managed multiple environments like Dev, QA, Stage, and Production using proper segregation and Infrastructure as Code.\nWe followed Azure Landing Zone architecture.\nOur approach:\n\t•\tSeparate subscriptions for each environment \n\t•\tSeparate resource groups \n\t•\tSeparate Terraform variable files \n\t•\tSeparate backend state files \n\t•\tEnvironment-specific CI/CD pipelines \nFor Kubernetes:\n\t•\tSeparate namespaces \n\t•\tSeparate configurations and secrets \n\t•\tDifferent ingress and scaling settings \nWe also implemented:\n\t•\tRBAC access control \n\t•\tApproval-based deployments for production \n\t•\tEnvironment-specific monitoring and alerts \nThis helped maintain isolation, security, and stability across environments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 71,
    "category": "DevOps General",
    "question": "Have you used PowerShell in project?",
    "answer": "“Yes, I have used PowerShell in multiple tasks, especially in Azure and automation activities.\nUse cases:\n\t•\tAzure resource management \n\t•\tAutomation scripts \n\t•\tVM administration \n\t•\tLog collection \n\t•\tBackup automation \n\t•\tDeployment tasks in pipelines \nExamples:\n\t•\tManaging Azure resources using Az PowerShell modules \n\t•\tAutomating cleanup tasks \n\t•\tCreating scheduled jobs \n\t•\tRetrieving logs and monitoring information \nPowerShell helped reduce manual work and improved operational efficiency.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 72,
    "category": "DevOps General",
    "question": "What is another method to create multiple Resource Groups apart from for_each?",
    "answer": "“Apart from for_each, we can use:\n\t•\tcount \n\t•\tmodules \n\t•\tdynamic blocks (in some scenarios) \nExample using count:\nTerraform creates multiple resources based on numeric count values.\nDifference:\n\t•\tcount is index-based \n\t•\tfor_each is key/value-based and more flexible \nUsually:\n\t•\tcount is preferred for similar resources \n\t•\tfor_each is preferred when resources have unique names or configurations”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 73,
    "category": "Docker & Kubernetes",
    "question": "Have you deployed applications on Docker and Kubernetes?",
    "answer": "“Yes, I have deployed applications using both Docker and Kubernetes.\nDocker Responsibilities:\n\t•\tWriting Dockerfiles \n\t•\tCreating Docker images \n\t•\tMulti-stage Docker builds \n\t•\tPushing images to Azure Container Registry \nKubernetes Responsibilities:\n\t•\tCreating deployments \n\t•\tServices \n\t•\tIngress configurations \n\t•\tConfigMaps and Secrets \n\t•\tAutoscaling using HPA \n\t•\tNamespace management \nDeployment Process:\n\t•\tBuild Docker image \n\t•\tPush image to ACR \n\t•\tDeploy application on AKS through CI/CD pipeline \nWe used Helm charts and Kubernetes manifests for deployments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 74,
    "category": "Behavioral & Project",
    "question": "Have you used AI Driven system in your project?",
    "answer": "“Yes, we have worked on AI-enabled and automation-driven systems indirectly in our projects.\nMy contribution was mainly on:\n\t•\tInfrastructure provisioning \n\t•\tCI/CD automation \n\t•\tContainer orchestration \n\t•\tMonitoring and scalability \nWe supported applications that used:\n\t•\tAI APIs \n\t•\tData processing services \n\t•\tAutomated analytics systems \nAs a DevOps Engineer, my role focused on ensuring:\n\t•\tHigh availability \n\t•\tSecure deployment \n\t•\tScalability \n\t•\tMonitoring \n\t•\tAutomation of AI-based workloads”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 75,
    "category": "Terraform (IaC)",
    "question": "Which type of resources have you created from Terraform?",
    "answer": "I have created and managed multiple Azure resources using Terraform, including:\n1. **Compute**: Virtual Machines, Virtual Machine Scale Sets (VMSS), and Azure Kubernetes Service (AKS) Clusters.\n2. **Networking**: Virtual Networks (VNets), Subnets, Network Security Groups (NSGs), Load Balancers, Application Gateways, Public IPs, Azure Firewall, and Azure Bastion hosts.\n3. **Storage & Database**: Storage Accounts (for Blob, File, and remote backend state), Azure SQL Databases, and Cosmos DB instances.\n4. **Security & Identity**: Azure Key Vaults, RBAC Role Assignments, and User-Assigned Managed Identities.\n5. **DevOps & Monitoring**: Azure Container Registry (ACR), Log Analytics Workspaces, and Azure Monitor Alerts.\nWe managed all these resources using reusable Terraform modules and automated pipelines.",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 76,
    "category": "Azure & Azure DevOps",
    "question": "What are the core services in Azure DevOps?",
    "answer": "“Azure DevOps provides multiple services that help manage the complete software development lifecycle.\nMain services are:\n1. Azure Repos\nUsed for source code management using:\n\t•\tGit \n\t•\tTFVC \nFeatures:\n\t•\tBranching \n\t•\tPull requests \n\t•\tCode reviews \n\t•\tVersion control \n2. Azure Pipelines\nUsed for:\n\t•\tContinuous Integration (CI) \n\t•\tContinuous Delivery/Deployment (CD) \nIt automates:\n\t•\tBuild \n\t•\tTesting \n\t•\tDeployment \n3. Azure Boards\nUsed for project and work tracking:\n\t•\tUser stories \n\t•\tTasks \n\t•\tBugs \n\t•\tSprint planning \n4. Azure Artifacts\nUsed for package management:\n\t•\tnpm \n\t•\tMaven \n\t•\tNuGet \n\t•\tPython packages \n5. Azure Test Plans\nUsed for:\n\t•\tManual testing \n\t•\tTest case management \n\t•\tAutomated testing integration \nOne-line Answer:\nAzure DevOps provides Repos, Pipelines, Boards, Artifacts, and Test Plans for complete DevOps lifecycle management.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 77,
    "category": "CI/CD & Pipelines",
    "question": "What is CI/CD?",
    "answer": "“CI/CD is a DevOps practice that automates software build, testing, and deployment processes.\nCI – Continuous Integration\nDevelopers frequently merge code into a shared repository.\nCI automatically:\n\t•\tBuilds application \n\t•\tRuns unit tests \n\t•\tPerforms code quality checks \nGoal:\nDetect issues early.\nCD – Continuous Delivery / Deployment\nAfter CI success:\n\t•\tApplication gets deployed automatically to environments like Dev, QA, and Production. \nBenefits:\n\t•\tFaster releases \n\t•\tReduced manual work \n\t•\tBetter reliability \nOne-line Answer:\nCI/CD automates build, testing, and deployment processes for faster and reliable software delivery.”\n\nYAML vs Classic Pipeline\n“We can create pipelines in two ways:\nYAML Pipeline\n\t•\tCode-based pipeline \n\t•\tStored in repository \n\t•\tVersion-controlled \n\t•\tSupports templates and reuse \n\t•\tPreferred for modern DevOps \nExample:\ntrigger:\n- main\nClassic Pipeline\n\t•\tUI-based pipeline \n\t•\tEasy for beginners \n\t•\tLimited flexibility \n\t•\tHarder to version control",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 78,
    "category": "DevOps General",
    "question": "Which one do you prefer?",
    "answer": "“I strongly prefer **YAML pipelines** over Classic (UI-based) pipelines in Azure DevOps for several key reasons:\n\n\t1. Pipeline-as-Code: YAML pipelines are stored directly in the Git repository alongside the application code. This means they are version-controlled, support branching, and can be reviewed via Pull Requests (PRs) just like regular code.\n\t2. Reusability: YAML supports templates, allowing us to write a deployment or build step once and reuse it across multiple pipelines and projects, which is not easily possible in Classic pipelines.\n\t3. Multi-Stage Support: A single YAML file can define the entire workflow, including Build, Test, Dev deployment, QA deployment, and Production deployment, making the entire lifecycle visible in one place.\n\t4. Disaster Recovery: If the Azure DevOps project is accidentally deleted, we can restore all our pipelines instantly simply by importing the YAML files from our Git repository.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 79,
    "category": "CI/CD & Pipelines",
    "question": "What is a Self-hosted Agent?",
    "answer": "“A self-hosted agent is an agent installed on our own server or VM to run pipelines.\nWe use self-hosted agents when:\n\t•\tCustom tools are needed \n\t•\tSpecific network access required \n\t•\tSecurity restrictions exist \n\t•\tLarge builds require dedicated resources \nBenefits:\n\t•\tFull control \n\t•\tBetter customization \n\t•\tFaster execution for large workloads \nOne-line Answer:\nSelf-hosted agents run pipelines on our own infrastructure with more control and customization.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 80,
    "category": "CI/CD & Pipelines",
    "question": "What is Microsoft-hosted Agent?",
    "answer": "“Microsoft-hosted agents are managed by Microsoft.\nFeatures:\n\t•\tPreconfigured environments \n\t•\tNo maintenance required \n\t•\tAutomatically provisioned \n\t•\tSupports Windows/Linux/macOS \nBest for:\n\t•\tStandard builds \n\t•\tSmall to medium projects \nLimitation:\n\t•\tLess customization \nOne-line Answer:\nMicrosoft-hosted agents are ready-to-use build environments managed by Microsoft.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 81,
    "category": "DevOps General",
    "question": "What are stages, jobs, and tasks?",
    "answer": "“In Azure DevOps pipeline hierarchy:\nStage\nLogical grouping like:\n\t•\tBuild \n\t•\tTest \n\t•\tDeploy \nJob\nRuns on an agent.\nExample:\n\t•\tLinux job \n\t•\tWindows job \nTask\nIndividual execution step.\nExamples:\n\t•\tRun script \n\t•\tInstall Terraform \n\t•\tBuild Docker image \nHierarchy:\nStage → Job → Task\nOne-line Answer:\nStages organize workflows, jobs run on agents, and tasks perform individual actions.”\n\nAZURE",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 82,
    "category": "Azure & Azure DevOps",
    "question": "What are variables in Azure DevOps?",
    "answer": "“Variables are used to store reusable values in pipelines.\nTypes:\n\t•\tPipeline variables \n\t•\tVariable groups \n\t•\tSecret variables \nExamples:\n\t•\tEnvironment names \n\t•\tResource names \n\t•\tURLs \n\t•\tCredentials \nBenefits:\n\t•\tReusability \n\t•\tCentralized configuration \n\t•\tBetter security \nOne-line Answer:\nVariables store reusable configuration values used across pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 83,
    "category": "CI/CD & Pipelines",
    "question": "How do you secure secrets in pipelines?",
    "answer": "“We never hardcode secrets in pipeline YAML files.\nWe use:\n\t•\tAzure Key Vault \n\t•\tSecret variables \n\t•\tRBAC access control \nExamples of secrets:\n\t•\tPasswords \n\t•\tAPI keys \n\t•\tConnection strings \nWe integrate Azure Key Vault with Azure DevOps pipelines so secrets are fetched securely during runtime.\nOne-line Answer:\nI secure secrets using Azure Key Vault, secret variables, and RBAC permissions.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 84,
    "category": "DevOps General",
    "question": "What is Service Connection?",
    "answer": "“A Service Connection securely connects Azure DevOps to external services like:\n\t•\tAzure subscription \n\t•\tDocker Hub \n\t•\tGitHub \n\t•\tKubernetes clusters \nIt stores authentication details securely.\nExample:\nAzure Resource Manager service connection used for deploying infrastructure to Azure.\nOne-line Answer:\nService Connection securely connects Azure DevOps with external platforms and cloud services.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 85,
    "category": "CI/CD & Pipelines",
    "question": "Pipeline is failing – how do you troubleshoot?",
    "answer": "“My troubleshooting approach is systematic.\nSteps:\n\t•\tCheck pipeline logs \n\t•\tIdentify failed stage/task \n\t•\tVerify: \n\t•\tVariables \n\t•\tService connections \n\t•\tPermissions \n\t•\tAgent availability \n\t•\tEnable debug logging: \nsystem.debug: true\n\t•\tReproduce issue locally if possible \nIf infrastructure-related:\n\t•\tValidate Terraform \n\t•\tCheck Kubernetes events/logs \nOne-line Answer:\nI isolate failures using logs, validate configurations, and debug step-by-step.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 86,
    "category": "Docker & Kubernetes",
    "question": "Deployment failed in production – what will you do?",
    "answer": "“First priority is restoring service quickly.\nSteps:\n\t•\tCheck deployment logs \n\t•\tIdentify root cause \n\t•\tRollback to previous stable version \n\t•\tFix issue in lower environment \n\t•\tValidate changes \n\t•\tRedeploy safely \nWe usually maintain rollback strategies in AKS and CI/CD pipelines.\nOne-line Answer:\nI perform rollback immediately, fix root cause, validate, and redeploy safely.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 87,
    "category": "Docker & Kubernetes",
    "question": "How do you handle zero-downtime deployment?",
    "answer": "“We use deployment strategies like:\nBlue-Green Deployment\n\t•\tTwo environments: \n\t•\tBlue (current) \n\t•\tGreen (new) \n\t•\tTraffic switches after validation \nRolling Updates\n\t•\tGradual pod replacement \n\t•\tNo complete downtime \nWe also:\n\t•\tMonitor application health \n\t•\tUse load balancers \n\t•\tValidate readiness probes \nOne-line Answer:\nI use rolling updates and blue-green deployments for zero downtime.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 88,
    "category": "CI/CD & Pipelines",
    "question": "Pipeline is slow – how to optimize?",
    "answer": "“To optimize pipelines:\n\t•\tEnable caching \n\t•\tUse parallel jobs \n\t•\tRemove unnecessary tasks \n\t•\tOptimize Docker layers \n\t•\tUse lightweight agents \n\t•\tReduce repeated downloads \nWe also split pipelines logically for faster execution.\nOne-line Answer:\nI optimize pipelines using caching, parallel execution, and task optimization.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 89,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement approvals in pipeline?",
    "answer": "“We use:\n\t•\tEnvironment approvals \n\t•\tManual validation tasks \n\t•\tRBAC restrictions \nProduction deployments require manual approval from authorized team members before execution.\nBenefits:\n\t•\tControlled deployment \n\t•\tReduced production risk \nOne-line Answer:\nI use environment-based approvals and validation steps for controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 90,
    "category": "CI/CD & Pipelines",
    "question": "Agent not picking job – why?",
    "answer": "“Possible reasons:\n\t•\tAgent offline \n\t•\tCapability mismatch \n\t•\tIncorrect pool configuration \n\t•\tPermission issue \nTroubleshooting:\n\t•\tCheck agent service status \n\t•\tValidate pool assignment \n\t•\tVerify required capabilities \nOne-line Answer:\nI verify agent health, capabilities, and pool configuration.”\n\nPipeline triggered but not running\n“Common reasons:\n\t•\tTrigger misconfiguration \n\t•\tWrong branch filters \n\t•\tYAML syntax issue \n\t•\tDisabled pipeline \nI check:\n\t•\ttrigger section \n\t•\tbranch filters \n\t•\tpipeline logs \n\t•\tYAML validation \nOne-line Answer:\nI verify triggers, branch filters, and YAML syntax.”\n\nPermission denied error\n“This usually happens because of:\n\t•\tRBAC issue \n\t•\tInvalid service connection \n\t•\tMissing access rights \nSteps:\n\t•\tValidate service connection \n\t•\tCheck Azure IAM roles \n\t•\tVerify Kubernetes RBAC \n\t•\tEnsure resource permissions \nOne-line Answer:\nI resolve permission errors by validating RBAC and service connection access.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 91,
    "category": "CI/CD & Pipelines",
    "question": "How do you design reusable pipelines?",
    "answer": "“We create reusable pipelines using:\n\t•\tYAML templates \n\t•\tShared repositories \n\t•\tParameterized pipelines \nBenefits:\n\t•\tDRY principle \n\t•\tStandardization \n\t•\tEasier maintenance \nExample:\nCommon build template reused across applications.\nOne-line Answer:\nI use YAML templates and parameters to create reusable and scalable pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 92,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement pipeline-as-code best practices?",
    "answer": "“We treat pipelines like application code.\nBest practices:\n\t•\tStore YAML in Git \n\t•\tUse PR reviews \n\t•\tModular templates \n\t•\tNaming standards \n\t•\tVersion control \n\t•\tSeparate environments \nBenefits:\n\t•\tTraceability \n\t•\tAuditability \n\t•\tBetter collaboration \nOne-line Answer:\nI manage pipelines as version-controlled code using templates and reviews.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 93,
    "category": "CI/CD & Pipelines",
    "question": "How do you manage multi-branch pipelines?",
    "answer": "“We configure branch-based triggers.\nExamples:\n\t•\tfeature/* \n\t•\tdevelop \n\t•\tmain \nWe also:\n\t•\tEnable PR validation \n\t•\tUse separate deployment rules \n\t•\tApply environment-specific approvals \nOne-line Answer:\nI use branch filters and PR validation for managing multi-branch pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 94,
    "category": "CI/CD & Pipelines",
    "question": "How would you migrate on-prem CI/CD to Azure DevOps?",
    "answer": "“Migration approach:\n\t•\tAnalyze existing setup \n\t•\tMove repositories to Azure Repos \n\t•\tRebuild pipelines in YAML \n\t•\tConfigure agents \n\t•\tMigrate gradually \nWe avoid big-bang migration and move incrementally to reduce risks.\nOne-line Answer:\nI migrate incrementally using YAML pipelines with minimal business disruption.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 95,
    "category": "DevOps General",
    "question": "How do you handle secrets leakage incident?",
    "answer": "“Immediate actions:\n\t•\tRotate credentials \n\t•\tRevoke compromised access \n\t•\tAudit logs \n\t•\tIdentify root cause \n\t•\tStrengthen security policies \nPreventive measures:\n\t•\tKey Vault \n\t•\tSecret scanning \n\t•\tRBAC \nOne-line Answer:\nI handle secret leakage using credential rotation, access revocation, and security audits.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 96,
    "category": "Behavioral & Project",
    "question": "What challenges did you face in project?",
    "answer": "“Some challenges we faced:\n\t•\tPipeline failures \n\t•\tEnvironment mismatch \n\t•\tDeployment downtime \n\t•\tSecret management \n\t•\tSlow pipelines \nSolutions:\n\t•\tVariable groups + Key Vault \n\t•\tBlue-green deployments \n\t•\tPipeline optimization \n\t•\tBetter monitoring \n\t•\tStandardized environments \nOne-line Answer:\nI solved deployment, security, and pipeline issues using automation and DevOps best practices.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 97,
    "category": "CI/CD & Pipelines",
    "question": "Describe your CI/CD pipeline flow",
    "answer": "“Our pipeline flow:\n\t•\tDeveloper pushes code \n\t•\tCI pipeline triggers \n\t•\tBuild application \n\t•\tRun tests \n\t•\tSonarQube analysis \n\t•\tBuild Docker image \n\t•\tVulnerability scanning \n\t•\tPush image to ACR \n\t•\tCD deployment: \n\t•\tDev \n\t•\tQA \n\t•\tProduction \n\t•\tManual approval before production \nOne-line Answer:\nMy CI/CD pipeline automates build, testing, security scanning, and controlled deployments.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 98,
    "category": "Docker & Kubernetes",
    "question": "Difference between Continuous Delivery vs Continuous Deployment",
    "answer": "Continuous Delivery\nDeployment requires manual approval before production.\nContinuous Deployment\nProduction deployment happens automatically without manual intervention.\nOne-line Answer:\nContinuous Delivery requires approval; Continuous Deployment is fully automated.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 99,
    "category": "CI/CD & Pipelines",
    "question": "Why YAML pipelines over Classic?",
    "answer": "“Advantages of YAML:\n\t•\tVersion-controlled \n\t•\tReusable \n\t•\tScalable \n\t•\tTemplate support \n\t•\tEasier automation \nThat’s why most modern projects prefer YAML pipelines.\nOne-line Answer:\nYAML pipelines are flexible, reusable, scalable, and version-controlled.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 100,
    "category": "CI/CD & Pipelines",
    "question": "How do you integrate Terraform in pipeline?",
    "answer": "“We automate infrastructure provisioning using Terraform in CI/CD pipelines.\nPipeline flow:\n\t•\tInstall Terraform \n\t•\tRun terraform init \n\t•\tRun terraform plan \n\t•\tSecurity scan using tfsec \n\t•\tManual approval \n\t•\tRun terraform apply \nState file stored securely in Azure Blob Storage backend.\nOne-line Answer:\nI automate infrastructure deployment using Terraform integrated into Azure DevOps pipelines.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 101,
    "category": "Azure & Azure DevOps",
    "question": "What are Azure Service Models?",
    "answer": "“Azure provides three main cloud service models based on how much control and responsibility the customer wants.\n1. IaaS (Infrastructure as a Service)\nAzure provides infrastructure like:\n\t•\tVirtual Machines \n\t•\tNetworking \n\t•\tStorage \nCustomer manages:\n\t•\tOS \n\t•\tApplications \n\t•\tRuntime \n\t•\tSecurity patches \nExamples:\n\t•\tAzure VM \n\t•\tVirtual Network \n\t•\tLoad Balancer \nBest for:\n\t•\tLift-and-shift migration \n\t•\tFull infrastructure control \n\n2. PaaS (Platform as a Service)\nAzure manages:\n\t•\tInfrastructure \n\t•\tOS \n\t•\tRuntime \nCustomer manages:\n\t•\tApplication \n\t•\tData \nExamples:\n\t•\tAzure App Service \n\t•\tAzure SQL Database \nBenefits:\n\t•\tFaster development \n\t•\tLess maintenance \n\n3. SaaS (Software as a Service)\nEverything managed by provider.\nUsers only consume software.\nExamples:\n\t•\tOffice 365 \n\t•\tOutlook \n\t•\tTeams \n\nOne-line Answer:\nAzure service models define control levels: IaaS gives maximum control, PaaS provides managed platforms, and SaaS delivers ready-to-use software.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 102,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Active Directory?",
    "answer": "“Azure Active Directory (Azure AD) is Microsoft’s cloud-based identity and access management service.\nIt provides:\n\t•\tAuthentication \n\t•\tAuthorization \n\t•\tSingle Sign-On (SSO) \n\t•\tMulti-Factor Authentication (MFA) \nUses:\n\t•\tUser login management \n\t•\tSecure application access \n\t•\tRBAC integration \nExample:\nUsers can login once and access multiple applications securely.\nOne-line Answer:\nAzure AD securely manages user identity, authentication, and access control.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 103,
    "category": "Azure & Azure DevOps",
    "question": "What is NSG?",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 104,
    "category": "Azure & Azure DevOps",
    "question": "What is RBAC?",
    "answer": "Role-Based Access Control (RBAC) is the authorization system in Azure:\n1. **Core Concept**: Restricts access to resources based on assigned roles. It answers 'Who (Security Principal) can do What (Role definition) to Which resource (Scope)'.\n2. **Built-in Roles**: Owner (full access + delegate access), Contributor (full access except delegate), and Reader (view access only).\n3. **Best Practice**: Apply the principle of least privilege, assigning roles at the resource group or resource scope rather than the subscription level.",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 105,
    "category": "Azure & Azure DevOps",
    "question": "What is Load Balancer?",
    "answer": "“Azure Load Balancer distributes incoming traffic across multiple servers or VMs.\nBenefits:\n\t•\tHigh availability \n\t•\tFault tolerance \n\t•\tBetter performance \nIt works at:\n\t•\tLayer 4 (TCP/UDP) \nUse cases:\n\t•\tVM traffic distribution \n\t•\tBackend server balancing \nOne-line Answer:\nLoad Balancer distributes traffic across multiple resources for high availability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 106,
    "category": "DevOps General",
    "question": "What is VPN Gateway?",
    "answer": "“Azure VPN Gateway securely connects:\n\t•\tOn-premises datacenter \n\t•\tRemote users \n\t•\tAzure VNets \nTypes:\n\t•\tSite-to-Site VPN \n\t•\tPoint-to-Site VPN \nTraffic is encrypted over internet.\nOne-line Answer:\nVPN Gateway securely connects on-premises environments to Azure.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 107,
    "category": "DevOps General",
    "question": "What is Availability Set?",
    "answer": "“Availability Set improves VM uptime and availability.\nIt protects against:\n\t•\tHardware failure \n\t•\tPlanned maintenance \nUses:\n\t•\tFault Domains \n\t•\tUpdate Domains \nThis ensures all VMs don’t go down together.\nOne-line Answer:\nAvailability Set improves VM availability during failures and maintenance.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 108,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Scale Set?",
    "answer": "“Azure VM Scale Set manages multiple identical VMs automatically.\nFeatures:\n\t•\tAuto scaling \n\t•\tLoad balancing \n\t•\tHigh availability \nScaling based on:\n\t•\tCPU \n\t•\tMemory \n\t•\tCustom metrics \nBest for:\n\t•\tWeb applications \n\t•\tLarge workloads \nOne-line Answer:\nScale Set automatically scales and manages multiple VM instances.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 109,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Application Gateway?",
    "answer": "“Application Gateway is a Layer 7 load balancer.\nFeatures:\n\t•\tURL-based routing \n\t•\tSSL termination \n\t•\tWeb Application Firewall (WAF) \n\t•\tSession affinity \nBest for:\n\t•\tWeb applications \n\t•\tHTTP/HTTPS traffic \nOne-line Answer:\nApplication Gateway is a Layer 7 load balancer with intelligent routing and WAF support.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 110,
    "category": "Azure & Azure DevOps",
    "question": "Difference between Load Balancer vs Application Gateway",
    "answer": "Load Balancer\nApplication Gateway\nLayer 4\nLayer 7\nTCP/UDP traffic\nHTTP/HTTPS traffic\nBasic traffic distribution\nIntelligent routing\nNo WAF\nSupports WAF\nOne-line Answer:\nLoad Balancer works at Layer 4, while Application Gateway works at Layer 7 with advanced routing.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 111,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Functions?",
    "answer": "“Azure Functions is a serverless compute service.\nFeatures:\n\t•\tEvent-driven execution \n\t•\tPay-per-use \n\t•\tNo server management \nTriggers:\n\t•\tHTTP \n\t•\tTimer \n\t•\tBlob storage \n\t•\tQueue messages \nOne-line Answer:\nAzure Functions executes code without managing servers.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 112,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Key Vault?",
    "answer": "“Azure Key Vault securely stores:\n\t•\tSecrets \n\t•\tPasswords \n\t•\tCertificates \n\t•\tEncryption keys \nBenefits:\n\t•\tCentralized secret management \n\t•\tRBAC integration \n\t•\tSecure CI/CD integration \nUsed in:\n\t•\tTerraform \n\t•\tAzure DevOps pipelines \n\t•\tAKS \nOne-line Answer:\nKey Vault securely stores and manages secrets, keys, and certificates.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 113,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Site Recovery (ASR)?",
    "answer": "“Azure Site Recovery is a disaster recovery solution.\nFeatures:\n\t•\tWorkload replication \n\t•\tFailover support \n\t•\tBusiness continuity \nIt replicates workloads to another region for recovery during disaster.\nOne-line Answer:\nASR provides disaster recovery through workload replication and failover.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 114,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Bastion?",
    "answer": "“Azure Bastion is a fully managed Platform-as-a-Service (PaaS) that provides secure, seamless Remote Desktop Protocol (RDP) and Secure Shell (SSH) access to your virtual machines directly over SSL/TLS:\n\n\t1. No Public IPs: With Azure Bastion, your virtual machines do not need public IP addresses, nor do you need to expose ports 3389 (RDP) or 22 (SSH) to the public internet. This drastically reduces the attack surface of your network.\n\t2. Web-Based Access: Users can log into their VMs directly through the Azure Portal using any modern web browser. No special client software or VPN is required.\n\t3. Integrated Security: Traffic is encrypted using HTTPS (port 443), and it integrates natively with Azure AD/Entra ID for multi-factor authentication (MFA) and conditional access policies.\n\t4. Bastion Host vs. Jumpbox: Unlike a traditional jumpbox VM (which requires manual OS patching, monitoring, and firewall configuration), Azure Bastion is a serverless, managed service that scales automatically and requires zero maintenance.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 115,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Front Door?",
    "answer": "“Azure Front Door is a global Layer 7 load balancer.\nFeatures:\n\t•\tGlobal routing \n\t•\tCDN integration \n\t•\tSSL offloading \n\t•\tWAF support \n\t•\tLow latency routing \nBest for:\n\t•\tGlobal applications \nOne-line Answer:\nAzure Front Door provides global traffic routing with low latency and high availability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 116,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Traffic Manager?",
    "answer": "“Traffic Manager is a DNS-based traffic routing service.\nRouting methods:\n\t•\tPriority \n\t•\tPerformance \n\t•\tGeographic \n\t•\tWeighted \nBest for:\n\t•\tMulti-region applications \nOne-line Answer:\nTraffic Manager distributes global traffic using DNS-based routing.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 117,
    "category": "DevOps General",
    "question": "What is Managed Identity?",
    "answer": "“Managed Identity provides Azure resources with identities to access other services securely.\nBenefits:\n\t•\tNo credential storage \n\t•\tAutomatic credential management \n\t•\tIntegrated with Azure AD \nUsed for:\n\t•\tAccessing Key Vault \n\t•\tDatabase authentication \nOne-line Answer:\nManaged Identity securely accesses Azure services without storing credentials.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 118,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Policy?",
    "answer": "“Azure Policy enforces governance and compliance rules.\nExamples:\n\t•\tRestrict VM sizes \n\t•\tEnforce tagging \n\t•\tDeny public IPs \nActions:\n\t•\tAudit \n\t•\tDeny \n\t•\tAppend \nOne-line Answer:\nAzure Policy enforces governance and compliance rules across Azure resources.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 119,
    "category": "DevOps General",
    "question": "What is Private Endpoint?",
    "answer": "“Private Endpoint assigns a private IP to Azure services within a VNet.\nBenefits:\n\t•\tNo public internet exposure \n\t•\tSecure communication \n\t•\tBetter compliance \nUsed for:\n\t•\tStorage Accounts \n\t•\tSQL Databases \n\t•\tKey Vault \nOne-line Answer:\nPrivate Endpoint securely connects Azure services through private IP addresses.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 120,
    "category": "DevOps General",
    "question": "Difference between Service Endpoint vs Private Endpoint",
    "answer": "“In Azure, both Service Endpoints and Private Endpoints are used to secure connectivity to PaaS services (like Storage Accounts or SQL Databases), but they differ fundamentally in how they route traffic and assign IP addresses:\n\n\t1. Azure Service Endpoint:\n\t\t•   How it works: Extends your virtual network's private address space to the PaaS service. The PaaS resource still uses its public IP address, but the firewall is configured to only accept traffic originating from your specific VNet subnet.\n\t\t•   Traffic Routing: Traffic remains on the Microsoft backbone network (does not go over the public internet), but the destination IP is public.\n\t\t•   Cost: Free.\n\n\t2. Azure Private Endpoint:\n\t\t•   How it works: Creates a network interface (NIC) inside your subnet and assigns it a private IP address from your VNet range. The PaaS service is now accessible via this private IP.\n\t\t•   Traffic Routing: Completely private. It disables all public access to the PaaS service, ensuring that traffic never leaves your private virtual network.\n\t\t•   Cost: Charged based on data processed and hourly resource usage.\n\nSummary of Differences:\n| Feature | Service Endpoint | Private Endpoint |\n| :--- | :--- | :--- |\n| IP Address | Uses the public IP of the PaaS service. | Uses a private IP from your VNet subnet. |\n| Public Access | Public endpoint remains active (restricted by firewall). | Public endpoint is completely disabled. |\n| On-Premises Access | Cannot be accessed over VPN/ExpressRoute easily. | Can be accessed securely over VPN/ExpressRoute. |\n| Security Level | High (restricts traffic to VNet). | Maximum (fully private network interface). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 121,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Landing Zone?",
    "answer": "“Landing Zone is a preconfigured Azure environment designed using best practices.\nIncludes:\n\t•\tNetworking \n\t•\tSecurity \n\t•\tGovernance \n\t•\tIdentity management \nBuilt using:\n\t•\tTerraform \n\t•\tARM \n\t•\tBicep \nOne-line Answer:\nLanding Zone provides a secure and scalable Azure foundation.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 122,
    "category": "DevOps General",
    "question": "What is Zero Trust Security?",
    "answer": "“Zero Trust follows:\n‘Never trust, always verify.’\nPrinciples:\n\t•\tIdentity verification \n\t•\tLeast privilege access \n\t•\tContinuous monitoring \nUsed with:\n\t•\tMFA \n\t•\tConditional Access \n\t•\tRBAC \nOne-line Answer:\nZero Trust verifies every access request before granting permissions.”\n\nEvent Hub vs Service Bus\nEvent Hub\nService Bus\nStreaming platform\nMessaging platform\nHigh throughput\nGuaranteed delivery\nTelemetry data\nEnterprise messaging\nOne-line Answer:\nEvent Hub handles streaming data, while Service Bus handles reliable messaging.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 123,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Firewall?",
    "answer": "“Azure Firewall is a managed network security service.\nFeatures:\n\t•\tTraffic filtering \n\t•\tThreat intelligence \n\t•\tLogging \n\t•\tCentralized control \nSupports:\n\t•\tApplication rules \n\t•\tNetwork rules \nOne-line Answer:\nAzure Firewall protects Azure resources by filtering network traffic.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 124,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Disk Types?",
    "answer": "“Azure provides multiple disk types:\nStandard HDD\n\t•\tLow cost \n\t•\tBasic workloads \nStandard SSD\n\t•\tBalanced performance \nPremium SSD\n\t•\tHigh-performance applications \nUltra Disk\n\t•\tExtremely high IOPS \nOne-line Answer:\nAzure offers multiple disk types based on cost and performance requirements.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 125,
    "category": "DevOps General",
    "question": "Difference between Availability Zone vs Region Pair",
    "answer": "“Azure provides different levels of redundancy to protect applications from localized failures and major disasters:\n\n\t1. Availability Zone (High Availability):\n\t\t•   What it is: Unique physical locations within the *same* Azure region. Each zone is made up of one or more datacenters equipped with independent power, cooling, and networking.\n\t\t•   Purpose: Protects against datacenter-level failures (e.g., a power outage in one building).\n\t\t•   Latency: Extremely low latency (typically < 2ms) because zones are close to each other, allowing synchronous replication.\n\n\t2. Region Pair (Disaster Recovery):\n\t\t•   What it is: A relationship between two Azure regions within the same geography (e.g., East US and West US), located at least 300 miles apart.\n\t\t•   Purpose: Protects against large-scale regional disasters (e.g., natural disasters, widespread power grid failures).\n\t\t•   Latency: Higher latency due to the physical distance, requiring asynchronous replication (e.g., GRS storage).\n\nSummary of Differences:\n| Feature | Availability Zone | Region Pair |\n| :--- | :--- | :--- |\n| Location | Inside the same Azure region. | Two separate regions (min. 300 miles apart). |\n| Primary Use | High Availability (HA) for active-active workloads. | Disaster Recovery (DR) and business continuity. |\n| Replication | Synchronous (no data loss). | Asynchronous (potential minimal data loss). |\n| Cost | Free (except for minimal inter-zone data transfer fees). | Higher cost (requires running resources in a second region). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 126,
    "category": "DevOps General",
    "question": "What is ExpressRoute?",
    "answer": "“ExpressRoute provides private connectivity between:\n\t•\tOn-premises datacenter \n\t•\tAzure \nBenefits:\n\t•\tFaster connection \n\t•\tMore secure \n\t•\tNo internet exposure \nUsed by enterprises requiring dedicated connectivity.\nOne-line Answer:\nExpressRoute provides private, secure, and high-speed Azure connectivity.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 127,
    "category": "DevOps General",
    "question": "How do you design highly available architecture?",
    "answer": "“We use:\n\t•\tAvailability Zones \n\t•\tMultiple instances \n\t•\tLoad Balancers \n\t•\tAuto scaling \n\t•\tBackup and disaster recovery \nGoal:\nAvoid single point of failure.\nOne-line Answer:\nHigh availability is achieved using redundancy, load balancing, and failover mechanisms.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 128,
    "category": "DevOps General",
    "question": "How do you design scalable architecture?",
    "answer": "“To design a highly scalable and resilient architecture in the cloud, I follow these key architectural patterns and Azure services:\n\n\t1. Stateless Application Design: Ensure application servers do not store session state locally. Session data should be stored in a centralized, fast caching layer like **Azure Cache for Redis** so that any instance can handle any user request.\n\t2. Horizontal Auto-Scaling: Use **Virtual Machine Scale Sets (VMSS)** or **Azure Kubernetes Service (AKS)** with Horizontal Pod Autoscaler (HPA) to dynamically add or remove instances based on real-time CPU, memory, or request queue metrics.\n\t3. Global Load Balancing & Caching: Use **Azure Front Door** or **Azure Traffic Manager** to route global users to the nearest healthy region, and leverage Content Delivery Networks (CDN) to cache static assets close to users, reducing the load on backend servers.\n\t4. Database Scalability: Use read-replicas to offload read traffic from the primary database, and implement database sharding or autoscale throughput (such as Azure SQL Serverless or Cosmos DB autoscale) to handle peak write loads.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 129,
    "category": "Azure & Azure DevOps",
    "question": "How do you secure Azure resources?",
    "answer": "“Securing Azure resources requires a multi-layered 'Defense in Depth' security strategy across identity, networking, storage, and monitoring:\n\n\t1. Identity and Access Management (IAM): Enforce the principle of least privilege using **Azure Role-Based Access Control (RBAC)**. Disable access keys where possible and use **Managed Identities** (System-assigned or User-assigned) so resources can authenticate securely without hardcoded credentials.\n\t2. Network Isolation: Deploy resources inside isolated **Virtual Networks (VNets)**. Block all public internet access to databases and backend APIs by using **Private Endpoints** and **Azure Bastion** for secure administrative access.\n\t3. Firewall & Traffic Filtering: Configure **Network Security Groups (NSGs)** at the subnet level to restrict inbound and outbound traffic, and deploy **Azure Application Gateway with Web Application Firewall (WAF)** to protect web apps from common exploits (SQL injection, XSS).\n\t4. Data Protection & Secrets: Enable encryption at rest and in transit for all Storage Accounts and SQL databases. Store all certificates, keys, and connection strings securely in **Azure Key Vault**.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 130,
    "category": "DevOps General",
    "question": "What is fault domain vs update domain?",
    "answer": "“In Azure, Fault Domains and Update Domains are logical groupings used within Availability Sets to ensure high availability and prevent single points of failure during hardware issues or maintenance:\n\n\t1. Fault Domain (Physical Isolation):\n\t\t•   What it is: A group of VMs that share a common physical power source and network switch (essentially, a physical server rack in the datacenter).\n\t\t•   Purpose: Protects against unexpected hardware, power, or network failures. If a rack fails, only VMs in that specific fault domain are affected.\n\t\t•   Action: Azure automatically distributes VMs in an Availability Set across multiple fault domains (usually 2 or 3).\n\n\t2. Update Domain (Planned Maintenance):\n\t\t•   What it is: A group of VMs and underlying physical hardware that can be rebooted or patched at the same time.\n\t\t•   Purpose: Protects against downtime during planned Azure platform updates.\n\t\t•   Action: When a patch is applied, Azure reboots VMs in one update domain at a time, waiting for them to recover before moving to the next domain (usually configured up to 20 update domains).\n\nSummary:\n* **Fault Domains** protect against *unplanned* hardware failures (rack level).\n* **Update Domains** protect against *planned* maintenance reboots (sequential patching).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 131,
    "category": "DevOps General",
    "question": "What is Hub-Spoke Architecture?",
    "answer": "“In Hub-Spoke architecture:\nHub\nContains shared services:\n\t•\tFirewall \n\t•\tVPN \n\t•\tDNS \nSpoke\nContains application VNets.\nBenefits:\n\t•\tCentralized security \n\t•\tBetter scalability \nOne-line Answer:\nHub-Spoke centralizes networking and improves security and scalability.”",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 132,
    "category": "Terraform (IaC)",
    "question": "What is Terraform State & why is it critical?",
    "answer": "“Terraform state is a file that stores the current mapping between Terraform configuration and real infrastructure resources.\nWhenever Terraform creates infrastructure, it stores resource details inside the state file.\nThe state file contains:\n\t•\tResource IDs \n\t•\tMetadata \n\t•\tDependencies \n\t•\tCurrent infrastructure status \nTerraform compares:\n\t•\tDesired configuration\nvs \n\t•\tCurrent state \nto determine:\n\t•\tWhat to create \n\t•\tWhat to update \n\t•\tWhat to delete \nWithout state, Terraform cannot properly track infrastructure.\nFor example:\nIf a VM already exists but Terraform has no state information, Terraform may try to create the same VM again.\nThat’s why state is extremely critical in Terraform.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 133,
    "category": "Terraform (IaC)",
    "question": "Why Terraform State is Important",
    "answer": "1. Infrastructure Tracking\nTerraform knows which resources it manages.\n2. Change Detection\nTerraform identifies infrastructure drift and required modifications.\n3. Dependency Management\nTerraform maintains resource relationships and execution order.\n4. Performance Optimization\nTerraform does not query every resource every time.\n5. Collaboration\nRemote state allows teams to work together safely.\n\nRemote State Best Practice\n“In production, we never store state locally.\nWe store Terraform state in:\n\t•\tAzure Blob Storage \n\t•\tS3 bucket \n\t•\tTerraform Cloud \nWe also enable:\n\t•\tState locking \n\t•\tVersioning \n\t•\tBackup \nThis prevents corruption and concurrent modifications.”\n\nOne-line Answer\n“Terraform state is the source of truth that Terraform uses to track and manage infrastructure resources.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 134,
    "category": "Terraform (IaC)",
    "question": "What if your Terraform state file is deleted?",
    "answer": "“If the Terraform state file gets deleted, Terraform loses track of all infrastructure resources.\nThe infrastructure may still exist in Azure or cloud provider, but Terraform will no longer know it manages those resources.\nAs a result:\n\t•\tTerraform may try to recreate existing resources \n\t•\tDuplicate resources may be created \n\t•\tConflicts and deployment failures can happen \nThat’s why state backup is very important.”\n\nRecovery Methods\nScenario 1: Remote Backend with Backup\n“If remote backend versioning is enabled:\n\t•\tRestore previous state version \n\t•\tContinue normal operations \nExample:\nAzure Blob Storage versioning or S3 versioning.”\n\nScenario 2: No Backup Available\n“We rebuild the state using:\nterraform import\nTerraform import maps existing infrastructure into Terraform state manually.”\nExample:\nterraform import azurerm_resource_group.rg my-rg\n\nBest Practices to Prevent State Loss\n\t•\tUse remote backend \n\t•\tEnable versioning \n\t•\tEnable state locking \n\t•\tRestrict access \n\t•\tTake backups regularly \n\nOne-line Answer\n“If the state file is deleted, Terraform loses infrastructure tracking and may try to recreate existing resources.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 135,
    "category": "Terraform (IaC)",
    "question": "What are Terraform Workspaces?",
    "answer": "“Terraform Workspaces allow multiple state files using the same Terraform configuration.\nEach workspace maintains:\n\t•\tSeparate state \n\t•\tSeparate infrastructure \nThis is useful for environments like:\n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction \nDefault workspace name:\ndefault\nExample:\nSame Terraform code can create:\n\t•\tDev infrastructure in one workspace \n\t•\tProduction infrastructure in another workspace \nwithout changing the code.”\n\nWorkspace Commands\nCreate Workspace\nterraform workspace new dev\nSwitch Workspace\nterraform workspace select prod\nList Workspaces\nterraform workspace list\n\nBenefits of Workspaces\n\t•\tEnvironment isolation \n\t•\tReusability \n\t•\tSimplified management \n\t•\tSeparate state tracking \n\nLimitation\n“For large enterprise projects, separate folders and separate backend configurations are usually preferred over only workspaces.”\n\nOne-line Answer\n“Terraform workspaces allow multiple isolated state files using the same Terraform code.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 136,
    "category": "DevOps General",
    "question": "How do you manage multiple environments (Dev/Stage/Prod)?",
    "answer": "“In real projects, we manage multiple environments carefully to avoid conflicts and maintain isolation.\nWe usually use:\n\t•\tSeparate folders \n\t•\tSeparate variable files \n\t•\tSeparate backend state files \n\t•\tSeparate subscriptions/resource groups \nfor:\n\t•\tDev \n\t•\tQA \n\t•\tStage \n\t•\tProduction” \n\nOur Approach\n1. Separate Variable Files\nExample:\n\t•\tdev.tfvars \n\t•\tqa.tfvars \n\t•\tprod.tfvars \nEach file contains environment-specific values.\n\n2. Separate State Files\nEach environment has:\n\t•\tIndependent backend \n\t•\tSeparate state management \nThis avoids accidental production impact.\n\n3. Resource Naming Convention\nExamples:\n\t•\tdev-vnet \n\t•\tqa-aks \n\t•\tprod-storage \nThis improves readability and management.\n\n4. CI/CD Integration\n“We use Azure DevOps pipelines for controlled deployments.\nProduction deployment requires:\n\t•\tApproval \n\t•\tValidation \n\t•\tSecurity checks” \n\n5. Environment Isolation\nWe isolate:\n\t•\tNetworking \n\t•\tAccess control \n\t•\tMonitoring \n\t•\tSecrets \nfor each environment.\n\nOne-line Answer\n“I manage multiple environments using separate state files, variable files, naming conventions, and CI/CD-controlled deployments.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 137,
    "category": "DevOps General",
    "question": "Difference between count, for_each, and dynamic",
    "answer": "1. count\n“count is used for creating multiple similar resources using numeric indexing.”\nExample:\ncount = 3\nResources created:\n\t•\tVM[0] \n\t•\tVM[1] \n\t•\tVM[2] \nBest Use Case\nWhen resources are almost identical.\nLimitation\nIndex-based tracking can cause issues if order changes.\n\n2. for_each\n“for_each is used for looping through:\n\t•\tMaps \n\t•\tSets \n\t•\tKey-value pairs \nIt provides better resource identification.”\nExample:\nfor_each = toset([\"dev\",\"qa\",\"prod\"])\nBenefits:\n\t•\tBetter flexibility \n\t•\tEasier updates \n\t•\tStable resource tracking \nBest Use Case\nWhen resources have unique names/configurations.\n\n3. dynamic\n“dynamic blocks are used to generate nested configuration blocks dynamically.”\nUsed when:\n\t•\tNested blocks repeat \n\t•\tConfiguration changes dynamically \nExample use cases:\n\t•\tMultiple security rules \n\t•\tMultiple disks \n\t•\tMultiple ingress rules \n\nComparison Table\nFeature\ncount\nfor_each\ndynamic\nWorks with\nNumbers\nMaps/Sets\nNested blocks\nTracking\nIndex-based\nKey-based\nDynamic generation\nFlexibility\nLow\nHigh\nVery High\nBest for\nSimilar resources\nUnique resources\nNested configurations\n\nOne-line Answer\n“count is index-based looping, for_each is key-based looping, and dynamic is used for generating nested blocks dynamically.”\nScenario-Based DevOps / Cloud Interview Questions & Answers",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 138,
    "category": "Terraform (IaC)",
    "question": "If You Need to Create 100 VMs in Multiple Regions, What Approach Will You Use?",
    "answer": "For large-scale VM deployment, I would use:\n\t•\tTerraform \n\t•\tfor_each \n\t•\treusable modules \n\t•\tregion-based architecture \nExample Strategy\n\t•\t100 VMs in West Europe \n\t•\t100 VMs in Central US \nBest Practices\n\t•\tSeparate VNets per region \n\t•\tGlobal VNet Peering \n\t•\tReusable Terraform modules \n\t•\tSeparate Terraform state files \nCommunication Between Regions\nUse:\n\t•\tGlobal VNet Peering \n\t•\tAzure backbone network \n\t•\tPrivate communication",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 139,
    "category": "DevOps General",
    "question": "How Will You Reduce Latency Between Multi-Region VMs?",
    "answer": "Best Practices\n\t•\tKeep workloads regional \n\t•\tUse local database/cache \n\t•\tAvoid synchronous cross-region calls \n\t•\tUse async communication \n\t•\tUse Redis caching \n\t•\tUse Azure Front Door \nNetworking\n\t•\tGlobal VNet Peering \n\t•\tAccelerated networking \nArchitecture\nUsers\n   │\nAzure Front Door\n   │\n ├── Europe Region\n └── US Region",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 140,
    "category": "Azure & Azure DevOps",
    "question": "How Do You Manage Secrets in Azure?",
    "answer": "“We manage secrets, credentials, and API keys in Azure by centralizing them in **Azure Key Vault** and enforcing secure access patterns:\n\n\t1. Zero Hardcoded Secrets: No passwords or connection strings are stored in code, variables, or committed to Git. All secrets are stored in Azure Key Vault.\n\t2. Passwordless Authentication: We use **Managed Identities** (System-assigned or User-assigned) for our Azure resources (like VMs or AKS pods). This allows them to authenticate to Key Vault using Azure AD/Entra ID tokens, eliminating the need to store a client secret or password in the application configuration.\n\t3. Network Isolation: We restrict access to the Key Vault by disabling public network access and configuring a **Private Endpoint**, ensuring it is only accessible from within our private Virtual Network.\n\t4. Granular Access Control: We use Azure RBAC (Key Vault Secrets User role) to grant read-only access to specific identities, and enable **Soft Delete** and **Purge Protection** to prevent accidental deletion of critical secrets.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 141,
    "category": "Terraform (IaC)",
    "question": "Explain Full Terraform Key Vault Setup",
    "answer": "“A secure, production-grade Terraform setup for Azure Key Vault involves provisioning the vault, configuring network rules, and setting up access policies:\n\n\t1. Key Vault Provisioning:\n\t   We define the `azurerm_key_vault` resource, enabling features like soft delete, purge protection, and specifying the SKU (Standard or Premium).\n\t2. Access Policy or RBAC:\n\t   We use `azurerm_role_assignment` to assign the 'Key Vault Secrets Officer' role to our deployment service principal, and 'Key Vault Secrets User' to our application's Managed Identity.\n\t3. Network Rules:\n\t   We restrict access by defining `network_acls` inside the Key Vault resource, setting the default action to `Deny` and bypassing only trusted Microsoft services and specific subnets.\n\nExample Terraform Code:\n```hcl\nresource \"azurerm_key_vault\" \"kv\" {\n  name                        = \"prod-kv-enterprise\"\n  location                    = var.location\n  resource_group_name         = var.rg_name\n  tenant_id                   = data.azurerm_client_config.current.tenant_id\n  sku_name                    = \"standard\"\n  soft_delete_retention_days  = 7\n  purge_protection_enabled    = true\n\n  network_acls {\n    default_action             = \"Deny\"\n    bypass                     = \"AzureServices\"\n    virtual_network_subnet_ids = [var.private_subnet_id]\n  }\n}\n```”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 142,
    "category": "Terraform (IaC)",
    "question": "If One Resource Needs to Be Deleted in Terraform, How Will You Do It?",
    "answer": "“If I need to delete a specific resource managed by Terraform, I can use three primary approaches depending on the situation:\n\n\t1. The Standard/Clean Method (Recommended):\n\t\t•\tRemove the resource block (or module call) from the Terraform configuration files (`.tf`).\n\t\t•\tRun `terraform plan` to verify that Terraform intends to destroy only that specific resource.\n\t\t•\tRun `terraform apply` to execute the deletion.\n\t2. The Targeted Destroy Method (For Emergency/Temporary Deletions):\n\t\t•\tRun the targeted destroy command:\n\t\t  `terraform destroy -target=azurerm_virtual_machine.my_vm`\n\t\t•\tNote: Use this with caution, as it leaves the resource block in your code, meaning the next time anyone runs `terraform apply`, the resource will be recreated.\n\t3. The State Exclusion Method (To delete from Terraform management without destroying the physical resource):\n\t\t•\tRun `terraform state rm azurerm_virtual_machine.my_vm`.\n\t\t•\tDelete the resource block from the `.tf` code.\n\t\t•\tThis removes the resource from the state file without deleting it from Azure/AWS.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 143,
    "category": "Terraform (IaC)",
    "question": "What Happens During Terraform Lifecycle?",
    "answer": "The Terraform lifecycle consists of:\n1. **terraform init**: Initializes backend storage and downloads providers.\n2. **terraform plan**: Dry-run check showing changes.\n3. **terraform apply**: Provisions resources in the cloud and writes `terraform.tfstate`.\n4. **terraform destroy**: Removes all managed resources.\n*Also refers to the `lifecycle` block inside resources: `create_before_destroy`, `prevent_destroy`, and `ignore_changes`.*",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 144,
    "category": "Terraform (IaC)",
    "question": "What is Terraform Import?",
    "answer": "“Terraform Import is a command used to bring existing, manually created cloud resources under Terraform management without recreating them.\n\nHow it works:\n\t1. Write the Code: First, write the Terraform resource block in the `.tf` file for the resource to be imported.\n\t   Example:\n\t   ```hcl\n\t   resource \"azurerm_resource_group\" \"rg\" {\n\t     name     = \"my-existing-rg\"\n\t     location = \"East US\"\n\t   }\n\t   ```\n\t2. Run the Import Command: Execute the import command, mapping the Terraform resource address to the actual cloud resource ID:\n\t   `terraform import azurerm_resource_group.rg /subscriptions/.../resourceGroups/my-existing-rg`\n\t3. Update the State: Terraform queries the cloud provider, retrieves the resource attributes, and writes them directly into the `terraform.tfstate` file.\n\t4. Verify Alignment: Run `terraform plan` to ensure that the code matches the imported state. If there are differences, adjust the `.tf` code until `terraform plan` shows 'No changes'.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 145,
    "category": "DevOps General",
    "question": "Scenario: Production VM Accidentally Deleted. What Will You Do?",
    "answer": "“If a production VM is accidentally deleted, I will follow a structured disaster recovery and incident response workflow:\n\n\t1. Immediate Mitigation:\n\t\t•\tCheck Monitoring & Alerts: Verify the alerts in Azure Monitor/Grafana to confirm when it went down and its impact.\n\t\t•\tAssess the State: Check if the VM was managed by Terraform. If yes, inspect the Terraform state file.\n\t2. Reconstruction:\n\t\t•\tRecreate via Terraform: Since we practice Infrastructure as Code, I will run `terraform plan` to see the delta. Since the physical VM is missing, Terraform will detect the difference and plan to recreate it. Then I will run `terraform apply` to recreate the VM with the exact same configuration (CPU, Memory, Network, IP, Security Groups).\n\t\t•\tRestore Data from Backup: If the VM has stateful data, I will restore the latest disk snapshot or backup from Azure Backup / AWS Backup.\n\t3. Root Cause Analysis (RCA):\n\t\t•\tAudit Logs: Inspect Azure Activity Logs or AWS CloudTrail to identify who or what deleted the VM (human error, script, or automated process).\n\t4. Prevention for Future:\n\t\t•\tEnable Resource Locks: Apply `CanNotDelete` locks on all production resource groups.\n\t\t•\tEnable Soft Delete: Enable soft-delete on disks and Key Vaults.\n\t\t•\tDeploy VMSS: Use Virtual Machine Scale Sets (VMSS) with multiple instances behind a Load Balancer instead of a single standalone VM.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 146,
    "category": "Docker & Kubernetes",
    "question": "Scenario: Application is Down in Kubernetes. How Will You Troubleshoot?",
    "answer": "“To troubleshoot an application that is down in a Kubernetes cluster, I follow a systematic bottom-up approach:\n\n\t1. Check Pod Status:\n\t\t•\tCommand: `kubectl get pods -n <namespace>`\n\t\t•\tLook for statuses like `CrashLoopBackOff`, `Pending`, `ImagePullBackOff`, or `Error`.\n\t2. Inspect the Pod Details:\n\t\t•\tCommand: `kubectl describe pod <pod-name> -n <namespace>`\n\t\t•\tCheck the 'Events' section at the bottom. This reveals issues like failed scheduling (insufficient CPU/Memory), volume mount failures, or failed readiness/liveness probes.\n\t3. Check Application Logs:\n\t\t•\tCommand: `kubectl logs <pod-name> -n <namespace> --tail=100` (add `-c <container-name>` if multi-container).\n\t\t•\tThis helps identify application-level crashes, unhandled exceptions, database connection failures, or missing environment variables.\n\t4. Check Cluster & Node Status:\n\t\t•\tCommand: `kubectl get nodes` and `kubectl describe node <node-name>` to check if the node is OutOfDisk, MemoryPressure, or NotReady.\n\t5. Check Networking & Services:\n\t\t•\tCommand: `kubectl get svc -n <namespace>` and `kubectl describe svc <service-name>`.\n\t\t•\tVerify if the service selector matches the pod labels. Test DNS resolution and network policies.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 147,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: Jenkins Build Failed. What Will You Check?",
    "answer": "“When a Jenkins build fails, I follow these steps to quickly identify and resolve the issue:\n\n\t1. Analyze Console Output:\n\t\t•\tGo to the specific build number and open 'Console Output'.\n\t\t•\tScroll to the bottom to find the exact error message (e.g., compilation error, test failure, syntax error in Jenkinsfile, or permission denied).\n\t2. Check Jenkins Agent/Worker Status:\n\t\t•\tVerify if the build agent went offline during the build. Check 'Manage Jenkins' -> 'Nodes' to ensure the agent is connected and has enough resources.\n\t3. Check Disk Space:\n\t\t•\tVerify if the Jenkins server or agent has run out of disk space. I can run `df -h` on the agent or check Jenkins logs for `No space left on device`.\n\t4. Check Integration & Credentials:\n\t\t•\tCheck if the git checkout failed due to credential expiry or network issues.\n\t\t•\tVerify if external tools like Docker, Maven, or SonarQube are running and accessible from the Jenkins agent.\n\t5. Command-line Verification:\n\t\t•\tIf needed, log into the Jenkins agent and run the build command manually in the workspace directory to reproduce the error.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 148,
    "category": "Linux & Git",
    "question": "Scenario: Disk Space Full on Linux Server",
    "answer": "“If a Linux server's disk space is full, it can cause services to crash. I resolve this using the following process:\n\n\t1. Check Disk Space Usage:\n\t\t•\tRun `df -h` to see which mount point (e.g., `/`, `/var`) is 100% full.\n\t2. Identify Large Files or Directories:\n\t\t•\tRun `du -sh /* 2>/dev/null | sort -h` starting from the root directory, and recursively drill down to find the offending directories (e.g., `/var/log`, `/var/lib/docker`).\n\t\t•\tTo find the top 10 largest files: `find / -type f -size +100M -exec ls -lh {} + 2>/dev/null | awk '{ print $5, $9 }' | sort -hr | head -n 10`\n\t3. Safe Cleanup:\n\t\t•\tClear Log Files safely (do not delete them while active): Clear them using `cat /dev/null > /var/log/syslog` or `truncate -s 0 /var/log/app.log`.\n\t\t•\tDocker Cleanup: If Docker is taking up space, run `docker system prune -a --volumes` to remove unused containers, networks, images, and build cache.\n\t\t•\tClean Package Manager Cache: Run `apt-get clean` (Debian/Ubuntu) or `yum clean all` (RHEL/CentOS).\n\t4. Long-term Prevention:\n\t\t•\tConfigure log rotation (`logrotate`) to compress and delete old logs.\n\t\t•\tSet up disk space alerts in Prometheus/Grafana or Azure Monitor to notify the team when disk usage exceeds 80%.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 149,
    "category": "Terraform (IaC)",
    "question": "Scenario: How Will You Secure Terraform State?",
    "answer": "“Terraform state files contain sensitive information (like database passwords, API keys, and private keys) in plain text. I secure it using the following best practices:\n\n\t1. Use a Remote Backend:\n\t\t•\tNever store `terraform.tfstate` locally or commit it to Git.\n\t\t•\tUse a secure remote backend like Azure Blob Storage, AWS S3, or HashiCorp Consul.\n\t2. Enable Encryption:\n\t\t•\tEnsure the storage bucket/container has Encryption-at-Rest enabled (e.g., using Azure Storage Service Encryption or AWS KMS).\n\t\t•\tEnsure all communication is encrypted in transit using HTTPS/TLS.\n\t3. Enable State Locking:\n\t\t•\tEnable state locking (using Azure Blob Storage native leases or AWS DynamoDB) to prevent concurrent writes that can corrupt the state.\n\t4. Implement Strict RBAC:\n\t\t•\tRestrict access to the storage account/S3 bucket using Role-Based Access Control (RBAC). Only the CI/CD pipeline service principal and senior administrators should have read/write access.\n\t5. Use Secrets Managers:\n\t\t•\tInstead of hardcoding secrets in variables, fetch them dynamically at runtime from Azure Key Vault or AWS Secrets Manager so they are not hardcoded in the state files where possible.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 150,
    "category": "DevOps General",
    "question": "Scenario: How Will You Deploy Zero-Downtime Application?",
    "answer": "“To deploy an application with zero downtime, I use a combination of Kubernetes deployment strategies and Terraform lifecycle configurations:\n\n\t1. Kubernetes Deployment Strategy (Rolling Update):\n\t\t•\tUse the `RollingUpdate` strategy in the Deployment manifest.\n\t\t•\tConfigure `maxSurge` (e.g., 25%) to define how many extra pods can be created during the update.\n\t\t•\tConfigure `maxUnavailable` (e.g., 0%) to ensure that no existing pods are terminated until new pods are ready.\n\t\t•\tDefine `readinessProbe` and `livenessProbe` so Kubernetes knows exactly when the new pod is healthy and ready to receive traffic before routing users to it.\n\t2. Terraform Lifecycle:\n\t\t•\tIf deploying VMs or infrastructure behind a load balancer, use the `create_before_destroy = true` lifecycle hook in Terraform. This ensures the new resource is provisioned and healthy before the old one is destroyed.\n\t3. Blue-Green or Canary Deployments:\n\t\t•\tFor critical applications, I configure Blue-Green deployments (switching traffic between two identical environments using a Load Balancer/DNS) or Canary deployments (routing 5-10% of traffic to the new version using Istio or NGINX Ingress to test stability before full rollout).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 151,
    "category": "Docker & Kubernetes",
    "question": "Scenario: How Will You Scale Kubernetes Application?",
    "answer": "“Scaling a Kubernetes application can be done either manually or automatically depending on the workload demands:\n\n\t1. Manual Scaling:\n\t\t•\tI can scale a deployment up or down instantly using the CLI:\n\t\t  `kubectl scale deployment/my-app --replicas=10 -n production`\n\t\t•\tAlternatively, I can edit the `replicas` field in the deployment YAML and apply it.\n\t2. Auto-Scaling (Recommended):\n\t\t•\tHorizontal Pod Autoscaler (HPA): Automatically adjusts the number of pods based on CPU or Memory utilization.\n\t\t  Example: `kubectl autoscale deployment my-app --cpu-percent=70 --min=2 --max=10`\n\t\t•\tVertical Pod Autoscaler (VPA): Automatically adjusts the CPU and Memory requests/limits of the pods.\n\t\t•\tCluster Autoscaler (CA): Scales the number of virtual machine nodes in the cluster if there are unschedulable pods due to resource constraints.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 152,
    "category": "DevOps General",
    "question": "Scenario: How Will You Handle Multi-Environment Infra?",
    "answer": "“To manage infrastructure across multiple environments (Dev, QA, Stage, Prod) efficiently and safely, I follow these key principles:\n\n\t1. Directory Structure (Environment Isolation):\n\t\t•\tI use a separate directory structure for each environment to keep them completely isolated:\n\t\t  ```\n\t\t  environments/\n\t\t  ├── dev/\n\t\t  │   ├── main.tf\n\t\t  │   └── terraform.tfvars\n\t\t  ├── prod/\n\t\t  │   ├── main.tf\n\t\t  │   └── terraform.tfvars\n\t\t  ```\n\t2. Reusable Modules:\n\t\t•\tWrite core infrastructure (like VNet, AKS, VMs) as reusable Terraform modules. The environment-specific directories simply call these modules with different input parameters.\n\t3. Separate Backend State:\n\t\t•\tEach environment must have its own remote state file in a separate storage container/bucket to prevent accidental modification of production state during dev testing.\n\t4. Variable Separation:\n\t\t•\tUse `.tfvars` files to define environment-specific values (e.g., small VM sizes for Dev, large VM sizes for Prod).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 153,
    "category": "Docker & Kubernetes",
    "question": "Scenario: Application Works Locally but Fails in Docker",
    "answer": "“When an application works on a developer's local machine but fails inside a Docker container, it is usually due to environment differences. I troubleshoot this using these steps:\n\n\t1. Inspect Container Logs:\n\t\t•\tRun `docker logs <container-id>` to see the application's stdout/stderr. This usually reveals startup crashes, missing packages, or database connection errors.\n\t2. Check Port Mapping:\n\t\t•\tVerify that the port exposed inside the Dockerfile matches the port mapped in the run command.\n\t\t  Example: `docker run -p 8080:80 my-image` (maps host port 8080 to container port 80).\n\t3. Check Environment Variables:\n\t\t•\tEnsure all required environment variables, config files, or secrets are passed into the container at runtime using the `-e` flag or `--env-file`.\n\t4. Debug Interactively:\n\t\t•\tRun a shell inside the running or failed container to inspect files and test network connectivity:\n\t\t  `docker exec -it <container-id> /bin/sh` or `docker run --entrypoint /bin/sh -it my-image`.\n\t5. Check Base Image and Permissions:\n\t\t•\tEnsure the container has the correct file permissions and is not running into permission issues when writing to directories, and that the base OS image has all required system libraries.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 154,
    "category": "DevOps General",
    "question": "Scenario: How Will You Monitor Production Infrastructure?",
    "answer": "“I implement a comprehensive 3-tier monitoring strategy to ensure production reliability, visibility, and quick alerting:\n\n\t1. Infrastructure Monitoring (Metrics):\n\t\t•\tUse Prometheus and Grafana or Azure Monitor / AWS CloudWatch.\n\t\t•\tMonitor system resource metrics: CPU usage, Memory utilization, Disk I/O, Network bandwidth, and Node status.\n\t2. Application & Kubernetes Monitoring:\n\t\t•\tMonitor application metrics using Prometheus exporters (like Node Exporter or JMX Exporter).\n\t\t•\tFor Kubernetes, monitor Pod restarts, crash loops, API server latency, and ingress controller traffic.\n\t3. Log Aggregation:\n\t\t•\tUse the ELK Stack (Elasticsearch, Logstash, Kibana) or EFK (Fluentd) or Azure Log Analytics.\n\t\t•\tAll container stdout/stderr logs are forwarded to a central repository where we can query and set up alerts for error spikes.\n\t4. Alerting:\n\t\t•\tConfigure Alertmanager or Azure Alerts to send high-priority notifications to Slack, PagerDuty, or Microsoft Teams when critical thresholds are breached (e.g., Disk > 85%, Pod restarts > 5 in 10 mins).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 155,
    "category": "Docker & Kubernetes",
    "question": "Scenario: How Will You Secure Kubernetes Cluster?",
    "answer": "“Securing a Kubernetes cluster requires a multi-layered security approach (Defense in Depth) across the entire stack:\n\n\t1. Network Security:\n\t\t•\tDeploy the cluster as a Private Cluster (control plane and worker nodes do not have public IPs).\n\t\t•\tUse Network Policies to restrict pod-to-pod communication (implement a default-deny policy and only allow necessary traffic).\n\t2. Authentication & Authorization:\n\t\t•\tEnable Role-Based Access Control (RBAC) and integrate it with Azure Active Directory (AAD) or AWS IAM.\n\t\t•\tEnforce the Principle of Least Privilege: developers get read-only access, CI/CD gets deployment access.\n\t3. Container Security:\n\t\t•\tRun containers as non-root users (configure `securityContext` in pod specs).\n\t\t•\tUse read-only root filesystems where possible.\n\t\t•\tEnable vulnerability scanning for Docker images in the container registry (e.g., Azure Container Registry or Trivy) before deployment.\n\t4. Secret Management:\n\t\t•\tDo not store secrets in plaintext config files. Use Kubernetes Secrets (preferably encrypted at rest using KMS keys) or integrate with Azure Key Vault using the Secret Store CSI Driver.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 156,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: How Will You Handle Secrets in CI/CD Pipeline?",
    "answer": "“Managing secrets securely in CI/CD pipelines is critical to prevent credential leaks. I follow these strict security practices:\n\n\t1. Use Integrated Secrets Managers:\n\t\t•\tStore all credentials, API keys, and certificates in a dedicated secrets manager like Azure Key Vault, HashiCorp Vault, or AWS Secrets Manager.\n\t2. Fetch Secrets Dynamically:\n\t\t•\tConfigure the CI/CD pipeline (Jenkins, Azure Pipelines, or GitHub Actions) to fetch secrets dynamically at runtime using secure service connections or OIDC, rather than hardcoding them in the repository.\n\t3. Masking in Logs:\n\t\t•\tEnsure secret masking is enabled in the pipeline settings so that if a secret is accidentally printed to the console, it is automatically replaced with asterisks (`***`).\n\t\t•\tNever store secrets in plaintext in variables files (`terraform.tfvars`) or Git. Use environment variables injected by the runner or encrypted variables (like GitHub Encrypted Secrets).\n\t4. Rotate Credentials:\n\t\t•\tImplement regular rotation policies for passwords, SSH keys, and API tokens.”\n\nFinal Interview Closing Line\n“I have experience in cloud infrastructure, CI/CD, Terraform, Docker, Kubernetes, and Linux administration. I enjoy automating infrastructure and solving production issues using DevOps best practices.”\nDevOps / Cloud Engineer Interview Notes (Q&A)\n1. Self Introduction\nHi, my name is [Your Name].\nI am working as a DevOps/Cloud Engineer with experience in:\n\t•\tLinux Administration \n\t•\tCloud Infrastructure \n\t•\tCI/CD pipelines \n\t•\tDocker & Kubernetes \n\t•\tTerraform \n\t•\tMonitoring and deployment automation \nCurrently, I am working mainly on Microsoft cloud platform.\nDay-to-Day Activities\n\t•\tManaging cloud infrastructure \n\t•\tCreating CI/CD pipelines using Jenkins \n\t•\tDeploying applications \n\t•\tWriting Terraform code \n\t•\tMonitoring Linux servers \n\t•\tManaging Docker containers and Kubernetes clusters \n\t•\tTroubleshooting production issues \n\t•\tManaging secrets using Microsoft \n\nLinux Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 157,
    "category": "Linux & Git",
    "question": "What is systemctl in Linux?",
    "answer": "systemctl is a command used to manage services in Linux systems that use systemd.\nUses:\n\t•\tStart service \n\t•\tStop service \n\t•\tRestart service \n\t•\tEnable/Disable service \n\t•\tCheck service status \nCommands\nsystemctl start nginx\nsystemctl stop nginx\nsystemctl restart nginx\nsystemctl status nginx\nBackend Working\n\t•\tsystemctl talks to systemd \n\t•\tsystemd is PID 1 process \n\t•\tReads service unit files \n\t•\tManages service lifecycle \nService files location:\n/etc/systemd/system/",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 158,
    "category": "DevOps General",
    "question": "Difference Between du and df",
    "answer": "“In Linux, both `du` and `df` are essential commands used to analyze disk space, but they report space from different perspectives:\n\n\t1. `df` (Disk Free):\n\t\t•   What it does: Reports the amount of available and used disk space on all mounted filesystems.\n\t\t•   How it works: It queries the filesystem superblock directly, making it extremely fast.\n\t\t•   Useful Command: `df -h` (displays space in human-readable format like GB/MB).\n\n\t2. `du` (Disk Usage):\n\t\t•   What it does: Estimates the disk space used by specific files or directories.\n\t\t•   How it works: It traverses the directory tree and sums up the space used by each individual file.\n\t\t•   Useful Command: `du -sh /var/log/*` (shows the total size of each file/folder in the log directory).\n\nSummary of Differences:\n| Feature | df (Disk Free) | du (Disk Usage) |\n| :--- | :--- | :--- |\n| Level | Filesystem level (mount points). | File and Directory level. |\n| Speed | Extremely fast (queries superblock). | Slower (must traverse directories). |\n| Perspective | Shows total capacity and free space. | Shows space consumed by specific files/folders. |\n| Open Deleted Files | Includes space of deleted files that are still held open by running processes. | Excludes open deleted files (since they have no directory entry). |”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 159,
    "category": "DevOps General",
    "question": "How to Check Running Processes/Services?",
    "answer": "“To monitor and manage active processes and system services in a Linux environment, I use the following commands:\n\n\t1. Checking Running Processes:\n\t\t•   **Snapshot view**: Run `ps -ef` to list all running processes with their User, PID, PPID, and command path. To find a specific process: `ps -ef | grep nginx`.\n\t\t•   **Real-time monitoring**: Run `top` or `htop` (interactive) to view CPU, memory usage, load average, and active processes in real time.\n\t\t•   **Thread/Process tree**: Run `pstree` to see the hierarchical relationship of active processes.\n\n\t2. Checking Running Services (systemd):\n\t\t•   **List all active services**: Run `systemctl list-units --type=service --state=running`.\n\t\t•   **Check specific service status**: Run `systemctl status nginx` to see if it is active, enabled on boot, and view its recent log lines.\n\t\t•   **Manage services**: Use `sudo systemctl start|stop|restart|reload <service-name>` to control service execution.”\n\nJenkins Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 160,
    "category": "CI/CD & Pipelines",
    "question": "What is Jenkins Pipeline?",
    "answer": "Jenkins pipeline automates:\n\t•\tBuild \n\t•\tTest \n\t•\tDeployment \n\t•\tCI/CD process \nFlow\nCode → Build → Test → Deploy\nBenefits\n\t•\tAutomation \n\t•\tFaster deployment \n\t•\tReduced manual work \n\t•\tContinuous Integration \nExample\npipeline {\n  agent any\n\n  stages {\n    stage('Build') {\n      steps {\n        echo 'Building'\n      }\n    }\n\n    stage('Deploy') {\n      steps {\n        echo 'Deploying'\n      }\n    }\n  }\n}\n\nDocker Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 161,
    "category": "Docker & Kubernetes",
    "question": "Have You Worked on Docker?",
    "answer": "Yes, I have worked on Docker.\nWork Done:\n\t•\tDocker image creation \n\t•\tDockerfile writing \n\t•\tContainer deployment \n\t•\tDocker Compose \n\t•\tRegistry push/pull \nCommands\ndocker build\ndocker run\ndocker ps\ndocker logs\n\nSample Dockerfile\nFROM nginx\n\nCOPY . /usr/share/nginx/html\nBuild Image:\ndocker build -t myapp .\nRun Container:\ndocker run -d -p 80:80 myapp\n\nKubernetes Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 162,
    "category": "Docker & Kubernetes",
    "question": "Have You Deployed Applications on Docker or Kubernetes?",
    "answer": "Yes, I have deployed applications on both Docker and Kubernetes.\nKubernetes Work:\n\t•\tDeployments \n\t•\tServices \n\t•\tIngress \n\t•\tConfigMaps \n\t•\tSecrets \n\t•\tAutoscaling \n\t•\tTroubleshooting pods \nCommands\nkubectl get pods\nkubectl get svc\nkubectl logs pod-name\nkubectl describe pod pod-name\n\nKubernetes Deployment Example\napiVersion: apps/v1\nkind: Deployment\n\nmetadata:\n  name: nginx\n\nspec:\n  replicas: 2\n\n  selector:\n    matchLabels:\n      app: nginx\n\n  template:\n    metadata:\n      labels:\n        app: nginx\n\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\nApply:\nkubectl apply -f deployment.yaml\n\nTerraform Questions",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 163,
    "category": "Terraform (IaC)",
    "question": "What is Terraform?",
    "answer": "“Terraform is an open-source Infrastructure as Code (IaC) tool created by HashiCorp. It allows platform and DevOps engineers to define, provision, and manage cloud and on-premises infrastructure safely and efficiently using a declarative configuration language called HashiCorp Configuration Language (HCL).\n\nKey Characteristics:\n\t1. Declarative vs. Imperative: You write code describing the *what* (desired end state), and Terraform figures out the *how* (steps, ordering, and API calls to build it).\n\t2. Provider-Based Architecture: Uses plugins called 'Providers' to interact with cloud APIs (e.g., AzureRM, AWS, Google, Kubernetes, GitHub).\n\t3. State File (`terraform.tfstate`): Keeps track of the metadata of all resources it manages, allowing it to detect configuration drift and perform safe, incremental updates.\n\t4. Workflow: Follows a consistent lifecycle workflow: `init` (initialize provider plugins), `plan` (preview changes), and `apply` (deploy changes).”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 164,
    "category": "Terraform (IaC)",
    "question": "What is Terraform State?",
    "answer": "Terraform state file:\n\t•\ttracks infrastructure \n\t•\tstores resource metadata \nFile:\nterraform.tfstate\n\nTerraform Import\nUsed to import existing infrastructure into Terraform state.\nExample:\nterraform import azurerm_resource_group.rg RESOURCE_ID\n\nAzure Questions",
    "difficulty": "Medium",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 165,
    "category": "Azure & Azure DevOps",
    "question": "Which Azure Services Have You Used?",
    "answer": "“As a DevOps and Cloud Engineer, I have worked extensively with a wide range of Azure services across compute, networking, security, monitoring, storage, and CI/CD:\n\n\t1. Compute & Containers:\n\t\t•\tAzure Kubernetes Service (AKS): Managed Kubernetes platform for containerized microservices.\n\t\t•\tVirtual Machines & VM Scale Sets (VMSS): For hosting legacy workloads and self-hosted build runners.\n\t2. Networking:\n\t\t•\tVirtual Networks (VNets) & Subnets: For logical network isolation.\n\t\t•\tNetwork Security Groups (NSGs) & Application Security Groups (ASGs): For packet-level firewall filtering.\n\t\t•\tAzure Load Balancers & Application Gateways (AGIC): For Layer 4 and Layer 7 load balancing and SSL offloading.\n\t\t•\tAzure Front Door: For global routing, CDN, and Web Application Firewall (WAF) security.\n\t\t•\tPrivate Endpoints & Azure Bastion: For secure, private access to cloud resources.\n\t3. Security & Identity:\n\t\t•\tAzure Key Vault: For secure management of secrets, certificates, and keys.\n\t\t•\tAzure Active Directory (AAD) / Entra ID: For identity, access management, and RBAC policies.\n\t4. Storage:\n\t\t•\tAzure Storage Accounts (Blob/Files): For storing application assets and Terraform remote state.\n\t5. Monitoring & Logging:\n\t\t•\tAzure Monitor & Container Insights: For infrastructure metrics and pod/node log analysis.”\n\t•\tAzure Monitor",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 166,
    "category": "Terraform (IaC)",
    "question": "What is the difference between count and for_each in Terraform, and when should you use which?",
    "answer": "• 'count' uses a list and indexes resources numerically (0, 1, 2...). If you remove an item from the middle of the list, Terraform will recreate all subsequent resources because their index shifts.\n• 'for_each' uses a map or set of strings and identifies resources by their keys. Removing an item only deletes that specific resource without affecting others.\n• Best Practice: Use 'for_each' for almost all resource collections, especially when resources are independent. Use 'count' for simple toggle switches (e.g., creating a resource if a condition is true: count = var.create_resource ? 1 : 0).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 167,
    "category": "Terraform (IaC)",
    "question": "What are Dynamic Blocks in Terraform and when should you use them?",
    "answer": "• Dynamic Blocks allow you to construct nested configuration blocks dynamically based on a list or map variable.\n• Example: Creating multiple security rules inside an 'azurerm_network_security_group' resource based on a list of port numbers.\n• Syntax:\n  dynamic \"security_rule\" {\n    for_each = var.rules\n    content {\n      name = security_rule.value.name\n      port = security_rule.value.port\n      # ... other attributes\n    }\n  }\n• Best Practice: Use them to keep your code DRY (Don't Repeat Yourself) when dealing with repeatable nested blocks, but avoid overusing them as they can make code harder to read.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 168,
    "category": "Terraform (IaC)",
    "question": "How do you handle infrastructure drift in Terraform?",
    "answer": "• Infrastructure drift occurs when the actual state of cloud resources deviates from the Terraform configuration (e.g., someone manually modifies a resource via the Azure Portal).\n• Detection: Run 'terraform plan'. Terraform refreshes the state against the cloud and highlights differences.\n• Remediation:\n  1. Align Code: Update your Terraform code to match the manual changes if they are intended.\n  2. Revert Changes: Run 'terraform apply' to overwrite manual changes and restore the state defined in your code.\n• Best Practice: Implement automated drift detection cron jobs in your pipelines and restrict write permissions to the cloud portal to prevent manual changes.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 169,
    "category": "Terraform (IaC)",
    "question": "How do you securely manage secrets in Terraform configurations?",
    "answer": "• Never hardcode secrets in .tf files.\n• Best Practices:\n  1. Use Variables: Declare variables and pass values using environment variables (TF_VAR_variable_name) or secure .tfvars files (added to .gitignore).\n  2. Key Vault Integration: Reference secrets stored in Azure Key Vault using data sources:\n     data \"azurerm_key_vault_secret\" \"db_password\" {\n       name         = \"db-pass\"\n       key_vault_id = data.azurerm_key_vault.main.id\n     }\n  3. Secure Remote Backend: Always store state files in a secure remote backend (like Azure Blob Storage) with encryption at rest and access control, as Terraform state contains secrets in plain text.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 170,
    "category": "Terraform (IaC)",
    "question": "What is the purpose of 'terraform import' and the newer 'import' block?",
    "answer": "• 'terraform import' is used to bring existing cloud resources (created manually or via other tools) under Terraform management.\n• Legacy Command: 'terraform import azurerm_resource_group.rg /subscriptions/123/resourceGroups/my-rg'. This updates the state file, but you still have to write the resource block in your code manually.\n• Modern Import Block (Terraform 1.5+): Write an 'import' block in your code:\n  import {\n    to = azurerm_resource_group.rg\n    id = \"/subscriptions/123/resourceGroups/my-rg\"\n  }\n  Then run 'terraform plan -generate-config-out=generated.tf' to automatically generate the resource code.\n• Best Practice: Use the modern 'import' block for a safer, code-first import workflow.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 171,
    "category": "Terraform (IaC)",
    "question": "What are Terraform Workspaces and when should you use them?",
    "answer": "• Workspaces allow you to manage multiple distinct state files from a single configuration directory. This is useful for deploying parallel copies of the same infrastructure.\n• Commands: 'terraform workspace new dev', 'terraform workspace select dev'.\n• Best Practice: Use workspaces for temporary, identical environments (e.g., testing branch deployments). For long-lived environments like Dev, QA, and Prod, use separate directories/folders with distinct backend configurations instead, as workspaces share the same code version and can lead to accidental deployments.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 172,
    "category": "DevOps General",
    "question": "What is Policy as Code in IaC, and what tools are used for it?",
    "answer": "• Policy as Code (PaC) involves writing rules to enforce security, compliance, and cost-control standards on your infrastructure code before it is provisioned.\n• Common Tools:\n  1. tfsec / Trivy: Scans Terraform code for security misconfigurations (e.g., open SSH ports, unencrypted disks).\n  2. Open Policy Agent (OPA) / Rego: A general-purpose policy engine to write custom compliance rules.\n  3. Sentinel: HashiCorp's proprietary policy-as-code framework.\n• Best Practice: Integrate PaC tools directly into the Pull Request validation stage of your CI/CD pipelines to block non-compliant changes before they reach the plan/apply stage.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 173,
    "category": "Docker & Kubernetes",
    "question": "Explain the difference between Liveness, Readiness, and Startup Probes in Kubernetes.",
    "answer": "• Liveness Probe: Checks if the container is alive. If it fails, Kubernetes kills the container and restarts it according to the restartPolicy.\n• Readiness Probe: Checks if the container is ready to accept network traffic. If it fails, the Pod is removed from the Service's endpoint list, so no traffic is sent to it.\n• Startup Probe: Checks if the application inside the container has started up. Disables liveness and readiness checks until it succeeds, preventing slow-starting apps from being killed prematurely.\n• Best Practice: Always define readiness probes to prevent traffic from hitting uninitialized pods, and liveness probes to recover from deadlocks.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 174,
    "category": "Docker & Kubernetes",
    "question": "How does the Horizontal Pod Autoscaler (HPA) work in Kubernetes?",
    "answer": "• HPA automatically scales the number of Pod replicas in a deployment or statefulset based on observed CPU utilization, memory usage, or custom metrics.\n• Workflow:\n  1. The HPA controller queries the Metrics Server at a regular interval (default is 15 seconds).\n  2. It calculates the required number of replicas using the formula: Replicas = ceil[Current Replicas * (Current Metric Value / Target Metric Value)].\n  3. It updates the replica count in the Deployment/ReplicaSet, causing Kubernetes to launch or terminate Pods.\n• Requirement: You must define CPU/Memory 'resources.requests' in your Pod spec for HPA to calculate utilization percentages.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 175,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between ConfigMaps and Secrets in Kubernetes?",
    "answer": "• ConfigMaps: Used to store non-confidential configuration data in key-value pairs (e.g., application properties, environment names).\n• Secrets: Used to store sensitive data like passwords, API tokens, and SSH keys. Secrets are stored in base64-encoded format.\n• Best Practice: Do not rely solely on Kubernetes Secrets for security, as base64 encoding is not encryption. Integrate with external KMS (Key Management Service) or Azure Key Vault using Secrets Store CSI Driver so secrets are fetched dynamically and never stored in plain text on disk.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 176,
    "category": "Docker & Kubernetes",
    "question": "Explain Node Affinity, Pod Affinity, and Pod Anti-Affinity.",
    "answer": "Difference between Node Affinity and Pod Affinity in Kubernetes:\n1. **Node Affinity**: Constrains which nodes your pod can be scheduled on based on node labels (e.g. schedule pod only on nodes labeled `gpu=true`).\n2. **Pod Affinity**: Schedules a pod close to other pods based on labels (e.g. placing frontend pods on the same node as database pods to minimize latency).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 177,
    "category": "Docker & Kubernetes",
    "question": "What are Taints and Tolerations in Kubernetes?",
    "answer": "• Taints: Applied to Nodes. They allow a node to repel a set of pods. Syntax: 'kubectl taint nodes node1 key1=value1:NoSchedule'.\n• Tolerations: Applied to Pods. They allow the scheduler to schedule pods with matching tolerations onto tainted nodes.\n• Difference from Affinity: Node Affinity attracts pods to nodes, while Taints allow nodes to repel pods unless the pod explicitly tolerates the taint.\n• Use Case: Dedicating specific nodes for GPU workloads, or marking control plane nodes so application pods aren't scheduled on them.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 178,
    "category": "Docker & Kubernetes",
    "question": "What is Helm in Kubernetes and why do we use it?",
    "answer": "• Helm is the package manager for Kubernetes. It allows you to define, install, upgrade, and share complex Kubernetes applications.\n• Key Components:\n  1. Chart: A bundle of YAML templates that describe a set of Kubernetes resources.\n  2. Values.yaml: A file containing configuration variables to customize the templates for different environments (Dev, QA, Prod).\n  3. Release: A running instance of a chart in a Kubernetes cluster.\n• Benefits: Simplifies deployment, supports versioning and easy rollbacks ('helm rollback'), and avoids writing duplicate YAML files.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 179,
    "category": "Docker & Kubernetes",
    "question": "What is the Sidecar Pattern in Kubernetes?",
    "answer": "• The Sidecar Pattern involves running an extra helper container inside the same Pod alongside the main application container.\n• Features: Since containers in the same Pod share the same network namespace, storage volumes, and loopback interface (localhost), they can communicate efficiently.\n• Common Use Cases:\n  1. Log Shipping: A sidecar container (like Fluentd) reads application logs from a shared volume and ships them to Elasticsearch.\n  2. Service Mesh: A proxy sidecar (like Envoy in Istio) intercepts and manages incoming/outgoing network traffic for security and telemetry.\n  3. Secret Syncing: A sidecar that pulls secrets from Vault and writes them to a local volume.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 180,
    "category": "Docker & Kubernetes",
    "question": "How do you troubleshoot a Pod that is stuck in 'CrashLoopBackOff' status?",
    "answer": "• 'CrashLoopBackOff' means the pod starts, crashes, and Kubernetes tries to restart it repeatedly with an increasing delay.\n• Troubleshooting Steps:\n  1. Check Logs: Run 'kubectl logs <pod-name>' (add '--previous' to see logs from the crashed instance). This is the most common way to find application errors (e.g., database connection failed, missing env variables).\n  2. Describe Pod: Run 'kubectl describe pod <pod-name>' to check events, exit codes, and resource limits.\n  3. Check Exit Code: Exit code 137 means Out of Memory (OOMKilled), exit code 1 means application error.\n  4. Validate Configurations: Check ConfigMaps, Secrets, and database availability.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 181,
    "category": "Docker & Kubernetes",
    "question": "How do you troubleshoot a Pod that is stuck in 'Pending' status?",
    "answer": "• 'Pending' means the Pod could not be scheduled onto any worker node in the cluster.\n• Troubleshooting Steps:\n  1. Describe Pod: Run 'kubectl describe pod <pod-name>' and look at the 'Events' section at the bottom.\n  2. Common Causes:\n     • Insufficient Resources: No node has enough CPU or Memory requests free to fit the Pod.\n     • Taints and Tolerations: The Pod does not tolerate the taints on available nodes.\n     • Node Selector / Affinity: The Pod's node selector labels do not match any available nodes.\n     • Unattached Volumes: The Pod is waiting for a PersistentVolume (PV) to be created or bound.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 182,
    "category": "Docker & Kubernetes",
    "question": "What is a NetworkPolicy in Kubernetes?",
    "answer": "• By default, all pods in a Kubernetes cluster can communicate with each other freely. A NetworkPolicy allows you to restrict network traffic to and from Pods.\n• Features: Works like a firewall at the Pod level using labels and selectors.\n• Configuration: You can define Ingress (incoming) and Egress (outgoing) rules based on namespaces, pods, and IP blocks.\n• Requirement: You must use a network plugin (CNI) that supports NetworkPolicies, such as Calico, Cilium, or Azure CNI with network policies enabled. Default flannel does not enforce them.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 183,
    "category": "CI/CD & Pipelines",
    "question": "What are Multi-stage Docker builds and why should you use them?",
    "answer": "• Multi-stage builds allow you to use multiple 'FROM' statements in a single Dockerfile. You can compile your code in an initial stage and copy only the compiled artifact into a final, lightweight stage.\n• Benefits: Reduces image size drastically (e.g., removing JDK, build tools, and source code, leaving only the JRE and the jar file). This improves security (fewer packages means smaller attack surface) and deployment speed.\n• Example:\n  FROM maven:3.8-openjdk-17 AS builder\n  RUN mvn package\n  \n  FROM openjdk:17-slim\n  COPY --from=builder /app/target/app.jar /app.jar\n  CMD [\"java\", \"-jar\", \"/app.jar\"]",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 184,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between COPY and ADD instructions in a Dockerfile?",
    "answer": "• COPY: Simply copies files and directories from the local host build context into the container. It is preferred for its simplicity and predictability.\n• ADD: Does everything COPY does, but also has two extra features:\n  1. It can extract local tar archives automatically into the container.\n  2. It can download files from remote URLs.\n• Best Practice: Use COPY for standard file transfers. Only use ADD when you explicitly need to auto-extract local tar files.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 185,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between Docker Volumes and Bind Mounts?",
    "answer": "• Docker Volumes: Managed entirely by Docker and stored in a directory managed by Docker on the host machine (/var/lib/docker/volumes/). They are isolated from the host OS and are the preferred way to persist container data.\n• Bind Mounts: Map any arbitrary file or directory on the host machine directly into the container. They rely on the host's directory structure and permissions.\n• Best Practice: Use Volumes for database persistence and production data. Use Bind Mounts for local development (e.g., mounting source code so changes reflect in the container instantly without rebuilding).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 186,
    "category": "DevOps General",
    "question": "What are Distroless and Alpine images, and why are they used?",
    "answer": "• Alpine: A lightweight Linux distribution based on musl libc and busybox, resulting in very small base images (~5MB).\n• Distroless: Images created by Google that contain only your application and its runtime dependencies. They do not contain package managers, shells (bash/sh), or standard Linux utilities.\n• Why use them: Both reduce the image size and, more importantly, minimize the security vulnerability footprint. Distroless is highly secure because an attacker who exploits the application cannot spawn a shell or install malicious tools.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 187,
    "category": "Docker & Kubernetes",
    "question": "How do you minimize the size of a Docker image?",
    "answer": "• Best Practices:\n  1. Use Multi-stage Builds: Compile in one stage, copy only artifacts to the runner stage.\n  2. Use Small Base Images: Use alpine, slim, or distroless base images instead of full OS images (like ubuntu or centos).\n  3. Minimize Layers: Combine multiple RUN commands using '&&' and line continuations ('\\') to reduce the number of image layers.\n  4. Clean Up: Delete package manager caches and temporary files in the same RUN layer they were created (e.g., 'apt-get clean && rm -rf /var/lib/apt/lists/*').\n  5. Use .dockerignore: Exclude node_modules, logs, and local build artifacts from the build context.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 188,
    "category": "Docker & Kubernetes",
    "question": "Explain Blue-Green Deployment and Canary Deployment strategies.",
    "answer": "• Blue-Green: You maintain two identical production environments. 'Blue' is active (serving traffic), and 'Green' is idle. You deploy the new version to Green, run tests, and then switch the router/load balancer to point to Green. If issues arise, you switch back to Blue instantly.\n• Canary: You deploy the new version to a small subset of servers or pods (e.g., 5% of traffic). You monitor performance, error rates, and user feedback. If stable, you gradually roll out the new version to the remaining 95%. If it fails, only a tiny fraction of users are affected.\n• Comparison: Blue-Green requires double the resources; Canary is cost-effective and safer but requires sophisticated routing (e.g., Service Mesh).",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 189,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement caching in CI/CD pipelines, and why is it important?",
    "answer": "• Pipeline Caching: Saves dependencies (like npm node_modules, Maven .m2, NuGet packages) after the first build and restores them in subsequent runs.\n• Why: It significantly reduces build times by avoiding downloading gigabytes of dependencies over the internet for every single commit.\n• Azure Pipelines Syntax: Use the 'Cache@2' task, defining a key based on the package lock file (e.g., package-lock.json) so the cache is invalidated and rebuilt only when dependencies change.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 190,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between Microsoft-hosted agents and Self-hosted agents in Azure DevOps?",
    "answer": "• Microsoft-hosted Agents: Managed entirely by Microsoft. A fresh virtual machine is created for every job and discarded afterward. Zero maintenance, but limited in CPU/Memory, cannot access private networks, and has execution time limits.\n• Self-hosted Agents: Installed and managed on your own infrastructure (VMs, physical servers, Kubernetes). They persist between builds, allowing faster caching. They can access resources inside your private VNet and have no execution time limits, but you are responsible for maintenance and updates.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 191,
    "category": "CI/CD & Pipelines",
    "question": "What are Multi-stage YAML pipelines and why are they preferred over Classic release pipelines?",
    "answer": "• Multi-stage YAML pipelines allow you to define both your Build (CI) and Release (CD) stages in a single YAML file (pipeline-as-code).\n• Why Preferred:\n  1. Version Control: The pipeline definition is stored in Git alongside the application code, allowing you to track changes, review via PRs, and roll back easily.\n  2. Reusability: You can use templates to share stages, jobs, and tasks across different pipelines.\n  3. Multi-stage: Clearly defines dependencies between stages (e.g., Dev -> QA -> Prod) with approvals and checks configured on environments.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 192,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle secrets leakage prevention in CI/CD?",
    "answer": "• Best Practices:\n  1. Mask Secrets: Ensure all secret variables in Azure DevOps are marked as 'secret'. The pipeline will automatically mask their values (showing '***') in the console logs.\n  2. GitGuardian / Trufflehog: Integrate secret-scanning tools in the pre-commit stage or as a pipeline task to scan the codebase for exposed passwords, keys, or certificates.\n  3. Short-lived Credentials: Use Azure Service Connections with Workload Identity Federation (OIDC) instead of storing long-lived service principal client secrets.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 193,
    "category": "Linux & Git",
    "question": "How do you ensure a Bash script is robust and handles errors safely?",
    "answer": "• Add 'set' options at the beginning of the script:\n  1. 'set -e': Instructs the script to exit immediately if any command exits with a non-zero status.\n  2. 'set -u': Exits the script if it tries to use an uninitialized/unbound variable.\n  3. 'set -o pipefail': Ensures that if any command in a pipeline fails (e.g., cmd1 | cmd2), the exit status of the entire pipeline is that of the failed command, not the last one.\n• Best Practice: Use double quotes around variables to prevent word splitting, and implement a cleanup trap ('trap cleanup EXIT') to clean up temporary files.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 194,
    "category": "Linux & Git",
    "question": "Which Linux commands do you use to troubleshoot network connectivity issues?",
    "answer": "• ping: Check basic network reachability and latency to a host.\n• curl / wget: Test HTTP/HTTPS connections and fetch headers.\n• telnet / nc (netcat): Check if a specific port is open on a remote server (e.g., 'nc -zv 10.0.0.4 3306').\n• nslookup / dig: Query DNS records to troubleshoot hostname resolution.\n• netstat / ss: View active network connections and listening ports on the local machine (e.g., 'ss -tulpn').\n• traceroute / tracepath: Track the route packets take to reach a host, identifying where they are getting dropped.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 195,
    "category": "DevOps General",
    "question": "What is systemd and how do you manage services with it?",
    "answer": "• systemd is the system and service manager for Linux operating systems, acting as the parent process (PID 1).\n• Service Management Commands:\n  • 'sudo systemctl start <service>' - Start a service.\n  • 'sudo systemctl stop <service>' - Stop a service.\n  • 'sudo systemctl restart <service>' - Restart a service.\n  • 'sudo systemctl enable <service>' - Configure the service to start automatically on boot.\n  • 'sudo systemctl status <service>' - View the current status and recent logs.\n• Logs: Use 'journalctl -u <service> -n 100 -f' to view and follow the service logs.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 196,
    "category": "Linux & Git",
    "question": "What is logrotate and why is it important in production Linux servers?",
    "answer": "• logrotate is a system utility that automatically rotates, compresses, and removes log files to prevent them from consuming all available disk space.\n• Features: It can be configured to run daily, weekly, or monthly, compress old logs into .gz files, and keep a specified number of old logs before deleting them.\n• Why: Without logrotate, application logs (like Nginx, Tomcat) would grow infinitely, eventually filling up the disk and causing services to crash.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 197,
    "category": "Linux & Git",
    "question": "Explain the syntax of a Linux cron job.",
    "answer": "• A cron job is a scheduled task that runs automatically at specified intervals.\n• Syntax: * * * * * /path/to/command\n  • Minute (0 - 59)\n  • Hour (0 - 23)\n  • Day of Month (1 - 31)\n  • Month (1 - 12)\n  • Day of Week (0 - 6, where 0 is Sunday)\n• Examples:\n  • '0 0 * * *' - Runs every day at midnight.\n  • '*/5 * * * *' - Runs every 5 minutes.\n  • '0 8 * * 1-5' - Runs at 8:00 AM, Monday through Friday.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 198,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Azure Service Endpoints and Private Endpoints?",
    "answer": "• Service Endpoints: Keep traffic to Azure services (like SQL, Storage) within the Microsoft backbone network. The service still uses its public IP address, but firewalls restrict access only to traffic originating from your specific subnet.\n• Private Endpoints: Allocate a private IP address from your VNet to the Azure service using a network interface (NIC). The service is accessed via this private IP, making it completely private and removing it from the public internet.\n• Best Practice: Use Private Endpoints for enterprise-grade security, as they completely isolate the service and protect against data exfiltration.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 199,
    "category": "Azure & Azure DevOps",
    "question": "Explain VNet Peering in Azure and its types.",
    "answer": "• VNet Peering connects two Azure Virtual Networks seamlessly, allowing resources in either VNet to communicate with each other directly using private IP addresses with low latency.\n• Types:\n  1. Regional VNet Peering: Connects VNets within the same Azure region.\n  2. Global VNet Peering: Connects VNets across different Azure regions.\n• Features: Peered traffic remains on Microsoft's private backbone network, not the public internet. Bandwidth is not restricted, but you are charged for ingress and egress data transfer.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 200,
    "category": "Azure & Azure DevOps",
    "question": "Explain the Hub-and-Spoke network topology in Azure.",
    "answer": "• Hub-and-Spoke is a network design where a central 'Hub' VNet acts as the single point of connectivity to on-premises networks and hosts shared services (like Azure Firewall, Bastion, VPN Gateway).\n• 'Spoke' VNets peer with the Hub and host individual application workloads (like AKS clusters, VMs).\n• Routing: Traffic between spokes, or between spokes and the internet, is routed through the Hub VNet where it can be inspected and filtered by a firewall.\n• Benefits: Centralized security management, reduced cost by sharing common resources, and prevents spokes from communicating directly with each other.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 201,
    "category": "Azure & Azure DevOps",
    "question": "What is the difference between Azure Application Gateway and Azure Load Balancer?",
    "answer": "• Azure Load Balancer: Operates at Layer 4 (Transport layer). It routes TCP/UDP traffic based on IP address and port. It is extremely fast and suitable for simple VM load balancing.\n• Azure Application Gateway: Operates at Layer 7 (Application layer). It understands HTTP/HTTPS traffic, allowing routing based on URL paths (e.g., /images goes to one pool, /api goes to another). It supports SSL termination, cookie-based session affinity, and includes a Web Application Firewall (WAF).\n• Use Case: Use Application Gateway for web applications and microservices, and Load Balancer for non-HTTP workloads.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 202,
    "category": "Azure & Azure DevOps",
    "question": "How do Azure Monitor, Log Analytics, and Application Insights work together?",
    "answer": "• Azure Monitor: The overarching monitoring service that collects, analyzes, and acts on telemetry data from your Azure and on-premises environments.\n• Log Analytics: A tool within Azure Monitor used to write queries (using Kusto Query Language - KQL) and analyze log data collected from resources.\n• Application Insights: A sub-service of Azure Monitor designed for Application Performance Management (APM). It monitors live web applications, tracking response times, exception rates, dependencies, and user sessions.\n• Integration: Application Insights and Azure resources send their logs to a Log Analytics Workspace, where Azure Monitor uses them to trigger alerts and build dashboards.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 203,
    "category": "DevOps General",
    "question": "Explain SLA, SLO, and SLI in Site Reliability Engineering (SRE).",
    "answer": "• SLI (Service Level Indicator): A quantitative measure of a service's performance in real-time (e.g., HTTP request latency, error rate, uptime percentage).\n• SLO (Service Level Objective): A target reliability level for the service, agreed upon by the team (e.g., 99.9% of HTTP requests must have a latency under 200ms over a 30-day window).\n• SLA (Service Level Agreement): A legal agreement with users specifying the service reliability, including financial penalties or refunds if the SLO is not met (e.g., if uptime falls below 99.5%, users get a 10% refund).\n• Relationship: SLI measures -> SLO targets -> SLA promises.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 204,
    "category": "DevOps General",
    "question": "What is an Error Budget in SRE and how is it used?",
    "answer": "• Error Budget: The maximum allowable unreliability of a service, calculated as 100% - SLO (e.g., if your uptime SLO is 99.9%, your error budget is 0.1% of downtime).\n• Usage: It acts as a balance between feature velocity and service reliability:\n  • If the error budget is full, the development team can push new features rapidly.\n  • If the error budget is exhausted (spent due to outages or bugs), deployments are frozen, and the team must focus solely on stability, bug fixes, and reliability improvements.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 205,
    "category": "DevOps General",
    "question": "What is the difference between Monitoring and Observability?",
    "answer": "• Monitoring: Tells you *when* something is wrong by collecting predefined metrics (e.g., CPU is at 95%, database is down). It answers the question: 'Is the system working?'\n• Observability: Allows you to understand *why* something is wrong by analyzing the internal state of the system using three pillars: Metrics, Logs, and Traces (MelT). It answers the question: 'Why is this specific request failing?'\n• Summary: Monitoring is reactive and focuses on known failure modes. Observability is proactive and helps debug complex, distributed systems with unknown failure modes.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 206,
    "category": "DevOps General",
    "question": "What is a Blameless Post-Mortem?",
    "answer": "• A Blameless Post-Mortem is a meeting and document created after a production incident to analyze what happened, why it happened, and how to prevent it in the future, without pointing fingers or blaming individuals.\n• Key Mindset: Assume that everyone acted with good intentions based on the information they had. Focus on system failures (e.g., lack of guardrails, poor testing, missing alerts) rather than human error.\n• Outcome: Actionable tasks to improve the system, sharing the learnings with the wider organization.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 207,
    "category": "DevOps General",
    "question": "What is Chaos Engineering?",
    "answer": "• Chaos Engineering is the practice of deliberately introducing failures into a production or staging system to test its resilience and verify that it can handle unexpected outages gracefully.\n• Examples: Randomly killing Kubernetes Pods (using Chaos Mesh or Chaos Monkey), injecting network latency, blocking access to databases.\n• Goal: To identify weaknesses (e.g., failing failover mechanisms, missing alerts, cascading failures) before they cause real customer-facing outages.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 208,
    "category": "Linux & Git",
    "question": "What is GitOps and how does it work?",
    "answer": "• GitOps is an operational framework where Git is used as the single source of truth for declarative infrastructure and application deployments.\n• Workflow:\n  1. The desired state of the system is defined in Git repositories (YAML manifests, Helm charts).\n  2. An operator/agent (like ArgoCD or Flux) runs inside the Kubernetes cluster.\n  3. The operator continuously compares the desired state in Git with the actual state in the cluster.\n  4. If a drift is detected, the operator automatically reconciles the cluster to match Git.\n• Benefits: Improved security (pipelines don't need cluster admin access; they just commit to Git), audit trail of all changes, and instant disaster recovery.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 209,
    "category": "DevOps General",
    "question": "What does 'Shift Left' mean in DevSecOps?",
    "answer": "• 'Shift Left' means integrating security testing and compliance validation as early as possible in the software development lifecycle (SDLC), rather than waiting until the deployment or production stage.\n• Implementation:\n  • Code Stage: IDE plugins that highlight insecure code, SAST (Static Application Security Testing) tools.\n  • Commit Stage: Automated secret scanning (checking for committed passwords) and SCA (Software Composition Analysis) to scan third-party dependencies for vulnerabilities.\n  • Build Stage: DAST (Dynamic Application Security Testing) and container image scanning.\n• Benefit: Finding and fixing security bugs early is significantly cheaper, faster, and safer than fixing them in production.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 210,
    "category": "Linux & Git",
    "question": "What is a git squash commit, and why is it useful?",
    "answer": "• Squashing involves combining multiple commits from a feature branch into a single, clean commit before merging it into the main branch.\n• Command: 'git rebase -i' or using the 'Squash and Merge' option in GitHub/Azure DevOps PRs.\n• Benefits: Keeps the commit history of the main branch clean and readable. Instead of showing intermediate commits like 'fixed typo', 'temp commit', 'testing again', it shows a single meaningful commit explaining the entire feature.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 211,
    "category": "DevOps General",
    "question": "What is the difference between SAST and DAST?",
    "answer": "• SAST (Static Application Security Testing): Analyzes the application's source code, byte code, or binaries for security vulnerabilities *without* running the application. It is a 'white-box' testing method.\n• DAST (Dynamic Application Security Testing): Analyzes a running application by simulating external attacks (like SQL injection, XSS) from the outside. It is a 'black-box' testing method.\n• Best Practice: Use both in your pipelines (SAST during the build stage, DAST during the staging/deployment stage) to cover both code-level and runtime vulnerabilities.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 212,
    "category": "DevOps General",
    "question": "What is Software Composition Analysis (SCA) and why is it critical?",
    "answer": "• SCA is the practice of scanning your application's open-source and third-party dependencies (e.g., npm packages, NuGet, Maven libraries) to identify known security vulnerabilities and license compliance issues.\n• Common Tools: Snyk, OWASP Dependency-Check, Black Duck, SonarQube.\n• Why Critical: Modern applications are made up of 80% open-source libraries. If a library you import has a critical vulnerability (like the Log4j vulnerability), your application becomes vulnerable even if your own code is secure.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 213,
    "category": "DevOps General",
    "question": "What is the difference between Immutable Infrastructure and Mutable Infrastructure?",
    "answer": "• Mutable Infrastructure: Servers are modified and updated in-place (e.g., SSHing into a VM to upgrade Nginx, apply patches, or change configs). This leads to 'configuration drift' where servers that should be identical become different over time.\n• Immutable Infrastructure: Servers are never updated in-place. If a configuration change or patch is needed, you build a new server image (AMI, VM image) and deploy new instances, destroying the old ones.\n• Best Practice: Use Immutable Infrastructure (using tools like Packer, Terraform, Docker) to ensure consistency, eliminate configuration drift, and make rollbacks trivial.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 214,
    "category": "Azure & Azure DevOps",
    "question": "What is Workload Identity Federation (OIDC) in Azure DevOps and why should you use it?",
    "answer": "• Workload Identity Federation allows Azure DevOps pipelines to authenticate with Azure securely without storing any long-lived credentials (like Service Principal client secrets) in Azure DevOps.\n• How it works: It uses OpenID Connect (OIDC) to exchange a short-lived federated token issued by Azure DevOps for an Azure AD access token at runtime.\n• Benefit: Eliminates the risk of secret leakage (since there are no secrets stored to leak) and removes the administrative overhead of rotating service principal secrets every year.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 215,
    "category": "Linux & Git",
    "question": "Explain the concept of 'GitOps' vs 'ClickOps'.",
    "answer": "• ClickOps: A slang term for managing infrastructure by manually clicking buttons in a cloud provider's web console. It is error-prone, undocumented, and cannot be easily reproduced or rolled back.\n• GitOps / IaC: Managing infrastructure programmatically using code stored in Git. All changes are peer-reviewed via Pull Requests, automatically tested in pipelines, and fully documented by the commit history.\n• Summary: Shift from ClickOps to GitOps to achieve speed, scalability, consistency, and auditable governance.",
    "difficulty": "Hard",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 216,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between a Pod and a Container in Kubernetes?",
    "answer": "• Container: A single, isolated runtime environment wrapping an application and its dependencies (e.g., a Docker container).\n• Pod: The smallest deployable unit in Kubernetes. A Pod can host one or more containers (tightly coupled) that share the same network namespace, storage volumes, and IP address.\n• Analogy: Think of a container as a single person, and a Pod as a room. A room can hold one person or a group of people who need to work closely together.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 217,
    "category": "Linux & Git",
    "question": "What is 'git stash' and when should you use it?",
    "answer": "• 'git stash' temporarily shelves (saves) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later.\n• Use Cases: You are in the middle of a feature, and a critical production bug comes up. You don't want to make half-baked commits. You run 'git stash', switch to main, fix the bug, switch back, and run 'git stash pop' to resume your work.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 218,
    "category": "Terraform (IaC)",
    "question": "What is a Local Value (local) in Terraform and how does it differ from an Input Variable?",
    "answer": "• Input Variables (var): Act like function arguments. They allow users to customize the configuration by passing values at runtime.\n• Local Values (local): Act like local temporary variables in programming. They are defined internally within the module and cannot be set from outside.\n• Best Practice: Use local values to simplify complex expressions, avoid repeating the same values, or construct dynamic values (e.g., combining environment names and resource types for naming conventions).",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 219,
    "category": "Azure & Azure DevOps",
    "question": "What is Azure Resource Manager (ARM) and what are its benefits?",
    "answer": "• ARM is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account.\n• Benefits:\n  1. Declarative Templates: Use ARM templates (JSON) or Bicep to deploy infrastructure.\n  2. Resource Groups: Manage resources as a group rather than individually.\n  3. Access Control: Apply RBAC (Role-Based Access Control) to secure resources.\n  4. Tagging: Organize resources using tags for billing and management.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 220,
    "category": "Docker & Kubernetes",
    "question": "What is the difference between Continuous Delivery and Continuous Deployment?",
    "answer": "• Continuous Delivery: Code changes are automatically built, tested, and prepared for a release to production. However, the actual trigger to deploy to production requires manual approval (a human clicks a button).\n• Continuous Deployment: Every change that passes all stages of the automated pipeline is deployed directly to production automatically, without any human intervention.\n• Summary: Continuous Delivery has a manual gate before production; Continuous Deployment is fully automated.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 221,
    "category": "DevOps General",
    "question": "What is the difference between Monolithic and Microservices architecture?",
    "answer": "• Monolithic: The entire application is built as a single, unified codebase and deployed as a single unit. It is simple to develop and deploy initially, but hard to scale, slow to build, and a single bug can bring down the whole system.\n• Microservices: The application is split into small, independent services that communicate via APIs (REST, gRPC). Each service has its own database and can be developed, deployed, and scaled independently. However, it increases operational complexity.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 222,
    "category": "Docker & Kubernetes",
    "question": "How do you run a Docker container in the background (detached mode) and how do you view its logs?",
    "answer": "• Run in Background: Use the '-d' flag. Example: 'docker run -d -p 80:80 nginx'. This starts the container and prints its ID, returning control to your terminal.\n• View Logs: Use 'docker logs <container_id_or_name>'. To follow the logs in real-time, add the '-f' flag (e.g., 'docker logs -f my-nginx').",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 223,
    "category": "Linux & Git",
    "question": "Which Linux commands do you use to check IP address and verify internet connectivity?",
    "answer": "• Check IP Address:\n  • 'ip addr show' (or 'ip a') - The modern and preferred command.\n  • 'ifconfig' - The legacy command (may require net-tools package).\n• Verify Internet Connectivity:\n  • 'ping 8.8.8.8' - Tests network reachability to Google's public DNS.\n  • 'curl -I https://www.google.com' - Tests DNS resolution and HTTP connectivity.",
    "difficulty": "Medium",
    "source": "Best DevOps Practices",
    "company": null
  },
  {
    "id": 224,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between a Stage, a Job, and a Task in a CI/CD pipeline?",
    "answer": "• Stage: A major division in a pipeline that represents a logical phase of the workflow (e.g., Build, Test, Deploy to Dev, Deploy to Prod). Stages usually run sequentially.\n• Job: A collection of steps/tasks run by a single agent. Jobs within a stage can run in parallel if multiple agents are available.\n• Task/Step: The smallest building block of a pipeline. It is a linear sequence of operations executed within a job (e.g., running a bash script, copying files, compiling code).\n• Summary: A Pipeline has multiple Stages -> A Stage has multiple Jobs -> A Job has multiple Tasks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 225,
    "category": "CI/CD & Pipelines",
    "question": "What is a pipeline trigger, and what are the most common types of triggers?",
    "answer": "• A trigger is an event that automatically starts the execution of a CI/CD pipeline.\n• Common Types:\n  1. CI Trigger (Push): Triggers the pipeline whenever code is pushed to a specific branch (e.g., main or release/*).\n  2. PR Trigger (Pull Request): Triggers a validation pipeline when a PR is created or updated, ensuring code compiles and passes tests before merging.\n  3. Scheduled Trigger (Cron): Triggers the pipeline at specific times (e.g., nightly builds at 2:00 AM).\n  4. Pipeline Trigger (Chained): Triggers a pipeline upon the successful completion of another pipeline (e.g., deploying after a successful build).",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 226,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement automated rollbacks in a CD pipeline if a deployment fails?",
    "answer": "• Automated rollback restores the last known stable version of the application immediately when a deployment failure is detected.\n• Implementation Methods:\n  1. Kubernetes/Helm: Kubernetes automatically rolls back a rolling update if readiness probes fail. Helm supports 'helm rollback <release> <revision>'.\n  2. Pipeline Logic: Use a post-deployment script or task that triggers on failure (using 'condition: failed()' in YAML) to run a rollback script.\n  3. Deployment Slot Swap: In Azure App Services, if the swap to production fails health checks, it automatically swaps back to the staging slot.\n• Best Practice: Ensure database migrations are backward-compatible so that rolling back application code doesn't break the database.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 227,
    "category": "CI/CD & Pipelines",
    "question": "What is a Deployment Gate (or Quality Gate) in a release pipeline?",
    "answer": "• A Deployment Gate is an automated check that evaluates health and compliance criteria before a deployment starts or completes.\n• How it works: The pipeline pauses and queries external services. If the criteria are met, the deployment proceeds. If not, it fails or waits.\n• Examples:\n  1. Azure Monitor Alerts: Ensure no active critical alerts exist on the infrastructure.\n  2. SonarQube Quality Gate: Block deployment if the code coverage falls below 80% or new security vulnerabilities are found.\n  3. Service Desk (Jira/ServiceNow): Ensure the change management ticket is approved before deploying to production.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 228,
    "category": "CI/CD & Pipelines",
    "question": "How do you secure credentials, API keys, and certificates inside a CI/CD pipeline?",
    "answer": "• Best Practices:\n  1. Secret Variables: Store secrets in encrypted variable groups (Azure DevOps) or Secrets (GitHub) and mark them as hidden. The runner will mask them in logs.\n  2. Key Vault Integration: Fetch secrets dynamically at runtime from Azure Key Vault or HashiCorp Vault using a pipeline task.\n  3. Workload Identity (OIDC): Use passwordless authentication (OpenID Connect) so the pipeline uses temporary tokens rather than storing long-lived service principal client secrets.\n  4. Least Privilege: Restrict the pipeline's service connection permissions to only the resources it needs to manage.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 229,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between a Declarative pipeline and a Scripted pipeline?",
    "answer": "• Declarative Pipeline (Preferred): Uses a structured, pre-defined schema (typically YAML in GitHub/Azure DevOps, or 'pipeline {}' block in Jenkins). It is easier to read, has built-in syntax checks, and enforces best practices.\n• Scripted Pipeline: Uses a programming language (like Groovy in Jenkins). It offers maximum flexibility and allows complex logic, loops, and error handling, but is harder to maintain and prone to errors.\n• Best Practice: Use Declarative (YAML) pipelines for 95% of use cases. Only use scripted blocks (like Groovy or inline Bash/Powershell) when complex dynamic logic is absolutely necessary.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 230,
    "category": "CI/CD & Pipelines",
    "question": "How do you optimize pipeline execution speed using parallel execution?",
    "answer": "• Parallel execution runs independent jobs or tasks simultaneously rather than sequentially, reducing the total pipeline duration.\n• Implementation:\n  1. Parallel Jobs: Define multiple jobs in a stage that do not depend on each other (e.g., running unit tests, linting, and security scans in parallel).\n  2. Matrix Builds: Run the same job with different configurations (e.g., testing on Node.js 16, 18, and 20 simultaneously).\n  3. Multi-agent: Ensure you have multiple self-hosted agents or concurrent Microsoft-hosted jobs available in your organization to run parallel tasks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 231,
    "category": "CI/CD & Pipelines",
    "question": "What is Semantic Versioning (SemVer) and how do you automate it in pipelines?",
    "answer": "• Semantic Versioning uses a three-part version number: MAJOR.MINOR.PATCH (e.g., 1.4.2).\n  • MAJOR: Incompatible API changes.\n  • MINOR: Add functionality in a backwards-compatible manner.\n  • PATCH: Backwards-compatible bug fixes.\n• Automation: Use tools like 'Semantic Release' or 'GitVersion' in your build pipeline. These tools analyze Git commit messages (following Conventional Commits standard like 'feat:', 'fix:') to automatically calculate the next version, generate release notes, and tag the Git repository.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 232,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle database schema migrations in a Continuous Deployment pipeline?",
    "answer": "• Database migrations must be automated and run before the new application code is deployed.\n• Best Practices:\n  1. Use Migration Tools: Use tools like Liquibase, Flyway, or Entity Framework Migrations.\n  2. Run as a Pipeline Task: Run the migration task in the CD pipeline right before the deployment stage.\n  3. Expand and Contract Pattern: Design database changes to be backwards-compatible (e.g., if renaming a column, first add the new column, copy data, deploy code that writes to both, then remove the old column in a later release). This ensures the app doesn't crash during rolling updates or rollbacks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 233,
    "category": "CI/CD & Pipelines",
    "question": "What is a 'Matrix Build' in CI/CD and when would you use it?",
    "answer": "• A Matrix Build allows you to run a single job multiple times in parallel with different variable configurations.\n• Example: Testing a Python library across multiple Python versions (3.8, 3.9, 3.10) and operating systems (Linux, Windows, macOS).\n• YAML Syntax (GitHub Actions / Azure Pipelines):\n  strategy:\n    matrix:\n      python-version: [3.8, 3.9, 3.10]\n      os: [ubuntu-latest, windows-latest]\n• Use Case: Highly useful for open-source libraries, cross-platform applications, and compatibility testing.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 234,
    "category": "CI/CD & Pipelines",
    "question": "What is the purpose of a Pull Request (PR) validation pipeline?",
    "answer": "• A PR validation pipeline is triggered automatically when a developer opens or updates a Pull Request.\n• Purpose: It compiles the code, runs unit tests, executes linter checks, and performs security scans on the feature branch *before* it is merged into the main branch.\n• Branch Policies: In GitHub or Azure DevOps, you can configure branch protection rules that prevent a PR from being merged unless this validation pipeline completes successfully. This keeps the main branch stable and clean.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 235,
    "category": "CI/CD & Pipelines",
    "question": "What are SAST, DAST, and Dependency Scanning, and where do they fit in a CI/CD pipeline?",
    "answer": "• SAST (Static Application Security Testing): Scans source code for vulnerabilities. Run in the **Build (CI) stage** (e.g., SonarQube).\n• Dependency Scanning (SCA): Scans third-party libraries for known vulnerabilities. Run in the **Build (CI) stage** (e.g., Snyk, OWASP Dependency Check).\n• DAST (Dynamic Application Security Testing): Scans the running application by simulating attacks. Run in the **Staging/QA stage** after deployment (e.g., OWASP ZAP).\n• Best Practice: Break the build if SAST or SCA finds high-severity vulnerabilities to enforce DevSecOps.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 236,
    "category": "CI/CD & Pipelines",
    "question": "What is a containerized runner/agent and what are its advantages?",
    "answer": "• A containerized runner is a CI/CD agent that runs inside a Docker container (e.g., running Azure DevOps agent as a pod in a Kubernetes cluster using KEDA for autoscaling).\n• Advantages:\n  1. Isolation: Each build job runs in a clean, isolated container environment.\n  2. Dynamic Scaling: Scale the number of agents up or down instantly based on the number of queued jobs in the pipeline.\n  3. Cost-Effective: Only consumes infrastructure resources when jobs are actively running.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 237,
    "category": "CI/CD & Pipelines",
    "question": "What is a Service Connection in Azure DevOps pipelines?",
    "answer": "• A Service Connection is a secure configuration that allows Azure Pipelines to connect to external services (e.g., Azure Subscription, Kubernetes Cluster, Docker Registry, GitHub, Jira) without exposing credentials in the pipeline code.\n• How it works: It stores the authentication details (Service Principal, OAuth token, or Kubernetes kubeconfig) securely in Azure DevOps. Developers simply reference the service connection name in their YAML code.\n• Best Practice: Restrict service connection access to specific pipelines and branches using security permissions.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 238,
    "category": "CI/CD & Pipelines",
    "question": "How do you implement manual approvals and notifications in a CD pipeline?",
    "answer": "• Manual approvals ensure that deployments to critical environments (like Production) do not happen without sign-off from stakeholders.\n• Implementation:\n  1. Environments: In Azure DevOps or GitHub, define an environment (e.g., 'Production') and add 'Approvals and Checks'.\n  2. Approval Gate: When the pipeline reaches the deployment stage targeting that environment, it pauses and sends an email/notification to the designated approvers.\n  3. Notifications: Integrate webhooks to send automated messages to Slack or Microsoft Teams when a deployment starts, succeeds, or fails.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 239,
    "category": "CI/CD & Pipelines",
    "question": "What is Pipeline-as-Code and what are its main benefits?",
    "answer": "• Pipeline-as-Code is the practice of defining your CI/CD pipelines using code (typically YAML, JSON, or Groovy) and storing the file in your Git repository alongside your application code.\n• Benefits:\n  1. Version Control: Track changes to the pipeline over time. You can see who modified a step, when, and why.\n  2. Code Review: Pipeline changes are reviewed via Pull Requests before being merged.\n  3. Consistency: Standardize pipelines across multiple projects using reusable templates.\n  4. Disaster Recovery: If the CI/CD server crashes, you can recreate all pipelines instantly from Git.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 240,
    "category": "CI/CD & Pipelines",
    "question": "What is the difference between a Monorepo pipeline and a Multi-repo pipeline?",
    "answer": "• Monorepo Pipeline: A single Git repository contains multiple projects/microservices. The pipeline must use path filters ('paths' in YAML) to trigger only the jobs related to the specific microservice that was modified, avoiding rebuilding the entire repo.\n• Multi-repo Pipeline: Each microservice has its own Git repository and its own independent pipeline. It is simpler to manage but makes orchestrating cross-project deployments and managing shared dependencies more challenging.",
    "difficulty": "Medium",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 241,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle environment-specific configurations in a CD pipeline?",
    "answer": "• Keep your application build artifact environment-agnostic (build once, deploy many).\n• Best Practices:\n  1. Variable Groups / Environments: Use Azure DevOps Variable Groups or GitHub Environments to store variables (e.g., Database URLs, API endpoints) mapped to Dev, QA, and Prod.\n  2. Key Vault: Pull environment-specific secrets dynamically from environment-specific Key Vaults at deployment time.\n  3. Tokenization: Inject variables into configuration files (like appsettings.json or Kubernetes manifests) during the deployment stage using token replacement tasks.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 242,
    "category": "CI/CD & Pipelines",
    "question": "What is a 'Dirty' build and how do you ensure clean builds in CI?",
    "answer": "• A 'Dirty' build occurs when files or artifacts left over from a previous build on the same agent affect the current build, leading to inconsistent results.\n• How to ensure Clean Builds:\n  1. Clean Workspace: Configure the pipeline to clean the workspace directory before running (e.g., 'clean: all' in Azure Pipelines, or running 'git clean -fdx').\n  2. Ephemeral Agents: Use Microsoft-hosted agents or containerized runners where a fresh, clean VM/container is created for every job and destroyed immediately afterward.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 243,
    "category": "CI/CD & Pipelines",
    "question": "What is GitOps and how does it differ from traditional push-based CI/CD?",
    "answer": "• Push-based CI/CD (Traditional): The pipeline compiles code and then actively 'pushes' the deployment to the target environment (e.g., running 'kubectl apply' or SSHing into a VM). The pipeline needs admin credentials to the environment.\n• Pull-based GitOps: The pipeline builds the container image and updates a Git repo containing Kubernetes manifests. An operator (like ArgoCD) running *inside* the cluster detects the change in Git and 'pulls' the deployment to match the desired state.\n• Benefit: Higher security (no external credentials needed) and automatic drift correction.",
    "difficulty": "Hard",
    "source": "CI/CD Best Practices",
    "company": null
  },
  {
    "id": 244,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: Your CI/CD pipeline fails during the Docker build stage with the error 'no space left on device'. How do you troubleshoot and resolve this?",
    "answer": "“This is a very common issue on self-hosted build agents or runners when old Docker layers, unused images, and build caches accumulate over time. Here is my step-by-step troubleshooting and resolution workflow:\n\n\t1. Immediate Mitigation (Cleanup):\n\t\t•   Log into the build agent via SSH/Bastion.\n\t\t•   Run `df -h` to identify which partition is full (usually `/var/lib/docker`).\n\t\t•   Run Docker prune commands to reclaim space immediately:\n\t\t\t•   `docker system prune -a --volumes` (removes all stopped containers, unused networks, dangling images, and build cache).\n\t\t\t•   `docker builder prune -a` (removes the buildkit cache, which often consumes hundreds of gigabytes).\n\t2. Root Cause Analysis:\n\t\t•   Check if there is a cleanup step in the pipeline. If developers are building Docker images without pruning old ones, the disk will always fill up.\n\t3. Long-Term Automated Prevention:\n\t\t•   **Pipeline Cleanup Step**: Add a post-build cleanup step in the YAML pipeline to prune local Docker images immediately after pushing them to the Azure Container Registry (ACR):\n\t\t\t`docker rmi $(docker images -f \\\"dangling=true\\\" -q)` or run `docker system prune -f` at the end of every run.\n\t\t•   **Cron Job Cleaner**: Set up a daily cron job on the build agent to run a system prune:\n\t\t\t`0 0 * * * /usr/bin/docker system prune -af --volumes`\n\t\t•   **Monitoring**: Configure alert thresholds in Azure Monitor or Prometheus/Grafana to notify the team when the build agent\\'s disk space exceeds 80%.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 245,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: A CI/CD pipeline fails at the 'Push Docker Image' stage with an 'Unauthorized' or 'Access Denied' error. How do you troubleshoot this?",
    "answer": "“An 'unauthorized' error during the push stage means the build runner is failing to authenticate with the Azure Container Registry (ACR). I troubleshoot this using the following steps:\n\n\t1. Verify Service Connection / Service Principal:\n\t\t•   In Azure DevOps, check the **Service Connection** used by the pipeline to connect to Azure/ACR.\n\t\t•   Verify if the associated **Service Principal (App Registration)** client secret has expired. (This is the most common cause). If expired, generate a new secret in Entra ID and update the Service Connection.\n\t2. Verify RBAC Permissions:\n\t\t•   Ensure the Service Principal has the **AcrPush** role assigned at the ACR resource scope. If it only has *AcrPull*, it can download images but will fail to push.\n\t3. Check Network & Firewall Settings:\n\t\t•   If the ACR has public access disabled (Private ACR), ensure the self-hosted build agent is in the same VNet (or a peered VNet) and can resolve the private endpoint IP of the ACR.\n\t\t•   Verify DNS resolution using `nslookup myregistry.azurecr.io` from the build agent.\n\t4. Manual Authentication Test:\n\t\t•   Log into the build agent and run:\n\t\t\t`az acr login --name myregistry` or `docker login myregistry.azurecr.io -u <ServicePrincipalID> -p <ClientSecret>`\n\t\t•   This isolates whether the issue is with the pipeline task configuration or the Azure credentials themselves.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 246,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: During a Continuous Deployment (CD) release, the database migration step fails, locking the database and halting the deployment. How do you handle this?",
    "answer": "“Database migrations are the most risk-prone part of a CD pipeline. When a migration fails, my immediate priority is to restore application availability and safely roll back or fix the migration:\n\n\t1. Immediate Action (Stop & Assess):\n\t\t•   Freeze the pipeline to prevent the new application pods from starting (since the schema is in an inconsistent state).\n\t\t•   Check the migration logs in the pipeline output to identify the failing SQL statement (e.g., table locks, constraint violations, or duplicate columns).\n\t2. Handling the Database Lock:\n\t\t•   If the migration tool (like Liquibase, Flyway, or Entity Framework) crashed mid-run, it might have left a lock table active (e.g., `DATABASECHANGELOGLOCK` in Liquibase).\n\t\t•   Log into the database securely and release the lock manually after ensuring no migration process is active:\n\t\t\t`UPDATE DATABASECHANGELOGLOCK SET LOCKED=ff, LOCKGRANTED=NULL, LOCKEDBY=NULL;`\n\t3. Rollback vs. Roll-Forward:\n\t\t•   **Rollback**: If the migration tool supports automatic rollback (and the migration was backward-compatible), trigger the rollback command via the pipeline.\n\t\t•   **Roll-Forward (Hotfix)**: If the migration made non-reversible changes (like dropping a column), the safest path is to write a corrective SQL script, commit it, and run a hotfix deployment to align the schema.\n\t4. Best Practices for Prevention:\n\t\t•   **Expand and Contract Pattern**: Never drop columns or rename tables in a single release. Step 1: Add new column (both old and new app versions work). Step 2: Migrate data. Step 3: Remove old column in a later release.\n\t\t•   **Pre-Deployment Backups**: Always trigger an automated database snapshot (Azure SQL / AWS RDS backup) right before running the migration step in the pipeline.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 247,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: A deployment pipeline fails with the error 'Key Vault Access Denied' or 'Secret Not Found' when trying to fetch application secrets. How do you troubleshoot this?",
    "answer": "“This error indicates that the pipeline's authentication identity (Service Connection / Service Principal) does not have the required permissions to read from the Azure Key Vault. I troubleshoot this using these steps:\n\n\t1. Check Key Vault Access Policies / RBAC:\n\t\t•   In the Azure Portal, go to the Key Vault -> **Access configuration**.\n\t\t•   If using **Vault Access Policies**: Verify that the Service Principal used by the Azure DevOps Service Connection has `Get` and `List` permissions under **Secret Permissions**.\n\t\t•   If using **Azure RBAC**: Verify that the Service Principal has the **Key Vault Secrets User** role assigned at the Key Vault scope.\n\t2. Check Firewall & Networking:\n\t\t•   If the Key Vault has 'Allow access from: Private endpoints and selected networks' enabled, ensure that:\n\t\t\t•   The pipeline is running on a **self-hosted agent** deployed inside a subnet that is whitelisted in the Key Vault firewall, OR\n\t\t\t•   If using Microsoft-hosted agents, the Key Vault must allow public access, or you must dynamically whitelist the hosted agent's IP during the pipeline run (using `az keyvault network-rule add`).\n\t3. Verify Secret Name and Status:\n\t\t•   Ensure the secret name referenced in the YAML pipeline matches the Key Vault secret name exactly.\n\t\t•   Verify in Key Vault that the secret is **Enabled** and that the current date is not past the secret's **Expiration Date**.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 248,
    "category": "CI/CD & Pipelines",
    "question": "Scenario: Your application CI/CD pipeline takes over 20 minutes to complete, slowing down the development team. How do you optimize it for speed?",
    "answer": "“To optimize a slow CI/CD pipeline, I analyze the execution logs, identify the bottlenecks, and implement caching and parallelization strategies:\n\n\t1. Enable Dependency Caching:\n\t\t•   Most of the time is spent downloading packages (npm, Maven, NuGet, Python pip).\n\t\t•   I add a caching task in the YAML pipeline to cache these directories based on a hash of the lockfile (e.g., `package-lock.json` or `pom.xml`).\n\t\t•   In Azure DevOps: Use the `Cache@2` task to cache the `node_modules` or `.m2` directory.\n\t2. Optimize Docker Builds:\n\t\t•   **Multi-stage Builds**: Ensure the Dockerfile is optimized using multi-stage builds so only the final runtime binary is included.\n\t\t•   **Layer Caching**: Order the instructions in the Dockerfile from least-frequently changed to most-frequently changed (e.g., copy package files and run install *before* copying the application source code).\n\t\t•   **BuildKit Cache**: Enable remote caching in the docker build task:\n\t\t\t`docker buildx build --cache-from=type=registry,ref=myregistry.azurecr.io/cache --cache-to=type=registry,ref=myregistry.azurecr.io/cache,mode=max`\n\t3. Parallelize Jobs and Tasks:\n\t\t•   Split independent tasks (like running unit tests, static code analysis, and security scanning) into parallel jobs that run concurrently on different agents.\n\t4. Use Self-Hosted Runners with High Specs:\n\t\t•   If Microsoft-hosted agents (which are limited in CPU/Memory) are too slow, migrate the build stage to high-performance self-hosted runners on Azure VMs with SSD storage.”",
    "difficulty": "Hard",
    "source": "DevOps Real Scenario Q&A",
    "company": null
  },
  {
    "id": 249,
    "category": "Terraform (IaC)",
    "question": "Terraform declarative hai ya imperative? Iska kya fayda hai?",
    "answer": "A: Terraform declarative hai — aap sirf \"kya chahiye\" batate hain, \"kaise banana hai\" nahi. Isse configuration simple hoti hai, aur Terraform automatically best path choose karta hai to reach desired state.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 250,
    "category": "Terraform (IaC)",
    "question": "Terraform state file kya hota hai? Iske bina kya ho sakta hai?",
    "answer": "A: Terraform state file (terraform.tfstate) me infrastructure ka actual current state store hota hai. Iske bina Terraform ko nahi pata hoga ki kya changes apply karne hain, aur woh har baar infrastructure ko naya banane ki koshish karega.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 251,
    "category": "Terraform (IaC)",
    "question": "Terraform plan aur apply me kya difference hai?",
    "answer": "A:\nterraform plan: Dry run, sirf dikhata hai kya hone wala hai.\nterraform apply: Actual infrastructure me changes karta hai.\n🗂 State Management",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 252,
    "category": "DevOps General",
    "question": "State file secure kaise rakhen?",
    "answer": "A:\nRemote backends use karein (S3 + DynamoDB for locking, Azure Blob + state locking)\nencrypt = true option\nAccess control via IAM",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 253,
    "category": "Terraform (IaC)",
    "question": "Terraform Locking kya hota hai?",
    "answer": "A: Locking ensure karta hai ki ek hi time me sirf ek user state file modify kare. Jaise AWS me S3 + DynamoDB locking ya Azure me Blob lease-based locking.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 254,
    "category": "Terraform (IaC)",
    "question": "Terraform Refresh kya karta hai?",
    "answer": "A: terraform refresh cloud se current state fetch karke .tfstate ko update karta hai, bina apply kiye.\n📁 Provisioning and Modules",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 255,
    "category": "DevOps General",
    "question": "Module reuse kaise karte hain?",
    "answer": "A: Modules infrastructure ko reusable banaate hain. Aap folder structure ya remote Git/s3 based modules ka use kar sakte hain.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 256,
    "category": "DevOps General",
    "question": "Module ke andar variables aur outputs kaise define karte hain?",
    "answer": "In Terraform, variables and outputs are defined to achieve modularity and clean parameterization:\n1. **variables.tf**: Defines input variables that allow users to customize the module behavior (e.g., VM size, environment name, network IP ranges) dynamically when calling the module.\n2. **outputs.tf**: Specifies outputs that expose internal resource attributes (e.g., private IP, subnet ID, resource ID) to other configurations or the root module.\n3. **Usage**: In the root configuration, you call the module and pass values for its input variables. Once applied, you can reference the module's output attributes using `module.<module_name>.<output_name>`.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 257,
    "category": "DevOps General",
    "question": "Count aur for_each me kya difference hai?",
    "answer": "A:\ncount: Index-based, list ke liye suitable\nfor_each: Map ya set ke liye, named keys use karta hai (zyada readable)\n⚙️ Advanced Scenarios",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 258,
    "category": "Terraform (IaC)",
    "question": "Terraform import ka limitation kya hai?",
    "answer": "A:\nSirf state me add karta hai, configuration file (.tf) auto-generate nahi hoti\nHar resource manually import karna padta hai",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 259,
    "category": "Linux & Git",
    "question": "Taint command kya karta hai?",
    "answer": "The `terraform taint` command is used to manually mark a specific resource in your state file as corrupted, degraded, or unhealthy:\n1. **Behavior**: Tainting does not modify the physical resource immediately. Instead, it flags the resource in `terraform.tfstate`. On the next `terraform apply`, Terraform will destroy and recreate the tainted resource.\n2. **Modern Alternative**: In modern Terraform versions (v1.0+), the taint command is deprecated. Use the apply replacement flag instead: `terraform apply -replace=\"<resource_address>\"`.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 260,
    "category": "Terraform (IaC)",
    "question": "Terraform me lifecycle rules kya hoti hain?",
    "answer": "The Terraform lifecycle consists of:\n1. **terraform init**: Initializes backend storage and downloads providers.\n2. **terraform plan**: Dry-run check showing changes.\n3. **terraform apply**: Provisions resources in the cloud and writes `terraform.tfstate`.\n4. **terraform destroy**: Removes all managed resources.\n*Also refers to the `lifecycle` block inside resources: `create_before_destroy`, `prevent_destroy`, and `ignore_changes`.*",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 261,
    "category": "DevOps General",
    "question": "Data source kya hota hai?",
    "answer": "A:\nData source se existing infra (jaise existing VPC ID) read-only mode me access karte hain:\nhcl\nCopy\nEdit\ndata \"aws_vpc\" \"existing\" {\nfilter {\nname = \"tag:Name\"\nvalues = [\"prod-vpc\"]\n}\n}\n🧠 Real-world and Troubleshooting",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 262,
    "category": "Terraform (IaC)",
    "question": "Agar terraform apply fail ho jaye, toh kya hota hai?",
    "answer": "A:\nJo steps complete hue, woh infra me exist karte hain\nState inconsistent ho sakti hai\nManual fix ya terraform refresh helpful ho sakta hai",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 263,
    "category": "Terraform (IaC)",
    "question": "Terraform drift kya hota hai?",
    "answer": "A:\nInfra me manual change karna (outside Terraform), jise TF state nahi jaanta. Detect via terraform plan, fix via apply.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 264,
    "category": "Terraform (IaC)",
    "question": "Terraform backend migrate kaise karte hain?",
    "answer": "Database and server migration to Microsoft Azure:\n1. **Rehost**: Drag-and-drop server replication to Azure VMs using Azure Migrate.\n2. **Refactor**: Containerizing applications and migrating to PaaS services like Azure App Service or AKS.\n3. **Database Migration**: Replicating databases to Azure SQL Database using Azure Database Migration Service (DMS).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 265,
    "category": "Terraform (IaC)",
    "question": "Sensitive values Terraform me kaise handle karte hain?",
    "answer": "A:\nsensitive = true flag\nterraform.tfvars use\nSecrets manager (AWS SSM, Azure Key Vault) + data source\n🔒 Security and Best Practices",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 266,
    "category": "Terraform (IaC)",
    "question": "Terraform me secrets ko kaise secure rakhen?",
    "answer": "A:\n.tfstate encrypt\nSecrets ko .tfvars me daal ke .gitignore karein\nUse secret managers with data sources\nDon't hardcode passwords in .tf files",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 267,
    "category": "Terraform (IaC)",
    "question": "Terraform graph command ka kya use hai?",
    "answer": "A:\nterraform graph dependency graph generate karta hai DOT format me. Infra ke flow ko visualize karne me help karta hai.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 268,
    "category": "CI/CD & Pipelines",
    "question": "CI/CD me Terraform ko kaise use karte hain?",
    "answer": "A:\nUse terraform plan in pull request\nterraform apply in merge step (manual approval)\nRemote backend + workspace for multi-env (dev/stage/prod)\nTerraform ke question bhej rehe hu vo prepare karo\nOutput block in terraform\nDyanamic block in terrafrom\nLoops in terraform\nCount vs for-each ( use case )\nValidation block\nModule in terraform\nValidation block in terrafrom\nVariables in terraform\nAll 4 file (main,var,tfvars,provider)",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 269,
    "category": "DevOps General",
    "question": "Why init use , why plan is use",
    "answer": "Terraform initialization and planning are fundamental phases of the provisioning lifecycle:\n1. **terraform init**: Initializes the workspace. It downloads the required provider plugins (e.g., AzureRM, AWS, Kubernetes), initializes backend state files, and prepares the folder for running configurations.\n2. **terraform plan**: Performs a dry-run execution. It compares the current real-world state of resources (tracked in state files) against your local HCL code, showing exactly which resources will be added, modified, or destroyed on the next run.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 270,
    "category": "Terraform (IaC)",
    "question": "How to delete resources in terraform",
    "answer": "To delete or destroy resources managed by Terraform:\n1. **Declarative Deletion (Recommended)**: Remove or comment out the resource block from your `.tf` configuration file and run `terraform apply`. Terraform detects the resource is missing from the configuration and destroys it in the cloud.\n2. **Full Infrastructure Destroy**: Run `terraform destroy` to tear down all resources managed by the current folder/workspace configuration.\n3. **State Removal**: Use `terraform state rm <resource_address>` to remove resource tracking from your state file without physically destroying the cloud resource.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 271,
    "category": "Terraform (IaC)",
    "question": "How to use multiple provider in terraform",
    "answer": "To manage resources across multiple Azure subscriptions, regions, or cloud providers in the same configuration, use multiple provider blocks with the `alias` attribute:\n1. **Provider Definition**:\n```hcl\nprovider \"azurerm\" {\n  features {}\n}\nprovider \"azurerm\" {\n  alias           = \"westus\"\n  subscription_id = \"xxxx-xxxx\"\n  features {}\n}\n```\n2. **Resource Definition**: Assign the provider alias inside the resource block: `provider = azurerm.westus`.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 272,
    "category": "Terraform (IaC)",
    "question": "You need to provision a virtual network and multiple subnets in Azure. How would you structure your Terraform code to ensure modularity and reusability?",
    "answer": "To provision virtual networks and subnets modularly in Terraform:\n1. **Use variables for CIDR blocks**: Pass VNet ranges and subnet configs as a map of objects:\n   ```hcl\n   variable \"subnets\" {\n     type = map(object({ address_prefixes = list(string) }))\n   }\n   ```\n2. **Iterate with for_each**: Provision subnets dynamically inside a dedicated network module:\n   ```hcl\n   resource \"azurerm_subnet\" \"subnet\" {\n     for_each             = var.subnets\n     name                 = each.key\n     address_prefixes     = each.value.address_prefixes\n     resource_group_name  = var.rg_name\n     virtual_network_name = azurerm_virtual_network.vnet.name\n   }\n   ```\n3. **Outputs**: Expose subnet IDs as a map output so downstream modules (e.g. VMs, AKS) can reference them.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 273,
    "category": "Terraform (IaC)",
    "question": "Your organization wants to manage secrets securely in Terraform while deploying to Azure. What are the best practices to use Azure Key Vault with Terraform?",
    "answer": "Best practices for managing secrets using Azure Key Vault with Terraform:\n1. **Do not hardcode secrets**: Store database passwords or API keys directly in Key Vault secrets using the Azure Portal or CLI.\n2. **Retrieve via Data Sources**: Reference secrets dynamically at runtime in Terraform using data blocks:\n   ```hcl\n   data \"azurerm_key_vault_secret\" \"db_password\" {\n     name         = \"db-admin-pwd\"\n     key_vault_id = var.key_vault_id\n   }\n   ```\n3. **Pipeline Authentication**: Run Terraform pipelines using **Managed Identities** or OIDC federated credentials, granting the pipeline Service Principal 'Key Vault Secrets User' RBAC permissions.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 274,
    "category": "Terraform (IaC)",
    "question": "How can you implement environment-specific deployments (dev, test, prod) using Terraform with Azure?",
    "answer": "To implement environment-specific deployments (Dev, Test, Prod) in Terraform:\n1. **Directory Isolation (Recommended)**: Use separate folder structures for environments (e.g. `environments/dev/`, `environments/prod/`). Each folder maintains its own `backend.tf` pointing to a separate state file.\n2. **Workspace Isolation**: Run `terraform workspace select dev` or `prod` to maintain separate state maps from a single config. Good for quick testing but less isolation than directories.\n3. **Variable Files**: Pass config values via distinct files: `terraform apply -var-file=\"prod.tfvars\"`.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 275,
    "category": "Terraform (IaC)",
    "question": "You are deploying a VM in Azure using Terraform. How do you ensure the VM is created only after the network and security group are successfully deployed?",
    "answer": "Key security layers available in Microsoft Azure:\n1. **Identity**: Microsoft Entra ID (formerly Azure AD), MFA, conditional access policies, and Role-Based Access Control (RBAC).\n2. **Network**: Network Security Groups (NSGs), Azure Bastion, Private Endpoints, Azure Firewall, and WAF.\n3. **Data**: Azure Key Vault for secrets management, and Storage Encryption at Rest.\n4. **Governance**: Azure Policy for compliance and Defender for Cloud.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 276,
    "category": "Terraform (IaC)",
    "question": "What is the best way to manage remote state in Azure Terraform projects, and how do you secure it?",
    "answer": "Best practices for managing remote state in Azure Terraform projects:\n1. **Azure Blob Storage**: Use a centralized Azure storage account container to store the `terraform.tfstate` file, ensuring collaboration.\n2. **State Locking**: The Azure RM backend automatically uses Azure Blob Leasing to lock the state file, preventing concurrent runs from corrupting state data.\n3. **Security**: Encrypt the storage account, restrict network access via Private Endpoints or SAS policies, use Azure AD for authentication, and enable blob versioning for recovery.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 277,
    "category": "CI/CD & Pipelines",
    "question": "How do you handle Terraform state locking in Azure during CI/CD deployments?",
    "answer": "State locking in Azure CI/CD deployments ensures concurrency control:\n1. **Lease Lock**: When a pipeline run triggers `terraform apply`, Terraform requests a lease lock on the Azure Blob storage state file. Other parallel runs are blocked until the lock is released.\n2. **Unlock Command**: If a pipeline terminates unexpectedly, leaving the lock active, you can force release it using the command: `terraform force-unlock <lock-id>` after verifying no other process is active.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 278,
    "category": "Azure & Azure DevOps",
    "question": "If your deployment fails midway due to a timeout or API error, how do you recover or clean up the partial infrastructure created in Azure?",
    "answer": "If a Terraform deployment fails midway in Azure:\n1. **Inspect current state**: Run `terraform state list` to see what resources were successfully registered in the state database.\n2. **Run terraform plan**: Running plan will read the physical Azure resources, compare them with local configurations, and determine what needs to be created or updated.\n3. **Force Unlock State**: If the lock is stuck due to a pipeline crash, run `terraform force-unlock <lock-id>` to release the lease.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 279,
    "category": "Terraform (IaC)",
    "question": "How would you use Terraform to tag resources consistently across different Azure services?",
    "answer": "Here is a breakdown of the key concepts:\n• Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.\n• ACR stores private Docker container images securely in Azure, integrating with AKS using managed identities.\n• Azure Cloud Services: Experience using Azure VMs, VNETs, AKS, Key Vault, SQL, Storage, and DevOps.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 280,
    "category": "Terraform (IaC)",
    "question": "How do you roll back an infrastructure change in Azure when using Terraform if something goes wrong in production?",
    "answer": "To roll back an infrastructure change managed by Terraform in production:\n1. **Git Revert (Best Practice)**: Revert the faulty commit on your Git `main` branch. This restores the HCL code to its previous stable state.\n2. **Run Pipeline**: Run your CI/CD pipeline containing `terraform plan` and `terraform apply`. Terraform will identify that the current cloud resources do not match the reverted code and will automatically destroy or modify them back to the previous state.\n3. **State Rollback**: As a recovery method, restore a backup of the remote state file from Azure Blob storage versioning.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 281,
    "category": "Terraform (IaC)",
    "question": "How can you control resource naming conventions dynamically using Terraform variables and locals in Azure?",
    "answer": "Control resource naming conventions dynamically in Terraform using variables and locals:\n1. **Locals block**: Define a standard naming convention scheme using string interpolation: \n   `locals { name_prefix = \"${var.org}-${var.env}-${var.region}\" }`\n2. **Resource Naming**: Reference the local prefix inside resource blocks, appending the resource suffix:\n   `name = \"${local.name_prefix}-vm-01\"`\n3. **Lowercasing**: Wrap variables with standard functions like `lower()` to prevent case mismatches.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 282,
    "category": "Terraform (IaC)",
    "question": "How can you manage multiple Azure subscriptions using a single Terraform workspace or project?",
    "answer": "To manage resources across multiple Azure subscriptions in a single Terraform workspace:\n1. **Multiple Providers**: Configure multiple provider blocks referencing distinct subscription IDs.\n2. **Use Alias**: Assign an `alias` attribute to secondary providers:\n   ```hcl\n   provider \"azurerm\" {\n     alias           = \"billing_sub\"\n     subscription_id = \"xxxx-xxxx-xxxx\"\n     features {}\n   }\n   ```\n3. **Explicit Call**: Declare `provider = azurerm.billing_sub` in resources targeting the second subscription.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 283,
    "category": "CI/CD & Pipelines",
    "question": "How do you integrate Terraform deployments with Azure DevOps pipelines?",
    "answer": "To integrate Terraform with Azure DevOps YAML pipelines:\n1. **Define Service Connection**: Configure an Azure Resource Manager service connection using Workload Identity Federation (OIDC).\n2. **Pipeline YAML Tasks**: Use the official Terraform CLI tasks in your pipeline:\n   ```yaml\n   - task: TerraformTaskV4@4\n     inputs:\n       provider: 'azurerm'\n       command: 'init'\n       backendServiceArm: 'my-service-connection'\n       backendAzureRmStorageAccountName: 'prodstates'\n   - task: TerraformTaskV4@4\n     inputs:\n       command: 'apply'\n       environmentServiceNameAzureRM: 'my-service-connection'\n   ```\n3. **Quality checks**: Add validation tools like `tfsec` or `checkov` before the deployment steps.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 284,
    "category": "Terraform (IaC)",
    "question": "What strategies can you use to prevent accidental deletion or recreation of critical Azure resources in Terraform?",
    "answer": "To protect critical cloud resources from accidental deletion in Terraform:\n1. **Lifecycle Meta-Argument**: Add `prevent_destroy = true` inside the resource `lifecycle` block. Any `terraform destroy` attempt will error out immediately.\n2. **Azure Resource Locks**: Provision an `azurerm_management_lock` resource in HCL with the lock level set to `CanNotDelete`:\n   ```hcl\n   resource \"azurerm_management_lock\" \"lock\" {\n     name       = \"prevent-delete\"\n     scope      = azurerm_resource_group.rg.id\n     lock_level = \"CanNotDelete\"\n   }\n   ```\n3. **RBAC Permissions**: Restrict delete permissions on production subscriptions.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 285,
    "category": "Terraform (IaC)",
    "question": "How would you use Terraform to scale an Azure App Service Plan based on different workloads?",
    "answer": "Here is a breakdown of the key concepts:\n• Azure App Service: A PaaS hosting service for web apps and APIs that supports autoscaling, SSL, and staging slots.\n• Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 286,
    "category": "Terraform (IaC)",
    "question": "How do you manage Terraform modules for teams working on different components (e.g., networking, compute, storage) in Azure?",
    "answer": "Comparing **Erent Components (E.G., Networking, Compute, Storage) In Azure** and **Second Option** in Terraform Infrastructure as Code (IaC) contexts:\n\n1. **Core Architecture**:\n   * **Erent Components (E.G., Networking, Compute, Storage) In Azure**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent Components (E.G., Networking, Compute, Storage) In Azure** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 287,
    "category": "Terraform (IaC)",
    "question": "How would you create an Azure Kubernetes Service (AKS) cluster with Terraform and manage its node pools?",
    "answer": "Kubernetes Services expose pods to network traffic using stable IPs:\n1. **ClusterIP**: Exposes the service internally within the cluster (default).\n2. **NodePort**: Opens a static port on each node's IP to expose the service externally.\n3. **LoadBalancer**: Provisions a cloud public load balancer to route external traffic directly to nodes.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 288,
    "category": "Terraform (IaC)",
    "question": "How do you perform drift detection in Azure resources managed by Terraform?",
    "answer": "Disaster Recovery (DR): Designing failover systems in paired regions (e.g., via Azure Site Recovery) to ensure continuity during regional outages.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 289,
    "category": "Terraform (IaC)",
    "question": "You want to use custom images for VM deployment in Azure. How would you reference them in Terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 290,
    "category": "Terraform (IaC)",
    "question": "How do you handle conditional resource creation (e.g., only create a public IP if enable_public_ip = true) in Terraform for Azure?",
    "answer": "Production implementation guide for: **Handle Conditional Resource Creation (E.G., Only Create A Public Ip If Enable_Public_Ip = True) In Terraform For Azure** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 291,
    "category": "Terraform (IaC)",
    "question": "What are the Terraform security considerations when working with Azure service principals?",
    "answer": "Here is a breakdown of the key concepts:\n• Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.\n• IaC Security: Integrating vulnerability scanners (like tfsec, Checkmarx, or Trivy) in PR build validation stages.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 292,
    "category": "DevOps General",
    "question": "What is NAT and Application Gateway?",
    "answer": "NAT (Network Address Translation): Translates private IPs to a public IP, enabling outbound internet access for VMs in private subnets.\nAzure Application Gateway: A layer 7 load balancer with features like SSL termination, Web Application Firewall (WAF), and URL-based routing.\n---",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 293,
    "category": "Docker & Kubernetes",
    "question": "What is sidecar container?",
    "answer": "A sidecar container is a helper container that runs alongside the main container in the same Pod. It's commonly used for logging, proxying (e.g., Istio Envoy), or configuration syncs.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 294,
    "category": "Docker & Kubernetes",
    "question": "Can we deploy more than one container in a Pod?",
    "answer": "Yes, a Pod can run multiple containers that share the same network namespace and storage volumes. This is useful for tightly coupled applications (e.g., app + logging agent).\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 295,
    "category": "DevOps General",
    "question": "What is taint? Why is it used?",
    "answer": "A taint in Kubernetes prevents Pods from being scheduled on a Node unless the Pod tolerates that taint. It ensures that only specific Pods run on specific Nodes.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 296,
    "category": "DevOps General",
    "question": "What is headless service?",
    "answer": "A headless service in Kubernetes has no ClusterIP and allows clients to directly discover and connect to individual Pod IPs (DNS returns multiple A records).\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 297,
    "category": "DevOps General",
    "question": "What is deployment set?",
    "answer": "Possibly a mix-up with Deployment or StatefulSet:\nDeployment manages stateless replicas.\nStatefulSet manages stateful applications with persistent identity and storage.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 298,
    "category": "Docker & Kubernetes",
    "question": "What is Docker Swarm?",
    "answer": "Docker Swarm is Docker's native container orchestration tool, managing container clusters, offering service discovery, scaling, and load balancing.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 299,
    "category": "Docker & Kubernetes",
    "question": "What is ARG in Docker?",
    "answer": "ARG is a Dockerfile instruction that defines build-time variables. Unlike ENV, ARG values are not available after the image is built.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 300,
    "category": "Terraform (IaC)",
    "question": "How do you manage Terraform state files (multiple state files)?",
    "answer": "Use remote backends like Azure Storage with state locking.\nSplit resources by workspaces or modular state files (e.g., one per environment or team).\nUse terraform_remote_state data source to refer to outputs across state files.\n---",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 301,
    "category": "DevOps General",
    "question": "Why use MySQL over other databases?",
    "answer": "Open-source, widely supported.\nGreat for structured data with relational models.\nACID compliance ensures data integrity.\nRich ecosystem with tools, connectors, and integrations.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 302,
    "category": "DevOps General",
    "question": "How to manage a /16 CIDR with thousands of IPs?",
    "answer": "Divide the range using subnetting (/24, /25 etc.).\nUse naming conventions and IPAM (IP Address Management) tools.\nAutomate using Terraform/ARM and define clear IP allocation policies.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 303,
    "category": "DevOps General",
    "question": "If 150 people are using the same backend, how do you handle/recognize them?",
    "answer": "Use authentication tokens (JWT), headers, or API keys to identify users.\nUse load balancers with sticky sessions (if needed).\nCollect logs/metrics with user IDs tagged.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 304,
    "category": "Terraform (IaC)",
    "question": "What is root module and child module in Terraform?",
    "answer": "Root module: The main directory where Terraform commands are run.\nChild module: A reusable module invoked from the root or other modules using module blocks.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 305,
    "category": "DevOps General",
    "question": "How to avoid hardcoding IPs in main.tf?",
    "answer": "Use variables and pass values via .tfvars files or pipeline inputs.\nStore IPs in Key Vault, Parameter Store, or output from another module.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 306,
    "category": "Linux & Git",
    "question": "What is the use of top command in Linux?",
    "answer": "top shows real-time system resource usage (CPU, memory, processes). Helps monitor and troubleshoot system performance.\n---",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 307,
    "category": "Docker & Kubernetes",
    "question": "What is StatefulSet in Kubernetes?",
    "answer": "StatefulSet manages stateful applications. Ensures:\nStable network identity (Pod names)\nOrdered startup, scaling, and termination\nPersistent storage with PVCs",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 308,
    "category": "Docker & Kubernetes",
    "question": "Explain about Aks load experience ?",
    "answer": "Routing and load-balancing traffic in Azure Kubernetes Service (AKS):\n1. **Azure Load Balancer (L4)**: Provisions automatically when you deploy a Kubernetes service of type `LoadBalancer`. It routes incoming TCP/UDP traffic to your NodePorts.\n2. **Application Gateway Ingress Controller (AGIC - L7)**: Offers cookie-based session affinity, SSL termination, host/path routing, and native Web Application Firewall (WAF) protection.\n3. **Workload Isolation**: Best practice is to isolate ingress controllers within separate subnets to secure backend workloads.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 309,
    "category": "DevOps General",
    "question": "How to Configure network policy ?",
    "answer": "Kubernetes Network Policies control the communication flow between pods:\n1. **CNI Engine**: Requires a CNI plugin that supports policy enforcement (e.g. Azure CNI with Azure Network Policies, or Calico CNI).\n2. **Ingress & Egress Rules**: Define YAML policies using label selectors. For example, you can block all incoming traffic to a database pod unless it originates from a backend API pod with a specific application label.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 310,
    "category": "DevOps General",
    "question": "Different type of cluster storage, how to configure cluster storage ?",
    "answer": "Managing cluster storage in Kubernetes involves PVs, PVCs, and StorageClasses:\n1. **StorageClass**: Defines the storage provisioner (e.g. Azure Disk or Azure Files) and performance tier (Standard, Premium).\n2. **PersistentVolume (PV)**: A cluster-level storage resource provisioned dynamically by a StorageClass or statically by an administrator.\n3. **PersistentVolumeClaim (PVC)**: A user's request for storage. Pods mount the PVC as a volume, binding to the corresponding PV.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 311,
    "category": "DevOps General",
    "question": "What best practice manages identity control in cluster policy ?",
    "answer": "Best practices for managing identities and access within AKS clusters:\n1. **Microsoft Entra ID Integration**: Integrate AKS with Entra ID to authenticate cluster users.\n2. **Kubernetes RBAC**: Bind cluster roles to Entra ID user groups using RoleBindings.\n3. **Workload Identity**: Use Azure AD Workload Identity to map Kubernetes service accounts to Azure Managed Identities, letting pods access Azure resources (like Key Vault) securely without managing credentials.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 312,
    "category": "Azure & Azure DevOps",
    "question": "Difference in Azure CNI AND KUBERNESTES ?",
    "answer": "Azure CNI (Container Network Interface) networking plugin in AKS:\n1. **Direct IP**: Every pod gets a real, dedicated IP address directly allocated from your Azure VNET subnet.\n2. **Performance**: High network performance as pods communicate directly. However, it requires a large block of VNET IP addresses.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 313,
    "category": "DevOps General",
    "question": "Explain about Logs ?",
    "answer": "DevOps logging is implemented in multi-layered structures:\n1. **Container Logs**: Application output printed to stdout/stderr, viewed via `kubectl logs <pod-name>`.\n2. **Infrastructure Logs**: OS logs (syslog, journald) and cloud resource activity logs.\n3. **Log Aggregation**: Collecting logs using Azure Monitor Agent (AMA) or Fluentd and streaming them to a central Azure Log Analytics workspace for KQL analysis and dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 314,
    "category": "Azure & Azure DevOps",
    "question": "Devops side – Azure Devops with other services – how to interact ?",
    "answer": "Securing interactions between Azure DevOps and other Azure/external services:\n1. **Service Connections**: Configure Service Connections using Microsoft Entra ID Service Principals or Workload Identity Federation (OIDC) which eliminates key rotations.\n2. **Self-hosted Agents**: Run build agents on VMs inside target private networks to deploy to backend endpoints without exposing public firewall rules.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 315,
    "category": "DevOps General",
    "question": "What is Deployment approval and gate approvals ?",
    "answer": "Implementing deployment approvals and release gates in Azure DevOps:\n1. **Manual Approvals**: Pauses the pipeline stage and notifies reviewers. Deployment only continues once approved.\n2. **Release Gates**: Automated checks that evaluate criteria (e.g., query Azure Monitor alerts, call REST APIs, check active incidents) before allowing the deployment to proceed to the next stage (e.g. Production).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 316,
    "category": "Azure & Azure DevOps",
    "question": "How to Design CICCD pipeIine using Azure  methodology ?",
    "answer": "Designing a secure CI/CD pipeline in Azure DevOps:\n1. **YAML Pipeline**: Write the pipeline definition in code (`azure-pipelines.yml`) to store it in version control.\n2. **Continuous Integration (CI)**: Build Docker container images, run unit tests, and integrate SAST scanners (SonarQube/tfsec) to check for security flaws.\n3. **Continuous Deployment (CD)**: Deploy to dev, test, and production environments sequentially, utilizing Variable Groups, Service Connections, Environment approvals, and release gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 317,
    "category": "DevOps General",
    "question": "Explain about Microservice key concern ?",
    "answer": "Key engineering concerns when running microservices in production:\n1. **Service Discovery & DNS**: Resolving internal endpoints (handled natively by Kubernetes CoreDNS).\n2. **Security**: Implementing mTLS between services to secure service-to-service communication, often using a service mesh (Istio/Linkerd).\n3. **Observability**: Deploying distributed tracing (OpenTelemetry/Jaeger) to track execution paths across services.\n4. **Resiliency**: Configuring retries, rate limits, and circuit breakers.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 318,
    "category": "DevOps General",
    "question": "What is Scaling ?",
    "answer": "Scaling adjustments optimize compute resources based on application demand:\n1. **Vertical Scaling (Scale Up)**: Upgrading instance hardware sizes (CPU, Memory) of individual hosts or VM plans.\n2. **Horizontal Scaling (Scale Out)**: Adding more instances. In AKS, this is automated using the Horizontal Pod Autoscaler (HPA) for pods and the Cluster Autoscaler (CA) to dynamically provision VM nodes under load.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 319,
    "category": "DevOps General",
    "question": "What is High availability set up ?",
    "answer": "Designing a high availability (HA) infrastructure in Azure:\n1. **Availability Zones**: Distribute virtual machines across zones to protect against local datacenter failures.\n2. **Cluster Multi-Zone Node Pools**: Configure AKS nodes to run across multiple zones, with pods distributed using topology spread constraints.\n3. **Global Load Balancing**: Use Azure Front Door or Traffic Manager to route traffic across healthy multi-region endpoints.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 320,
    "category": "DevOps General",
    "question": "What is Multiple tenants ?",
    "answer": "Implementing multi-tenancy inside a Kubernetes cluster:\n1. **Logical Isolation**: Separate different tenants into dedicated Kubernetes Namespaces.\n2. **Network Isolation**: Enforce Network Policies to restrict cross-namespace pod communication.\n3. **Resource Isolation**: Set Resource Quotas and LimitRanges in each namespace to prevent a single tenant from exhausting cluster resources (noisy neighbor effect).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 321,
    "category": "DevOps General",
    "question": "What is ESC Tools ?",
    "answer": "ESC (Enterprise Security and Compliance) tools secure container pipelines:\n1. **Pipeline Scanning**: Scanning container images in ACR for security vulnerabilities before they are deployed.\n2. **Runtime Security**: Deploying security tools (like Falco, Prisma Cloud, or Defender for Cloud) that monitor container system calls and block abnormal behavior, such as run-time shell executions.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 322,
    "category": "Docker & Kubernetes",
    "question": "What is AKS patch management ?",
    "answer": "AKS node patch management and OS updates:\n1. **OS Updates**: Microsoft automatically downloads security patches to worker nodes daily.\n2. **Reboot Coordination**: For patches requiring a restart, deploy **Kured** (Kubernetes Reboot Daemon) inside the cluster. Kured sequentially cordons and drains workloads off nodes, triggers OS reboots, and returns them to service, preventing downtime.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 323,
    "category": "DevOps General",
    "question": "Regular expression – for redirection tolls ?",
    "answer": "Regular Expressions (Regex) are used in web server redirection rules (like Nginx location blocks or IIS rewrite rules):\n1. **Example**: Redirect all HTTP requests from `/old-path/(.*)` to `/new-path/$1`.\n2. **Nginx location configuration**:\n   `location ~* ^/old-path/(.*) {\n       return 301 /new-path/$1;\n   }`",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 324,
    "category": "DevOps General",
    "question": "What are the troubleshooting steps ?",
    "answer": "Standard troubleshooting steps for DevOps environments:\n1. **Isolate layer**: Determine if the failure is infrastructure, network, database, application code, or CI/CD config.\n2. **Logs check**: Review container console logs (`kubectl logs`), application stack traces, or pipeline step output logs.\n3. **Resource health**: Check CPU/Memory capacity bottlenecks, and run port connection tests (curl, telnet, netcat).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 325,
    "category": "DevOps General",
    "question": "What is difference between in CNI and cluster ?",
    "answer": "Azure CNI (Container Network Interface) networking plugin in AKS:\n1. **Direct IP**: Every pod gets a real, dedicated IP address directly allocated from your Azure VNET subnet.\n2. **Performance**: High network performance as pods communicate directly. However, it requires a large block of VNET IP addresses.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 326,
    "category": "DevOps General",
    "question": "How do u configure policies of cluster ?",
    "answer": "Production implementation guide for: **How Do U Configure Policies Of Cluster** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 327,
    "category": "DevOps General",
    "question": "EKS Cluster ?",
    "answer": "AWS Elastic Kubernetes Service (EKS) is Amazon's managed Kubernetes service:\n1. **Control Plane**: AWS automatically manages control plane nodes, etcd, upgrades, and high availability.\n2. **Worker Nodes**: Deployed in your AWS account using EC2 Auto Scaling groups (Managed Node Groups) or AWS Fargate (serverless containers). Standard `kubectl` commands are used to manage workloads.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 328,
    "category": "DevOps General",
    "question": "Creating the cluster ?",
    "answer": "Creating a Kubernetes cluster in Azure (AKS) or AWS (EKS):\n1. **Provision Control Plane**: Deploy cluster resources using Terraform (e.g. `azurerm_kubernetes_cluster`) or CLI commands, configuring networking, node sizes, and auth.\n2. **Node Pools**: Attach System Node Pools (for control workloads) and User Node Pools (for application containers) running inside designated private subnets.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 329,
    "category": "Azure & Azure DevOps",
    "question": "What is VNET pairing ?",
    "answer": "VNET Peering securely connects two Azure Virtual Networks (VNETs):\n1. **Private Routing**: Communication flows over Microsoft's private global backbone using private IP addresses. Traffic never goes over the public internet.\n2. **Setup**: Requires configuring two uni-directional peering links (VNET-A to VNET-B, and VNET-B to VNET-A) with Gateway Transit options for shared resources.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 330,
    "category": "DevOps General",
    "question": "Have u work with AFD and APM?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 331,
    "category": "Company Wise QA",
    "question": "How to upgrade the OS Patch, tell command for ubuntu and RedHat?",
    "answer": "To upgrade the OS patches on Linux servers:\n1. **Ubuntu/Debian**: Run `sudo apt update && sudo apt upgrade -y` to refresh the package lists and download/install the security patches.\n2. **RedHat/CentOS**: Run `sudo yum update -y` or `sudo dnf upgrade -y` to update the operating system packages.\n3. **Production coordination**: In enterprise environments, VMs are patched sequentially, and reboots are coordinated through maintenance windows or automated tooling like Azure Update Manager.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 332,
    "category": "Company Wise QA",
    "question": "Do you know about Ansible, puppet?",
    "answer": "Here is a breakdown of the key concepts:\n• Ansible is an agentless configuration management and automation tool that uses SSH/WinRM to push tasks defined in declarative YAML playbooks.\n• Puppet is an agent-based configuration management tool that pulls declarative configurations from a master server based on its custom DSL.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 333,
    "category": "Company Wise QA",
    "question": "Terraform Taint?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 334,
    "category": "Company Wise QA",
    "question": "What is Traffic Manager?",
    "answer": "Azure Traffic Manager is a DNS-based traffic load balancer:\n1. **Routing**: Directs client requests to global endpoints (e.g., Web apps in East US and West Europe) based on routing methods like performance, latency, or priority.\n2. **Health Probes**: Continuously monitors endpoints. If one region goes offline, Traffic Manager automatically redirects DNS queries to healthy regions.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 335,
    "category": "Company Wise QA",
    "question": "What is application Gateway?",
    "answer": "Azure Application Gateway is a Layer 7 regional web load balancer:\n1. **Key Capabilities**: Supports SSL Offloading/Termination, URL path-based routing (e.g., routing `/images` to one backend pool and `/api` to another), and cookie-based session affinity.\n2. **Security**: Features integrated Web Application Firewall (WAF) to block SQL injections, cross-site scripting, and OWASP Top 10 vulnerabilities.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 336,
    "category": "Company Wise QA",
    "question": "How to comminicate to database?",
    "answer": "Securing database communication in Azure cloud architectures:\n1. **Private Access**: Disable public access on your cloud database (e.g., Azure SQL, Cosmos DB).\n2. **Private Endpoint**: Provision a Private Endpoint, placing the database inside your private VNET subnet.\n3. **Authentication**: Connect using Azure Managed Identities and connection strings stored securely in Azure Key Vault.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 337,
    "category": "Company Wise QA",
    "question": "How you are using Prometheus in cluster?",
    "answer": "Prometheus is an open-source monitoring tool that scrapes metrics from target endpoints, stores time-series data, and triggers alerts via Alertmanager.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 338,
    "category": "Company Wise QA",
    "question": "How Grafana is working?",
    "answer": "Grafana is an open-source visualization dashboard that connects to time-series databases like Prometheus or Azure Monitor to display real-time metrics.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 339,
    "category": "Company Wise QA",
    "question": "If you have to restart webserver tomcat or nginx how you do that?",
    "answer": "To configure High Availability (HA) for a Tomcat application server:\n1. **Clustering**: Set up multiple Tomcat server instances across availability zones.\n2. **Session Replication**: Enable session sharing using Redis cache or Tomcat multicast clustering.\n3. **Load Balancing**: Place a Layer 7 load balancer (Application Gateway/Nginx) in front of the Tomcat cluster to perform health checks and route traffic.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 340,
    "category": "Company Wise QA",
    "question": "What is ClusterIp?",
    "answer": "A **ClusterIP** is the default service type in Kubernetes:\n1. **Behavior**: It exposes the service on an internal IP address within the cluster. It makes the service only accessible from within the cluster, allowing internal pods to communicate.\n2. **Use Case**: Ideal for backend microservices, databases, and caching layers that do not need to be exposed to external traffic.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 341,
    "category": "Company Wise QA",
    "question": "How you use Maven in your pipeline?",
    "answer": "Maven is a Java build automation tool that uses 'pom.xml' to manage dependencies and build phases like compile, test, and package.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 342,
    "category": "Company Wise QA",
    "question": "Write script for checking OS in the 10 different web apps?",
    "answer": "Comparing **Erent Web Apps** and **Second Option** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erent Web Apps**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent Web Apps** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 343,
    "category": "Company Wise QA",
    "question": "What is POM file?",
    "answer": "A **POM (Project Object Model)** file is an XML file named `pom.xml` used in Maven projects:\n1. **Content**: It contains the project configurations, including external dependencies (JAR libraries), plugins, build profiles, Group ID, Artifact ID, and Version.\n2. **Execution**: Maven reads `pom.xml` to download dependencies from repository servers, compile the Java source code, run tests, and package the application into JAR/WAR files.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 344,
    "category": "Company Wise QA",
    "question": "What is pakage manager in ubuntu and Redhat?",
    "answer": "Package managers automate installing, updating, and removing software packages:\n1. **Ubuntu/Debian**: Uses `apt` (Advanced Package Tool) to download and install `.deb` files: `sudo apt update && sudo apt install <package>`.\n2. **RedHat/CentOS/Fedora**: Uses `dnf` or `yum` to manage `.rpm` files: `sudo dnf install <package>`.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 345,
    "category": "Company Wise QA",
    "question": "Have you written automation script?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 346,
    "category": "Company Wise QA",
    "question": "What is Private DNS in Azure and use case?",
    "answer": "Azure Private DNS provides name resolution inside your private virtual networks:\n1. **No Internet Exposure**: You can use your own custom domain names (e.g. `internal.devops.hub`) without publishing them to the public internet.\n2. **Use Case**: Automatically resolves PaaS resources configured with Private Endpoints (e.g., resolving `database.privatelink.database.windows.net` to its private subnet IP).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 347,
    "category": "Company Wise QA",
    "question": "What are terraform Module?",
    "answer": "- Port no for RDP - 3389\n- link of azure devops\n- link of azure cloud\n- have you worked with repos\n- have you worked with work items (boards)",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 348,
    "category": "Company Wise QA",
    "question": "- have you troubleshoot pipelines?",
    "answer": "My workflow for troubleshooting CI/CD pipelines:\n1. **Log Analysis**: Check the specific build step output logs to identify compilation, syntax, or test failures.\n2. **Credentials & Secrets**: Check if Service Principal connection secrets, access tokens, or registry login credentials have expired.\n3. **Resource Availability**: Check if the pipeline runner host is online, has sufficient disk space, and has the required build tools (like Java or Node) installed.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 349,
    "category": "Company Wise QA",
    "question": "- why did you left your last company?",
    "answer": "Sample professional response: 'I am seeking new technical challenges, professional growth, and the opportunity to work more extensively with modern cloud architectures (like AKS, advanced IaC/Terraform pipelines) on a larger enterprise scale. My goal is to apply my DevOps skills to build highly resilient systems.'",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 350,
    "category": "Company Wise QA",
    "question": "- what was your shift timing?",
    "answer": "- are you comfortable with 24*7 shift\n- are you comfortable with rotational shifts\n- are you okay with week days holidays then weekends\nYes , they focus mainly on ci/cd pipeline and",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 351,
    "category": "Company Wise QA",
    "question": "Q. how we use variables and apply policy on pipelines?",
    "answer": "Applying variables and policies on CI/CD pipelines:\n1. **Variables**: Store parameter values in Variable Groups, linking them to pipeline environments. Mark credentials as 'Secret' to encrypt them.\n2. **Policies**: Require pipeline approval gates on environments, enforce branch policies on Git repositories (e.g., build validation pipelines must succeed before code merges), and use templates to lock step tasks.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 352,
    "category": "Company Wise QA",
    "question": "Q. How we check security in terraform code and what do you mean by app and infra pipelines",
    "answer": "Checking security compliance in Terraform IaC files:\n1. **Static Analysis**: Integrate security scanning tools (like `tfsec`, `checkmarx`, or `terrascan`) as a build task in the Pull Request pipeline.\n2. **Enforce Rules**: Block merges if high-severity vulnerabilities are found (e.g., exposing port 22/3389 publicly, unencrypted storage containers, or hardcoded API keys).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 353,
    "category": "Company Wise QA",
    "question": "Q. How you call multiple images from docker",
    "answer": "Handling multiple images in Docker architectures:\n1. **Multi-Stage Builds**: Reference multiple `FROM` images in a single `Dockerfile` (e.g. build app in SDK image, copy binary to minimal runtime JRE image). This keeps output container sizes small.\n2. **Docker Compose**: Define multiple containers/services running from separate images in a single YAML file to deploy them together.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 354,
    "category": "Company Wise QA",
    "question": "Q. How we run kubernetes and maintain container",
    "answer": "Running Kubernetes workloads and maintaining container health:\n1. **Probes**: Define Liveness probes (restarts container if app locks up) and Readiness probes (stops routing network traffic if app is loading).\n2. **Deployments**: Use RollingUpdates to apply container image updates without downtime. Set resources (Limits/Requests) to prevent pod Out-Of-Memory (OOM) eviction.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 355,
    "category": "Company Wise QA",
    "question": "Q. What is terraform",
    "answer": "Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp:\n1. **Declarative**: Allows DevOps engineers to define cloud resources (networks, VMs, databases, containers) using a high-level configuration language (HCL).\n2. **Execution State**: Generates execution plans (`terraform plan`), provisions resource states, and tracks changes in a state file (`terraform.tfstate`) to manage drift.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 356,
    "category": "Company Wise QA",
    "question": "Q. What is service and private endpoints",
    "answer": "Difference between Service Endpoints and Private Endpoints in Azure:\n1. **Service Endpoints**: Keeps the PaaS resource's public IP address, routing traffic over the Microsoft backbone. Requires configuring PaaS firewalls to accept VNET traffic.\n2. **Private Endpoints**: Assigns a private IP address from your subnet directly to the PaaS service via Private Link, completely disabling public IP access.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 357,
    "category": "Company Wise QA",
    "question": "Q. Write up code of vm on notepad",
    "answer": "A basic Terraform HCL code block to provision a Linux Virtual Machine in Azure:\n```hcl\nresource \"azurerm_linux_virtual_machine\" \"vm\" {\n  name                = \"prod-web-vm\"\n  resource_group_name = \"prod-rg\"\n  location            = \"East US\"\n  size                = \"Standard_B2s\"\n  admin_username      = \"adminuser\"\n  network_interface_ids = [azurerm_network_interface.nic.id]\n  \n  admin_ssh_key {\n    username   = \"adminuser\"\n    public_key = file(\"~/.ssh/id_rsa.pub\")\n  }\n  \n  os_disk {\n    caching              = \"ReadWrite\"\n    storage_account_type = \"Standard_LRS\"\n  }\n  \n  source_image_reference {\n    publisher = \"Canonical\"\n    offer     = \"0001-com-ubuntu-server-jammy\"\n    sku       = \"22_04-lts\"\n    version   = \"latest\"\n  }\n}\n```",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 358,
    "category": "Company Wise QA",
    "question": "Can you tell me about your projects that you have worked on ?",
    "answer": "DevOps Project overview template: 'I have designed and implemented secure CI/CD pipelines in Azure DevOps for microservices, provisioned multi-environment cloud infrastructure using Terraform, migrated containerized workloads to AKS, and configured centralized monitoring using Prometheus and Grafana, achieving 40% faster deployments and 99.9% application uptime.'",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 359,
    "category": "Company Wise QA",
    "question": "What services have you used of azure ?",
    "answer": "My hands-on experience with Microsoft Azure includes: Virtual Machines, Virtual Networks (VNETs), Azure Kubernetes Service (AKS), Azure Container Registry (ACR), Azure Key Vault, Azure Storage accounts, Azure SQL Database, Application Gateway, Azure Monitor/Log Analytics, and Azure DevOps pipelines.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 360,
    "category": "Company Wise QA",
    "question": "How do you connect your VM with private IP?",
    "answer": "To connect to an Azure VM securely using its private IP address:\n1. **Azure Bastion**: Configure Bastion in the VNET. It provides secure browser-based RDP/SSH tunnel sessions without public IPs.\n2. **VPN Gateway / ExpressRoute**: Set up a Point-to-Site or Site-to-Site VPN linking local machines directly to the Azure VNET.\n3. **Jumpbox VM**: Create a jump VM with a public IP, connect via SSH, and SSH into the target private VM from there.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 361,
    "category": "Company Wise QA",
    "question": "What is Vnet peering?",
    "answer": "VNET Peering securely connects two Azure Virtual Networks (VNETs):\n1. **Private Routing**: Communication flows over Microsoft's private global backbone using private IP addresses. Traffic never goes over the public internet.\n2. **Setup**: Requires configuring two uni-directional peering links (VNET-A to VNET-B, and VNET-B to VNET-A) with Gateway Transit options for shared resources.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 362,
    "category": "Company Wise QA",
    "question": "Difference between route table and NSG?",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 363,
    "category": "Company Wise QA",
    "question": "How application gateway is different from load balancer?",
    "answer": "Azure Application Gateway is a Layer 7 regional web load balancer:\n1. **Key Capabilities**: Supports SSL Offloading/Termination, URL path-based routing (e.g., routing `/images` to one backend pool and `/api` to another), and cookie-based session affinity.\n2. **Security**: Features integrated Web Application Firewall (WAF) to block SQL injections, cross-site scripting, and OWASP Top 10 vulnerabilities.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 364,
    "category": "Company Wise QA",
    "question": "How do you patch your VM ?",
    "answer": "To patch virtual machines:\n1. **Linux**: Run package updates (`sudo apt update && sudo apt upgrade -y` or `sudo yum update -y`).\n2. **Azure Update Manager**: Best practice is to deploy Update Manager. Define scheduled patch assessment jobs, download security updates automatically, and configure reboot schedules.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 365,
    "category": "Company Wise QA",
    "question": "If vendor pushes a patch while developer is working on a VM ,how will you handle this delta patching?",
    "answer": "To handle delta patching when updates are pushed during active development:\n1. **Maintenance Windows**: Configure update policies to apply patches only during designated maintenance windows (e.g., weekends/night shifts).\n2. **Stage Validation**: Apply delta patches to staging/dev copies of the VM first. Run validation tests before letting the patch install on the active development server.\n3. **Backup snapshot**: Take an Azure Disk snapshot before applying patches so you can quickly roll back if the patch breaks active configurations.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 366,
    "category": "Company Wise QA",
    "question": "What is swap space in respect to your Linux VM ?",
    "answer": "**Swap Space** is a designated space on a storage drive used as virtual memory in Linux systems:\n1. **Function**: When physical RAM is fully occupied, inactive memory pages are moved (swapped) to disk to prevent application crashes.\n2. **Configuration**: Configured using `mkswap` and activated with `swapon`. However, swap space has slower read/write speeds than physical RAM, so excessive swap usage (thrashing) can slow down the system.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 367,
    "category": "Company Wise QA",
    "question": "Suppose microsoft is announcing some new updates regarding azure services in future ,where will you get those updates? Which page of which website?",
    "answer": "To track Azure announcements and product updates, visit the official **Azure Updates** portal (https://azure.microsoft.com/en-us/updates/). You can configure RSS feeds or filter updates by product categories.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 368,
    "category": "Company Wise QA",
    "question": "How have you configured your backups?",
    "answer": "Implementing backup policies in Azure:\n1. **Azure Backup Vault**: Set up recovery vaults.\n2. **Backup Policies**: Define backup policies specifying frequencies (daily/weekly) and retention ranges (30 days/7 years).\n3. **Replication**: Configure backup replication settings (LRS, GRS) for regional redundancy.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 369,
    "category": "Company Wise QA",
    "question": "Where are your VMs located? Which location?",
    "answer": "VM deployment location strategy:\nDeploy virtual machines in regional datacenters close to target users (e.g., East US, Central India) to minimize network latency. Use Availability Zones within a region to ensure high availability.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 370,
    "category": "Company Wise QA",
    "question": "Where is your DR servers located?",
    "answer": "Disaster Recovery server location strategy:\nDeploy DR failover servers in paired Azure regions located at least 300 miles away (e.g. Primary in East US, DR in West US) to ensure business continuity during regional natural disasters.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 371,
    "category": "Company Wise QA",
    "question": "How have you configured your DR?",
    "answer": "Disaster Recovery (DR): Designing failover systems in paired regions (e.g., via Azure Site Recovery) to ensure continuity during regional outages.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 372,
    "category": "Company Wise QA",
    "question": "How have you setup monitoring for VMs?",
    "answer": "Setting up VM monitoring in Azure:\n1. **Azure Monitor Agent (AMA)**: Deploy the agent on virtual machines.\n2. **Data Collection Rules (DCR)**: Define DCRs to stream syslog, event logs, and memory performance metrics.\n3. **Log Analytics**: Send metrics to Log Analytics, and configure dashboard queries.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 373,
    "category": "Company Wise QA",
    "question": "Suppose your VM goes above 80% cpu utilization, how will you get notified?",
    "answer": "To set up alerts for high CPU utilization:\n1. **Alert Rule**: In Azure Monitor, create an Alert Rule targeting the VM/scale set.\n2. **Metric Condition**: Select the `Percentage CPU` metric with the threshold: `Greater than 80%`.\n3. **Action Group**: Configure an Action Group pointing to the administrator email, SMS, or webhook (Slack/PagerDuty) to trigger notifications.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 374,
    "category": "Company Wise QA",
    "question": "How will you configure that in azure using service like azure monitor?",
    "answer": "To configure monitoring for VMs using Azure Monitor:\n1. Install the **Azure Monitor Agent (AMA)** on target virtual machines.\n2. Configure **Data Collection Rules (DCR)** to gather logs (syslog/event logs) and system metrics (CPU, memory, disk utilization).\n3. Send data to an **Azure Log Analytics workspace** and configure alerts (e.g., CPU > 80% for 5 mins) to trigger an Action Group (Email, SMS, or Slack webhook).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 375,
    "category": "Company Wise QA",
    "question": "What is difference between automation account and function app?",
    "answer": "Differences between Azure Automation Account and Azure Function App:\n1. **Automation Account**: Geared towards system administration. Runs PowerShell or Python runbooks to perform operations like scheduled VM startup/shutdown, OS patching, and resource compliance auditing.\n2. **Function App**: A serverless developer platform. Runs microservices and event-driven code blocks (supporting C#, Java, Node.js, Python) that scale dynamically to handle HTTP web requests and application workloads.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 376,
    "category": "Company Wise QA",
    "question": "How will you horizontally scale your app services ?",
    "answer": "To scale Azure App Services horizontally:\n1. **Scale Out**: Add more VM instances to the underlying App Service Plan (up to 30 instances depending on tier).\n2. **Autoscale Rules**: Configure Autoscale Settings in the portal to dynamically adjust instance count based on metrics. For example, increase instance count by 1 if average CPU utilization exceeds 70% for 10 minutes.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 377,
    "category": "Company Wise QA",
    "question": "How do you access storage account? How it is configured securely?",
    "answer": "Securing storage accounts in Azure:\n1. **Private Endpoints**: Disable public internet access, placing the storage account inside your VNET.\n2. **Managed Identity / SAS**: Access files using Entra ID authentication or temporary SAS tokens rather than storage account master keys.\n3. **Transport Security**: Enforce HTTPS transfer only, and enable storage firewalls.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 378,
    "category": "Company Wise QA",
    "question": "How do you manage your state file in Terraform?",
    "answer": "To manage and secure the Terraform state file in production:\n1. **Remote Backend**: Store the `terraform.tfstate` file in a cloud backend (e.g. Azure Blob Storage or AWS S3) instead of local machines.\n2. **State Locking**: Enable locking (built-in via Azure Blob Leasing or S3 with DynamoDB) to prevent concurrent executions from corrupting the file.\n3. **Security**: Encrypt the backend at rest, enable file versioning for quick recovery, and restrict read/write access permissions using RBAC.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 379,
    "category": "Company Wise QA",
    "question": "How do you access the state file from your local machine cli ?",
    "answer": "To access the state file from your local machine CLI:\n1. **Configure Backend**: Ensure the backend block in HCL points to the remote storage (e.g. Azure Blob container).\n2. **Terraform CLI**: Run `terraform init` to authorize connections, and use `terraform state list` or `terraform state show <resource_address>` to inspect state parameters.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "LTI Mindtree"
  },
  {
    "id": 380,
    "category": "Company Wise QA",
    "question": "How to create private endpoint for SQL database with resources which are in different VNET?",
    "answer": "19. Difference between NSG and ASG.\n20. How you create private end point.\n21. If we have private end point, do you still need to configure the WAF.\nfor paas\n22. How to configure the WAF.\n23. What are stages in Enfra Pipeline.\n24. Have you managed application deployment Pipeline.\n25. How to configure the ASG.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 381,
    "category": "Company Wise QA",
    "question": "What is Terraform Lifecycle Block?",
    "answer": "The Terraform lifecycle consists of:\n1. **terraform init**: Initializes backend storage and downloads providers.\n2. **terraform plan**: Dry-run check showing changes.\n3. **terraform apply**: Provisions resources in the cloud and writes `terraform.tfstate`.\n4. **terraform destroy**: Removes all managed resources.\n*Also refers to the `lifecycle` block inside resources: `create_before_destroy`, `prevent_destroy`, and `ignore_changes`.*",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 382,
    "category": "Company Wise QA",
    "question": "What is Terraform null resource?",
    "answer": "Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp:\n1. **Declarative**: Allows DevOps engineers to define cloud resources (networks, VMs, databases, containers) using a high-level configuration language (HCL).\n2. **Execution State**: Generates execution plans (`terraform plan`), provisions resource states, and tracks changes in a state file (`terraform.tfstate`) to manage drift.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 383,
    "category": "Company Wise QA",
    "question": "What is terraform dynamic block and how you use that in code?",
    "answer": "Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp:\n1. **Declarative**: Allows DevOps engineers to define cloud resources (networks, VMs, databases, containers) using a high-level configuration language (HCL).\n2. **Execution State**: Generates execution plans (`terraform plan`), provisions resource states, and tracks changes in a state file (`terraform.tfstate`) to manage drift.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 384,
    "category": "Company Wise QA",
    "question": "How you manage your state file?",
    "answer": "To manage and secure the Terraform state file in production:\n1. **Remote Backend**: Store the `terraform.tfstate` file in a cloud backend (e.g. Azure Blob Storage or AWS S3) instead of local machines.\n2. **State Locking**: Enable locking (built-in via Azure Blob Leasing or S3 with DynamoDB) to prevent concurrent executions from corrupting the file.\n3. **Security**: Encrypt the backend at rest, enable file versioning for quick recovery, and restrict read/write access permissions using RBAC.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 385,
    "category": "Company Wise QA",
    "question": "How to bring state file from remote to local system, explain procedure?",
    "answer": "To pull a remote state file to your local system:\n1. Run `terraform state pull > local_state.tfstate`.\n2. This downloads a read-only copy of the remote state database to your local machine, allowing safe offline debugging.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 386,
    "category": "Company Wise QA",
    "question": "How to migrate state file from one storage to other storage account?",
    "answer": "Database and server migration to Microsoft Azure:\n1. **Rehost**: Drag-and-drop server replication to Azure VMs using Azure Migrate.\n2. **Refactor**: Containerizing applications and migrating to PaaS services like Azure App Service or AKS.\n3. **Database Migration**: Replicating databases to Azure SQL Database using Azure Database Migration Service (DMS).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 387,
    "category": "Company Wise QA",
    "question": "How you manage you cicd pipeline?",
    "answer": "Managing CI/CD pipelines efficiently:\n1. **Infrastructure as Code**: Define all pipeline steps inside a `yaml` file (e.g. `azure-pipelines.yml`) to store them in Git repository folders.\n2. **Quality Gates**: Add automated unit tests, lint checks, and security scanning (SAST) in the pull request validation stages.\n3. **Deployment Environments**: Separate pipeline runs into Dev, Test, and Prod stages, securing the Production step with manual approval gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 388,
    "category": "Company Wise QA",
    "question": "Tell me about SAST tool you have worked on?",
    "answer": "SAST (Static Application Security Testing): Scanning source code or IaC configs (like tfsec) for security flaws before execution.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 389,
    "category": "Company Wise QA",
    "question": "What is application gateway and why we use it?",
    "answer": "Azure Application Gateway is a Layer 7 regional web load balancer:\n1. **Key Capabilities**: Supports SSL Offloading/Termination, URL path-based routing (e.g., routing `/images` to one backend pool and `/api` to another), and cookie-based session affinity.\n2. **Security**: Features integrated Web Application Firewall (WAF) to block SQL injections, cross-site scripting, and OWASP Top 10 vulnerabilities.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 390,
    "category": "Company Wise QA",
    "question": "WHat are Load balancing available in Azure?",
    "answer": "Azure provides four primary load balancing services:\n1. **Azure Load Balancer**: A Layer 4 (TCP/UDP) ultra-low-latency load balancer. Ideal for distributing raw network traffic to VM scale sets.\n2. **Application Gateway**: A Layer 7 regional web load balancer. Supports SSL offloading, URL path-based routing, cookie session affinity, and Web Application Firewall (WAF).\n3. **Azure Front Door**: A Layer 7 global load balancer and CDN. Routes HTTP/HTTPS traffic globally across regions using Anycast.\n4. **Traffic Manager**: A DNS-based global traffic routing engine. Directs client queries to healthy endpoint IPs based on latency or priority.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 391,
    "category": "Company Wise QA",
    "question": "Name DAST tool you have worked on?",
    "answer": "DAST (Dynamic Application Security Testing): Testing running applications from the outside for vulnerabilities (like OWASP ZAP).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 392,
    "category": "Company Wise QA",
    "question": "How to manage multiple agent in azure pipeline?",
    "answer": "Managing multiple agents in Azure DevOps pipelines:\n1. **Agent Pools**: Organize self-hosted or Microsoft-hosted agents into pools (e.g. `MySelfHostedPool`).\n2. **Demands**: Target pools in YAML and route jobs using demands (e.g. `npm` or `maven`) so only agents with those tools installed pick up the build job.\n3. **Parallel Jobs**: Configure parallel job allocations to run builds concurrently.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 393,
    "category": "Company Wise QA",
    "question": "If you have to access one vm without use of internet and vnet how you access that?",
    "answer": "To access an Azure VM without a public IP or direct internet exposure:\n1. **Azure Bastion**: Access the VM directly inside the Azure Portal web browser over SSL/TLS (HTTPS). The VM remains completely isolated inside its private subnet.\n2. **ExpressRoute / VPN**: Connect to the virtual network using a Site-to-Site VPN or ExpressRoute connection from your physical office network. You can then access the VM directly using its private IP.\n3. **Private Endpoint Jumpbox**: Use a secure gateway VM located inside a peered management VNet.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 394,
    "category": "Company Wise QA",
    "question": "One application is running in a azure vm, suddenly it stops responding, how you troubleshoot this?",
    "answer": "Troubleshooting an unresponsive Azure VM:\n1. **Boot Diagnostics**: Check VM screenshots and serial console logs in the Azure portal for boot errors or OS crashes.\n2. **Redeploy VM**: Redeploy the VM instance, which migrates it to a new healthy physical host in the Azure datacenter.\n3. **Network Check**: Verify if NSG rules, Route Tables, or internal VM firewalls (iptables/Windows Firewall) are blocking SSH/RDP ports.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 395,
    "category": "Company Wise QA",
    "question": "Which scripting language you are comfortable?",
    "answer": "For DevOps engineering and systems administration, I am comfortable with:\n1. **Bash Scripting**: Used on Linux environments to automate VM setups, process text (awk/sed), write backup scripts, and manage container deployments.\n2. **Python**: Used for cloud SDK programming, custom alert webhooks, data transformations, and complex system integrations.\n3. **PowerShell**: Used for managing Windows server configurations, Active Directory commands, and Azure RM scripts.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 396,
    "category": "Company Wise QA",
    "question": "Difference between Self hosted agent and microsoft hosted agent?",
    "answer": "Microsoft-hosted vs Self-hosted agents in Azure DevOps:\n1. **Microsoft-hosted**: Managed by Microsoft. Clean VM per job, pre-installed software, automatically updated, but has compute limitations and cannot access private networks.\n2. **Self-hosted**: Configured on your own VMs inside private VNETs. Fast caching, customizable software, but requires OS updates and patching by the DevOps team.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 397,
    "category": "Company Wise QA",
    "question": "How to manage compliance in azure?",
    "answer": "1.introduction\n2.do you Experience in azure infra at administrative level...in troubleshooting azure infra\n3.do you have experience in docker,kubernates and yaml\n4.scenario based: how would you suggest the customer that how to deploy his application on vm or container\n5.compnents of kubernates cluster\n6.how would you deploy application to kubernates\n7.if your state file got deleted how would you recover it\n8.explain git import command\n9.create multiple resource group at multiple location\n10.how to create graphana dashboard. have you created any\n11.how to configure alert messages of vm in any monitoring tools\n12.do you know environment variables in azure\n13.types of agents in azure devops\n14.what do you understand by trigger in pipeline",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Tech Mahindra"
  },
  {
    "id": 398,
    "category": "Docker & Kubernetes",
    "question": "Where does PV exist in kuberenetes?",
    "answer": "PersistentVolume (PV): A cluster-level storage resource provisioned by an administrator or StorageClass mapped to physical cloud disks.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 399,
    "category": "Docker & Kubernetes",
    "question": "Ingress vs services difference?",
    "answer": "Here is a breakdown of the key concepts:\n• Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.\n• Azure Cloud Services: Experience using Azure VMs, VNETs, AKS, Key Vault, SQL, Storage, and DevOps.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 400,
    "category": "Docker & Kubernetes",
    "question": "Difference between Replica Set and Deployment?",
    "answer": "Difference between ReplicaSet and Deployment in Kubernetes:\n1. **ReplicaSet**: Ensures that a specified number of pod replicas are running at any given time. Lacks rolling updates/rollback features.\n2. **Deployment**: A higher-level resource that manages ReplicaSets. Supports rolling updates (zero downtime), rollback to historical revisions, and declarative resource definitions.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 401,
    "category": "Docker & Kubernetes",
    "question": "Difference between Ingress and LB?",
    "answer": "Difference between Ingress and Load Balancer in Kubernetes:\n1. **LoadBalancer (L4)**: Provisions a cloud load balancer routing TCP/UDP traffic to your node ports. It requires a unique public IP for each service.\n2. **Ingress (L7)**: A single entry point that manages external traffic routing to cluster services based on HTTP hosts or request paths (e.g. routing `/api` vs `/auth`), supporting SSL termination and hosting multiple sites.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 402,
    "category": "Docker & Kubernetes",
    "question": "Explain SSL certificate setup through LB?",
    "answer": "To configure SSL Certificate setup and terminate HTTPS on a Load Balancer:\n1. **Layer 7 Load Balancer (e.g. Azure App Gateway)**: Secure HTTPS termination is supported. Upload the SSL certificate (PFX format) to Azure Key Vault, bind the certificate to the App Gateway listener on Port 443, and configure routing rules to forward decrypted HTTP traffic to backend servers.\n2. **Layer 4 Load Balancer (e.g. Azure Standard LB)**: Decryption is not supported. It passes encrypted traffic directly through to target VMs, where SSL certificates must be configured locally.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 403,
    "category": "Docker & Kubernetes",
    "question": "How to end HTTPs on LB?",
    "answer": "To configure SSL Certificate setup and terminate HTTPS on a Load Balancer:\n1. **Layer 7 Load Balancer (e.g. Azure App Gateway)**: Secure HTTPS termination is supported. Upload the SSL certificate (PFX format) to Azure Key Vault, bind the certificate to the App Gateway listener on Port 443, and configure routing rules to forward decrypted HTTP traffic to backend servers.\n2. **Layer 4 Load Balancer (e.g. Azure Standard LB)**: Decryption is not supported. It passes encrypted traffic directly through to target VMs, where SSL certificates must be configured locally.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 404,
    "category": "Docker & Kubernetes",
    "question": "How to create certificate?",
    "answer": "To create and configure SSL/TLS certificates for web servers:\n1. **Self-Signed (Testing)**: Generate a certificate locally using OpenSSL: `openssl req -x509 -newkey rsa:4096 -keyout domain.key -out domain.crt -days 365 -nodes`.\n2. **CA-Signed (Production)**: Generate a CSR (Certificate Signing Request), submit it to a trusted Certificate Authority (like Let's Encrypt using automated Certbot clients, or DigiCert), download the validated certificate, and install it.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 405,
    "category": "Docker & Kubernetes",
    "question": "Tell stages of Maven?",
    "answer": "Maven is a Java build automation tool that uses 'pom.xml' to manage dependencies and build phases like compile, test, and package.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 406,
    "category": "Docker & Kubernetes",
    "question": "Versions of kuberenetes you have worked?",
    "answer": "Managing Kubernetes versions in cloud environments:\n1. **Standard Upgrades**: Maintain AKS/EKS clusters within the official supported N-2 minor version window (e.g., running version 1.27, 1.28, or 1.29).\n2. **Upgrade Workflow**: Perform upgrades iteratively (one minor version at a time). Upgrade the control plane nodes first, then update worker node pools sequentially using rolling-upgrade strategies to prevent application downtime.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 407,
    "category": "Docker & Kubernetes",
    "question": "PV vs PVC difference?",
    "answer": "Here is a breakdown of the key concepts:\n• PersistentVolume (PV): A cluster-level storage resource provisioned by an administrator or StorageClass mapped to physical cloud disks.\n• PersistentVolumeClaim (PVC): A user request for storage that binds to a matching PersistentVolume (PV).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 408,
    "category": "Docker & Kubernetes",
    "question": "What is Demonset, stateful set?",
    "answer": "Use a Deployment for stateless workloads where replica pods are identical and interchangeable (e.g. web servers). Use a StatefulSet for stateful applications (e.g. databases like PostgreSQL) requiring unique, persistent identities, stable network hostnames, and dedicated persistent volume storage for each pod replica.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 409,
    "category": "Docker & Kubernetes",
    "question": "How to write deployment file?",
    "answer": "A standard Kubernetes Deployment manifest file configuration in YAML:\n```yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-deployment\n  labels:\n    app: web\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n        - name: app-container\n          image: nginx:1.25\n          ports:\n            - containerPort: 80\n```",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 410,
    "category": "Docker & Kubernetes",
    "question": "How POD comminicate across diff namespaces? How to enable and disable communication between POD?",
    "answer": "Azure Container Registry (ACR) is a private container registry service:\n1. **Image Registry**: Stores and manages Docker container images, Helm charts, and OCI artifacts.\n2. **Integrations**: Integrates with AKS via Azure RBAC (AcrPull permissions assigned to AKS managed identity), supports image vulnerability scanning (via Defender), and geo-replication.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 411,
    "category": "Docker & Kubernetes",
    "question": "How to make sure existing pods are distributed across all the nodes uniformaly?",
    "answer": "Azure Container Registry (ACR) is a private container registry service:\n1. **Image Registry**: Stores and manages Docker container images, Helm charts, and OCI artifacts.\n2. **Integrations**: Integrates with AKS via Azure RBAC (AcrPull permissions assigned to AKS managed identity), supports image vulnerability scanning (via Defender), and geo-replication.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 412,
    "category": "Docker & Kubernetes",
    "question": "Sidecar Container?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 413,
    "category": "Docker & Kubernetes",
    "question": "Different deployment strategy in k8s?",
    "answer": "Common Kubernetes deployment strategies:\n1. **Recreate**: Destroys all old pods before spinning up new ones. Introduces downtime but prevents version mismatch.\n2. **RollingUpdate (Default)**: Replaces old pods with new ones gradually. Ensures zero downtime by setting `maxSurge` (how many pods can be created above limit) and `maxUnavailable`.\n3. **Blue-Green**: Runs two identical environments (Blue active, Green staging). Traffic is switched instantly at the service level once green passes tests.\n4. **Canary**: Deploys a new version to a small percentage of users first, monitoring health before rolling it out to 100% of the cluster.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 414,
    "category": "Docker & Kubernetes",
    "question": "How to grant access to developer in aks cluster for a single log?",
    "answer": "To grant a developer access to view logs of a single pod/namespace in AKS:\n1. **Kubernetes RBAC**: Create a custom Role in the namespace restricting permissions to `[\"pods/log\"]` or `[\"pods\"]` under read resources.\n2. **RoleBinding**: Bind the Role to the developer's Entra ID user group. They will be authorized to view logs via `kubectl logs` without cluster-admin permissions.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 415,
    "category": "Docker & Kubernetes",
    "question": "What is stateful set and how it is different from replica set?",
    "answer": "Comparing **Erent From Replica Set** and **Second Option** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erent From Replica Set**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent From Replica Set** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 416,
    "category": "Docker & Kubernetes",
    "question": "each pod different name?",
    "answer": "Comparing **Erent Name** and **Second Option** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erent Name**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent Name** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 417,
    "category": "Docker & Kubernetes",
    "question": "What is Kubernetes and why we required it if docker is serving the purpose?",
    "answer": "Why we need Kubernetes over standard Docker:\n1. **Scale**: Docker runs containers on a single host. Kubernetes orchestrates containers across a cluster of nodes.\n2. **Self-Healing**: Kubernetes restarts failed containers, drains nodes, and replaces unresponsive pods.\n3. **Service Discovery & Load Balancing**: Kubernetes manages internal pod routing automatically.\n4. **Declarative Updates**: Supports automated zero-downtime rolling updates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 418,
    "category": "Docker & Kubernetes",
    "question": "What is Docker and container?",
    "answer": "Docker and container virtualization concepts:\n1. **Docker**: A containerization platform that packages source code, runtimes, system libraries, and settings into a single lightweight container image.\n2. **Container**: A running instance of an image. Unlike virtual machines, containers share the host operating system kernel, making them highly efficient.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 419,
    "category": "Docker & Kubernetes",
    "question": "I have one container running, made some changes in that, now how we can create an new container with that?",
    "answer": "To create a new Docker container image from changes made inside a running container:\n1. **Using docker commit (Quick/Ad-hoc)**: Commit changes into a new local image using: `docker commit <container-id> my-new-image:v1`.\n2. **Using Dockerfile (Best Practice)**: Instead of modifying containers interactively, declare the changes (packages, configurations) inside a `Dockerfile` and rebuild: `docker build -t my-image:v1 .`. This keeps image creation reproducible.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 420,
    "category": "Docker & Kubernetes",
    "question": "Tell me about Docker networking?",
    "answer": "Docker networking drivers control how containers communicate:\n1. **Bridge (Default)**: Containers attach to a private internal network on the host, communicating with external hosts via NAT.\n2. **Host**: Removes network isolation between the container and the Docker host. The container shares the host's IP and ports directly.\n3. **Overlay**: Enables containers running across different Docker Daemon hosts (Docker Swarm) to communicate securely.\n4. **None**: Disables all networking for isolated containers.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 421,
    "category": "Docker & Kubernetes",
    "question": "What is POD affinity and Node affinity?",
    "answer": "Difference between Node Affinity and Pod Affinity in Kubernetes:\n1. **Node Affinity**: Constrains which nodes your pod can be scheduled on based on node labels (e.g. schedule pod only on nodes labeled `gpu=true`).\n2. **Pod Affinity**: Schedules a pod close to other pods based on labels (e.g. placing frontend pods on the same node as database pods to minimize latency).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 422,
    "category": "Docker & Kubernetes",
    "question": "How to troubleshoot docker container?",
    "answer": "Step-by-step process to troubleshoot failing Docker containers:\n1. **Inspect logs**: Run `docker logs <container-id>` to check application standard outputs and error stack traces.\n2. **Check container state**: Run `docker inspect <container-id>` to check network ports, environment variables, and mount states.\n3. **Live Shell access**: Execute a terminal session inside the running container: `docker exec -it <container-id> /bin/bash` or `sh` to inspect internal files and connection ports.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 423,
    "category": "Docker & Kubernetes",
    "question": "If we have created pod and it is running properly but the port we have mapped is not accessible, how to troubleshoot this?",
    "answer": ">We don't want to work as root user on dockerfile\n>We want to use namespace in getting a pod(kubectl get pod namespace)\n>Types of troubleshooting in kubernetes\n>Multi stage build\n>If container is deleted how do we get files (s3 versioning)\n>What if state file is deleted\n>Diff btw pod, service, deployment\n>What is readiness and liveness in kubernetes\n>Command to get pods",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 424,
    "category": "Docker & Kubernetes",
    "question": ">What monitoring tools you have used?",
    "answer": "Monitoring: Setting up metrics and logging collection (e.g., Azure Monitor, AMA agent, Log Analytics) to track resource health.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 425,
    "category": "Docker & Kubernetes",
    "question": ">If u r using VMSS/autoscaling and it is not working how do you troubleshoot this?",
    "answer": "Here is a breakdown of the key concepts:\n• Troubleshooting involves diagnosing system issues by checking resource statuses (`describe`), reviewing logs, and running network tests.\n• Azure VMSS: Virtual Machine Scale Sets let you deploy and manage a group of load-balanced, auto-scaling VMs.\n• Horizontal/Vertical Autoscaling: Dynamically adjusting replicas (HPA) or instance sizes based on load.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 426,
    "category": "Company Wise QA",
    "question": "What is middleware for Windows apart from IIS?",
    "answer": "Middleware engines on Windows Server (excluding IIS):\n1. **Apache Tomcat**: Used to host Java web applications and servlets.\n2. **WildFly / JBoss**: An enterprise Java application server.\n3. **Node.js**: Runs JavaScript server-side backend logic.\n4. **Kestrel / IIS Rewrite**: Kestrel serves ASP.NET Core applications, often reverse-proxied through IIS.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 427,
    "category": "Company Wise QA",
    "question": "In linux which flavour you have worked?",
    "answer": "Linux is an open-source operating system kernel. I work with Debian-based (Ubuntu Server) and Red Hat-based (RHEL) distributions, configuring services, managing package installations (apt/dnf), and writing automation scripts.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 428,
    "category": "Company Wise QA",
    "question": "If you have to migrate a Apache bassed system to azure, what would be your step?",
    "answer": "Steps to migrate an Apache-based web application to Azure:\n1. **Lift-and-Shift**: Create an Azure VM, install Apache, copy configurations (`httpd.conf`), and migrate application files.\n2. **Refactor to Containers (Best Practice)**: Containerize the Apache workload and deploy to Azure App Service or Container Apps to eliminate OS-level maintenance.\n3. **DNS Cutover**: Update your external DNS records to point to the new Azure endpoint.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 429,
    "category": "Company Wise QA",
    "question": "What are security measoures available in Azure?",
    "answer": "Key security layers available in Microsoft Azure:\n1. **Identity**: Microsoft Entra ID (formerly Azure AD), MFA, conditional access policies, and Role-Based Access Control (RBAC).\n2. **Network**: Network Security Groups (NSGs), Azure Bastion, Private Endpoints, Azure Firewall, and WAF.\n3. **Data**: Azure Key Vault for secrets management, and Storage Encryption at Rest.\n4. **Governance**: Azure Policy for compliance and Defender for Cloud.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 430,
    "category": "Company Wise QA",
    "question": "How to create a HA for Tomcat bassed server?",
    "answer": "To configure High Availability (HA) for a Tomcat application server:\n1. **Clustering**: Set up multiple Tomcat server instances across availability zones.\n2. **Session Replication**: Enable session sharing using Redis cache or Tomcat multicast clustering.\n3. **Load Balancing**: Place a Layer 7 load balancer (Application Gateway/Nginx) in front of the Tomcat cluster to perform health checks and route traffic.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 431,
    "category": "Company Wise QA",
    "question": "Scipting language you have worked on?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 432,
    "category": "Company Wise QA",
    "question": "9 If you have to move file with the same permission from source to destination, how you will do that?",
    "answer": "Moving files while preserving security permissions:\n1. **Linux**: Run `rsync -ahP` or `cp -p` commands. Rsync preserves ownership, access modes (chmod), and group permissions during transfers.\n2. **Windows**: Use the Robocopy tool: `robocopy <source> <destination> /E /COPY:DATS`. The `COPY:DATS` argument copies Data, Attributes, Timestamps, and Security permissions (NTFS ACLs).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 433,
    "category": "Company Wise QA",
    "question": "How to access server using authentication key apart from username and password?",
    "answer": "Accessing Linux servers securely using SSH keys:\n1. **Key Generation**: Generate an SSH keypair on your local machine using `ssh-keygen -t rsa -b 4096`.\n2. **Distribute Key**: Copy the public key to the remote server using `ssh-copy-id user@host` (which writes it to `~/.ssh/authorized_keys`).\n3. **Connect**: SSH using the private key: `ssh -i path_to_private_key user@host` and disable password authentication.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 434,
    "category": "Company Wise QA",
    "question": "How you manage backup in azure for Terraform and VM data?",
    "answer": "Managing backups for VM data and Terraform configurations:\n1. **VM Data**: Set up **Azure Backup Vaults** and apply scheduled backup policies.\n2. **Terraform remote state**: Enable **Blob Storage Versioning** and Soft Delete on the remote state container so state files can be restored to any historical point if corrupted.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 435,
    "category": "Company Wise QA",
    "question": "How you setup pipeline in ADO?",
    "answer": "Production implementation guide for: **Setup Pipeline In Ado** in CI/CD Pipeline Automation:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 436,
    "category": "Company Wise QA",
    "question": "Are you using build and release pipeline both?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 437,
    "category": "Company Wise QA",
    "question": "If you have to install Tomcat, how you would do using pipeline?",
    "answer": "To configure High Availability (HA) for a Tomcat application server:\n1. **Clustering**: Set up multiple Tomcat server instances across availability zones.\n2. **Session Replication**: Enable session sharing using Redis cache or Tomcat multicast clustering.\n3. **Load Balancing**: Place a Layer 7 load balancer (Application Gateway/Nginx) in front of the Tomcat cluster to perform health checks and route traffic.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 438,
    "category": "Company Wise QA",
    "question": "Load balancer and Application gateway?",
    "answer": "Here is a breakdown of the key concepts:\n• Azure Application Gateway is a Layer 7 load balancer that supports SSL termination, URL-based routing, cookie-based session affinity, and WAF protection.\n• Azure Load Balancer is a Layer 4 load balancer that distributes traffic based on IP, protocol, and port rules (highly performant and low-latency).\n• Release Gates: Evaluating health alerts or external APIs before proceeding with pipeline deployments.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 439,
    "category": "Company Wise QA",
    "question": "WHat are docker file and if you have to write for Tomcat bassed application tell the steps in docker file?",
    "answer": "To configure High Availability (HA) for a Tomcat application server:\n1. **Clustering**: Set up multiple Tomcat server instances across availability zones.\n2. **Session Replication**: Enable session sharing using Redis cache or Tomcat multicast clustering.\n3. **Load Balancing**: Place a Layer 7 load balancer (Application Gateway/Nginx) in front of the Tomcat cluster to perform health checks and route traffic.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 440,
    "category": "Company Wise QA",
    "question": "Command to check logs, running container?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 441,
    "category": "Company Wise QA",
    "question": "If we have to create access method where we do not need to provide credentials, how to do that?",
    "answer": "Production implementation guide for: **If We Have To Create Access Method Where We Do Not Need To Provide Credentials,  Do That** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 442,
    "category": "Company Wise QA",
    "question": "What is windows ADO?",
    "answer": "Windows ADO (Active Directory Objects) or Azure DevOps agent setups on Windows:\n1. Refers to configuring **Active Directory domain users, groups, and policies** on Windows instances to control authentication.\n2. In a DevOps context, it refers to setting up self-hosted agents on domain-joined Windows Server instances to run deployment pipelines targeting internal Windows applications.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 443,
    "category": "Company Wise QA",
    "question": "Hi all , Today i have attended and interview sharing you questions . What is the difference between a workspace and an environment in Terraform?",
    "answer": "Difference between Workspace and Environment in Terraform:\n1. **Terraform Workspaces**: Logical separation of state files within the same configuration directory. Ideal for temporary copies or quick tests.\n2. **Environments**: Physical separation of directory structures (e.g. `/dev`, `/prod`), using distinct backend configuration files. Recommended for long-lived enterprise environments to isolate access.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 444,
    "category": "Company Wise QA",
    "question": "Suppose you have a single file with 1000 lines of code and you need to run only one resource (e.g., a VNet). How would you do that?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 445,
    "category": "Company Wise QA",
    "question": "If you have created resources manually through the portal, how can you store them in a Terraform state file?",
    "answer": "To import manually created Azure resources into Terraform:\n1. **HCL Block**: Write the empty resource block in your HCL configuration: `resource \"azurerm_storage_account\" \"sa\" {}`.\n2. **Import command**: Run the import command: `terraform import azurerm_storage_account.sa /subscriptions/.../resourceGroups/...`.\n3. **Reconcile**: Run `terraform plan` and update your HCL block parameters to match the properties shown in the plan output.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 446,
    "category": "Company Wise QA",
    "question": "What is the architecture of the meta-argument in Terraform?",
    "answer": "Meta-arguments in Terraform are configuration parameters that modify how resources are created:\n1. **count**: Creates a specified number of resources: `count = 3`.\n2. **for_each**: Iterates over maps/sets, creating resources dynamically based on keys.\n3. **depends_on**: Declares explicit deployment dependencies.\n4. **lifecycle**: Configures lifecycle behavior (e.g., `prevent_destroy`).\n5. **provider**: Specifies provider aliases.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 447,
    "category": "Company Wise QA",
    "question": "What is the use of the terraform import command?",
    "answer": "The `terraform import` command is used to read existing cloud infrastructure created manually or via other tools and write its parameters to your `terraform.tfstate` file, bringing the resource under Terraform management.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 448,
    "category": "Company Wise QA",
    "question": "How can you prevent the accidental deletion of a resource in Terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 449,
    "category": "Company Wise QA",
    "question": "What is the process of provisioning infrastructure using Terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 450,
    "category": "Company Wise QA",
    "question": "What do you understand by version control? What tools have you used for it?",
    "answer": "Version control tracks and manages changes to software code over time:\n1. **Benefits**: Enables multi-developer collaboration, code reviews, audit history, and easy rollbacks of faulty code.\n2. **Git**: The industry standard distributed version control tool.\n3. **Platforms**: Remote platforms like GitHub, GitLab, and Azure Repos provide hosting, pull request workflows, and pipeline integrations.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 451,
    "category": "Company Wise QA",
    "question": "have you done security hardening in linux machine ?",
    "answer": "Linux is an open-source operating system kernel. I work with Debian-based (Ubuntu Server) and Red Hat-based (RHEL) distributions, configuring services, managing package installations (apt/dnf), and writing automation scripts.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 452,
    "category": "Company Wise QA",
    "question": "What is the basic structure of a Terraform configuration?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 453,
    "category": "Company Wise QA",
    "question": "What is the use of terraform fmt?",
    "answer": "The `terraform fmt` command formats Terraform configuration files (.tf) to adhere to standard HCL spacing, indentation, and alignment rules, ensuring codebase consistency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 454,
    "category": "Company Wise QA",
    "question": "Which operating systems have you worked on — Ubuntu or RHEL?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 455,
    "category": "Company Wise QA",
    "question": "Have you written Ansible playbooks for managing AKS?",
    "answer": "Yes, Ansible can be used to manage Kubernetes and AKS clusters:\n1. **Workload Management**: We write playbooks utilizing the `kubernetes.core.k8s` collection to define and apply resources like namespaces, ConfigMaps, Secrets, Deployments, and Services.\n2. **Helm Deployments**: We utilize the `kubernetes.core.helm` module to deploy and upgrade Helm charts (like Ingress Controllers or Prometheus agents) directly into AKS.\n3. **Post-Provisioning Configurations**: While Terraform is used to provision AKS clusters, Ansible is used to configure node VM parameters or run setup scripts inside the cluster once it is active.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 456,
    "category": "Company Wise QA",
    "question": "Have you worked with the Datadog monitoring tool?",
    "answer": "Monitoring: Setting up metrics and logging collection (e.g., Azure Monitor, AMA agent, Log Analytics) to track resource health.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 457,
    "category": "Company Wise QA",
    "question": "How did you receive alerts using Prometheus and Grafana?",
    "answer": "Here is a breakdown of the key concepts:\n• Prometheus is an open-source monitoring tool that scrapes metrics from target endpoints, stores time-series data, and triggers alerts via Alertmanager.\n• Grafana is an open-source visualization dashboard that connects to time-series databases like Prometheus or Azure Monitor to display real-time metrics.\n• Alert Notification: Configuring alert rules (like CPU > 80%) to notify administrators via Email, SMS, or webhooks (Slack/PagerDuty).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "BEE Solver Tech"
  },
  {
    "id": 458,
    "category": "Company Wise QA",
    "question": "Can you deploy an migrate from Azure to AWS? If yes or no, how and why?",
    "answer": "Migrating workloads from Microsoft Azure to Amazon Web Services (AWS):\n1. **Virtual Machines**: Use AWS Application Migration Service (AWS MGN) to continuously replicate block levels from Azure VMs to EC2.\n2. **Databases**: Use AWS Database Migration Service (DMS) for live database replication.\n3. **Code/IaC**: Update Terraform providers from `azurerm` to `aws`, adapt HCL code blocks, and migrate CI/CD targets.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 459,
    "category": "Company Wise QA",
    "question": "How can you store VM credentials in Azure Key Vault using terraform ?",
    "answer": "To store VM credentials securely in Key Vault via Terraform:\n1. Use `random_password` provider to generate a secure password.\n2. Create an `azurerm_key_vault_secret` resource, mapping the value to the generated password.\n3. Reference the secret parameter in the `admin_password` argument of the virtual machine resource.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 460,
    "category": "Company Wise QA",
    "question": "How can you access secrets stored in Azure Key Vault to access a application or on resources?",
    "answer": "Azure Key Vault is a secure secrets management service. We use it to store passwords, client secrets, and certificates. In pipelines, we link Key Vault secrets dynamically to variable groups so they are injected at runtime without hardcoding.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 461,
    "category": "Company Wise QA",
    "question": "You have modules for 3 environments. If you rename npr.tfvars, will Terraform still execute it?",
    "answer": "A Terraform module is a package of reusable Terraform configuration files in a directory. It allows you to group related infrastructure components together (like a VM, disk, and NIC) and instantiate them multiple times across environments (dev, test, prod) with different inputs.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 462,
    "category": "Company Wise QA",
    "question": "How many IPs are available in the 192.168.1.0/32 ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 463,
    "category": "Company Wise QA",
    "question": "i have taken 16 ip in a subnet, how many  IP addresses can be use?",
    "answer": "Disaster Recovery (DR): Designing failover systems in paired regions (e.g., via Azure Site Recovery) to ensure continuity during regional outages.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 464,
    "category": "Company Wise QA",
    "question": "You created an Azure Key Vault. what type of access will see in rbac ?",
    "answer": "Role-Based Access Control (RBAC) is the authorization system in Azure:\n1. **Core Concept**: Restricts access to resources based on assigned roles. It answers 'Who (Security Principal) can do What (Role definition) to Which resource (Scope)'.\n2. **Built-in Roles**: Owner (full access + delegate access), Contributor (full access except delegate), and Reader (view access only).\n3. **Best Practice**: Apply the principle of least privilege, assigning roles at the resource group or resource scope rather than the subscription level.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 465,
    "category": "Company Wise QA",
    "question": "SQL Database credentials are stored in Key Vault. You have Owner access on keyvault but still can't access them—why?",
    "answer": "SQL (Structured Query Language) is used to interact with relational databases. It helps in storing, retrieving, updating, and deleting data. Common SQL commands include SELECT, INSERT, UPDATE, DELETE, JOIN, and GROUP BY.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 466,
    "category": "Company Wise QA",
    "question": "Which Azure services have you worked with in your application?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 467,
    "category": "Company Wise QA",
    "question": "write  Terraform syntax to create an Azure Storage Account?",
    "answer": "Azure Storage Account: Secure cloud storage for blobs/files. Secured via Private Endpoints, SAS tokens, RBAC, and firewalls.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 468,
    "category": "Company Wise QA",
    "question": "What is a backend in Terraform and why is it used?",
    "answer": "A **Backend** in Terraform determines where the state file (`terraform.tfstate`) is stored. Local backends store it on disk. Remote backends (like Azure Blob Storage or S3) store state files in the cloud, enabling team collaboration, state locking, and secure storage.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 469,
    "category": "Company Wise QA",
    "question": "What is a Service Principal and service connection ?",
    "answer": "Service Connections in Azure DevOps connect pipelines to external services:\n1. **Role**: Establishes a secure connection to Azure subscriptions, AWS accounts, Docker registries, or SonarQube instances without exposing secrets.\n2. **Security**: Typically authenticated using an Azure Service Principal (using client secrets or federated credentials) with strict access bounds.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 470,
    "category": "Company Wise QA",
    "question": "have you worked on github action ?",
    "answer": "GitHub Actions is a CI/CD automation platform. It runs workflows defined in YAML files (`.github/workflows/`) triggered by GitHub events (pushes, PRs). Tasks are executed on hosted or self-hosted runners using pre-built community Actions.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 471,
    "category": "Company Wise QA",
    "question": "what all azure service you worked on ?",
    "answer": "Hexaware interview first round interview done\nInterview questions - 1. suppose there are 3 .tfvars file with name Dev.tfvars, staging.tfvars, prod.tfvars in same folder and i need to call on ly Prod.tfvars file, tell me the command.\n2. Steps to create selfhosted agent on local maching.\n3. Suppose i have configure Kevault on portal what would be by defualt permission will give to the user.\n4. what is Null resource.\n5. what is Data source\n6. what is module\n7. do you have scriptiong language experience like powershell.\n1. Introduce yourself",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 472,
    "category": "Company Wise QA",
    "question": "What azure bastion does ?",
    "answer": "3. I have VPC already created in the child module. Now write a terraform scrip to create a VM using that child module.  (Write in physical paper)\n4. Terraform provision.  How you will provision the whole infrastructure in azure.\n5. Azure repos / service connection\n6. How you will execute your terraform pipeline in Azure. (write yaml steps in physical paper)",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 473,
    "category": "Company Wise QA",
    "question": "Have you worked on Docker and Kubernetes ?",
    "answer": "Docker is a containerization platform that packages applications and dependencies into isolated container images sharing the host OS kernel.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 474,
    "category": "Company Wise QA",
    "question": "How you will integrate ACS/AKS in the infrastructure using terraform so that application et hosted and run on pods ?",
    "answer": "Production implementation guide for: **Will Integrate Acs/Aks In The Infrastructure Using Terraform So That Application Et Hosted And Run On Pods** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 475,
    "category": "Company Wise QA",
    "question": "Have you worked bash scripting?",
    "answer": "10. Write a bash script to find and remove old files from the virtual machine. (write script in physical paper)\n1.Explain your transition to devops\n2.Your day to day activities.\n3.What are the agile ceremonies\n4.How long is your sprint, how it starts.\n5.How do you setup pipeline..infra pipeline and app pipeline\n6.What is replicaset\n7.How do you manage external access to services in kubernetes.\n8.How do you reduce downtime during kubernetes deployment.\n9.Asked to write tf code to create Resource group.\n10.Have you used Azure key vault. Asked to write tf code to provision secrets in key vault and how will you access secrets using terraform.\n11.How do you deploy containers to AKS using Azure devops.\n12.How do you add storage to pods.\n13.What are the considerations in designing kubernetes cluster\nHaxaware second round interview given",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 476,
    "category": "Company Wise QA",
    "question": "questions -",
    "answer": "We manage production deployments by configuring automated pipelines, implementing Infrastructure as Code templates, and enforcing security practices.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 477,
    "category": "Company Wise QA",
    "question": "suppose we need to create 100 server and want to install different-different Middleware in to some set of server how will you do?",
    "answer": "4. how much type of provisioner you have used in terraform.\n6. how will you call values in parrent module from child module.\n7. suppose we have created 100 numbers of instances and we want to change name of one instance's name how will you do",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Hexaware"
  },
  {
    "id": 478,
    "category": "Company Wise QA",
    "question": "1- what's your current profile and day to day activities?",
    "answer": "DevOps Engineer profile and daily activities:\n1. **Infrastructure**: Provisioning VNETs, subnets, AKS, storage, and SQL resources using Terraform.\n2. **Pipelines**: Creating and maintaining YAML CI/CD pipelines in Azure DevOps, configuring variable groups, and troubleshooting build failures.\n3. **Monitoring**: Reviewing Prometheus alerts, updating Grafana dashboards, and inspecting VM metric utilization.\n4. **Security**: Rotating Key Vault secrets and running SAST compliance scans.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 479,
    "category": "Company Wise QA",
    "question": "2- started with GCP IAM?",
    "answer": "Google Cloud Platform IAM (Identity and Access Management) access control controls:\n1. **Structure**: Grants access permissions based on WHO (users, Google groups, service accounts) has WHAT role (Viewer, Editor, Owner, or custom roles) on WHICH GCP resource (projects, buckets, VMs).\n2. **Best Practice**: Follow the principle of least privilege, use service accounts for VM-to-API auth, and assign roles to Groups rather than individual user accounts.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 480,
    "category": "Company Wise QA",
    "question": "3- I have two resources one in vpc A and one in VPC B but the organisation has different how can I communicate from A to B resources despite having in different orgs?",
    "answer": "Comparing **Erent How Can I Communicate From A To B Resources Despite Having In** and **Second Option** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erent How Can I Communicate From A To B Resources Despite Having In**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent How Can I Communicate From A To B Resources Despite Having In** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 481,
    "category": "Company Wise QA",
    "question": "4- hierarchy architecture in GCP?",
    "answer": "The GCP Resource Hierarchy is organized logically in a tree-like structure to manage access control, policies, and billing:\n1. **Organization (Root)**: Represents the entire company. Policies applied here inherit down to all resources. Managed via Google Workspace or Cloud Identity.\n2. **Folders**: Optional grouping mechanism to mirror department structures (e.g. Engineering, Finance). Can contain subfolders.\n3. **Projects**: The core grouping level. All cloud resources (VMs, databases) must belong to a project. Projects are the billing and IAM API boundary.\n4. **Resources**: The actual services (Compute Engine VMs, Cloud Storage buckets) residing inside projects.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 482,
    "category": "Company Wise QA",
    "question": "5- I am having owner role in project and having object viewer on GCP object which will have precedence?",
    "answer": "Here is a breakdown of the key concepts:\n• Google Cloud Platform (GCP): Google's suite of cloud computing services, managed via GCP IAM and Console.\n• DevOps Projects: Building automated pipelines, provisioning infrastructure via IaC, and monitoring services.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 483,
    "category": "Company Wise QA",
    "question": "6- helm charts in kubernetes?",
    "answer": "Helm is the package manager for Kubernetes applications:\n1. **Helm Charts**: Uses templates (Charts) to package Kubernetes resource manifests (Deployments, Services, ConfigMaps) together.\n2. **Releases**: Manages deployments, environment-specific configurations via `values.yaml` files, and supports rolling back configurations.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 484,
    "category": "Company Wise QA",
    "question": "7- deployment type in application terms like blue green canary recreate?? How do you define and what we use when?",
    "answer": "Production implementation guide for: **7- Deployment Type In Application Terms Like Blue Green Canary Recreate  Define And What We Use When** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 485,
    "category": "Company Wise QA",
    "question": "8- like I deploy one pod but that went in pending state I am having resource capacity in node....how will you troubleshoot and what is possible causes for this happeing?",
    "answer": "When a pod is stuck in a `Pending` state despite apparent resource capacity, troubleshoot using these steps:\n1. **Run describe**: Execute `kubectl describe pod <pod-name>` and scroll down to the 'Events' section. This will show the scheduler's decision reasons.\n2. **Common Causes**:\n   * **Resource Constraints**: Pod requires more CPU/Memory than any single node has available (CPU/Memory Requests).\n   * **Taints and Tolerations**: The nodes have taints (e.g. `node-role.kubernetes.io/master:NoSchedule`) and the pod lacks matching tolerations.\n   * **Node Selector / Affinity Mismatch**: Pod specifies a `nodeSelector` or `nodeAffinity` for labels (e.g., `gpu=true`) that do not exist on any node.\n   * **Unbound PVC**: Pod requires a PersistentVolumeClaim (PVC) that is not yet bound to a PersistentVolume (PV).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 486,
    "category": "Company Wise QA",
    "question": "9- difference between cloud run and app engine in GCP?",
    "answer": "10- managed instance group functionality apart from scaling feature.\n11- VPN types in GCP.\n12- what is VPC-SC why we use it and how will you configure and tell me IAM roles which should you have to implement this...\n13- in docker file what security measure will you take while creating dockerfile and I don't have any tool to scan it....tell me best security measure...\n14- terraform refresh and terraform plan command difference.\n15- how can I bring portal created resource in contorl of terraform state if it's create manually brief me steps...\n16- what does terraform refresh explicitly does it sync code with sate or state with portal config or code and code and portal..\n17- pipeline process how do you use tfsec and how it gives output? Do you store these...",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 487,
    "category": "Company Wise QA",
    "question": "18- for best practices I have put db creds in secret manager in GCP or key vault in azure how will you integrate with terraform and pipeline?",
    "answer": "Best practice for integrating database credentials using secret managers (e.g. GCP Secret Manager or Azure Key Vault) with Terraform and CI/CD:\n1. **Store Secrets Dynamically**: Store credentials in the secret vault manually or via a secure bootstrapping step.\n2. **Terraform Data Sources**: In HCL, retrieve the secrets at runtime using data blocks:\n   ```hcl\n   data \"azurerm_key_vault_secret\" \"db_password\" {\n     name         = \"db-admin-pass\"\n     key_vault_id = var.vault_id\n   }\n   ```\n3. **Pipeline Service Connection**: Authenticate the pipeline using Service Connections/Managed Identities (OIDC). Avoid storing access keys in Git or pipeline variables.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 488,
    "category": "Company Wise QA",
    "question": "19- dynamic block why we use and import block how differ from cmd?",
    "answer": "20- for authentication purpose why do we create service connection between azure devops and azure portal...steps please\n21- in alerting what native services you use while setting up in GCP and azure both.\n22- how do you access pods\n23- network topologies like service mesh linkerd CNI in kubernetes which we opt in which scenario...\n24- what is stateful set and why we use write down yaml for it.\n25- daemon set and deployment difference what are the features have deployment.\n26- docker networking difference between overlay and bridge....\n27- what is pub/sub and cloud function in GCP and how we utilize this in which situation.\n28- which kind of images we take while crreation docker file as per security aspect and weighted aspect.\n29- how do you tackle conflict in git repo.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 489,
    "category": "Company Wise QA",
    "question": "30- like I'm the approver of cd pipeline and I'm on leave now your task is to ensure to deploy code using pipeline with my approval and I'm outside not available for next 2 hrs in such situation how will manage???",
    "answer": "31- difference between CI and CD and pipeline writing which we use why like task jobs stages.\n32- write a yaml which includes only main branch trigger with condition and having dependency on previous stage or task or job whatever suits you step wise mention what will use why and integrate with tfsec and key valut along with help me to understand the repo folder structure....\n33- when I'll use data block or do I have any other alternative and reduce the file size of my code by writing optimum code....",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Sapient"
  },
  {
    "id": 490,
    "category": "Company Wise QA",
    "question": "explain vertical/horizontal pod autoscaling",
    "answer": "Scaling adjustments optimize compute resources based on application demand:\n1. **Vertical Scaling (Scale Up)**: Upgrading instance hardware sizes (CPU, Memory) of individual hosts or VM plans.\n2. **Horizontal Scaling (Scale Out)**: Adding more instances. In AKS, this is automated using the Horizontal Pod Autoscaler (HPA) for pods and the Cluster Autoscaler (CA) to dynamically provision VM nodes under load.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 491,
    "category": "Company Wise QA",
    "question": "explain branching strategy",
    "answer": "In DevOps, we utilize specific branching strategies based on release frequency and team size:\n1. **Trunk-Based Development (Recommended for CI/CD)**: Developers integrate code changes frequently (multiple times a day) into a single central branch called 'main' or 'trunk'. Branches are short-lived (less than a day), and feature flags are used to toggle code paths in production. This maximizes collaboration and avoids massive merge conflicts.\n2. **GitFlow**: A robust, structured strategy with long-lived branches:\n   * `main`: Represents production-ready code.\n   * `develop`: Integrates work from all feature branches.\n   * `feature/*`: Short-lived branches created from `develop` for new features.\n   * `release/*`: Created from `develop` to prepare for production, allowing bug fixing before merging to `main` and `develop`.\n   * `hotfix/*`: Created from `main` to address critical production bugs quickly, then merged back into both `main` and `develop`.\n3. **GitHub Flow**: A simplified GitFlow version where everything in `main` is deployable. Feature branches are branched off `main`, tested, peer-reviewed via Pull Requests (PRs), and merged directly back to `main` for instant deployment.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 492,
    "category": "Company Wise QA",
    "question": "how to attach voulume to container",
    "answer": "To attach a storage volume to a Docker container:\n1. **Bind Mounts**: Maps a specific host path to a container path:\n   `docker run -v /host/path:/container/path nginx`\n2. **Named Volumes**: Docker-managed storage that persists independently of the container:\n   `docker volume create my-vol`\n   `docker run -v my-vol:/var/lib/mysql mysql`\n3. **Compose YAML configuration**:\n   ```yaml\n   services:\n     web:\n       image: nginx\n       volumes:\n         - /host/path:/usr/share/nginx/html\n   ```",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 493,
    "category": "Company Wise QA",
    "question": "how do you manage secretes in azure pipeline",
    "answer": "We manage secrets securely in Azure Pipelines using a zero-secret-exposure principle:\n1. **Azure Key Vault Integration (Recommended)**: Secrets are stored in Azure Key Vault. We link Key Vault to the pipeline by creating a **Variable Group** under the Library tab, authorized via an Azure Resource Manager (ARM) service connection. Secrets are dynamically loaded during pipeline execution.\n2. **Pipeline Secret Variables**: Stored directly in the pipeline configuration by marking the variable as a 'Secret' (using the padlock icon). This encrypts the value, masks it in the console logs (`***`), and prevents it from being exported.\n3. **Azure Key Vault Task**: Directly calling the `AzureKeyVault@2` task inside the YAML file to download specific secrets dynamically during a specific build stage.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 494,
    "category": "Company Wise QA",
    "question": "how to integarate external app in cicd",
    "answer": "Integrating an external application (e.g. SonarQube, Snyk, Datadog, Slack, or ServiceNow) into a CI/CD pipeline involves:\n1. **Service Connections & API Tokens**: Generate secure API tokens, OAuth keys, or service account credentials in the external application and register them as secure service connections in Azure DevOps or GitHub Secrets.\n2. **Pipeline Tasks / Plugins**: Leverage native pipeline extensions or CLI tools inside the pipeline runner (e.g. `SonarQubePrepare@5`, `SnykSecurityScan@1`, or running custom shell scripts using `curl`/CLI commands).\n3. **Webhook Notifications**: Configure build/deploy stage webhooks to send build status payload updates to external apps (like Slack channels or ServiceNow change management APIs) to automate change tickets and notifications.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 495,
    "category": "Company Wise QA",
    "question": "how do you handle conflicts means any issue occurs then how you will communicate with you client and how u will manage",
    "answer": "When handling technical or scheduling conflicts/incidents in a project:\n1. **Identification & Isolation**: Identify the root cause (using log analysis, monitoring metrics, or Git bisect) and contain/roll back the issue immediately to restore stable services for the client.\n2. **Transparent Communication**: Communicate with the client promptly. Provide a clear, non-jargon explanation of:\n   * What the issue is.\n   * What services are affected.\n   * The immediate workaround/rollback action taken.\n   * Estimated time to recovery (ETR).\n3. **Remediation & Post-Mortem**: Document the incident, resolve the root cause permanently in development, and conduct a blameless post-mortem with the client to implement preventive guardrails (like automated unit tests, pipeline checks, or monitoring alerts).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 496,
    "category": "Company Wise QA",
    "question": "what is terraform module",
    "answer": "Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp:\n1. **Declarative**: Allows DevOps engineers to define cloud resources (networks, VMs, databases, containers) using a high-level configuration language (HCL).\n2. **Execution State**: Generates execution plans (`terraform plan`), provisions resource states, and tracks changes in a state file (`terraform.tfstate`) to manage drift.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 497,
    "category": "Company Wise QA",
    "question": "what is provisioners and types of provisioners",
    "answer": "Terraform provisioners execute scripts locally or on remote servers during resource creation/destruction:\n1. **local-exec**: Runs a script on the local machine executing the Terraform command (e.g. running an Ansible playbook or registering DNS locally).\n2. **remote-exec**: Establishes SSH/WinRM connection to the newly created VM and runs command lines on that VM.\n3. **file**: Copies files or directories from the local machine to the newly created VM.\n*Note: Use provisioners only as a last resort; prefer cloud-init, VM extensions, or Ansible for configuration management.*",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 498,
    "category": "Company Wise QA",
    "question": "what is metrics",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 499,
    "category": "Company Wise QA",
    "question": "how to configure Grafana and Prometheus",
    "answer": "Step-by-step setup to configure Prometheus and Grafana for monitoring:\n1. **Deploy Prometheus**: Deploy Prometheus server (often via Helm: `kube-prometheus-stack` on Kubernetes) to scrape metric targets.\n2. **Configure Scrape Configs**: Add job targets in `prometheus.yml` pointing to host exporter endpoints (e.g., node-exporter on port 9100).\n3. **Deploy Grafana**: Install Grafana, log in to the web console, and add 'Prometheus' as a Data Source pointing to `http://prometheus-server-ip:9090`.\n4. **Import Dashboards**: Create dashboards or import community templates (e.g., Dashboard ID `1860` for Node Exporter) to display CPU, RAM, and Disk metrics.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 500,
    "category": "Company Wise QA",
    "question": "how Grafana uses Prometheus",
    "answer": "Here is a breakdown of the key concepts:\n• Prometheus is an open-source monitoring tool that scrapes metrics from target endpoints, stores time-series data, and triggers alerts via Alertmanager.\n• Grafana is an open-source visualization dashboard that connects to time-series databases like Prometheus or Azure Monitor to display real-time metrics.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 501,
    "category": "Company Wise QA",
    "question": "why we need Grafana",
    "answer": "Prometheus scrapes performance metrics from target servers and stores them as time-series data. Grafana connects to Prometheus as a data source and queries the metrics to display them on real-time, interactive dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 502,
    "category": "Company Wise QA",
    "question": "what is alert manager and are u using it?",
    "answer": "**Alertmanager** is a component of Prometheus that handles alerts sent by Prometheus server:\n1. **Deduplication & Grouping**: Groups related alerts into a single notification to prevent email/chat flooding (alert fatigue).\n2. **Inhibition & Silencing**: Suppresses alerts if a parent dependency alert is already active (e.g., silencing node CPU alerts if the entire VM is unreachable).\n3. **Routing**: Routes alerts to notification channels (Email, Slack, PagerDuty, Webhooks) based on severity labels.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Deloitte"
  },
  {
    "id": 503,
    "category": "Company Wise QA",
    "question": "what are the monitoring tool you used and how do you use it?",
    "answer": "Monitoring: Setting up metrics and logging collection (e.g., Azure Monitor, AMA agent, Log Analytics) to track resource health.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 504,
    "category": "Company Wise QA",
    "question": "types of load balancer and difference between them?",
    "answer": "Load balancers and HA/DR strategies:\n1. **L4 vs L7**: Layer 4 load balancers (Azure Load Balancer) route traffic based on TCP/UDP ports. Layer 7 load balancers (Azure App Gateway/Front Door) inspect HTTP headers, supporting SSL termination, WAF, and URL path routing.\n2. **High Availability**: Deploy replica workloads across multiple Availability Zones with auto-scaling to prevent single points of failure.\n3. **Disaster Recovery**: Set up active-passive replication to a paired region (e.g., via Azure Site Recovery) with DNS failover (Traffic Manager) to ensure continuity during regional outages.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 505,
    "category": "Company Wise QA",
    "question": "what are terraform provider?",
    "answer": "Terraform providers are plugins that act as translators between the Terraform core engine and target cloud platform APIs (like AzureRM, AWS, or GCP). They translate declarative HCL configurations into actual API calls to create, update, or delete resources.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 506,
    "category": "Company Wise QA",
    "question": "how do you manage state file?",
    "answer": "Production implementation guide for: **Manage State File** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 507,
    "category": "Company Wise QA",
    "question": "how you manage secrets in terraform?",
    "answer": "Production implementation guide for: **Manage Secrets In Terraform** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 508,
    "category": "Company Wise QA",
    "question": "have you worked on Grafana and Prometheus and how it works?",
    "answer": "Prometheus scrapes performance metrics from target servers and stores them as time-series data. Grafana connects to Prometheus as a data source and queries the metrics to display them on real-time, interactive dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 509,
    "category": "Company Wise QA",
    "question": "do you know any shell scripting - powershell / python?",
    "answer": "Python is a high-level, interpreted programming language known for its simple syntax and readability. It is commonly used in web development, automation, data science, AI, and machine learning.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 510,
    "category": "Company Wise QA",
    "question": "can you tell me about any networking issues?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 511,
    "category": "Company Wise QA",
    "question": "have you worked on Linux or windows machine?",
    "answer": "Linux is an open-source operating system kernel. I work with Debian-based (Ubuntu Server) and Red Hat-based (RHEL) distributions, configuring services, managing package installations (apt/dnf), and writing automation scripts.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 512,
    "category": "Company Wise QA",
    "question": "how you can do monitoring on Linux machine?",
    "answer": "Production implementation guide for: **Can Do Monitoring On Linux Machine** in Linux Systems Administration:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 513,
    "category": "Company Wise QA",
    "question": "what is modules in ansible",
    "answer": "Ansible modules are units of work executed on remote servers. Examples include `apt` to install packages, `file` to configure directories, and `copy` to transfer scripts, executing declarative operations on host targets.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 514,
    "category": "Company Wise QA",
    "question": "what is use of roles ?",
    "answer": "Ansible Roles are a directory structure containing tasks, templates, handlers, and variables. They allow modular packaging of configuration playbooks for reuse.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 515,
    "category": "Company Wise QA",
    "question": "Why we use roles as we have plybook to automate task",
    "answer": "Why we organize Ansible code into Roles instead of using a single large Playbook:\n1. **Modularity**: Roles separate configurations into clean directory folders (tasks, vars, templates, files), making complex deployments maintainable.\n2. **Reusability**: You can write a role once (e.g. `install_mysql`) and call it across multiple distinct playbooks or import it from Ansible Galaxy.\n3. **Variables Separation**: Allows separating configuration data (`defaults/` and `vars/`) from application logic, making it easy to run the same playbook across dev, staging, and production.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 516,
    "category": "Company Wise QA",
    "question": "you have a playbook and need to run a single task, how can you run ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 517,
    "category": "Company Wise QA",
    "question": "how to run playbook on single server ?",
    "answer": "Production implementation guide for: **Run Playbook On Single Server** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 518,
    "category": "Company Wise QA",
    "question": "user of handlers ?",
    "answer": "**Handlers** in Ansible are special tasks that run only when notified by another task:\n1. **Trigger Condition**: Handlers trigger only when a task performs a change (returns status `changed`) and has a matching `notify` key.\n2. **Example**: Restarting a web server configuration change:\n   ```yaml\n   tasks:\n     - name: Update Nginx Config\n       copy:\n         src: nginx.conf\n         dest: /etc/nginx/nginx.conf\n       notify: Restart Nginx\n   handlers:\n     - name: Restart Nginx\n       service:\n         name: nginx\n         state: restarted\n   ```\n3. **Execution**: Handlers run at the very end of the play, preventing services from restarting multiple times during execution.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 519,
    "category": "Company Wise QA",
    "question": "what is modules in ansible ?",
    "answer": "Ansible modules are units of work executed on remote servers. Examples include `apt` to install packages, `file` to configure directories, and `copy` to transfer scripts, executing declarative operations on host targets.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 520,
    "category": "Company Wise QA",
    "question": "how to run third party application using ansible  ?",
    "answer": "Production implementation guide for: **Run Third Party Application Using Ansible** in Ansible Configuration Management:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 521,
    "category": "Company Wise QA",
    "question": "prerequsite on setting of worker node and and master node?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 522,
    "category": "Company Wise QA",
    "question": "write the playbook to install nginx ?",
    "answer": "An Ansible playbook script to install and start Nginx on Ubuntu:\n```yaml\n- name: Configure Web Server\n  hosts: webservers\n  become: yes\n  tasks:\n    - name: Install Nginx\n      apt:\n        name: nginx\n        state: present\n        update_cache: yes\n    - name: Start Nginx Service\n      service:\n        name: nginx\n        state: started\n        enabled: yes\n```",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 523,
    "category": "Company Wise QA",
    "question": "how will you check reliability of your infrastructure?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 524,
    "category": "Company Wise QA",
    "question": "how will you add more security features in cicd?",
    "answer": "5. tell me a scenario where you have optimised a infrastructure using terraform\n6. tell me a scenario where you have troubleshoot a problem in azure cloud",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 525,
    "category": "Company Wise QA",
    "question": "have you worked on Grafana and Prometheus?",
    "answer": "Here is a breakdown of the key concepts:\n• Prometheus is an open-source monitoring tool that scrapes metrics from target endpoints, stores time-series data, and triggers alerts via Alertmanager.\n• Grafana is an open-source visualization dashboard that connects to time-series databases like Prometheus or Azure Monitor to display real-time metrics.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 526,
    "category": "Company Wise QA",
    "question": "if customer want to change the version of terraform how will you assess/estimate the changes?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 527,
    "category": "Company Wise QA",
    "question": "What are the types of load balancers?",
    "answer": "Azure Load Balancer is a Layer 4 load balancer that distributes traffic based on IP, protocol, and port rules (highly performant and low-latency).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 528,
    "category": "Company Wise QA",
    "question": "What is the difference between ASG and NSG?",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 529,
    "category": "Company Wise QA",
    "question": "What is the lifecycle of Terraform?",
    "answer": "The Terraform lifecycle consists of:\n1. **terraform init**: Initializes backend storage and downloads providers.\n2. **terraform plan**: Dry-run check showing changes.\n3. **terraform apply**: Provisions resources in the cloud and writes `terraform.tfstate`.\n4. **terraform destroy**: Removes all managed resources.\n*Also refers to the `lifecycle` block inside resources: `create_before_destroy`, `prevent_destroy`, and `ignore_changes`.*",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 530,
    "category": "Company Wise QA",
    "question": "How do you maintain different workspaces in Terraform?",
    "answer": "Comparing **Erent Workspaces In Terraform** and **Second Option** in Terraform Infrastructure as Code (IaC) contexts:\n\n1. **Core Architecture**:\n   * **Erent Workspaces In Terraform**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent Workspaces In Terraform** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 531,
    "category": "Company Wise QA",
    "question": "Can we implement NSG on VNet, Subnet, or at Virtual Machine level?",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 532,
    "category": "Company Wise QA",
    "question": "How do you reduce the size of a Dockerfile?",
    "answer": "Docker is a containerization platform that packages applications and dependencies into isolated container images sharing the host OS kernel.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 533,
    "category": "Company Wise QA",
    "question": "What is the use of CMD in Docker?",
    "answer": "Docker is a platform for building, running, and shipping containers. It packages applications and their dependencies into immutable container images, ensuring consistency across development and production environments.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 534,
    "category": "Company Wise QA",
    "question": "What does the output block in Terraform do?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 535,
    "category": "Company Wise QA",
    "question": "How do you manage manually created resources in your Terraform pipeline?",
    "answer": "draw architect diagram. Question number\n2 what is the github workflow, dispatcher\n3 how you are going to connect the subnets. 4. draw Vnet diagram and code in a Terraform.\n5 described git hub pipeline and write yaml code.\n6. What is the child parents approach, how you are going to use in TFvars in parent approaching things in nested block.\n7. What is the availability is zones.\n8. Kubernates architecture.\n9. Kubernates Pcv and pv",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Persistent"
  },
  {
    "id": 536,
    "category": "Company Wise QA",
    "question": "how we can connect to vpn securely ?",
    "answer": "To connect to an Azure network securely using a VPN, implement one of the following methods:\n1. **Point-to-Site (P2S) VPN (For Remote Users)**: Connects individual developer machines securely to an Azure VNet. Configure the Azure VPN Gateway with an Address Pool, use **OpenVPN** or SSTP protocols, and authenticate users via **Microsoft Entra ID with Multi-Factor Authentication (MFA)** or client certificates.\n2. **Site-to-Site (S2S) VPN (For On-Premises Office/Datacenter)**: Connects an entire physical site to Azure. Establish a secure **IPsec/IKE tunnel** between your local firewall (Customer Gateway) and the Azure VPN Gateway over the public internet using pre-shared keys (PSK).\n3. **Azure ExpressRoute (Enterprise Dedicated Access)**: For environments requiring maximum security and reliability, bypass the public internet entirely using a dedicated private connection through a connectivity provider.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 537,
    "category": "Company Wise QA",
    "question": "how you applied nsg in your network?",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 538,
    "category": "Company Wise QA",
    "question": "did you implement firewall with nsg?",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 539,
    "category": "Company Wise QA",
    "question": "did you added any load balancer in your architecture?",
    "answer": "Yes, we have implemented a multi-tiered load balancing architecture to ensure high availability, zero-downtime deployments, and robust security:\n1. **Layer 7 Public Ingress (Application Gateway / Ingress Controller)**: We deploy an Azure Application Gateway (or Nginx Ingress) as our primary entry point. This manages external SSL/TLS offloading, path-based routing (e.g. routing `/api` vs `/static` requests), and Web Application Firewall (WAF) protection to defend against vulnerabilities.\n2. **Layer 4 Internal Traffic (Azure Standard Load Balancer)**: Deployed under the hood by Kubernetes (AKS) to distribute raw TCP connections across our worker node instances.\n3. **Global DNS Routing (Azure Front Door / Traffic Manager)**: Deployed to route user traffic globally to the nearest healthy active-active regional endpoint.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 540,
    "category": "Company Wise QA",
    "question": "what all reosurces you used to enhance the security?",
    "answer": "In our DevOps architecture, we secure the cloud perimeter and pipelines using several layers:\n1. **Secrets Governance**: We utilize **Azure Key Vault** to store and dynamically reference passwords, connection strings, and certificates, completely eliminating hardcoded secrets in configurations.\n2. **Network Security**: We isolate workloads in private subnets, restrict public ports using **Network Security Groups (NSGs)**, and deploy **Azure Bastion** for secure SSH/RDP access without exposing public IPs.\n3. **Data Security**: We implement **Private Endpoints (Azure Private Link)** for Azure SQL and Storage Accounts to ensure traffic travels exclusively over the private VNet.\n4. **CI/CD Compliance**: We run static security scans (`tfsec`, `Checkov`, and `SonarQube`) on Terraform and application files during build pipelines before deployment.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 541,
    "category": "Company Wise QA",
    "question": "can you tell me different between service endpoints and private endpoints?",
    "answer": "Difference between Service Endpoints and Private Endpoints in Azure:\n1. **Service Endpoints**: Keeps the PaaS resource's public IP address, routing traffic over the Microsoft backbone. Requires configuring PaaS firewalls to accept VNET traffic.\n2. **Private Endpoints**: Assigns a private IP address from your subnet directly to the PaaS service via Private Link, completely disabling public IP access.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 542,
    "category": "Company Wise QA",
    "question": "can you explain me the role of azure bastian in network security?",
    "answer": "**Azure Bastion** plays a crucial role in network security by eliminating the need for public IPs on virtual machines:\n1. **Zero Public Entry Points**: VMs are placed in private subnets with Port 22 (SSH) and 3389 (RDP) blocked from the public internet.\n2. **Web-Based Tunneling**: Provides secure, seamless SSH/RDP access to VMs directly within the Azure Portal over SSL/HTTPS (Port 443) using any modern web browser.\n3. **Mitigates Attack Surface**: Replaces traditional jumpboxes, eliminating the administrative overhead of managing, patching, and auditing custom firewall rules on public-facing gateways.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 543,
    "category": "Company Wise QA",
    "question": "can you elobrate on availability zones in azure?",
    "answer": "**Availability Zones** in Azure are physically separate datacenters within a single geographic region:\n1. **Fault Isolation**: Each zone is equipped with independent power, cooling, and networking infrastructure. If one zone suffers an outage, the other zones remain fully operational.\n2. **High Availability SLA**: Deploying VMs or AKS node pools across at least two Availability Zones increases the uptime SLA to 99.99%.\n3. **Workload Distribution**: We utilize zone-redundant services (e.g., Azure Application Gateway, Azure SQL, zone-redundant storage) to automatically replicate and distribute traffic across zones.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 544,
    "category": "Company Wise QA",
    "question": "have you used function app?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 545,
    "category": "Company Wise QA",
    "question": "what is role of azure function app?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 546,
    "category": "Company Wise QA",
    "question": "which resource we can use to distrubte the content static & dynamic?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 547,
    "category": "Company Wise QA",
    "question": "have you used azure app service?",
    "answer": "Here is a breakdown of the key concepts:\n• Azure App Service: A PaaS hosting service for web apps and APIs that supports autoscaling, SSL, and staging slots.\n• Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 548,
    "category": "Company Wise QA",
    "question": "did you worked with aws? what all resources you have used in aws?",
    "answer": "AWS (Amazon Web Services) is a public cloud provider. I use core services like EC2 (compute), S3 (object storage), VPC (networking), IAM (access control), EKS (Kubernetes), and CloudWatch (monitoring).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 549,
    "category": "Company Wise QA",
    "question": "have you worked on gcp? what all resources you have used in gcp?",
    "answer": "GCP (Google Cloud Platform) is a public cloud provider. I use services like Compute Engine (VMs), GKE (Kubernetes), Cloud Storage, VPC networks, and IAM roles.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 550,
    "category": "Company Wise QA",
    "question": "how many years of experience you have in terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 551,
    "category": "Company Wise QA",
    "question": "did you used terraform taint?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 552,
    "category": "Company Wise QA",
    "question": "did you get the chance to use terraform import?",
    "answer": "The `terraform import` command is used to read existing cloud infrastructure created manually or via other tools and write its parameters to your `terraform.tfstate` file, bringing the resource under Terraform management.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 553,
    "category": "Company Wise QA",
    "question": "I have created a resources in azure and want to keep the state file in aws?",
    "answer": "The Terraform state file is created automatically when you run 'terraform apply' for the first time and successfully provision resources. Running 'terraform init' or 'terraform plan' does not create a state file (except in remote backends where an empty state reference may be initialized).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 554,
    "category": "Company Wise QA",
    "question": "have you encoured any errors in terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 555,
    "category": "Company Wise QA",
    "question": "what happeens when we run terraform init?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 556,
    "category": "Company Wise QA",
    "question": "can you write a code for application gateway in terraform?",
    "answer": "Here is a breakdown of the key concepts:\n• Azure Application Gateway is a Layer 7 load balancer that supports SSL termination, URL-based routing, cookie-based session affinity, and WAF protection.\n• Release Gates: Evaluating health alerts or external APIs before proceeding with pipeline deployments.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 557,
    "category": "Company Wise QA",
    "question": "can you write a code for virtual machine in terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 558,
    "category": "Company Wise QA",
    "question": "have you also used modules, can you explain the folder structure of modules?",
    "answer": "A Terraform module folder typically contains: `main.tf` (resource definitions), `variables.tf` (input variable declarations), and `outputs.tf` (output values). You structure them in a subfolder and call them using: module \"name\" { source = \"./modules/vnet\" ... }",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 559,
    "category": "Company Wise QA",
    "question": "why you're using for_each, did you also used count?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 560,
    "category": "Company Wise QA",
    "question": "how you call the modules in terraform?",
    "answer": "Production implementation guide for: **Call The Modules In Terraform** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 561,
    "category": "Company Wise QA",
    "question": "you have also worked on azure devops?",
    "answer": "DevOps is a set of practices combining software development (Dev) and IT operations (Ops) to shorten the systems development lifecycle and provide continuous delivery of high-quality software.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 562,
    "category": "Company Wise QA",
    "question": "can you explain the end to end flow how to deploy terraform in your pipeline?",
    "answer": "Production implementation guide for: **Can You Explain The End To End Flow  Deploy Terraform In Your Pipeline** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 563,
    "category": "Company Wise QA",
    "question": "do you remeember az cli command to create app registrations?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 564,
    "category": "Company Wise QA",
    "question": "what are the steps in the ci pipeline for terraform deployment?",
    "answer": "check terraform is installed or not\ncheckout to that particular directory\nsecurity checkups --> terraform init plan --> manual approval --> terraform init apply",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 565,
    "category": "Company Wise QA",
    "question": "what are the steps in ci pipeline as you know there is code commit?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 566,
    "category": "Company Wise QA",
    "question": "what is steps to generate artifacts?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 567,
    "category": "Company Wise QA",
    "question": "which package types you have used in your CD pipelines?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 568,
    "category": "Company Wise QA",
    "question": "which langauges are you well versed with?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "EY"
  },
  {
    "id": 569,
    "category": "Company Wise QA",
    "question": "What are the differences between a Managed Identity and a Service Principal in Azure?",
    "answer": "Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 570,
    "category": "Company Wise QA",
    "question": "What is the Hub and Spoke network topology in Azure?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 571,
    "category": "Company Wise QA",
    "question": "Is it possible to connect a Hub to a Spoke without using VNet Peering?",
    "answer": "VNET Peering securely connects two Azure Virtual Networks (VNETs):\n1. **Private Routing**: Communication flows over Microsoft's private global backbone using private IP addresses. Traffic never goes over the public internet.\n2. **Setup**: Requires configuring two uni-directional peering links (VNET-A to VNET-B, and VNET-B to VNET-A) with Gateway Transit options for shared resources.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 572,
    "category": "Company Wise QA",
    "question": "Can you describe some firewall rules you have configured or worked on in Azure?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 573,
    "category": "Company Wise QA",
    "question": "What is the Application Layer (Layer 7), and how does it function?",
    "answer": "Production implementation guide for: **What Is The Application Layer (Layer 7), And How Does It Function** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 574,
    "category": "Company Wise QA",
    "question": "Why do we use an Application Load Balancer like Azure Application Gateway?",
    "answer": "Here is a breakdown of the key concepts:\n• Azure Application Gateway is a Layer 7 load balancer that supports SSL termination, URL-based routing, cookie-based session affinity, and WAF protection.\n• Azure Load Balancer is a Layer 4 load balancer that distributes traffic based on IP, protocol, and port rules (highly performant and low-latency).\n• Release Gates: Evaluating health alerts or external APIs before proceeding with pipeline deployments.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 575,
    "category": "Company Wise QA",
    "question": "What is PIM (Privileged Identity Management), and why is it important?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 576,
    "category": "Company Wise QA",
    "question": "If a user is assigned access at the Management Group level, can they access all subscriptions under it? How can we restrict access to specific subscriptions?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 577,
    "category": "Company Wise QA",
    "question": "Suppose there are three VNets: A, B, and C. VNet A is peered with VNet B, and VNet B is peered with VNet C. Can VNet A communicate directly with VNet C?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Global Logic"
  },
  {
    "id": 578,
    "category": "Company Wise QA",
    "question": "How do you configure NFS (Network File System)?",
    "answer": "Production implementation guide for: **Configure Nfs (Network File System)** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 579,
    "category": "Company Wise QA",
    "question": "Suppose you have two instances. How can you transfer a file from one instance to another?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 580,
    "category": "Company Wise QA",
    "question": "How can you transfer files between two instances without using SFTP or SCP?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 581,
    "category": "Company Wise QA",
    "question": "Have you performed any migration tasks (e.g., on-premises to cloud, one tenant to another, or between subscription IDs)?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 582,
    "category": "Company Wise QA",
    "question": "What is the difference between Active Directory and Entra ID?",
    "answer": "Comparing **Erence  Active Directory** and **Entra Id** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  Active Directory**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Entra Id**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Active Directory** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Entra Id** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 583,
    "category": "Company Wise QA",
    "question": "How can a user log in to a Linux machine using Entra ID credentials?",
    "answer": "Linux is an open-source operating system kernel. I work with Debian-based (Ubuntu Server) and Red Hat-based (RHEL) distributions, configuring services, managing package installations (apt/dnf), and writing automation scripts.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 584,
    "category": "Company Wise QA",
    "question": "How do you configure DNS on a Linux server?",
    "answer": "Production implementation guide for: **Configure Dns On A Linux Server** in Linux Systems Administration:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 585,
    "category": "Company Wise QA",
    "question": "What is the name of the file where network configurations are stored and managed in Linux?",
    "answer": "Linux is an open-source operating system kernel. I work with Debian-based (Ubuntu Server) and Red Hat-based (RHEL) distributions, configuring services, managing package installations (apt/dnf), and writing automation scripts.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 586,
    "category": "Company Wise QA",
    "question": "Suppose you have two users, A and B. How do you create their user accounts, and what types of access can you provide?",
    "answer": "Production implementation guide for: **Suppose You Have Two Users, A And B.  Create Their User Accounts, And What Types Of Access Can You Provide** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 587,
    "category": "Company Wise QA",
    "question": "Use of Terraform import?",
    "answer": "The `terraform import` command is used to read existing cloud infrastructure created manually or via other tools and write its parameters to your `terraform.tfstate` file, bringing the resource under Terraform management.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 588,
    "category": "Company Wise QA",
    "question": "Write a docker file?",
    "answer": "Docker is a containerization platform that packages applications and dependencies into isolated container images sharing the host OS kernel.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 589,
    "category": "Company Wise QA",
    "question": "Experience with Kubernetes?",
    "answer": "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, management, and networking of containerized workloads.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 590,
    "category": "Company Wise QA",
    "question": "How you manage your secrets in terraform?",
    "answer": "Production implementation guide for: **Manage Your Secrets In Terraform** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 591,
    "category": "Company Wise QA",
    "question": "How you secure your terraform?",
    "answer": "Production implementation guide for: **Secure Your Terraform** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 592,
    "category": "Company Wise QA",
    "question": "Do you know about drift condition?",
    "answer": "Disaster Recovery (DR): Designing failover systems in paired regions (e.g., via Azure Site Recovery) to ensure continuity during regional outages.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 593,
    "category": "Company Wise QA",
    "question": "How do you integrate pods in a CI/CD pipeline?\"",
    "answer": "Production implementation guide for: **Integrate Pods In A Ci/Cd Pipeline\"** in CI/CD Pipeline Automation:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 594,
    "category": "Company Wise QA",
    "question": "Can you explain how you used custom scripting to integrate tools like TruffleHog, Checkov, in your CI/CD pipeline?",
    "answer": "Production implementation guide for: **Can You Explain  Used Custom Scripting To Integrate Tools Like Trufflehog, Checkov, In Your Ci/Cd Pipeline** in CI/CD Pipeline Automation:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 595,
    "category": "Company Wise QA",
    "question": "How will you integrate sonarqube using scripting",
    "answer": "SonarQube is a static application security testing (SAST) tool that scans code quality, measuring bugs, smells, security vulnerabilities, and test coverage to fail builds if quality gates are not met.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 596,
    "category": "Company Wise QA",
    "question": "In a self-hosted agent scenario with multiple VMs, how can I ensure that only one specific VM is used for executing the tasks out of multiple vm's, instead of using all the VMs?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 597,
    "category": "Company Wise QA",
    "question": "Why blue green deployment -- whats rollback?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 598,
    "category": "Company Wise QA",
    "question": "How to use  API in a pipeline to  interact with services?",
    "answer": "Production implementation guide for: **Use  Api In A Pipeline To  Interact With Services** in CI/CD Pipeline Automation:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 599,
    "category": "Company Wise QA",
    "question": "how do you securely manage secrets used in your CI/CD pipelines?",
    "answer": "Production implementation guide for: **Securely Manage Secrets Used In Your Ci/Cd Pipelines** in CI/CD Pipeline Automation:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 600,
    "category": "Company Wise QA",
    "question": "How will you integrate azure key vault into pipeline with scripting?",
    "answer": "Azure Key Vault is a secure secrets management service. We use it to store passwords, client secrets, and certificates. In pipelines, we link Key Vault secrets dynamically to variable groups so they are injected at runtime without hardcoding.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 601,
    "category": "Company Wise QA",
    "question": "Do you know any scripting language?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 602,
    "category": "Company Wise QA",
    "question": "In a CI/CD pipeline, how do we automate Terraform processes using scripting languages like Bash?",
    "answer": "Capgemini -Azure Devops Engineer (Level-1)\n1-Can you explain your day-to-day activities and what tools r u  using in your project\n2-What is provisionor\n3-what is terraform provider why do we use it\n4- what is module what's use of it\n5-Explain Azure pipeline architecture",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 603,
    "category": "Company Wise QA",
    "question": "6-What is the Terraform state file and why is it important?",
    "answer": "The Terraform state file (`terraform.tfstate`) is a JSON database that maps your declarative HCL configuration resources to the actual infrastructure deployed in your cloud provider. It should be stored in a secure remote backend (such as Azure Blob Storage or AWS S3 with state locking enabled) to ensure team collaboration, access controls, and security.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 604,
    "category": "Company Wise QA",
    "question": "7- What r some challenges u faced while using Terraform and how did u solve them?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 605,
    "category": "Company Wise QA",
    "question": "8-What is DSC in PowerShell?",
    "answer": "PowerShell is a cross-platform task automation and configuration management framework. In DevOps, it is extensively used for writing automation scripts, managing Azure resources via Az PowerShell modules, and configuring systems using Desired State Configuration (DSC).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 606,
    "category": "Company Wise QA",
    "question": "9-Tell me about a recent PowerShell script you wrote and what was it about?",
    "answer": "PowerShell is a cross-platform task automation and configuration management framework. In DevOps, it is extensively used for writing automation scripts, managing Azure resources via Az PowerShell modules, and configuring systems using Desired State Configuration (DSC).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 607,
    "category": "Company Wise QA",
    "question": "10-Why did u leave your previous company, and why hve u made frequent job changes? r u planning to leave this company as well within the next year?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Capgemini"
  },
  {
    "id": 608,
    "category": "Company Wise QA",
    "question": "what is null resource",
    "answer": "2.diff b\\w providers & provisioners\n3.what is the use of user data in terraform for what is userdata.tpl(Hint-provisioning one server to another)\n4.how the state files are managed in ur organization.\n5.20 server is created(such as memory,cpu & software) from terraform and after some day want to upgrade the software of all 20 server at a same time.how to update the changes in one shot(using terraform or without terraform)\n6.Why terraform taint command is used\n7.what is the best practice to use docker file and minimize the image\n8.difference b\\w cmd & entry point\n9. in a docker file we mentioned in both cmd & entry point  which one is take precedences\n10.monitoring tools-promethius/grafana\n11.how promethius work and how to collect data\n12.have u worked on the any configuration tools(ansible,puffet)\n13.what kind of server u managing(iis/nginx)\n14.Hierachy of deployment in ci/cd\n15.Any Scripting knowledge(what is the process if giving any file)\n1) introduction",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Mphasis"
  },
  {
    "id": 609,
    "category": "Company Wise QA",
    "question": "2) work flow of terraform ?",
    "answer": "3) what tanant id in asure\n4) what is blob storage\n5) which tool are u using\n6) which type of issue are u facing on daily basis\n7) how to add or remove vm in terraform\n8) what is module\n9) do you know docker and kubernet\n10) have experience on multi cloud",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Mphasis"
  },
  {
    "id": 610,
    "category": "Company Wise QA",
    "question": "How do you handle error handling in Bash scripts?",
    "answer": "Production implementation guide for: **Handle Error Handling In Bash Scripts** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 611,
    "category": "Company Wise QA",
    "question": "What is the difference between \"$@\" and \"$*\" in Bash?",
    "answer": "Comparing **Erence  \"$@\"** and **\"$*\" In Bash** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  \"$@\"**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **\"$*\" In Bash**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  \"$@\"** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **\"$*\" In Bash** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 612,
    "category": "Company Wise QA",
    "question": "How can you schedule a Bash script to run at specific intervals using cron?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 613,
    "category": "Company Wise QA",
    "question": "Can you write a script that monitors disk space and sends an alert if usage exceeds 80%?",
    "answer": "Alert Notification: Configuring alert rules (like CPU > 80%) to notify administrators via Email, SMS, or webhooks (Slack/PagerDuty).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 614,
    "category": "Company Wise QA",
    "question": "Explain the difference between a function and a script block in PowerShell.",
    "answer": "Comparing **Erence  A Function** and **A Script Block In Powershell.** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  A Function**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **A Script Block In Powershell.**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  A Function** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **A Script Block In Powershell.** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 615,
    "category": "Company Wise QA",
    "question": "What are the key benefits of using Infrastructure as Code in DevOps?",
    "answer": "DevOps is a set of practices combining software development (Dev) and IT operations (Ops) to shorten the systems development lifecycle and provide continuous delivery of high-quality software.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 616,
    "category": "Company Wise QA",
    "question": "Which IaC tools have you used (e.g., Terraform, ARM Templates, Bicep, Pulumi), and what was your experience?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 617,
    "category": "Company Wise QA",
    "question": "Explain how you would handle secrets management in an IaC workflow.",
    "answer": "Production implementation guide for: **Explain  Would Handle Secrets Management In An Iac Workflow.** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 618,
    "category": "Company Wise QA",
    "question": "How do you ensure high availability and disaster recovery in your Azure infrastructure setup?",
    "answer": "Here is a breakdown of the key concepts:\n• Disaster Recovery (DR) involves replicating workloads to secondary regions (e.g. Azure Site Recovery) and setting up regular replication and drills.\n• SAST (Static Application Security Testing): Scanning source code or IaC configs (like tfsec) for security flaws before execution.\n• High Availability: Running multiple replica pods across multiple zones/nodes to eliminate single points of failure.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 619,
    "category": "Company Wise QA",
    "question": "what is this job for ? why you fit for this job ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 620,
    "category": "Company Wise QA",
    "question": "Tell me the style of the work ? how you work ?",
    "answer": "Production implementation guide for: **Tell Me The Style Of The Work   Work** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 621,
    "category": "Company Wise QA",
    "question": "Did you tell about your present role in operation and automation ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 622,
    "category": "Company Wise QA",
    "question": "what are the roles in cloudops ( operation ) ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 623,
    "category": "Company Wise QA",
    "question": "how you do the patching ?",
    "answer": "OS Patching involves applying security updates: 'sudo apt update && sudo apt upgrade -y' for Ubuntu, or 'sudo yum update -y' / 'sudo dnf upgrade -y' for RedHat.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 624,
    "category": "Company Wise QA",
    "question": "what is the process of patch you deploy the production ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 625,
    "category": "Company Wise QA",
    "question": "have you experinced in bash script ? explain ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 626,
    "category": "Company Wise QA",
    "question": "troubleshooting ? give only exact command ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 627,
    "category": "Company Wise QA",
    "question": "you have experience in azure monitoring ? how you do that ?",
    "answer": "Production implementation guide for: **You Have Experience In Azure Monitoring   Do That** in Microsoft Azure Cloud Services:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 628,
    "category": "Company Wise QA",
    "question": "what is host ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 629,
    "category": "Company Wise QA",
    "question": "where are you using yaml files ? why we used yaml files ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 630,
    "category": "Company Wise QA",
    "question": "what resources you created in azure ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 631,
    "category": "Company Wise QA",
    "question": "how you do the team collaboration ? how you handle the team ?",
    "answer": "Production implementation guide for: **Do The Team Collaboration   Handle The Team** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 632,
    "category": "Company Wise QA",
    "question": "Give some examples for the sop ? explain ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 633,
    "category": "Company Wise QA",
    "question": "when you do the release ? what are the challenges you faced ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 634,
    "category": "Company Wise QA",
    "question": "can you troubleshoot the dns ? suppose vikram.com page is not showing in the google ? how you troubleshoot?",
    "answer": "Troubleshooting involves diagnosing system issues by checking resource statuses (`describe`), reviewing logs, and running network tests.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 635,
    "category": "Company Wise QA",
    "question": "which users are allow to use the subscription ? list down the user ? how you give the user access ?",
    "answer": "Production implementation guide for: **Which Users Are Allow To Use The Subscription  List Down The User   Give The User Access** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 636,
    "category": "Company Wise QA",
    "question": "what you want do in next 5 years ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 637,
    "category": "Company Wise QA",
    "question": "In past years what skills you have added to yourself ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 638,
    "category": "Company Wise QA",
    "question": "Why you are looking for the change ? what are the repetitive task you doing ?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Railyatri & Citius"
  },
  {
    "id": 639,
    "category": "Company Wise QA",
    "question": "how many types of declare & stored the variable?",
    "answer": "Terraform variables can be declared in variable blocks with type constraints (string, number, bool, list, map, object) and stored/passed in terraform.tfvars files, environment variables (prefixed with TF_VAR_), or command line flags (-var=\"name=value\").",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 640,
    "category": "Company Wise QA",
    "question": "What is Provisioners block, How Many types and when you used tell with example?",
    "answer": "Terraform provisioners execute scripts locally or on remote servers during resource creation/destruction:\n1. **local-exec**: Runs a script on the local machine executing the Terraform command (e.g. running an Ansible playbook or registering DNS locally).\n2. **remote-exec**: Establishes SSH/WinRM connection to the newly created VM and runs command lines on that VM.\n3. **file**: Copies files or directories from the local machine to the newly created VM.\n*Note: Use provisioners only as a last resort; prefer cloud-init, VM extensions, or Ansible for configuration management.*",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 641,
    "category": "Company Wise QA",
    "question": "what is Ansible, why we use?",
    "answer": "Ansible is an open-source, agentless configuration management and automation tool. It connects to target nodes via SSH or WinRM and executes tasks defined in YAML playbooks, eliminating the need to install and maintain agent software on target servers.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 642,
    "category": "Company Wise QA",
    "question": "tell the use case combination of terraform and Ansible?",
    "answer": "Terraform and Ansible are highly complementary in infrastructure pipelines:\n1. **Provisioning vs Configuration**: We use Terraform (IaC) first to provision the infrastructure (VNets, VMs, AKS, and Storage Accounts). Then, we invoke Ansible (Configuration Management) to log into those VM nodes to install software packages, run configurations, and copy application binaries.\n2. **Pipeline Integration**: In the build pipeline, Terraform provisions resources and outputs the IP addresses. The pipeline then dynamically passes these IPs to the Ansible dynamic inventory to kick off configuration playbooks automatically.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 643,
    "category": "Company Wise QA",
    "question": "New feature which is not present in terraform how would you provisioning them in azure portal through Terraform?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 644,
    "category": "Company Wise QA",
    "question": "manually created 10 VM in different-different RG's and then automation request comes to do it same thing mange it terraforms, how you do (basically how we update our statefile for existing resources)?",
    "answer": "Comparing **Erent-** and **Second Option** in Terraform Infrastructure as Code (IaC) contexts:\n\n1. **Core Architecture**:\n   * **Erent-**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent-** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 645,
    "category": "Company Wise QA",
    "question": "Terraform backend, terraform statefile management?",
    "answer": "The Terraform state file (`terraform.tfstate`) is a JSON database that maps your declarative HCL configuration resources to the actual infrastructure deployed in your cloud provider. It should be stored in a secure remote backend (such as Azure Blob Storage or AWS S3 with state locking enabled) to ensure team collaboration, access controls, and security.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 646,
    "category": "Company Wise QA",
    "question": "if we want to validate our terraform code, is we need to execute terraform init commands?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 647,
    "category": "Company Wise QA",
    "question": "What are artifacts?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 648,
    "category": "Company Wise QA",
    "question": "What is the purpose of ci/cd?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 649,
    "category": "Company Wise QA",
    "question": "Have you work on Azure monitor or logs?",
    "answer": "Azure Monitor collects and analyzes telemetry data (metrics, logs) from cloud resources. I write Kusto Query Language (KQL) queries in Log Analytics workspaces to create performance dashboards and trigger alert notifications on Slack/PagerDuty.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 650,
    "category": "Company Wise QA",
    "question": "How you search a word in file from Linux command?",
    "answer": "Production implementation guide for: **Search A Word In File From Linux Command** in Linux Systems Administration:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 651,
    "category": "Company Wise QA",
    "question": "What is keyvalut and their usecase?",
    "answer": "Azure Key Vault is a secure secrets management service. We use it to store passwords, client secrets, and certificates. In pipelines, we link Key Vault secrets dynamically to variable groups so they are injected at runtime without hardcoding.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 652,
    "category": "Company Wise QA",
    "question": "What is difference b/w infra vs App pipeline?",
    "answer": "Comparing **Erence B/W Infra Vs App Pipeline** and **Second Option** in CI/CD Pipeline Automation contexts:\n\n1. **Core Architecture**:\n   * **Erence B/W Infra Vs App Pipeline**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence B/W Infra Vs App Pipeline** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 653,
    "category": "Company Wise QA",
    "question": "Have you use variables in ci/cd?",
    "answer": "Terraform variables can be declared in variable blocks with type constraints (string, number, bool, list, map, object) and stored/passed in terraform.tfvars files, environment variables (prefixed with TF_VAR_), or command line flags (-var=\"name=value\").",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 654,
    "category": "Company Wise QA",
    "question": "Have you worked on grafanaand Prometheus?",
    "answer": "Here is a breakdown of the key concepts:\n• Prometheus is an open-source monitoring tool that scrapes metrics from target endpoints, stores time-series data, and triggers alerts via Alertmanager.\n• Grafana is an open-source visualization dashboard that connects to time-series databases like Prometheus or Azure Monitor to display real-time metrics.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 655,
    "category": "Company Wise QA",
    "question": "What is azure policy & why we use in ci/cd?",
    "answer": "Azure Policy is a service that enforces organizational standards and assesses compliance. In CI/CD, we run policy compliance checks (e.g. verifying that storage accounts have public access disabled or resource tags exist) before allowing resource creation.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "HCL"
  },
  {
    "id": 656,
    "category": "Company Wise QA",
    "question": "What is Kubernetes and explain the different services in Kubernetes. 1-How many types of declare & store the variable in Terraform?",
    "answer": "Types: string, number, bool, list, map, object, tuple.\nDeclaration: In variables.tf file using variable block.\nStorage: Values can be passed via default value, terraform.tfvars, CLI using -var, or environment variables.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 657,
    "category": "Company Wise QA",
    "question": "2-What is Provisioners block in Terraform?",
    "answer": "Used to execute scripts or commands on a resource after it’s created.\nTypes: local-exec (runs locally), remote-exec (runs on resource like VM).\nExample:\nprovisioner \"remote-exec\" {\ninline = [\"sudo apt-get update\"]\n}\nUse Case: Install software on VM right after provisioning.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 658,
    "category": "Company Wise QA",
    "question": "3-What is Ansible and why we use it?",
    "answer": "Ansible is an open-source, agentless configuration management and automation tool. It connects to target nodes via SSH or WinRM and executes tasks defined in YAML playbooks, eliminating the need to install and maintain agent software on target servers.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 659,
    "category": "Company Wise QA",
    "question": "Why: It's agentless, simple YAML-based syntax, and supports multiple OS.",
    "answer": "4-Terraform + Ansible Use Case:\nUse Terraform to provision infra (like VM), then use Ansible to install software/configure those VMs.\nExample: Terraform creates VM > Ansible installs Nginx and configures firewall.\n5-New Feature Not Present in Terraform:\nIf Terraform doesn't support a resource yet:\nUse null_resource + local-exec to run CLI commands.\nOr use ARM template/REST API call from Terraform.\nExample:\nresource \"null_resource\" \"custom\" {\nprovisioner \"local-exec\" {\ncommand = \"az resource create ...\"\n}\n}\n6-How to Manage Already Created Resources with Terraform (Manually Created VMs):\nUse terraform import to bring existing resources into state.\nExample:\nterraform import azurerm_virtual_machine.vm1 /subscriptions/xxx/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1\nThen write matching Terraform code.\n8-Terraform Backend & Statefile Management:\nBackend: Controls how state is loaded and where it's stored (e.g., Azure Blob Storage).\nBenefits: Remote team access, locking, security.\nExample backend config:\nterraform {\nbackend \"azurerm\" {\nresource_group_name  = \"tfstate-rg\"\nstorage_account_name = \"tfstorageacc\"\ncontainer_name       = \"tfstate\"\nkey                  = \"terraform.tfstate\"\n}\n}",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 660,
    "category": "Company Wise QA",
    "question": "7--Do we need terraform init to validate code?",
    "answer": "Yes, terraform init is needed before terraform validate.\ninit downloads providers/modules; validate only works after that.\nALTEMIRK",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 661,
    "category": "Company Wise QA",
    "question": "How do we connect Azure Monitor with Grafana?",
    "answer": "Production implementation guide for: **How Do We Connect Azure Monitor With Grafana** in Microsoft Azure Cloud Services:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 662,
    "category": "Company Wise QA",
    "question": "Difference between Grafana and Kibana?",
    "answer": "Comparing **Erence  Grafana** and **Kibana** in Grafana Observability contexts:\n\n1. **Core Architecture**:\n   * **Erence  Grafana**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Kibana**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Grafana** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Kibana** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 663,
    "category": "Company Wise QA",
    "question": "What are various data sources available in Grafana?",
    "answer": "Grafana is an open-source visualization dashboard that connects to time-series databases like Prometheus or Azure Monitor to display real-time metrics.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 664,
    "category": "Company Wise QA",
    "question": "What is Ingress in K8s?",
    "answer": "An Ingress in Kubernetes is an API object that manages external access to the services in a cluster, typically HTTP/HTTPS. It provides load balancing, SSL termination, and name-based virtual hosting, routing traffic to backend Pods via an Ingress Controller.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 665,
    "category": "Company Wise QA",
    "question": "- Ansible aata hai?",
    "answer": "Ansible is an open-source, agentless configuration management and automation tool. It connects to target nodes via SSH or WinRM and executes tasks defined in YAML playbooks, eliminating the need to install and maintain agent software on target servers.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 666,
    "category": "Company Wise QA",
    "question": "- we have 1 Vnet having 2 subnets, one is public, other is private subnet with which virtual machine is connected, firewall is open, tell me how you access that virtual machine?",
    "answer": "Production implementation guide for: **- We Have 1 Vnet Having 2 Subnets, One Is Public, Other Is Private Subnet With Which Virtual Machine Is Connected, Firewall Is Open, Tell Me  Access That Virtual Machine** in Azure Virtual Network (VNET):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 667,
    "category": "Company Wise QA",
    "question": "- powershell you know?",
    "answer": "PowerShell is a cross-platform task automation and configuration management framework. In DevOps, it is extensively used for writing automation scripts, managing Azure resources via Az PowerShell modules, and configuring systems using Desired State Configuration (DSC).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "ParentPay"
  },
  {
    "id": 668,
    "category": "Company Wise QA",
    "question": "Could you explain the key components of the Kubernetes control plane and their respective roles?",
    "answer": "The Kubernetes Control Plane consists of: kube-apiserver (exposes the API), etcd (consistent key-value storage), kube-scheduler (assigns pods to nodes), kube-controller-manager (runs controller processes), and cloud-controller-manager (integrates with cloud APIs).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 669,
    "category": "Company Wise QA",
    "question": "How would you differentiate between a Pod, a ReplicaSet, and a Deployment in Kubernetes?",
    "answer": "Difference between ReplicaSet and Deployment in Kubernetes:\n1. **ReplicaSet**: Ensures that a specified number of pod replicas are running at any given time. Lacks rolling updates/rollback features.\n2. **Deployment**: A higher-level resource that manages ReplicaSets. Supports rolling updates (zero downtime), rollback to historical revisions, and declarative resource definitions.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 670,
    "category": "Company Wise QA",
    "question": "What is the standard approach to performing a rolling update in Kubernetes while minimizing service disruption?",
    "answer": "Kubernetes Services expose pods to network traffic using stable IPs:\n1. **ClusterIP**: Exposes the service internally within the cluster (default).\n2. **NodePort**: Opens a static port on each node's IP to expose the service externally.\n3. **LoadBalancer**: Provisions a cloud public load balancer to route external traffic directly to nodes.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 671,
    "category": "Company Wise QA",
    "question": "In what scenarios would you choose a StatefulSet over a Deployment, and why?",
    "answer": "Use a Deployment for stateless workloads where replica pods are identical and interchangeable (e.g. web servers). Use a StatefulSet for stateful applications (e.g. databases like PostgreSQL) requiring unique, persistent identities, stable network hostnames, and dedicated persistent volume storage for each pod replica.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 672,
    "category": "Company Wise QA",
    "question": "What is the purpose of kube-proxy in a Kubernetes cluster, and how does it function?",
    "answer": "Production implementation guide for: **What Is The Purpose Of Kube-Proxy In A Kubernetes Cluster, And How Does It Function** in Kubernetes Orchestration:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 673,
    "category": "Company Wise QA",
    "question": "Can you describe the role of Ingress in Kubernetes and how it differs from a standard Service?",
    "answer": "Kubernetes Services expose pods to network traffic using stable IPs:\n1. **ClusterIP**: Exposes the service internally within the cluster (default).\n2. **NodePort**: Opens a static port on each node's IP to expose the service externally.\n3. **LoadBalancer**: Provisions a cloud public load balancer to route external traffic directly to nodes.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 674,
    "category": "Company Wise QA",
    "question": "How would you systematically troubleshoot a pod that is stuck in a CrashLoopBackOff state?",
    "answer": "Troubleshooting involves diagnosing system issues by checking resource statuses (`describe`), reviewing logs, and running network tests.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 675,
    "category": "Company Wise QA",
    "question": "What deployment strategies do you recommend to ensure zero downtime during application releases?",
    "answer": "To ensure zero downtime, use: 1. **Blue-Green Deployments**: Maintain two identical environments, route traffic to the new one after successful verification. 2. **Canary Deployments**: Route a small percentage of traffic to the new version before rolling out to everyone. 3. **Rolling Updates**: Gradually replace old pod instances with new ones in a rolling fashion.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 676,
    "category": "Company Wise QA",
    "question": "How do you typically structure a CI/CD pipeline to support multiple environments such as development, QA, staging, and production?",
    "answer": "Production implementation guide for: **Typically Structure A Ci/Cd Pipeline To Support Multiple Environments Such As Development, Qa, Staging, And Production** in CI/CD Pipeline Automation:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 677,
    "category": "Company Wise QA",
    "question": "If a pipeline's unit tests fail immediately after a commit, what steps would you take to identify and resolve the issue efficiently?",
    "answer": "If unit tests fail after a commit: 1. Review the pipeline build logs to locate the failing test case. 2. Verify that local dependencies match the pipeline runner environment. 3. Run the tests locally in your workspace. 4. Check for code syntax errors or missing environment configurations.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 678,
    "category": "Company Wise QA",
    "question": "What methods do you use to pass artifacts or variables between stages in a CI/CD pipeline?",
    "answer": "Terraform variables can be declared in variable blocks with type constraints (string, number, bool, list, map, object) and stored/passed in terraform.tfvars files, environment variables (prefixed with TF_VAR_), or command line flags (-var=\"name=value\").",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 679,
    "category": "Company Wise QA",
    "question": "Can we make changes to the running docker container?",
    "answer": "3. Different networking types in docker\nAzure service\n1. Storage accounts\n2. Load balancer\n3. How we can access a vm having private ip address",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 680,
    "category": "Company Wise QA",
    "question": "Do you have ID about AKS?",
    "answer": "Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies Kubernetes deployment, management, and operations by offloading the control plane management to Microsoft, charging only for active worker node VMs.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 681,
    "category": "Company Wise QA",
    "question": "How should we keep our storage accounts, private or public?",
    "answer": "Azure Storage Account: Secure cloud storage for blobs/files. Secured via Private Endpoints, SAS tokens, RBAC, and firewalls.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 682,
    "category": "Company Wise QA",
    "question": "Have you worked with Key Vault?",
    "answer": "7. What is service principal and managed identity\n8. Do you have any idea about the least privileged access\n9. Do you know about availability set and availability zones",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 683,
    "category": "Company Wise QA",
    "question": "Do you know about ACR?",
    "answer": "Azure Container Registry (ACR) is a private container registry service:\n1. **Image Registry**: Stores and manages Docker container images, Helm charts, and OCI artifacts.\n2. **Integrations**: Integrates with AKS via Azure RBAC (AcrPull permissions assigned to AKS managed identity), supports image vulnerability scanning (via Defender), and geo-replication.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 684,
    "category": "Company Wise QA",
    "question": "Different replication types in azure?",
    "answer": "Terraform\n1. Can you explain to me your module structure\n2. Can you write a vm code? Virtual network tak likha n he stopped me",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 685,
    "category": "Company Wise QA",
    "question": "What If I remove the vm instance  from the state file and run terraform apply?",
    "answer": "If you remove a resource from the state file (e.g. using 'terraform state rm') and run 'terraform apply', Terraform will think the resource no longer exists in your infrastructure and will attempt to recreate it. If you want to delete a resource, you should delete its HCL code configuration and run 'terraform apply'.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 686,
    "category": "Company Wise QA",
    "question": "Which branching strategy do you have used?",
    "answer": "3. What are environment variables in Pipeline\n4. How you manage secrets in pipeline\n5. Can you tell me about service connections\n6. Do you have idea on agent pool\n7. Can you walk me through basic components of your azure pipelines\nOthers\n1. Do you have working knowledge with Ansible\n2. How you check the pod status\n3. How much should be ideal ratio of pod to container",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 687,
    "category": "Company Wise QA",
    "question": "What is smallest components in aks?",
    "answer": "The smallest deployable component in Azure Kubernetes Service (AKS) or any Kubernetes cluster is a **Pod**, which represents a single instance of a running process and can contain one or more containers.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Infosys"
  },
  {
    "id": 688,
    "category": "Linux & Git",
    "question": "What is Git?",
    "answer": "Git is a distributed version control system used to track changes in source code. A Git Repository is the storage space (local or remote) that tracks all project files and commit histories. A commit represents a saved snapshot of staged changes in the project history.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 689,
    "category": "Linux & Git",
    "question": "What is a Git repository?",
    "answer": "Git is a distributed version control system used to track changes in source code. A Git Repository is the storage space (local or remote) that tracks all project files and commit histories. A commit represents a saved snapshot of staged changes in the project history.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 690,
    "category": "Linux & Git",
    "question": "What is the difference between Git and GitHub?",
    "answer": "Comparing **Erence  Git** and **Github** in Git Version Control contexts:\n\n1. **Core Architecture**:\n   * **Erence  Git**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Github**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Git** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Github** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 691,
    "category": "Linux & Git",
    "question": "How do you initialize a Git repository?",
    "answer": "Production implementation guide for: **Initialize A Git Repository** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 692,
    "category": "Linux & Git",
    "question": "What is a commit in Git?",
    "answer": "Git is a distributed version control system used to track changes in source code. A Git Repository is the storage space (local or remote) that tracks all project files and commit histories. A commit represents a saved snapshot of staged changes in the project history.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 693,
    "category": "Linux & Git",
    "question": "How do you create a new branch in Git?",
    "answer": "Production implementation guide for: **Create A New Branch In Git** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 694,
    "category": "Linux & Git",
    "question": "How do you switch between branches in Git?",
    "answer": "Production implementation guide for: **Switch Between Branches In Git** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 695,
    "category": "Linux & Git",
    "question": "What is the purpose of the .gitignore file?",
    "answer": "The .gitignore file specifies untracked files or folders (e.g., node_modules/, local secrets, logs, or pycache) that Git should ignore and never commit to the remote repository.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 696,
    "category": "Linux & Git",
    "question": "What is the difference between git pull and git fetch?",
    "answer": "Comparing **Erence  Git Pull** and **Git Fetch** in Git Version Control contexts:\n\n1. **Core Architecture**:\n   * **Erence  Git Pull**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Git Fetch**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Git Pull** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Git Fetch** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 697,
    "category": "Linux & Git",
    "question": "How do you view the commit history in Git?",
    "answer": "Production implementation guide for: **View The Commit History In Git** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 698,
    "category": "Linux & Git",
    "question": "What is a merge conflict in Git, and how do you resolve it?",
    "answer": "Production implementation guide for: **What Is A Merge Conflict In Git, And  Resolve It** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 699,
    "category": "Linux & Git",
    "question": "What is the difference between git reset and git revert?",
    "answer": "Comparing **Erence  Git Reset** and **Git Revert** in Git Version Control contexts:\n\n1. **Core Architecture**:\n   * **Erence  Git Reset**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Git Revert**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Git Reset** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Git Revert** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 700,
    "category": "Linux & Git",
    "question": "What is the purpose of the git stash command?",
    "answer": "The 'git stash' command temporarily shelves (stashes) uncommitted changes in your working directory, allowing you to switch branches or run pulls on a clean working directory, and re-apply the changes later using 'git stash pop'.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 701,
    "category": "Linux & Git",
    "question": "How do you undo the last commit in Git?",
    "answer": "Production implementation guide for: **Undo The Last Commit In Git** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 702,
    "category": "Linux & Git",
    "question": "What is the difference between git merge and git rebase?",
    "answer": "Comparing **Erence  Git Merge** and **Git Rebase** in Git Version Control contexts:\n\n1. **Core Architecture**:\n   * **Erence  Git Merge**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Git Rebase**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Git Merge** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Git Rebase** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 703,
    "category": "Linux & Git",
    "question": "What is a Git submodule, and how do you use it?",
    "answer": "Production implementation guide for: **What Is A Git Submodule, And  Use It** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 704,
    "category": "Linux & Git",
    "question": "How do you handle large files in Git?",
    "answer": "Production implementation guide for: **Handle Large Files In Git** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 705,
    "category": "Linux & Git",
    "question": "What is the purpose of git cherry-pick?",
    "answer": "'git cherry-pick' is a command that allows you to select a specific commit from one branch and apply its changes as a new commit onto your current active branch.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 706,
    "category": "Linux & Git",
    "question": "How do you rename a branch in Git?",
    "answer": "Production implementation guide for: **Rename A Branch In Git** in Git Version Control:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 707,
    "category": "Linux & Git",
    "question": "What is the difference between git pull --rebase and git pull?",
    "answer": "Comparing **Erence  Git Pull --Rebase** and **Git Pull** in Git Version Control contexts:\n\n1. **Core Architecture**:\n   * **Erence  Git Pull --Rebase**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Git Pull**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Git Pull --Rebase** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Git Pull** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 708,
    "category": "Company Wise QA",
    "question": "1 Can you please tell me about your project?",
    "answer": "I manage CI/CD pipelines and infrastructure as code using Terraform to deploy highly available microservices to Azure Kubernetes Service (AKS). My responsibilities include configuring networking (VNets, Application Gateways), securing pipelines, and managing container workloads.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 709,
    "category": "Company Wise QA",
    "question": "2 Suppose in your organisation there are 10 projects but a new developer joined. You want to give access only to 3 projects. How do you do that?",
    "answer": "Production implementation guide for: **2 Suppose In Your Organisation There Are 10 Projects But A New Developer Joined. You Want To Give Access Only To 3 Projects.  Do That** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 710,
    "category": "Company Wise QA",
    "question": "3 How many types of user-level access are there in Azure DevOps (ADO)?",
    "answer": "Azure DevOps user-level access types are: 1. **Basic**: Access to most features (pipelines, boards, repos). 2. **Stakeholder**: Free access for work item tracking and viewing boards. 3. **Visual Studio Subscription**: Access based on the user's MSDN/VS subscription tier.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 711,
    "category": "Company Wise QA",
    "question": "4 What is the difference between basic level and stakeholder level access in ADO?",
    "answer": "Comparing **Erence  Basic Level** and **Stakeholder Level Access In Ado** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  Basic Level**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Stakeholder Level Access In Ado**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Basic Level** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Stakeholder Level Access In Ado** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 712,
    "category": "Company Wise QA",
    "question": "5 If you have to add more basic users in ADO, do you need to pay Microsoft? How much?",
    "answer": "In Azure DevOps, the first **5 users** in an organization get Basic access for free. For any additional basic users, your organization must pay Microsoft approximately **$6 per user per month**.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 713,
    "category": "Company Wise QA",
    "question": "6 How many agents are available in Azure DevOps to run pipelines?",
    "answer": "Azure DevOps provides Microsoft-hosted agents (managed by MS) and self-hosted agents (managed on your own VMs). Microsoft provides 1 free parallel job (hosted or self-hosted) with 1800 free minutes per month. Additional parallel jobs cost approximately **$40/month** for Microsoft-hosted and **$15/month** for self-hosted.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 714,
    "category": "Company Wise QA",
    "question": "7 What is the difference between Microsoft-hosted agents and self-hosted agents?",
    "answer": "Comparing **Erence  Microsoft-Hosted Agents** and **Self-Hosted Agents** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  Microsoft-Hosted Agents**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Self-Hosted Agents**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Microsoft-Hosted Agents** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Self-Hosted Agents** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 715,
    "category": "Company Wise QA",
    "question": "8 If Microsoft provides only one agent and you want to run 10 pipelines, how much money do you have to pay for additional agents?",
    "answer": "Azure DevOps provides Microsoft-hosted agents (managed by MS) and self-hosted agents (managed on your own VMs). Microsoft provides 1 free parallel job (hosted or self-hosted) with 1800 free minutes per month. Additional parallel jobs cost approximately **$40/month** for Microsoft-hosted and **$15/month** for self-hosted.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 716,
    "category": "Company Wise QA",
    "question": "9 How do you add a new field in the Bug template in Azure DevOps?",
    "answer": "Production implementation guide for: **9  Add A New Field In The Bug Template In Azure Devops** in Microsoft Azure Cloud Services:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 717,
    "category": "Company Wise QA",
    "question": "10 When a user enters the correct username and password but gets an invalid credential error, what could be the issue?",
    "answer": "In Azure DevOps Git checkouts, this usually happens when the user's Personal Access Token (PAT) has expired or lacks the correct 'Code Read/Write' scope, or when their local Git credential manager has cached outdated credentials.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 718,
    "category": "Company Wise QA",
    "question": "11 Suppose you want to deploy an application to 2 VMs at the same time. How would you do that using Azure DevOps pipeline?",
    "answer": "To deploy to multiple VMs simultaneously: 1. Configure the VMs inside an Azure DevOps **Deployment Group**. 2. Use a Deployment Group job in a Release pipeline targeting that group. 3. Alternatively, configure a multi-agent YAML pipeline running deployment tasks in parallel.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 719,
    "category": "Company Wise QA",
    "question": "12 What is a service connection in Azure DevOps and how do you use it for VM deployments?",
    "answer": "Service Connections in Azure DevOps connect pipelines to external services:\n1. **Role**: Establishes a secure connection to Azure subscriptions, AWS accounts, Docker registries, or SonarQube instances without exposing secrets.\n2. **Security**: Typically authenticated using an Azure Service Principal (using client secrets or federated credentials) with strict access bounds.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 720,
    "category": "Company Wise QA",
    "question": "13 Is it possible to share the same service connection across multiple projects in the same organization? How?",
    "answer": "Here is a breakdown of the key concepts:\n• Kubernetes Service: Abstract way to expose an application running on a set of Pods as a network service with a stable IP.\n• ACR stores private Docker container images securely in Azure, integrating with AKS using managed identities.\n• Service Connection: Secure configurations in Azure DevOps to access cloud subscriptions or external APIs.\n• DevOps Projects: Building automated pipelines, provisioning infrastructure via IaC, and monitoring services.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 721,
    "category": "Company Wise QA",
    "question": "14 How do you handle different environment deployments (DEV, QA, PROD) in pipelines with different credentials?",
    "answer": "Comparing **Erent Environment Deployments (Dev, Qa, Prod) In Pipelines With** and **Second Option** in CI/CD Pipeline Automation contexts:\n\n1. **Core Architecture**:\n   * **Erent Environment Deployments (Dev, Qa, Prod) In Pipelines With**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erent Environment Deployments (Dev, Qa, Prod) In Pipelines With** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 722,
    "category": "Company Wise QA",
    "question": "16 Suppose you have 2 containers and the second container should run only after the first one has started. How do you achieve that in Docker Compose?",
    "answer": "Here is a breakdown of the key concepts:\n• Docker is a containerization platform that packages applications and dependencies into isolated container images sharing the host OS kernel.\n• Docker Compose: A tool for defining and running multi-container applications using a single YAML configuration file.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 723,
    "category": "Company Wise QA",
    "question": "17 If all secrets (like DB name, username, passwords) are stored in Azure Key Vault, how do you fetch those in the pipeline while building a Docker image?",
    "answer": "Docker is a containerization platform that packages applications and dependencies into isolated container images sharing the host OS kernel.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 724,
    "category": "Company Wise QA",
    "question": "18 What is the difference between COPY and ADD commands in Dockerfile?",
    "answer": "Comparing **Erence  Copy** and **Add Comm** in Docker Containerization contexts:\n\n1. **Core Architecture**:\n   * **Erence  Copy**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Add Comm**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Copy** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Add Comm** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": "Exceedence"
  },
  {
    "id": 725,
    "category": "Terraform (IaC)",
    "question": "How does Terraform handle infrastructure as code? Terraform handles Infrastructure as Code (IaC) by enabling the definition, provisioning, and management of infrastructure through declarative configuration files. This approach treats infrastructure setup and management as software development tasks, promoting automation, consistency, and collaboration.",
    "answer": "Production implementation guide for: **How Does Terraform Handle Infrastructure As Code Terraform Handles Infrastructure As Code (Iac) By Enabling The Definition, Provisioning, And Management Of Infrastructure Through Declarative Configuration Files. This Approach Treats Infrastructure Setup And Management As Software Development Tasks, Promoting Automation, Consistency, And Collaboration.** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 726,
    "category": "Terraform (IaC)",
    "question": "What are resource in Terraform? ​In Terraform, resources are the fundamental building blocks that define infrastructure components—such as virtual machines, storage buckets, DNS records, and more",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 727,
    "category": "Terraform (IaC)",
    "question": "What are data sources in Terraform? In Terraform, data sources are read-only entities that allow you to retrieve and utilize information from external systems or other Terraform configurations,data sources are used to fetch existing data that can be referenced elsewhere in your Terraform configuration.",
    "answer": "Files & Syntax\n.tf file They define the desired state of your infrastructure, specifying resources, providers, variables, and outputs.\nOutputs in terraform ​In Terraform, output values are used to display or export information about your infrastructure after applying your configuration. They serve as a way to expose useful data, such as resource IDs or IP addresses, to users or other configurations.\nDiff. btw input and output variables Input Variables: Allow you to customize your infrastructure setup without changing the core code.                                                                                                                Output Variables:Expose information about the infrastructure after deployment, facilitating data sharing between modules or external systems.​",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 728,
    "category": "Terraform (IaC)",
    "question": "How do you reference one resource from another? Referencing one resource from another makes the infrastructure interdependent so to achieve this we use Module block which helps in referecing by another resource by calling modules",
    "answer": "Local block The locals block allows you to define named values or expressions that can be reused throughout your Terraform configuration. This helps in avoiding repetition and makes your code cleaner and easier to maintain.e.g, region,tags etc.\nTerraform CLI Basics\nTerraform refresh the terraform refresh command is used to update Terraform's state file to reflect the actual state of your infrastructure",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 729,
    "category": "Terraform (IaC)",
    "question": "How do you remove a resource from the state file? ​To remove a resource from Terraform's state file without affecting the actual infrastructure, you can use the terraform state rm command or using removed block",
    "answer": "Production implementation guide for: **Remove A Resource From The State File ​To Remove A Resource From Terraform'S State File Without Affecting The Actual Infrastructure, You Can Use The Terraform State Rm Command Or Using Removed Block** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 730,
    "category": "Terraform (IaC)",
    "question": "How do you enable debugging in Terraform? To enable debugging in Terraform, you can set specific environment variables that control the logging level and output location.Terraform uses the TF_LOG environment variable to control logging verbosity.",
    "answer": "Production implementation guide for: **Enable Debugging In Terraform To Enable Debugging In Terraform, You Can Set Specific Environment Variables That Control The Logging Level And Output Location.Terraform Uses The Tf_Log Environment Variable To Control Logging Verbosity.** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 731,
    "category": "Terraform (IaC)",
    "question": "What is a backend in Terraform? a backend is the mechanism that defines where and how Terraform stores state—the record of what infrastructure it manages.",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 732,
    "category": "Terraform (IaC)",
    "question": "What is a provider block, and why is it important? a provider block specifies the cloud provider, API, or service that Terraform will use to provision and manage resources.It enables API Access,Authentication and Configuration and can define multiplr provider.",
    "answer": "Terraform providers are plugins that act as translators between the Terraform core engine and target cloud platform APIs (like AzureRM, AWS, or GCP). They translate declarative HCL configurations into actual API calls to create, update, or delete resources.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 733,
    "category": "Terraform (IaC)",
    "question": "How do you lock Terraform provider versions? You can lock Terraform provider versions using the required_providers block inside the terraform block of your configuration. This ensures your project always uses a specific version  of a provider",
    "answer": "Production implementation guide for: **Lock Terraform Provider Versions You Can Lock Terraform Provider Versions Using The Required_Providers Block Inside The Terraform Block Of Your Configuration. This Ensures Your Project Always Uses A Specific Version  Of A Provider** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 734,
    "category": "Terraform (IaC)",
    "question": "How do you import existing infrastructure into Terraform? By using the terraform import command,terraform import RESOURCE_ID",
    "answer": "Production implementation guide for: **Import Existing Infrastructure Into Terraform By Using The Terraform Import Command,Terraform Import Resource_Id** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 735,
    "category": "Terraform (IaC)",
    "question": "What is a Terraform module? A Terraform module is a set of reusable Terraform files that help you manage similar infrastructure in a clean and organized way. You can think of it like a function in programming—you write it once and use it many times.",
    "answer": "A Terraform module folder typically contains: `main.tf` (resource definitions), `variables.tf` (input variable declarations), and `outputs.tf` (output values). You structure them in a subfolder and call them using: module \"name\" { source = \"./modules/vnet\" ... }",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 736,
    "category": "Terraform (IaC)",
    "question": "How do you call a module from a remote Git repository? To call a Terraform module from a remote Git repository, use the source argument in the module block with the Git URL.",
    "answer": "Production implementation guide for: **Call A Module From A Remote Git Repository To Call A Terraform Module From A Remote Git Repository, Use The Source Argument In The Module Block With The Git Url.** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 737,
    "category": "Terraform (IaC)",
    "question": "How do you pass variables to a module? To pass variables to a Terraform module, you provide them as arguments in the module block, just like passing parameters to a function.",
    "answer": "In Terraform, variables and outputs are defined to achieve modularity and clean parameterization:\n1. **variables.tf**: Defines input variables that allow users to customize the module behavior (e.g., VM size, environment name, network IP ranges) dynamically when calling the module.\n2. **outputs.tf**: Specifies outputs that expose internal resource attributes (e.g., private IP, subnet ID, resource ID) to other configurations or the root module.\n3. **Usage**: In the root configuration, you call the module and pass values for its input variables. Once applied, you can reference the module's output attributes using `module.<module_name>.<output_name>`.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 738,
    "category": "Terraform (IaC)",
    "question": "What is the purpose of module.<name>.output? The purpose of module.<name>.output in Terraform is to access the output values that are defined inside a module. This allows you to retrieve information or results from a module and use it in other parts of your Terraform configuration.",
    "answer": "The purpose of module outputs (module.<name>.<output_name>) is to expose specific resource attributes created within a child module to the parent configuration. This allows the parent workspace to reference and pass those attributes to other modules or resources.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 739,
    "category": "Terraform (IaC)",
    "question": "How can you organize Terraform modules for reusability? To organize Terraform modules for reusability,use a Clear Directory Structure,keep Modules Focused,Parameterize Modules with Variables & define Outputs for Reusability",
    "answer": "In Terraform, variables and outputs are defined to achieve modularity and clean parameterization:\n1. **variables.tf**: Defines input variables that allow users to customize the module behavior (e.g., VM size, environment name, network IP ranges) dynamically when calling the module.\n2. **outputs.tf**: Specifies outputs that expose internal resource attributes (e.g., private IP, subnet ID, resource ID) to other configurations or the root module.\n3. **Usage**: In the root configuration, you call the module and pass values for its input variables. Once applied, you can reference the module's output attributes using `module.<module_name>.<output_name>`.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 740,
    "category": "Terraform (IaC)",
    "question": "How do you use count and for_each in a module? The count parameter is used to create multiple instances of a module based on a numeric value on the other hand for_each parameter is used to iterate over a map or set of values and create a module instance for each value.",
    "answer": "Production implementation guide for: **Use Count And For_Each In A Module The Count Parameter Is Used To Create Multiple Instances Of A Module Based On A Numeric Value On The Other Hand For_Each Parameter Is Used To Iterate Over A Map Or Set Of Values And Create A Module Instance For Each Value.** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 741,
    "category": "Divyanshu Questions",
    "question": "1) I want to rename a branch , how to do that?",
    "answer": "Production implementation guide for: **1) I Want To Rename A Branch ,  Do That** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 742,
    "category": "Divyanshu Questions",
    "question": "2) where u store terraform code and from where u commiting and adding ur changes?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 743,
    "category": "Divyanshu Questions",
    "question": "3)suppose we adding a file and we want to commit it how will you do that?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 744,
    "category": "Divyanshu Questions",
    "question": "4) u joined a company and want to configure a local repo to remote repo , how u will achieve it?",
    "answer": "5) how will u make and setup connections\n6) u commited one branch with message git commit -m \"hello\" and now commit message is wrong then what will be next command to change it? wants to just update or rename a message",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 745,
    "category": "Divyanshu Questions",
    "question": "7) which cicd tool u use?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 746,
    "category": "Divyanshu Questions",
    "question": "8) count total no of rows in a column?",
    "answer": "Docker questions :\n1.Multi-stage file\n2.CMD Vs ENTRYPOINT\n3.Dockerfile\n4.COPY Vs ADD\n5.Docker swarm\n6.Docker compose\nAzure questions:\n1.Availability set",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 747,
    "category": "Divyanshu Questions",
    "question": "2.What are the arguments in resource group?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 748,
    "category": "Divyanshu Questions",
    "question": "3.What are the resources you are using while creating VM?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 749,
    "category": "Divyanshu Questions",
    "question": "2.How many containers can be created in a pod?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 750,
    "category": "Divyanshu Questions",
    "question": "3.How many stages/steps are there in a pod?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 751,
    "category": "Divyanshu Questions",
    "question": "4.If pod is not running,how you can debug the same?",
    "answer": "Production implementation guide for: **4.If Pod Is Not Running, Can Debug The Same** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 752,
    "category": "Divyanshu Questions",
    "question": "5.If a pod is in pending stage/not working/not running, what would be the possible reasons?",
    "answer": "Common reasons for a Kubernetes pod remaining in Pending state: 1. **Insufficient CPU/Memory resources** on worker nodes. 2. **Node selector/tolerations mismatch** (tainted nodes). 3. **Persistent Volume Claim (PVC) binding failures**. 4. **Image pull errors** (incorrect registry credentials).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 753,
    "category": "Divyanshu HCL",
    "question": "8.⁠ ⁠Type Constraints in Terraform.?",
    "answer": "Terraform type constraints enforce input variable types. They include primitive types (string, number, bool) and complex types: collection types (list, map, set) and structural types (object, tuple).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 754,
    "category": "Divyanshu HCL",
    "question": "9.⁠ ⁠When Will the State File Be Created?",
    "answer": "10.⁠ ⁠What is linting? - TFLint\n11.⁠ ⁠Git push and git commit.\n12.⁠ ⁠Process for PR. (Pull request)\n13.⁠ ⁠Deployment group and task group\n14.⁠ ⁠Service connection\n15.⁠ ⁠Security best practices of pipeline\n1.⁠ ⁠What is linter\n2.⁠ ⁠what is provisioner\n3.⁠ ⁠what is dependances in terraform\n4.⁠ ⁠what is modules\n5.⁠ ⁠what is service connection\n6.⁠ ⁠what is sprint.\n7.⁠ ⁠what is work item\n8.⁠ ⁠difference between sprint and work item\n9.⁠ ⁠difference between variable.tf and terraform.tfvars\n10.⁠ ⁠how can we save sensitive data in state file",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 755,
    "category": "Divyanshu HCL",
    "question": "10.⁠ ⁠What is the move block in Terraform? Can you provide an example?",
    "answer": "The moved block in Terraform (introduced in v1.5.0) is a declarative way to rename or refactor resource addresses in your state file without destroying and recreating the actual physical cloud infrastructure. Example: moved { from = aws_instance.old_name to = aws_instance.new_name }.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 756,
    "category": "Divyanshu HCL",
    "question": "12.⁠ ⁠When integrating Snowflake with Azure DevOps to trigger a pipeline, which authentication method should you use?",
    "answer": "Pipeline triggers automate the execution of build and release pipelines:\n1. **CI Trigger**: Starts a pipeline run automatically when code is pushed to specific branches (e.g. `main`, `develop`).\n2. **PR Trigger**: Runs build tests when a Pull Request is opened to validate code merging.\n3. **Scheduled Trigger**: Runs on a recurring time window (cron style) for daily test runs.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 757,
    "category": "Divyanshu HCL",
    "question": "13.⁠ ⁠What methodology do you follow in Azure Boards? What is a sprint, and how does it differ from a work item?",
    "answer": "Comparing **Er From A Work Item** and **Second Option** in Microsoft Azure Cloud Services contexts:\n\n1. **Core Architecture**:\n   * **Er From A Work Item**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Er From A Work Item** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 758,
    "category": "Divyanshu HCL",
    "question": "14.⁠ ⁠What is the difference between a push and a commit in version control systems?",
    "answer": "Version control tracks and manages changes to software code over time:\n1. **Benefits**: Enables multi-developer collaboration, code reviews, audit history, and easy rollbacks of faulty code.\n2. **Git**: The industry standard distributed version control tool.\n3. **Platforms**: Remote platforms like GitHub, GitLab, and Azure Repos provide hosting, pull request workflows, and pipeline integrations.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 759,
    "category": "Divyanshu HCL",
    "question": "15.⁠ ⁠Have you worked with task groups in Azure DevOps?",
    "answer": "A Task Group in Azure DevOps (ADO) allows you to encapsulate a sequence of pipeline steps/tasks already defined in a build or release pipeline into a single reusable task. This simplifies pipeline configurations and ensures consistency across multiple pipelines.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 760,
    "category": "Divyanshu HCL",
    "question": "16.⁠ ⁠If you have a multi-stage pipeline in Azure DevOps and, upon execution, only one pipeline runs even though there are no dependencies between stages, how would you troubleshoot the issue?",
    "answer": "Troubleshooting involves diagnosing system issues by checking resource statuses (`describe`), reviewing logs, and running network tests.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 761,
    "category": "Divyanshu HCL",
    "question": "17.⁠ ⁠If you’ve written a Terraform configuration to deploy a virtual machine using a custom image, and you later update the software in that image, what will happen if you run terraform apply again?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 762,
    "category": "Divyanshu HCL",
    "question": "How to create 10 storage account in 10 subscription with single pipeline",
    "answer": "To deploy 10 storage accounts across 10 different subscriptions using a single Azure DevOps pipeline, we implement the following approach:\n1. **Dynamic Parameterization**: Define a configuration list (e.g. YAML variable map or a configuration file) detailing the subscription IDs, resource group names, and storage account names.\n2. **Management Group Level Service Connection**: Set up a Service Connection (using Service Principal or Managed Identity) that has access (e.g. 'Contributor' role) at the parent Management Group level, allowing it to authorize deployments across all child subscriptions.\n3. **Pipeline Loop or Matrix Strategy**: Use the Azure Pipelines YAML `matrix` syntax to trigger target jobs in parallel for all subscriptions, passing target subscription parameters dynamically. Within the Terraform code, configure the provider to dynamically reference the target `subscription_id` parameter.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 763,
    "category": "Divyanshu HCL",
    "question": "Qus .. Interviwer name shivam",
    "answer": "In production, we focus on troubleshooting systems (logs, network ports), automating deployment pipelines, and managing cluster workloads.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 764,
    "category": "Divyanshu HCL",
    "question": "What is linter in terraform",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 765,
    "category": "Divyanshu HCL",
    "question": "What is task group",
    "answer": "A Task Group in Azure DevOps (ADO) allows you to encapsulate a sequence of pipeline steps/tasks already defined in a build or release pipeline into a single reusable task. This simplifies pipeline configurations and ensures consistency across multiple pipelines.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 766,
    "category": "Divyanshu HCL",
    "question": "What is deployment group",
    "answer": "A Deployment Group in Azure DevOps is a logical set of target agent machines (VMs) that have physical agents installed. It allows you to define targets for deploying application packages in parallel or sequentially using release pipelines.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 767,
    "category": "Divyanshu HCL",
    "question": "What is ADO",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 768,
    "category": "Divyanshu HCL",
    "question": "What is sprint and work item",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 769,
    "category": "Divyanshu HCL",
    "question": "How you can secure ado \"By combining strong identity management, access controls, secure secrets handling, and continuous monitoring, Azure DevOps can be secured effectively.\"",
    "answer": "Monitoring: Setting up metrics and logging collection (e.g., Azure Monitor, AMA agent, Log Analytics) to track resource health.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 770,
    "category": "Divyanshu HCL",
    "question": "What is variable.tf and terraform.tf vars",
    "answer": "variable.tf is used to declare input variables, their types, descriptions, and default values. terraform.tfvars (and environment-specific files like dev.tfvars) is used to assign actual values to those variables. By default, terraform.tfvars is loaded automatically, while custom files must be passed via the -var-file flag.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 771,
    "category": "Divyanshu HCL",
    "question": "What is output block and how you will pass this into pipeline \"Output blocks expose Terraform resource data after deployment, and by capturing these outputs in the pipeline, you can pass resource info between pipeline steps for further automation.\"",
    "answer": "If I have a terraform code till vm or I applied terraform plan and apply but I what vm result in json format , what will be the command for it , tell me the command only terraform output -json/terraform output -json > output.json\n1> which tools used for pipeline\n2> provisoners in terraform\n3> if you mark a varibale as sensative in terraform , if while doing tef state so how you will see this variable ....? Sensitive variables are hidden in CLI outputs but stored in the state file. To see their values, you can check the raw state file or use terraform output -json carefully, keeping security in mind.\"\n4> 2nd if you passes the value hardcoded in vm so it will show in plan or not Yes, hardcoded values inside the resource block will show up in the terraform plan output.\n5- what is move block? A moved block in Terraform is used to tell Terraform that a resource has been renamed or moved to a new address, so it doesn't try to destroy and recreate it.\"\n6> is it will imapct our current infra structure or not ? \"No, a moved block does not impact the actual infrastructure. It only updates the Terraform state to reflect a renamed or relocated resource — without destroying or recreating anything.\"",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 772,
    "category": "Divyanshu HCL",
    "question": "What is pipeline or which pipeline u worked on like yaml plz expaln E2E flow \"A pipeline is an automated process that helps build, test, and deploy code or infrastructure in a reliable and repeatable manner. I have worked primarily on YAML-based pipelines in Azure DevOps to automate both application and infrastructure deployments.\" \"I’ve built end-to-end Azure DevOps YAML pipelines that automate infrastructure provisioning using Terraform, capture dynamic outputs like IPs, and deploy apps with proper validation and approvals. This ensures full CI/CD automation with infrastructure-as-code.\"",
    "answer": "Implementing deployment approvals and release gates in Azure DevOps:\n1. **Manual Approvals**: Pauses the pipeline stage and notifies reviewers. Deployment only continues once approved.\n2. **Release Gates**: Automated checks that evaluate criteria (e.g., query Azure Monitor alerts, call REST APIs, check active incidents) before allowing the deployment to proceed to the next stage (e.g. Production).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 773,
    "category": "Divyanshu HCL",
    "question": "What's is stateless and statefull in k8",
    "answer": "If any pod is in pending state so how u will trouble shoot and identify\nYou know about docker\nCan you explain where we are keeping our docker image",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 774,
    "category": "Divyanshu HCL",
    "question": "What is statefile and where we will keep it",
    "answer": "The Terraform state file (`terraform.tfstate`) is a JSON database that maps your declarative HCL configuration resources to the actual infrastructure deployed in your cloud provider. It should be stored in a secure remote backend (such as Azure Blob Storage or AWS S3 with state locking enabled) to ensure team collaboration, access controls, and security.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 775,
    "category": "Divyanshu HCL",
    "question": "What is volume in docker",
    "answer": "Have u worked on any scripting like bash and powrshell\n** Second round HCL Interview  ***\n1.⁠ ⁠Give me a example of recently you may upgraded templates in terraform\n2.⁠ ⁠what are the data types are you familiar in terraform.\n3.⁠ ⁠after which command state file will create.\n4.⁠ ⁠what is stage terraform download module and providers\n5.⁠ ⁠what are backends you familiar with\n6.⁠ ⁠how do you encrypt the state file\n7.⁠ ⁠you are creating variable in terraform and you need to provide it's default value. what argument will you declare provide the default value\n8.⁠ ⁠I have a vm that created through terraform and install the Microsoft office after create vm. and now i run command terraform apply again. what will happen. Microsoft office will remove or will be there\n9.⁠ ⁠what are lifecycle rules in terraform. which are declared within resource block in terraform\n10.⁠ ⁠what is dependances in terraform\n11.⁠ ⁠what are the gates in azure devops\n12.⁠ ⁠is macOS supported as agent pool\n13.⁠ ⁠in azure what is availability set",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 776,
    "category": "Divyanshu HCL",
    "question": "[12/5, 5:03 PM] Ms Yadav: 1st round HCL question...1.what is module?",
    "answer": "A Terraform module is a package of reusable Terraform configuration files in a directory. It allows you to group related infrastructure components together (like a VM, disk, and NIC) and instantiate them multiple times across environments (dev, test, prod) with different inputs.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 777,
    "category": "Divyanshu HCL",
    "question": "2.what is provisioners?",
    "answer": "Terraform provisioners (local-exec, remote-exec) are used to execute scripts or commands on the local runner or remote VM during creation or destruction. In production, they should be used as a last resort because they are not tracked in Terraform state; using cloud-init or VM extensions is preferred.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 778,
    "category": "Divyanshu HCL",
    "question": "3.what is null resource?",
    "answer": "The null_resource in Terraform implements the standard resource lifecycle but takes no actions on its own. It is commonly used to run local-exec or remote-exec provisioners (e.g. running a post-deployment script after a VM is ready) or to trigger actions using the triggers block when dependencies change.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 779,
    "category": "Divyanshu HCL",
    "question": "4.what is statefile?",
    "answer": "The Terraform state file (`terraform.tfstate`) is a JSON database that maps your declarative HCL configuration resources to the actual infrastructure deployed in your cloud provider. It should be stored in a secure remote backend (such as Azure Blob Storage or AWS S3 with state locking enabled) to ensure team collaboration, access controls, and security.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 780,
    "category": "Divyanshu HCL",
    "question": "5.what is state locking in terraform?",
    "answer": "State locking in Azure CI/CD deployments ensures concurrency control:\n1. **Lease Lock**: When a pipeline run triggers `terraform apply`, Terraform requests a lease lock on the Azure Blob storage state file. Other parallel runs are blocked until the lock is released.\n2. **Unlock Command**: If a pipeline terminates unexpectedly, leaving the lock active, you can force release it using the command: `terraform force-unlock <lock-id>` after verifying no other process is active.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 781,
    "category": "Divyanshu HCL",
    "question": "6.what is variable?",
    "answer": "Terraform variables can be declared in variable blocks with type constraints (string, number, bool, list, map, object) and stored/passed in terraform.tfvars files, environment variables (prefixed with TF_VAR_), or command line flags (-var=\"name=value\").",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 782,
    "category": "Divyanshu HCL",
    "question": "7.write a code with the help of module and for_each?",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 783,
    "category": "Divyanshu HCL",
    "question": "8.what is providers and write a code?",
    "answer": "9.how is the process to setup the terraform?? \"To set up Terraform, I install the CLI, configure the provider, write reusable code, and use commands like init, plan, and apply. I also use remote backends for secure state management and often modularize the code for better scalability.\"\n10.what is file provisioners? File provisioners in Terraform are used to copy files from local to remote machines. I’ve used them in test setups to upload shell scripts or configs to VMs, but in production I prefer more scalable approaches like cloud-init or pipelines.\"\n11.what is data variable? \"Data sources in Terraform let me read information about existing resources or infrastructure, which helps integrate Terraform with resources created outside or in different configurations, making the infrastructure more flexible and consistent.\n[12/5, 5:03 PM] Ms Yadav: 1. What is linter\n2.⁠ ⁠what is provisioner\n3.⁠ ⁠what is dependances in terraform\n4.⁠ ⁠what is modules\n5.⁠ ⁠what is service connection\n6.⁠ ⁠what is splinter\n7.⁠ ⁠what is work item\n8.⁠ ⁠difference between splinter and work item\n9.⁠ ⁠difference between variable.tf and terraform.tfvars\n10.⁠ ⁠how can we save sensitive data in state file\n[12/5, 5:03 PM] Ms Yadav: 1> which tools used for pipeline\n2> provisoners in terraform",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 784,
    "category": "Divyanshu HCL",
    "question": "3> if ypu mark a varibale as sensative in terraform , if while doing tef state so how you will see this variable ....?",
    "answer": "Production implementation guide for: **3> If Ypu Mark A Varibale As Sensative In Terraform , If While Doing Tef State So  Will See This Variable ....** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 785,
    "category": "Divyanshu HCL",
    "question": "5- what is move block?",
    "answer": "The moved block in Terraform (introduced in v1.5.0) is a declarative way to rename or refactor resource addresses in your state file without destroying and recreating the actual physical cloud infrastructure. Example: moved { from = aws_instance.old_name to = aws_instance.new_name }.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 786,
    "category": "Divyanshu HCL",
    "question": "6> is it will imapct our current infra structure or not ?",
    "answer": "[12/5, 5:03 PM] Ms Yadav: 1. Give me a example of recently you may upgraded templates in terraform\n2.⁠ ⁠what are the data types are you familiar in terraform\n3.⁠ ⁠after which command state file will command\n4.⁠ ⁠what is stage terraform download module and providers\n5.⁠ ⁠what are backends you familiar with\n6.⁠ ⁠how do you encrypt the state file\n7.⁠ ⁠you are creating variable in terraform and you need to provide it's default value. what argument will you declare provide the default value\n8.⁠ ⁠I have a vm that created through terraform and install the Microsoft office after create vm. and now i run command terraform apply again. what will happen. Microsoft office will remove or will be there\n9.⁠ ⁠what are lifecycle rules in terraform. which are declared within resource block in terraform\n10.⁠ ⁠what is dependances in terraform\n11.⁠ ⁠what are the gates in azure devops\n12.⁠ ⁠is macOS supported as agent pool\n13.⁠ ⁠in azure what is availability set\n[12/5, 6:31 PM] Anu DevOps G16:",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 787,
    "category": "Divyanshu HCL",
    "question": "What is pipeline or which pipeline u worked on like yaml plz expaln E2E flow",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 788,
    "category": "Divyanshu HCL",
    "question": "What is state file and where we will keep it",
    "answer": "The Terraform state file (`terraform.tfstate`) is a JSON database that maps your declarative HCL configuration resources to the actual infrastructure deployed in your cloud provider. It should be stored in a secure remote backend (such as Azure Blob Storage or AWS S3 with state locking enabled) to ensure team collaboration, access controls, and security.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 789,
    "category": "Divyanshu HCL",
    "question": "3> if you mark a variable as sensitive in terraform , if while doing tef state so how you will see this variable ....?",
    "answer": "Production implementation guide for: **3> If You Mark A Variable As Sensitive In Terraform , If While Doing Tef State So  Will See This Variable ....** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 790,
    "category": "Divyanshu HCL",
    "question": "6> is it will impact our current infra structure or not ?",
    "answer": "1.⁠ ⁠Give me a example of recently you may upgraded templates in terraform\n2.⁠ ⁠what are the data types are you familiar in terraform\n3.⁠ ⁠after which command state file will command\n4.⁠ ⁠what is stage terraform download module and providers\n5.⁠ ⁠what are backends you familiar with\n6.⁠ ⁠how do you encrypt the state file\n7.⁠ ⁠you are creating variable in terraform and you need to provide it's default value. what argument will you declare provide the default value\n8.⁠ ⁠I have a vm that created through terraform and install the Microsoft office after create vm. and now i run command terraform apply again. what will happen. Microsoft office will remove or will be there\n9.⁠ ⁠what are lifecycle rules in terraform. which are declared within resource block in terraform\n10.⁠ ⁠what is dependences in terraform\n11.⁠ ⁠what are the gates in azure devops\n12.⁠ ⁠is macOS supported as agent pool\n13.⁠ ⁠in azure what is availability set",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 791,
    "category": "Divyanshu HCL",
    "question": "[12/5, 6:32 PM] Anu DevOps G16: 1st round HCL question...1.what is module?",
    "answer": "A Terraform module is a package of reusable Terraform configuration files in a directory. It allows you to group related infrastructure components together (like a VM, disk, and NIC) and instantiate them multiple times across environments (dev, test, prod) with different inputs.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 792,
    "category": "Divyanshu HCL",
    "question": "4.what is state-file?",
    "answer": "The Terraform state file (`terraform.tfstate`) is a JSON database that maps your declarative HCL configuration resources to the actual infrastructure deployed in your cloud provider. It should be stored in a secure remote backend (such as Azure Blob Storage or AWS S3 with state locking enabled) to ensure team collaboration, access controls, and security.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 793,
    "category": "Divyanshu HCL",
    "question": "9.how is the process to setup the terraform??",
    "answer": "To automate and manage infrastructure, we write modular Terraform configurations, configure secure remote state backends, build continuous integration pipelines, and configure real-time metrics dashboards.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 794,
    "category": "Divyanshu HCL",
    "question": "10.what is file provisioners?",
    "answer": "The file provisioner in Terraform is used to copy files or directories from the local machine executing Terraform to a newly created remote VM. It requires SSH or WinRM access to be configured on the target resource.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 795,
    "category": "Divyanshu HCL",
    "question": "11.what is data variable?",
    "answer": "Data sources (declared via the 'data' block) allow Terraform to read-only query and import information about existing cloud resources created outside of the current Terraform configuration (e.g., retrieving an existing VNet ID to attach a subnet).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 796,
    "category": "Divyanshu HCL",
    "question": "3> if ypu mark a variable as sensitive in terraform , if while doing tef state so how you will see this variable ....?",
    "answer": "Production implementation guide for: **3> If Ypu Mark A Variable As Sensitive In Terraform , If While Doing Tef State So  Will See This Variable ....** in Terraform Infrastructure as Code (IaC):\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 797,
    "category": "Divyanshu HCL",
    "question": "7.⁠ ⁠What is life cycle block give 2-3 argument,can it work on storage account scenario?",
    "answer": "In Terraform, the **`lifecycle`** block is a nested block within a resource declaration used to customize resource creation, modification, and destruction behaviors:\n1. **`prevent_destroy` (Boolean)**: Prevents accidental deletion of critical resources. If set to `true`, Terraform will reject any plans that destroy the resource.\n2. **`create_before_destroy` (Boolean)**: Reverses replacement ordering. It creates the replacement resource first, then destroys the old resource, minimizing downtime.\n3. **`ignore_changes` (List of attributes)**: Ignores specific attributes that might be altered by external processes (like compliance tags or autoscale settings).\n\n**Storage Account Scenario**:\n* Yes, it works perfectly. For example, setting `prevent_destroy = true` on a production Storage Account acts as a guardrail to prevent any accidental data loss, while `ignore_changes = [tags]` prevents drift checks if dynamic compliance taggers alter the resource.",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 798,
    "category": "Divyanshu HCL",
    "question": "Q1. I want to manage a set of PVs say in ns \"lab\" using a SA \"testsa\".",
    "answer": "PersistentVolume (PV): A cluster-level storage resource provisioned by an administrator or StorageClass mapped to physical cloud disks.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 799,
    "category": "Divyanshu HCL",
    "question": "Q2. Cluster roll binding ?",
    "answer": "A ClusterRoleBinding in Kubernetes grants permissions defined in a ClusterRole to users, groups, or service accounts across the entire cluster, rather than restricting permissions to a single namespace (which is what a RoleBinding does).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 800,
    "category": "Divyanshu HCL",
    "question": "Q3. can you write is Yaml File and explain?",
    "answer": "YAML is a human-readable data serialization language. Example of a Kubernetes Pod manifest in YAML:\n```yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: my-app\nspec:\n  containers:\n  - name: web\n    image: nginx:latest\n```",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 801,
    "category": "Divyanshu HCL",
    "question": "Q4.terraform function ? \"Terraform functions are built-in helpers that let me manipulate data like strings, numbers, and lists. I commonly use functions like length(), join(), upper(), and file() to cleanly manage dynamic values in my Terraform code.\"",
    "answer": "Terraform has built-in functions to transform and combine values (custom functions are not supported). Examples include: string functions (join, upper), collection functions (lookup, merge), and IP network functions (cidrsubnet).",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 802,
    "category": "Divyanshu HCL",
    "question": "Q5.how to maintain Kubernetes cluster ?",
    "answer": "Production implementation guide for: **Q5. Maintain Kubernetes Cluster** in Kubernetes Orchestration:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 803,
    "category": "Divyanshu HCL",
    "question": "Q6.what is the deployment gate in ADO? \"Deployment gates in Azure DevOps are automated checks that run before or after deploying to an environment. They help ensure the release meets all required conditions like monitoring status, external approvals, or integration validations before proceeding to the next stage.\"",
    "answer": "Deployment Gates in Azure DevOps automate health checks before a release promotion. Gates query external systems (e.g. check Azure Monitor alerts, call REST APIs, or verify SonarQube quality gates) and block rollout if conditions are not met.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 804,
    "category": "Divyanshu HCL",
    "question": "Q7.what is pool ? \"In Azure DevOps, a pool is a group of agents that run pipeline jobs. I use Microsoft-hosted pools for general tasks and self-hosted pools when I need custom tools, network access, or better performance.\"",
    "answer": "In Azure DevOps, an Agent Pool is a collection of build/release agent machines (hosted or self-hosted) where pipeline jobs run. In Kubernetes, a Node Pool is a group of worker virtual machines sharing the same configuration.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 805,
    "category": "Divyanshu HCL",
    "question": "Q8. What is peering ? \"VNet Peering allows secure and private communication between two virtual networks in Azure. I use it to connect different environments or regions without using the internet. It's fast and cost-effective since traffic stays inside Azure’s private backbone.\"",
    "answer": "VNET Peering securely connects two Azure Virtual Networks (VNETs):\n1. **Private Routing**: Communication flows over Microsoft's private global backbone using private IP addresses. Traffic never goes over the public internet.\n2. **Setup**: Requires configuring two uni-directional peering links (VNET-A to VNET-B, and VNET-B to VNET-A) with Gateway Transit options for shared resources.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 806,
    "category": "Divyanshu HCL",
    "question": "Q.9 difference between provider and provisioners ?",
    "answer": "Comparing **Erence  Provider** and **Provisioners** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  Provider**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Provisioners**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Provider** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Provisioners** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 807,
    "category": "Divyanshu HCL",
    "question": "Q10.how to upgrade kubernets cluster?",
    "answer": "Production implementation guide for: **Q10. Upgrade Kubernets Cluster** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 808,
    "category": "Divyanshu HCL",
    "question": "2.if you are creating data block it will be part of state file ?",
    "answer": "3.⁠ ⁠What are data type in Terraform\n4.⁠ ⁠I need to create 10 storage account what type of data type should you used.\n5.⁠ ⁠Diff b/w for each and count.\n6.⁠ ⁠is count only work on integers ?, why deleting in count is difficult",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 809,
    "category": "Divyanshu HCL",
    "question": "what is provisioners",
    "answer": "Service connections\ngates\nTerraform dependencies\nDiff between count and for each\nDiff between list and map\nPower shell/ bash scripting idea -\nGit Hub Action Idea - working or not, basic question like event and syntax \"GitHub Actions allows us to automate workflows based on events like push or pull request. The workflow file is written in YAML and defines jobs and steps to execute. It's fully integrated with GitHub and great for CI/CD pipelines.\"\nMicro services basics \"Microservices break down an application into small, independent services. Each service handles a specific function and communicates with others over APIs. This architecture makes development faster, more scalable, and easier to maintain — though it comes with challenges like network overhead and complexity.\"",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 810,
    "category": "Divyanshu HCL",
    "question": "What is life cycle block",
    "answer": "if 2 team have same repo Access on ADO and how do you set for Auto PR raise when ever any changes done in the code. \"In Azure DevOps, when multiple teams are working on the same repo, I configure a pipeline to automatically create a PR whenever a feature branch is updated. The pipeline triggers on push and uses Azure CLI with az repos pr create to raise a pull request to the develop branch. This helps streamline collaboration and enforces structured code reviews.\"",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 811,
    "category": "Divyanshu HCL",
    "question": "How you can prevent a user in ADO from azure board , user can only access pipeline and repo \"Maine Azure Boards ke Area Path me 'View work item' permission ko Deny kiya, aur user ko Repos aur Pipelines ke liye proper contributor rights diye — isse user sirf required sections me kaam kar sakta hai.\"",
    "answer": "Managing security permissions during file migrations:\n1. **Linux Permissions**: Preserving user-owner (`chown`) and read/write execution permissions (`chmod`) using the `rsync -ahP` transfer tool.\n2. **Windows Permissions**: Preserving NTFS Access Control Lists (ACLs) using `robocopy <source> <dest> /E /COPY:DATS` where `S` represents Security/ACLs.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 812,
    "category": "Divyanshu HCL",
    "question": "How federation works in ADO (Ans- Service connection details) \"Federation in Azure DevOps is done through Microsoft Entra ID, where external users are authenticated using their own Azure AD. We set up cross-tenant trust and invite them via B2B. This enables SSO and secure access without managing multiple accounts.\"",
    "answer": "Service Connections in Azure DevOps connect pipelines to external services:\n1. **Role**: Establishes a secure connection to Azure subscriptions, AWS accounts, Docker registries, or SonarQube instances without exposing secrets.\n2. **Security**: Typically authenticated using an Azure Service Principal (using client secrets or federated credentials) with strict access bounds.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 813,
    "category": "Divyanshu HCL",
    "question": "How we can stop all outgoing traffic from azure VM without NSG (Ans - by firewall and route table) \"To block all outbound traffic from a VM without using NSG, I’d create a Route Table with a 0.0.0.0/0 prefix and set the next hop to None. By associating this route with the VM's subnet, all egress traffic is dropped at the routing layer.\"",
    "answer": "A **Network Security Group (NSG)** acts as a Layer 3/4 firewall in Azure:\n1. **Traffic Control**: It contains security rules that allow or deny inbound and outbound traffic to Azure resources.\n2. **Rules Criteria**: Rules are evaluated by priority (lowest number first) based on Source IP, Source Port, Destination IP, Destination Port, and Protocol (TCP/UDP/Any).\n3. **Association**: Can be associated directly to virtual machine Network Interfaces (NICs) or Subnets. Association at the Subnet level is recommended for consistency.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 814,
    "category": "HCL Ashish",
    "question": "[5/16, 3:12 PM] B16_G2 Mahender singh: [4/3, 9:43 PM] Anu DevOps G16: 10. What is the move block in Terraform? Can you provide an example?",
    "answer": "The moved block in Terraform (introduced in v1.5.0) is a declarative way to rename or refactor resource addresses in your state file without destroying and recreating the actual physical cloud infrastructure. Example: moved { from = aws_instance.old_name to = aws_instance.new_name }.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 815,
    "category": "HCL Ashish",
    "question": "When integrating Snowflake with Azure DevOps to trigger a pipeline, which authentication method should you use?",
    "answer": "Pipeline triggers automate the execution of build and release pipelines:\n1. **CI Trigger**: Starts a pipeline run automatically when code is pushed to specific branches (e.g. `main`, `develop`).\n2. **PR Trigger**: Runs build tests when a Pull Request is opened to validate code merging.\n3. **Scheduled Trigger**: Runs on a recurring time window (cron style) for daily test runs.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 816,
    "category": "HCL Ashish",
    "question": "What methodology do you follow in Azure Boards? What is a sprint, and how does it differ from a work item?",
    "answer": "Comparing **Er From A Work Item** and **Second Option** in Microsoft Azure Cloud Services contexts:\n\n1. **Core Architecture**:\n   * **Er From A Work Item**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Second Option**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Er From A Work Item** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Second Option** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 817,
    "category": "HCL Ashish",
    "question": "What is the difference between a push and a commit in version control systems?",
    "answer": "Version control tracks and manages changes to software code over time:\n1. **Benefits**: Enables multi-developer collaboration, code reviews, audit history, and easy rollbacks of faulty code.\n2. **Git**: The industry standard distributed version control tool.\n3. **Platforms**: Remote platforms like GitHub, GitLab, and Azure Repos provide hosting, pull request workflows, and pipeline integrations.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 818,
    "category": "HCL Ashish",
    "question": "Have you worked with task groups in Azure DevOps?",
    "answer": "A Task Group in Azure DevOps (ADO) allows you to encapsulate a sequence of pipeline steps/tasks already defined in a build or release pipeline into a single reusable task. This simplifies pipeline configurations and ensures consistency across multiple pipelines.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 819,
    "category": "HCL Ashish",
    "question": "If you have a multi-stage pipeline in Azure DevOps and, upon execution, only one pipeline runs even though there are no dependencies between stages, how would you troubleshoot the issue?",
    "answer": "Troubleshooting involves diagnosing system issues by checking resource statuses (`describe`), reviewing logs, and running network tests.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 820,
    "category": "HCL Ashish",
    "question": "If you’ve written a Terraform configuration to deploy a virtual machine using a custom image, and you later update the software in that image, what will happen if you run terraform apply again?",
    "answer": "[4/3, 9:43 PM] Anu DevOps G16: 1. What is linter\n2. what is provisioner\n3. what is dependances in terraform\n4. what is modules\n5. what is service connection\n6. what is splinter\n7. what is work item\n8. difference between splinter and work item\n9. difference between variable.tf and terraform.tfvars\n10. how can we save sensitive data in state file\nye amit ka hn\nIntroduce your self\nStatefile management\nMove block",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 821,
    "category": "HCL Ashish",
    "question": "Difference between variable.tf and tfvars",
    "answer": "Comparing **Erence  Variable.Tf** and **Tfvars** in DevOps Engineering contexts:\n\n1. **Core Architecture**:\n   * **Erence  Variable.Tf**: Configures low-level direct bindings, local resource properties, or direct traffic paths.\n   * **Tfvars**: Manages higher-level group abstractions, horizontal scaling, or distributed state boundaries.\n\n2. **Functional Differences & Control**:\n   * **Routing & State**: One operates statelessly at the node boundary, whereas the other preserves persistent identity state.\n   * **Security Policies**: One applies strict host access controls while the other handles routing, routing maps, or API authorization rules.\n\n3. **Interview Recommendation**:\n   * Choose **Erence  Variable.Tf** when targeting single-host boundaries, simple regional services, or stateless services.\n   * Choose **Tfvars** for automated orchestration, multi-zone recovery, and high availability systems.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 822,
    "category": "HCL Ashish",
    "question": "Type Constraints in Terraform.?",
    "answer": "Terraform type constraints enforce input variable types. They include primitive types (string, number, bool) and complex types: collection types (list, map, set) and structural types (object, tuple).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 823,
    "category": "HCL Ashish",
    "question": "When Will the State File Be Created?",
    "answer": "The Terraform state file is created automatically when you run 'terraform apply' for the first time and successfully provision resources. Running 'terraform init' or 'terraform plan' does not create a state file (except in remote backends where an empty state reference may be initialized).",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 824,
    "category": "HCL Ashish",
    "question": "What is linting?",
    "answer": "Git push and git commit.\nProcess for PR.\nDeployment group and task group\nService connection\nSecurity best practices of pipeline\n[4/3, 9:43 PM] Anu DevOps G16: round1:\n1. what dependency > implicit and explicit   share the syntax and chat\n2. what is move block in terraform\n3. what is state file and where we can store it\n4. when will state file create\n5. what is lock file. and why it is created\n6. what is difference between varible.tf and variables.tf\n7. what is terraform.tfvars\n8. what is service connection\n9. what are the thing required while creating service connection.\n10. what is basic in ADO\n11. what is stake holder in ADO\n12,.what are the security best practice in ADO\nround2:\n1. what dependency > implicit and explicit\n2. how you will managed multiple subscription\n3. what is difference between vm and vmss\n4  there is requirement to create two vm and two databased which approach you will follow vm or vmss\n5. let suppose you have 1500 subscription then how will you managed it from ADO level\n6. let suppose are architect and you want to setup infra then what will your approve like you have to provide solution to customer\n[4/3, 9:43 PM] Anu DevOps G16: Same puch rhe h\nLinting\nResource Module",
    "difficulty": "Hard",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 825,
    "category": "HCL Ashish",
    "question": "How you can secure ado",
    "answer": "Production implementation guide for: **Can Secure Ado** in DevOps Engineering:\n\n1. **Prerequisites & Credentials**:\n   * Configure target permissions using cloud Service Principals, Managed Identities, or OIDC pipeline logins.\n   * Install correct local utility versions (e.g. Terraform CLI, Ansible Core, or Kubernetes kubectl).\n\n2. **Configuration Steps**:\n   * Write the declarative manifest file (e.g., `main.tf` HCL files, Kubernetes YAML deployment cards, or Ansible playbook files).\n   * Enforce lint checks and run plan evaluations (e.g., `terraform plan` or `kubectl apply --dry-run=client`) to test validation.\n\n3. **Deployment & Troubleshooting**:\n   * Apply updates to a designated staging environment. Review application health logs (`kubectl logs` or `/var/log`).\n   * Promote resources to production using release environments locked by review approvals and automated monitor gates.",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 826,
    "category": "HCL Ashish",
    "question": "What is output block and how you will pass this into pipeline",
    "answer": "If I have a terraform code till vm or I applied terraform plan and apply but I what vm result in json format , what will be the command for it , tell me the command only\n[4/3, 9:43 PM] Anu DevOps G16: 1> which tools used for pipeline\n2> provisoners in terraform",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 827,
    "category": "HCL Ashish",
    "question": "Q4.terraform function ?",
    "answer": "Terraform has built-in functions to transform and combine values (custom functions are not supported). Examples include: string functions (join, upper), collection functions (lookup, merge), and IP network functions (cidrsubnet).",
    "difficulty": "Medium",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 828,
    "category": "HCL Ashish",
    "question": "Q6.what is the deployment gate in ADO?",
    "answer": "Deployment Gates in Azure DevOps automate health checks before a release promotion. Gates query external systems (e.g. check Azure Monitor alerts, call REST APIs, or verify SonarQube quality gates) and block rollout if conditions are not met.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 829,
    "category": "HCL Ashish",
    "question": "Q7.what is pool ?",
    "answer": "In Azure DevOps, an Agent Pool is a collection of build/release agent machines (hosted or self-hosted) where pipeline jobs run. In Kubernetes, a Node Pool is a group of worker virtual machines sharing the same configuration.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  },
  {
    "id": 830,
    "category": "HCL Ashish",
    "question": "Q8. What is peering ?",
    "answer": "Virtual Network (VNet) Peering connects two Azure virtual networks directly over the private Microsoft backbone network, allowing resources (like VMs or AKS pods) to communicate securely using private IP addresses with low latency.",
    "difficulty": "Easy",
    "source": "Professional Interview QA Guide",
    "company": null
  }
];

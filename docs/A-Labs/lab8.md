---
id: lab8
title: Lab 8
sidebar_position: 8
description: Lab 8 for Students to Complete and Submit
---

# Lab 8: Ansible

## Objective

  1. Confirm and review the Ansible package installed on matrix.senecapolytechnic.ca
  2. Explore and run Ansible's ad hoc commands
  3. Explore and study a few of Ansible's modules
  4. Explore, create, and run a few Ansible playbooks

## Overview

Ansible is an agentless IT automation engine for automating cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT system administration tasks.

Ansible uses no additional custom security infrastructure, and it uses a very simple human readable language called 'YAML', to compose an Ansible Playbook which allows you to describe the tasks you want to automate.

## Reference

  - For more detail information about ansible, check out the ansible web site at www.ansible.com
  - [Overview on how ansible works](https://www.ansible.com/overview/how-ansible-works)
  - [Ansible Latest User Guide](https://docs.ansible.com/ansible/latest/user_guide/index.html)
  - [A System Administrator's guide to getting started with Ansible](https://www.redhat.com/en/blog/system-administrators-guide-getting-started-ansible-fast)

## System requirements

Control Machine:

- Install Ansible on your Linux VM or use the Matrix server

Managed Machine(s) (your vm in myvmlab.senecapolytechnic):
- To be managed by the control machine
- You should be able to ssh from your control machine as a regular user to your managed machine without supplying a login password.
- Your account on your managed machine is a sudoer and can run sudo with/without password.

## Investigation 1: The Ansible Package

In this investigation, we explore the main components of the Ansible configuration management system and its operating environment. We also study a simple playbook for managing the configuration of a CentOS 7.x VM.

You need at least two Linux systems for this lab: your control machine and your assigned VM in myvmlab.senecapolytechnic.ca as the managed machine. The Ansible package is already installed on matrix for you.

:::tip

If you decide to use Matrix for this lab, please note that you may get an Ansible error related to locale. In that case, check your `.bashrc` file. Please comment out the following lines:

```
export LC_ALL=C
export LC_COLLATE=C
```

Once you comment out these lines (by placing a # symbol in front of them), run `source ~/.bashrc` and try again.

:::

### Key Concepts when using Ansible

- YAML - a human-readable data serialization language used by Ansible's playbooks. To know more, your can check out the [wikipedia page here](https://en.wikipedia.org/wiki/YAML) or a simple introduction [here](/C-ExtraResources/introduction-to-yaml.md)
- Control machine - the host on which you use Ansible to execute tasks on the managed machines
- Managed machine - a host that is configured by the control machine
- [Hosts file](/C-ExtraResources/sample-ansible-hosts.md) - contains information about machines to be managed - click [here](/C-ExtraResources/sample-ansible-hosts.md) for sample hosts file
- Idempotency - is an operation that, if applied twice to any value, gives the same result as if it were applied once.
- Ad hoc commands - a simple one-off task:

     - **shell commands**

         + ansible remote_machine_id \[-i inventory\] \[--private-key id\_rsa\] \[-u remote_user\] -a 'date'

- Ansible modules - code that performs a particular task such as copy a file, installing a package, etc:

     - **copy module**

         + ansible remote_machine_id -m copy -a "src=/ops445/ansible.txt dest=/tmp/ansible.txt"

     - **Package management**

         + ansible remote_machine_id -m yum -a "name=epel-release state=latest"

- Playbooks - contains one or multiple plays, each play defines a set of repeatable tasks on one or more managed machines. Playbooks are written in YAML. Every play in the playbook is created with environment-specific parameters for the target machines:

     - ansible-playbook remote\_machine\_id \[-i inventory\] setup_webserver.yaml
     - ansible-playbook remote\_machine\_id \[-i inventory\] firstrun.yaml

### Part 1: The Ansible package installed on matrix

You only need to have the "ansible" package on your control VM (i.e. matrix).

  - Login to matrix with your Seneca account.
  - Change to the directory ~/ops445 and clone your repository from GitHub. NOTE: you will have to add a public key from Matrix to your GitHub account if you haven't done so already.
  - Issue the following command to check the version of the "ansible" package:
 
```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible --version
```

It's a good idea to include the Ansible version number if you run into problems.

### Part 2: Setting Up Managed Machine

- SSH into your `myvmlab` remote machine from your control machine. You will have to specify the port number and password that were emailed to you.
- Once you can connect successfully, you should **disconnect** from `myvmlab`. Now copy your public key to `myvmlab` and verify that you can SSH without supplying a password. If you forget how to do this, [review the lab from OPS245](https://seneca-ictoer.github.io/OPS245/A-Labs/lab7#part-1-generating-private-and-public-keys-public-key-infrastructure).
- You should be logged into `myvmlab` once again. Configure the `sudoers` file so that members of the `wheel` group can run sudo commands without a password. 

:::danger

**WARNING**: If you make a mistake here, you might be locked out of the remote machine altogether. Use `visudo` to modify the sudoers file. If you need a refresher, review [the relevant lab from OPS245](https://seneca-ictoer.github.io/OPS245/A-Labs/lab4#part-1-finding-out-why-your-first-user-can-do-anything).

:::

- Once you have verified that sudo commands don't require a password, **log out** of `myvmlab` and proceed with the rest of the lab from your **control machine**.

### Part 3: Using Ansible

To confirm that you have access to the Ansible package on Matrix, try the following command:

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible --help
usage: ansible [-h] [--version] [-v] [-b] [--become-method BECOME_METHOD]
               [--become-user BECOME_USER] [-K] [-i INVENTORY] [--list-hosts]
               [-l SUBSET] [-P POLL_INTERVAL] [-B SECONDS] [-o] [-t TREE] [-k]
               [--private-key PRIVATE_KEY_FILE] [-u REMOTE_USER]
               [-c CONNECTION] [-T TIMEOUT]
               [--ssh-common-args SSH_COMMON_ARGS]
               [--sftp-extra-args SFTP_EXTRA_ARGS]
               [--scp-extra-args SCP_EXTRA_ARGS]
               [--ssh-extra-args SSH_EXTRA_ARGS] [-C] [--syntax-check] [-D]
               [-e EXTRA_VARS] [--vault-id VAULT_IDS]
               [--ask-vault-pass | --vault-password-file VAULT_PASSWORD_FILES]
               [-f FORKS] [-M MODULE_PATH] [--playbook-dir BASEDIR]
               [-a MODULE_ARGS] [-m MODULE_NAME]
               pattern
...
```

Take a look of all the available command line options for the "ansible" command. There are a lots of options when running Ansible. Let's move on to try a few simple ones.

### Part 4: Sample runs for some of the Ad hoc commands

The following commands are based on the following entries in the ansible inventory file called "hosts" in the current working directory:

```bash
...
[ops445]
vmlab   ansible_host=myvmlab.senecapolytechnic.ca ansible_port=7890
myvm    ansible_host=myvmlab.senecapolytechnic.ca ansible_port=7654
...
```

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible vmlab -i hosts --private-key ~/.ssh/id_rsa -u student -m copy -a "src=~/ops445/lab8/hosts dest=/tmp/ansible_hosts"
vmlab | CHANGED => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    }, 
    "changed": true, 
    "checksum": "bc4ffa4127e3af3228e61f0ddc4fca87c5e548a4", 
    "dest": "/tmp/ansible_hosts", 
    "gid": 1003, 
    "group": "student", 
    "md5sum": "17e94f6ee9ce0920ebf835bd4f6250a7", 
    "mode": "0664", 
    "owner": "student", 
    "size": 423, 
    "src": "/home/student/.ansible/tmp/ansible-tmp-1616732233.49-236519-35150082693243/source", 
    "state": "file", 
    "uid": 1003
}
```

**vmlab** is the remote machine ID.

**hosts** is the name of the ansible inventory file in the current working directory, you may also specify the inventory file with full path name, e.g. /home/raymond.chan/ops445/lab8/hosts.

**--private-key id\_rsa** is the private key for ssh key-based authentication for connecting to the remote machine.

**-u** is for specifying the user account to be used to login to the remote machine.

**-m copy** is to tell ansible to use the "copy" module.

after **-a** is the arguments to the copy module, which specify the source file and the destination for the copy action.

If you got the same "SUCCESS" message, login to the remote machine and check the directory "/tmp" for the file ansible_hosts.

### Part 5: Sample runs for using some Ansible's modules

You can get a complete list of all the ansible modules installed on you system with the following command:

```bash
ansible-doc --list_files
```

"yum" is a stable ansible module. You can get the detail information about any ansible module with the ansible-doc, try the following commands to see the documentation and examples for using the copy and yum modules:

```bash
ansible-doc copy

ansible-doc yum
```

The following command demonstrates how to install the "epel-release" package with the "yum" module with different module arguments and under different remote user (your result may be differ from what is show below):

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible vmlab -i hosts --private-key ~/.ssh/id_rsa -u student -m yum -a "name=epel-release state=present"
vmlab | FAILED! => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    }, 
    "changed": false, 
    "changes": {
        "installed": [
            "epel-release"
        ]
    }, 
    "msg": "You need to be root to perform this command.\n", 
    "rc": 1, 
    "results": [
        "Loaded plugins: fastestmirror\n"
    ]
}
```

Add the '-b' option to tell ansible to invoke "sudo" when running the yum command on the remote machine:

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible vmlab -i hosts --private-key ~/.ssh/id_rsa -u student -b -m yum -a "name=epel-release state=present"
vmlab | CHANGED => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    }, 
    "changed": true, 
    "changes": {
        "installed": [
            "epel-release"
        ]
    }, 
    "msg": "", 
    "rc": 0, 
    "results": [
        "Loaded plugins: fastestmirror\nLoading mirror speeds from cached hostfile\n * base: mirror.netflash.net\n * extras: mirror.netflash.net\n * updates: mirror.calgah.com\nResolving Dependencies\n--> Running transaction check\n---> Package epel-release.noarch 0:7-11 will be installed\n--> Finished Dependency Resolution\n\nDependencies Resolved\n\n================================================================================\n Package                Arch             Version         Repository        Size\n================================================================================\nInstalling:\n epel-release           noarch           7-11            extras            15 k\n\nTransaction Summary\n================================================================================\nInstall  1 Package\n\nTotal download size: 15 k\nInstalled size: 24 k\nDownloading packages:\nRunning transaction check\nRunning transaction test\nTransaction test succeeded\nRunning transaction\n  Installing : epel-release-7-11.noarch                                     1/1 \n  Verifying  : epel-release-7-11.noarch                                     1/1 \n\nInstalled:\n  epel-release.noarch 0:7-11                                                    \n\nComplete!\n"
    ]
}
```

If you run the same command the 2nd time:

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible vmlab -i hosts --private-key ~/.ssh/id_rsa -u student -b -m yum -a "name=epel-release state=present"
vmlab | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    }, 
    "changed": false, 
    "msg": "", 
    "rc": 0, 
    "results": [
        "epel-release-7-11.noarch providing epel-release is already installed"
    ]
}
```

Now run the similar command but with "state=latest":

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible vmlab -i hosts --private-key ~/.ssh/id_rsa -u student -b -m yum -a "name=epel-release state=latest"
vmlab | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python"
    }, 
    "changed": false, 
    "changes": {
        "installed": [], 
        "updated": []
    }, 
    "msg": "", 
    "rc": 0, 
    "results": [
        "All packages providing epel-release are up to date", 
        ""
    ]
}
```

Depending on the status of the packages installed on your VM, the output may not exactly the same as shown above. Please read and try to understanding the meaning of the text return by ansible. If it's been updated instead, then run the command again.

### Part 6: Gather software and hardware information available on remote machine

One of the core ansible module is called "setup", it is automatically called by ansible playbook to gather useful "facts" about remote hosts that can be used in ansible playbooks. It can also be executed directly by the ansible command (/usr/bin/ansible) to check out what "facts" are available on a remote host.

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible vmlab -i hosts --private-key ~/.ssh/id_rsa -u student -m setup
vmlab | SUCCESS => {
    "ansible_facts": {
        "ansible_all_ipv4_addresses": [
            "10.102.114.140"
        ], 
        "ansible_all_ipv6_addresses": [
            "fe80::21d:d8ff:feb7:20cc"
        ], 
        "ansible_apparmor": {
            "status": "disabled"
        }, 
        "ansible_architecture": "x86_64", 
        "ansible_bios_date": "11/26/2012", 

...

        "ansible_userspace_bits": "64", 
        "ansible_virtualization_role": "guest", 
        "ansible_virtualization_type": "VirtualPC", 
        "discovered_interpreter_python": "/usr/bin/python", 
        "gather_subset": [
            "all"
        ], 
        "module_setup": true
    }, 
    "changed": false
}
```

[Click here for complete sample contents of the above](/C-ExtraResources/ansible-setup.md)

## Investigation 2: Ansible Playbook

### What is a playbook?

* Playbook is one of the core features of Ansible.
* Playbook tells Ansible what to execute by which user on the remote machine.
* Playbook is like a to-do list for Ansible
* Playbook is written in "YAML".
* Playbook links a task to an ansible module and provide needed arguments to the module which requires them.

### Part 1: A playbook to update the /etc/motd file

Name: motd-play.yml

```bash
[raymond.chan@mtrx-node02pd lab8]$ cat motd-play.yml 
---
- name: update motd file
  hosts: vmlab
  user: instructor
  vars:
    apache_version: 2.6
    motd_warning: "WARNING: used by ICT faculty/students only.\n"
    testserver: yes
  tasks:
    - name: setup a MOTD
      copy:
        dest: /etc/motd
        content: "{{ motd_warning }}"
```

Sample Run:

```bash
[raymond.chan@mtrx-node02pd lab8]$ ansible-playbook -i hosts -b motd-play.yml 

PLAY [update motd file] *******************************************************************

TASK [Gathering Facts] ********************************************************************
ok: [vmlab]

TASK [setup a MOTD] ***********************************************************************
changed: [vmlab]

PLAY RECAP ********************************************************************************
vmlab   ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
```

Try to run it the 2nd time and pay attention to the result. What conclusion can you draw?

### Part 2: A playbook to install and start Apache Server

Name: httpd-play.yml

```bash
---
- hosts: vmlab
  user: instructor
  become: yes
  vars:
    apache_version: 2.6
    motd_warning: "WARNING: used by ICT faculty/students only.\n"
    testserver: yes
  tasks:
    - name: install apache
      action: yum name=httpd state=installed
    
    - name: restart apache
      service: 
        name: httpd
        state: restarted
```

Sample Run:

```bash
[rchan@centos7 playbooks]$ ansible-playbook -i hosts httpd-play.yml

PLAY [vmlab] ********************************************************************

TASK [Gathering Facts] **********************************************************
ok: [vmlab]

TASK [install apache] ***********************************************************
changed: [vmlab]

TASK [restart apache] ***********************************************************
changed: [vmlab]

PLAY RECAP **********************************************************************
vmlab : ok=3  changed=2  unreachable=0  failed=0  skipped=0  rescued=0  ignored=0
```

## Investigation 3: Using Playbook to configure an OPS445 Linux VM machine

Assume you have just installed the latest version of CentOS 7.x on a VM with GNOME Desktop. You need to configure it so that you can use it for doing the Labs for OPS445.

Study the documentation and examples of following ansible modules:

   - copy
   - file
   - hostname
   - template
   - user
   - yum

Create an ansible playbook named "config_ops445.yml" using the appropriate modules to perform the following configuration tasks on your assigned VM:

  - update Apache (httpd) installed in the Investigation 2 - Part 2
  - install extra packages repository for enterprise Linux (EPEL) if it is not already installed
  - remove 'tree' package
  - set the hostname to your Seneca username (Seneca ID)
  - create a new user with your Seneca_ID with sudo access
  - configure the new user account you created above so that you can ssh to it without password
  - setup a directory structure **using a loop** for completing and organizing labs as shown below:
     
```bash
      /home/[seneca_id]/ops445/lab1
      /home/[seneca_id]/ops445/lab2
      /home/[seneca_id]/ops445/lab3
      /home/[seneca_id]/ops445/lab4
      /home/[seneca_id]/ops445/lab5
      /home/[seneca_id]/ops445/lab6
      /home/[seneca_id]/ops445/lab7
      /home/[seneca_id]/ops445/lab8
```

  - when it's ready, run your playbook
  - in order to test it, log into the VM with the newly created user (your Seneca_ID), install the 'tree' package with sudo, and check the directory structure with the 'tree' command
  - if everything is correct, capture the output of the Ansible command running your playbook successfully to a file named "lab8\_\[seneca\_id\].txt"

## Lab 8 Sign-off (Show Instructor)

### Have the following items ready to show your instructor:

* The updated inventory file called "hosts" which you used to access your VM.
* The Ansible playbook called "config\_ops445.yml" for configuring the VM.
* The result of running the playbook "config\_ops445.yml". Save the result in a file called "lab8\_\[seneca\_id\].txt"

### Upload the following files to blackboard

* hosts
* config\_ops445.yml
* lab8\_\[seneca\_id\].txt

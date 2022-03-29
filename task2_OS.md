#Task 3 : Operating System

##What is an Operating System?
An operating system is a program on which application programs are executed and acts as a communication bridge (interface) between the user and the computer hardware. Its main tasks include allocation of resources and services like allocation of memory, devices, processors and information. 

The goal of an Operating System is to execute user programs and to make tasks easier. So it uses all hardware systems to perform these tasks like the brain of the body controlling all the limbs. A more detailed report on operating systems is underway.

Some widely used types of operating systems are: 
-Batch Operating System
-Time-Sharing Operating System
-Distributed Operating System
-Network Operating System
-Real-Time Operating System

##Batch Operating System:
A Batch Operating System does not interact with the computer directly. There is an operator which takes similar jobs having the same requirement and group them into batches. It is the responsibility of the operator to sort jobs with similar needs.

**Advantages of Batch Operating System:**
-It is very difficult to guess or know the time required for any job to complete. So the processors only get to know how much time will be need to complete once the process is in the queue.
-Multiple users can share the batch system.
-The idle time for Batch system is very less because the speed of the mechanical I/O devices is slower than the CPU.
-It is easy to complete large repetitive task in batch systems.
   **Disadvantages of Batch Operating System:**
-The Operator using the computer should be familiar with using batch systems.
-They are hard to debug. Sometimes it can be very expensive.
-The other jobs will have to wait for an unprecedented time if any job fails.
CPU is often idle, because the speed of the mechanical I/O devices is slower than the CPU.
   ** Examples of Batch based Operating System:** Payroll System, Bank Statements, etc.


##Time-Sharing Operating System:
Time-sharing is a technique which enables many people, located at various terminals, to use a particular computer system at the same time. Time-sharing or multitasking is a logical extension of multiprogramming. Each task is given some time to execute so that all the tasks work smoothly. Each user gets the time of CPU as they use a single system. These systems are also known as Multitasking Systems. The task can be from a single user or different users also. The time that each task gets to execute is called quantum. After this time interval is over OS switches over to the next task. 
**Advantages of Time-Sharing OS:**  
-Each task gets an equal opportunity
-Provides the advantages of having quick response time.
-Fewer chances or avoidance of duplication of software.
-CPU idle time is reduced.
**Disadvantages of Time-Sharing OS:** 
-Reliability problem
-One must have to take care of the security and integrity of user programs and data
-Data communication problem
**Examples of Time-Sharing OSs are:** Multics, Unix, etc.

##Distributed Operating System:
Distributed systems use multiple central processors to serve multiple real-time applications and multiple users. Data processing jobs are distributed among the processors accordingly. Various autonomous interconnected computers communicate with each other using a shared communication network. Independent systems possess their own memory unit and CPU. These are referred to as loosely coupled systems or distributed systems. These system’s processors differ in size and function. 
**Advantages of Distributed Operating System:**  
-Failure of one will not affect the other network communication, as all systems are independent from each other.
-Since resources are being shared, computation is highly fast and durable
Load on host computer reduces
-These systems are easily scalable as many systems can be easily added to the network
-Delay in data processing reduces
**Disadvantages of Distributed Operating System:**  
-Failure of the main network will stop the entire communication
-To establish distributed systems the language which is used are not well defined yet
-These types of systems are not readily available as they are very expensive. Not only that the underlying software is highly complex and not understood well yet.

##Network Operating Systems:
A Network Operating System runs on a server and provides the server the capability to manage data, users, groups, security, applications, and other networking functions. The primary purpose of the network operating system is to allow shared file and printer access among multiple computers in a network, typically a local area network (LAN), a private network or to other networks.
**Advantages of Network Operating System:**  
-Highly stable centralised servers
-Security concerns are handled through servers
-New technologies and hardware up-gradation are easily integrated into the system
-Server access is possible remotely from different locations and types of systems
**Disadvantages of Network Operating System:**  
-High cost of buying and running a server.
-Regular maintenance and updates are required.

##Real-Time Operating System:
These types of OSs serve real-time systems. The time interval required to process and respond to inputs is very small. This time interval is called response time. A real-time operating system must have well-defined, fixed time constraints, otherwise the system will fail.
There are two types of real-time operating systems.
-Hard Real-time Operating System
-Soft Real-time Operating System

All Operating systems either have Command Line Interface (CLI) or a Graphical User Interface (GUI). Some examples of commonly used Operating systems are:
-Windows (GUI based)
-GNU/ Linux (CLI/GUI based)
-Mac OS (GUI based)
-Android (Mobile GUI based)
-iOS (Mobile GUI based)

Important functions of an operating System:
The Operating System provides certain services to the users as the following:
-Program Execution
-Handling I/O operations
-Manipulation of file system
-Error Detection and Handling
-Resource Allocation
-Tracking & Accounting functionalities
-Information and Resource Protection

##Files and File System:
One of the most important parts of an operating system is the file system. File system provides resource abstraction related with the secondary storage. It permits users to create data collections called files with their own properties.
A collection of functions can be performed on a file such as:
-Create
-Delete
-Open
-Close
-Read
-Write




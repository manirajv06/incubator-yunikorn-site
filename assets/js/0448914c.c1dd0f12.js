"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34786],{43567:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=i(13274),s=i(1780);const r={id:"scheduler_configuration",title:"Scheduler Configuration"},a=void 0,o={id:"design/scheduler_configuration",title:"Scheduler Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/design/scheduler_configuration.md",sourceDirName:"design",slug:"/design/scheduler_configuration",permalink:"/docs/1.1.0/design/scheduler_configuration",draft:!1,unlisted:!1,tags:[],version:"1.1.0",frontMatter:{id:"scheduler_configuration",title:"Scheduler Configuration"},sidebar:"docs",previous:{title:"Support K8s Predicates",permalink:"/docs/1.1.0/design/predicates"},next:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/1.1.0/design/state_aware_scheduling"}},l={},u=[{value:"Scheduler Configuration",id:"scheduler-configuration",level:2},{value:"Queue Configuration",id:"queue-configuration",level:2},{value:"Queue Definition",id:"queue-definition",level:3},{value:"User definition",id:"user-definition",level:3},{value:"Placement Rules definition",id:"placement-rules-definition",level:3},{value:"Configuration updates",id:"configuration-updates",level:3},{value:"Access Control Lists",id:"access-control-lists",level:3},{value:"Shim Configuration",id:"shim-configuration",level:2},{value:"K8s shim",id:"k8s-shim",level:3},{value:"YARN shim",id:"yarn-shim",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Yunikorn core scheduler configuration has two separate areas that need to be configured. The scheduler service itself, things like web service ports etc, and the queue configuration. The split between the two types of configuration is proposed with two points in mind:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Separation of duty"}),"\n",(0,t.jsx)(n.li,{children:"Dynamic vs Static"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The scheduler configuration is mainly static. There is no need to change a web service port or a scheduling policy while the service is running. The queue configuration is far more dynamic and can change while the service is running."}),"\n",(0,t.jsx)(n.p,{children:"From a separation of duty we can allow an operator that manages the cluster to make changes to the scheduler queues. You would not want to allow that administrator to change the scheduler configuration itself."}),"\n",(0,t.jsx)(n.p,{children:"Separated from the core scheduler configuration we have one or more shim configurations. We currently cannot anticipate the deployment model of the scheduler and its shims. A shim, like the k8s-shim, might run in the same container or node but there is no guarantee it will. We also do not know the number of shims that will be used with one core scheduler. There is also still the possibility to have multiple instances of the same shim with one core scheduler."}),"\n",(0,t.jsx)(n.p,{children:"Shim configuration must be independent of the core scheduler configuration."}),"\n",(0,t.jsx)(n.h2,{id:"scheduler-configuration",children:"Scheduler Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Scheduler configuration covers all the configuration needed to start the scheduler and the dependent services. The configuration consists of a simple key value pair. All configuration to start the service must be part of this configuration.\nThe scheduler configuration must exclude the queue related configuration."}),"\n",(0,t.jsx)(n.p,{children:"Scheduler configuration as currently identified"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bind host"}),"\n",(0,t.jsx)(n.li,{children:"Service port"}),"\n",(0,t.jsx)(n.li,{children:"Web bind host"}),"\n",(0,t.jsx)(n.li,{children:"Web service port"}),"\n",(0,t.jsx)(n.li,{children:"SSL config"}),"\n",(0,t.jsx)(n.li,{children:"Shims Configured"}),"\n",(0,t.jsx)(n.li,{children:"SchedulerACL"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Configuration to consider:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Assign multiple containers in one go: use case is bin packing, don\u2019t spread an application over large number of nodes. Needs to become configurable."}),"\n",(0,t.jsxs)(n.li,{children:["Pre-emption related configuration:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"threshold: do not pre-empt from a queue if the cluster load is below a certain threshold."}),"\n",(0,t.jsx)(n.li,{children:"Interval: pause between pre-emption checks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"queue-configuration",children:"Queue Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"queue-definition",children:"Queue Definition"}),"\n",(0,t.jsxs)(n.p,{children:["On startup the scheduler will load the configuration for the queues from the provided configuration file after initialising the service. If there is no queue configuration provided the scheduler should start up with a simple default configuration which performs a well documented default behaviour.\nBased on the kubernetes definition this configuration could be a configMap ",(0,t.jsx)("sup",{id:"s1",children:(0,t.jsx)(n.a,{href:"#f1",children:"1"})})," but not a CRD."]}),"\n",(0,t.jsx)(n.p,{children:"The queue configuration is dynamic. Changing the queue configuration must not require a scheduler restart.\nChanges should be allowed by either calling the GO based API, the REST based API or by updating the configuration file. Changes made through the API must be persisted in the configuration file. Making changes through an API is not a high priority requirement and could be postponed to a later release."}),"\n",(0,t.jsxs)(n.p,{children:["The queue configuration defines queues in a hierarchy: a tree. The base of the tree is the ",(0,t.jsx)(n.em,{children:"root"})," queue. The queue configuration must define a single ",(0,t.jsx)(n.em,{children:"root"})," queue. All queues that are defined in queue configuration are considered ",(0,t.jsx)(n.em,{children:"managed"})," queues."]}),"\n",(0,t.jsx)(n.p,{children:"The root queue reflect the whole cluster. Resource settings on the root queue are not allowed. The resources available to the root queue are calculated based on the registered node resources in the cluster. If resources would be specified on the root limit the cluster would either be artificially limited to a specific size or expect resources to be available that are not there."}),"\n",(0,t.jsx)(n.p,{children:"Queues in the hierarchy in the tree are separated by the \u201c.\u201d dot character (ASCII 0x2E). This indirectly means that a queue name itself cannot contain a dot as it interferes with the hierarchy separator. Any queue name in the configuration that contains a dot will cause the configuration to be considered invalid. However we must allow placement rules to create a queue with a dot based input."}),"\n",(0,t.jsxs)(n.p,{children:["Not all queues can be used to submit an application to. Applications can only be submitted to a queue which does not have a queue below it. These queues are defined as the ",(0,t.jsx)(n.em,{children:"leaf"})," queues of the tree. Queues that are not a ",(0,t.jsx)(n.em,{children:"leaf"})," and thus can contain other queues or child queues are considered ",(0,t.jsx)(n.em,{children:"parent"})," queues."]}),"\n",(0,t.jsxs)(n.p,{children:["Each queue must have exactly one ",(0,t.jsx)(n.em,{children:"parent"})," queue, besides the root queue. The root queue cannot have a ",(0,t.jsx)(n.em,{children:"parent"})," and will be automatically defined as a ",(0,t.jsx)(n.em,{children:"parent"})," queue type.\nA fully qualified queue name, case insensitive, must be unique in the hierarchy. A queue in the hierarchy can thus be only uniquely identified by its fully qualified path. This means that a queue with the same name is allowed at a different point in the hierarchy.\nExample:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"root.companyA.development\nroot.companyB.development\nroot.production.companyA\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the example the queues ",(0,t.jsx)(n.em,{children:"companyA"})," and ",(0,t.jsx)(n.em,{children:"companyB"})," are ",(0,t.jsx)(n.em,{children:"parent"})," queues. Both ",(0,t.jsx)(n.em,{children:"development"})," queues are ",(0,t.jsx)(n.em,{children:"leaf"})," queues.\nThe second instance of the ",(0,t.jsx)(n.em,{children:"companyA"})," queue is a ",(0,t.jsx)(n.em,{children:"leaf"})," queue which is not related to the first instance as it is defined at a different level in the hierarchy."]}),"\n",(0,t.jsxs)(n.p,{children:["The queue as defined in the configuration will be assigned a queue type. This can either be implicit based on how the queue is defined in the hierarchy or explicit by setting the optional ",(0,t.jsx)(n.em,{children:"parent"})," property as part of the queue definition. By default all queues will be assigned their type based on the configuration. There is only one case in which this should automatic process would need to be overridden and that is to mark a ",(0,t.jsx)(n.em,{children:"leaf"})," in the configuration as a ",(0,t.jsx)(n.em,{children:"parent"}),". The use case is part of the ",(0,t.jsx)(n.a,{href:"#placement-rules-definition",children:"placement rules"}),". In that case the configuration could be used to define a ",(0,t.jsx)(n.em,{children:"parent"})," queue for only ",(0,t.jsx)(n.em,{children:"unmanaged"})," queues."]}),"\n",(0,t.jsx)(n.p,{children:"Access control lists provide a split between submission permission and administration permissions. Submission access to a queue allows an application to be submitted to the queue by the users or groups specified. The administration permissions allows submission to the queue plus the administrative actions. Administrative actions are currently limited to killing an application and moving an application to a different queue."}),"\n",(0,t.jsx)(n.p,{children:"Access control lists are checked recursively up to the root of the tree starting at the lowest point in the tree. In other words when the access control list of a queue does not allow access the parent queue is checked. The checks are repeated all the way up to the root of the queues."}),"\n",(0,t.jsx)(n.p,{children:"On each queue, except the root queue, the following properties can be set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["QueueType:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parent (boolean)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Resource settings:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Guaranteed (resource)"}),"\n",(0,t.jsx)(n.li,{children:"Maximum (resource)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Running Application limit:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum (integer)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Queue Permissions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SubmitACL (ACL)"}),"\n",(0,t.jsx)(n.li,{children:"AdminACL (ACL)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Pre emption setting:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PreEmptionAllowed (boolean)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Application sort algorithm:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ApplicationSortPolicy (enumeration: fair, fifo)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"On the root queue only the following properties can be set:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Running Application limit:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum (integer)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Queue Permissions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SubmitACL (ACL)"}),"\n",(0,t.jsx)(n.li,{children:"AdminACL (ACL)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Application sort algorithm:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ApplicationSortPolicy (enumeration: fair, fifo)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"user-definition",children:"User definition"}),"\n",(0,t.jsx)(n.p,{children:"Applications are run by a user could run in one or more queues. The queues can have limits set on the resources that can be used. This does not limit the amount of resources that can be used by the user in the cluster."}),"\n",(0,t.jsx)(n.p,{children:"From an administrative perspective setting a limit of the resources that can be used by a specific user can be important.  In this case a user is broadly defined as the identity that submits the application. This can be a service or a person, from a scheduling perspective there is no difference.\nUser limits can prevent a take over of a queue or the cluster by a misbehaving user or application. From a multi tenancy perspective user limits also allows for sharing or subdivision of resources within the tenancy however that is defined."}),"\n",(0,t.jsx)(n.p,{children:"Adding user based limits will allow the cluster administrators to control the cluster wide resource usage of a user:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Running Application limit:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum (integer)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Resource setting:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum (resource)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"placement-rules-definition",children:"Placement Rules definition"}),"\n",(0,t.jsx)(n.p,{children:"Schedulers can place an application in a queue dynamically. This means that an application when submitted does not have to include a queue to run in."}),"\n",(0,t.jsxs)(n.p,{children:["A placement rule will use the application details to place the application in the queue. The outcome of running a placement rule will be a fully qualified queue or a ",(0,t.jsx)(n.code,{children:"fail"}),", which means execute the next rule in the list. Rules will be executed in the order that they are defined."]}),"\n",(0,t.jsxs)(n.p,{children:["During the evaluation of the rule the result could be a queue name that contains a dot. This is especially true for user and group names which are POSIX compliant. When a rule generates a partial queue name that contains a dot it must be replaced as it is the separator in the hierarchy. The replacement text will be ",(0,t.jsx)(n.code,{children:"_dot_"})]}),"\n",(0,t.jsx)(n.p,{children:"The first rule that matches, i.e. returns a fully qualified queue name, will halt the execution of the rules. If the application is not placed at the end of the list of rules the application will be rejected. Rules can return queues that are not defined in the configuration only if the rule allows creation of queues."}),"\n",(0,t.jsxs)(n.p,{children:["These queues created by the placement rules are considered ",(0,t.jsx)(n.em,{children:"unmanaged"})," queues as they are not managed by the administrator in the configuration. An administrator cannot influence the ",(0,t.jsx)(n.em,{children:"unmanaged"})," queue creation or deletion. The scheduler creates the queue when it is needed and removes the queue automatically when it is no longer used."]}),"\n",(0,t.jsx)(n.p,{children:"Rules provide a fully qualified queue name as the result. To allow for deeper nesting of queues the parent of the queue can be set as part of the rule evaluation. The rule definition should allow a fixed configured fully qualified parent to be specified or it can call a second rule to generate the parent queue.  By default a queue is generated as a child of the root queue."}),"\n",(0,t.jsxs)(n.p,{children:["Example:\nPlacing an application submitted by the user ",(0,t.jsx)(n.em,{children:"user1"})," whom is a member of the groups ",(0,t.jsx)(n.em,{children:"user1"})," and ",(0,t.jsx)(n.em,{children:"companyA"})," in a queue based on UserName:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Rule name: UserName\n    Parent: root.fixedparent\nResult: root.fixedparent.user1\n\nRule name: UserName\n    Parent: SecondaryGroup\n\tFilter:\n        Type: allow\n\t    Groups: company.*\nResult: root.companyA.user1\n\nRule name: UserName\nFilter:\n    Users: user2,user3\nResult: denied placement\n"})}),"\n",(0,t.jsx)(n.p,{children:"The default behaviour for placing an application in a queue, which would do the same as using the queue that is provided during submit, would be a rule that takes the provided queue with the create flag set to false."}),"\n",(0,t.jsxs)(n.p,{children:["Access permissions will be enforced as part of the rule evaluation. For ",(0,t.jsx)(n.em,{children:"managed"})," queues this means that the ACL for the queue itself is checked. For an ",(0,t.jsx)(n.em,{children:"unmanaged"})," queue the parent queue ACL is the one that is checked. For the definition of the access control list and checks see the ",(0,t.jsx)(n.a,{href:"#access-control-lists",children:"Access Control Lists"})," chapter."]}),"\n",(0,t.jsx)(n.p,{children:"Defining placement rules in the configuration requires the following information per rule:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Name:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name (string)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Parent","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parent (string)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Create Flag:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create (boolean)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Filter:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A regular expression or list of users/groups to apply the rule to."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The filter can be used to allow the rule to be used (default behaviour) or deny the rule to be used. User or groups matching the filter will be either allowed or denied.\nThe filter is defined as follow:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Type (string) which can have no value (empty) or "allow" or "deny", case insensitive.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Users:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A list of zero or more user names. If the list is exactly one long it will be interpreted as a regular expression."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Groups:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A list of zero or more group names. If the list is exactly one long it will be interpreted as a regular expression."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Proposed rules for placing applications would be:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provided: returns the queue provided during the submission"}),"\n",(0,t.jsx)(n.li,{children:"UserName: returns the user name"}),"\n",(0,t.jsx)(n.li,{children:"PrimaryGroupName: returns the primary group of the user"}),"\n",(0,t.jsx)(n.li,{children:"SecondaryGroupName: returns the first secondary group of the user that matches"}),"\n",(0,t.jsx)(n.li,{children:"Fixed: returns the queue name configured in the rule"}),"\n",(0,t.jsx)(n.li,{children:"ApplicationType: returns the application type (if available)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.em,{children:"unmanaged"})," queues in the current revision of the configuration you cannot provide any queue specific properties. However in the future we should consider propagating specific resource related settings from a ",(0,t.jsx)(n.em,{children:"managed"})," parent to the ",(0,t.jsx)(n.em,{children:"unmanaged"})," child, specifically:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dynamic Resource settings:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Guaranteed (resource)"}),"\n",(0,t.jsx)(n.li,{children:"Maximum (resource)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Dynamic Running Application limit:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maximum (integer)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-updates",children:"Configuration updates"}),"\n",(0,t.jsx)(n.p,{children:"Updating the queue definition will allow updating the existing queue properties as well as adding and removing queues. A new queue definition will only become active if the configuration can be parsed. The change of the definition is an atomic change which applies all modification in one action."}),"\n",(0,t.jsx)(n.p,{children:"Updating the queue properties will not automatically trigger further action. This means that if the maximum number of resources of a queue or its parent is changed we leave the applications in the queue running as they are. The scheduler will adhere to the new property values which should see the convergence over time."}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"managed"})," queue will only be removed if it is removed from the configuration. Before we can remove a queue it must not be running applications. This means that when a ",(0,t.jsx)(n.em,{children:"managed"})," queue is removed from the configuration it must be empty or the system needs to allow the queue to drain. Forcing a ",(0,t.jsx)(n.em,{children:"managed"})," queue to be empty before we can remove it is not possible which means that ",(0,t.jsx)(n.em,{children:"managed"})," queues are removed in multiple steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The queue is removed from the configuration"}),"\n",(0,t.jsxs)(n.li,{children:["The queue is marked as ",(0,t.jsx)(n.code,{children:"draining"})]}),"\n",(0,t.jsxs)(n.li,{children:["All managed queues that are ",(0,t.jsx)(n.code,{children:"draining"})," and empty are removed"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Long running applications should be handled gracefully when removing a ",(0,t.jsx)(n.em,{children:"managed"})," queue. The scheduler should at least track and expose that a queue has been in a ",(0,t.jsx)(n.em,{children:"draining"})," state for an extended period of time. In the optimal case the application should be notified of the queue change to allow it to release resources. In all cases the queue administrators should be notified to allow them to take action. This action would currently be a manual move of the application to a different queue by the administrators."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Unmanaged"})," queues that are not defined in the queue definition are created by the scheduler automatically based on the placement rules. ",(0,t.jsx)(n.em,{children:"Unmanaged"})," queues have a lifespan independent of the configuration. Whenever an ",(0,t.jsx)(n.em,{children:"unmanaged"})," queue is empty it will get removed. The queue will automatically be created again when a new application is requesting it via triggering the placement rule."]}),"\n",(0,t.jsxs)(n.p,{children:["Removing an empty ",(0,t.jsx)(n.em,{children:"managed"})," or ",(0,t.jsx)(n.em,{children:"unmanaged"})," queue is handled by the same removal code which must run independent of the configuration updates and scheduling actions."]}),"\n",(0,t.jsx)(n.p,{children:"Configurations can change over time. The impact of a fail over or restart must still be investigated.\nBase point to make: a changed configuration should not impact the currently running applications. Queues that no longer exist should be handled somehow."}),"\n",(0,t.jsx)(n.h3,{id:"access-control-lists",children:"Access Control Lists"}),"\n",(0,t.jsx)(n.p,{children:"The scheduler ACL is independent of the queue ACLs. A scheduler administrator is not by default allowed to submit an application or administer the queues in the system."}),"\n",(0,t.jsxs)(n.p,{children:["All ACL types should use the same definition pattern. We should allow at least POSIX user and group names which uses the portable filename character set ",(0,t.jsx)("sup",{id:"s2",children:(0,t.jsx)(n.a,{href:"#f2",children:"2"})}),". However we should take into account that we could have domain specifiers based on the environment that the system runs in (@ sign as per HADOOP-12751)."]}),"\n",(0,t.jsx)(n.p,{children:"By default access control is enabled and access is denied. The only special case is for the core scheduler which automatically adds the system user, the scheduler process owner, to the scheduler ACL. The scheduler process owner is allowed to make sure that the process owner can use the API to call any administrative actions."}),"\n",(0,t.jsx)(n.p,{children:"Access control lists give access to the users and groups that have been specified in the list. They do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."}),"\n",(0,t.jsx)(n.p,{children:"The access control list is defined as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n"})}),"\n",(0,t.jsx)(n.p,{children:"This definition specifies a wildcard of * which results in access for everyone. If the user list is empty and the group list is empty nobody will have access. This deny all ACL has two possible representations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"an empty access control list."}),"\n",(0,t.jsx)(n.li,{children:"a single space."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If there is no access control list is configured access is denied by default."}),"\n",(0,t.jsx)(n.h2,{id:"shim-configuration",children:"Shim Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The shim configuration is highly dependent on the shim implementation. The k8s shim differs from the YARN shim. Currently the k8s shim is configured via command line options but we should not depend on that."}),"\n",(0,t.jsx)(n.h3,{id:"k8s-shim",children:"K8s shim"}),"\n",(0,t.jsx)(n.p,{children:"The full configuration of the K8s shim is still under development."}),"\n",(0,t.jsx)(n.h3,{id:"yarn-shim",children:"YARN shim"}),"\n",(0,t.jsx)(n.p,{children:"The full configuration of the YARN shim is still under development."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("br",{}),(0,t.jsx)("b",{id:"f1"}),"1: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#should-i-use-a-configmap-or-a-custom-resource",children:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#should-i-use-a-configmap-or-a-custom-resource"}),". ",(0,t.jsx)(n.a,{href:"#s1",children:"\u21a9"}),"\n",(0,t.jsx)("br",{}),(0,t.jsx)("b",{id:"f2"}),"2: The set of characters from which portable filenames are constructed. ",(0,t.jsx)(n.a,{href:"#s2",children:"\u21a9"}),"\n",(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 . _ -"})]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(79474);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
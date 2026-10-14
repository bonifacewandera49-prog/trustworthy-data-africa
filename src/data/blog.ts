export const blogPosts = [
  {
    "id": 10,
    "slug": "ransomware-recovery-that-you-can-test",
    "title": "Ransomware readiness: prove you can recover",
    "tag": "Cybersecurity",
    "cover_image": "/images/editorial/blog-recovery.webp",
    "excerpt": "A practical approach to recovery dependencies, isolated backups, clean restoration and exercises that expose the gaps.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Start with a service you cannot afford to lose",
        "paragraphs": [
          "A backup dashboard can be entirely green while a business remains unable to recover. The missing pieces are often outside the backup itself: an identity service, a signing key, a supplier account, a network configuration or the one person who knows how to rebuild an application. Ransomware preparation should begin with a complete service rather than a collection of files.",
          "Choose one critical workflow, such as receiving orders or delivering a customer report. Map the systems and people it needs. Ask the business owner how long the workflow can stop and how much recent work could be recreated. Record those answers as recovery objectives, then test whether the technical plan can achieve them. A target is a decision to validate, not evidence that recovery already works."
        ]
      },
      {
        "heading": "Separate the ability to operate from the ability to destroy",
        "paragraphs": [
          "An attacker who controls everyday administration should not automatically control every recovery copy. Examine who can delete backups, shorten retention, change backup jobs and recover the credentials for the backup platform. Include the identity provider and email accounts used to reset those credentials. Separation on a diagram is weak if the same compromised account can undo it.",
          "Use the isolation and immutability options appropriate to the platform, and verify their actual behaviour with a harmless test dataset. A disconnected copy, a protected retention policy and separate administration solve different problems. Document the combinations you depend on and who can override them. Confirm alerts reach someone who can act when a protected job stops or retention settings change."
        ]
      },
      {
        "heading": "Make the restore sequence explicit",
        "paragraphs": [
          "Write the recovery order as a dependency list. A database may need a key service; the key service may require identity; identity may require DNS and time synchronisation. Those circular dependencies should be resolved before an emergency. Keep an accessible recovery runbook outside the systems it describes, with controlled access to sensitive material.",
          "For each stage, name a primary operator and a backup, the prerequisite systems, the expected duration and the evidence of success. \u201cRestore application\u201d is too vague. A useful completion check might be that a test customer can authenticate, submit a synthetic transaction and retrieve the correct result without reaching production services. Use invented test data rather than copying sensitive records into an unprotected exercise environment."
        ]
      },
      {
        "heading": "Restore into an environment you can trust",
        "paragraphs": [
          "Restoring quickly onto systems still under attacker control can restart the incident. Plan a clean recovery environment with known configurations, reviewed access and monitoring. Investigators and recovery operators need a shared decision about which images, data and credentials are safe enough to use. Preserve relevant evidence before making irreversible changes where operational circumstances allow.",
          "A recent backup is not automatically a clean backup. Compare candidate recovery points with the incident timeline and investigate signs of persistence or tampering. Rotate exposed credentials and review integrations before reconnecting. These decisions are specific to the incident; the runbook should identify the decision-maker and the information they need rather than promise a universal safe waiting period."
        ]
      },
      {
        "heading": "Run a small exercise that can fail honestly",
        "paragraphs": [
          "Start with a bounded scenario: the primary application and its normal administrator account are unavailable. Give the recovery team only the materials they would actually possess. Record elapsed time, requests for undocumented information, unavailable credentials and every manual correction. The exercise is useful precisely because it reveals work that the written plan omitted.",
          "For example, a team might restore a database in forty minutes but spend three hours obtaining a supplier token. The database backup worked; the service recovery objective did not. Assign the token dependency to an owner, add an approved recovery route, and repeat that part of the exercise. Avoid reporting a successful restore as a successful business recovery until the end-to-end workflow has been checked."
        ]
      },
      {
        "heading": "Turn the findings into routine maintenance",
        "paragraphs": [
          "Keep a short register of recovery blockers with owners and due dates. Rehearse again after material changes to identity, hosting, applications or suppliers. Check that departing staff lose backup access and that new administrators understand recovery responsibilities. The exercise schedule should follow the importance and rate of change of the service.",
          "Useful measures include the age of the last successful end-to-end restore, unresolved recovery dependencies and the difference between the recovery target and observed exercise time. These measures help people make decisions. Counting stored terabytes or completed backup jobs alone tells a much narrower story. This article is a planning guide; response actions during an active compromise should be coordinated with the incident lead."
        ]
      }
    ],
    "sources": [
      {
        "label": "CISA \u2014 StopRansomware Guide",
        "url": "https://www.cisa.gov/stopransomware/ransomware-guide"
      },
      {
        "label": "NIST \u2014 Incident Response Recommendations, SP 800-61r3",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      }
    ]
  },
  {
    "id": 11,
    "slug": "phishing-resistant-mfa-rollout",
    "title": "Phishing-resistant MFA: plan the rollout, including recovery",
    "tag": "Cybersecurity",
    "cover_image": "/images/editorial/blog-mfa.webp",
    "excerpt": "Hardware keys and passkeys are only part of the work. Enrollment, recovery and legacy access determine whether the rollout holds up.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Protect the whole sign-in journey",
        "paragraphs": [
          "Multifactor authentication adds protection when a password is stolen, but methods differ. A one-time code can still be entered into an attacker-controlled page. FIDO/WebAuthn-based authentication ties the exchange to the legitimate service, making it a stronger choice against credential phishing. That distinction matters when selecting controls for accounts whose compromise would have a broad impact.",
          "The implementation is also a service design problem. People must enroll, sign in from approved devices, replace lost authenticators and get support without creating an easier route around the control. Map that full journey before buying hardware keys or changing a tenant-wide setting. A secure primary sign-in flow is incomplete if account recovery can be persuaded to bypass it."
        ]
      },
      {
        "heading": "Inventory accounts before choosing a pilot",
        "paragraphs": [
          "List administrators, ordinary users, contractors, shared operational accounts and service identities separately. Identify which applications use the central identity provider and which keep their own authentication. Include older clients and remote access tools. A rollout percentage is misleading when its denominator excludes the systems that matter most.",
          "Choose a pilot with enough variety to reveal friction: different supported devices, remote workers, accessibility needs and at least one high-value administrative workflow. Agree on success criteria before the pilot begins. Successful enrollment alone is insufficient; users should complete their normal work, recover from a lost device and receive help through a documented support process."
        ]
      },
      {
        "heading": "Choose authenticators around the actual environment",
        "paragraphs": [
          "Platform authenticators and roaming hardware keys support different working patterns. Device ownership, shared workstations, browser support and the needs of administrators all affect the choice. Verify capabilities with your identity provider and applications rather than assuming every product labelled \u201cpasswordless\u201d provides identical protection.",
          "For a sample rollout, an organisation might support platform authenticators for managed individual devices and hardware keys for a smaller set of privileged workflows. This is an example, not a universal prescription. Test the complete chain, including enrollment policy, cross-device use where supported, conditional access and the treatment of an unmanaged device. Make the supported options easy to understand."
        ]
      },
      {
        "heading": "Treat recovery as a privileged operation",
        "paragraphs": [
          "Define how a person proves their identity when their usual authenticator is unavailable. Decide who can approve recovery, what evidence is required and what alerts should be generated. A convincing phone call or an urgent message from a purported executive should not be enough to reset a powerful account. Help-desk staff need a usable procedure and permission to follow it under pressure.",
          "Where appropriate, arrange a second approved authenticator and test it before it is needed. Emergency administrative access needs separate controls, monitoring and periodic verification. Document its purpose and tightly restrict its use. Do not distribute reusable emergency credentials in ordinary chat or hide them inside the systems they are meant to recover."
        ]
      },
      {
        "heading": "Close the old routes deliberately",
        "paragraphs": [
          "After a pilot, review all remaining authentication paths. Legacy protocols, local application passwords, excluded accounts and long-lived sessions may reduce the benefit of a stronger sign-in method. Make exceptions visible, time-limited where possible and owned by someone responsible for removing the underlying obstacle.",
          "Roll out in stages with a clear support window and a tested rollback decision. A rollback should not silently leave the organisation in a weaker state forever. Record the reason, affected users and next attempt. Tell people what a genuine enrollment prompt looks like and where to find support through a channel they can independently verify."
        ]
      },
      {
        "heading": "Measure protection and user experience together",
        "paragraphs": [
          "Track coverage of high-value accounts, successful use of the required authentication method, unresolved exceptions, recovery requests and support failures. Compare the policy you intended to enforce with observed sign-in behaviour. Ask whether a user can still reach a sensitive service through a weaker fallback.",
          "Run a tabletop exercise in which an attacker requests an authenticator reset, then another in which a legitimate administrator loses every enrolled device. The first tests resistance to manipulation; the second tests whether the process remains usable. Strong authentication succeeds when the organisation can sustain it during normal work and stressful exceptions, not just demonstrate it in a clean pilot."
        ]
      }
    ],
    "sources": [
      {
        "label": "CISA \u2014 Implementing Phishing-Resistant MFA",
        "url": "https://www.cisa.gov/sites/default/files/2023-01/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf"
      },
      {
        "label": "CISA \u2014 Require Multifactor Authentication",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication"
      }
    ]
  },
  {
    "id": 12,
    "slug": "api-authorization-beyond-login",
    "title": "API authorization: test the boundaries beyond login",
    "tag": "Cybersecurity",
    "cover_image": "/images/editorial/blog-api.webp",
    "excerpt": "A hands-on review framework for object ownership, tenant separation, sensitive fields and background jobs.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Authentication is only the starting point",
        "paragraphs": [
          "A valid login establishes who is calling an API. It does not establish that the caller may read a particular record, change a sensitive field or perform an administrative operation. Many application defects live in the space between these decisions. A request can be perfectly authenticated and still cross an access boundary.",
          "OWASP identifies broken object-level authorization as a major API risk. A practical review asks what the server knows about the caller, the requested object and the action at the moment access is granted. Do not rely on a hidden button, an unpredictable identifier or a check in the browser as the permission decision. Those mechanisms do not replace server-side authorization."
        ]
      },
      {
        "heading": "Build a permission matrix small enough to use",
        "paragraphs": [
          "Choose a representative workflow and list its actors, objects and actions. For an example document service, actors might be a document owner, another member of the same organisation, a member of another organisation and a support operator. Actions might include viewing, editing, exporting, deleting and changing sharing settings.",
          "Write the expected result for each meaningful combination. Include the reason: ownership, an explicit share, a role or a specific operational permission. Ambiguous cells are a design issue to resolve before testing. Start with a compact matrix that developers and the product owner can actually review, then expand to the highest-impact workflows."
        ]
      },
      {
        "heading": "Exercise object and tenant boundaries safely",
        "paragraphs": [
          "In an authorised test environment, create two synthetic tenants and several users with different roles. Capture legitimate requests made by each user, then use the test accounts to check whether a caller can address an object belonging to the other tenant. Test both direct object endpoints and the search or list endpoints that reveal objects indirectly.",
          "Check nested resources as well. A server might validate access to a project but fail to verify that an attachment really belongs to that project. Bulk endpoints deserve attention because one accepted item can hide an incorrectly authorised item in the same request. Use synthetic records and a controlled environment; never probe other customers\u2019 data to validate a hypothesis."
        ]
      },
      {
        "heading": "Review the fields and actions inside the boundary",
        "paragraphs": [
          "Object access is not the end of the review. A user allowed to update their profile should not automatically be allowed to change their role, organisation identifier or approval status. Define the accepted fields for each operation and check sensitive transitions explicitly. Also review what the response exposes, including internal notes and integration identifiers.",
          "Try permitted and forbidden transitions separately. For example, a user might be allowed to save a draft but not publish it, or view a report but not export its underlying records. Confirm that the API enforces those differences even if the normal interface never offers the forbidden action. Record expected denials alongside expected successes so fixes do not accidentally break legitimate use."
        ]
      },
      {
        "heading": "Follow authorization into asynchronous work",
        "paragraphs": [
          "Exports, scheduled reports and background jobs often execute after the original request has finished. Decide which identity and permissions apply when the work runs and when its output is retrieved. A job created by an authorised user should not automatically make its result available to anyone who can guess or obtain the output URL.",
          "Consider what happens when membership changes between scheduling and execution. The correct behaviour depends on the product, but it should be deliberate. Test revoked access, a deleted tenant and a report shared with a narrower group than its source data. Include caches and signed download links in the review because they may preserve access after the primary record changes."
        ]
      },
      {
        "heading": "Make the evidence useful to developers",
        "paragraphs": [
          "A helpful finding states the intended rule, the smallest reproducible request sequence, the observed result and the affected boundary. Provide synthetic identifiers and avoid copying real personal data into a ticket. Distinguish a demonstrated cross-tenant access failure from a suspicious design that still needs investigation.",
          "After remediation, add a focused regression test at the layer where authorization is enforced and verify the affected workflow end to end. Prefer consistent policy enforcement over scattered ad hoc checks. Keep the permission matrix close to the feature\u2019s documentation so a future change to sharing, roles or tenancy triggers a review. Authorization is a continuing product contract, not a one-time scanner result."
        ]
      }
    ],
    "sources": [
      {
        "label": "OWASP \u2014 API Security Top 10, 2023",
        "url": "https://api-security.owasp.org/editions/2023/en/0x11-t10/"
      },
      {
        "label": "OWASP \u2014 Broken Object Level Authorization",
        "url": "https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization/"
      }
    ]
  },
  {
    "id": 13,
    "slug": "incident-response-first-hour",
    "title": "The first hour of an incident: create clarity before speed",
    "tag": "Cybersecurity",
    "cover_image": "/images/editorial/blog-response.webp",
    "excerpt": "How to organise decisions, preserve useful evidence and contain harm without losing the operational picture.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Begin with what you know and what you do not",
        "paragraphs": [
          "An unusual alert is not yet a complete incident narrative. The first report may describe a symptom: a new administrator, encrypted files, suspicious outbound traffic or an unexpected payment instruction. Record what was observed, when it was observed and the source of that observation. Keep confirmed facts separate from working hypotheses.",
          "The first hour is a useful planning frame, not a fixed deadline that applies to every incident. A destructive event may require immediate containment; an ambiguous signal may need rapid validation. The goal is to establish a reliable decision process while reducing harm. NIST\u2019s incident response guidance places this work within wider preparation, risk management and recovery responsibilities."
        ]
      },
      {
        "heading": "Assign a lead and establish a trustworthy channel",
        "paragraphs": [
          "Name an incident lead with authority to coordinate work and record decisions. Separate the coordination role from specialist investigation where staffing allows. Someone needs to maintain the timeline, track assigned actions and ensure that operational changes are communicated. Without that structure, several capable people can make conflicting changes at the same time.",
          "Choose a communication channel appropriate to the suspected compromise. If organisational email or identity is affected, the usual collaboration tools may not be trustworthy or available. Use a pre-agreed alternative where one exists. Verify participants, limit sensitive distribution and avoid posting credentials or raw personal information into an incident chat."
        ]
      },
      {
        "heading": "Make a bounded initial assessment",
        "paragraphs": [
          "Ask which services and identities appear affected, whether harm is continuing, what business processes depend on them and which evidence is likely to disappear. Identify the system owners and the people who can authorise disruptive changes. Record uncertainty explicitly; an incomplete inventory should not be presented as proof that the incident is contained.",
          "For example, an unexpected privileged login could involve one account, a stolen session or a broader identity compromise. The early investigation should test those possibilities without treating any as established fact. Compare the alert with relevant identity and application logs and obtain context from the account owner through a trusted route. Avoid asking a potentially compromised account to verify itself."
        ]
      },
      {
        "heading": "Choose containment with its consequences visible",
        "paragraphs": [
          "Possible actions include isolating a host, revoking sessions, disabling an account, blocking a malicious destination or pausing an exposed service. Each has different consequences for evidence and business continuity. The incident lead should record the purpose, expected impact, owner and time of a containment action so the team can assess whether it worked.",
          "Where ongoing harm makes immediate action necessary, act through the authorised response process and record the trade-off. Where circumstances permit, preserve relevant volatile information and logs before making changes that erase them. There is no universal rule that every machine should be powered off or that every alert requires shutting down a service. The decision must reflect the observed threat and operational dependencies."
        ]
      },
      {
        "heading": "Preserve an evidence trail people can follow",
        "paragraphs": [
          "Keep original log exports and relevant artefacts with restricted access, record where they came from and document collection times and methods. Work from copies when practical. A timeline is more useful when it distinguishes the time an event occurred from the time an investigator discovered it. Note time zones and known clock differences.",
          "Use a simple action log: time, actor, action, reason and result. Capture commands or administrative changes that alter systems. Do not quietly \u201cclean up\u201d suspicious files while another responder is trying to understand them. Evidence handling requirements vary with the investigation, so involve appropriate forensic and legal expertise when the circumstances require it."
        ]
      },
      {
        "heading": "Communicate decisions, then set the next checkpoint",
        "paragraphs": [
          "A short internal update should explain the observed impact, what is being done, what remains unknown and when the next update will arrive. Avoid promising that no data was accessed before the evidence supports that conclusion. External notifications require the relevant operational and legal owners to assess the facts and applicable obligations; a generic article cannot determine those obligations for an organisation.",
          "End the initial coordination cycle with named tasks and a review time. Confirm who is investigating scope, who is managing containment, who is considering recovery and who owns stakeholder communication. Preserve unanswered questions in the incident record. After the incident, use the timeline to improve preparation and decision-making, rather than judging responders only by how quickly they closed the first alert."
        ]
      }
    ],
    "sources": [
      {
        "label": "NIST \u2014 Incident Response Recommendations, SP 800-61r3",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      },
      {
        "label": "CISA \u2014 StopRansomware Guide",
        "url": "https://www.cisa.gov/stopransomware/ransomware-guide"
      }
    ]
  },
  {
    "id": 1,
    "slug": "security-review-before-launch",
    "title": "What to check before launching a digital service",
    "tag": "Security Engineering",
    "cover_image": "/images/editorial/security.webp",
    "excerpt": "A practical review of access, sensitive data, dependencies, and recovery before a service goes live.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Start with the service, not a scanner",
        "paragraphs": [
          "Before a digital service launches, the team needs a shared picture of what it does and what failure would mean. List the people who use it, the information it holds, and the actions that could cause harm. A public information page and a payment service face different risks. The review should reflect that difference.",
          "Draw a simple map of the browser, application, database, external services, and administrative tools. Mark where information crosses a boundary and where one system trusts another. This map makes it easier to identify assumptions that otherwise remain hidden in individual developers\u2019 heads."
        ]
      },
      {
        "heading": "Check access at the point of action",
        "paragraphs": [
          "Authentication establishes who someone is; authorisation determines what they may do. Test both. A user should not be able to read another account\u2019s records simply by changing an identifier. Administrative actions should require deliberate, restricted access, and departed staff should lose access promptly.",
          "Review account recovery, session expiry, and service accounts as well as normal sign-in. A strong login screen does little if a forgotten integration retains broad permissions or a recovery process exposes an account."
        ]
      },
      {
        "heading": "Follow sensitive information",
        "paragraphs": [
          "Trace information from collection through logs, exports, backups, and deletion. Collect only what the service needs. Check whether error messages or diagnostic logs expose secrets or personal records. Keep credentials out of source code and separate development settings from production.",
          "Dependencies deserve the same attention. Record which external services receive data, what permissions they need, and how the application behaves when they are unavailable. An inventory is useful only if someone owns keeping it current."
        ]
      },
      {
        "heading": "Make recovery part of the launch decision",
        "paragraphs": [
          "A backup is not evidence of recoverability until restoration has been tested. Agree who responds to an incident, how the team will disable a compromised integration, and which communications channel remains available if the main service fails.",
          "End the review with a short decision record: findings, severity, evidence, owner, and due date. Resolve launch-blocking issues and explicitly record residual risks. Security review should produce decisions the team can act on, rather than an unprioritised list that nobody owns."
        ]
      }
    ],
    "sources": []
  },
  {
    "id": 2,
    "slug": "data-governance-operating-model",
    "title": "Turning data governance into everyday practice",
    "tag": "Data Governance",
    "cover_image": "/images/editorial/blog-governance.webp",
    "excerpt": "Move from a policy document to clear ownership, access decisions, retention rules, and review routines.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Choose a real workflow",
        "paragraphs": [
          "Data governance becomes concrete when it changes how a team handles information. Start with one recurring workflow, such as a customer export, a research dataset, or a monthly report. Ask who creates it, who checks it, who can share it, and when it should be removed.",
          "A narrowly scoped starting point is easier to maintain than a complete inventory that becomes obsolete before anybody uses it. The goal is a repeatable way to make decisions and record responsibility."
        ]
      },
      {
        "heading": "Give ownership a practical meaning",
        "paragraphs": [
          "A data owner needs authority to decide who may access a dataset, what uses are acceptable, and when a quality concern requires escalation. A technical custodian may operate the storage system, but that does not automatically make them responsible for business decisions.",
          "Write down both roles and the route for resolving disagreements. Where responsibility is shared, identify one person who can make or escalate the final decision. Avoid assigning ownership to a department name without an accountable contact."
        ]
      },
      {
        "heading": "Build controls into existing work",
        "paragraphs": [
          "Access approval should happen through the same onboarding and project processes teams already use. Retention rules should be connected to system settings and periodic deletion checks. Procurement should ask how a new supplier handles information before data is transferred.",
          "For each important dataset, record its purpose, source, sensitivity, owner, storage location, and permitted users. Add quality checks that matter to the decision being made: missing records, inconsistent definitions, stale values, or unexpected changes in volume."
        ]
      },
      {
        "heading": "Review exceptions and evidence",
        "paragraphs": [
          "A practical governance model includes exceptions. Record why an exception is needed, who approved it, what safeguards apply, and when it expires. Without expiry or review, temporary workarounds tend to become permanent.",
          "Measure whether the process works. Can the team find an owner quickly? Are access requests reviewed? Can a report\u2019s figures be traced back to their source? These questions reveal whether governance supports daily work and where the next improvement should focus."
        ]
      }
    ],
    "sources": []
  },
  {
    "id": 3,
    "slug": "phishing-trends-2026",
    "title": "Phishing defence beyond awareness training",
    "tag": "Threat Intelligence",
    "cover_image": "/images/editorial/phishing.webp",
    "excerpt": "Combine careful verification, stronger access controls, and a clear reporting process.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Treat the request as the risk",
        "paragraphs": [
          "A suspicious message is easier to assess when attention moves from its appearance to what it asks someone to do. Does it request credentials, an urgent payment, a change of bank details, or the installation of unfamiliar software? Polished language and familiar branding do not establish legitimacy.",
          "The same principle applies across email, chat, text messages, and QR codes. Training should give people a small set of useful decisions, rather than asking them to memorise every possible appearance of a malicious message."
        ]
      },
      {
        "heading": "Separate verification from the message",
        "paragraphs": [
          "Sensitive requests should be confirmed through a channel the recipient already trusts. For a supplier bank-account change, use a known telephone number or an established approval workflow. Replying to the original message only returns to the same uncertain source.",
          "Make these checks an ordinary part of the process so employees do not have to choose between being helpful and being cautious. Clear rules also protect staff from pressure based on hierarchy or urgency."
        ]
      },
      {
        "heading": "Reduce what a stolen credential can do",
        "paragraphs": [
          "Use strong authentication appropriate to the service, restrict privileged access, and review permissions regularly. Keep administrative accounts separate from everyday email and browsing where practical. A single compromised account should not automatically expose every system.",
          "Technical controls and training support each other. Mail filtering, cautious handling of attachments, and reliable account-recovery procedures matter, but no single control removes the need for a response plan."
        ]
      },
      {
        "heading": "Make reporting quick and constructive",
        "paragraphs": [
          "Provide a simple reporting route and explain what happens next. People should be able to report a mistake without waiting to prove that an incident occurred. Preserve the suspicious message and its context for the responding team.",
          "When reviewing an exercise or incident, look beyond click rates. Consider how quickly the message was reported, whether a payment control worked, and how long it took to contain affected access. Use those observations to improve the process rather than to shame individuals."
        ]
      }
    ],
    "sources": []
  },
  {
    "id": 4,
    "slug": "synthetic-data-privacy",
    "title": "Evaluating synthetic data before you share it",
    "tag": "Privacy Engineering",
    "cover_image": "/images/editorial/data.webp",
    "excerpt": "Test usefulness and disclosure risk against a defined purpose before treating synthetic records as safe.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Define the intended use",
        "paragraphs": [
          "Synthetic data is created to resemble selected properties of a source dataset. It can support software testing, demonstrations, or exploratory analysis when access to the original records is restricted. It is not automatically a substitute for the original data in every task.",
          "Start by describing the intended use precisely. Testing whether a form accepts a valid record requires different properties from studying the relationship between clinical measurements. The purpose determines what the synthetic data must preserve."
        ]
      },
      {
        "heading": "Check more than individual columns",
        "paragraphs": [
          "Matching the average of each column is not enough. Relationships between variables, rare categories, missingness, and unusual combinations may matter to a downstream analysis. Evaluate the synthetic dataset using the same types of checks and tasks that its users intend to perform.",
          "Keep a record of where results diverge. If the synthetic data performs poorly for a subgroup or an edge case, document that limitation rather than presenting one overall score as proof of quality."
        ]
      },
      {
        "heading": "Assess disclosure risk separately",
        "paragraphs": [
          "A dataset can be useful and still reveal too much about its source. Check for exact or near-duplicate source records, unusually distinctive combinations, and scenarios where an attacker might combine the output with other information. Privacy evaluation should reflect the sensitivity and intended release audience.",
          "The generation method matters, but its name alone does not establish protection. Where formal privacy guarantees are claimed, the implementation, assumptions, and parameters need review. Utility and privacy are separate requirements and should be documented separately."
        ]
      },
      {
        "heading": "Release with instructions and boundaries",
        "paragraphs": [
          "Provide a short data card describing the source context, generation approach, evaluation, permitted uses, and known limitations. Make clear that generated records do not represent actual individuals. Preserve the version information needed to reproduce an evaluation.",
          "Use staged access where appropriate. A controlled internal trial can reveal problems before wider sharing. Reassess the release when the source data, intended use, or generation method changes; an earlier evaluation does not automatically cover a new version."
        ]
      }
    ],
    "sources": []
  },
  {
    "id": 5,
    "slug": "field-collection-security",
    "title": "Protecting data collected outside the office",
    "tag": "Field Security",
    "cover_image": "/images/editorial/field.webp",
    "excerpt": "Plan for offline work, lost devices, safe transfers, and clear incident reporting.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Design for the conditions people face",
        "paragraphs": [
          "Field teams may work with intermittent connectivity, shared equipment, limited charging, and time pressure. A security process that assumes continuous internet access is likely to be bypassed. Start with the actual workflow and identify where information is most exposed.",
          "Map the journey from the first interview or observation to the final repository. Include handwritten notes, recordings, photographs, temporary files, and messaging applications. Sensitive information often accumulates in these intermediate steps."
        ]
      },
      {
        "heading": "Limit what each device holds",
        "paragraphs": [
          "Collect only the information needed for the task and keep it locally for as little time as practical. Use device locks, encrypted storage where supported, and individual accounts rather than a shared password. Separate identifiers from response data when the workflow allows it.",
          "Agree what happens if a device is lost or damaged. Staff need a reporting contact, a way to identify the device, and clear instructions about which actions they may take. Remote controls are useful only when the equipment and connectivity support them."
        ]
      },
      {
        "heading": "Make synchronisation deliberate",
        "paragraphs": [
          "A successful upload should be confirmed before local copies are removed. Check that records are complete, associated with the correct project, and not duplicated. Protect transfers and avoid ad hoc sharing of entire datasets through personal accounts.",
          "Offline changes need a conflict policy. If two people update the same record, the system should preserve enough information to review the difference rather than silently choosing a winner. Audit trails help distinguish an honest correction from an unexplained alteration."
        ]
      },
      {
        "heading": "Practise the difficult moments",
        "paragraphs": [
          "Walk through scenarios before deployment: a lost device, an accidental disclosure, a request to see participant records, or an extended network outage. These exercises reveal unclear responsibilities while changes are still easy to make.",
          "Review the process with field staff after the first collection period. Ask what was difficult, where unofficial workarounds appeared, and which instructions were misunderstood. The resulting changes should improve both protection and the reliability of the evidence being collected."
        ]
      }
    ],
    "sources": []
  },
  {
    "id": 6,
    "slug": "responsible-ai-assurance",
    "title": "Building an evidence-based AI review",
    "tag": "AI Assurance",
    "cover_image": "/images/editorial/ai-audit.webp",
    "excerpt": "Connect model approval to documented purpose, evaluation, oversight, and monitoring.",
    "published_at": "2026-10-14",
    "sections": [
      {
        "heading": "Begin with the decision",
        "paragraphs": [
          "An AI review should start with the decision a system supports and the consequences of getting it wrong. Identify who is affected, who uses the output, and who has authority to challenge it. A model\u2019s technical performance is only one part of that context.",
          "Describe the intended use and the uses that are outside scope. This helps prevent a model developed for one setting from quietly becoming a decision tool in another setting where its evaluation no longer applies."
        ]
      },
      {
        "heading": "Record where the evidence comes from",
        "paragraphs": [
          "Document the data sources, relevant permissions, preparation steps, and known gaps. Check whether evaluation data resembles the setting in which the model will operate. Look for leakage between training and testing, and consider whether important groups or conditions are under-represented.",
          "Keep the evaluation reproducible. Record model versions, configuration, metrics, and the reasons for choosing them. A later reviewer should be able to understand what was tested without relying on the memory of the original developer."
        ]
      },
      {
        "heading": "Test the workflow as well as the model",
        "paragraphs": [
          "Assess how users interpret the output, when they are expected to override it, and what information supports that choice. A nominal human approval step offers little protection if the reviewer lacks time, authority, or a workable alternative.",
          "Examine error patterns and performance across relevant groups and conditions. Avoid collapsing conflicting outcomes into one headline score. The review should make trade-offs explicit and identify who is responsible for accepting them."
        ]
      },
      {
        "heading": "Plan for change after launch",
        "paragraphs": [
          "Define monitoring, escalation triggers, and conditions for pausing or retiring the system. Changes in input data, user behaviour, or the surrounding service can undermine an earlier evaluation even when the model itself has not changed.",
          "Maintain an assurance record that grows with the system: purpose, data lineage, tests, approvals, incidents, and changes. The practical outcome is a decision process that can be inspected and improved, with responsibility assigned throughout the model\u2019s life."
        ]
      }
    ],
    "sources": []
  }
];

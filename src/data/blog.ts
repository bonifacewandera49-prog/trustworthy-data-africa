export const blogPosts = [
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
    ]
  },
  {
    "id": 2,
    "slug": "data-governance-operating-model",
    "title": "Turning data governance into everyday practice",
    "tag": "Data Governance",
    "cover_image": "/images/editorial/government.webp",
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
    ]
  },
  {
    "id": 3,
    "slug": "phishing-trends-2026",
    "title": "Phishing defence beyond awareness training",
    "tag": "Threat Intelligence",
    "cover_image": "/images/editorial/security.webp",
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
    ]
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
    ]
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
    ]
  },
  {
    "id": 6,
    "slug": "responsible-ai-assurance",
    "title": "Building an evidence-based AI review",
    "tag": "AI Assurance",
    "cover_image": "/images/editorial/research.webp",
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
    ]
  }
];

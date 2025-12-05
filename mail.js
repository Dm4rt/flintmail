// Flintmail credential + mailbox data store
const credentials = {
  "fred.flintstone@flintstones-nuclear.com": "SlateQuarry#92!",
  "barney.rubble@flintstones-nuclear.com": "Trilobite$58@",
  "wilma@flintstones-nuclear.com": "PebbleForge%77?"
};

const mailData = {
  "fred.flintstone@flintstones-nuclear.com": {
    displayName: "Fred Flintstone",
    folders: {
      inbox: [
        {
          id: "fred-in-1",
          subject: "[IR-2025-017] Security Follow-up",
          snippet: "Please review the updated incident report before the 18:00 briefing.",
          from: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          to: "Fred Flintstone <fred.flintstones-nuclear.com>",
          date: "Dec 4, 2025 • 07:20",
          body: `
            <p>Fred,</p>
            <p>The Kish Island drone trace lines up with the outer fence on the <strong>Oracle Island blueprint (SPEC-001-A)</strong>. Please annotate the SAM pads and return before the 18:00 briefing.</p>
            <p class="attachment-note"><strong>Attachment:</strong> Oracle Island blueprint scan — look for the dome labeled "Experimental Reactor / Fire Control".</p>
            <figure class="mail-attachment">
              <img src="assets/blueprints.png" alt="Oracle Island blueprint SPEC-001-A" loading="lazy" />
              <figcaption>SPEC-001-A overlay with Kish-facing SAM pads highlighted.</figcaption>
            </figure>
          `
        },
        {
          id: "fred-in-2",
          subject: "Reactor noise logs",
          snippet: "Attached is the acoustic profile you requested...",
          from: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          to: "Fred Flintstone <fred.flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 22:14",
          body: `
            <p>Per your request, the reactor acoustic profile is attached. The humming spike at 03:12 matches coolant cavitation near the Kish test stand.</p>
            <p class="attachment-note"><strong>Attachment:</strong> reactor_0312.wav — stored on /assets/logs/reactor_0312.wav</p>
          `
        },
        {
          id: "fred-in-3",
          subject: "Kish ISR ping",
          snippet: "Radar picked up another sweep skimming Granite Atoll.",
          from: "Security Ops <secops@flintstones-nuclear.com>",
          to: "Fred Flintstone <fred.flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 17:01",
          body: `
            <p>Another ISR pass skimmed Granite Atoll at 14:07z. Cones stack perfectly over the Kish pier imagery you flagged. Keep the manifest discussion off the public channel.</p>
          `
        }
      ],
      sent: [
        {
          id: "fred-s-1",
          subject: "Kish Island supply manifest",
          snippet: "Manifest from Bedrock Shipping shows RF shielding panels headed to Oracle.",
          from: "Fred Flintstone <fred.flintstones-nuclear.com>",
          to: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          date: "Dec 4, 2025 • 06:55",
          body: `
            <p>Sharing the manifest B. Rubble signed off on (ID: 883-FLINT-4). RF-SHIELD-99X panels plus CRYO-COMP-Z crates all routed to Oracle Island Port — same pier the Kish tender keeps circling.</p>
            <p class="attachment-note"><strong>Attachment:</strong> Bedrock Shipping manifest photo — receipt shows the "Deliver to Research Sector 4" note.</p>
            <figure class="mail-attachment">
              <img src="assets/manifest.png" alt="Bedrock Shipping manifest ID 883-FLINT-4" loading="lazy" />
              <figcaption>Manifest signed by B. Rubble en route to Oracle Island.</figcaption>
            </figure>
          `
        },
        {
          id: "fred-s-2",
          subject: "Forward: Oracle radar grid",
          snippet: "Blueprint overlay highlights every SAM site on the island.",
          from: "Fred Flintstone <fred.flintstones-nuclear.com>",
          to: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 09:48",
          body: `
            <p>Barney, forwarding the radar grid drawing you asked for. Long-range surveillance dome is anchored at the north ridge; Kish recon assets are mirroring its sweep.</p>
            <p class="attachment-note"><strong>Attachment:</strong> Oracle Island as-built blueprint — same blue sheet taped inside Lab C.</p>
            <figure class="mail-attachment">
              <img src="assets/blueprints.png" alt="Oracle Island radar grid" loading="lazy" />
              <figcaption>As-built radar grid overlay Fred forwarded from Lab C.</figcaption>
            </figure>
          `
        }
      ],
      drafts: [
        {
          id: "fred-d-1",
          subject: "Draft: Kish field briefing",
          snippet: "Still piecing together the Kish movement timeline...",
          from: "Fred Flintstone <fred.flintstones-nuclear.com>",
          to: "ops-briefing@flintstones-nuclear.com",
          date: "Dec 4, 2025 • 00:41",
          body: `
            <p>Need to stitch manifest sightings + ISR pings + reactor noise before this goes live. Leaving myself a reminder to cite the Bedrock manifest and the Oracle blueprint during the briefing.</p>
          `
        }
      ],
      deleted: [
        {
          id: "fred-del-1",
          subject: "Old credential reminder",
          snippet: "Archiving the weak password notice.",
          from: "Security Ops <secops@flintstones-nuclear.com>",
          to: "Fred Flintstone <fred.flintstones-nuclear.com>",
          date: "Nov 25, 2025 • 11:03",
          body: `
            <p>Autogenerated warning from last week. Keeping the audit log tidy.</p>
          `
        }
      ]
    }
  },
  "barney.rubble@flintstones-nuclear.com": {
    displayName: "Barney Rubble",
    folders: {
      inbox: [
        {
          id: "barney-in-1",
          subject: "Forward: Oracle radar grid",
          snippet: "Blueprint overlay highlights every SAM site on the island.",
          from: "Fred Flintstone <fred.flintstones-nuclear.com>",
          to: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 09:48",
          body: `
            <p>Same blueprint Fred just forwarded you. Please annotate the Kish-aligned approach corridor before ops asks again.</p>
            <figure class="mail-attachment">
              <img src="assets/blueprints.png" alt="Oracle radar grid overlay" loading="lazy" />
              <figcaption>Oracle Island radar grid Fred forwarded to Barney.</figcaption>
            </figure>
          `
        },
        {
          id: "barney-in-2",
          subject: "Logistics confirmation 883-FLINT-4",
          snippet: "Shipping acknowledged delivery to Oracle Island Port - Sector 4.",
          from: "Bedrock Shipping & Logistics <dock@bedrockshipping.com>",
          to: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          date: "Dec 2, 2025 • 15:13",
          body: `
            <p>Manifest shows RF-SHIELD-99X, FIBER-OPTIC-SPOOL-A, and CRYO-COMP-Z all signed for by you. Kish harbor watchers saw the same crates under tarps four hours later.</p>
            <p class="attachment-note"><strong>Attachment:</strong> Manifest photo signed "B. Rubble".</p>
            <figure class="mail-attachment">
              <img src="assets/manifest.png" alt="Signed manifest 883-FLINT-4" loading="lazy" />
              <figcaption>Bedrock Shipping receipt confirming delivery to Oracle Port.</figcaption>
            </figure>
          `
        }
      ],
      sent: [
        {
          id: "barney-s-1",
          subject: "Reactor noise logs",
          snippet: "Attached is the acoustic profile you requested...",
          from: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          to: "Fred Flintstone <fred.flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 22:14",
          body: `
            <p>Exported the noise log from the Oracle cooling array. That Kish Island hum shows up on channel 4 as well.</p>
          `
        },
        {
          id: "barney-s-2",
          subject: "Manifest follow-up",
          snippet: "Confirming CRYO-COMP-Z handling instructions.",
          from: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          to: "dock@bedrockshipping.com",
          date: "Dec 2, 2025 • 16:02",
          body: `
            <p>Double-checking that the CRYO-COMP-Z crates remain sealed through transfer. Oracle Island pier chemistry is not forgiving.</p>
          `
        }
      ],
      drafts: [
        {
          id: "barney-d-1",
          subject: "Draft: Kish pier measurements",
          snippet: "Need Wilma’s notes on the new crane height.",
          from: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          to: "wilma@flintstones-nuclear.com",
          date: "Dec 3, 2025 • 12:09",
          body: `
            <p>Reminder to capture the pier height deltas so we can tell whether the manifest crates can clear the radar dome ridge.</p>
          `
        }
      ],
      deleted: [
        {
          id: "barney-del-1",
          subject: "Outdated spool request",
          snippet: "Old requisition for fiber spools.",
          from: "Barney Rubble <barney.rubble@flintstones-nuclear.com>",
          to: "storehouse@flintstones-nuclear.com",
          date: "Nov 11, 2025 • 08:33",
          body: `
            <p>Clearing this out — superseded by the Kish manifest shipment.</p>
          `
        }
      ]
    }
  },
  "wilma@flintstones-nuclear.com": {
    displayName: "Wilma Flintstone",
    folders: {
      inbox: [
        {
          id: "wilma-in-1",
          subject: "Kish Island supply manifest",
          snippet: "Manifest from Bedrock Shipping shows RF shielding panels headed to Oracle.",
          from: "Fred Flintstone <fred.flintstones-nuclear.com>",
          to: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          date: "Dec 4, 2025 • 06:55",
          body: `
            <p>Fred forwarded the manifest with your name in the CC. Kish pier watchers spotted the same cargo netting so this is now part of the security briefing.</p>
            <p class="attachment-note"><strong>Attachment:</strong> Bedrock Shipping manifest photo (ID 883-FLINT-4).</p>
            <figure class="mail-attachment">
              <img src="assets/manifest.png" alt="Bedrock manifest shared with Wilma" loading="lazy" />
              <figcaption>Same manifest image Fred circulated for the Kish briefing.</figcaption>
            </figure>
          `
        },
        {
          id: "wilma-in-2",
          subject: "Kish ISR ping",
          snippet: "Radar picked up another sweep skimming Granite Atoll.",
          from: "Security Ops <secops@flintstones-nuclear.com>",
          to: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 17:01",
          body: `
            <p>Same alert Fred received — routing to you in case you brief the council first.</p>
          `
        },
        {
          id: "wilma-in-3",
          subject: "Oracle lab noise delta",
          snippet: "Lab C logged another hum around 03:12.",
          from: "oracle-lab@flintstones-nuclear.com",
          to: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          date: "Dec 3, 2025 • 22:20",
          body: `
            <p>Lab sensors picked up the same hum as Barney’s log. It lines up with the Kish tug’s departure window.</p>
          `
        }
      ],
      sent: [
        {
          id: "wilma-s-1",
          subject: "[IR-2025-017] Security Follow-up",
          snippet: "Please review the updated incident report before the 18:00 briefing.",
          from: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          to: "Fred Flintstone <fred.flintstones-nuclear.com>",
          date: "Dec 4, 2025 • 07:20",
          body: `
            <p>Summarizing the Kish Island drone track alongside the Oracle blueprint overlays. Please confirm you can brief.</p>
            <figure class="mail-attachment">
              <img src="assets/blueprints.png" alt="Oracle blueprint overlay" loading="lazy" />
              <figcaption>Blueprint overlay Wilma attached to the IR-2025-017 follow-up.</figcaption>
            </figure>
          `
        },
        {
          id: "wilma-s-2",
          subject: "FYI: Kish ISR ping",
          snippet: "Looping Ops on the radar anomaly.",
          from: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          to: "ops-briefing@flintstones-nuclear.com",
          date: "Dec 3, 2025 • 17:05",
          body: `
            <p>Forwarding the ISR alert so Ops can pre-stage countermeasures near the SAM domes.</p>
          `
        }
      ],
      drafts: [
        {
          id: "wilma-d-1",
          subject: "Draft: Evacuation script",
          snippet: "Need final Kish coordinates before sending.",
          from: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          to: "council@flintstones-nuclear.com",
          date: "Dec 4, 2025 • 01:14",
          body: `
            <p>Holding this draft until Fred locks the manifest timeline.</p>
          `
        }
      ],
      deleted: [
        {
          id: "wilma-del-1",
          subject: "Re: Reactor gift shop",
          snippet: "Totally unrelated swag request.",
          from: "Wilma Flintstone <wilma@flintstones-nuclear.com>",
          to: "fred.flintstones-nuclear.com",
          date: "Nov 18, 2025 • 10:02",
          body: `
            <p>Keeping the mailbox tidy — this was just swag chatter.</p>
          `
        }
      ]
    }
  }
};

const folderMetadata = {
  inbox: {
    title: "Inbox",
    description: "Latest intel threads synced across Flintmail."
  },
  sent: {
    title: "Sent",
    description: "Messages you pushed out from this mailbox."
  },
  drafts: {
    title: "Drafts",
    description: "Works in progress saved for later review."
  },
  deleted: {
    title: "Deleted",
    description: "Recovered chatter flagged for cleanup."
  }
};

const mailState = {
  userEmail: "",
  mailbox: null,
  activeFolder: "inbox"
};

function login() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const msg = document.getElementById("msg");

  if (!emailInput || !passwordInput || !msg) {
    return;
  }

  const email = emailInput.value.trim();
  const pass = passwordInput.value.trim();

  if (!email || !pass) {
    msg.textContent = "Please enter your email and password.";
    return;
  }

  if (credentials[email] && pass === credentials[email]) {
    msg.textContent = "Login successful... redirecting.";
    setTimeout(() => {
      window.location.href = "inbox.html?user=" + encodeURIComponent(email);
    }, 800);
  } else {
    msg.textContent = "Invalid credentials.";
  }
}

function initMailbox() {
  const body = document.body;
  if (!body || !body.classList.contains("mail-body")) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const email = decodeURIComponent(params.get("user") || "");
  const mailbox = mailData[email];
  const mailItemsEl = document.getElementById("mailItems");
  const viewerEl = document.getElementById("mailViewer");

  if (!mailItemsEl || !viewerEl) {
    return;
  }

  if (!mailbox) {
    mailItemsEl.innerHTML = "<p class=\"empty-folder\">Mailbox not found for this user.</p>";
    viewerEl.innerHTML = `
      <div class="mail-placeholder">
        <h3>Mailbox unavailable</h3>
        <p>Return to the login screen and sign in with an authorized Flintmail account.</p>
      </div>
    `;
    return;
  }

  mailState.userEmail = email;
  mailState.mailbox = mailbox;

  const userNameEl = document.getElementById("userName");
  const userEmailEl = document.getElementById("userEmail");
  if (userNameEl) userNameEl.textContent = mailbox.displayName;
  if (userEmailEl) userEmailEl.textContent = email;

  attachFolderHandlers();
  renderFolder("inbox");
}

function attachFolderHandlers() {
  const navItems = document.querySelectorAll(".folder-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const folderKey = item.getAttribute("data-folder");
      if (!folderKey || folderKey === mailState.activeFolder) return;
      renderFolder(folderKey);
    });
  });
}

function renderFolder(folderKey) {
  if (!mailState.mailbox) {
    return;
  }

  mailState.activeFolder = folderKey;
  const messages = mailState.mailbox.folders[folderKey] || [];
  const mailItemsEl = document.getElementById("mailItems");
  const viewerEl = document.getElementById("mailViewer");
  if (!mailItemsEl || !viewerEl) {
    return;
  }

  setActiveFolderNav(folderKey);
  updateFolderChrome(folderKey, messages.length);
  mailItemsEl.innerHTML = "";

  if (!messages.length) {
    mailItemsEl.innerHTML = `<p class="empty-folder">No mail in ${folderMetadata[folderKey]?.title || folderKey}.</p>`;
    viewerEl.innerHTML = `
      <div class="mail-placeholder">
        <h3>Nothing to see here</h3>
        <p>${folderMetadata[folderKey]?.description || "This folder has no content yet."}</p>
      </div>
    `;
    return;
  }

  let firstMessage = null;

  messages.forEach((message, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "mail-item";
    item.innerHTML = `
      <p class="mail-item-subject">${message.subject}</p>
      <p class="snippet">${message.snippet}</p>
      <span class="mail-date">${message.date}</span>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".mail-item.active").forEach(activeItem => activeItem.classList.remove("active"));
      item.classList.add("active");
      renderMailViewer(message);
    });

    mailItemsEl.appendChild(item);

    if (index === 0) {
      firstMessage = { item, message };
    }
  });

  if (firstMessage) {
    firstMessage.item.classList.add("active");
    renderMailViewer(firstMessage.message);
  }
}

function setActiveFolderNav(folderKey) {
  document.querySelectorAll(".folder-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-folder") === folderKey);
  });
}

function updateFolderChrome(folderKey, count) {
  const meta = folderMetadata[folderKey] || folderMetadata.inbox;
  const titleEl = document.getElementById("folderTitle");
  const descEl = document.getElementById("folderDescription");
  const countEl = document.getElementById("folderCount");

  if (titleEl) titleEl.textContent = meta.title;
  if (descEl) descEl.textContent = meta.description;
  if (countEl) {
    if (count) {
      countEl.textContent = `${count}`;
      countEl.style.visibility = "visible";
    } else {
      countEl.textContent = "";
      countEl.style.visibility = "hidden";
    }
  }
}

function renderMailViewer(message) {
  const viewerEl = document.getElementById("mailViewer");
  if (!viewerEl) return;

  const safeBody = (message.body || "").trim();

  // --- ATTACHMENT PATTERN MATCHING ---
  // We detect keywords inside message.body, then map them to real image files.
  const attachmentMap = [
  {
    keywords: ["blueprint", "overlay", "sam", "oracle island"],
    file: "assets/blueprints.png",
    caption: "Oracle Island Blueprint"
  },
  {
    keywords: ["manifest", "shipping", "flint-4", "receipt"],
    file: "assets/manifest.png",
    caption: "Bedrock Shipping Manifest"
  },
  {
    keywords: ["computer", "terminal", "workstation"],
    file: "assets/computer.jpg",
    caption: "Operator Workstation Screenshot"
  },
  {
    keywords: ["log extract", "exif", "metadata"],
    file: "assets/exif.png",
    caption: "EXIF Metadata Extract"
  },
  {
    keywords: ["document", "report", "briefing"],
    file: "assets/document.png",
    caption: "Internal Document Scan"
  },
    {
    keywords: ["redacted", "classified", "censored"],
    file: "assets/redacted.png",
    caption: "Redacted Intelligence Sheet"
  },
  {
    keywords: ["secret", "for your eyes only", "restricted"],
    file: "assets/secret.jpg",
    caption: "Restricted Image"
  },
  {
    keywords: ["logo", "flintmail"],
    file: "assets/flintmail_logo.png",
    caption: "Flintmail Logo"
  }
];


  let attachmentsHTML = "";

  if (safeBody) {
    const lower = safeBody.toLowerCase();

    attachmentMap.forEach(att => {
      if (att.keywords.some(key => lower.includes(key.toLowerCase()))) {
        attachmentsHTML += `
          <figure class="mail-attachment">
            <img src="${att.file}" alt="Attachment image">
            <figcaption>${att.caption}</figcaption>
          </figure>
        `;
      }
    });
  }

  viewerEl.innerHTML = `
    <article class="mail-content">
      <header class="mail-head">
        <p class="mail-subject">${message.subject}</p>
        <p class="mail-meta">
          <span class="mail-from">${message.from}</span> →
          <span class="mail-to">${message.to}</span>
        </p>
        <p class="mail-date">${message.date}</p>
      </header>

      <section class="mail-body">
        ${safeBody}
        ${attachmentsHTML}
      </section>
    </article>
  `;
}


document.addEventListener("DOMContentLoaded", initMailbox);

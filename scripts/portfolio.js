(() => {
  "use strict";

  // =======================================================
  // CONFIGURATION
  // =======================================================

  const CONFIG = {
    email: "eraamirsohail@proton.me",
    resumeUrl: "./resume/Aamir_S.pdf",

    emailjs: {
      publicKey: "p-iexUL_aS7YtCdXy",
      serviceId: "service_kvxw5u6",
      templateId: "template_orkltui"
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  // Escape values before placing them in generated HTML.
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character]));
  }

  function icon(name, className = "") {
    return `
      <svg class="icon ${className}" aria-hidden="true">
        <use href="#i-${name}"></use>
      </svg>
    `;
  }

  // =======================================================
  // PROJECT CONTENT
  // No invented performance metrics or client testimonials.
  // Artwork is illustrative, not a screenshot of client work.
  // =======================================================

  const projects = [
    {
      id: "automotive",
      number: "01",
      category: "commerce",
      categoryLabel: "Automotive / Connected commerce",
      title: "Australian Automotive Platform",
      company: "Persistent Systems",
      role: "Lead Software Engineer",
      period: "March 2025 — Present",
      color: "#c6f27b",
      artClass: "",
      artType: "store",
      brand: "AUTOMOTIVE",
      headline: "The road ahead.",
      glyph: "↗",
      badge: "Connected commerce",
      description:
        "A connected automotive commerce platform bringing storefront experiences, CRM, and enterprise integrations together.",
      summary:
        "Development for an Australian automotive e-commerce platform integrating Salesforce Sales Cloud, Service Cloud, SAP, Node.js, and AWS.",
      contributions: [
        "Built Page Designer components and ISML experiences for flexible storefront content.",
        "Worked on product detail page configurations and commerce functionality.",
        "Implemented GA4 analytics to support storefront measurement.",
        "Developed a secure forms framework and contributed to cross-platform integrations."
      ],
      tags: ["SFCC", "Sales Cloud", "Node.js", "AWS"]
    },
    {
      id: "deployment",
      number: "02",
      category: "platform",
      categoryLabel: "Developer tooling / Automation",
      title: "Salesforce Deployment System",
      company: "Cyntexa Labs",
      role: "Software Developer",
      period: "June — December 2024",
      color: "#b6a2fa",
      artClass: "art-violet",
      artType: "pipeline",
      brand: "DEPLOY / CONTROL",
      headline: "A clearer path to production.",
      glyph: "⌘",
      badge: "Deployment automation",
      description:
        "A centralized deployment workflow with custom automation, connected middleware, and backup and rollback functionality.",
      summary:
        "A centralized Salesforce deployment system for Israel-based SaaS clients, designed to support deployments across multiple client environments.",
      contributions: [
        "Developed custom automation tools for Salesforce deployment workflows.",
        "Built middleware using JSForce and AWS.",
        "Integrated Lightning Web Components into the deployment experience.",
        "Implemented backup and rollback functionality for multi-client deployments."
      ],
      tags: ["LWC", "JSForce", "AWS", "Salesforce"]
    },
    {
      id: "sfra-migration",
      number: "03",
      category: "commerce",
      categoryLabel: "Retail / Storefront migration",
      title: "A New Home for a Beloved Brand",
      company: "Cyntexa Labs",
      role: "Software Developer",
      period: "February — October 2024",
      color: "#f0a8b9",
      artClass: "art-rose",
      artType: "store",
      brand: "LITTLE JOYS",
      headline: "Made for a little magic.",
      glyph: "✳",
      badge: "SiteGenesis → SFRA",
      description:
        "An SFRA migration for a teddy bear manufacturer, connecting shopping experiences, loyalty, payments, and donations.",
      summary:
        "A SiteGenesis-to-SFRA migration for a teddy bear manufacturer, with work across product discovery, product detail experiences, payments, loyalty, and data synchronization.",
      contributions: [
        "Built PLP, PDP, and CLP components for the SFRA storefront.",
        "Implemented gift product functionality and worked on a Core Cloud loyalty program.",
        "Integrated Adyen payment and donation functionality.",
        "Worked on GA4 analytics and third-party data synchronization jobs."
      ],
      tags: ["SFRA", "Apex", "Adyen", "GA4"]
    },
    {
      id: "checkout",
      number: "04",
      category: "commerce",
      categoryLabel: "Conversion experience / Checkout",
      title: "One Page. A Complete Checkout.",
      company: "Cyntexa Labs",
      role: "Associate Developer",
      period: "June — December 2023",
      color: "#89cce3",
      artClass: "art-blue",
      artType: "store",
      brand: "CHECKOUT / ONE",
      headline: "Less friction. More flow.",
      glyph: "→",
      badge: "Single-page experience",
      description:
        "A unified SFCC experience that lets shoppers arriving from ads browse products, update their cart, and pay on one page.",
      summary:
        "A flash single-page checkout for a USA client's hair and men's grooming storefronts, bringing key shopping steps into one unified experience.",
      contributions: [
        "Built an SFCC landing and checkout flow for visitors arriving from advertisements.",
        "Combined product browsing, cart updates, and payment into one page.",
        "Developed storefront functionality using B2C Commerce and ISML.",
        "Focused implementation on reducing navigation between shopping steps."
      ],
      tags: ["SFCC", "ISML", "B2C Commerce"]
    },
    {
      id: "jewelry",
      number: "05",
      category: "commerce",
      categoryLabel: "Luxury retail / Platform migration",
      title: "Commerce with a Little More Sparkle",
      company: "Cyntexa Labs",
      role: "Associate Developer",
      period: "November 2022 — May 2023",
      color: "#e4cb88",
      artClass: "art-gold",
      artType: "store",
      brand: "FINE / FORM",
      headline: "Small details. Lasting impressions.",
      glyph: "◇",
      badge: "Storefront + OMS",
      description:
        "A jewelry storefront migration with custom shopping components, Page Designer content, OMS integration, and back-in-stock notifications.",
      summary:
        "An SFCC migration for an online jewelry brand, with custom storefront interactions and integrations supporting commerce operations.",
      contributions: [
        "Developed custom dropdowns, a calendar component, and a price range slider.",
        "Built Page Designer components for storefront content.",
        "Worked on chatbot and Salesforce OMS integrations.",
        "Implemented a Notify Me experience for back-in-stock email notifications."
      ],
      tags: ["B2C Commerce", "LWC", "Apex", "OMS"]
    },
    {
      id: "beauty",
      number: "06",
      category: "commerce",
      categoryLabel: "Beauty / Multi-site operations",
      title: "Behind the Beauty Experience",
      company: "Cyntexa Labs",
      role: "Associate Developer",
      period: "March — October 2022",
      color: "#c3cbdc",
      artClass: "art-silver",
      artType: "store",
      brand: "BEAUTY / SYSTEMS",
      headline: "Every detail matters.",
      glyph: "✦",
      badge: "Multi-site architecture",
      description:
        "Production support and storefront enhancements for L’Oréal’s multi-site Salesforce Commerce Cloud architecture.",
      summary:
        "Production support for L’Oréal's multi-site SFCC architecture, alongside development of storefront components and commerce features.",
      contributions: [
        "Resolved high-severity production issues within SLA requirements.",
        "Implemented gift product functionality.",
        "Built Wishlist functionality using the Product List API.",
        "Developed custom HBS components within the multi-site architecture."
      ],
      tags: ["SFCC", "B2C Commerce", "HBS"]
    },
        {
      id: "healthcare-pharmacy",
      number: "07",
      category: "platform",
      categoryLabel: "Healthcare / Pharmacy",
      title: "Connected Care. Simpler Ordering.",
      company: "Client details private",
      role: "Salesforce Developer",
      period: "July 2025 — August 2026",
      color: "#89cce3",
      artClass: "art-blue",
      artType: "store",
      brand: "PHARMACY / CARE",
      headline: "Care, connected.",
      glyph: "+",
      badge: "Service Cloud + Ordering",
      description:
        "A Salesforce pharmacy platform combining org consolidation, modernized automation, and a five-step medicine ordering experience for UK customers.",
      summary:
        "Salesforce Sales Cloud and Service Cloud development for a healthcare and pharmacy client, spanning migration analysis for an org consolidation initiative, automation modernization, and a UK medicine ordering site.",
      contributions: [
        "Led the analysis effort for migrating data to a new Salesforce org as part of the client's org consolidation initiative.",
        "Analyzed existing Apex classes, components, Flows, and other org elements to plan the migration approach.",
        "Migrated legacy Process Builders into Flows to modernize automation and improve maintainability.",
        "Built a five-step ordering site for the UK region, enabling customers to order required medicines.",
        "Cloned and developed new Aura components to extend platform functionality.",
        "Created trigger helpers and Flows to automate SMS and email notifications."
      ],
      tags: [
        "Sales Cloud",
        "Service Cloud",
        "Salesforce Advanced Approval",
        "Apex",
        "LWC",
        "Aura"
      ]
    }
  ];

  // =======================================================
  // TOAST
  // =======================================================

  let toastTimer;

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("visible");

    toastTimer = window.setTimeout(() => {
      toast.classList.remove("visible");
    }, 3200);
  }

  // =======================================================
  // THEME
  // =======================================================

  const themeButton = $(".theme-toggle");

  function updateThemeButton() {
    if (!themeButton) return;

    const isDark = document.documentElement.dataset.theme !== "light";

    themeButton.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );

    const themeMeta = $('meta[name="theme-color"]');

    if (themeMeta) {
      themeMeta.content = isDark ? "#0b100e" : "#f5f5ee";
    }
  }

  themeButton?.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "light"
        ? "dark"
        : "light";

    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem("aamir-theme", nextTheme);
    } catch (_) {
      // Theme still works if browser storage is unavailable.
    }

    updateThemeButton();
  });

  updateThemeButton();

  // =======================================================
  // MOBILE NAVIGATION
  // =======================================================

  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");

  const mobileBackground = [
    $("#main"),
    $(".site-footer")
  ].filter(Boolean);

  function setMenu(open, restoreFocus = false) {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );

    mobileMenu.classList.toggle("open", open);
    mobileMenu.inert = !open;
    document.body.classList.toggle("menu-open", open);

    mobileBackground.forEach(element => {
      element.inert = open;
    });

    if (open) {
      $("a", mobileMenu)?.focus({ preventScroll: true });
    } else if (restoreFocus) {
      menuToggle.focus({ preventScroll: true });
    }
  }

  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    setMenu(!open);
  });

  $$("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      setMenu(false);

      const target = $(link.getAttribute("href"));

      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });

        target.addEventListener("blur", () => {
          target.removeAttribute("tabindex");
        }, { once: true });
      }
    });
  });

  document.addEventListener("keydown", event => {
    if (menuToggle?.getAttribute("aria-expanded") !== "true") return;

    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false, true);
      return;
    }

    if (event.key !== "Tab") return;

    // Keep keyboard navigation inside the open header/menu area.
    const focusable = $$(".site-header a, .site-header button")
      .filter(element =>
        !element.disabled &&
        !element.closest("[inert]") &&
        element.getClientRects().length > 0
      );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  window.matchMedia("(min-width: 951px)")
    .addEventListener("change", event => {
      if (event.matches) setMenu(false);
    });

  // =======================================================
  // HEADER, READING PROGRESS, ACTIVE NAVIGATION
  // =======================================================

  const header = $(".site-header");
  const progress = $(".reading-progress");
  const navLinks = $$(".desktop-nav a");

  const navSections = navLinks
    .map(link => ({
      link,
      section: $(link.getAttribute("href"))
    }))
    .filter(item => item.section);

  let scrollFramePending = false;

  function updateScrollUI() {
    const scrollY = window.scrollY;
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const fraction = scrollable > 0
      ? Math.min(1, Math.max(0, scrollY / scrollable))
      : 0;

    if (progress) {
      progress.style.transform = `scaleX(${fraction})`;
    }

    header?.classList.toggle("scrolled", scrollY > 24);

    let activeLink = null;

    navSections.forEach(({ link, section }) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 180 && rect.bottom > 180) {
        activeLink = link;
      }
    });

    navLinks.forEach(link => {
      const active = link === activeLink;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    scrollFramePending = false;
  }

  function requestScrollUpdate() {
    if (scrollFramePending) return;

    scrollFramePending = true;
    window.requestAnimationFrame(updateScrollUI);
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);
  window.addEventListener("load", requestScrollUpdate);

  // =======================================================
  // PROJECT RENDERING
  // =======================================================

  function projectArtwork(project) {
    const windowContent = project.artType === "pipeline"
      ? `
        <div class="pipeline-ui">
          <div class="pipeline-title">
            Deployment workflow
            <span>ILLUSTRATION</span>
          </div>
          <div class="pipeline-row">
            ${icon("check")}
            <span>Validate metadata</span>
            <span>01</span>
          </div>
          <div class="pipeline-row">
            ${icon("check")}
            <span>Back up environment</span>
            <span>02</span>
          </div>
          <div class="pipeline-row">
            ${icon("check")}
            <span>Deploy changes</span>
            <span>03</span>
          </div>
          <div class="pipeline-row">
            ${icon("check")}
            <span>Review deployment</span>
            <span>04</span>
          </div>
        </div>
      `
      : `
        <div class="store-ui">
          <div class="store-ui-top">
            <span class="store-logo">${escapeHTML(project.brand)}</span>
            <div class="store-nav"><i></i><i></i><i></i></div>
          </div>

          <div class="store-ui-main">
            <div class="store-ui-copy">
              <small>THE COMMERCE EXPERIENCE</small>
              <strong>${escapeHTML(project.headline)}</strong>
              <span class="mini-cta">EXPLORE <span>↗</span></span>
            </div>
            <div class="abstract-product">
              <span class="product-glyph">${escapeHTML(project.glyph)}</span>
            </div>
          </div>
        </div>
      `;

    return `
      <div
        class="project-art ${project.artClass}"
        style="--project-color: ${project.color}"
        aria-hidden="true"
      >
        <span class="art-caption">CONCEPT VISUAL / NOT A CLIENT SCREENSHOT</span>
        <span class="art-number">${project.number}</span>

        <div class="art-window">
          <div class="window-bar">
            <i></i><i></i><i></i>
            <span>${escapeHTML(project.brand.toLowerCase())}</span>
          </div>
          ${windowContent}
        </div>

        <span class="art-label">
          ${icon("check")}
          ${escapeHTML(project.badge)}
        </span>
      </div>
    `;
  }

  function renderProjectCard(project) {
    return `
      <article
        class="project-card reveal"
        data-category="${project.category}"
        data-project="${project.id}"
      >
        ${projectArtwork(project)}

        <div class="project-info">
          <div class="project-heading">
            <div>
              <span class="project-category">
                ${escapeHTML(project.categoryLabel)}
              </span>
              <h3>${escapeHTML(project.title)}</h3>
            </div>

            <button
              class="project-open"
              type="button"
              data-open-project="${project.id}"
              aria-label="Read about ${escapeHTML(project.title)}"
              aria-haspopup="dialog"
            >
              ${icon("arrow-up")}
            </button>
          </div>

          <p>${escapeHTML(project.description)}</p>

          <div class="tags">
            ${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
          </div>
        </div>
      </article>
    `;
  }

  const projectsGrid = $("#projects-grid");

  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map(renderProjectCard).join("");
  }

  // =======================================================
  // SCROLL REVEALS
  // =======================================================

  let revealObserver = null;

  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.remove("is-pending");
        revealObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.06,
      rootMargin: "0px 0px -25px 0px"
    });

    $$(".reveal").forEach(element => {
      // Do not initially hide elements already in the viewport.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("is-pending");
        revealObserver.observe(element);
      }
    });
  }

  reducedMotion.addEventListener("change", event => {
    if (!event.matches) return;

    revealObserver?.disconnect();

    $$(".reveal.is-pending").forEach(element => {
      element.classList.remove("is-pending");
    });
  });

  // =======================================================
  // PROJECT FILTERS
  // =======================================================

  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;

      $$(".filter").forEach(filter => {
        const active = filter === button;
        filter.classList.toggle("active", active);
        filter.setAttribute("aria-pressed", String(active));
      });

      $$(".project-card").forEach(card => {
        const visible =
          selected === "all" || card.dataset.category === selected;

        card.hidden = !visible;

        if (visible) {
          // Filtered results should be available immediately.
          card.classList.remove("is-pending");
          revealObserver?.unobserve(card);
        }
      });

      requestScrollUpdate();
    });
  });

  // =======================================================
  // DIALOG MANAGEMENT
  // =======================================================

  const dialogTriggers = new WeakMap();
  const dialogs = $$("dialog");

  function openDialog(dialog, trigger = document.activeElement) {
    if (!dialog || dialog.open) return;

    setMenu(false);

    dialogTriggers.set(dialog, trigger);
    dialog.showModal();
    document.body.classList.add("dialog-open");

    // Put focus on a predictable control rather than an iframe.
    $("[data-close-dialog]", dialog)?.focus({ preventScroll: true });
  }

  dialogs.forEach(dialog => {
    $$("[data-close-dialog]", dialog).forEach(button => {
      button.addEventListener("click", () => dialog.close());
    });

    let pointerStartedOutside = false;

    function isOutside(event) {
      const rect = dialog.getBoundingClientRect();

      return (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      );
    }

    dialog.addEventListener("pointerdown", event => {
      pointerStartedOutside =
        event.target === dialog && isOutside(event);
    });

    dialog.addEventListener("click", event => {
      if (
        pointerStartedOutside &&
        event.target === dialog &&
        isOutside(event)
      ) {
        dialog.close();
      }

      pointerStartedOutside = false;
    });

    dialog.addEventListener("close", () => {
      const anyDialogOpen = dialogs.some(item => item.open);
      document.body.classList.toggle("dialog-open", anyDialogOpen);

      const trigger = dialogTriggers.get(dialog);

      if (
        trigger instanceof HTMLElement &&
        trigger.isConnected &&
        !trigger.closest("[hidden]")
      ) {
        trigger.focus({ preventScroll: true });
      }
    });
  });

  // =======================================================
  // PROJECT DIALOG
  // =======================================================

  const projectDialog = $("#project-dialog");
  const projectDialogContent = $("#project-dialog-content");

  function openProject(id, trigger) {
    const project = projects.find(item => item.id === id);

    if (!project || !projectDialog || !projectDialogContent) return;

    projectDialogContent.innerHTML = `
      <div class="dialog-project-art">
        ${projectArtwork(project)}
      </div>

      <div class="dialog-project-body">
        <span class="eyebrow">${escapeHTML(project.categoryLabel)}</span>
        <h2 id="project-dialog-title">${escapeHTML(project.title)}</h2>

        <p class="dialog-project-summary">
          ${escapeHTML(project.summary)}
        </p>

        <dl class="dialog-project-meta">
          <div>
            <dt>ORGANIZATION</dt>
            <dd>${escapeHTML(project.company)}</dd>
          </div>
          <div>
            <dt>ROLE</dt>
            <dd>${escapeHTML(project.role)}</dd>
          </div>
          <div>
            <dt>TIMELINE</dt>
            <dd>${escapeHTML(project.period)}</dd>
          </div>
          <div>
            <dt>FOCUS</dt>
            <dd>${escapeHTML(project.categoryLabel)}</dd>
          </div>
        </dl>

        <h3>My contributions</h3>

        <ul class="project-contributions">
          ${project.contributions.map(item => `
            <li>${escapeHTML(item)}</li>
          `).join("")}
        </ul>

        <div class="tags">
          ${project.tags.map(tag => `
            <span>${escapeHTML(tag)}</span>
          `).join("")}
        </div>

        <div class="dialog-project-footer">
          <p>
            Delivered as part of a team. Visuals are illustrative;
            confidential client details are not displayed.
          </p>

          <a class="text-link" href="#contact" data-project-contact>
            Discuss a similar project
            ${icon("arrow-up")}
          </a>
        </div>
      </div>
    `;

    openDialog(projectDialog, trigger);
    projectDialog.scrollTop = 0;

    $("[data-project-contact]", projectDialogContent)
      ?.addEventListener("click", event => {
        event.preventDefault();
        projectDialog.close();

        window.requestAnimationFrame(() => {
          const contact = $("#contact");

          contact?.scrollIntoView({
            behavior: reducedMotion.matches ? "auto" : "smooth",
            block: "start"
          });

          $("#contact-name")?.focus({ preventScroll: true });
        });
      });
  }

  projectsGrid?.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest("[data-open-project]");

    if (button) {
      openProject(button.dataset.openProject, button);
    }
  });

  // =======================================================
  // RÉSUMÉ PREVIEW
  // =======================================================

  const resumeDialog = $("#resume-dialog");
  const resumeContent = $("#resume-content");

  $$("[data-resume]").forEach(button => {
    button.addEventListener("click", () => {
      if (!resumeDialog || !resumeContent) return;

      resumeContent.replaceChildren();

      const iframe = document.createElement("iframe");
      iframe.src = CONFIG.resumeUrl;
      iframe.title = "Aamir Sohail résumé PDF";

      resumeContent.appendChild(iframe);
      openDialog(resumeDialog, button);
    });
  });

  resumeDialog?.addEventListener("close", () => {
    resumeContent?.replaceChildren();
  });

  // =======================================================
  // COPY EMAIL
  // =======================================================

  $("#copy-email")?.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard requires a secure context.");
      }

      await navigator.clipboard.writeText(CONFIG.email);
      showToast("Email address copied.");
    } catch (_) {
      showToast(`Email me at ${CONFIG.email}`);
    }
  });

  // =======================================================
  // CONTACT FORM
  // =======================================================

  const contactForm = $("#contact-form");
  const nameInput = $("#contact-name");
  const emailInput = $("#contact-email");
  const interestInput = $("#contact-interest");
  const messageInput = $("#contact-message");
  const messageCount = $("#message-count");
  const feedback = $("#form-feedback");
  const submitButton = $(".form-submit");

  let sending = false;
  let lastSuccessfulSend = 0;

  const sendCooldown = 30_000;

  function updateMessageCount() {
    if (messageInput && messageCount) {
      messageCount.textContent = `${messageInput.value.length} / 3000`;
    }
  }

  messageInput?.addEventListener("input", () => {
    messageInput.setCustomValidity("");
    updateMessageCount();
  });

  nameInput?.addEventListener("input", () => {
    nameInput.setCustomValidity("");
  });

  function setFeedback(type, message) {
    if (!feedback) return;

    feedback.className = `form-feedback ${type}`;
    feedback.textContent = message;
  }

  function setSending(value) {
    sending = value;

    if (!submitButton) return;

    submitButton.disabled = value;
    submitButton.classList.toggle("loading", value);
    contactForm?.setAttribute("aria-busy", String(value));

    const label = $(".submit-label", submitButton);

    if (label) {
      label.textContent = value ? "Sending message…" : "Send message";
    }
  }

  contactForm?.addEventListener("submit", async event => {
    event.preventDefault();

    if (sending) return;

    setFeedback("", "");

    // Basic honeypot. Configure EmailJS abuse protections too.
    if ($("#contact-website")?.value.trim()) {
      setFeedback("error", "Unable to send. Please contact me by email.");
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestInput.value;
    const message = messageInput.value.trim();

    nameInput.setCustomValidity(
      name ? "" : "Please enter your name."
    );

    messageInput.setCustomValidity(
      message.length >= 10
        ? ""
        : "Please write at least 10 characters."
    );

    if (!contactForm.reportValidity()) return;

    const remaining = sendCooldown - (Date.now() - lastSuccessfulSend);

    if (remaining > 0) {
      setFeedback(
        "error",
        `Please wait ${Math.ceil(remaining / 1000)} seconds before sending another message.`
      );
      return;
    }

    if (!window.emailjs) {
      setFeedback(
        "error",
        `The email service could not load. Please email ${CONFIG.email} directly.`
      );
      return;
    }

    setSending(true);

    // Preserve compatibility with your existing template variables.
    // HTML is generated only from escaped plain text.
    const fullMessage = `Inquiry: ${interest}\n\n${message}`;

    const parameters = {
      name,
      email,
      reply_to: email,
      interest,
      message: fullMessage,
      message_html: escapeHTML(fullMessage).replace(/\r?\n/g, "<br>")
    };

    try {
      await window.emailjs.send(
        CONFIG.emailjs.serviceId,
        CONFIG.emailjs.templateId,
        parameters,
        {
          publicKey: CONFIG.emailjs.publicKey
        }
      );

      lastSuccessfulSend = Date.now();

      contactForm.reset();
      updateMessageCount();

      setFeedback(
        "success",
        "Message sent. Thanks for reaching out — I’ll get back to you as soon as I can."
      );
    } catch (error) {
      console.error("EmailJS send failed:", error);

      setFeedback(
        "error",
        `Your message could not be sent. Please try again or email ${CONFIG.email} directly.`
      );
    } finally {
      setSending(false);
    }
  });

  // =======================================================
  // FINAL INITIALIZATION
  // =======================================================

  const year = $("#year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  updateMessageCount();
  updateScrollUI();
})();
(() => {
  const data = window.PORTFOLIO_DATA;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  let projectCategory = "All", certificateCategory = "All", projectView = "grid", certificateView = "grid", language = "en";
  const translations = {
    en:{demo:"Demo",inProgress:"In progress",docTitle:"Wassim | AI & Data Science Engineer",sample:"SAMPLE",repoSoon:"Code coming soon",navAbout:"About",navProjects:"Projects",navEducation:"Education",navSkills:"Skills",navCertificates:"Certificates",navContact:"Contact",letsTalk:"Let's talk",available:"OPEN TO OPPORTUNITIES · MOROCCO & FRANCE",heroKicker:"HELLO, I'M WASSIM",heroSubtitle:"AI & Data Science Engineer passionate about transforming data into useful, reliable and impactful solutions.",exploreWork:"Explore my work",downloadCV:"Download CV",scroll:"SCROLL TO EXPLORE",aboutLabel:"PROFILE",aboutTitle:'Curiosity meets<br><span class="muted-heading">engineering.</span>',aboutLead:"I’m Wassim Abeloue, a Master’s student in Web Intelligence and Data Science.",aboutBody:"I’m pursuing a double-degree Master’s programme between the Faculty of Sciences Dhar El Mahraz, Université Sidi Mohamed Ben Abdellah (Fès), where I study Web Intelligence & Data Science (WISD), and Université Sorbonne Paris Nord (EID²). My interests include machine learning, computer vision and LLM-powered applications, and I’m building my skills through academic and personal projects.",selectedWork:"SELECTED WORK",projectsNote:"A selection of experiments & builds",projectsTitle:"Projects",searchProjects:"Search projects, tools, technologies...",noProjects:"No projects match your search.",skillsLabel:"TECHNICAL TOOLKIT",skillsNote:"Languages, libraries and tools I use",skillsTitle:"Skills",programming:"Programming languages",dataScience:"Data science & analysis",aiMl:"AI & Machine Learning",frameworks:"Frameworks & libraries",databasesTools:"Data platforms & tools",theJourney:"THE JOURNEY",educationNote:"Learning, evolving, connecting disciplines",educationTitle:"Education",highSchool:"HIGH SCHOOL",undergraduate:"UNDERGRADUATE",journeyOne:"Building the foundations in mathematics and scientific reasoning.",journeyTwo:"Developing a strong base in mathematics, algorithms and computer science.",journeyThree:"Exploring intelligent web technologies and data-driven approaches.",doubleDegree:"DOUBLE MASTER'S DEGREE",current:"CURRENT",journeyFour:"A double-degree programme that combines web intelligence, data science and decision-support systems.",learningProof:"LEARNING PROOF",certNote:"Continuous learning & development",certTitle:"Certificates",searchCertificates:"Search certificates...",noCertificates:"No certificates match your search.",nextChapter:"NEXT CHAPTER",contactTitle:"Let's build something<br><span class=\"gradient-text\">intelligent.</span>",contactText:"Open to opportunities, collaborations and interesting problems in AI & Data Science.",getInTouch:"Get in touch",footer:"Designed with intention. Built with curiosity.",all:"All",viewCode:"View code",details:"Details",certificateDetails:"Certificate details",description:"Description",pipeline:"Pipeline",technologies:"Technologies",tools:"Tools",objectives:"Objectives",methodology:"Methodology",results:"Results",challenges:"Challenges",issuer:"ISSUER",date:"DATE",skills:"SKILLS",credential:"Verify credential",viewCertificate:"View certificate",category:"CATEGORY",credentialUnavailable:"Credential verification link not provided",noLink:"Repository link not configured",status:"STATUS",gridView:"Grid view",listView:"List view"},
    fr:{demo:"Démo",inProgress:"En cours",docTitle:"Wassim | Ingénieur IA & Data Science",sample:"EXEMPLE",repoSoon:"Code bientôt disponible",navAbout:"À propos",navProjects:"Projets",navEducation:"Formation",navSkills:"Compétences",navCertificates:"Certificats",navContact:"Contact",letsTalk:"Me contacter",available:"OUVERT AUX OPPORTUNITÉS · MAROC & FRANCE",heroKicker:"BONJOUR, JE SUIS WASSIM",heroSubtitle:"Ingénieur en IA & Data Science, passionné par la transformation des données en solutions utiles, fiables et à impact.",exploreWork:"Voir mes projets",downloadCV:"Télécharger CV",scroll:"DÉFILER POUR EXPLORER",aboutLabel:"PROFIL",aboutTitle:'La curiosité rencontre<br><span class="muted-heading">l’ingénierie.</span>',aboutLead:"Je suis Wassim Abeloue, étudiant en Master Web Intelligence et Data Science.",aboutBody:"Je suis un programme de Master en double diplôme entre la Faculté des Sciences Dhar El Mahraz, Université Sidi Mohamed Ben Abdellah (Fès), où j’étudie Web Intelligence & Data Science (WISD), et l’Université Sorbonne Paris Nord (EID²). Mes centres d’intérêt incluent le machine learning, la vision par ordinateur et les applications basées sur les LLM, et je développe mes compétences à travers des projets académiques et personnels.",selectedWork:"PROJETS SÉLECTIONNÉS",projectsNote:"Une sélection d’expériences et de réalisations",projectsTitle:"Projets",searchProjects:"Rechercher projets, outils, technologies...",noProjects:"Aucun projet ne correspond à votre recherche.",skillsLabel:"ENVIRONNEMENT TECHNIQUE",skillsNote:"Langages, bibliothèques et outils utilisés",skillsTitle:"Compétences",programming:"Langages de programmation",dataScience:"Data science & analyse",aiMl:"IA & Machine Learning",frameworks:"Frameworks & bibliothèques",databasesTools:"Données & outils",theJourney:"LE PARCOURS",educationNote:"Apprendre, évoluer et relier les disciplines",educationTitle:"Formation",highSchool:"LYCÉE",undergraduate:"LICENCE",journeyOne:"Acquisition des bases en mathématiques et en raisonnement scientifique.",journeyTwo:"Développement de solides bases en mathématiques, algorithmique et informatique.",journeyThree:"Exploration des technologies web intelligentes et des approches orientées données.",doubleDegree:"DOUBLE DIPLÔME DE MASTER",current:"EN COURS",journeyFour:"Une formation en double diplôme qui associe intelligence web, science des données et systèmes d’aide à la décision.",learningProof:"APPRENTISSAGE",certNote:"Apprentissage et développement continus",certTitle:"Certificats",searchCertificates:"Rechercher des certificats...",noCertificates:"Aucun certificat ne correspond à votre recherche.",nextChapter:"PROCHAINE ÉTAPE",contactTitle:'Construisons quelque chose<br><span class="gradient-text">d’intelligent.</span>',contactText:"Ouvert aux opportunités, collaborations et problématiques intéressantes en IA & Data Science.",getInTouch:"Me contacter",footer:"Conçu avec intention. Construit avec curiosité.",all:"Tout",viewCode:"Voir le code",details:"Détails",certificateDetails:"Détails du certificat",description:"Description",pipeline:"Pipeline",technologies:"Technologies",tools:"Outils",objectives:"Objectifs",methodology:"Méthodologie",results:"Résultats",challenges:"Défis",issuer:"ORGANISME",date:"DATE",skills:"COMPÉTENCES",credential:"Vérifier le certificat",viewCertificate:"Voir le certificat",category:"CATÉGORIE",credentialUnavailable:"Lien de vérification non renseigné",noLink:"Lien du dépôt non configuré",status:"STATUT",gridView:"Vue en grille",listView:"Vue en liste"}
  };
  const t = key => translations[language][key] || translations.en[key] || key;
  const cats = item => item.categories || [item.category];
  const localizedCats = (item, kind) => {
    const tr = data.translations?.[kind]?.[item.id]?.categories;
    return language === "fr" && tr ? tr : cats(item);
  };
  const localized = (item, field, kind) => {
    const translated = data.translations?.[kind]?.[item.id]?.[field];
    return language === "fr" && translated !== undefined ? translated : item[field];
  };
  const categoryName = (value, kind) => {
    if (language !== "fr") return value === "All" ? t("all") : value;
    const dictionary = kind === "projects"
      ? {"AI Engineering":"Ingénierie IA", "Computer Vision":"Vision par ordinateur", "Machine Learning":"Machine Learning", "Data Engineering":"Ingénierie des données", "NLP":"NLP", "Data Science":"Science des données", "Artificial Intelligence":"Intelligence artificielle", "Cloud":"Cloud", "Web Development":"Développement web", "E-commerce":"E-commerce"}
      : {"Machine Learning":"Machine Learning", "Deep Learning":"Deep Learning", "Data":"Données", "Data Science":"Science des données", "Artificial Intelligence":"Intelligence artificielle", "Cloud":"Cloud", "Web Development":"Développement web", "E-commerce":"E-commerce"};
    return value === "All" ? t("all") : (dictionary[value] || value);
  };
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const unique = arr => [...new Set(arr)];
  const categories = ["All", ...unique(data.projects.flatMap(cats))];
  const certCategories = ["All", ...unique(data.certificates.flatMap(cats))];

  function renderFilters(target, values, selected, onSelect){
    $(target).innerHTML = values.map(v=>`<button class="filter-chip ${v===selected?'active':''}" data-category="${esc(v)}">${esc(categoryName(v, target.includes("certificate")?"certificates":"projects"))}</button>`).join("");
    $$( "button", $(target)).forEach(btn=>btn.addEventListener("click",()=>onSelect(btn.dataset.category)));
  }
  // Status color key is computed from the ENGLISH status, so it works in EN and FR.
  const statusKey = p => { const s=(p.status||"").toLowerCase(); return /complet/.test(s)?"completed":/plan/.test(s)?"planning":"progress"; };
  const catBadges = (item, kind) => localizedCats(item, kind).map(x=>`<span class="domain-badge">${esc(String(x).toUpperCase())}</span>`).join("");
  const diagramTitle = p => p.diagramLabel?.[language] || t("pipeline");
  const fmtMonth = ym => { const m=/^(\d{4})-(\d{2})$/.exec(ym||""); if(!m) return ""; const s=new Intl.DateTimeFormat(language==="fr"?"fr-FR":"en-GB",{month:"short",year:"numeric"}).format(new Date(+m[1],+m[2]-1,1)); return s.charAt(0).toUpperCase()+s.slice(1); };
  // Period line shown in project details: "Oct 2026 — In progress" / "Mar 2026 — May 2026". Hidden when startDate is empty.
  const periodLine = p => { const s=fmtMonth(p.startDate); if(!s) return ""; const e=p.endDate?fmtMonth(p.endDate):(statusKey(p)==="progress"?t("inProgress"):""); return `<p class="modal-period">${esc(s)}${e?` — ${esc(e)}`:""}</p>`; };
  const hasRepo = p => p.repo && !p.repo.includes("YOUR_USERNAME") && !p.repo.includes("REPOSITORY_NAME");
  function projectCard(p){
    return `<article class="project-card">
      <div class="card-image-wrap"><img class="card-image" src="${esc(p.image)}" alt="${esc(localized(p,"title","projects"))}" loading="lazy"><div class="card-badges"><div class="badge-group">${catBadges(p,"projects")}</div><span class="status-badge status-${statusKey(p)}">${esc(localized(p,"status","projects"))}</span></div></div>
      <div class="card-body"><h3 class="card-title">${esc(localized(p,"title","projects"))}</h3><p class="card-description">${esc(localized(p,"shortDescription","projects"))}</p><div class="tech-list">${p.techs.slice(0,4).map(x=>`<span class="tech-tag">${esc(x)}</span>`).join("")}</div>
      <div class="card-actions">${hasRepo(p)?`<a class="card-action" href="${esc(p.repo)}" target="_blank" rel="noreferrer">↗ ${t("viewCode")}</a>`:`<span class="card-action disabled" aria-disabled="true">${t("repoSoon")}</span>`}<button class="card-action details" data-project="${esc(p.id)}">${t("details")} <span>↗</span></button></div></div></article>`;
  }
  function renderSkills(){
    const groups = data.skills || [];
    $("#skillsGrid").innerHTML = groups.map((group,index)=>`<article class="skill-group" style="--group-index:${index}"><div class="skill-group-head"><span class="skill-group-number">0${index+1}</span><h3>${esc(t(group.key))}</h3><span class="skill-group-count">${String(group.items.length).padStart(2,"0")}</span></div><div class="skill-tags">${group.items.map(item=>`<span class="skill-tag">${esc(item)}</span>`).join("")}</div></article>`).join("");
    $("#skillGroupCount").textContent = `${String(groups.length).padStart(2,"0")} ${language==="fr"?"CATÉGORIES":"CATEGORIES"}`;
  }

  function renderProjects(){
    renderFilters("#categoryFilters",categories,projectCategory,v=>{projectCategory=v;renderProjects()});
    const q=$("#projectSearch").value.trim().toLowerCase();
    const items=data.projects.filter(p=>(projectCategory==="All"||cats(p).includes(projectCategory))&&[p.title,p.description,...cats(p),...localizedCats(p,"projects"),p.domain,p.status,localized(p,"title","projects"),localized(p,"description","projects"),localized(p,"shortDescription","projects"),...p.techs,...p.tools].join(" ").toLowerCase().includes(q));
    $("#projectGrid").className=`project-grid ${projectView==="list"?"list-view":""}`;
    $("#projectGrid").innerHTML=items.map(projectCard).join("");
    $("#projectCount").textContent=`${String(items.length).padStart(2,"0")} ${language==="fr"?"PROJETS":"PROJECTS"}`;
    $("#projectEmpty").hidden=items.length!==0;
    $$("[data-project]").forEach(b=>b.addEventListener("click",()=>openProject(b.dataset.project)));
  }
  function certificateCard(c){
    return `<article class="certificate-card"><div class="card-image-wrap"><img class="card-image" src="${esc(c.image)}" alt="${esc(localized(c,"title","certificates"))}" loading="lazy"><div class="card-badges"><div class="badge-group">${catBadges(c,"certificates")}</div>${c.sample?`<span class="status-badge sample-badge">${t("sample")}</span>`:""}</div></div><div class="card-body"><h3 class="card-title">${esc(localized(c,"title","certificates"))}</h3><div class="certificate-meta"><span>${esc(c.issuer)}</span><span>${esc(c.date)}</span></div><button class="card-action details" data-certificate="${esc(c.id)}">${t("details")} <span>↗</span></button></div></article>`;
  }
  function renderCertificates(){
    renderFilters("#certificateFilters",certCategories,certificateCategory,v=>{certificateCategory=v;renderCertificates()});
    const q=$("#certificateSearch").value.trim().toLowerCase();
    const items=data.certificates.filter(c=>(certificateCategory==="All"||cats(c).includes(certificateCategory))&&[c.title,c.issuer,...cats(c),...localizedCats(c,"certificates"),c.description,localized(c,"title","certificates"),localized(c,"description","certificates"),...c.skills,...(data.translations?.certificates?.[c.id]?.skills||[])].join(" ").toLowerCase().includes(q));
    $("#certificateGrid").className=`certificate-grid ${certificateView==="list"?"list-view":""}`;
    $("#certificateGrid").innerHTML=items.map(certificateCard).join("");
    $("#certificateCount").textContent=`${String(items.length).padStart(2,"0")} ${language==="fr"?"CERTIFICATS":"CERTIFICATES"}`;
    $("#certificateEmpty").hidden=items.length!==0;
    $$("[data-certificate]").forEach(b=>b.addEventListener("click",()=>openCertificate(b.dataset.certificate)));
  }
  function section(title,content){return `<div class="modal-section"><h3>${esc(title)}</h3>${content}</div>`}
  function list(arr){return `<ul>${(arr||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`}
  let activeModal=null;
  function openProject(id){
    const p=data.projects.find(x=>x.id===id);if(!p)return;
    const val=field=>localized(p,field,"projects");
    const arr=field=>localized(p,field,"projects")||[];
    activeModal={type:"project",id};
    $("#modalContent").innerHTML=`<img class="modal-hero-image" src="${esc(p.image)}" alt="${esc(val("title"))}"><div class="modal-inner"><span class="modal-eyebrow">${esc(localizedCats(p,"projects").join(" · ").toUpperCase())} · ${esc(val("status"))}</span><h2 id="modalTitle">${esc(val("title"))}</h2>${periodLine(p)}<p class="modal-lead">${esc(val("description"))}</p>
    ${section(t("objectives"),list(arr("objectives")))}${p.pipeline?section(diagramTitle(p),`<img class="pipeline-image" src="${esc(p.pipeline)}" alt="${esc(diagramTitle(p))}">`):""}
    ${section(t("methodology"),list(arr("methodology")))}${section(t("technologies"),`<div class="tech-list">${p.techs.map(x=>`<span class="tech-tag">${esc(x)}</span>`).join("")}</div>`)}
    ${section(t("tools"),`<div class="tech-list">${p.tools.map(x=>`<span class="tech-tag">${esc(x)}</span>`).join("")}</div>`)}
    ${section(t("results"),`<p>${esc(val("results"))}</p>`)}${section(t("challenges"),list(arr("challenges")))}
    <div class="modal-links">${hasRepo(p)?`<a href="${esc(p.repo)}" target="_blank" rel="noreferrer">↗ ${t("viewCode")}</a>`:`<span class="modal-link-disabled">${t("repoSoon")}</span>`}${p.demo?`<a href="${esc(p.demo)}" target="_blank" rel="noreferrer">↗ ${t("demo")}</a>`:""}</div></div>`;
    showModal();
  }
  function openCertificate(id){
    const c=data.certificates.find(x=>x.id===id);if(!c)return;
    activeModal={type:"certificate",id};
    const title=localized(c,"title","certificates"), description=localized(c,"description","certificates"), skills=localized(c,"skills","certificates")||c.skills;
    const links=`<div class="modal-links certificate-modal-links"><a href="${esc(c.image)}" target="_blank" rel="noreferrer">↗ ${t("viewCertificate")}</a>${c.credential?`<a href="${esc(c.credential)}" target="_blank" rel="noreferrer">↗ ${t("credential")}</a>`:`<span class="modal-link-disabled">${t("credentialUnavailable")}</span>`}</div>`;
    $("#modalContent").innerHTML=`<a class="certificate-preview-link" href="${esc(c.image)}" target="_blank" rel="noreferrer" aria-label="${t("viewCertificate")}"><img class="modal-hero-image certificate-modal-image" src="${esc(c.image)}" alt="${esc(title)}"></a><div class="modal-inner"><span class="modal-eyebrow">${esc(cats(c).map(x=>categoryName(x,"certificates")).join(" · ").toUpperCase())}</span><h2 id="modalTitle">${esc(title)}</h2>${section(t("category"),`<p>${esc(cats(c).map(x=>categoryName(x,"certificates")).join(" · "))}</p>`)}${section(t("issuer"),`<p>${esc(c.issuer)}</p>`)}${section(t("date"),`<p>${esc(c.date)}</p>`)}${section(t("description"),`<p class="modal-lead">${esc(description)}</p>`)}${section(t("skills"),`<div class="tech-list">${skills.map(x=>`<span class="tech-tag">${esc(x)}</span>`).join("")}</div>`)}${links}</div>`;
    showModal();
  }
  let previousFocus=null;
  function showModal(){previousFocus=document.activeElement;$("#detailModal").classList.add("open");$("#detailModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";$("#modalClose").focus()}
  function closeModal(){activeModal=null;$("#detailModal").classList.remove("open");$("#detailModal").setAttribute("aria-hidden","true");document.body.style.overflow="";if(previousFocus?.focus)previousFocus.focus()}
  $("#modalClose").addEventListener("click",closeModal);
  $("#detailModal").addEventListener("click",e=>{if(e.target.id==="detailModal")closeModal()});
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape")closeModal();
    if(e.key==="Tab"&&$("#detailModal").classList.contains("open")){
      const f=$$("a[href],button:not([disabled])",$("#detailModal")).filter(x=>x.offsetParent!==null);
      if(!f.length)return;
      const first=f[0],last=f[f.length-1];
      if(!$("#detailModal").contains(document.activeElement)){e.preventDefault();first.focus()}
      else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  });
  $("#projectSearch").addEventListener("input",renderProjects);$("#certificateSearch").addEventListener("input",renderCertificates);
  $$(".view-button[data-view]").forEach(b=>b.addEventListener("click",()=>{$$(".view-button[data-view]").forEach(x=>{x.classList.toggle("active",x===b);x.setAttribute("aria-pressed",String(x===b))});projectView=b.dataset.view;renderProjects()}));
  $$(".certificate-view-button").forEach(b=>b.addEventListener("click",()=>{$$(".certificate-view-button").forEach(x=>{x.classList.toggle("active",x===b);x.setAttribute("aria-pressed",String(x===b))});certificateView=b.dataset.certificateView;renderCertificates()}));
  $("#languageToggle").addEventListener("click",()=>{language=language==="en"?"fr":"en";document.documentElement.lang=language;document.title=t("docTitle");$("#languageToggle").textContent=language==="en"?"FR":"EN";$$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[language][key])el.innerHTML=translations[language][key]});$$("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)});$$("[aria-label='Grid view'],[aria-label='Vue en grille']").forEach(el=>el.setAttribute("aria-label",t("gridView")));$$("[aria-label='List view'],[aria-label='Vue en liste']").forEach(el=>el.setAttribute("aria-label",t("listView")));renderSkills();renderProjects();renderCertificates();if(activeModal){if(activeModal.type==="project")openProject(activeModal.id);else openCertificate(activeModal.id)}});
  $("#themeToggle").addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=next;try{localStorage.setItem("portfolio-theme",next)}catch(e){};document.querySelector('meta[name="theme-color"]')?.setAttribute("content",next==="light"?"#f5f7fb":"#0b1020");$("#themeIcon").textContent=next==="light"?"☾":"☼"});
  let savedTheme=null;try{savedTheme=localStorage.getItem("portfolio-theme")}catch(e){};if(savedTheme){document.documentElement.dataset.theme=savedTheme;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",savedTheme==="light"?"#f5f7fb":"#0b1020");$("#themeIcon").textContent=savedTheme==="light"?"☾":"☼"}
  $("#mobileMenu").addEventListener("click",()=>{const o=$("#mainNav").classList.toggle("open");$("#mobileMenu").setAttribute("aria-expanded",String(o))});
  $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#mobileMenu").setAttribute("aria-expanded","false")}));
  $("#year").textContent=new Date().getFullYear();
  renderSkills();renderProjects();renderCertificates();

  // Lightweight canvas network: capped density, visibility-aware and reduced-motion safe.
  const canvas=$("#particleCanvas"), ctx=canvas?.getContext("2d");
  if(canvas && ctx){
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse=window.matchMedia("(pointer: coarse)");
    let particles=[], width=0,height=0,raf=0,last=0,mouse={x:-1000,y:-1000},dpr=1;
    const makeParticles=()=>{
      width=window.innerWidth;height=window.innerHeight;dpr=Math.min(window.devicePixelRatio||1,1.5);
      canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
      canvas.style.width=width+"px";canvas.style.height=height+"px";ctx.setTransform(dpr,0,0,dpr,0,0);
      const count=Math.min(78,Math.max(24,Math.floor(width*height/19000)));
      particles=Array.from({length:count},()=>({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.5+.7}));
    };
    const draw=(time)=>{
      if(document.hidden)return;
      if(time-last<32){raf=requestAnimationFrame(draw);return}last=time;
      ctx.clearRect(0,0,width,height);
      const light=document.documentElement.dataset.theme==="light";
      const rgb=light?"8,127,131":"99,230,226";
      for(let i=0;i<particles.length;i++){
        const p=particles[i];
        if(!reduced.matches){p.x+=p.vx;p.y+=p.vy;}
        if(p.x<0||p.x>width)p.vx*=-1;if(p.y<0||p.y>height)p.vy*=-1;
        const dx=p.x-mouse.x,dy=p.y-mouse.y,dist=Math.hypot(dx,dy);
        if(!coarse.matches&&!reduced.matches&&dist<115){const force=(115-dist)/115*.012;p.x+=dx*force;p.y+=dy*force;}
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${light?.32:.38})`;ctx.fill();
        for(let j=i+1;j<particles.length;j++){const q=particles[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<105){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(${rgb},${(1-d/105)*(light?.10:.12)})`;ctx.lineWidth=.7;ctx.stroke();}}
      }
      if(!reduced.matches)raf=requestAnimationFrame(draw);
    };
    const start=()=>{cancelAnimationFrame(raf);makeParticles();if(!reduced.matches&&!document.hidden)raf=requestAnimationFrame(draw);else draw(performance.now())};
    window.addEventListener("resize",start,{passive:true});
    window.addEventListener("pointermove",e=>{mouse.x=e.clientX;mouse.y=e.clientY},{passive:true});
    document.addEventListener("visibilitychange",()=>{if(document.hidden)cancelAnimationFrame(raf);else start()});
    reduced.addEventListener?.("change",start);start();
  }
  // A gentle SVG training pulse remains CSS/SVG-driven; pause decorative motion when requested.
})();
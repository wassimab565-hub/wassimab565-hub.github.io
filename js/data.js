window.PORTFOLIO_DATA = {
  skills: [
    { key: "programming", items: ["Python", "SQL", "Java", "JavaScript", "C", "PHP", "HTML5", "CSS3"] },
    { key: "dataScience", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"] },
    { key: "aiMl", items: ["Machine Learning", "Deep Learning", "TensorFlow / Keras", "PyTorch", "OpenCV", "NLP", "LLMs", "RAG"] },
    { key: "frameworks", items: ["React", "Angular", "FastAPI", "Expo / React Native", "Laravel"] },
    { key: "databasesTools", items: ["Oracle Database", "MySQL", "PostgreSQL", "Supabase", "Git", "GitHub", "VS Code", "Google Colab", "Ollama", "Power BI"] }
  ],
  projects: [
      
      {
        id: "etics-bankai", startDate: "2026-10-30", endDate: "", categories: ["NLP", "Data Engineering"], domain: "LLM · DOCUMENT AI", status: "In Progress · Academic",
        title: "ETICS-BankAI — Banking Documents Intelligence",
        image: "assets/images/projects/etics-bankai.png",
        description: "Annual project (Master 2 M2EID2, Université Sorbonne Paris Nord, 2026–2027) on LLM-based toxicity detection in contracts and documents. A local-first platform that turns banking documents and contracts (PDF, DOCX, XLSX) into structured, traceable data and flags clauses that deserve an ethical review. A human reviewer always keeps the final word: it is a decision-support tool, not a legal authority.",
        shortDescription: "Local-first LLM platform that extracts structured data from banking documents and flags clauses for ethical review.",
        techs: ["Qwen3:8B", "Ollama", "FastAPI", "PostgreSQL", "Streamlit", "Python"],
        tools: ["PyMuPDF", "Tesseract OCR", "python-docx", "openpyxl", "SQLAlchemy", "Pydantic", "Plotly", "pytest"],
        objectives: ["Build a structured dataset from unstructured banking documents and contracts.", "Detect clauses that may raise ethical concerns while being perfectly legal (imbalance, lack of transparency, unilateral changes, weak protection of vulnerable customers, unclear use of personal data).", "Keep every result traceable to a verbatim passage and a page, with a human reviewer in the loop."],
        pipeline: "assets/images/pipelines/ETICS-BankAI_Pipeline.svg",
        methodology: ["Upload and validation of PDF, DOCX and XLSX files (type, size, file signature, SHA-256)", "Parsing, table rebuilding, OCR for pages without text and page-aware chunking", "Structured extraction of 14 fields with Qwen3:8B, with evidence rebuilt from line numbers and checked by validation rules", "Ethical risk analysis in 8 categories, with severity computed by code from three yes/no criteria", "PostgreSQL storage, FastAPI REST API and a Streamlit interface with human review and a dashboard"],
        results: "Work in progress. The V1 pipeline is implemented end to end: upload, OCR, structured extraction (14 fields), ethical risk analysis (8 categories), human review and a dashboard. A 3-page fee schedule is analysed in about 48 seconds on a local GPU. Model accuracy has not been measured yet: evaluation on an annotated reference set (precision, recall, F1) and result export are the next steps.",
        challenges: ["Preventing invented quotes: the model returns line numbers and the code rebuilds the verbatim evidence", "Handling tables and scanned pages (table rebuilding, OCR)", "Making an LLM-based tool a decision-support aid, not a verdict: no flag never means the document is compliant", "Running an 8B model locally on a single GPU, one analysis at a time"],
        repo: "https://github.com/wassimab565-hub/ETICS-BankAI.git",
        demo: ""
      },
      {
        id: "sc-research-agentic-rag", startDate: "2026-10-20", endDate: "", categories: ["NLP", "AI Engineering"], domain: "LLM · RAG · SCIENTIFIC RESEARCH", status: "In Progress · Personal",
        title: "SC-Research-Agentic-RAG — Scientific Research Assistant",
        image: "assets/images/projects/sc-research-agentic-rag.png",
        description: "A local-first research assistant for scientific papers. It searches arXiv and OpenAlex, processes PDFs with page-level provenance, indexes them in a vector database and answers questions with cited sources using a local LLM. Everything after the first model download runs on the user's own machine. Work in progress: the basic RAG (phases 0 to 3) is complete and verified, and advanced retrieval is under way.",
        shortDescription: "Local RAG assistant that searches arXiv and OpenAlex, indexes papers in Qdrant and answers with checked citations.",
        techs: ["Python", "Qdrant", "BAAI/bge-m3", "Ollama (Qwen3:8B)", "Sentence Transformers", "RAG"],
        tools: ["pypdf", "arXiv API", "OpenAlex API", "pytest", "Git", "GitHub"],
        objectives: ["Find open-access papers and keep the metadata clean (deduplication by DOI, then by title).", "Answer questions only from retrieved passages, with every claim pointing to a source, a page and a link.", "Judge every retrieval change with numbers (Recall@k, MRR, nDCG) instead of impressions."],
        pipeline: "assets/images/pipelines/sc-research-agentic-rag-pipeline.png",
        methodology: ["Ingestion from the arXiv and OpenAlex APIs with normalised metadata and deduplication", "PDF download (open access only), page-by-page extraction and cleaning, chunking that keeps page and character offsets", "Embedding with BAAI/bge-m3 and storage in a local Qdrant database", "Filtered semantic retrieval (paper, source, year), minimum score and per-paper cap", "Passages merged and numbered, answer generated by a local LLM (Ollama), and a check that every cited number exists", "Evaluation harness with synthetic and hand-written questions (Recall@k, MRR, nDCG@k)"],
        results: "Work in progress. Phases 0 to 3 (foundation, ingestion, document processing, basic RAG with citations) are complete and verified. A question that the indexed documents cannot answer is refused instead of answered from memory. The evaluation harness is in place; the first dense-retrieval baseline will be compared with BM25, hybrid search and reranking in phase 4. No retrieval scores are reported yet.",
        challenges: ["Grounding: the prompt forbids answering from memory and a score threshold stops the LLM from being called when nothing relevant is found", "Avoiding fabricated references: citations that point to non-existent sources are reported", "Messy PDFs: no OCR, and two-column or unusual layouts can come out in the wrong order", "Purely semantic retrieval can miss exact names, acronyms and numbers, which is what phase 4 addresses", "The citation check verifies that a source exists, not that it supports the sentence"],
        repo: "",
        demo: "https://github.com/wassimab565-hub/sc-research-agentic-rag.git"
      },
      {
        id: "football-analytics", startDate: "2026-10-08", endDate: "", categories: ["Computer Vision", "Deep Learning"], domain: "COMPUTER VISION · SPORTS ANALYTICS", status: "In Progress · Personal",
        title: "Football Analytics — From Broadcast Video to a 2D Minimap",
        image: "assets/images/projects/football-analytics.png",
        description: "End-to-end computer vision pipeline that takes a short broadcast football clip and returns where every player, the referee and the ball are on a top-down 105 × 68 m pitch. It detects and tracks people, groups players into teams by shirt colour, locates the pitch lines to estimate the camera and projects everything onto a minimap. A FastAPI backend exposes it as an upload-and-wait job queue and an Angular app plays the result back.",
        shortDescription: "Detection, tracking, team clustering and pitch homography that turn a broadcast clip into a 2D minimap.",
        techs: ["Python", "PyTorch", "Ultralytics YOLO26", "BoT-SORT", "OpenCV", "FastAPI", "Angular"],
        tools: ["scikit-learn", "Roboflow Universe", "Google Colab (T4 GPU)", "ffmpeg", "pytest", "Git", "GitHub"],
        objectives: ["Detect and track players, goalkeepers, referees and the ball in broadcast footage.", "Project every detection onto real pitch coordinates (in metres) using a homography.", "Evaluate honestly: measure and remove data leakage before trusting any metric."],
        pipeline: "assets/images/pipelines/football-analytics-pipeline.png",
        methodology: ["Detection with YOLO26n at 1280 px (players, goalkeepers, referees, ball)", "Tracking with BoT-SORT and one role per track by confidence-weighted vote", "Team clustering: median Lab shirt colour (grass masked) and k-means into two teams", "Ball path chosen by dynamic programming over low-confidence candidates, with short gaps interpolated", "Pitch: YOLO26s-pose predicts 32 keypoints, RANSAC homography maps them to pitch coordinates", "FastAPI job queue and Angular viewer to upload a clip and play the minimap"],
        results: "Validation split of a group-based re-split of the dataset: detector mAP50 0.753 (player 0.937, ball 0.566, ball recall 0.502); moving from 640 px to 1280 px raised mAP50 from 0.682 to 0.753. On a 15 s test clip (922 frames), the full pipeline produced 77 tracks, found the pitch in 922 frames and a reliable ball position in 59% of them. There is no ground truth for the clip, so position error in metres is not measured, and the held-out test split has not been evaluated yet.",
        challenges: ["Data leakage: 93% of the validation images had a near-duplicate in training, fixed with a perceptual-hash group split (1,630 / 275 / 298 images)", "Tiny ball (about 8 px at 640 px) and low recall", "Approximate pitch calibration, especially in zoomed shots near a goal", "Goalkeepers and referees often labelled as players, and fragmented tracks"],
        repo: "https://github.com/wassimab565-hub/football-analytics.git",
        demo: ""
      },
      {
        id: "skin-lesion-classifier", startDate: "2026-09-30", endDate: "2026-05", categories: ["Computer Vision", "Deep Learning"], domain: "COMPUTER VISION", status: "In Progress · Personal",
        title: "Skin Lesion Classifier",
        image: "assets/images/projects/skin-lesion-classifier.png",
        description: "End-to-end deep learning project that classifies dermoscopic images (HAM10000) into 7 skin lesion types, served through a FastAPI REST API with Grad-CAM explanations and an Angular web interface. This is an academic and experimental project, not a medical device: its predictions must not be used for diagnosis.",
        shortDescription: "Dermoscopic image classification with Grad-CAM, a FastAPI backend and an Angular interface.",
        techs: ["TensorFlow", "MobileNetV2", "FastAPI", "Angular", "Grad-CAM", "Python"],
        tools: ["Keras", "scikit-learn", "Google Colab", "Kaggle", "Uvicorn", "Pydantic"],
        objectives: ["Classify 10,015 dermoscopic images into 7 lesion classes while avoiding data leakage.", "Compare a CNN from scratch, transfer learning and fine-tuning on imbalanced data.", "Explain each prediction with Grad-CAM and serve the model through an API and a web interface."],
        pipeline: "assets/images/pipelines/skin-lesion-classifier-pipeline.png",
        methodology: ["Exploration and lesion-level split (StratifiedGroupKFold by lesion_id, 80/10/10)", "Baseline CNN from scratch with augmentation and class weights", "MobileNetV2 transfer learning, then fine-tuning of the last 30 layers", "Evaluation on the held-out test set (per-class metrics, confusion matrix, ROC-AUC)", "Grad-CAM explainability and deployment with FastAPI + Angular"],
        results: "Fine-tuned MobileNetV2 on the held-out test set (992 images): accuracy 77.6%, macro F1 0.566, macro ROC-AUC 0.937. On validation, fine-tuning improved macro F1 from 0.208 (CNN from scratch) to 0.571 and melanoma recall from 0.041 to 0.405. Melanoma recall remains below 50%, so the model is not suitable for clinical use.",
        challenges: ["Strong class imbalance (66.9% nevus)", "Data leakage from multiple images of the same lesion", "Low recall on melanoma and rare classes", "Confident but wrong predictions"],
        repo: "https://github.com/wassimab565-hub/skin-lesion-classifier.git",
        demo: ""
      },
      {
        id: "ham500-architectures-comparison", startDate: "2026-11-02", endDate: "2026-11-04", categories: ["Computer Vision", "Deep Learning"], domain: "COMPUTER VISION · IMAGE MINING", status: "Completed · Academic",
        title: "Deep Learning Architectures Comparison — HAM500",
        image: "assets/images/projects/ham500-comparison.png",
        description: "Academic comparative study (Image Mining module) of four architectures (custom CNN, VGG16, ResNet50 and ViT-Base/16) for 7-class skin lesion classification on HAM500, a 500-image subset of HAM10000. Each architecture is trained from scratch and fine-tuned from ImageNet (7 configurations) under the same protocol. This is an experimental study on a very small dataset, not a medical tool.",
        shortDescription: "Seven-configuration comparison of CNN, VGG16, ResNet50 and ViT on an imbalanced skin lesion dataset.",
        techs: ["TensorFlow", "Keras", "KerasHub", "Vision Transformer", "Python"],
        tools: ["scikit-learn", "Google Colab (T4 GPU)", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
        objectives: ["Compare CNN, VGG16, ResNet50 and ViT under an identical experimental protocol.", "Measure the contribution of ImageNet pretraining (From Scratch vs Fine-Tuning).", "Analyse overfitting, convergence and per-class behaviour on a small, imbalanced dataset."],
        methodology: ["Exploration of HAM500 (500 images, 7 classes, 66.4% nevus) and stratified 64/16/20 split (seed 42)", "Architecture-specific preprocessing, 224×224 inputs, no data augmentation", "Training of 7 configurations with Adam, batch size 16, EarlyStopping (patience 5) and best-weights checkpointing", "Evaluation on the test set: accuracy, macro F1, per-class recall, confusion matrices, parameters and training time", "Analysis of learning curves and discussion of limits"],
        results: "Test set of 100 images. Fine-tuning improved all three pretrained architectures: ResNet50 reached the best accuracy (0.76) and ViT the best macro F1 (0.402 vs 0.114 for the custom CNN). Several models reach about 0.66 accuracy only by predicting the majority class (nevus), and recall is zero for df and vasc in every model. With only 100 test images, no general claim about architecture superiority can be made.",
        challenges: ["Strong class imbalance (66.4% nevus) making accuracy misleading", "Extremely rare classes (df: 5 images, vasc: 8 images)", "Overfitting of the fine-tuned models", "Very small test set (100 images) limiting generalisation"],
        repo: "",
        demo: ""
      },
      {
        id: "darija-translator", startDate: "2026-01-23", endDate: "2026-02-01", categories: ["Web Development"], domain: "NLP · WEB SERVICES", status: "Completed · Academic",
        title: "English ↔ Darija Translator",
        image: "assets/images/projects/darija-translator.png",
        description: "A secure RESTful web service that translates text between English and Moroccan Arabic (Darija) using a Large Language Model (Gemini). The Java JAX-RS backend is protected with HTTP Basic Authentication and is consumed by two different clients: a PHP web client and a Chrome extension (Manifest V3) with a side panel that picks up the text selected on the page. Built to understand how REST APIs, security and multi-client architectures work together.",
        shortDescription: "REST API in Java with a Gemini LLM, consumed by a PHP client and a Chrome extension.",
        techs: ["Java", "JAX-RS", "Gemini API", "PHP", "JavaScript", "Chrome Extension (MV3)"],
        tools: ["Maven", "Jakarta EE", "Postman", "cURL", "Git", "GitHub"],
        objectives: ["Design a RESTful web service exchanging JSON over HTTP.", "Secure the translation endpoint with HTTP Basic Authentication.", "Consume the same API from a PHP web client and from a Chrome extension.", "Integrate a Large Language Model for English ↔ Darija translation."],
        pipeline: "assets/images/pipelines/darija-translator-architecture.png",
        diagramLabel: { en: "Architecture", fr: "Architecture" },
        methodology: ["REST API in Java (JAX-RS) with a ping endpoint and a translate endpoint (JSON in, JSON out)", "Prompt-based translation with the Gemini API, in both directions", "Basic Authentication filter: 401 for missing or invalid credentials", "PHP client with a direction toggle and authenticated requests", "Chrome extension (Manifest V3) with a side panel that copies the text selected on the active page", "Testing with cURL and Postman (200, 400 and 401 scenarios)"],
        results: "A working translator exposed as a REST API and used by two clients (a PHP web page and a Chrome extension). The API was tested with cURL and Postman for valid requests (200 OK), missing data (400 Bad Request) and missing or invalid credentials (401 Unauthorized). Planned improvements: JWT instead of Basic Authentication, user accounts, voice input, text-to-speech and cloud deployment (Docker / VPS).",
        challenges: ["Securing the endpoint with Basic Authentication for several clients", "Prompting an LLM for reliable translation in both directions", "Reusing one API from two very different clients (web page and browser extension)", "Reading the text selected on the active page from the extension"],
        repo: "https://github.com/wassimab565-hub/english-darija-translator-extension.git",
        demo: ""
      },
      {
        id: "storeonline", startDate: "", endDate: "", categories: ["Web Development", "E-commerce"], domain: "WEB DEVELOPMENT", status: "Completed · Academic",
        title: "StoreOnline — E-commerce Web Application",
        image: "assets/images/projects/storeonline.png",
        description: "Final-year (licence) project: a complete online store built with Laravel (MVC) and MySQL. Customers can browse the catalogue by category, search and filter products, manage a cart with coupons and a wishlist, place orders, track them and contact support. The owner manages products, brands, categories, orders, slides, coupons, messages and users from a dedicated admin dashboard with sales statistics. Payments are simulated. Built in a team of two: I was in charge of implementation and testing.",
        shortDescription: "Full e-commerce platform with a customer storefront and an admin dashboard, built with Laravel and MySQL.",
        techs: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "HTML / CSS"],
        tools: ["XAMPP", "Composer", "VS Code", "phpMyAdmin", "Enterprise Architect", "Microsoft Project"],
        objectives: ["Let customers browse, search, filter and order products online.", "Give the store owner a secure admin interface to manage products, orders and users without touching the code.", "Provide sales statistics (orders, revenue) and a dynamic catalogue structure."],
        pipeline: "assets/images/pipelines/storeonline-class-diagram.png",
        diagramLabel: { en: "Class diagram", fr: "Diagramme de classes" },
        methodology: ["Requirements analysis and functional specification (V-model)", "UML modeling: use cases, sequence and class diagrams", "Database design: 20 MySQL tables (users, products, orders, order items, transactions, categories, brands, coupons, addresses, contacts, slides)", "Implementation with Laravel 11 (MVC) and Bootstrap 5", "Testing and validation"],
        results: "Working application with a responsive customer storefront (home, product details, cart, coupons, wishlist, orders, account, contact form, search) and an admin dashboard (order summary, monthly revenue chart, management of products, brands, categories, slides, coupons, messages and users). Payments are simulated; online payment, notifications and a mobile app are planned as future work.",
        challenges: ["Keeping storefront and admin logic cleanly separated (MVC)", "Modeling orders, order items, transactions and coupons consistently", "Letting the owner manage the catalogue without code changes"],
        repo: "",
        demo: ""
      },
  ],
  certificates: [
    {
      id: "cert-oci-ai",
      categories: ["Artificial Intelligence", "Cloud"],
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "Oracle",
      date: "27/09/2026",
      image: "assets/images/certificates/OCI_AI_Foundation_Associate_Certificate.png",
      description: "Oracle's foundational AI certification (exam 1Z0-1122-26). It covers AI, machine learning and deep learning fundamentals (supervised, unsupervised and reinforcement learning, CNN, RNN and LSTM), generative AI and large language models (transformers, prompt engineering, fine-tuning), the OCI AI and ML portfolio, Oracle Vector Search with Autonomous Database, responsible AI, and OCI AI services such as Language, Vision, Document Understanding and Speech.",
      credential: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=639D4DBA4C79A25E38B1EB84568FC519FD48F48ADF3C060BB86EF16116E5E5ED",
      skills: ["AI & ML Fundamentals", "Deep Learning (CNN, RNN, LSTM)", "Generative AI & LLMs", "Prompt Engineering", "Oracle Vector Search", "OCI AI Services", "Responsible AI"]
    },
    {
      id: "cert-hackerrank-sql-advanced",
      categories: ["Data"],
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      date: "19/10/2026",
      image: "assets/images/certificates/Hacker_Rank_SQL_Advanced_Certificate.png",
      description: "HackerRank skills certification validating advanced SQL: complex queries, joins, aggregations and problem solving on real database tasks.",
      credential: "https://www.hackerrank.com/certificates/258e7648ea2d",
      skills: ["SQL", "Advanced Queries", "Joins & Aggregations", "Problem Solving"]
    },
    {
      id: "cert-kaggle-python",
      categories: ["Data Science"],
      title: "Python Certificate",
      issuer: "Kaggle",
      date: "06/11/2026",
      image: "assets/images/certificates/Kaggle_Python_Certificate.png",
      description: "Kaggle Learn certificate validating Python fundamentals for data science: syntax, functions, control flow, lists and dictionaries, and working with libraries.",
      credential: "https://www.kaggle.com/learn/certification/wassim15/python",
      skills: ["Python", "Functions", "Lists & Dictionaries", "Data Science Basics"]
    }
  ],
  translations: {
    projects: {
      "darija-translator": {
        categories: ["Développement web"], domain: "NLP · SERVICES WEB", status: "Terminé · Académique",
        title: "Traducteur Anglais ↔ Darija",
        shortDescription: "API REST en Java avec un LLM Gemini, utilisée par un client PHP et une extension Chrome.",
        description: "Un service web RESTful sécurisé qui traduit des textes entre l’anglais et l’arabe marocain (darija) à l’aide d’un grand modèle de langage (Gemini). Le backend Java JAX-RS est protégé par l’authentification HTTP Basic et consommé par deux clients différents : un client web PHP et une extension Chrome (Manifest V3) avec un panneau latéral qui récupère le texte sélectionné dans la page. Réalisé pour comprendre comment les API REST, la sécurité et les architectures multi-clients fonctionnent ensemble.",
        objectives: ["Concevoir un service web RESTful échangeant du JSON sur HTTP.", "Sécuriser le point d’accès de traduction avec l’authentification HTTP Basic.", "Consommer la même API depuis un client web PHP et depuis une extension Chrome.", "Intégrer un grand modèle de langage pour la traduction anglais ↔ darija."],
        methodology: ["API REST en Java (JAX-RS) avec un point d’accès ping et un point d’accès de traduction (JSON en entrée et en sortie)", "Traduction par prompt avec l’API Gemini, dans les deux sens", "Filtre d’authentification Basic : 401 si les identifiants sont absents ou invalides", "Client PHP avec bascule de direction et requêtes authentifiées", "Extension Chrome (Manifest V3) avec un panneau latéral qui copie le texte sélectionné dans la page active", "Tests avec cURL et Postman (scénarios 200, 400 et 401)"],
        results: "Un traducteur fonctionnel exposé via une API REST et utilisé par deux clients (une page web PHP et une extension Chrome). L’API a été testée avec cURL et Postman pour des requêtes valides (200 OK), des données manquantes (400 Bad Request) et des identifiants absents ou invalides (401 Unauthorized). Évolutions prévues : JWT à la place de l’authentification Basic, comptes utilisateurs, saisie vocale, synthèse vocale et déploiement dans le cloud (Docker / VPS).",
        challenges: ["Sécuriser le point d’accès avec l’authentification Basic pour plusieurs clients", "Concevoir un prompt fiable pour la traduction dans les deux sens", "Réutiliser une même API depuis deux clients très différents (page web et extension de navigateur)", "Lire le texte sélectionné dans la page active depuis l’extension"]
      },
      "etics-bankai": {
        categories: ["NLP", "Ingénierie IA"], domain: "LLM · DOCUMENT AI", status: "En cours · Académique",
        title: "ETICS-BankAI — Intelligence documentaire bancaire",
        shortDescription: "Plateforme LLM locale qui extrait des données structurées de documents bancaires et signale les clauses à examiner sur le plan éthique.",
        description: "Projet annuel (Master 2 M2EID2, Université Sorbonne Paris Nord, 2026–2027) sur la détection de toxicité dans les contrats et documents à l’aide de LLM. Une plateforme « local-first » qui transforme des documents et contrats bancaires (PDF, DOCX, XLSX) en données structurées et traçables, et signale les clauses qui méritent un examen éthique. Un relecteur humain garde toujours le dernier mot : c’est un outil d’aide à la décision, pas une autorité juridique.",
        objectives: ["Construire un jeu de données structuré à partir de documents et contrats bancaires non structurés.", "Détecter les clauses pouvant soulever des préoccupations éthiques tout en étant parfaitement légales (déséquilibre, manque de transparence, modifications unilatérales, faible protection des clients vulnérables, usage flou des données personnelles).", "Garder chaque résultat traçable jusqu’à un passage verbatim et une page, avec un relecteur humain dans la boucle."],
        methodology: ["Téléversement et validation des fichiers PDF, DOCX et XLSX (type, taille, signature du fichier, SHA-256)", "Analyse du document, reconstruction des tableaux, OCR des pages sans texte et découpage par page", "Extraction structurée de 14 champs avec Qwen3:8B, preuves reconstruites à partir des numéros de ligne et contrôlées par des règles de validation", "Analyse des risques éthiques en 8 catégories, gravité calculée par le code à partir de trois critères oui/non", "Stockage PostgreSQL, API REST FastAPI et interface Streamlit avec relecture humaine et tableau de bord"],
        results: "Travail en cours. Le pipeline V1 est implémenté de bout en bout : téléversement, OCR, extraction structurée (14 champs), analyse des risques éthiques (8 catégories), relecture humaine et tableau de bord. Une grille tarifaire de 3 pages est analysée en environ 48 secondes sur un GPU local. La précision du modèle n’a pas encore été mesurée : l’évaluation sur un jeu de référence annoté (précision, rappel, F1) et l’export des résultats sont les prochaines étapes.",
        challenges: ["Empêcher les citations inventées : le modèle renvoie des numéros de ligne et le code reconstruit la preuve verbatim", "Gérer les tableaux et les pages scannées (reconstruction des tableaux, OCR)", "Faire d’un outil basé sur un LLM une aide à la décision et non un verdict : l’absence de signalement ne prouve jamais la conformité du document", "Exécuter un modèle de 8 milliards de paramètres en local sur un seul GPU, une analyse à la fois"]
      },
      "sc-research-agentic-rag": {
        categories: ["NLP", "Ingénierie IA"], domain: "LLM · RAG · RECHERCHE SCIENTIFIQUE", status: "En cours · Personnel",
        title: "SC-Research-Agentic-RAG — Assistant de recherche scientifique",
        shortDescription: "Assistant RAG local qui interroge arXiv et OpenAlex, indexe les articles dans Qdrant et répond avec des citations vérifiées.",
        description: "Un assistant de recherche « local-first » pour les articles scientifiques. Il interroge arXiv et OpenAlex, traite les PDF en conservant la page d’origine, les indexe dans une base vectorielle et répond aux questions avec des sources citées grâce à un LLM local. Tout ce qui suit le premier téléchargement des modèles s’exécute sur la machine de l’utilisateur. Travail en cours : le RAG de base (phases 0 à 3) est terminé et vérifié, et la recherche avancée est en cours.",
        objectives: ["Trouver des articles en accès ouvert et garder des métadonnées propres (déduplication par DOI, puis par titre).", "Répondre uniquement à partir des passages récupérés, chaque affirmation renvoyant à une source, une page et un lien.", "Juger chaque changement de recherche avec des chiffres (Recall@k, MRR, nDCG) plutôt qu’avec des impressions."],
        methodology: ["Ingestion depuis les API arXiv et OpenAlex avec métadonnées normalisées et déduplication", "Téléchargement des PDF (accès ouvert uniquement), extraction page par page et nettoyage, découpage en conservant la page et les positions de caractères", "Vectorisation avec BAAI/bge-m3 et stockage dans une base Qdrant locale", "Recherche sémantique filtrée (article, source, année), score minimal et plafond par article", "Passages fusionnés et numérotés, réponse générée par un LLM local (Ollama), puis vérification que chaque numéro cité existe", "Banc d’évaluation avec des questions synthétiques et rédigées à la main (Recall@k, MRR, nDCG@k)"],
        results: "Travail en cours. Les phases 0 à 3 (fondations, ingestion, traitement des documents, RAG de base avec citations) sont terminées et vérifiées. Une question à laquelle les documents indexés ne peuvent pas répondre est refusée au lieu d’être traitée de mémoire. Le banc d’évaluation est en place ; la première référence en recherche dense sera comparée à BM25, à la recherche hybride et au reranking en phase 4. Aucun score de recherche n’est encore publié.",
        challenges: ["Ancrage dans les sources : le prompt interdit de répondre de mémoire et un seuil de score empêche d’appeler le LLM quand rien de pertinent n’est trouvé", "Éviter les références inventées : les citations qui pointent vers des sources inexistantes sont signalées", "PDF difficiles : pas d’OCR, et les mises en page à deux colonnes ou atypiques peuvent sortir dans le mauvais ordre", "Une recherche purement sémantique peut manquer les noms exacts, acronymes et nombres, ce que la phase 4 vise à corriger", "La vérification des citations contrôle qu’une source existe, pas qu’elle appuie la phrase"]
      },
      "football-analytics": {
        categories: ["Vision par ordinateur", "Deep Learning"], domain: "VISION PAR ORDINATEUR · ANALYSE SPORTIVE", status: "En cours · Personnel",
        title: "Football Analytics — De la vidéo TV à une minimap 2D",
        shortDescription: "Détection, suivi, regroupement des équipes et homographie du terrain pour transformer un extrait TV en minimap 2D.",
        description: "Pipeline de vision par ordinateur de bout en bout qui prend un court extrait d’un match de football télévisé et renvoie la position de chaque joueur, de l’arbitre et du ballon sur un terrain vu de dessus de 105 × 68 m. Il détecte et suit les personnes, regroupe les joueurs en équipes selon la couleur du maillot, repère les lignes du terrain pour estimer la caméra et projette le tout sur une minimap. Un backend FastAPI l’expose sous forme de file de tâches (téléversement puis attente) et une application Angular rejoue le résultat.",
        objectives: ["Détecter et suivre joueurs, gardiens, arbitres et ballon dans des images télévisées.", "Projeter chaque détection sur les coordonnées réelles du terrain (en mètres) grâce à une homographie.", "Évaluer honnêtement : mesurer et supprimer la fuite de données avant de faire confiance à une métrique."],
        methodology: ["Détection avec YOLO26n à 1280 px (joueurs, gardiens, arbitres, ballon)", "Suivi avec BoT-SORT et un seul rôle par piste par vote pondéré par la confiance", "Regroupement des équipes : couleur Lab médiane du maillot (herbe masquée) et k-means en deux équipes", "Trajectoire du ballon choisie par programmation dynamique parmi des candidats à faible confiance, avec interpolation des courtes lacunes", "Terrain : YOLO26s-pose prédit 32 points clés, une homographie RANSAC les projette sur les coordonnées du terrain", "File de tâches FastAPI et visionneuse Angular pour téléverser un extrait et rejouer la minimap"],
        results: "Sur la validation d’un nouveau découpage du jeu de données par groupes : mAP50 du détecteur de 0,753 (joueur 0,937, ballon 0,566, rappel du ballon 0,502) ; passer de 640 px à 1280 px fait monter la mAP50 de 0,682 à 0,753. Sur un extrait de test de 15 s (922 images), le pipeline complet a produit 77 pistes, détecté le terrain sur 922 images et obtenu une position fiable du ballon sur 59 % d’entre elles. Il n’y a pas de vérité terrain pour cet extrait : l’erreur de position en mètres n’est donc pas mesurée, et le jeu de test réservé n’a pas encore été évalué.",
        challenges: ["Fuite de données : 93 % des images de validation avaient un quasi-doublon dans l’entraînement, corrigée par un découpage par groupes avec hachage perceptuel (1 630 / 275 / 298 images)", "Ballon minuscule (environ 8 px à 640 px) et rappel faible", "Calibrage du terrain approximatif, surtout sur les plans zoomés près d’un but", "Gardiens et arbitres souvent étiquetés comme joueurs, et pistes fragmentées"]
      },
      "skin-lesion-classifier": {
        categories: ["Vision par ordinateur", "Deep Learning"], domain: "VISION PAR ORDINATEUR", status: "Terminé · Personnel",
        title: "Classificateur de lésions cutanées",
        shortDescription: "Classification d’images dermoscopiques avec Grad-CAM, un backend FastAPI et une interface Angular.",
        description: "Projet de deep learning de bout en bout qui classe des images dermoscopiques (HAM10000) en 7 types de lésions cutanées, exposé via une API REST FastAPI avec explications Grad-CAM et une interface web Angular. Il s’agit d’un projet académique et expérimental, pas d’un dispositif médical : ses prédictions ne doivent pas servir à établir un diagnostic.",
        objectives: ["Classer 10 015 images dermoscopiques en 7 classes de lésions en évitant les fuites de données.", "Comparer un CNN entraîné de zéro, le transfer learning et le fine-tuning sur des données déséquilibrées.", "Expliquer chaque prédiction avec Grad-CAM et servir le modèle via une API et une interface web."],
        methodology: ["Exploration et découpage par lésion (StratifiedGroupKFold sur lesion_id, 80/10/10)", "CNN de référence entraîné de zéro avec augmentation et pondération des classes", "Transfer learning avec MobileNetV2, puis fine-tuning des 30 dernières couches", "Évaluation sur le jeu de test réservé (métriques par classe, matrice de confusion, ROC-AUC)", "Explicabilité Grad-CAM et déploiement avec FastAPI + Angular"],
        results: "MobileNetV2 fine-tuné sur le jeu de test réservé (992 images) : accuracy 77,6 %, F1 macro 0,566, ROC-AUC macro 0,937. Sur la validation, le fine-tuning fait passer le F1 macro de 0,208 (CNN de zéro) à 0,571 et le rappel du mélanome de 0,041 à 0,405. Le rappel du mélanome reste inférieur à 50 % : le modèle n’est donc pas adapté à un usage clinique.",
        challenges: ["Fort déséquilibre des classes (66,9 % de nævus)", "Fuite de données due aux images multiples d’une même lésion", "Faible rappel sur le mélanome et les classes rares", "Prédictions confiantes mais erronées"]
      },
      "ham500-architectures-comparison": {
        categories: ["Vision par ordinateur", "Deep Learning"], domain: "VISION PAR ORDINATEUR · IMAGE MINING", status: "Terminé · Académique",
        title: "Comparaison d’architectures de Deep Learning — HAM500",
        shortDescription: "Comparaison de sept configurations (CNN, VGG16, ResNet50, ViT) sur un jeu de lésions cutanées déséquilibré.",
        description: "Étude comparative académique (module Image Mining) de quatre architectures (CNN personnalisé, VGG16, ResNet50 et ViT-Base/16) pour la classification de lésions cutanées en 7 classes sur HAM500, un sous-ensemble de 500 images de HAM10000. Chaque architecture est entraînée depuis zéro puis adaptée par fine-tuning depuis ImageNet (7 configurations) avec le même protocole. Il s’agit d’une étude expérimentale sur un très petit jeu de données, pas d’un outil médical.",
        objectives: ["Comparer CNN, VGG16, ResNet50 et ViT selon un protocole expérimental identique.", "Mesurer l’apport du préentraînement ImageNet (From Scratch vs Fine-Tuning).", "Analyser le surapprentissage, la convergence et le comportement par classe sur un petit jeu déséquilibré."],
        methodology: ["Exploration de HAM500 (500 images, 7 classes, 66,4 % de nævus) et découpage stratifié 64/16/20 (graine 42)", "Prétraitement propre à chaque architecture, entrées 224×224, sans augmentation de données", "Entraînement de 7 configurations avec Adam, batch de 16, EarlyStopping (patience 5) et sauvegarde des meilleurs poids", "Évaluation sur le test : accuracy, F1 macro, rappel par classe, matrices de confusion, paramètres et temps d’entraînement", "Analyse des courbes d’apprentissage et discussion des limites"],
        results: "Jeu de test de 100 images. Le fine-tuning améliore les trois architectures préentraînées : ResNet50 obtient la meilleure accuracy (0,76) et ViT le meilleur F1 macro (0,402 contre 0,114 pour le CNN personnalisé). Plusieurs modèles n’atteignent environ 0,66 d’accuracy qu’en prédisant la classe majoritaire (nævus), et le rappel est nul pour df et vasc dans tous les modèles. Avec seulement 100 images de test, aucune conclusion générale sur la supériorité d’une architecture n’est possible.",
        challenges: ["Fort déséquilibre des classes (66,4 % de nævus) rendant l’accuracy trompeuse", "Classes extrêmement rares (df : 5 images, vasc : 8 images)", "Surapprentissage des modèles fine-tunés", "Jeu de test très petit (100 images) limitant la généralisation"]
      },
      "storeonline": {
        categories: ["Développement web", "E-commerce"], domain: "DÉVELOPPEMENT WEB", status: "Terminé · Académique",
        title: "StoreOnline — Application web e-commerce",
        shortDescription: "Plateforme e-commerce complète avec boutique client et tableau de bord d’administration, développée avec Laravel et MySQL.",
        description: "Projet de fin d’études (licence) : une boutique en ligne complète développée avec Laravel (MVC) et MySQL. Les clients peuvent parcourir le catalogue par catégorie, rechercher et filtrer les produits, gérer un panier avec coupons et une liste de souhaits, passer et suivre leurs commandes et contacter le support. Le propriétaire gère les produits, marques, catégories, commandes, slides, coupons, messages et utilisateurs depuis un tableau de bord d’administration avec statistiques de ventes. Les paiements sont simulés. Projet réalisé en binôme : j’ai pris en charge l’implémentation et les tests.",
        objectives: ["Permettre aux clients de parcourir, rechercher, filtrer et commander des produits en ligne.", "Offrir au propriétaire une interface d’administration sécurisée pour gérer produits, commandes et utilisateurs sans toucher au code.", "Fournir des statistiques de ventes (commandes, revenus) et une structure de catalogue dynamique."],
        methodology: ["Analyse des besoins et spécification fonctionnelle (modèle en V)", "Modélisation UML : cas d’utilisation, diagrammes de séquence et de classes", "Conception de la base de données : 20 tables MySQL (users, products, orders, order_items, transactions, categories, brands, coupons, addresses, contacts, slides)", "Implémentation avec Laravel 11 (MVC) et Bootstrap 5", "Tests et validation"],
        results: "Application fonctionnelle avec une boutique client responsive (accueil, détails produit, panier, coupons, liste de souhaits, commandes, compte, formulaire de contact, recherche) et un tableau de bord d’administration (résumé des commandes, graphique des revenus mensuels, gestion des produits, marques, catégories, slides, coupons, messages et utilisateurs). Les paiements sont simulés ; le paiement en ligne, les notifications et une application mobile sont prévus comme évolutions.",
        challenges: ["Séparer proprement la logique de la boutique et de l’administration (MVC)", "Modéliser de façon cohérente commandes, lignes de commande, transactions et coupons", "Permettre au propriétaire de gérer le catalogue sans modifier le code"]
      },
    },
    certificates: {
      "cert-oci-ai": {
        categories: ["Intelligence artificielle", "Cloud"],
        title: "Oracle Cloud Infrastructure AI Foundations Associate",
        description: "Certification fondamentale d’Oracle en intelligence artificielle (examen 1Z0-1122-26). Elle couvre les bases de l’IA, du machine learning et du deep learning (apprentissage supervisé, non supervisé et par renforcement, CNN, RNN et LSTM), l’IA générative et les grands modèles de langage (transformers, prompt engineering, fine-tuning), le portefeuille OCI AI et ML, Oracle Vector Search avec Autonomous Database, l’IA responsable, ainsi que les services OCI AI tels que Language, Vision, Document Understanding et Speech.",
        skills: ["Fondamentaux IA & ML", "Deep Learning (CNN, RNN, LSTM)", "IA générative & LLM", "Prompt engineering", "Oracle Vector Search", "Services OCI AI", "IA responsable"]
      },
      "cert-hackerrank-sql-advanced": {
        categories: ["Données"],
        title: "Certificat SQL (Avancé)",
        description: "Certification de compétences HackerRank validant le SQL avancé : requêtes complexes, jointures, agrégations et résolution de problèmes sur des tâches de bases de données.",
        skills: ["SQL", "Requêtes avancées", "Jointures & agrégations", "Résolution de problèmes"]
      },
      "cert-kaggle-python": {
        categories: ["Science des données"],
        title: "Certificat Python",
        description: "Certificat Kaggle Learn validant les bases de Python pour la science des données : syntaxe, fonctions, structures de contrôle, listes et dictionnaires, et utilisation de bibliothèques.",
        skills: ["Python", "Fonctions", "Listes & dictionnaires", "Bases de la data science"]
      }
    }
  }

};

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  techStack: { name: string; category: string }[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  docsUrl?: string;
  gallery?: string[];
  diagram: string;
  features: string[];
  highlights: string[];
  demoComingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ai-powered-query-generator",
    title: "AI-Powered Query Generator",
    shortDescription: "LangChain-integrated service translating user inputs to SQL with 85% precision.",
    description: "LangChain-integrated Python service translating user inputs to SQL statements. Engineered efficient APIs slashing query creation time by 75% for 50+ end-users. Achieved 85% precision across PostgreSQL, MySQL, and Oracle via adaptive frameworks. Scales to handle 500+ daily calls with comprehensive validation protocols.",
    image: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/ChatGPT%20Image%20Jan%2019,%202026,%2001_10_08%20AM.png",
    videoUrl: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/lv_0_20260115203835.mp4",
    gallery: [
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/screencapture-localhost-3000-2026-01-19-00_58_19.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/screencapture-localhost-3000-2026-01-19-01_01_42.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/screencapture-localhost-3000-2026-01-19-01_00_05.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/Screenshot%202026-01-19%20010042.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Query/Screenshot%202026-01-19%20010229.png"
    ],
    tags: ["React", "FastAPI", "LangChain", "SQLite", "Tailwind CSS"],
    techStack: [
      { name: "React 18", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "Monaco Editor", category: "Frontend" },
      { name: "FastAPI", category: "Backend" },
      { name: "LangChain", category: "AI/ML" },
      { name: "SQLite", category: "Database" },
      { name: "Pydantic", category: "Backend" },
    ],
    githubUrl: "https://github.com/rohazshaik/AI-Powered-Query-Generator",
    features: [
      "AI-powered SQL generation from natural language",
      "File upload support (CSV/Excel/JSON)",
      "Database switching between default and uploaded data",
      "Modern dark mode interface with glassmorphism",
      "Interactive results in formatted tables",
      "Query history with save and reload",
      "Schema viewer with collapsible tables",
      "SQL injection protection with SELECT-only queries",
    ],
    highlights: [
      "75% reduction in query creation time",
      "85% precision across PostgreSQL, MySQL, Oracle",
      "500+ daily API calls handled",
    ],
    diagram: `flowchart TB
    subgraph Frontend["Frontend (React + Vite)"]
        UI[User Interface]
        Editor[Monaco SQL Editor]
        History[Query History]
    end
    
    subgraph Backend["Backend (FastAPI)"]
        API[REST API]
        Validator[SQL Validator]
        Executor[Query Executor]
    end
    
    subgraph AI["AI Layer"]
        LangChain[LangChain]
        Prompts[Prompt Engineering]
    end
    
    subgraph Data["Data Layer"]
        SQLite[(SQLite DB)]
        Upload[File Uploads]
    end
    
    UI --> API
    API --> Prompts
    Prompts --> LangChain
    LangChain --> Validator
    Validator --> Executor
    Executor --> SQLite
    Upload --> SQLite
    SQLite --> UI
    History --> UI`,
  },
  {
    slug: "ai-pdf-chatbot",
    title: "AI Document Search System",
    shortDescription: "RAG chatbot delivering 90% accurate responses from 1,000+ page datasets.",
    description: "FastAPI and Python-based backend delivering 90% accurate responses from 1,000+ page datasets. Features vector-based search using FAISS embeddings for advanced query processing, API interfaces supporting 100+ simultaneous requests with sub-3-second latency, MongoDB for user sessions and optimized vector storage.",
    image: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/ChatGPT%20Image%20Jan%2018,%202026,%2010_56_51%20PM.png",
    videoUrl: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/lv_0_20260119002031.mp4",
    gallery: [
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/screencapture-localhost-3000-2026-01-18-22_10_35.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/screencapture-localhost-3000-2026-01-18-22_12_18.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/screencapture-localhost-3000-2026-01-18-22_14_38.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/screencapture-localhost-3000-2026-01-18-22_19_14.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/Screenshot%202026-01-18%20221509.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOC%20RAG/Screenshot%202026-01-18%20222139.png"
    ],
    tags: ["React", "FastAPI", "LangGraph", "FAISS", "Python"],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "FastAPI", category: "Backend" },
      { name: "LangChain", category: "AI/ML" },
      { name: "LangGraph", category: "AI/ML" },
      { name: "FAISS", category: "AI/ML" },
      { name: "MongoDB", category: "Database" },
      { name: "Pinecone", category: "AI/ML" },
    ],
    githubUrl: "https://github.com/rohazshaik/ai-pdf-chatbot-langchain",
    features: [
      "90% accurate responses from large datasets",
      "Advanced RAG pipeline with LangGraph orchestration",
      "Vector-based search using FAISS embeddings",
      "100+ simultaneous requests with sub-3s latency",
      "Smart chat history with AI-generated titles",
      "MongoDB for user sessions",
      "Pinecone for optimized vector storage",
    ],
    highlights: [
      "90% accuracy on 1,000+ page datasets",
      "100+ concurrent requests supported",
      "Sub-3-second response latency",
    ],
    diagram: `flowchart LR
    subgraph Ingestion["1. Ingestion"]
        PDF[PDF Upload]
        Parser[PDF Parser]
        Chunker[Semantic Chunker]
    end
    
    subgraph Embedding["2. Embedding"]
        Embedder[MiniLM-L6-v2]
        Vectors[Vector Store]
    end
    
    subgraph Storage["3. Storage"]
        FAISS[(FAISS Index)]
    end
    
    subgraph Orchestration["4. LangGraph"]
        State[State Manager]
        Retriever[Retriever Node]
        Generator[Generator Node]
    end
    
    subgraph Generation["5. Generation"]
        LLM[LLM]
        Response[Answer]
    end
    
    PDF --> Parser --> Chunker
    Chunker --> Embedder --> Vectors --> FAISS
    
    Query[User Query] --> State
    State --> Retriever --> FAISS
    FAISS --> Generator
    Generator --> LLM --> Response`,
  },
  {
    slug: "docspot",
    title: "DocSpot - Appointment Booking System",
    shortDescription: "MERN booking system with JWT security and 98% booking conflict elimination.",
    description: "Node.js and Express.js server with JWT security and MongoDB connectivity. Role-based access controls using 256-bit encryption for three user types. Scheduling endpoints producing 5,000+ secure tokens integrated with QR codes. Refined query performance to eliminate 98% of booking conflicts for 15+ providers.",
    image: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/ChatGPT%20Image%20Jan%2019,%202026,%2001_27_41%20AM.png",
    videoUrl: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOCSPOT%20-%20DEMO%20(1).mp4",
    docsUrl: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/DOCSPOT%20-%20LTVIP2025TMID50339%20.docx",
    gallery: [
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(9).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(8).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(6).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(5).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(4).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(3).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(2).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(12).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(11).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(10).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Screenshot%20Doc%20(1).png"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    techStack: [
      { name: "React.js", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "JWT", category: "Security" },
      { name: "Multer", category: "Backend" },
      { name: "Bcrypt", category: "Security" },
    ],
    githubUrl: "https://github.com/rohazshaik/docspot-seamless-appointment-booking",
    features: [
      "User registration and JWT authentication",
      "Browse doctors by specialization",
      "Book and manage appointments",
      "Doctor application with admin approval",
      "Real-time notifications",
      "Upload medical documents",
      "Admin dashboard with analytics",
      "5,000+ secure tokens with QR integration",
    ],
    highlights: [
      "98% booking conflict elimination",
      "256-bit encryption for role-based access",
      "15+ healthcare providers supported",
    ],
    diagram: `flowchart TB
    subgraph Users["User Roles"]
        Patient[Patient]
        Doctor[Doctor]
        Admin[Administrator]
    end
    
    subgraph Frontend["Frontend (React)"]
        UI[User Interface]
        Auth[Auth Context]
        Routes[Protected Routes]
    end
    
    subgraph Backend["Backend (Node/Express)"]
        API[REST API]
        AuthMW[JWT Middleware]
        Controllers[Controllers]
    end
    
    subgraph Database["Database (MongoDB)"]
        UsersDB[(Users)]
        DoctorsDB[(Doctors)]
        ApptsDB[(Appointments)]
    end
    
    Patient --> UI
    Doctor --> UI
    Admin --> UI
    
    UI --> Auth --> API
    API --> AuthMW --> Controllers
    Controllers --> UsersDB
    Controllers --> DoctorsDB
    Controllers --> ApptsDB`,
  },
  {
    slug: "punchers-gesture-control",
    title: "Punchers Gesture Control",
    shortDescription: "Play boxing games through body gestures using computer vision and MediaPipe.",
    description: "An innovative project that lets you play the Punchers boxing game using webcam-captured body movements. Built with MediaPipe for pose detection, it offers single-player training modes and a two-player fight mode, mapping precise gestures to keyboard inputs for immersive boxing fun.",
    image: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/GESTURE/ChatGPT%20Image%20Jan%2019,%202026,%2001_53_41%20AM.png",
    videoUrl: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/GESTURE/1749388086704.mp4",
    tags: ["Python", "OpenCV", "MediaPipe", "Pynput", "PyAutoGUI"],
    techStack: [
      { name: "Python 3.12", category: "Core" },
      { name: "OpenCV 4.11", category: "Computer Vision" },
      { name: "MediaPipe 0.10", category: "AI/ML" },
      { name: "Pynput", category: "Input Simulation" },
      { name: "PyAutoGUI", category: "Automation" },
    ],
    githubUrl: "https://github.com/rohazshaik/punchers-gesture-control",
    features: [
      "Precise gesture detection for jabs and leans",
      "Left Man and Right Man training modes",
      "Two-player fight mode",
      "No extra hardware required - just a webcam",
      "Intelligent cooldown to prevent input spam",
      "High-confidence detection (0.7 threshold)",
      "Modular design for easy customization",
    ],
    highlights: [
      "Real-time pose detection at optimized frame rate",
      "MediaPipe-powered gesture recognition",
      "Zero latency keyboard input mapping",
    ],
  },
  {
    slug: "virtual-ecommerce",
    title: "Virtual E-Commerce Website",
    shortDescription: "Modern online shopping platform with 3D virtual showroom and real-time cart.",
    description: "A modern, full-featured online shopping platform built to deliver a seamless and immersive experience. It bridges the gap between luxury fashion and affordability, providing advanced features such as a 3D virtual showroom, real-time cart management, secure payments, and an intuitive admin dashboard.",
    image: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/ChatGPT%20Image%20Jan%2019,%202026,%2001_32_37%20AM.png",
    gallery: [
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/Screenshot%202026-01-19%20012720%20(1).png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/Screenshot%202026-01-19%20012720.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/Screenshot%202026-01-19%20012823.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/Screenshot%202026-01-19%20013538.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/Screenshot%202026-01-19%20013607.png",
      "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/Ecommerce/Screenshot%202026-01-19%20013820.png"
    ],
    tags: ["Next.js", "Three.js", "MongoDB", "Stripe", "Tailwind CSS"],
    techStack: [
      { name: "Next.js 14", category: "Frontend" },
      { name: "React 18", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Three.js", category: "3D" },
      { name: "React Three Fiber", category: "3D" },
      { name: "MongoDB", category: "Database" },
      { name: "Mongoose", category: "Database" },
      { name: "Zustand", category: "State" },
      { name: "Stripe", category: "Payments" },
    ],
    githubUrl: "https://github.com/rohazshaik/virtual_e-commerce_website",
    liveUrl: "https://www.runawayofficial.shop/",
    features: [
      "Intuitive product browsing and search",
      "Secure user authentication with role-based access",
      "Real-time shopping cart and checkout",
      "3D virtual product showroom",
      "Admin dashboard for product/order management",
      "Responsive design for all devices",
      "Payment gateway integration (Stripe/PayPal)",
    ],
    highlights: [
      "Interactive 3D product viewing with Three.js",
      "Persistent cart with Zustand middleware",
      "SSR/SEO optimized with Next.js",
    ],
    diagram: `flowchart TB
    subgraph Client["Client (Next.js)"]
        UI[User Interface]
        Cart[Shopping Cart]
        Showroom[3D Showroom]
        Admin[Admin Dashboard]
    end
    
    subgraph ThreeJS["3D Layer"]
        R3F[React Three Fiber]
        Models[3D Product Models]
    end
    
    subgraph State["State Management"]
        Zustand[Zustand Store]
        Local[localStorage]
    end
    
    subgraph APIRoutes["API Routes"]
        Products[Products API]
        Orders[Orders API]
        AuthAPI[Auth API]
    end
    
    subgraph External["External Services"]
        Stripe[Stripe Payments]
        MongoDB[(MongoDB)]
    end
    
    UI --> Cart --> Zustand --> Local
    Showroom --> R3F --> Models
    UI --> Products --> MongoDB
    Cart --> Orders --> MongoDB
    Cart --> Stripe
    Admin --> Products
    Admin --> Orders`,
  },
  {
    slug: "linkguard",
    title: "LinkGuard - AI Phishing Detector",
    shortDescription: "Full-stack application detecting malicious URLs using ML models and REST APIs.",
    description: "Full-stack application that detects malicious URLs using ML models trained on lexical and host-based features, with dashboards and REST APIs. Provides real-time URL analysis to protect users from phishing attacks.",
    image: "https://dgjdcfqxojogjianbwzc.supabase.co/storage/v1/object/public/DOCSPOT/PHISHING/phishing_AIM.jpg",
    demoComingSoon: true,
    tags: ["React", "Node.js", "Python", "Docker", "CI/CD"],
    techStack: [
      { name: "React.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "Python", category: "ML" },
      { name: "Scikit-learn", category: "ML" },
      { name: "Docker", category: "DevOps" },
      { name: "MongoDB", category: "Database" },
    ],
    githubUrl: "https://github.com/rohazshaik",
    features: [
      "Real-time URL analysis",
      "ML-based phishing detection",
      "Lexical feature extraction",
      "Host-based feature analysis",
      "User-friendly dashboard",
      "REST API for integration",
      "Containerized with Docker",
    ],
    highlights: [
      "Machine learning model for URL classification",
      "CI/CD pipeline integration",
      "High accuracy threat detection",
    ],
    diagram: `flowchart TB
    subgraph Input["User Input"]
        URL[Suspicious URL]
    end
    
    subgraph Frontend["Frontend (React)"]
        Dashboard[Dashboard]
        Results[Results Display]
    end
    
    subgraph Backend["Backend (Node.js)"]
        API[REST API]
        Queue[Request Queue]
    end
    
    subgraph MLPipeline["ML Pipeline (Python)"]
        Lexical[Lexical Features]
        Host[Host Features]
        Model[ML Classifier]
    end
    
    subgraph Database["Storage"]
        MongoDB[(MongoDB)]
        Cache[Result Cache]
    end
    
    URL --> Dashboard --> API --> Queue
    Queue --> Lexical
    Queue --> Host
    Lexical --> Model
    Host --> Model
    Model --> API --> Results
    API --> MongoDB
    MongoDB --> Cache --> API`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  BrainCircuit, 
  Wrench, 
  PlayCircle, 
  ArrowRight
} from 'lucide-react';

// --- 1. Central de Traducciones (i18n) ---
const translations = {
  es: {
    header: {
      inicio: "Inicio",
      proceso: "Proceso",
      metodologia: "Metodología",
      intervencion: "Intervención"
    },
    hero: {
      kicker: "PARA ESTRATEGAS/CTOS QUE REQUIEREN UNA INTERVENCIÓN DE EJECUCIÓN INMEDIATA.",
      headline: "NO soy tu Arquitecto Estratégico. SOY el Ejecutor de Élite que desbloquea tu visión.",
      subheadline: "Soy un \"Ejecutor de Élite\" y \"Especialista en .NET Core y React\". No vendo consultoría, vendo un rescate de ejecución. Desbloqueo proyectos complejos, transformando su deuda técnica en un activo funcional.",
      ctaPrimary: "Ver mi Proceso de Intervención",
      ctaSecondary: "Inspeccionar Metodología"
    },
    solution: {
      title: "Mi Proceso de Intervención (El Modelo)",
      step1Title: "Paso 1: El Sprint de Desarme Técnico",
      step1Desc: "Una intervención de alto valor y precio fijo enfocada en el \"valor del desbloqueo, no en horas facturables\". Es la \"prueba de ejecución pagada\" definitiva, diseñada para resolver un bloqueo crítico que \"cuesta a su negocio más que el precio del Sprint\". Este paso es el filtro de entrada universal.",
      step1Deliverables: ["Prototipo funcional", "Código limpio", "Plan de ejecución"],
      step1Price: "Precio Fijo: 10.000€",
      step1FaqCta: "(¿Dudas sobre el alcance o la facturación del Sprint?)",
      step2Title: "Paso 2: El Retainer de Escalabilidad (Disponible solo Post-Sprint)",
      step2Desc: "El Sprint de Desarme valida nuestra ejecución. El siguiente paso no es crear dependencia, es construir su autonomía. Tras el éxito del Sprint, ofreco un camino principal para escalar su equipo y una opción de nicho para ejecución continua.",
      cardA_Title: "Opción Principal: Retainer de Sistema",
      cardA_Audience: "RECOMENDADO: CTOs que buscan escalar su equipo interno.",
      cardA_Desc: "Esta es la opción estratégica. No le vendo mis manos, le entrego mi cerebro. Integro mi \"Playbook de Ejecución\" en su equipo, mentorizándolos para que operen con la misma eficiencia. Es un activo invaluable que escala a su gente.",
      cardA_Price: "Desde 8.000€ / mes",
      cardB_Title: "Opción de Nicho: Retainer de Ejecución",
      cardB_Audience: "NICHO: Startups que carecen de equipo interno y necesitan velocidad de ejecución pura.",
      cardB_Desc: "Esta es una solución de nicho explícita. Si no tiene un equipo que escalar, puede retener mis \"Manos de Élite\" para ejecución rápida. Esto es acceso directo, no escalabilidad de equipo. El precio refleja el coste de reservar mi tiempo de ejecución personal, impidiéndome tomar otros Sprints.",
      cardB_Price: "Desde 12.000€ / mes"
    },
    proof: {
      title: "Metodología Comprobada: Código y Casos de Estudio",
      desc: "No es teórico. Conecto la ejecución de élite (Código) con resultados tangibles (Casos de Estudio). Esta es la Prueba de Impacto.",
      case1_Title: "RESULTADO: Plataforma E-commerce \"Industry-First\" (+ $500K ARR)",
      case1_Desc: "Desarrollé \"single-handedly\" SwagUp Shops, una plataforma .NET Core y React que los competidores no pudieron replicar.",
      case1_Stack: "[.NET Core] [React.js] [AWS] [Terraform]",
      case2_Title: "RESULTADO: Automatización de Flujos de Trabajo (Zapier/Shopify)",
      case2_Desc: "Desarrollé y mantuve múltiples integraciones 3rd-party (Zapier, Shopify) y el sistema \"Redeem Pages\", automatizando procesos operativos complejos.",
      case2_Stack: "[.NET Web Service] [Microservicios] [React.js]",
      videoCtaTitle: "Prueba de Ejecución",
      videoCtaSubtitle: "Ver Demo de Código Privado (5 min)"
    },
    diagnosis: {
      title: "¿Cuál es su bloqueo?",
      desc: "Un diagnóstico preciso precede a una intervención exitosa. Estos análisis técnicos están diseñados para ayudarle a identificar la raíz de un bloqueo de ejecución. Utilícelos como herramientas de diagnóstico para evaluar la salud de sus sistemas y la naturaleza de su desafío actual.",
      article1_Label: "DIAGNÓSTICO TÉCNICO",
      article1_Title: "3 Señales de que su API de Microservicios está fallando (Y se Convierte en un Monolito Distribuido)",
      article1_Desc: "Un análisis profundo de la deuda técnica común y el \"Puente Explícito\" a la metodología del \"Sprint de Desarme\" usada para resolverlo.",
      article2_Label: "CASO DE ESTUDIO",
      article2_Title: "El Coste Oculto de la \"Deuda Técnica\" en Startups (Y Cómo un Sprint la Desbloquea)",
      article2_Desc: "Análisis financiero y de ejecución sobre por qué la \"deuda\" no es solo un problema de código, es un problema de ARR.",
      article3_Label: "METODOLOGÍA",
      article3_Title: "¿\"Playbook\" vs \"Manos de Élite\"? Cuándo Escalar su Equipo vs. Cuándo Contratar Ejecución",
      article3_Desc: "Un framework de decisión para CTOs sobre cómo y cuándo usar \"Retainers\" de ejecución versus \"Retainers\" de sistema.",
      articleCta: "Leer Diagnóstico",
      
      // --- NUEVO: Contenido del Artículo 1 ---
      article1_content: {
        title: "3 Señales de que su API de Microservicios está Fallando (Y se Convierte en un Monolito Distribuido)",
        label: "DIAGNÓSTICO TÉCNICO",
        intro: [
          "Ha invertido en una arquitectura de microservicios buscando agilidad, escalabilidad e independencia. Sin embargo, su equipo de desarrollo se mueve más lento que nunca y los fallos son cada vez más difíciles de rastrear.",
          "Es probable que no tenga un problema de microservicios; tiene un \"monolito distribuido\". Es el peor de los mundos: la complejidad de una arquitectura distribuida con el acoplamiento rígido de un monolito.",
          "Estas son las 3 señales de que su API está fallando y necesita una intervención:"
        ],
        points: [
          {
            title: "1. Latencia en Cascada (El \"Efecto Dominó\")",
            symptom: "Una simple solicitud de usuario (ej. \"ver perfil\") desencadena una cadena de llamadas síncronas a través de múltiples servicios (Servicio A llama a B, B llama a C...). Si el Servicio C es lento, toda la cadena se paraliza.",
            diagnosis: "Sus servicios están fuertemente acoplados temporalmente. En lugar de comunicarse de forma asíncrona (ej. a través de colas de mensajes como RabbitMQ), operan como una sola unidad de ejecución. Está experimentando la latencia combinada de todos sus servicios en cada llamada."
          },
          {
            title: "2. Acoplamiento de Datos (El \"Servicio Sabelotodo\")",
            symptom: "No puede actualizar el Servicio A (ej. \"Usuarios\") sin romper el Servicio B (ej. \"Pedidos\"), porque \"Pedidos\" accede directamente a la base de datos de \"Usuarios\" para obtener información.",
            diagnosis: "Sus servicios no son autónomos. La regla de oro de los microservicios —cada servicio posee sus propios datos— se ha roto. Esto elimina la independencia del despliegue y convierte una simple actualización de esquema en una pesadilla de coordinación entre equipos."
          },
          {
            title: "3. Fallos en Cascada (El \"Punto Único de Fallo\")",
            symptom: "Un error trivial en un servicio no esencial (ej. el \"Servicio de Avatares\") provoca que servicios críticos (ej. \"Autenticación\") fallen.",
            diagnosis: "Carece de patrones de resiliencia básicos como \"Circuit Breakers\". Sus servicios no están diseñados para manejar el fallo de sus dependencias, provocando que un pequeño error se propague por toda la arquitectura y derribe el sistema completo."
          }
        ],
        intervention: [
          "Identificar estos patrones es el diagnóstico. La solución es un desbloqueo quirúrgico. No necesita una \"re-arquitectura\" de 12 meses; necesita una intervención táctica. El \"Sprint de Desarme Técnico\" está diseñado para identificar el acoplamiento más crítico en su sistema, refactorizarlo usando patrones probados (ej. comunicación asíncrona, aislamiento de datos) y entregar un prototipo funcional que devuelva la autonomía a sus equipos.",
          "Estos problemas de arquitectura parecen masivos, pero su desbloqueo no lo es. El error más común es intentar hervir el océano. El Sprint de Desarme no resuelve toda su arquitectura; ataca el bloqueo más costoso. Aislamos un fallo en cascada o refactorizamos un acoplamiento crítico, entregando un “Playbook de Ejecución” y un prototipo funcional que su equipo puede usar para replicar la solución en el resto del sistema."
        ],
        close: "Cerrar Diagnóstico",
        // --- SUTURA FINAL ---
        symptomLabel: "El Síntoma:",
        diagnosisLabel: "El Diagnóstico:",
        interventionTitle: "La Intervención"
      },
      // Placeholder para otros artículos
      article2_content: {
        title: "El Coste Oculto de la \"Deuda Técnica\" en Startups (Y Cómo un Sprint la Desbloquea)",
        label: "CASO DE ESTUDIO",
        intro: ["Contenido del artículo 2 próximamente..."],
        points: [],
        intervention: [],
        close: "Cerrar Diagnóstico",
        symptomLabel: "El Síntoma:",
        diagnosisLabel: "El Diagnóstico:",
        interventionTitle: "La Intervención"
      },
      article3_content: {
        title: "¿\"Playbook\" vs \"Manos de Élite\"? Cuándo Escalar su Equipo vs. Cuándo Contratar Ejecución",
        label: "METODOLOGÍA",
        intro: ["Contenido del artículo 3 próximamente..."],
        points: [],
        intervention: [],
        close: "Cerrar Diagnóstico",
        symptomLabel: "El Síntoma:",
        diagnosisLabel: "El Diagnóstico:",
        interventionTitle: "La Intervención"
      }
    },
    intervention: {
      title: "Inicie la Intervención",
      desc: "Este formulario es el filtro final de auto-calificación. Si ha validado mi Prueba (Sección 4) y acepta el \"Sprint de Desarme Técnico\" (10.000€) como el punto de entrada universal, describa su bloqueo. Esto no es una solicitud de consultoría, es el inicio de la intervención.",
      formEmail: "Su Email (Para el diagnóstico)",
      formRole: "Su Rol (Ej. CTO, VP Engineering)",
      formStack: "Stack Tecnológico Involucrado (Ej. .NET, AWS, MERN)",
      formBlocker: "El Bloqueo (Describa el problema técnico)",
      formCtaPrimary: "Solicitar Intervención",
      formCtaSecondary: "(¿Pregunta rápida de logística/alcance antes de la intervención?)"
    },
    footer: {
      poweredBy: "Potenciado por EurekaGC",
      line1: "Enrike Hernández, Co-Fundador de EurekaGC, opera como el \"Ejecutor de Élite\" principal para intervenciones de \"Sprint de Desarme\".",
      linkLinkedIn: "LinkedIn",
      linkGitHub: "GitHub",
      copyright: "© {year} EurekaGC. Todos los derechos reservados."
    },
    faqModal: {
      title: "Preguntas Frecuentes (Logística y Alcance)",
      q1: "¿Quién emite la factura? ¿Enrike o EurekaGC?",
      a1: "EurekaGC gestiona toda la facturación. Recibirá una factura profesional de EurekaGC, la entidad legal que respalda la intervención.",
      q2: "¿El precio del Sprint de 10.000€ es fijo? ¿Qué incluye?",
      a2: "Es un precio fijo de alto valor, no una tarifa por hora. Incluye 5 días de ejecución de élite enfocados en su bloqueo principal, resultando en un prototipo funcional, código limpio y un plan de ejecución.",
      q3: "¿Qué pasa si mi problema no se resuelve en el Sprint de 5 días?",
      a3: "El objetivo del Sprint no es resolver toda su deuda técnica, sino desbloquear su problema más crítico. En 5 días, entregamos el \"Playbook de Ejecución\" y el prototipo funcional que su equipo necesita para escalar la solución. El valor está en el desbloqueo y la transferencia de conocimiento.",
      q4: "¿Por qué no puedo contratar el \"Retainer\" (Opción Principal) directamente?",
      a4: "El Sprint es el filtro de entrada universal. Es la \"prueba de ejecución pagada\" definitiva. Valida nuestra metodología y asegura que somos la solución correcta antes de comprometernos a una asociación a largo plazo (Retainer). No vendo promesas, vendo pruebas.",
      close: "Cerrar"
    },
    videoModal: {
      title: "Demo de Video Privado"
    }
  },
  en: {
    header: {
      inicio: "Home",
      proceso: "Process",
      metodologia: "Methodology",
      intervencion: "Intervention"
    },
    hero: {
      kicker: "FOR STRATEGISTS/CTOS REQUIRING IMMEDIATE EXECUTION INTERVENTION.",
      headline: "I am NOT your Strategic Architect. I AM the Elite Executor who unlocks your vision.",
      subheadline: "I am an \"Elite Executor\" and a \".NET Core & React Specialist\". I don't sell consulting; I sell an execution rescue. I unblock complex projects, transforming technical debt into a functional asset.",
      ctaPrimary: "View my Intervention Process",
      ctaSecondary: "Inspect Methodology"
    },
    solution: {
      title: "My Intervention Process (The Model)",
      step1Title: "Step 1: The Technical Unblocking Sprint",
      step1Desc: "A high-value, fixed-price intervention focused on the \"value of the unblock, not billable hours\". It is the ultimate \"paid execution test,\" designed to solve a critical blocker that \"costs your business more than the price of the Sprint\". This step is the universal entry filter.",
      step1Deliverables: ["Functional prototype", "Clean code", "Execution plan"],
      step1Price: "Fixed Price: €10,000",
      step1FaqCta: "(Questions about Sprint scope or billing?)",
      step2Title: "Step 2: The Scalability Retainer (Available Post-Sprint Only)",
      step2Desc: "The Unblocking Sprint validates our execution. The next step isn't to create dependency; it's to build your autonomy. After a successful Sprint, I offer a primary path to scale your team and a niche option for continuous execution.",
      cardA_Title: "Main Option: System Retainer",
      cardA_Audience: "RECOMMENDED: CTOs looking to scale their internal team.",
      cardA_Desc: "This is the strategic option. I don't sell you my hands; I deliver my brain. I integrate my \"Execution Playbook\" into your team, mentoring them to operate with the same efficiency. It's an invaluable asset that scales your people.",
      cardA_Price: "From €8,000 / month",
      cardB_Title: "Niche Option: Execution Retainer",
      cardB_Audience: "NICHE: Startups lacking an internal team needing pure execution speed.",
      cardB_Desc: "This is an explicit niche solution. If you have no team to scale, you can retain my \"Elite Hands\" for rapid execution. This is direct access, not team scalability. The price reflects the cost of reserving my personal execution time, preventing me from taking other Sprints.",
      cardB_Price: "From €12,000 / month"
    },
    proof: {
      title: "Proven Methodology: Code and Case Studies",
      desc: "This isn't theoretical. I connect elite execution (Code) with tangible results (Case Studies). This is the Impact Proof.",
      case1_Title: "RESULT: \"Industry-First\" E-commerce Platform (+ $500K ARR)",
      case1_Desc: "I \"single-handedly\" developed SwagUp Shops, a .NET Core and React platform that competitors could not replicate.",
      case1_Stack: "[.NET Core] [React.js] [AWS] [Terraform]",
      case2_Title: "RESULT: Workflow Automation (Zapier/Shopify)",
      case2_Desc: "I developed and maintained multiple 3rd-party integrations (Zapier, Shopify) and the \"Redeem Pages\" system, automating complex operational processes.",
      case2_Stack: "[.NET Web Service] [Microservices] [React.js]",
      videoCtaTitle: "Execution Proof",
      videoCtaSubtitle: "Watch Private Code Demo (5 min)"
    },
    diagnosis: {
      title: "What is your blocker?",
      desc: "An accurate diagnosis precedes a successful intervention. These technical analyses are designed to help you identify the root of an execution blocker. Use them as diagnostic tools to assess the health of your systems and the nature of your current challenge.",
      article1_Label: "TECHNICAL DIAGNOSIS",
      article1_Title: "3 Signs Your Microservice API is Failing (And Becoming a Distributed Monolith)",
      article1_Desc: "A deep dive into common technical debt and the \"Explicit Bridge\" to the \"Unblocking Sprint\" methodology used to solve it.",
      article2_Label: "CASE STUDY",
      article2_Title: "The Hidden Cost of \"Technical Debt\" in Startups (And How a Sprint Unlocks It)",
      article2_Desc: "A financial and execution analysis on why \"debt\" is not just a code problem, it's an ARR problem.",
      article3_Label: "METHODOLOGY",
      article3_Title: "\"Playbook\" vs. \"Elite Hands\"? When to Scale Your Team vs. When to Hire Execution",
      article3_Desc: "A decision framework for CTOs on how and when to use execution \"Retainers\" versus system \"Retainers\".",
      articleCta: "Read Diagnosis",

      // --- NEW: Article 1 Content (EN) ---
      article1_content: {
        title: "3 Signs Your Microservice API is Failing (And Becoming a Distributed Monolith)",
        label: "TECHNICAL DIAGNOSIS",
        intro: [
          "You invested in a microservice architecture seeking agility, scalability, and independence. However, your development team moves slower than ever, and failures are increasingly difficult to track.",
          "You likely don't have a microservice problem; you have a \"distributed monolith\". It's the worst of both worlds: the complexity of a distributed architecture with the rigid coupling of a monolith.",
          "These are the 3 signs your API is failing and needs an intervention:"
        ],
        points: [
          {
            title: "1. Cascading Latency (The \"Domino Effect\")",
            symptom: "A simple user request (e.g., \"view profile\") triggers a chain of synchronous calls across multiple services (Service A calls B, B calls C...). If Service C is slow, the entire chain halts.",
            diagnosis: "Your services are tightly coupled temporally. Instead of communicating asynchronously (e.g., via message queues like RabbitMQ), they operate as a single execution unit. You are experiencing the combined latency of all your services on every call."
          },
          {
            title: "2. Data Coupling (The \"Know-It-All Service\")",
            symptom: "You cannot update Service A (e.g., \"Users\") without breaking Service B (e.g., \"Orders\"), because \"Orders\" directly accesses the \"Users\" database for information.",
            diagnosis: "Your services are not autonomous. The golden rule of microservices—each service owns its own data—has been broken. This eliminates deployment independence and turns a simple schema update into a cross-team coordination nightmare."
          },
          {
            title: "3. Cascading Failures (The \"Single Point of Failure\")",
            symptom: "A trivial error in a non-essential service (e.g., the \"Avatar Service\") causes critical services (e.g., \"Authentication\") to fail.",
            diagnosis: "You lack basic resilience patterns like \"Circuit Breakers\". Your services are not designed to handle the failure of their dependencies, causing a small error to propagate through the entire architecture and bring down the whole system."
          }
        ],
        intervention: [
          "Identifying these patterns is the diagnosis. The solution is a surgical unblocking. You don't need a 12-month \"re-architecture\"; you need a tactical intervention. The \"Technical Unblocking Sprint\" is designed to identify the most critical coupling in your system, refactor it using proven patterns (e.g., asynchronous communication, data isolation), and deliver a functional prototype that returns autonomy to your teams.",
          "These architectural problems seem massive, but their unblocking is not. The most common error is trying to boil the ocean. The Unblocking Sprint doesn't solve your entire architecture; it attacks the most expensive blocker. We isolate a cascading failure or refactor a critical coupling, delivering an “Execution Playbook” and a functional prototype your team can use to replicate the solution across the rest of the system."
        ],
        close: "Close Diagnosis",
        // --- SUTURA FINAL ---
        symptomLabel: "The Symptom:",
        diagnosisLabel: "The Diagnosis:",
        interventionTitle: "The Intervention"
      },
      // Placeholder for other articles
      article2_content: {
        title: "The Hidden Cost of \"Technical Debt\" in Startups (And How a Sprint Unlocks It)",
        label: "CASE STUDY",
        intro: ["Article 2 content coming soon..."],
        points: [],
        intervention: [],
        close: "Close Diagnosis",
        symptomLabel: "The Symptom:",
        diagnosisLabel: "The Diagnosis:",
        interventionTitle: "The Intervention"
      },
      article3_content: {
        title: "\"Playbook\" vs. \"Elite Hands\"? When to Scale Your Team vs. When to Hire Execution",
        label: "METHODOLOGY",
        intro: ["Article 3 content coming soon..."],
        points: [],
        intervention: [],
        close: "Close Diagnosis",
        symptomLabel: "The Symptom:",
        diagnosisLabel: "The Diagnosis:",
        interventionTitle: "The Intervention"
      }
    },
    intervention: {
      title: "Initiate Intervention",
      desc: "This form is the final self-qualification filter. If you have validated my Proof (Section 4) and accept the \"Technical Unblocking Sprint\" (€10,000) as the universal entry point, describe your blocker. This is not a request for consulting; it is the start of the intervention.",
      formEmail: "Your Email (For the diagnosis)",
      formRole: "Your Role (e.g., CTO, VP Engineering)",
      formStack: "Tech Stack Involved (e.g., .NET, AWS, MERN)",
      formBlocker: "The Blocker (Describe the technical problem)",
      formCtaPrimary: "Request Intervention",
      formCtaSecondary: "(Quick logistics/scope question before intervening?)"
    },
    footer: {
      poweredBy: "Powered by EurekaGC",
      line1: "Enrike Hernández, Co-Founder of EurekaGC, operates as the primary \"Elite Executor\" for \"Unblocking Sprint\" interventions.",
      linkLinkedIn: "LinkedIn",
      linkGitHub: "GitHub",
      copyright: "© {year} EurekaGC. All rights reserved."
    },
    faqModal: {
      title: "Frequently Asked Questions (Logistics & Scope)",
      q1: "Who issues the invoice? Enrike or EurekaGC?",
      a1: "EurekaGC handles all billing. You will receive a professional invoice from EurekaGC, the legal entity backing the intervention.",
      q2: "Is the €10,000 Sprint price fixed? What does it include?",
      a2: "It is a high-value fixed price, not an hourly rate. It includes 5 days of elite execution focused on your primary blocker, resulting in a functional prototype, clean code, and an execution plan.",
q3: "What if my problem isn't solved in the 5-day Sprint?",
      a3: "The goal of the Sprint is not to solve all your technical debt, but to unblock your most critical problem. In 5 days, we deliver the \"Execution Playbook\" and the functional prototype your team needs to scale the solution. The value is in the unblocking and knowledge transfer.",
      q4: "Why can't I hire the \"Retainer\" (Main Option) directly?",
      a4: "The Sprint is the universal entry filter. It is the ultimate \"paid execution test\". It validates our methodology and ensures we are the right solution before committing to a long-term (Retainer) partnership. I don't sell promises, I sell proof.",
      close: "Close"
    },
    videoModal: {
      title: "Private Video Demo"
    }
  },
  pt: {
    header: {
      inicio: "Início",
      proceso: "Processo",
      metodologia: "Metodologia",
      intervencion: "Intervenção"
    },
    hero: {
      kicker: "PARA ESTRATEGISTAS/CTOS QUE REQUEREM UMA INTERVENÇÃO DE EXECUÇÃO IMEDIATA.",
      headline: "NÃO sou seu Arquiteto Estratégico. SOU o Executor de Elite que desbloqueia sua visão.",
      subheadline: "Sou um \"Executor de Elite\" e \"Especialista em .NET Core e React\". Não vendo consultoria, vendo um resgate de execution. Desbloqueio projetos complexos, transformando sua dívida técnica em um ativo funcional.",
      ctaPrimary: "Ver meu Processo de Intervenção",
      ctaSecondary: "Inspecionar Metodologia"
    },
    solution: {
      title: "Meu Processo de Intervenção (O Modelo)",
      step1Title: "Passo 1: O Sprint de Desbloqueio Técnico",
      step1Desc: "Uma intervenção de alto valor e preço fixo focada no \"valor do desbloqueio, não em horas faturáveis\". É o \"teste de execução pago\" definitivo, projetado para resolver um bloqueio crítico que \"custa ao seu negócio mais do que o preço do Sprint\". Este passo é o filtro de entrada universal.",
      step1Deliverables: ["Protótipo funcional", "Código limpo", "Plano de execução"],
      step1Price: "Preço Fixo: 10.000€",
      step1FaqCta: "(Dúvidas sobre o escopo ou faturação do Sprint?)",
      step2Title: "Passo 2: O Retainer de Escalabilidade (Disponível apenas Pós-Sprint)",
      step2Desc: "O Sprint de Desbloqueio valida nossa execução. O próximo passo não é criar dependência, é construir sua autonomia. Após o sucesso do Sprint, ofereço um caminho principal para escalar sua equipe e uma opção de nicho para execução contínua.",
      cardA_Title: "Opção Principal: Retainer de Sistema",
      cardA_Audience: "RECOMENDADO: CTOs que procuram escalar sua equipe interna.",
      cardA_Desc: "Esta é a opção estratégica. Não vendo minhas mãos, entrego meu cérebro. Integro meu \"Playbook de Execução\" em sua equipe, mentorando-os para operar com a mesma eficiência. É um ativo inestimável que escala seu pessoal.",
      cardA_Price: "A partir de 8.000€ / mês",
      cardB_Title: "Opção de Nicho: Retainer de Execução",
      cardB_Audience: "NICHO: Startups sem equipe interna que precisam de pura velocidade de execução.",
      cardB_Desc: "Esta é uma solução de nicho explícita. Se você não tem uma equipe para escalar, pode reter minhas \"Mãos de Elite\" para execução rápida. Isso é acesso direto, não escalabilidade de equipe. O preço reflete o custo de reservar meu tempo de execução pessoal, impedindo-me de aceitar outros Sprints.",
      cardB_Price: "A partir de 12.000€ / mês"
    },
    proof: {
      title: "Metodologia Comprovada: Código e Estudos de Caso",
      desc: "Não é teórico. Conecto a execução de elite (Código) com resultados tangíveis (Estudos de Caso). Esta é a Prova de Impacto.",
      case1_Title: "RESULTADO: Plataforma E-commerce \"Industry-First\" (+ $500K ARR)",
      case1_Desc: "Desenvolvi \"single-handedly\" o SwagUp Shops, uma plataforma .NET Core e React que os concorrentes não conseguiram replicar.",
      case1_Stack: "[.NET Core] [React.js] [AWS] [Terraform]",
      case2_Title: "RESULTADO: Automação de Fluxos de Trabalho (Zapier/Shopify)",
      case2_Desc: "Desenvolvi e mantive múltiplas integrações de terceiros (Zapier, Shopify) e o sistema \"Redeem Pages\", automatizando processos operacionais complexos.",
      case2_Stack: "[.NET Web Service] [Microsserviços] [React.js]",
      videoCtaTitle: "Prova de Execução",
      videoCtaSubtitle: "Ver Demo de Código Privado (5 min)"
    },
    diagnosis: {
      title: "Qual é o seu bloqueio?",
      desc: "Um diagnóstico preciso precede uma intervenção bem-sucedida. Estas análises técnicas são projetadas para ajudá-lo a identificar a raiz de um bloqueio de execução. Use-as como ferramentas de diagnóstico para avaliar a saúde de seus sistemas e a natureza de seu desafio atual.",
      article1_Label: "DIAGNÓSTICO TÉCNICO",
      article1_Title: "3 Sinais de que sua API de Microsserviços está Falhando (E se Tornando um Monólito Distribuído)",
      article1_Desc: "Um mergulho profundo na dívida técnica comum e a \"Ponte Explícita\" para a metodologia do \"Sprint de Desbloqueio\" usada para resolvê-la.",
      article2_Label: "ESTUDO DE CASO",
      article2_Title: "O Custo Oculto da \"Dívida Técnica\" em Startups (E Como um Sprint a Desbloqueia)",
      article2_Desc: "Uma análise financeira e de execução sobre por que a \"dívida\" não é apenas um problema de código, é um problema de ARR.",
      article3_Label: "METODOLOGIA",
      article3_Title: "\"Playbook\" vs. \"Mãos de Elite\"? Quando Escalar sua Equipe vs. Quando Contratar Execução",
      article3_Desc: "Um framework de decisão para CTOs sobre como e quando usar \"Retainers\" de execução versus \"Retainers\" de sistema.",
      articleCta: "Ler Diagnóstico",
      
      // --- NEW: Article 1 Content (PT) ---
      article1_content: {
        title: "3 Sinais de que sua API de Microsserviços está Falhando (E se Tornando um Monólito Distribuído)",
        label: "DIAGNÓSTICO TÉCNICO",
        intro: [
          "Você investiu em uma arquitetura de microsserviços buscando agilidade, escalabilidade e independência. No entanto, sua equipe de desenvolvimento está mais lenta do que nunca e as falhas são cada vez mais difíceis de rastrear.",
          "Provavelmente, você não tem um problema de microsserviços; você tem um \"monólito distribuído\". É o pior dos mundos: a complexidade de uma arquitetura distribuída com o acoplamento rígido de um monólito.",
          "Estes são os 3 sinais de que sua API está falhando e precisa de uma intervenção:"
        ],
        points: [
          {
            title: "1. Latência em Cascata (O \"Efeito Dominó\")",
            symptom: "Uma simples solicitação do usuário (ex: \"ver perfil\") dispara uma cadeia de chamadas síncronas através de múltiplos serviços (Serviço A chama B, B chama C...). Se o Serviço C estiver lento, toda a cadeia paralisa.",
            diagnosis: "Seus serviços estão fortemente acoplados temporalmente. Em vez de se comunicarem de forma assíncrona (ex: através de filas de mensagens como RabbitMQ), eles operam como uma única unidade de execução. Você está experienciando a latência combinada de todos os seus serviços em cada chamada."
          },
          {
            title: "2. Acoplamento de Dados (O \"Serviço Sabe-Tudo\")",
            symptom: "Você não pode atualizar o Serviço A (ex: \"Usuários\") sem quebrar o Serviço B (ex: \"Pedidos\"), porque \"Pedidos\" acessa diretamente o banco de dados de \"Usuários\" para obter informações.",
            diagnosis: "Seus serviços não são autônomos. A regra de ouro dos microsserviços —cada serviço possui seus próprios dados— foi quebrada. Isso elimina a independência de implantação e transforma uma simples atualização de esquema em um pesadelo de coordenação entre equipes."
          },
          {
            title: "3. Falhas em Cascata (O \"Ponto Único de Falha\")",
            symptom: "Um erro trivial em um serviço não essencial (ex: o \"Serviço de Avatares\") faz com que serviços críticos (ex: \"Autenticação\") falhem.",
            diagnosis: "Você carece de padrões básicos de resiliência como \"Circuit Breakers\". Seus serviços não são projetados para lidar com a falha de suas dependências, fazendo com que um pequeno erro se propague por toda a arquitetura e derrube o sistema completo."
          }
        ],
        intervention: [
          "Identificar esses padrões é o diagnóstico. A solução é um desbloqueio cirúrgico. Você não precisa de uma \"rearquitetura\" de 12 meses; você precisa de uma intervenção tática. O \"Sprint de Desarme Técnico\" é projetado para identificar o acoplamento mais crítico em seu sistema, refatorá-lo usando padrões comprovados (ex: comunicação assíncrona, isolamento de dados) e entregar um protótipo funcional que devolva a autonomia às suas equipes.",
          "Esses problemas de arquitetura parecem massivos, mas seu desbloqueio não é. O erro mais comum é tentar ferver o oceano. O Sprint de Desarme não resolve toda a sua arquitetura; ele ataca o bloqueador mais custoso. Isolamos uma falha em cascata ou refatoramos um acoplamento crítico, entregando um “Playbook de Execução” e um protótipo funcional que sua equipe pode usar para replicar a solução no resto do sistema."
        ],
        close: "Fechar Diagnóstico",
        // --- SUTURA FINAL ---
        symptomLabel: "O Sintoma:",
        diagnosisLabel: "O Diagnóstico:",
        interventionTitle: "A Intervenção"
      },
      // Placeholder for other articles
      article2_content: {
        title: "O Custo Oculto da \"Dívida Técnica\" em Startups (E Como um Sprint a Desbloqueia)",
        label: "ESTUDO DE CASO",
        intro: ["Conteúdo do artigo 2 em breve..."],
        points: [],
        intervention: [],
        close: "Fechar Diagnóstico",
        symptomLabel: "O Sintoma:",
        diagnosisLabel: "O Diagnóstico:",
        interventionTitle: "A Intervenção"
      },
      article3_content: {
        title: "\"Playbook\" vs. \"Mãos de Elite\"? Quando Escalar sua Equipe vs. Quando Contratar Execução",
        label: "METODOLOGIA",
        intro: ["Conteúdo do artigo 3 em breve..."],
        points: [],
        intervention: [],
        close: "Fechar Diagnóstico",
        symptomLabel: "O Sintoma:",
        diagnosisLabel: "O Diagnóstico:",
        interventionTitle: "A Intervenção"
      }
    },
    intervention: {
      title: "Iniciar Intervenção",
      desc: "Este formulário é o filtro final de autoqualificação. Se você validou minha Prova (Seção 4) e aceita o \"Sprint de Desbloqueio Técnico\" (10.000€) como o ponto de entrada universal, descreva seu bloqueio. Isto não é um pedido de consultoria; é o início da intervenção.",
      formEmail: "Seu Email (Para o diagnóstico)",
      formRole: "Sua Função (ex: CTO, VP de Engenharia)",
      formStack: "Stack Tecnológico Envolvido (ex: .NET, AWS, MERN)",
      formBlocker: "O Bloqueio (Descreva o problema técnico)",
      formCtaPrimary: "Solicitar Intervenção",
      formCtaSecondary: "(Pergunta rápida de logística/escopo antes da intervenção?)"
    },
    footer: {
      poweredBy: "Powered by EurekaGC",
      line1: "Enrike Hernández, Co-Fundador da EurekaGC, opera como o principal \"Executor de Elite\" para intervenções de \"Sprint de Desbloqueio\".",
      linkLinkedIn: "LinkedIn",
      linkGitHub: "GitHub",
      copyright: "© {year} EurekaGC. Todos os direitos reservados."
    },
    faqModal: {
      title: "Perguntas Frequentes (Logística e Escopo)",
      q1: "Quem emite a fatura? Enrike ou EurekaGC?",
      a1: "A EurekaGC gere toda a faturação. Você receberá uma fatura profissional da EurekaGC, a entidade legal que apoia a intervenção.",
      q2: "O preço do Sprint de 10.000€ é fixo? O que inclui?",
      a2: "É um preço fixo de alto valor, não uma taxa horária. Inclui 5 dias de execução de elite focados no seu bloqueador principal, resultando em um protótipo funcional, código limpo e um plano de execução.",
      q3: "E se o meu problema não for resolvido no Sprint de 5 dias?",
      a3: "O objetivo do Sprint não é resolver toda a sua dívida técnica, mas desbloquear seu problema mais crítico. Em 5 dias, entregamos o \"Playbook de Execução\" e o protótipo funcional que sua equipe precisa para escalar a solução. O valor está no desbloqueio e na transferência de conhecimento.",
      q4: "Por que não posso contratar o \"Retainer\" (Opção Principal) diretamente?",
      a4: "O Sprint é o filtro de entrada universal. É o \"teste de execução pago\" definitivo. Ele valida nossa metodologia e garante que somos a solução correta antes de nos comprometermos a uma parceria de longo prazo (Retainer). Eu não vendo promessas, vendo provas.",
      close: "Fechar"
    },
    videoModal: {
      title: "Demo de Vídeo Privado"
    }
  }
};


// --- 2. Configuración del Contexto de Idioma ---
const LanguageContext = createContext();
const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' como predeterminado
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};


// --- Variantes de Animación Globales ---
// Variante para secciones (Fade-in-up sutil)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

// --- Componente: Selector de Idioma ---
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const languages = ['es', 'en', 'pt'];

  return (
    <div className="flex space-x-4">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`font-['Roboto_Mono'] text-xs uppercase tracking-wider transition-colors duration-150 ease-in-out ${
            language === lang
              ? 'font-bold text-gray-900'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};


// --- Componente: Header (Sección 1) ---
const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage(); // <--- USA EL HOOK

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', name: t.header.inicio },
    { id: 'proceso', name: t.header.proceso },
    { id: 'metodologia', name: t.header.metodologia },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // Retraso de 350ms, 50ms después de que el Hero (300ms) comience
      transition={{ duration: 0.5, delay: 0.35 }}
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- Selector de Idioma (Izquierda) --- */}
          <LanguageSwitcher />

          {/* --- Navegación (Derecha) --- */}
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-150 ease-in-out font-['Inter'] ${
                  activeSection === link.id
                    ? 'text-[#007BFF]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name} {/* <--- USA TEXTO DE i18n */}
              </a>
            ))}
            <a
              href="#intervencion"
              className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none font-['Inter'] ${
                activeSection === 'intervencion'
                  ? 'ring-2 ring-offset-2 ring-blue-500'
                  : 'focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              {t.header.intervencion} {/* <--- USA TEXTO DE i18n */}
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

// --- Componente: Hero (Sección 2) ---
const Hero = () => {
  const { t } = useLanguage(); // <--- USA EL HOOK

  // Variantes para la coreografía "stagger"
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 150ms entre cada elemento
        delayChildren: 0.3,  // 300ms de retraso para esperar fuentes
      },
    },
  };

  // Variantes para cada elemento hijo
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="bg-white pt-24 pb-32 sm:pt-32 sm:pb-40">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Se anima una vez cuando entra en la vista
        variants={containerVariants}
      >
        <motion.p
          className="font-['Roboto_Mono'] text-sm font-medium text-gray-500 tracking-wide uppercase"
          variants={itemVariants}
        >
          {t.hero.kicker} {/* <--- USA TEXTO DE i18n */}
        </motion.p>
        <motion.h1
          className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-['Inter']"
          variants={itemVariants}
        >
          {t.hero.headline} {/* <--- USA TEXTO DE i18n */}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg leading-8 text-gray-700 font-['Inter']"
          variants={itemVariants}
        >
          {t.hero.subheadline} {/* <--- USA TEXTO DE i18n */}
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center space-x-6"
          variants={itemVariants}
        >
          <a
            href="#proceso"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter']"
          >
            {t.hero.ctaPrimary} {/* <--- USA TEXTO DE i18n */}
          </a>
          <a
            href="#metodologia"
            className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 ease-in-out font-['Inter'] group"
          >
            {t.hero.ctaSecondary} <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1" aria-hidden="true">&rarr;</span> {/* <--- USA TEXTO DE i18n */}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Componente: Solución (Sección 3) ---
const Solution = ({ onFaqOpen }) => {
  const { t } = useLanguage(); // <--- USA EL HOOK

  return (
    <motion.section
      id="proceso"
      className="bg-gray-50 py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Se anima cuando el 30% es visible
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-['Inter']">
            {t.solution.title} {/* <--- USA TEXTO DE i18n */}
          </h2>
        </div>

        {/* PASO 1: EL FILTRO */}
        <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 font-['Inter']">
            {t.solution.step1Title} {/* <--- USA TEXTO DE i18n */}
          </h3>
          <p className="mt-4 text-base text-gray-700 font-['Inter']">
            {t.solution.step1Desc} {/* <--- USA TEXTO DE i18n */}
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside font-['Inter']">
            {t.solution.step1Deliverables.map((item, i) => (
              <li key={i}>{item}</li>
            ))} {/* <--- USA TEXTO DE i18n */}
          </ul>
          <p className="mt-6 text-2xl font-bold font-['Roboto_Mono'] text-gray-900">
            {t.solution.step1Price} {/* <--- USA TEXTO DE i18n */}
          </p>
          <button
            onClick={onFaqOpen}
            className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 ease-in-out font-['Inter'] group"
          >
            {t.solution.step1FaqCta} <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span> {/* <--- USA TEXTO DE i18n */}
          </button>
        </div>

        {/* PASO 2: LA BIFURCACIÓN */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 font-['Inter']">
            {t.solution.step2Title} {/* <--- USA TEXTO DE i18n */}
          </h3>
          <p className="mt-4 text-lg text-gray-700 font-['Inter']">
            {t.solution.step2Desc} {/* <--- USA TEXTO DE i18n */}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Tarjeta A: Retainer de Sistema */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="flex-grow">
              <div className="flex justify-center mb-6">
                <span className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                  <BrainCircuit className="w-8 h-8 text-[#007BFF]" />
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 text-center font-['Inter']">
                {t.solution.cardA_Title} {/* <--- USA TEXTO DE i18n */}
              </h4>
              <p className="mt-2 font-['Roboto_Mono'] text-sm text-gray-500 text-center">
                {t.solution.cardA_Audience} {/* <--- USA TEXTO DE i18n */}
              </p>
              <p className="mt-5 text-base text-gray-700 font-['Inter']">
                {t.solution.cardA_Desc} {/* <--- USA TEXTO DE i18n */}
              </p>
            </div>
            <p className="mt-6 text-2xl font-bold font-['Roboto_Mono'] text-gray-900 text-center">
              {t.solution.cardA_Price} {/* <--- USA TEXTO DE i18n */}
            </p>
          </div>

          {/* Tarjeta B: Retainer de Ejecución */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col">
            <div className="flex-grow">
              <div className="flex justify-center mb-6">
                <span className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                  <Wrench className="w-8 h-8 text-gray-600" />
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 text-center font-['Inter']">
                {t.solution.cardB_Title} {/* <--- USA TEXTO DE i18n */}
              </h4>
              <p className="mt-2 font-['Roboto_Mono'] text-sm text-gray-500 text-center">
                {t.solution.cardB_Audience} {/* <--- USA TEXTO DE i18n */}
              </p>
              <p className="mt-5 text-base text-gray-700 font-['Inter']">
                {t.solution.cardB_Desc} {/* <--- USA TEXTO DE i18n */}
              </p>
            </div>
            <p className="mt-6 text-2xl font-bold font-['Roboto_Mono'] text-gray-900 text-center">
              {t.solution.cardB_Price} {/* <--- USA TEXTO DE i18n */}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// --- Componente: Prueba (Sección 4) ---
const Proof = ({ onVideoDemoOpen }) => {
  const { t } = useLanguage(); // <--- USA EL HOOK

  const hybridCases = [
    {
      title: t.proof.case1_Title,
      context: t.proof.case1_Desc,
      stack: t.proof.case1_Stack
    },
    {
      title: t.proof.case2_Title,
      context: t.proof.case2_Desc,
      stack: t.proof.case2_Stack
    }
  ];

  return (
    <motion.section
      id="metodologia"
      className="bg-white py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-['Inter']">
            {t.proof.title} {/* <--- USA TEXTO DE i18n */}
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-['Inter']">
            {t.proof.desc} {/* <--- USA TEXTO DE i18n */}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hybridCases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
              {/* Parte 1: Caso de Estudio */}
              <div className="p-6 flex-grow">
                <h4 className="text-xl font-semibold text-gray-900 font-['Inter']">
                  {caseItem.title}
                </h4>
                <p className="mt-4 text-base text-gray-700 font-['Inter']">
                  {caseItem.context}
                </p>
                <p className="mt-4 font-['Roboto_Mono'] text-sm text-gray-500">
                  {caseItem.stack}
                </p>
              </div>
              
              {/* Parte 2: Prueba Técnica (Video Placeholder) */}
              <div 
                className="p-8 bg-gray-900 cursor-pointer group relative flex flex-col items-center justify-center text-center min-h-[150px] transition-colors duration-200 ease-in-out hover:bg-gray-800"
                onClick={onVideoDemoOpen}
              >
                <div className="text-center">
                  <PlayCircle className="w-12 h-12 text-white/60 transition-all duration-200 ease-in-out group-hover:text-white group-hover:scale-110 mx-auto" />
                  <h5 className="mt-4 text-base font-semibold text-white font-['Inter']">
                    {t.proof.videoCtaTitle} {/* <--- USA TEXTO DE i18n */}
                  </h5>
                  <p className="mt-1 text-sm text-gray-300 font-['Inter']">
                    {t.proof.videoCtaSubtitle} {/* <--- USA TEXTO DE i18n */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Componente: Diagnóstico (Sección 5) ---
const Diagnosis = () => {
  const { t } = useLanguage(); // <--- USA EL HOOK
  const { onArticleOpen } = useContext(AppContext); // <--- OBTENER EL HANDLER

  const articles = [
    {
      id: "article1_content", // <--- ID para buscar en translations
      label: t.diagnosis.article1_Label,
      title: t.diagnosis.article1_Title,
      description: t.diagnosis.article1_Desc
    },
    {
      id: "article2_content",
      label: t.diagnosis.article2_Label,
      title: t.diagnosis.article2_Title,
      description: t.diagnosis.article2_Desc
    },
    {
      id: "article3_content",
      label: t.diagnosis.article3_Label,
      title: t.diagnosis.article3_Title,
      description: t.diagnosis.article3_Desc
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="diagnostico"
      className="bg-gray-50 py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-['Inter']">
            {t.diagnosis.title} {/* <--- USA TEXTO DE i18n */}
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-['Inter']">
            {t.diagnosis.desc} {/* <--- USA TEXTO DE i18n */}
          </p>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {articles.map((article, index) => (
            <motion.button // <--- CAMBIADO DE <a> A <button>
              key={index}
              onClick={() => onArticleOpen(article.id)} // <--- NUEVO HANDLER
              className="block w-full text-left bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 ease-in-out group"
              variants={itemVariants}
            >
              <p className="font-['Roboto_Mono'] text-xs font-semibold text-[#007BFF] uppercase tracking-wider">
                {article.label}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 font-['Inter']">
                {article.title}
              </h3>
              <p className="mt-4 text-base text-gray-700 font-['Inter']">
                {article.description}
              </p>
              <p className="mt-5 text-sm font-medium text-gray-900 group-hover:text-[#007BFF] transition-colors duration-150 ease-in-out font-['Inter']">
                {t.diagnosis.articleCta} <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1" aria-hidden="true">&rarr;</span> {/* <--- USA TEXTO DE i18n */}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Componente: Intervención (Sección 6) ---
const Intervention = () => {
  const { t } = useLanguage(); // <--- USA EL HOOK

  return (
    <motion.section
      id="intervencion"
      className="bg-white py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-['Inter']">
            {t.intervention.title} {/* <--- USA TEXTO DE i18n */}
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-['Inter']">
            {t.intervention.desc} {/* <--- USA TEXTO DE i18n */}
          </p>
        </div>

        <form action="#" method="POST" className="mt-12">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-['Inter']">
                {t.intervention.formEmail} {/* <--- USA TEXTO DE i18n */}
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-['Inter']"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 font-['Inter']">
                {t.intervention.formRole} {/* <--- USA TEXTO DE i18n */}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="role"
                  id="role"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-['Inter']"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="stack" className="block text-sm font-medium text-gray-700 font-['Inter']">
                {t.intervention.formStack} {/* <--- USA TEXTO DE i18n */}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="stack"
                  id="stack"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-['Inter']"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="blocker" className="block text-sm font-medium text-gray-700 font-['Inter']">
                {t.intervention.formBlocker} {/* <--- USA TEXTO DE i18n */}
              </label>
              <div className="mt-1">
                <textarea
                  id="blocker"
                  name="blocker"
                  rows={4}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-['Inter']"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter']"
            >
              {t.intervention.formCtaPrimary} {/* <--- USA TEXTO DE i18n */}
            </button>
            <p className="mt-6 text-center">
              <a href="mailto:example@example.com" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 ease-in-out font-['Inter']">
                {t.intervention.formCtaSecondary} {/* <--- USA TEXTO DE i1Por8n */}
              </a>
            </p>
          </div>
        </form>
      </div>
    </motion.section>
  );
};


// --- Componente: Footer (Sección 7) ---
const Footer = () => {
  const { t } = useLanguage(); // <--- USA EL HOOK
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        {/* El selector de idioma ya no está aquí */}
        <div className="font-['Roboto_Mono'] text-xs text-gray-500 space-y-4">
          <p>{t.footer.poweredBy}</p> {/* <--- USA TEXTO DE i18n */}
          <p>
            {t.footer.line1} {/* <--- USA TEXTO DE i18n */}
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors duration-150 ease-in-out">
              {t.footer.linkLinkedIn} {/* <--- USA TEXTO DE i18n */}
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-150 ease-in-out">
              {t.footer.linkGitHub} {/* <--- USA TEXTO DE i18n */}
            </a>
          </div>
          <p>{t.footer.copyright.replace('{year}', year)}</p> {/* <--- USA TEXTO DE i18n */}
        </div>
      </div>
    </footer>
  );
};

// --- Componente: Modal de FAQ ---
const FaqModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage(); // <--- USA EL HOOK

  const faqItems = [
    { q: t.faqModal.q1, a: t.faqModal.a1 },
    { q: t.faqModal.q2, a: t.faqModal.a2 },
    { q: t.faqModal.q3, a: t.faqModal.a3 },
    { q: t.faqModal.q4, a: t.faqModal.a4 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Contenido del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3, ease: "easeIn" } }}
            className="relative bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 font-['Inter']">
                {t.faqModal.title} {/* <--- USA TEXTO DE i18n */}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150 ease-in-out"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <p className="text-base font-semibold text-gray-900 font-['Inter']">
                      {item.q}
                    </p>
                    <p className="mt-2 text-base text-gray-700 font-['Inter']">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200 text-right">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter']"
              >
                {t.faqModal.close} {/* <--- USA TEXTO DE i18n */}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Componente: Modal de Video Demo ---
const VideoDemoModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage(); // <--- USA EL HOOK

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Contenido del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } }}
            className="relative bg-black w-full max-w-4xl rounded-lg shadow-xl overflow-hidden aspect-video"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 text-white/70 hover:text-white transition-colors duration-150 ease-in-out bg-black/30 rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <p className="text-white font-['Inter'] text-lg">
                [{t.videoModal.title}] {/* <--- USA TEXTO DE i18n */}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- NUEVO: Componente: Modal de Artículo ---
const ArticleModal = ({ isOpen, onClose, articleKey }) => {
  const { t } = useLanguage();
  const article = articleKey ? t.diagnosis[articleKey] : null;

  return (
    <AnimatePresence>
      {isOpen && article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Contenido del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3, ease: "easeIn" } }}
            className="relative bg-white w-full max-w-4xl h-[90vh] flex flex-col rounded-lg shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Header del Modal */}
            <div className="flex-shrink-0 flex justify-between items-start p-6 border-b border-gray-200">
              <div>
                <p className="font-['Roboto_Mono'] text-xs font-semibold text-[#007BFF] uppercase tracking-wider">
                  {article.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900 font-['Inter']">
                  {article.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-150 ease-in-out ml-4"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Contenido con Scroll Interno */}
            <div className="flex-grow p-8 overflow-y-auto">
              {/* Estilos de tipografía "clínica" */}
              <div className="prose prose-lg max-w-none space-y-5 text-gray-700 font-['Inter']">
                {article.intro.map((paragraph, i) => (
                  <p key={`intro-${i}`}>{paragraph}</p>
                ))}

                {article.points.length > 0 && (
                  <div className="space-y-6 mt-6">
                    {article.points.map((point, i) => (
                      <div key={`point-${i}`}>
                        <h4 className="text-xl font-semibold text-gray-900 font-['Inter']">
                          {point.title}
                        </h4>
                        <p className="mt-2">
                          {/* --- CORRECCIÓN i18n --- */}
                          <strong className="font-semibold text-gray-800">{article.symptomLabel}</strong> {point.symptom}
                        </p>
                        <p className="mt-2">
                          {/* --- CORRECCIÓN i18n --- */}
                          <strong className="font-semibold text-gray-800">{article.diagnosisLabel}</strong> {point.diagnosis}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                {article.intervention.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-5">
                    <h4 className="text-xl font-semibold text-gray-900 font-['Inter']">
                      {/* --- CORRECCIÓN i18n --- */}
                      {article.interventionTitle}
                    </h4>
                    {article.intervention.map((paragraph, i) => (
                      <p key={`intervention-${i}`}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="flex-shrink-0 p-6 bg-gray-50 border-t border-gray-200 text-right">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#007BFF] border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 ease-in-out hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-['Inter']"
              >
                {article.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// --- 3. Contexto de la App (para pasar handlers) ---
const AppContext = createContext();

// --- Componente: MainApp (Contiene la lógica de la App) ---
function MainApp() {
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [videoDemoModalOpen, setVideoDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [articleModalKey, setArticleModalKey] = useState(null); // <--- NUEVO ESTADO

  useEffect(() => {
    const sectionIds = ['hero', 'proceso', 'metodologia', 'intervencion'];
    const sections = sectionIds.map(id => document.getElementById(id));

    const timer = setTimeout(() => {
      const options = {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      };

      const callback = (entries) => {
        const intersectingEntries = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);

        if (intersectingEntries.length > 0) {
          // Lógica de "Hero Override"
          if (intersectingEntries.includes('hero')) {
            setActiveSection('hero');
          } else {
            // Lógica de "Prioridad Invertida" para el resto
            const prioritizedSection = sectionIds
              .slice()
              .reverse()
              .find(id => intersectingEntries.includes(id));
            
            if (prioritizedSection) {
              setActiveSection(prioritizedSection);
            }
          }
        }
      };

      const observer = new IntersectionObserver(callback, options);
      sections.forEach(section => {
        if (section) observer.observe(section);
      });

      return () => {
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }, 1000); // 1s de retraso

    return () => clearTimeout(timer);
  }, []);

  // --- NUEVOS Handlers ---
  const handleOpenArticle = (articleKey) => setArticleModalKey(articleKey);
  const handleCloseArticle = () => setArticleModalKey(null);

  return (
    <AppContext.Provider value={{ onArticleOpen: handleOpenArticle }}> {/* <--- NUEVO PROVIDER */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500;700&display=block');
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Estilos base para el modal de Artículo (Prose) */
        .prose h4 {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #111827; /* text-gray-900 */
        }
        .prose p {
          font-family: 'Inter', sans-serif;
          color: #374151; /* text-gray-700 */
        }
        .prose strong {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #1f2937; /* text-gray-800 */
        }
      `}</style>
      
      <div className="bg-white font-['Inter'] antialiased">
        <Header activeSection={activeSection} />

        <main>
          <Hero />
          <Solution onFaqOpen={() => setFaqModalOpen(true)} />
          <Proof onVideoDemoOpen={() => setVideoDemoModalOpen(true)} />
          <Diagnosis /> {/* <--- onArticleOpen se pasa por Contexto */}
          <Intervention />
        </main>

        <Footer />
      </div>

      <FaqModal isOpen={faqModalOpen} onClose={() => setFaqModalOpen(false)} />
      <VideoDemoModal isOpen={videoDemoModalOpen} onClose={() => setVideoDemoModalOpen(false)} />
      <ArticleModal isOpen={!!articleModalKey} onClose={handleCloseArticle} articleKey={articleModalKey} /> {/* <--- NUEVO MODAL */}
    </AppContext.Provider>
  );
}

// --- Componente: Principal (App) ---
// Este es el nuevo componente raíz que envuelve todo en el Provider
export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
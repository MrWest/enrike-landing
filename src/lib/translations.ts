// --- 1. Central de Traducciones (i18n) ---
export const translations = {
  es: {
    header: {
      inicio: "Inicio",
      proceso: "Proceso",
      metodologia: "Metodología",
      intervencion: "Intervención",
      selectLanguage: "Seleccionar Idioma"
    },
    hero: {
      kicker: "PARA ESTRATEGAS/CTOS QUE REQUIEREN UNA INTERVENCIÓN DE EJECUCIÓN INMEDIATA.",
      headline: "NO soy tu Arquitecto Estratégico. SOY el Ejecutor de Élite que desbloquea tu visión.",
      subheadline: "Soy un \"Ejecutor de Élite\", \"Especialista en .NET Core y React\". No vendo consultoría, vendo un rescate de ejecución. Desbloqueo proyectos complejos, transformando su deuda técnica en un activo funcional.",
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
      step2Desc: "El Sprint de Desarme valida nuestra ejecución. El siguiente paso no es crear dependencia, es construir su autonomía. Tras el éxito del Sprint, ofrezco un camino principal para escalar su equipo y una opción de nicho para ejecución continua.",
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
          "Estos problemas de arquitectura parecen masivos, pero su desbloqueo no lo es. El error más común es intentar hervir el océano. El Sprint de Desarme no resuelve toda su arquitectura; ataca el bloqueo más costoso. Aislamos un fallo en cascata o refactorizamos un acoplamiento crítico, entregando un \"Playbook de Ejecución\" y un prototipo funcional que su equipo puede usar para replicar la solución en el resto del sistema."
        ],
        close: "Cerrar Diagnóstico",
        // --- SUTURA FINAL ---
        symptomLabel: "El Síntoma:",
        diagnosisLabel: "El Diagnóstico:",
        interventionTitle: "La Intervención"
      },
      // Placeholder para otros artículos
      article2_content: {
        title: 'El Coste Oculto de la "Deuda Técnica" en Startups (Y Cómo un Sprint la Desbloquea)',
        label: "CASO DE ESTUDIO",
        intro: [
          'La mayoría de los CTOs miden la deuda técnica en "horas de refactorización". Ese es un error contable. La deuda técnica real se mide en coste de oportunidad: funcionalidades no lanzadas, usuarios frustrados y, lo más crítico, la "parálisis de talento".',
          'Cuando sus desarrolladores senior pasan el 60% de su tiempo manteniendo código frágil en lugar de crear valor, usted está pagando tarifas premium por trabajo de mantenimiento. Su startup no tiene un problema de código; tiene un problema de liquidez de ejecución.'
        ],
        points: [
          {
            title: "La Falacia de la Reescritura",
            symptom: 'La reacción instintiva es "reescribirlo todo".',
            diagnosis: "Esto suele ser una trampa mortal de 6 a 12 meses. Usted no necesita una arquitectura perfecta mañana; necesita desbloquear la velocidad hoy."
          }
        ],
        intervention: [
          'La solución no es añadir más manos al desastre, sino una intervención quirúrgica. Mi "Sprint de Desarme Técnico" no intenta arreglar todo el sistema. Identifica el único nudo gordiano —el acoplamiento de datos, el fallo en cascada, el monolito distribuido— que está frenando al 80% del equipo.',
          'En 5 días, aislamos el fallo, refactorizamos el núcleo crítico y entregamos un entorno funcional. El resultado no es solo código limpio; es la recuperación inmediata de la velocidad de su equipo existente.'
        ],
        close: "Cerrar Diagnóstico",
        symptomLabel: "El Síntoma:",
        diagnosisLabel: "El Diagnóstico:",
        interventionTitle: "La Intervención"
      },
      article3_content: {
        title: '¿"Playbook" vs "Manos de Élite"? Cuándo Escalar su Equipo vs. Cuándo Contratar Ejecución',
        label: "METODOLOGÍA",
        intro: [
          'Una vez que el "Sprint de Desarme" ha eliminado el bloqueo crítico, usted se enfrenta a una elección estratégica: ¿Necesita más capacidad de ejecución o necesita un mejor sistema de ejecución?'
        ],
        points: [
          { title: 'Opción A: Manos de Élite (El Mercenario)', symptom: 'Si usted es una startup en etapa temprana (Seed/Series A) sin un equipo técnico robusto, necesita velocidad bruta. Aquí es donde entran mis "Manos de Élite".', diagnosis: '•\tEl Valor: Ejecución directa y autónoma de funcionalidades complejas.\n•\tEl Coste: Es un recurso finito y premium. Usted "alquila" mi velocidad, pero no transfiere mi capacidad. Es una solución de nicho para crisis de ancho de banda.' },
          { title: 'Opción B: El Playbook (El Arquitecto)', symptom: 'Si usted ya tiene un equipo de 3+ desarrolladores, contratar mis manos es ineficiente. Usted no necesita que yo escriba el código; necesita que su equipo escriba código como yo.', diagnosis: '•\tEl Valor: Instalo mi "Playbook de Ejecución" en su cultura. Mentoría de alto nivel, revisiones de arquitectura y estandarización de procesos (CI/CD, TDD).\n•\tEl Resultado: Escalabilidad. Convierto a sus desarrolladores actuales en ejecutores de élite.' }
        ],
        intervention: ['No compre mis manos si tiene un equipo que puede heredar mi cerebro. El verdadero ROI está en el Sistema (Opción B).'],
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
      formCtaSecondary: "¿Pregunta rápida de logística/alcance antes de la intervención?",
      formError: "Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo."
    },
    footer: {
      poweredBy: "Potenciado por <a href='https://www.eurekagc.com' target='_blank' rel='noopener noreferrer' class='text-gray-900 hover:text-[#007BFF] transition-all duration-150 ease-in-out inline-block hover:scale-105'>EurekaGC</a>",
      line1: "Enrike Hernández, Co-Fundador de EurekaGC, opera como el \"Ejecutor de Élite\" principal para intervenciones de \"Sprint de Desarme\".",
      linkLinkedIn: "https://www.linkedin.com/in/mr-enrique-hernandez/",
      linkGitHub: "https://github.com/MrWest",
      copyright: "© {year} <a href='https://www.eurekagc.com' target='_blank' rel='noopener noreferrer' class='text-gray-900 hover:text-[#007BFF] transition-all duration-150 ease-in-out inline-block hover:scale-105'>EurekaGC</a>. Todos los derechos reservados."
    },
    faqModal: {
      title: "Preguntas Frecuentes (Logística y Alcance)",
      q1: "¿Quién emite la factura? ¿Enrike o EurekaGC?",
      a1: "EurekaGC gestiona toda la facturación. Recibirá una factura profesional de EurekaGC, la entidad legal que respalda la intervención.",
      q2: "¿El precio del Sprint de 10.000€ es fijo? ¿Qué incluye?",
      a2: "Es un precio fijo de alto valor, no una tarifa por hora. Incluye 5 días de ejecución de élite enfocados en su bloqueo principal, resultando en un prototipo funcional, código limpio y un plan de ejecución.",
      q3: "¿Qué pasa si mi problema no se resuelve en el Sprint de 5 días?",
      a3: "El objetivo del Sprint no es resolver toda su deuda técnica, sino desbloquear su problema más crítico. En 5 días, entregamos el \"Playbook de Ejecución\" y el prototipo funcional que su equipo necesita para escalar la solución. El valor está en el desbloqueio y la transferencia de conocimiento.",
      q4: "¿Por qué no puedo contratar el \"Retainer\" (Opción Principal) directamente?",
      a4: "El Sprint es el filtro de entrada universal. Es la \"prueba de ejecución pagada\" definitiva. Valida nuestra metodología y asegura que somos la solución correcta antes de comprometernos a una asociación a largo plazo (Retainer). No vendo promesas, vendo pruebas.",
      close: "Cerrar",
      closeButtonAriaLabel: "Cerrar modal de preguntas frecuentes"
    },
    contactModal: {
      title: "Pregunta Rápida",
      formName: "Su Nombre",
      formEmail: "Su Email",
      formRole: "Su Rol (Opcional)",
      formCompany: "Su Empresa (Opcional)",
      formSubject: "Su Pregunta",
      submit: "Enviar Pregunta",
      successTitle: "¡Gracias por su consulta!",
      successMessage: "Su mensaje ha sido enviado con éxito. Le responderé tan pronto como sea posible."
    },
    videoModal: {
      title: "Demo de Video Privado"
    },
    common: { // Added common object
      close: "Cerrar" // Added
    }
  },
  en: {
    header: {
      inicio: "Home",
      proceso: "Process",
      metodologia: "Methodology",
      intervencion: "Intervention",
      selectLanguage: "Select Language"
    },
    hero: {
      kicker: "FOR STRATEGISTS/CTOS REQUIRING IMMEDIATE EXECUTION INTERVENTION.",
      headline: "I am NOT your Strategic Architect. I AM the Elite Executor who unlocks your vision.",
      subheadline: "I am an \"Elite Executor\", a \".NET Core & React Specialist\". I don't sell consulting; I sell an execution rescue. I unblock complex projects, transforming technical debt into a functional asset.",
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
          "These architectural problems seem massive, but their unblocking is not. The most common error is trying to boil the ocean. The Unblocking Sprint doesn't solve your entire architecture; it attacks the most expensive blocker. We isolate a cascading failure or refactor a critical coupling, delivering an \"Execution Playbook\" and a functional prototype your team can use to replicate the solution across the rest of the system."
        ],
        close: "Close Diagnosis",
        // --- SUTURA FINAL ---
        symptomLabel: "The Symptom:",
        diagnosisLabel: "The Diagnosis:",
        interventionTitle: "The Intervention"
      },
      // Placeholder for other articles
      article2_content: {
        title: 'The Hidden Cost of "Technical Debt" in Startups (And How a Sprint Unlocks It)',
        label: "CASE STUDY",
        intro: [
          'Most CTOs measure technical debt in "refactoring hours." That is an accounting error. Real technical debt is measured in opportunity cost: unreleased features, frustrated users, and, most critically, "talent paralysis."',
          "When your senior developers spend 60% of their time maintaining brittle code instead of creating value, you are paying premium rates for janitorial work. Your startup doesn't have a code problem; it has an execution liquidity problem."
        ],
        points: [
          {
            title: "The Rewrite Fallacy",
            symptom: 'The knee-jerk reaction is to "rewrite everything."',
            diagnosis: "This is often a 6-12 month death trap. You don't need perfect architecture tomorrow; you need to unlock velocity today."
          }
        ],
        intervention: [
          'The solution isn\'t throwing more bodies at the mess; it\'s a surgical intervention. My "Technical Disarmament Sprint" doesn\'t attempt to fix the entire system. It identifies the single Gordian knot—the data coupling, the cascading failure, the distributed monolith—that is holding back 80% of the team.',
          "In 5 days, we isolate the failure, refactor the critical core, and deliver a functional environment. The result isn't just clean code; it's the immediate recovery of your existing team's velocity."
        ],
        close: "Close Diagnosis",
        symptomLabel: "The Symptom:",
        diagnosisLabel: "The Diagnosis:",
        interventionTitle: "The Intervention"
      },
      article3_content: {
        title: '"Playbook" vs. "Elite Hands"? When to Scale Your Team vs. When to Hire Execution',
        label: "METHODOLOGY",
        intro: [
          'Once the "Disarmament Sprint" has cleared the critical blockage, you face a strategic choice: Do you need more execution capacity, or do you need a better execution system?'
        ],
        points: [
          { title: 'Option A: Elite Hands (The Mercenary)', symptom: 'If you are an early-stage startup (Seed/Series A) without a robust technical team, you need raw speed. This is where my "Elite Hands" come in.', diagnosis: '•\tThe Value: Direct, autonomous execution of complex features.\n•\tThe Cost: It is a finite, premium resource. You are "renting" my speed, but not transferring my capability. It is a niche solution for bandwidth crises.' },
          { title: 'Option B: The Playbook (The Architect)', symptom: "If you already have a team of 3+ developers, hiring my hands is inefficient. You don't need me to write the code; you need your team to write code like me.", diagnosis: '•\tThe Value: I install my "Execution Playbook" into your culture. High-level mentorship, architectural reviews, and process standardization (CI/CD, TDD).\n•\tThe Result: Scalability. I turn your current developers into elite executors.' }
        ],
        intervention: ['Do not buy my hands if you have a team that can inherit my brain. The real ROI is in the System (Option B).'],
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
      formCtaSecondary: "Quick logistics/scope question before intervening?",
      formError: "An error occurred while submitting the form. Please try again."
    },
    footer: {
      poweredBy: "Powered by <a href='https://www.eurekagc.com' target='_blank' rel='noopener noreferrer' class='text-gray-900 hover:text-[#007BFF] transition-all duration-150 ease-in-out inline-block hover:scale-105'>EurekaGC</a>",
      line1: "Enrike Hernandez, EurekaGC Co-Founder, operates as the main \"Elite Executor\" for interventions of \"Disarmament Sprint\".",
      linkLinkedIn: "https://www.linkedin.com/in/mr-enrique-hernandez/",
      linkGitHub: "https://github.com/MrWest",
      copyright: "© {year} <a href='https://www.eurekagc.com' target='_blank' rel='noopener noreferrer' class='text-gray-900 hover:text-[#007BFF] transition-all duration-150 ease-in-out inline-block hover:scale-105'>EurekaGC</a>. All rights reserved."
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
      close: "Close",
      closeButtonAriaLabel: "Close FAQ modal"
    },
    contactModal: {
      title: "Quick Question",
      formName: "Your Name",
      formEmail: "Your Email",
      formRole: "Your Role (Optional)",
      formCompany: "Your Company (Optional)",
      formSubject: "Your Question",
      submit: "Submit Question",
      successTitle: "Thank you for your inquiry!",
      successMessage: "Your message has been sent successfully. I will get back to you as soon as possible."
    },
    videoModal: {
      title: "Private Video Demo"
    },
    common: { // Added common object
      close: "Close" // Added
    }
  },
  pt: {
    header: {
      inicio: "Início",
      proceso: "Processo",
      metodologia: "Metodologia",
      intervencion: "Intervenção",
      selectLanguage: "Selecionar Idioma"
    },
    hero: {
      kicker: "PARA ESTRATEGISTAS/CTOS QUE REQUEREM UMA INTERVENÇÃO DE EXECUÇÃO IMEDIATA.",
      headline: "NÃO sou seu Arquiteto Estratégico. SOU o Executor de Elite que desbloqueia sua visão.",
      subheadline: "Sou um \"Executor de Elite\", \"Especialista em .NET Core e React\". Não vendo consultoria, vendo um resgate de execution. Desbloqueio projetos complexos, transformando sua dívida técnica em um ativo funcional.",
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
            symptom: "Uma simples solicitação do usuário (ex: \"ver perfil\") dispara uma cadeia de chamadas síncronas através de múltiplos serviços (Serviço A chama a B, B chama a C...). Se o Serviço C estiver lento, toda a cadeia paralisa.",
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
          "Esses problemas de arquitetura parecem massivos, mas seu desbloqueio não é. O erro mais comum é tentar ferver o oceano. O Sprint de Desarme não resolve toda a sua arquitetura; ele ataca o bloqueador mais custoso. Isolamos uma falha em cascata ou refatoramos um acoplamento crítico, entregando um \"Playbook de Execução\" e um protótipo funcional que sua equipe pode usar para replicar a solução no resto do sistema."
        ],
        close: "Fechar Diagnóstico",
        // --- SUTURA FINAL ---
        symptomLabel: "O Sintoma:",
        diagnosisLabel: "O Diagnóstico:",
        interventionTitle: "A Intervenção"
      },
      // Placeholder para otros artículos
      article2_content: {
        title: 'O Custo Oculto da "Dívida Técnica" em Startups (E Como um Sprint a Desbloqueia)',
        label: "ESTUDO DE CASO",
        intro: [
          'A maioria dos CTOs mede a dívida técnica em "horas de refatoração". Esse é um erro contábil. A verdadeira dívida técnica é medida em custo de oportunidade: funcionalidades não lançadas, usuários frustrados e, o mais crítico, a "paralisia de talentos".',
          'Quando seus desenvolvedores seniores passam 60% do tempo mantendo código frágil em vez de criar valor, você está pagando tarifas premium por trabalho de manutenção. Sua startup não tem um problema de código; tem um problema de liquidez de execução.'
        ],
        points: [
          {
            title: "A Falácia da Reescrita",
            symptom: 'A reação instintiva é "reescrever tudo".',
            diagnosis: "Isso geralmente é uma armadilha mortal de 6 a 12 meses. Você não precisa de uma arquitetura perfeita amanhã; você precisa desbloquear a velocidade hoje."
          }
        ],
        intervention: [
          'A solução não é jogar mais pessoas na bagunça; é uma intervenção cirúrgica. Meu "Sprint de Desarmamento Técnico" não tenta consertar todo o sistema. Ele identifica o único nó górdio — o acoplamento de dados, a falha em cascata, o monólito distribuído — que está segurando 80% da equipe.',
          'Em 5 dias, isolamos a falha, refatoramos o núcleo crítico e entregamos um ambiente funcional. O resultado não é apenas código limpo; é a recuperação imediata da velocidade da sua equipe existente.'
        ],
        close: "Fechar Diagnóstico",
        symptomLabel: "O Sintoma:",
        diagnosisLabel: "O Diagnóstico:",
        interventionTitle: "A Intervenção"
      },
      article3_content: {
        title: '"Playbook" vs. "Mãos de Elite"? Quando Escalar sua Equipe vs. Quando Contratar Execução',
        label: "METODOLOGIA",
        intro: [
          'Uma vez que o "Sprint de Desarmamento" tenha eliminado o bloqueio crítico, você enfrenta uma escolha estratégica: Você precisa de mais capacidade de execução ou precisa de um sistema de execução melhor?'
        ],
        points: [
          { title: 'Opção A: Mãos de Elite (O Mercenário)', symptom: 'Se você é uma startup em estágio inicial (Seed/Série A) sem uma equipe técnica robusta, precisa de velocidade bruta. É aqui que entram minhas "Mãos de Elite".', diagnosis: '•\tO Valor: Execução direta e autônoma de funcionalidades complexas.\n•\tO Custo: É um recurso finito e premium. Você "aluga" minha velocidade, mas não transfere minha capacidade. É uma solução de nicho para crises de largura de banda.' },
          { title: 'Opção B: O Playbook (O Arquiteto)', symptom: 'Se você já tem uma equipe de 3+ desenvolvedores, contratar minhas mãos é ineficiente. Você não precisa que eu escreva o código; você precisa que sua equipe escreva código como eu.', diagnosis: '•\tO Valor: Eu instalo meu "Playbook de Execução" em sua cultura. Mentoria de alto nível, revisões de arquitetura e padronización de processos (CI/CD, TDD).\n•\tO Resultado: Escalabilidade. Eu transformo seus desenvolvedores atuais em executores de elite.' }
        ],
        intervention: ['Não compre minhas mãos se você tem uma equipe que pode herdar meu cérebro. O verdadeiro ROI está no Sistema (Opção B).'],
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
      formCtaSecondary: "Pergunta rápida de logística/escopo antes da intervenção?/*  */",
      formError: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
    },
    footer: {
      poweredBy: "Powered by <a href='https://www.eurekagc.com' target='_blank' rel='noopener noreferrer' class='text-gray-900 hover:text-[#007BFF] transition-all duration-150 ease-in-out inline-block hover:scale-105'>EurekaGC</a>",
      line1: "Enrike Hernández, Co-Fundador da EurekaGC, opera como o principal \"Executor de Elite\" para intervenções de \"Sprint de Desbloqueio\".",
      linkLinkedIn: "https://www.linkedin.com/in/mr-enrique-hernandez/",
      linkGitHub: "https://github.com/MrWest",
      copyright: "© {year} <a href='https://www.eurekagc.com' target='_blank' rel='noopener noreferrer' class='text-gray-900 hover:text-[#007BFF] transition-all duration-150 ease-in-out inline-block hover:scale-105'>EurekaGC</a>. Todos os direitos reservados."
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
      close: "Fechar",
      closeButtonAriaLabel: "Fechar modal de perguntas frequentes"
    },
    videoModal: {
      title: "Demo de Vídeo Privado"
    },
    common: { // Added common object
      close: "Fechar" // Added
    }
  }
};

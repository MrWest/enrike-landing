"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IntroPreloader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: Linea, 1: Apertura, 2: Fin

  useEffect(() => {
    // Fase 0 -> 1: La línea se dibuja (1.6s - Más lento y deliberado)
    const timer1 = setTimeout(() => setPhase(1), 1600);

    // Fase 1 -> 2: La apertura (1.0s)
    const timer2 = setTimeout(() => {
      setPhase(2);
      onComplete(); // Señal al App de que el preloader terminó
    }, 2600); // 1600ms + 1000ms = 2600ms total

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === 2) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden pointer-events-none font-sans">
      {/* Mitad Superior (Panel Negro/Oscuro) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={phase === 1 ? { y: "-100%" } : { y: "0%" }} // Se mueve hacia ARRIBA
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }} // Ease de "apertura"
        className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 z-20 flex items-end justify-start relative" // Added relative for absolute positioning of child
      >
        {/* Texto HERNANDEZ */}
        <motion.span
          initial={{ opacity: 1 }}
          animate={phase === 1 ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold tracking-wide transform -rotate-90 origin-top-left" // Added absolute
          // Ajuste fino de posicionamiento y espaciado
          style={{
            left: '1vw', // Ajuste para centrar el texto rotado, removed calc
            letterSpacing: '0.1em',
            // Usamos transform para un control preciso de la posición vertical
            transform: 'rotate(-90deg) translateY(-0.1rem) translateX(-1.5rem)',
          }}
        >
          HERNANDEZ
        </motion.span>
      </motion.div>

      {/* La Línea (La Incisión) */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-30 flex justify-start items-center">
        {/* Animación del trazo de la línea */}
        <motion.div
          initial={{ width: "0%" }}
          animate={
            phase === 0 ? { width: "100%" } : { width: "100%", opacity: 0 } // La línea se desvanece al abrir
          }
          transition={
            phase === 0
              ? { duration: 1.6, ease: "easeInOut" }
              : { duration: 0.2 }
          } // 1.6s duration
          className="h-full bg-[#007BFF] relative overflow-visible"
        >
          {/* Bisturí (Imagen) al final de la línea */}
          {phase === 0 && (
            <motion.div
              className="absolute right-0 translate-x-1/2"
              // Rotación fuerte para simular corte vertical/diagonal hacia abajo
              initial={{ rotate: 0, y: "-100%", x: "50%", top: "50%" }} // Ajuste de posicion y rotacion
              animate={{ rotate: 0 }}
            >
              <Image
                src="/bisturí.png"
                alt="Bisturí"
                width={80}
                height={80}
                className="drop-shadow-xl"
                style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Mitad Inferior (Panel Negro/Oscuro) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={phase === 1 ? { y: "100%" } : { y: "0%" }} // Se mueve hacia ABAJO
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }} // Ease de "apertura"
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 z-20 flex items-start justify-start relative" // Added relative for absolute positioning of child
      >
        {/* Texto ENRIKE */}
        <motion.span
          initial={{ opacity: 1 }}
          animate={phase === 1 ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold tracking-wide transform -rotate-90 origin-top-left" // Added absolute
          // Ajuste fino de posicionamiento y espaciado
          style={{
            left: '0.8vw', // Mismo ajuste para alineación, removed calc
            top: '10rem',                // Espacio respecto a la línea azul
            letterSpacing: '0.1em',
          }}
        >
          ENRIKE
        </motion.span>
      </motion.div>
    </div>
  );
};

export default IntroPreloader;

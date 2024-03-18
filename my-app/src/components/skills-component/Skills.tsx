"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { aboutSkills, aboutAcademic, titlesAbout } from "@/data/dataAbout";
import { nanoid } from "nanoid";

export default function Skills() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col xl:flex-row xl:gap-x-12 gap-y-8 text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center xl:flex-1 text-center xl:text-left"
        >
          <div className="flex flex-col flex-[1.5] gap-y-5">
            <h1 className="font-bold text-2xl md:text-4xl mb-3">
              MEUS <span className="inline-block xl:block">HABILIDADES</span>
            </h1>

            <p className="text-gray-300">
              Como desenvolvedor de software, estou sempre em busca de
              conhecimento e comprometido com a excelência. Minha curiosidade
              natural me impulsiona a melhorar continuamente, e sou apaixonado
              por criar soluções com propósito.
            </p>

            <p className="font-semibold text-gray-300">
              Vamos colaborar para construir algo verdadeiramente incrível
              juntos!
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="xl:flex-1 h-44"
        >
          <div className="flex justify-center xl:justify-start gap-x-8 mb-10">
            {titlesAbout.map((item, itemIndex) => (
              <button
                key={nanoid(5)}
                className={`${
                  index === itemIndex &&
                  "text-blue-600 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                title={`${
                  itemIndex === 0
                    ? "Passe o mouse por cima dos ícones para saber o nome"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <ul className="flex flex-col gap-y-4 text-center xl:text-left">
            {index === 0
              ? aboutSkills.info.map((item) => (
                  <li
                    key={nanoid(5)}
                    className="flex flex-col xl:flex-row justify-center xl:justify-start gap-x-7"
                  >
                    <span className="text-blue-600 mb-2 text-center xl:text-left">
                      {item.title}
                    </span>
                    <ul className="flex justify-center xl:justify-start items-center gap-x-2">
                      {item.icons.map((icon) => (
                        <li
                          className="hover:text-blue-600 duration-300"
                          key={icon.key}
                        >
                          {icon}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              : aboutAcademic.info.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-center xl:justify-start gap-x-7"
                  >
                    <p>
                      <span className="text-blue-600">{item.course}</span>
                      {item.institution}
                      {item.date}
                    </p>
                  </li>
                ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

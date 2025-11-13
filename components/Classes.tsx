import React from 'react';
import { useI18n } from '../hooks/useI18n';
import type { ClassInfo } from '../types';
import { imageUrls } from '../utils/imageConfig';
import AnimateOnScroll from './AnimateOnScroll';

const classData: ClassInfo[] = [
  {
    id: 'contemporary',
    titleKey: 'classCatContemporaryTitle',
    descriptionKey: 'classCatContemporaryDesc',
    image: imageUrls.classes.contemporaryJazz,
  },
  {
    id: 'urban',
    titleKey: 'classCatUrbanTitle',
    descriptionKey: 'classCatUrbanDesc',
    image: imageUrls.classes.urban,
  },
  {
    id: 'latin',
    titleKey: 'classCatLatinTitle',
    descriptionKey: 'classCatLatinDesc',
    image: imageUrls.classes.latin,
  },
  {
    id: 'fitness',
    titleKey: 'classCatFitnessTitle',
    descriptionKey: 'classCatFitnessDesc',
    image: imageUrls.classes.fitness,
  },
  {
    id: 'morning',
    titleKey: 'classCatMorningTitle',
    descriptionKey: 'classCatMorningDesc',
    image: imageUrls.classes.morning,
  },
  {
    id: 'world',
    titleKey: 'classCatWorldTitle',
    descriptionKey: 'classCatWorldDesc',
    image: imageUrls.classes.world,
  },
];

const Classes: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="classes" className="py-20 md:py-32 bg-primary-dark/10">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classData.map((cls, index) => (
            <AnimateOnScroll key={cls.id} delay={index * 100} className="[perspective:1000px]">
              <div className="group relative rounded-xl overflow-hidden shadow-lg h-80 bg-black text-white transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:shadow-accent-glow group-hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)]">
                <img
                  src={cls.image}
                  alt={`Clase de ${t(cls.titleKey)} en Barcelona`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-accent rounded-xl transition-all duration-300 pointer-events-none"></div>

                <div className="relative flex flex-col justify-end h-full p-6 text-left">
                  <h3 className="text-3xl font-bold mt-2">{t(cls.titleKey)}</h3>
                  <div className="h-0 group-hover:h-20 overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="text-neutral/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      {t(cls.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;

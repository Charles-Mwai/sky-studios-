import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, User } from "lucide-react";
import { portfolioCategories } from "../data/portfolioData";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";

export const CategoryDetail = () => {
  const { categoryId } = useParams();
  
  // Find the requested category
  const category = portfolioCategories.find((cat) => cat.id === categoryId);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-center">
          <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-4">
            404 Error
          </span>
          <h1 className="font-serif text-4xl font-light mb-6 text-brand-text">
            Gallery Sphere Not Found
          </h1>
          <p className="font-sans text-xs text-brand-muted max-w-sm mb-8">
            The category you are looking for does not exist in our portfolio registry.
          </p>
          <Link
            to="/"
            className="border border-brand-accent px-6 py-2.5 font-sans text-[10px] tracking-widest uppercase text-brand-text hover:bg-brand-dark hover:text-brand-bg hover:border-brand-dark transition-all duration-300 rounded-[2px]"
          >
            Return Home
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen">
        
        {/* 1. Elegant Editorial Hero Banner (No image background, solid minimalist aesthetic) */}
        <section className="pt-32 pb-16 px-4 sm:px-6 md:px-12 w-full border-b border-brand-accent/20 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-3 block">
              Portfolio Category
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-brand-text tracking-wide uppercase">
              {category.title}
            </h1>
            <div className="w-16 h-[1px] bg-brand-accent my-6" />
            <p className="font-serif text-lg sm:text-xl italic text-brand-muted max-w-2xl mx-auto leading-relaxed">
              {category.subtitle}
            </p>
          </div>
        </section>

        {/* 2. Editorial Description */}
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12 bg-brand-details border-b border-brand-accent/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
              {category.description}
            </p>
          </div>
        </section>

        {/* 3. Projects Catalog (Alternating Split Column Layout) */}
        <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-28">
            {category.projects.map((project, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={project.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-10 lg:gap-16 items-center`}
                >
                  {/* Project Cover Image Viewfinder */}
                  <div className="w-full lg:w-7/12 aspect-[3/2]">
                    <Link to={`/project/${project.id}`} className="block w-full h-full">
                      <ViewfinderContainer
                        aspectRatio="aspect-[3/2]"
                        label={`SKY // ${project.title}`}
                        technicalInfo={`PROJECT.${idx + 1} // F/2.8`}
                        className="w-full"
                      />
                    </Link>
                  </div>

                  {/* Project Metadata & Descriptions */}
                  <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <span className="font-sans text-[10px] tracking-widest text-brand-accent block mb-2 uppercase text-center lg:text-left">
                      0{idx + 1} // Project Portfolio
                    </span>
                    
                    <Link to={`/project/${project.id}`}>
                      <h3 className="font-serif text-2xl sm:text-3xl text-center lg:text-left font-light text-brand-text hover:text-brand-accent transition-colors duration-300 mb-6">
                        {project.title}
                      </h3>
                    </Link>

                    <div className="h-[1px] w-12 bg-brand-accent mb-6 mx-auto lg:mx-0" />

                    <p className="font-sans text-xs sm:text-sm text-center lg:text-left text-brand-muted leading-relaxed font-light mb-8">
                      {project.description}
                    </p>

                    {/* Metatags Grid */}
                    <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-brand-accent/15 font-sans text-2xs uppercase tracking-widest text-brand-muted">
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <User size={12} className="text-brand-accent flex-shrink-0" />
                        <span className="truncate">Client: {project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <MapPin size={12} className="text-brand-accent flex-shrink-0" />
                        <span className="truncate">Loc: {project.location}</span>
                      </div>
                    </div>

                    {/* View Details Action Link */}
                    <div className="text-center lg:text-left">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-3 font-sans text-2xs tracking-widest uppercase text-brand-text hover:text-brand-accent transition-colors duration-300 font-semibold"
                      >
                        <span>View Project Gallery</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Category Footer (Rhythmic Dark Section Transition) */}
        <section className="bg-brand-dark text-brand-bg py-16 px-4 sm:px-6 md:px-12 text-center border-t border-brand-accent/20">
          <div className="max-w-3xl mx-auto">
            <span className="font-sans text-[8px] sm:text-[10px] tracking-mega uppercase text-brand-accent mb-4 block">
              Navigation
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-light mb-8 italic">
              Curious to see our other visual disciplines?
            </h4>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {portfolioCategories
                .filter((cat) => cat.id !== categoryId)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/portfolio/${cat.id}`}
                    className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase border border-brand-bg/20 px-4 py-2 hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 rounded-[2px]"
                  >
                    {cat.title}
                  </Link>
                ))}
            </div>
          </div>
        </section>
        
      </div>
    </PageTransition>
  );
};

export default CategoryDetail;

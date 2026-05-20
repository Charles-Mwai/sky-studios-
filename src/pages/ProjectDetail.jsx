import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, User, MapPin, Calendar, LayoutGrid } from "lucide-react";
import { allProjects } from "../data/portfolioData";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";
import MasonryGrid from "../components/MasonryGrid";
import Lightbox from "../components/Lightbox";

export const ProjectDetail = () => {
  const { projectId } = useParams();

  // Find the active project
  const project = allProjects.find((p) => p.id === projectId);
  
  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState(null);

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-center">
          <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-4">
            Error
          </span>
          <h1 className="font-serif text-4xl font-light mb-6 text-brand-text">
            Project Registry Not Found
          </h1>
          <p className="font-sans text-xs text-brand-muted max-w-sm mb-8">
            The project portfolio you requested does not exist or has been archived.
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

  // Find next project in the global registry (for continuous reading)
  const currentIdx = allProjects.findIndex((p) => p.id === projectId);
  const nextProject = allProjects[(currentIdx + 1) % allProjects.length];

  // Lightbox navigation handlers
  const handlePrevImage = () => {
    if (!lightboxImage) return;
    const currentImgIdx = project.images.findIndex((img) => img.id === lightboxImage.id);
    const prevIdx = currentImgIdx > 0 ? currentImgIdx - 1 : project.images.length - 1;
    setLightboxImage(project.images[prevIdx]);
  };

  const handleNextImage = () => {
    if (!lightboxImage) return;
    const currentImgIdx = project.images.findIndex((img) => img.id === lightboxImage.id);
    const nextIdx = currentImgIdx < project.images.length - 1 ? currentImgIdx + 1 : 0;
    setLightboxImage(project.images[nextIdx]);
  };

  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen">
        
        {/* 1. Minimal solid header matching the Pixieset project intro layout */}
        <section className="pt-32 pb-16 px-4 sm:px-6 md:px-12 w-full border-b border-brand-accent/20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <Link
              to={`/portfolio/${project.categoryId}`}
              className="inline-flex items-center gap-2 font-sans text-2xs tracking-widest uppercase text-brand-accent mb-4 hover:text-brand-text transition-colors duration-300"
            >
              <ArrowLeft size={10} />
              <span>Back to {project.categoryTitle}</span>
            </Link>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-brand-text tracking-wide leading-tight max-w-3xl">
              {project.title}
            </h1>
            
            <span className="font-sans text-[10px] tracking-widest uppercase text-brand-accent block mt-3">
              {project.location} // {project.date}
            </span>

          </div>
        </section>

        {/* 2. Editorial Description & Metadata (2-Column Layout, stacked on mobile) */}
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 border-b border-brand-accent/20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Client / Details (with subtle border indicator) */}
            <div className="w-full lg:w-4/12 border-l border-brand-accent/20 pl-4 md:pl-6 flex flex-col gap-5">
              <span className="font-sans text-[9px] tracking-mega uppercase text-brand-accent font-semibold">
                Specifications
              </span>
              <div className="flex flex-col gap-3 font-sans text-2xs uppercase tracking-wider text-brand-muted">
                <div className="flex items-center gap-3">
                  <User size={12} className="text-brand-accent flex-shrink-0" />
                  <span className="truncate">Client: {project.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={12} className="text-brand-accent flex-shrink-0" />
                  <span className="truncate">Location: {project.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-brand-accent flex-shrink-0" />
                  <span>Published: {project.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <LayoutGrid size={12} className="text-brand-accent flex-shrink-0" />
                  <span>Category: {project.categoryTitle}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative text */}
            <div className="w-full lg:w-8/12">
              <span className="font-sans text-[9px] tracking-mega uppercase text-brand-accent mb-3 block font-semibold">
                Editorial Narrative
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-brand-text mb-4 leading-snug">
                Capturing the architectural geometry of space and the warmth of detail.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                {project.description} Each composition in this series was curated to document the honest interplay between shadows and light. We utilize minimal artificial modifications, choosing instead to wait for transient light pools. The resulting collection preserves the organic texture, grain, and authentic atmosphere of the setting.
              </p>
            </div>

          </div>
        </section>

        {/* 3. Responsive Masonry Grid of viewfinder containers */}
        <section className="py-12 md:py-16">
          <MasonryGrid
            images={project.images}
            onImageClick={(image) => setLightboxImage(image)}
          />
        </section>

        {/* 4. Bottom Continuous Navigation (Next Project Loop) */}
        <section className="bg-brand-dark text-brand-bg border-t border-brand-accent/20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Return link */}
            <Link
              to={`/portfolio/${project.categoryId}`}
              className="font-sans text-2xs tracking-widest uppercase border border-brand-accent/20 px-6 py-3.5 hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 rounded-[2px] order-2 md:order-1"
            >
              Back to category
            </Link>

            {/* Next Project Invitation */}
            <Link
              to={`/project/${nextProject.id}`}
              className="flex flex-col items-center md:items-end group select-none text-center md:text-right order-1 md:order-2"
            >
              <span className="font-sans text-[8px] sm:text-[9px] tracking-mega uppercase text-brand-accent mb-2">
                Next Project Up
              </span>
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-brand-bg group-hover:text-brand-accent transition-colors duration-300">
                  {nextProject.title}
                </span>
                <ArrowRight
                  size={20}
                  className="text-brand-accent group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                />
              </div>
              <span className="font-sans text-[9px] tracking-wider text-brand-bg/50 uppercase mt-1">
                {nextProject.categoryTitle} // {nextProject.location}
              </span>
            </Link>

          </div>
        </section>

        {/* Lightbox Overlay */}
        <Lightbox
          images={project.images}
          activeImage={lightboxImage}
          onClose={() => setLightboxImage(null)}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
        
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;

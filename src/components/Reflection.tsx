import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";

const GalleryImage = ({
  src,
  alt,
  title,
  description,
  className = "",
  imgClassName = "object-cover"
}: {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string;
  imgClassName?: string;
}) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/5 bg-black/5 dark:bg-white/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-accent/40 ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105 group-hover:-rotate-1 ${imgClassName}`}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">
        {title && <h3 className="text-white font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3 drop-shadow-lg">{title}</h3>}
        {description && <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-3 drop-shadow-md">{description}</p>}
      </div>
    </div>
  </div>
);

const Reflection = () => {
  return (
    <>
      <Seo
        title="Employability Reflection"
        description="Reflections on employability skills development, teamwork, and professional events at Ravensbourne University London by Tamim Mia."
        canonical="/reflection"
      />
      <main className="pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel label="Reflection Gallery" className="mb-6 md:mb-8 block" />
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Employability & Experience <span className="text-accent italic">Gallery</span>
          </h1>
          <p className="font-mono text-sm md:text-base uppercase tracking-widest text-muted-foreground mb-12 md:mb-20">
            A visual reflection of my journey at Ravensbourne University London
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 md:mb-32">
            <div className="lg:col-span-5 prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                I'm passionate about learning, growing, and helping businesses thrive through strategic thinking and collaboration.
              </p>
              <br />
              <p className="leading-relaxed">
                This site showcases my employability skills and experiences as I prepare for a successful career in business and entrepreneurship. From engaging in university workshops to leading community events, every moment has shaped my professional identity. Explore the gallery below to see my journey in action.
              </p>
            </div>
            <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl relative group h-[400px] md:h-[500px]">
              <img src="https://i.ibb.co.com/yFgqtp4q/tamim-headshot-photo.jpg" alt="Tamim Mia" className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 border border-white/20 rounded-3xl z-10 pointer-events-none"></div>
            </div>
          </div>

          <div className="space-y-32 md:space-y-48">

            {/* 1. Class activities */}
            <div className="space-y-10 group/section">
              <div className="max-w-2xl space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-accent/30 font-bold">01</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Class activities</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                  Engaging in collaborative learning environments and developing core business management skills through practical classroom exercises.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pl-0 md:pl-14">
                <GalleryImage
                  className="md:col-span-7 aspect-[4/3]"
                  src="https://i.ibb.co.com/SwjsK40N/Class-activities1.jpg"
                  title="Collaborative Learning"
                  alt="Class activities 1"
                />
                <GalleryImage
                  className="md:col-span-5 aspect-[4/3] md:aspect-auto"
                  src="https://i.ibb.co.com/S7VjLkjQ/Class-activities2.jpg"
                  title="Strategic Discussions"
                  alt="Class activities 2"
                />
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <GalleryImage
                    className="aspect-square md:aspect-auto"
                    src="https://i.ibb.co.com/C5kKv33c/Class-activities3.jpg"
                    title="Practical Exercises"
                    alt="Class activities 3"
                  />
                  <GalleryImage
                    className="aspect-square md:aspect-auto"
                    src="https://i.ibb.co.com/ymJf0832/Class-activities4.jpg"
                    title="Team Planning"
                    alt="Class activities 4"
                  />
                  <GalleryImage
                    className="aspect-square md:aspect-auto"
                    src="https://i.ibb.co.com/c5vz3B0/Class-activities5.jpg"
                    title="Academic Focus"
                    alt="Class activities 5"
                  />
                </div>
              </div>
            </div>

            {/* 2. Insight Hour Event */}
            <div className="space-y-10 group/section">
              <div className="max-w-3xl ml-auto text-right space-y-4 relative z-10">
                <div className="flex items-center justify-end gap-4">
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Insight Hour Event</h2>
                  <span className="text-4xl text-accent/30 font-bold">02</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pr-14">
                  Gaining professional wisdom from industry experts and university alumni, understanding the nuances of the business world.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 pr-0 md:pr-14">
                <GalleryImage
                  className="col-span-2 md:col-span-6 aspect-video"
                  src="https://i.ibb.co.com/bgqK3ZFp/Insight-Hour-Event1.jpg"
                  title="Expert Insights"
                  alt="Insight Hour Event 1"
                />
                <GalleryImage
                  className="col-span-2 md:col-span-6 aspect-video"
                  src="https://i.ibb.co.com/3P2fRYQ/Insight-Hour-Event2.jpg"
                  title="Networking Session"
                  alt="Insight Hour Event 2"
                />
                <GalleryImage
                  className="col-span-2 md:col-span-4 aspect-[4/5]"
                  src="https://i.ibb.co.com/m50Y3TqL/Insight-Hour-Event3.jpg"
                  title="Career Development"
                  alt="Insight Hour Event 3"
                />
                <GalleryImage
                  className="col-span-1 md:col-span-4 aspect-[4/5]"
                  src="https://i.ibb.co.com/zVVMZ1Y4/Insight-Hour-Event4.jpg"
                  title="Professional Advice"
                  alt="Insight Hour Event 4"
                />
                <div className="col-span-1 md:col-span-4 grid grid-cols-1 gap-4 md:gap-6">
                  <GalleryImage
                    className="aspect-square"
                    src="https://i.ibb.co.com/k6VWMB8W/Insight-Hour-Event5.jpg"
                    title="Industry Connectivity"
                    alt="Insight Hour Event 5"
                  />
                  <GalleryImage
                    className="aspect-square"
                    src="https://i.ibb.co.com/zhQyvDxZ/Insight-Hour-Event6.jpg"
                    title="Market Trends"
                    alt="Insight Hour Event 6"
                  />
                </div>
              </div>
            </div>

            {/* 3. RaveLate Event */}
            <div className="space-y-10 group/section">
              <div className="max-w-2xl space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-accent/30 font-bold">03</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">RaveLate Event</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                  Immersing in Ravensbourne's creative culture through evening events that showcase innovation and student talent.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pl-0 md:pl-14">
                <GalleryImage
                  className="aspect-[4/5]"
                  src="https://i.ibb.co.com/zVPTSB10/Rave-Late-Event1.jpg"
                  title="Creative Hub"
                  alt="RaveLate Event 1"
                />
                <GalleryImage
                  className="aspect-[4/5]"
                  src="https://i.ibb.co.com/W4MkZZ5k/Rave-Late-Event2.jpg"
                  title="Innovation Night"
                  alt="RaveLate Event 2"
                />
                <GalleryImage
                  className="aspect-[4/5]"
                  src="https://i.ibb.co.com/dwJ7Vfj6/Rave-Late-Event3.jpg"
                  title="Event Experience"
                  alt="RaveLate Event 3"
                />
                <GalleryImage
                  className="aspect-[4/5]"
                  src="https://i.ibb.co.com/Rn6SzNY/Rave-Late-Event4.jpg"
                  title="Networking Atmosphere"
                  alt="RaveLate Event 4"
                />
              </div>
            </div>

            {/* 4. Community */}
            <div className="space-y-10 group/section">
              <div className="max-w-3xl ml-auto text-right space-y-4 relative z-10">
                <div className="flex items-center justify-end gap-4">
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Community</h2>
                  <span className="text-4xl text-accent/30 font-bold">04</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pr-14">
                  Fostering a sense of belonging and cultural exchange within the student body, celebrating diversity.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 pr-0 md:pr-14">
                <GalleryImage
                  className="col-span-2 md:col-span-8 h-[300px] md:h-[450px]"
                  src="https://i.ibb.co.com/sJsq74fk/Community1.jpg"
                  title="Cultural Unity"
                  alt="Community 1"
                  imgClassName="object-contain w-full h-full"
                />
                <GalleryImage
                  className="col-span-2 md:col-span-4 h-[300px] md:h-[450px]"
                  src="https://i.ibb.co.com/gFPD6JP9/Community2.jpg"
                  title="Student Support"
                  alt="Community 2"
                  imgClassName="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* 5. Leadership */}
            <div className="space-y-10 group/section">
              <div className="max-w-2xl space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-accent/30 font-bold">05</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Leadership</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                  Developing management capabilities and taking initiative in academic and community projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pl-0 md:pl-14">
                <GalleryImage
                  className="md:col-span-8 aspect-[4/3]"
                  src="https://i.ibb.co.com/SDGFQcvS/leadership1.jpg"
                  title="Team Management"
                  alt="Leadership 1"
                />
                <GalleryImage
                  className="md:col-span-4 aspect-square md:aspect-auto"
                  src="https://i.ibb.co.com/QvPRy7NW/leadership2.jpg"
                  title="Strategic Initiative"
                  alt="Leadership 2"
                />
              </div>
            </div>

            {/* 6. I’m the publicity and publication Secretary of Our Bangladeshi Community */}
            <div className="space-y-10 group/section">
              <div className="max-w-3xl ml-auto text-right space-y-4 relative z-10">
                <div className="flex items-center justify-end gap-4">
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight">I’m the publicity and publication Secretary of Our Bangladeshi Community</h2>
                  <span className="text-4xl text-accent/30 font-bold">06</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pr-14">
                  Managing communications, digital presence, and community outreach for our cultural and academic initiatives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pr-0 md:pr-14">
                <GalleryImage
                  className="md:col-span-6 h-[300px] md:h-[400px]"
                  src="https://i.ibb.co.com/ccBHnM21/I-m-the-publicity-and-publication-Secretary-of-Our-Bangladeshi-Community2.jpg"
                  title="Community Outreach"
                  alt="Publicity and Publication Secretary 1"
                  imgClassName="object-contain w-full h-full"
                />
                <GalleryImage
                  className="md:col-span-6 h-[300px] md:h-[400px]"
                  src="https://i.ibb.co.com/rGs2HQLN/I-m-the-publicity-and-publication-Secretary-of-Our-Bangladeshi-Community1.jpg"
                  title="Digital Presence"
                  alt="Publicity and Publication Secretary 2"
                  imgClassName="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* 7. Presentation */}
            <div className="space-y-10 group/section">
              <div className="max-w-2xl space-y-4 relative z-10">
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-accent/30 font-bold">07</span>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Presentation</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-14">
                  Honing public speaking and strategic communication skills to deliver impactful business insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pl-0 md:pl-14">
                <GalleryImage
                  className="md:col-span-6 aspect-video"
                  src="https://i.ibb.co.com/BVsS4SMs/Presentation1.jpg"
                  title="Business Pitching"
                  alt="Presentation 1"
                />
                <GalleryImage
                  className="md:col-span-6 aspect-video"
                  src="https://i.ibb.co.com/bjkyfsNJ/Presentation2.jpg"
                  title="Strategic Delivery"
                  alt="Presentation 2"
                />
              </div>
            </div>

            {/* Looking Ahead */}
            <div className="pt-20 border-t border-border/50">
              <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
                <h2 className="font-heading text-4xl md:text-5xl font-bold">Looking Ahead</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My goal is to become a business consultant, gain real-world experience, and eventually start my own business. I continuously invest in skill-building to broaden my impact.
                </p>
              </div>

              <div className="flex justify-center">
                <GalleryImage
                  className="w-full max-w-xl"
                  src="https://i.ibb.co.com/yFgqtp4q/tamim-headshot-photo.jpg"
                  title="Professional Focus"
                  description="Building an impactful foundation for future business ventures."
                  alt="Professional Focus"
                  imgClassName="!h-auto object-contain object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Reflection;

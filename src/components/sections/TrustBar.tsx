import SectionWrapper from "@/components/ui/SectionWrapper";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { certifications } from "@/data/certifications";

export default function TrustBar() {
  return (
    <SectionWrapper id="credentials" className="py-12 border-t border-white/10 bg-white/[0.02]">
      <div className="text-center mb-8">
        <h2 className="text-xl font-mono font-semibold text-white">Security Credentials</h2>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-2">
              <ImagePlaceholder label={cert.name} className="w-full h-full rounded-md text-[10px]" />
            </div>
            <span className="text-xs font-mono text-gray-400 font-medium">{cert.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

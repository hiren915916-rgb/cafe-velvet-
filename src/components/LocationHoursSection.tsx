import React from 'react';
import { MapPin, Clock, Phone, Navigation, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

interface LocationHoursProps {
  onOpenReservation: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursProps> = ({ onOpenReservation }) => {
  // Calculate if cafe is currently open
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();
  
  // Mon-Fri: 8 AM to 11 PM (8 to 23)
  // Sat-Sun: 8 AM to 12 Midnight (8 to 24)
  const isWeekend = day === 0 || day === 6;
  const closingHour = isWeekend ? 24 : 23;
  const isOpen = hour >= 8 && hour < closingHour;

  return (
    <section id="location" className="py-20 bg-[#241B18] text-[#FAFAFA] relative border-t border-[#D4A373]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Address, Hours, Contact & Status */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Open / Closed Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181311] border border-[#D4A373]/30 text-xs font-bold">
              <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="text-[#FAFAFA]">
                {isOpen ? 'OPEN NOW • Pali Hill Bandra' : 'OPENING SOON • 08:00 AM'}
              </span>
              <span className="text-[#D4A373] text-[10px] font-mono">
                ({isWeekend ? 'Closing 12:00 AM' : 'Closing 11:00 PM'})
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FAFAFA]">
              VISIT OUR BANDRA OUTLET
            </h2>

            <p className="text-sm text-[#E5DFD3]/80 leading-relaxed font-normal">
              Located in the heart of Pali Hill, Bandra West. Unwind in our earthy warm lounge or sit under the neem trees on our outdoor deck with a fresh brew.
            </p>

            {/* Address & Hours Cards */}
            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="p-4 bg-[#181311] rounded-2xl border border-[#D4A373]/20 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#241B18] text-[#D4A373] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#D4A373]">
                    Outlet Address
                  </h4>
                  <p className="text-sm font-semibold text-[#FAFAFA] mt-0.5">
                    Cafe Velvet Bean, Pali Hill, Bandra West
                  </p>
                  <p className="text-xs text-[#E5DFD3]/70">
                    Mumbai, Maharashtra 400050 (Near Pali Market & Turner Road)
                  </p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-4 bg-[#181311] rounded-2xl border border-[#D4A373]/20 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#241B18] text-[#D4A373] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#D4A373]">
                    Opening Hours
                  </h4>
                  <div className="mt-1.5 space-y-1 text-xs">
                    <div className="flex justify-between text-[#E5DFD3]">
                      <span>Monday – Friday:</span>
                      <span className="font-bold text-[#FAFAFA]">08:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between text-[#E5DFD3]">
                      <span>Saturday – Sunday:</span>
                      <span className="font-bold text-[#D4A373]">08:00 AM – 12:00 Midnight</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone Contact Card */}
              <div className="p-4 bg-[#181311] rounded-2xl border border-[#D4A373]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#241B18] text-[#D4A373]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#D4A373] uppercase font-bold block">Direct Hotline</span>
                    <span className="text-xs font-bold text-[#FAFAFA]">+91 98200 12345</span>
                  </div>
                </div>
                <a
                  href="tel:+919820012345"
                  className="px-3 py-1.5 bg-[#332723] text-[#D4A373] rounded-lg text-xs font-bold hover:bg-[#D4A373] hover:text-[#241B18] transition-colors"
                >
                  Call Cafe
                </a>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Pali+Hill+Bandra+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#D4A373] text-[#241B18] font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#FAFAFA] transition-colors shadow-xl"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="flex items-center gap-2 px-6 py-3 bg-[#181311] text-[#FAFAFA] border border-[#D4A373]/50 font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#D4A373] hover:text-[#241B18] transition-colors shadow-xl"
              >
                <Calendar className="w-4 h-4 text-[#D4A373]" />
                <span>Book Table / Workshop</span>
              </button>
            </div>

          </div>

          {/* Right Column: Embedded Location Map Representation */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border-2 border-[#D4A373]/30 shadow-2xl h-[380px] bg-[#181311]">
            <iframe
              title="Cafe Velvet Bean Bandra West Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.832717013327!2d72.8286018758832!3d19.06208395213603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91350000001%3A0x1111111111111111!2sPali%20Hill%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(0.9)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#241B18]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#D4A373]/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4A373]" />
                <span className="font-bold text-[#FAFAFA]">Valet Parking Available</span>
              </div>
              <span className="text-[10px] text-[#D4A373] font-mono">Pali Hill, Bandra</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

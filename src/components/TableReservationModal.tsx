import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Coffee, CheckCircle } from 'lucide-react';
import { ReservationData } from '../types';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '11:00',
    guests: 2,
    seatingPreference: 'Indoor AC Lounge',
    specialNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#241B18] text-[#FAFAFA] rounded-3xl w-full max-w-lg p-6 sm:p-8 border border-[#D4A373]/30 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#332723] text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#D4A373] font-bold text-xs uppercase tracking-widest mb-1">
              <Coffee className="w-4 h-4" />
              <span>Bandra Outlet Table Booking</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl uppercase text-[#FAFAFA] mb-2">
              RESERVE YOUR TABLE
            </h3>

            <p className="text-xs text-[#E5DFD3]/80 mb-6">
              Guarantee your spot at Cafe Velvet Bean, Pali Hill. Perfect for remote work sprints, catch-ups, or weekend coffee tasting sessions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="font-bold uppercase text-[#D4A373] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rhea Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold uppercase text-[#D4A373] block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 focus:outline-none focus:border-[#D4A373]"
                  />
                </div>

                <div>
                  <label className="font-bold uppercase text-[#D4A373] block mb-1">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 focus:outline-none focus:border-[#D4A373]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold uppercase text-[#D4A373] block mb-1">Reservation Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 focus:outline-none focus:border-[#D4A373]"
                  />
                </div>

                <div>
                  <label className="font-bold uppercase text-[#D4A373] block mb-1">Time Slot</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 focus:outline-none focus:border-[#D4A373]"
                  >
                    {['08:30 AM', '10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM', '09:00 PM', '10:30 PM'].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold uppercase text-[#D4A373] block mb-1">Seating Area</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Indoor AC Lounge', 'Alfresco Pali Hill Deck', 'Barista Counter'].map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingPreference: pref as any })}
                      className={`p-2 rounded-xl text-[11px] font-bold border transition-all ${
                        formData.seatingPreference === pref
                          ? 'bg-[#D4A373] text-[#241B18] border-[#D4A373]'
                          : 'bg-[#181311] text-[#E5DFD3] border-[#D4A373]/20'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold uppercase text-[#D4A373] block mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="High-speed WiFi plug request, birthday coffee cake, etc."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#D4A373] text-[#241B18] font-black uppercase tracking-widest rounded-full hover:bg-[#FAFAFA] transition-colors shadow-xl mt-2"
              >
                Confirm Table Reservation
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#D4A373] text-[#241B18] rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-[#FAFAFA] uppercase">
              TABLE RESERVED!
            </h3>

            <p className="text-xs text-[#E5DFD3]/90 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-[#D4A373]">{formData.name}</strong>! We look forward to welcoming you to Cafe Velvet Bean in Pali Hill, Bandra West.
            </p>

            <div className="bg-[#181311] p-4 rounded-2xl border border-[#D4A373]/20 text-xs text-left space-y-1.5 max-w-sm mx-auto">
              <p><strong className="text-[#D4A373]">Guests:</strong> {formData.guests} Guests</p>
              <p><strong className="text-[#D4A373]">Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong className="text-[#D4A373]">Seating:</strong> {formData.seatingPreference}</p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#332723] text-[#D4A373] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#D4A373] hover:text-[#241B18] transition-colors"
            >
              Close Confirmation
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

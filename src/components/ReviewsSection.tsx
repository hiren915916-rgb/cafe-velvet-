import React, { useState } from 'react';
import { REVIEWS } from '../data/reviewsData';
import { Star, MessageSquarePlus, ThumbsUp, CheckCircle, X } from 'lucide-react';
import { Testimonial } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Bandra West, Mumbai');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [favoriteDrink, setFavoriteDrink] = useState('Velvet Latte');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name,
      location,
      rating,
      comment,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      favoriteDrink,
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowReviewModal(false);
    setName('');
    setComment('');
  };

  return (
    <section id="reviews" className="py-20 bg-[#F4F1EA] text-[#181311] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5DFD3] text-[#241B18] text-xs font-bold uppercase tracking-wider border border-[#241B18]/10 mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />
              <span>100% Verified Community Feedback</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#181311] uppercase tracking-tight">
              BANDRA SAYS
            </h2>

            <p className="text-base text-[#181311]/80 max-w-xl font-normal mt-2">
              See why remote workers, coffee aficionados, and Bandra locals call us their favorite neighborhood espresso bar.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#241B18] text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18] rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl self-start md:self-auto shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Leave A Review</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-7 bg-[#241B18] text-[#FAFAFA] rounded-3xl border border-[#D4A373]/20 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#D4A373] transition-all"
            >
              {/* Star Rating & Drink Tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s <= rev.rating
                          ? 'fill-[#D4A373] text-[#D4A373]'
                          : 'fill-transparent text-[#E5DFD3]/30'
                      }`}
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-[#D4A373]">
                    {rev.rating.toFixed(1)}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#332723] text-[#D4A373] px-3 py-1 rounded-full border border-[#D4A373]/20">
                  Fav: {rev.favoriteDrink}
                </span>
              </div>

              {/* Comment */}
              <p className="text-sm text-[#E5DFD3]/90 italic leading-relaxed font-serif-accent">
                "{rev.comment}"
              </p>

              {/* User Avatar & Name */}
              <div className="pt-3 border-t border-[#D4A373]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#D4A373]"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#FAFAFA] flex items-center gap-1">
                      <span>{rev.name}</span>
                      <CheckCircle className="w-3 h-3 text-[#D4A373]" />
                    </h4>
                    <p className="text-[10px] text-[#E5DFD3]/70">{rev.location}</p>
                  </div>
                </div>

                <span className="text-[10px] text-[#E5DFD3]/50">{rev.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#241B18] text-[#FAFAFA] rounded-3xl w-full max-w-md p-6 border border-[#D4A373]/30 shadow-2xl relative">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#332723] text-[#FAFAFA] hover:bg-[#D4A373] hover:text-[#241B18]"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display font-extrabold text-xl uppercase text-[#FAFAFA] mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#E5DFD3]/70 mb-5">
              Let the Bandra community know how much you enjoyed your brew at Cafe Velvet Bean.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase text-[#D4A373] block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rhea S."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 text-xs focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[#D4A373] block mb-1">Your Favorite Drink</label>
                <input
                  type="text"
                  placeholder="e.g., Velvet Latte or Nitro Cold Brew"
                  value={favoriteDrink}
                  onChange={(e) => setFavoriteDrink(e.target.value)}
                  className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 text-xs focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[#D4A373] block mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setRating(s)}
                      className="p-2 bg-[#181311] rounded-lg border border-[#D4A373]/30 hover:border-[#D4A373]"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          s <= rating ? 'fill-[#D4A373] text-[#D4A373]' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-[#D4A373] block mb-1">Review Message</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the coffee, ambience, or croissant..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-[#181311] text-[#FAFAFA] p-3 rounded-xl border border-[#D4A373]/30 text-xs focus:outline-none focus:border-[#D4A373]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#D4A373] text-[#241B18] font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#FAFAFA] transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

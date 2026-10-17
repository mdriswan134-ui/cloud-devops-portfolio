import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, Linkedin, Github, MapPin, Send, 
  CheckCircle2, Copy, Check, Clock, Sparkles, MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Cloud Engineer',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      // reset form
      setFormState({
        name: '',
        email: '',
        company: '',
        role: 'Cloud Engineer',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#090E1A] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-sky-400 mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>CONNECT DIRECTLY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Get in Touch & <span className="text-gradient">Discuss Opportunities</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring an AWS Certified Cloud Practitioner & DevOps Engineer? Reach out via the form, email, or direct telephone line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Live Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Box */}
            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Candidate Status</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
                  Ready to Join
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Location & Local Time (IST)</div>
                  <div className="text-sm font-bold text-white font-mono flex items-center gap-2 mt-0.5">
                    <span>Chennai, India</span>
                    <span className="text-sky-400">• {currentTime || 'Loading...'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Phone */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-4 flex items-center justify-between group hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-sky-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px]">Phone / WhatsApp</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-white font-bold hover:text-sky-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-4 flex items-center justify-between group hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px]">Email Address</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-white font-bold hover:text-sky-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  title="Copy Email Address"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-4 flex items-center justify-between group hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px]">LinkedIn Profile</div>
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-white font-bold hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/mdriswan134
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

              {/* GitHub */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-4 flex items-center justify-between group hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-purple-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px]">GitHub Repositories</div>
                    <a 
                      href={personalInfo.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-white font-bold hover:text-purple-400 transition-colors"
                    >
                      github.com/mdriswan134-ui
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Mohamed Riswan has received your notification and will follow up shortly at your email.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 mt-4 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-sky-400" />
                    <h3 className="text-lg font-bold text-white font-heading">
                      Direct Message Dispatcher
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Recruiter / Engineering Lead"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. AWS, Deloitte, Cognizant..."
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        Target Role Position
                      </label>
                      <select
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Cloud Engineer">Cloud Engineer (AWS)</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Cloud Associate">Cloud Associate / Fresher</option>
                        <option value="Linux Systems Engineer">Linux Systems Engineer</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Mohamed, we reviewed your AWS and DevOps portfolio and would like to discuss an opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-glow-primary transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Transmitting Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Mohamed Riswan</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

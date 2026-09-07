import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Direct and robust mailto submission
    const mailtoUrl = `mailto:vamsivenkata341@gmail.com?subject=${encodeURIComponent(
      subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSent(true);

    // Reset fields after a delay
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow (Hardware-Accelerated) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }}
      />

      <Container>
        <SectionTitle
          title="Get In Touch"
          subtitle="Interested in working together? Let's have a conversation about your next big idea."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-text/60 mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/40 mb-1">Email Me</div>
                  <a href="mailto:vamsivenkata341@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                    vamsivenkata341@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/40 mb-1">Socials</div>
                  <div className="text-lg font-medium">
                    Available on LinkedIn & Twitter
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Email Prepared!</h4>
                  <p className="text-text/60 text-sm max-w-sm leading-relaxed mb-4">
                    Your message has been pre-filled in your mail application. Please click **Send** in your email app to deliver it!
                  </p>
                  <span className="text-[10px] text-accent font-bold tracking-widest uppercase animate-pulse">
                    Redirecting to Mail Client...
                  </span>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text/60 ml-1">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text/60 ml-1">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text/60 ml-1">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text/60 ml-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none text-white"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 py-4">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { Contact };

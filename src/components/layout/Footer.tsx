import React from 'react';
import { Container } from './Container';
import { socials } from '../../constants/socials';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xl font-bold tracking-tight mb-2">
            <span className="text-accent">Venkata Vamsi</span> Pemmada
          </div>
          <p className="text-text/40 text-sm">
            © {new Date().getFullYear()} Venkata Vamsi Pemmada. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-colors"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export { Footer };

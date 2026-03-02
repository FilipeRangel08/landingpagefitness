"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Activity,
  Brain,
  MessageCircle,
  Quote,
  ArrowRight,
} from "lucide-react";

/* ──────────────────────────────────────────────
   FAQ Data
   ────────────────────────────────────────────── */
const faqs = [
  {
    q: "Tenho pouco tempo livre. Esse acompanhamento serve para mim?",
    a: "Sim. O treino é montado com base na sua disponibilidade. Um treino intenso e bem planejado de 40 minutos é infinitamente superior a 2 horas de exercícios sem foco.",
  },
  {
    q: "Funciona para quem é totalmente iniciante?",
    a: "Especialmente para iniciantes. Começar com a orientação correta evita vícios de movimento, previne lesões e acelera muito os seus primeiros resultados.",
  },
];

/* ──────────────────────────────────────────────
   FAQ Accordion Item
   ────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl font-medium text-zinc-200 pr-8 group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-zinc-400 leading-relaxed max-w-[640px]">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Page
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ═══════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center"
      >
        {/* Background image — right side / behind on mobile */}
        <div className="absolute inset-0 md:left-[45%] overflow-hidden">
          <Image
            src="/hero-trainer.png"
            alt="Filipe Rangel — Personal Trainer"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          {/* Gradient overlays for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/40 md:bg-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-0">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Tagline */}
            <p className="text-[var(--color-accent)] text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-6">
              Mentoria Fitness Individualizada
            </p>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-zinc-100 mb-8">
              Seu corpo não
              <br />
              precisa de atalhos.
              <br />
              <span className="text-zinc-500">Precisa de direção.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg mb-12">
              Esqueça as fichas genéricas e a sensação de estar perdido na
              academia. Um método de treinamento desenhado exclusivamente para a
              sua rotina, sua genética e os seus objetivos.
            </p>

            {/* CTA — Von Restorff: only colored element on page */}
            <a
              href="https://wa.me/5500000000000"
              id="cta-hero"
              className="group inline-flex items-center gap-3 bg-[var(--color-accent)] text-[#09090b] font-[family-name:var(--font-space-grotesk)] font-bold text-sm md:text-base px-8 py-4 hover:bg-[var(--color-accent-hover)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,255,20,0.25)] active:scale-[0.97]"
            >
              Quero conversar sobre meus objetivos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-zinc-600" />
          <ChevronDown className="w-4 h-4 text-zinc-600" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — A DOR (Pain)
          ═══════════════════════════════════════ */}
      <section id="pain" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Asymmetric layout: offset to the right */}
          <div className="md:ml-auto md:max-w-2xl lg:max-w-3xl">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-12">
              Você já se sentiu
              <br />
              <span className="text-zinc-500">invisível na academia?</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-[600px] mb-16">
              A rotina é quase sempre a mesma: você paga a mensalidade, recebe
              um treino padrão igual ao de dezenas de outras pessoas, e tenta
              descobrir sozinho se a execução do exercício está correta. A
              consequência natural disso?{" "}
              <span className="text-zinc-200 font-medium">
                Frustração, estagnação e abandono.
              </span>
            </p>

            {/* Pull quote — accent left border */}
            <blockquote className="relative border-l-2 border-[var(--color-accent)] pl-8 md:pl-12 py-2">
              <Quote className="absolute -left-3 -top-1 w-6 h-6 text-[var(--color-accent)] opacity-40" />
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl lg:text-3xl font-medium text-zinc-200 leading-snug">
                &ldquo;O problema nunca foi a sua falta de força de vontade. Foi
                a falta de um planejamento feito para você.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — A SOLUÇÃO (Solution / Method)
          ═══════════════════════════════════════ */}
      <section id="method" className="py-24 md:py-40 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-zinc-100 leading-tight mb-6">
            Como vamos transformar
            <br />
            sua relação com o treino
          </h2>
          <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-16 md:mb-24" />

          {/* Staggered cards — asymmetric vertical offset */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group md:mt-0 bg-zinc-900/60 border border-zinc-800 p-8 md:p-10 hover:border-zinc-700 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Activity className="w-6 h-6 text-[var(--color-accent)] mb-6" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100 mb-4">
                Avaliação Biomecânica
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Antes de cobrar suor, precisamos entender seu corpo. Mapeamos
                seu histórico, limitações e objetivos reais.
              </p>
            </div>

            {/* Card 2 — offset down */}
            <div className="group md:mt-12 bg-zinc-900/60 border border-zinc-800 p-8 md:p-10 hover:border-zinc-700 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Brain className="w-6 h-6 text-[var(--color-accent)] mb-6" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100 mb-4">
                Periodização Inteligente
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Treinos que evoluem junto com você. Sem monotonia, com estímulos
                precisos para hipertrofia ou emagrecimento.
              </p>
            </div>

            {/* Card 3 — offset more */}
            <div className="group md:mt-24 bg-zinc-900/60 border border-zinc-800 p-8 md:p-10 hover:border-zinc-700 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MessageCircle className="w-6 h-6 text-[var(--color-accent)] mb-6" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-zinc-100 mb-4">
                Suporte e Correção
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Acompanhamento de perto. Ajuste de cargas, análise de execução
                por vídeo e suporte direto via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — PROVA SOCIAL (Testimonials)
          ═══════════════════════════════════════ */}
      <section id="testimonials" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-zinc-100 leading-tight mb-6">
            Quem já parou de tentar
            <br />
            <span className="text-zinc-500">
              e começou a treinar de verdade.
            </span>
          </h2>
          <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-16 md:mb-24" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="relative border border-zinc-800 p-8 md:p-12">
              <Quote className="w-10 h-10 text-zinc-800 absolute top-6 right-6" />
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                &ldquo;Eu sempre odiei o ambiente de academia. O Filipe não me
                passou apenas um treino, ele adaptou os exercícios para o tempo
                que eu tinha (40 minutos por dia). Em 3 meses, tive mais
                resultado do que em 2 anos tentando sozinho.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-px h-8 bg-[var(--color-accent)]" />
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-zinc-200">
                    Marcos V.
                  </p>
                  <p className="text-zinc-500 text-sm">34 anos</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 — offset down */}
            <div className="relative border border-zinc-800 p-8 md:p-12 md:mt-12">
              <Quote className="w-10 h-10 text-zinc-800 absolute top-6 right-6" />
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                &ldquo;Achei que minha lesão no joelho me impediria de treinar
                pesado. Com o acompanhamento correto, hoje treino sem dor e
                recuperei minha massa muscular.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-px h-8 bg-[var(--color-accent)]" />
                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-zinc-200">
                    Camila T.
                  </p>
                  <p className="text-zinc-500 text-sm">28 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — SOBRE (About)
          ═══════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-40 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 md:gap-16 lg:gap-24 items-center">
            {/* Photo */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <Image
                src="/hero-trainer.png"
                alt="Filipe Rangel sorrindo de braços cruzados"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-accent)]" />
            </div>

            {/* Text */}
            <div>
              <p className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase font-medium mb-4">
                Sobre
              </p>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-zinc-100 leading-tight mb-8">
                Muito prazer,
                <br />
                sou Filipe Rangel.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                Sou especialista em Fisiologia do Exercício (CREF 000000-G/BR).
                Meu trabalho não é te deixar exausto ao final de cada sessão, é
                te deixar mais forte, saudável e confiante.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Acredito na ciência aplicada ao movimento e na consistência como
                o único caminho para resultados definitivos. Se você está
                disposto a fazer a sua parte, eu te entrego o mapa.
              </p>
              {/* Credential */}
              <div className="inline-flex items-center gap-3 border border-zinc-800 px-4 py-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                <span className="text-zinc-500 text-sm tracking-wide">
                  CREF 000000-G/BR · Fisiologia do Exercício
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — FAQ
          ═══════════════════════════════════════ */}
      <section id="faq" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-12 md:gap-16 lg:gap-24">
            {/* Left — Title */}
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-5xl font-bold text-zinc-100 leading-tight sticky top-24">
                Dúvidas
                <br />
                Frequentes
              </h2>
            </div>

            {/* Right — Accordion */}
            <div className="border-t border-zinc-800">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7 — FOOTER CTA + Footer
          ═══════════════════════════════════════ */}
      <footer id="footer" className="border-t border-zinc-800">
        {/* Final CTA */}
        <div className="py-24 md:py-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-100 leading-[1.05] mb-6">
              Pronto para o
              <br />
              primeiro passo?
            </h2>
            <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-md mx-auto">
              Vagas limitadas para consultoria neste mês para garantir o padrão
              de atendimento.
            </p>

            {/* CTA — Von Restorff: repeated at end (Serial Position) */}
            <a
              href="https://wa.me/5500000000000"
              id="cta-footer"
              className="group inline-flex items-center gap-3 bg-[var(--color-accent)] text-[#09090b] font-[family-name:var(--font-space-grotesk)] font-bold text-base md:text-lg px-10 py-5 hover:bg-[var(--color-accent-hover)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(57,255,20,0.3)] active:scale-[0.97]"
            >
              Agendar minha avaliação agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">
              © 2024 Filipe Rangel Personal. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-zinc-600 text-sm">
              <a
                href="#"
                className="hover:text-zinc-400 transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <span className="text-zinc-800">|</span>
              <a
                href="#"
                className="hover:text-zinc-400 transition-colors duration-300"
              >
                Políticas de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

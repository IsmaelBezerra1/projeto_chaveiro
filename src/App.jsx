import {
  Building2,
  Car,
  CheckCircle2,
  Clock3,
  Facebook,
  Home,
  Instagram,
  KeyRound,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Smile,
  Star,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import aboutImage from "./assets/dr-chaveiro-about.png";
import carServiceImage from "./assets/carro.jfif";
import lockInstallServiceImage from "./assets/fechadura.png";
import keyCopyServiceImage from "./assets/chaves.png";
import lockSecretServiceImage from "./assets/imagem.png";
import heroImage from "./assets/dr-chaveiro-hero.png";
import residentialServiceImage from "./assets/residencial.jfif";

const phoneDisplay = "(81) 98300-8074";
const phoneLink = "tel:+5581983008074";
const whatsAppLink =
  "https://wa.me/5581983008074?text=Ol%C3%A1%2C%20preciso%20de%20um%20chaveiro%2024%20horas%20em%20Recife.";

const mapUrl =
  "https://www.google.com/maps?q=R.%20Ant%C3%B4nio%20Carlos%20de%20Andrade%2C%2004%20-%20Madalena%2C%20Recife%20-%20PE&output=embed";

const services = [
  {
    title: "Abertura de Veículos",
    text: "Abertura de portas de carros nacionais e importados.",
    icon: Car,
    image: carServiceImage,
  },
  {
    title: "Abertura Residencial",
    text: "Abertura de portas, troca e reparo de fechaduras.",
    icon: Home,
    image: residentialServiceImage,
  },
  {
    title: "Empresas",
    text: "Soluções em segurança para empresas e comércios.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Cópia de Chaves",
    text: "Cópia de chaves simples, tetra e codificadas.",
    icon: KeyRound,
    image: keyCopyServiceImage,
  },
  {
    title: "Instalação de Fechaduras",
    text: "Instalação e ajuste de fechaduras comuns, digitais e eletrônicas.",
    icon: LockKeyhole,
    image: lockInstallServiceImage,
  },
  {
    title: "Troca de Segredo",
    text: "Troca do miolo e segredo da fechadura para reforçar sua segurança.",
    icon: ShieldCheck,
    image: lockSecretServiceImage,
  },
];

const stats = [
  { value: "24h", label: "Atendimento Emergencial", icon: Clock3 },
  { value: "+7 anos", label: "de Experiência", icon: ShieldCheck },
  { value: "+5000", label: "Clientes Atendidos", icon: UsersRound },
  { value: "100%", label: "Satisfação Garantida", icon: Smile },
];

const reasons = [
  {
    title: "Atendimento 24h",
    text: "Plantão todos os dias para urgências em Recife e região.",
    icon: Clock3,
  },
  {
    title: "Tecnicos Especializados",
    text: "Equipe preparada para serviços automotivos, residenciais e comerciais.",
    icon: UsersRound,
  },
  {
    title: "Chegada Rapida",
    text: "Deslocamento ágil para reduzir sua espera quando mais importa.",
    icon: Car,
  },
  {
    title: "Garantia de Servico",
    text: "Procedimentos cuidadosos, atendimento claro e compromisso com o resultado.",
    icon: ShieldCheck,
  },
];

const reviews = [
  {
    name: "Carlos M.",
    quote: "Chegou em menos de 20 minutos e resolveu meu problema rapidamente.",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Fernanda A.",
    quote: "Preço justo e um atendimento excelente. Super recomendo.",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Ricardo P.",
    quote: "Me atenderam na madrugada e fui muito bem atendido. Servico top.",
    image: "https://i.pravatar.cc/120?img=33",
  },
];

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="DR Chaveiro">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-night shadow-soft">
        <KeyRound className="h-8 w-8" strokeWidth={2.8} />
      </span>
      <span className="font-heading text-xl font-black leading-none tracking-normal">
        <span className="block text-gold">DR</span>
        <span className="block text-white">CHAVEIRO</span>
      </span>
    </a>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.02 3.2A12.76 12.76 0 0 0 5.19 22.7L3.5 28.8l6.26-1.64A12.75 12.75 0 1 0 16.02 3.2Zm0 23.34c-2.02 0-4-.57-5.7-1.66l-.41-.26-3.71.97.99-3.6-.27-.43a10.55 10.55 0 1 1 9.1 4.98Zm5.8-7.9c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.25-.61-.52-.52-.71-.53h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.14-1.51.27-.75.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function WhatsAppButton({ children = "Falar no WhatsApp", className = "" }) {
  return (
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 font-heading text-sm font-bold uppercase text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fb85a] focus:outline-none focus:ring-4 focus:ring-whatsapp/30 ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function CallCard({ className = "" }) {
  return (
    <a
      href={phoneLink}
      aria-label={`Ligar para DR Chaveiro no número ${phoneDisplay}`}
      className={`group flex items-center gap-4 rounded-2xl border border-gold/45 bg-white/[0.06] p-4 text-left shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-night focus:outline-none focus:ring-4 focus:ring-gold/30 ${className}`}
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-night transition group-hover:bg-night group-hover:text-gold">
        <Phone className="h-6 w-6" />
      </span>
      <span>
        <span className="block font-heading text-base font-black uppercase">Ligar agora</span>
        <span className="mt-1 block text-sm font-semibold opacity-85">{phoneDisplay}</span>
      </span>
    </a>
  );
}

function SectionTitle({ kicker, children, dark = true }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker && (
        <p className="mb-3 font-heading text-xs font-bold uppercase text-gold">{kicker}</p>
      )}
      <h2
        className={`font-heading text-3xl font-black uppercase tracking-normal md:text-4xl ${
          dark ? "text-white" : "text-night"
        }`}
      >
        {children}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gold" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <Header />

      <main className="flex flex-col">
        <Hero />
        <Stats />
        <Services />
        <WhyChoose />
        <Reviews />
        <About />
        <Location />
        <FinalCta />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    ["Início", "#inicio"],
    ["Serviços", "#servicos"],
    ["Avaliações", "#avaliacoes"],
    ["Sobre Nós", "#sobre"],
    ["Localização", "#localizacao"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 backdrop-blur">
      <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Menu principal">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="font-heading text-sm font-semibold text-white/85 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton>Chamar no WhatsApp</WhatsAppButton>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-xl bg-whatsapp text-white"
            aria-label="Chamar no WhatsApp"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menu mobile"
        className={`overflow-hidden border-t border-white/10 bg-night shadow-premium transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 font-heading text-sm font-bold uppercase text-white transition hover:border-gold/60 hover:text-gold"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const specialties = [
    "Carros",
    "Casas",
    "Empresas",
    "Cópia de Chaves",
    "Instalação de Fechaduras",
    "Troca de Segredo",
  ];

  return (
    <section
      id="inicio"
      className="order-1 relative isolate min-h-[620px] overflow-hidden bg-night md:min-h-[720px] lg:min-h-[760px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.48),rgba(13,13,13,0.95)_72%)] md:hidden" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center px-5 pb-14 pt-16 md:min-h-[720px] md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-0 lg:min-h-[760px]">
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <span className="mb-7 inline-flex rounded-full border border-gold/70 bg-gold/10 px-4 py-2 font-heading text-xs font-bold uppercase text-gold">
            Atendimento rápido e confiável
          </span>
          <h1 className="font-heading text-4xl font-black uppercase leading-tight tracking-normal text-white md:text-7xl">
            Chaveiro 24 Horas em <span className="text-gold">Recife</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white md:text-xl">
            Atendimento rápido em toda Região Metropolitana do Recife.
          </p>

          <div className="mt-7 md:hidden">
            <WhatsAppButton className="h-[72px] w-full animate-pulse rounded-2xl text-base shadow-[0_18px_42px_rgba(37,211,102,0.48)] ring-4 ring-whatsapp/20">
              Chamar agora no WhatsApp
            </WhatsAppButton>
            <CallCard className="mt-4 w-full text-white hover:text-night" />
            <p className="mt-3 text-center text-sm font-semibold text-white/75">
              Atendimento direto pelo WhatsApp, 24 horas.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {specialties.map((item) => (
              <div key={item} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 shrink-0 fill-gold text-night" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 hidden max-w-sm md:block">
            <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
            <CallCard className="mt-4 text-white hover:text-night" />
          </div>
        </div>

        <div className="relative hidden h-full items-center md:flex">
          <div className="absolute inset-y-0 right-[-8vw] w-[62vw] max-w-[960px]">
            <img
              src={heroImage}
              alt="Chaveiro profissional realizando atendimento em porta"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0D0D0D_0%,rgba(13,13,13,0.78)_18%,rgba(13,13,13,0.08)_56%,rgba(13,13,13,0)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="order-4 bg-gold py-7 text-night md:order-3">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 md:grid-cols-4 md:px-8">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={value}
            className="flex items-center gap-4 border-black/15 py-3 md:border-r md:last:border-r-0"
          >
            <Icon className="h-10 w-10 shrink-0" strokeWidth={2.3} />
            <div>
              <p className="font-heading text-2xl font-black leading-none">{value}</p>
              <p className="mt-1 text-sm font-bold leading-tight">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="order-3 bg-night px-5 py-16 md:order-4 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Alguns dos nossos serviços</SectionTitle>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, icon: Icon, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-coal shadow-premium"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.12),rgba(13,13,13,0.88))]" />
              </div>
              <div className="-mt-20 relative p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold text-night">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/78">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="order-5 border-y border-white/10 bg-night px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Por que escolher o DR Chaveiro</SectionTitle>
        <div className="grid gap-8 md:grid-cols-4">
          {reasons.map(({ title, text, icon: Icon }) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-gold/50 text-gold">
                <Icon className="h-9 w-9" />
              </div>
              <h3 className="font-heading text-lg font-bold">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/72">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="avaliacoes" className="order-6 bg-white px-5 py-16 text-night md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle dark={false}>O que nossos clientes dizem</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={`Foto de ${review.name}`}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-gold/25"
                />
                <div>
                  <div className="mb-1 flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-heading font-bold">{review.name}</p>
                </div>
              </div>
              <blockquote className="mt-5 text-base font-semibold leading-7 text-night/82">
                "{review.quote}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="order-7 bg-white px-5 pb-16 text-night md:px-8 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={aboutImage}
            alt="Equipe DR Chaveiro pronta para atendimento"
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <span className="mb-3 block h-1 w-16 rounded-full bg-gold" />
          <h2 className="font-heading text-3xl font-black uppercase tracking-normal md:text-4xl">
            Sobre a DR Chaveiro
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-night/78">
            <p>
              A DR CHAVEIRO nasceu com o propósito de oferecer soluções rápidas, seguras e
              confiáveis em serviços de chaveiro. Contamos com uma equipe altamente qualificada e
              equipamentos modernos para atender você com eficiência.
            </p>
            <p>
              Nosso compromisso é com a sua segurança e tranquilidade, oferecendo atendimento
              humanizado, ágil e com preço justo em Recife e Região Metropolitana.
            </p>
          </div>
          <WhatsAppButton className="mt-8">Falar no WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const contactItems = [
    { icon: MapPin, text: "R. Antônio Carlos de Andrade, 04 - Madalena" },
    { icon: Phone, text: phoneDisplay },
    { icon: Mail, text: "contato@drchaveiro.com.br" },
    { icon: Clock3, text: "Atendimento 24 horas" },
  ];

  return (
    <section id="localizacao" className="order-8 bg-white px-5 pb-16 text-night md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle dark={false}>Onde estamos</SectionTitle>

        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-stretch">
          <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
            <iframe
              title="Mapa da DR Chaveiro em Recife"
              src={mapUrl}
              className="h-[360px] w-full border-0 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl bg-night p-7 text-white shadow-premium">
            <h3 className="font-heading text-2xl font-black uppercase">Recife - PE</h3>
            <div className="mt-6 space-y-5">
              {contactItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span className="leading-7 text-white/82">{text}</span>
                </div>
              ))}
            </div>
            <WhatsAppButton className="mt-8 w-full">Chamar agora</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="order-9 bg-gold px-5 py-10 text-night md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-heading text-3xl font-black uppercase tracking-normal">
            Precisando de um chaveiro agora?
          </h2>
          <p className="mt-2 font-semibold">Atendemos toda Região Metropolitana do Recife.</p>
        </div>
        <WhatsAppButton className="w-full max-w-md md:w-auto">Chamar no WhatsApp</WhatsAppButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-night px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.9fr_1fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Soluções rápidas e confiáveis em chaveiro, segurança e atendimento emergencial em
            Recife.
          </p>
        </div>

        <FooterColumn title="Serviços">
          {services.map((service) => (
            <a key={service.title} href="#servicos">
              {service.title}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Contato">
          <span>{phoneDisplay}</span>
          <span>contato@drchaveiro.com.br</span>
          <span>Recife - PE</span>
          <span>Atendimento 24 horas</span>
        </FooterColumn>

        <FooterColumn title="Redes Sociais">
          <a href={whatsAppLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
            WhatsApp
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <Instagram className="h-4 w-4 text-gold" />
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
            <Facebook className="h-4 w-4 text-gold" />
            Facebook
          </a>
        </FooterColumn>
      </div>

      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-gold">
        © 2026 DR CHAVEIRO. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-bold uppercase text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-sm text-white/68">{children}</div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar DR Chaveiro no WhatsApp"
      className="fixed bottom-5 right-4 z-50 grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-white shadow-[0_16px_36px_rgba(37,211,102,0.42)] transition hover:-translate-y-1 hover:bg-[#1fb85a] focus:outline-none focus:ring-4 focus:ring-whatsapp/35 md:bottom-8 md:right-8 md:h-[72px] md:w-[72px]"
    >
      <WhatsAppIcon className="h-9 w-9 md:h-10 md:w-10" />
    </a>
  );
}

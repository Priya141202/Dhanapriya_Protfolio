import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Code2, UserRound, Target, BrainCircuit, Layers3, Network, Eye, MessageSquare,
  Settings, Database, Cpu, Rocket, Github, Linkedin, ExternalLink, Play,
  Monitor, ChartNoAxesColumnIncreasing, Flame, CalendarDays, Send, Sparkles,
  Terminal, Braces, Cloud, Bot, Mail, ArrowUpRight, CheckCircle2, Menu, X
} from 'lucide-react';
import './style.css';

const GITHUB_USERNAME = 'Priya141202'; // Replace with your GitHub username
const PROFILE = {
  name: 'DHANA PRIYA', role: 'AI & MACHINE LEARNING SPECIALIST',
  tagline: 'Building Intelligent Systems', subline: 'Solving Real-World Problems with AI',
  about: 'AI & Machine Learning Specialist focused on developing intelligent systems, exploring advanced computational technologies, and engineering practical AI-driven solutions.',
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: 'https://www.linkedin.com/in/dhana-priya-s-52082724b',
  email: 'dhanapriya988@gmail.com'
};

const expertise = [
  { icon: BrainCircuit, title: <>Artificial<br/>Intelligence</>, color: 'cyan' },
  { icon: Layers3, title: <>Machine<br/>Learning</>, color: 'violet' },
  { icon: Network, title: <>Deep<br/>Learning</>, color: 'pink' },
  { icon: Eye, title: <>Computer<br/>Vision</>, color: 'blue' },
  { icon: MessageSquare, title: <>Natural Language<br/>Processing</>, color: 'violet' },
  { icon: Settings, title: <>AI<br/>Automation</>, color: 'blue' },
];
const stacks = [
  { title: 'Programming & Development', icon: Code2, items: [['Python','🐍'],['HTML5','5'],['CSS3','3'],['JavaScript','JS'],['Git','◆'],['GitHub','◉'],['VS Code','▰']] },
  { title: 'AI / ML Frameworks', icon: Target, items: [['TensorFlow','✦'],['PyTorch','◉'],['OpenCV','◎'],['Scikit-learn','◒']] },
  { title: 'Data & Analytics', icon: Database, items: [['NumPy','▦'],['Pandas','▥'],['Excel','X'],['MySQL','⌁']] },
];
const projects = [
  { title: 'AI-Powered', subtitle: 'Gesture To Speech Converter', description: 'An intelligent gesture-based communication solution designed to translate hand movements into speech.', tags: ['Computer Vision','Gesture Recognition','AI','Speech Technology'], image: 'gesture', github: 'https://github.com/Priya141202', demo: '#' },
  { title: 'Voice Accessible', subtitle: 'Email System', description: 'An accessibility-focused application designed to make email interaction easier for visually impaired users through voice-based interaction.', tags: ['Speech Recognition','NLP','Text-to-Speech','Automation'], image: 'voice', github: 'https://github.com/Priya141202', demo: '#' },
];
const contributions = Array.from({length: 365}, (_,i) => ({ id:i, level: [0,0,0,0,1,1,2,3,4][Math.floor(Math.random()*9)] }));

function IconTile({ icon: Icon, title, color }) { return <div className={`expertise-tile ${color}`}><Icon size={34} strokeWidth={1.65}/><span>{title}</span></div>; }
function SectionTitle({ icon: Icon, number, children }) { return <h2 className="section-title"><Icon size={27}/><span>{number}. {children}</span></h2>; }
function HeaderArt() {
  return <div className="hero-art" aria-hidden="true">
    <div className="ai-orb"><div className="orb-grid"/><div className="orb-core">AI</div><div className="orb-ring"/></div>
    <div className="profile-figure"><div className="figure-head"/><div className="figure-neck"/><div className="figure-shoulder"/></div>
    <div className="hud hud-one"><span/><i/><i/><i/><i/><i/></div>
    <div className="hud hud-two"><Code2 size={25}/><span>MODEL OUTPUT</span></div>
    <div className="hud hud-three"><ChartNoAxesColumnIncreasing size={48}/><div className="bars">{[30,55,42,76,63,90,70].map((v,i)=><i key={i} style={{height:v}}/>)}</div></div>
    <div className="network-lines"/>
  </div>;
}
function Hero() {
  return <header className="hero">
    <div className="hero-copy"><Code2 className="hero-code" size={42}/><p className="eyebrow">PORTFOLIO / 2026</p>
      <h1>{PROFILE.name}</h1><h3>{PROFILE.role}</h3>
      <p className="hero-tagline"><Rocket size={17}/> {PROFILE.tagline}<b/> {PROFILE.subline}</p>
      <div className="hero-pills">{['AI Engineering','Machine Learning','Computer Vision','NLP','Intelligent Automation'].map((t,i)=><span key={t}><i>{[<BrainCircuit/>,<Cpu/>,<Eye/>,<MessageSquare/>,<Settings/>][i]}</i>{t}</span>)}</div>
    </div><HeaderArt/><div className="hero-wave"/>
  </header>;
}
function AboutAndExpertise() {
  return <div className="intro-grid">
    <section className="panel about-panel"><SectionTitle icon={UserRound} number="01">ABOUT ME</SectionTitle><p className="about-copy">{PROFILE.about}</p>
      <ul className="check-list">{['Design and build AI/ML models for real-world use cases','Work with Computer Vision and NLP applications','Develop intelligent and user-centric software solutions','Continuously learn, experiment, and innovate'].map(x=><li key={x}><CheckCircle2/>{x}</li>)}</ul>
    </section>
    <section className="panel expertise-panel"><SectionTitle icon={Target}>CORE EXPERTISE</SectionTitle><div className="expertise-grid">{expertise.map((e,i)=><IconTile key={i} {...e}/>)}</div></section>
  </div>;
}
function TechStack() {
  return <section className="panel tech-panel"><SectionTitle icon={Layers3} number="02">TECHNOLOGY ECOSYSTEM</SectionTitle><div className="stack-wrap">{stacks.map((group,i)=><div className="stack-group" key={group.title}><h3><group.icon/>{group.title}</h3><div className="stack-items">{group.items.map(([name,mark])=><div className={`tech-logo logo-${name.toLowerCase().replace(/[^a-z]/g,'')}`} key={name} title={name}><b>{mark}</b><small>{name}</small></div>)}</div></div>)}</div></section>;
}
function ProjectCard({project}) {
  return <article className={`project-card ${project.image}`}><div className="project-visual"><div className="visual-glow"/>{project.image==='gesture' ? <div className="hand-art">✋<div className="hand-rays"/></div> : <div className="voice-art"><div className="mic"><span/></div><div className="laptop"><Mail/><div className="sound-wave">〰〰〰</div></div></div>}</div>
    <div className="project-info"><h3>{project.title}<br/><strong>{project.subtitle}</strong></h3><p>{project.description}</p><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>
      <div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer"><Github/>View on GitHub</a><a className="demo" href={project.demo}><Play/>Live Demo</a></div></div></article>;
}
function Projects() { return <section className="panel projects-panel"><SectionTitle icon={Monitor} number="03">FEATURED AI PROJECTS</SectionTitle><div className="projects-grid">{projects.map(p=><ProjectCard key={p.subtitle} project={p}/>)}</div></section>; }
function Donut({percent=73}) { return <div className="donut"><div className="donut-inner"><span>🐍</span></div></div>; }
function GithubAnalytics() {
  const [stats,setStats] = useState({repos:5,followers:0,following:0,stars:0,contributions:19});
  useEffect(()=>{ if(!GITHUB_USERNAME || GITHUB_USERNAME==='YOUR_GITHUB_USERNAME') return; fetch(`https://api.github.com/users/${GITHUB_USERNAME}`).then(r=>r.ok?r.json():null).then(d=>d&&setStats(s=>({...s,repos:d.public_repos,followers:d.followers,following:d.following}))).catch(()=>{}); },[]);
  return <section className="panel analytics-panel"><SectionTitle icon={ChartNoAxesColumnIncreasing} number="04">GITHUB ANALYTICS</SectionTitle><div className="analytics-grid">
    <div className="analytics-card stats-card"><h3><Github/> {PROFILE.name}'s GitHub Stats</h3><div className="stats-content"><ul>{[['Total Contributions',stats.contributions],['Repositories',stats.repos],['Stars',stats.stars],['Followers',stats.followers],['Following',stats.following]].map(([k,v],i)=><li key={k}><span>{[<CalendarDays/>,<Layers3/>,<Sparkles/>,<UserRound/>,<ArrowUpRight/>][i]}{k}</span><b>{v}</b></li>)}</ul><div className="github-glow"><Github size={53}/></div></div></div>
    <div className="analytics-card language-card"><h3><ChartNoAxesColumnIncreasing/> Most Used Languages</h3><div className="language-content"><Donut/><ul>{[['Python','72.7%'],['HTML','13.6%'],['CSS','4.5%'],['JavaScript','4.5%'],['Other','4.7%']].map((x,i)=><li key={x[0]}><i className={`dot dot-${i}`}/>{x[0]}<b>{x[1]}</b></li>)}</ul></div></div>
    <div className="analytics-card streak-card"><h3><Flame/> Current Streak</h3><div className="streak-pill"><CalendarDays/><strong>2</strong><b>Days</b></div><p>Longest Streak: <strong>2 Days</strong></p><div className="streak-wave"/></div>
  </div></section>;
}
function Contributions() {
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'];
  return <section className="panel contribution-panel"><SectionTitle icon={CalendarDays} number="05">CONTRIBUTION ACTIVITY</SectionTitle><div className="contribution-chart"><div className="month-row">{months.map(m=><span key={m}>{m}</span>)}</div><div className="contrib-body"><div className="weekdays"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="contrib-grid">{contributions.map(c=><i key={c.id} className={`level-${c.level}`}/>)}</div><div className="legend"><span>Less</span><i className="level-0"/><i className="level-1"/><i className="level-2"/><i className="level-4"/><span>More</span></div></div></div></section>;
}
function Connect() {
  return <section className="panel connect-panel"><SectionTitle icon={Send} number="06">LET’S CONNECT</SectionTitle><div className="connect-content"><div className="connect-illustration"><div className="plant">✦<span>♧</span></div><div className="desk-laptop"><Bot/><b>AI</b><i>INTELLIGENCE</i></div><div className="book-stack">▰<br/>▰</div></div><div className="connect-message"><h3>CONNECT. COLLABORATE. INNOVATE.</h3><p>Interested in meaningful technology, AI-driven innovation, and opportunities to build intelligent solutions.</p><div className="connect-buttons"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github/>Explore GitHub</a><a className="linkedin" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin/>Connect on LinkedIn</a></div></div><blockquote><span>“</span>Innovation begins where curiosity meets intelligent engineering.”</blockquote></div></section>;
}
function App() {
  return <main className="dashboard"><Hero/><div className="content"><AboutAndExpertise/><TechStack/><Projects/><GithubAnalytics/><Contributions/><Connect/><footer>DESIGNED WITH <span>✦</span> FOR THE FUTURE OF INTELLIGENCE <b>© 2026</b></footer></div></main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

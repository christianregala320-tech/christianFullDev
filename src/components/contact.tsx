import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Clipboard, Mail, MessageSquareText, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

function Contact() {
    const reduceMotion = useReducedMotion();
    const [name, setName] = useState("");
    const [projectType, setProjectType] = useState("Website");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const brief = `Hi Christian,\n\nI'm ${name.trim()}. I'd like to discuss a ${projectType.toLowerCase()} project.\n\n${message.trim()}`;

    function openEmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        window.location.href = `mailto:christianregala320@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${projectType}`)}&body=${encodeURIComponent(brief)}`;
        setStatus("Your email app should open with the brief ready to send.");
    }

    async function copyBrief() {
        try {
            await navigator.clipboard.writeText(brief);
            setStatus("Copied! Your project brief is ready to share.");
        } catch {
            setStatus("Could not copy automatically. Please select and copy your message below.");
        }
    }

    return (
        <main className="min-h-screen text-white">
            <header className="flex w-full items-center justify-between p-3">
                <div className="flex items-center gap-4">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#21D461]" />
                    <span className="font-plex text-xs text-[#21D461]">05 / CONTACT</span>
                </div>
                <Link to="/" aria-label="Back to home" className="text-[#21D461]">
                    <ArrowUpRight size={24} />
                </Link>
            </header>

            <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:items-start md:gap-16 md:py-24">
                <motion.section initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <p className="font-plex text-xs uppercase tracking-widest text-[#21D461]">Have an idea?</p>
                    <h1 className="mt-5 font-raleway text-5xl font-semibold leading-tight md:text-7xl">Let's build<br /><span className="text-[#21D461]">something.</span></h1>
                    <p className="mt-6 max-w-md font-plex text-sm leading-7 text-[#9C9C9C]">Tell me a little about your project, whether it's a new website, an application, or an idea you'd like to explore.</p>
                    <div className="mt-10 flex items-start gap-4 rounded-xl border border-[#253329] bg-[#131713] p-5">
                        <div className="rounded-full bg-[#1D3525] p-3 text-[#21D461]"><MessageSquareText size={20} /></div>
                        <div><p className="font-raleway font-semibold">Start with the details</p><p className="mt-1 font-plex text-xs leading-6 text-[#9C9C9C]">Put together a short brief and open it in your email app when you're ready.</p></div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-5 font-plex text-sm text-[#9CCBAB]">
                        <a href="mailto:christianregala320@gmail.com" className="inline-flex items-center gap-2 hover:text-[#21D461]"><Mail size={18} /> christianregala320@gmail.com</a>
                        <a href="https://github.com/christianregala-320-tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#21D461]"><SiGithub size={18} /> GitHub <ArrowUpRight size={14} /></a>
                    </div>
                </motion.section>

                <motion.form onSubmit={openEmail} initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12 }} className="space-y-5 rounded-2xl border border-[#253329] bg-[#131713] p-6 font-plex sm:p-8">
                    <div><p className="text-xs uppercase tracking-widest text-[#21D461]">Project brief</p><h2 className="mt-2 font-raleway text-2xl font-semibold">Tell me about it.</h2></div>
                    <label className="block text-xs text-[#9CCBAB]">Your name
                        <input required value={name} onChange={event => { setName(event.target.value); setStatus(""); }} placeholder="What should I call you?" className="mt-2 w-full rounded-lg border border-[#2A3B2E] bg-[#0B110D] p-3 text-sm text-white outline-none focus:border-[#21D461]" />
                    </label>
                    <label className="block text-xs text-[#9CCBAB]">What are you working on?
                        <select value={projectType} onChange={event => { setProjectType(event.target.value); setStatus(""); }} className="mt-2 w-full rounded-lg border border-[#2A3B2E] bg-[#0B110D] p-3 text-sm text-white outline-none focus:border-[#21D461]">
                            <option>Website</option><option>Web application</option><option>Mobile application</option><option>Other</option>
                        </select>
                    </label>
                    <label className="block text-xs text-[#9CCBAB]">Project details
                        <textarea required rows={5} value={message} onChange={event => { setMessage(event.target.value); setStatus(""); }} placeholder="Tell me about your idea, goals, or timeline..." className="mt-2 w-full resize-y rounded-lg border border-[#2A3B2E] bg-[#0B110D] p-3 text-sm text-white outline-none focus:border-[#21D461]" />
                    </label>
                    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#21D461] px-5 py-3 text-sm font-semibold text-[#080808] hover:bg-[#64e690]">
                        <Send size={18} /> Open email draft
                    </button>
                    <button type="button" onClick={copyBrief} className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A3B2E] px-5 py-3 text-sm text-[#9CCBAB] hover:border-[#21D461]">
                        {status.startsWith("Copied") ? <Check size={18} /> : <Clipboard size={18} />} Copy project brief
                    </button>
                    <p role="status" className="min-h-5 text-xs leading-5 text-[#9CCBAB]">{status || "Your email app will open a draft for you to review and send."}</p>
                </motion.form>
            </div>
        </main>
    );
}

export default Contact;

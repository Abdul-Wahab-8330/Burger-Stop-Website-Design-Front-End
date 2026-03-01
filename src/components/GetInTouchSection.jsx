import { useState, useRef } from "react";
import toast from "react-hot-toast";

export default function GetInTouchSection() {
    const [loading, setLoading] = useState(false);
    const lastSubmitRef = useRef(0);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "", // honeypot
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!form.name.trim()) return "Name is required";
        if (!form.email.includes("@")) return "Valid email is required";
        if (!form.phone.trim()) return "Phone number is required";
        if (form.message.length < 10) return "Message must be at least 10 characters";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🛑 Honeypot → bot
        if (form.company) return;

        // 🕒 Rate limit (15 seconds)
        const now = Date.now();
        if (now - lastSubmitRef.current < 15000) {
            toast.error("Please wait a moment before sending again.");
            return;
        }

        const error = validate();
        if (error) {
            toast.error(error);
            return;
        }

        setLoading(true);
        lastSubmitRef.current = now;

        // 🚧 TEMP — replace later with EmailJS / API
        setTimeout(() => {
            toast.success("Message ready to send (service not connected yet)");
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
                company: "",
            });
            setLoading(false);
        }, 800);
    };

    return (
        <section className="w-full bg-secondary py-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">

                {/* LEFT INFO */}
                <div className="text-white">
                    <h2 className="font-medium text-[42px] md:text-[64px] leading-[1] mb-6">
                        Get in Touch
                    </h2>

                    <div className="text-sm opacity-90 space-y-2">
                        <p className="font-bold">BURGER STOP HQ</p>
                        <p>Orchard House, Orchard Place, Sale M33 7YB</p>
                        <p>T: 0161 973000</p>
                        E: <a
                            href="mailto:eat@burgerstop.co.uk"
                            className="underline hover:opacity-80"
                        >
                            eat@burgerstop.co.uk
                        </a>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Honeypot */}
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="hidden"
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    <div>
                        <label className="text-xs text-white opacity-70">Name*</label>
                        <input
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-white/40 px-4 py-3 text-white focus:outline-none"
                            placeholder="Name Surname"
                        />
                    </div>

                    <div>
                        <label className="text-xs text-white opacity-70">Email*</label>
                        <input
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-white/40 px-4 py-3 text-white focus:outline-none"
                            placeholder="example_name@gmail.com"
                        />
                    </div>

                    <div>
                        <label className="text-xs text-white opacity-70">Phone Number*</label>
                        <input
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-white/40 px-4 py-3 text-white focus:outline-none"
                            placeholder="+44 0123456789"
                        />
                    </div>

                    <div>
                        <label className="text-xs text-white opacity-70">Your message*</label>
                        <textarea
                            name="message"
                            value={form.message}
                            required
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-transparent border border-white/40 px-4 py-3 text-white focus:outline-none resize-none"
                            placeholder="Your message"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-primary font-spatial-black uppercase py-3 tracking-wide hover:opacity-90 transition disabled:opacity-60"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}
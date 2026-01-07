import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 from-white to-orange-50"
    >
      <div className="max-w-6xl mx-auto text-gray-900">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">
            Let’s connect and discuss how we can work together.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT — Contact Form */}
          <div className="lg:col-span-2 bg-white border border-orange-100 rounded-xl p-8 shadow-md">
            <h3 className="text-lg font-semibold mb-6">
              Send me a message
            </h3>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project or inquiry..."
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "bg-orange-300 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                } text-white font-medium px-6 py-3 rounded-lg transition shadow-sm`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT — Info Cards */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4">
                Direct Contact
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:lalitha.pottabathini.29@gmail.com"
                  className="block border border-orange-200 rounded-lg px-4 py-3 text-gray-700 hover:bg-orange-50 hover:border-orange-300 transition"
                >
                  <span className="font-medium">Email</span>
                  <br />
                </a>

                <a
                  href="https://www.linkedin.com/in/lalitha29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-orange-200 rounded-lg px-4 py-3 text-gray-700 hover:bg-orange-50 hover:border-orange-300 transition"
                >
                  <span className="font-medium">LinkedIn</span>
                  <br />
                </a>

                <a
                  href="https://github.com/LalithaPottabathini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-orange-200 rounded-lg px-4 py-3 text-gray-700 hover:bg-orange-50 hover:border-orange-300 transition"
                >
                  <span className="font-medium">GitHub</span>
                  <br />
                </a>
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">
                Download Resume
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get a copy of my resume for detailed experience.
              </p>
              <a
                href="https://drive.google.com/file/d/1-O2u2AWG7wcfWg2cXI3NL8cLyPOBhsRI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-3 rounded-lg transition"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-white border border-orange-100 rounded-xl p-8 text-center shadow-md">
          <p className="text-gray-700 mb-4">
            Looking forward to hearing from you!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:lalitha.pottabathini.29@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg text-sm transition"
            >
              Email Me Directly
            </a>
            <a
              href="#projects"
              className="border border-orange-200 hover:bg-orange-50 text-orange-600 px-5 py-3 rounded-lg text-sm transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Message Sent Successfully 🎉
            </h3>

            <p className="text-gray-600 mb-6">
              Thank you for reaching out. I’ll get back to you soon.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

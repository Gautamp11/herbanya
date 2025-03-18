const ContactSection = () => {
  return (
    <section className="py-20 px-6  text-center">
      <h2 className="text-3xl font-bold text-secondary mb-6">Get in Touch</h2>
      <p className="text-lg text-teritary max-w-2xl mx-auto mb-6">
        Have questions or want to know more about our products? Reach out to us!
      </p>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 mb-4 border rounded-lg"
          rows="4"
        ></textarea>
        <button className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow-md hover:bg-green-800 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

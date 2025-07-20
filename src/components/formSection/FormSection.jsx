import "./formSection.scss";

export const FormSection = () => {
  return (
    <section className="form-section">
      <div className="form-section__inner container">
        <form className="form-section__form">
          <input
            className="form-section__input"
            type="email"
            name="email"
            placeholder="You email"
            required
          />
          <input
            className="form-section__input"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <textarea
            className="form-section__textarea"
            name="message"
            rows="6"
            placeholder="Your message"
            required
          />
          <button className="form-section__button" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

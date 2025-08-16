import "./marquee.scss";

export const Marquee = ({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`marquee ${
        vertical ? "marquee--vertical" : "marquee--horizontal"
      } ${className}`}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`marquee__item ${
            vertical ? "marquee__item--vertical" : "marquee__item--horizontal"
          } ${pauseOnHover ? "marquee__item--paused" : ""} ${
            reverse ? "marquee__item--reverse" : ""
          }`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

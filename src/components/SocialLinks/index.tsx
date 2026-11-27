import iconInstagram from "@/assets/images/icon-instagram.png";

const socialLinks = [
  {
    href: "https://www.instagram.com/instalocutores/",
    icon: iconInstagram,
    name: "Instagram",
  },
];

export const SocialLinks = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center text-center"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <p
        className="mb-4 text-xl font-medium text-surface-alt"
        style={{ textAlign: "center", width: "100%" }}
      >
        Redes Sociais
      </p>

      <ul
        className="flex items-center justify-center gap-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        {socialLinks.map(({ href, icon, name }) => (
          <li key={name} style={{ listStyle: "none" }}>
            <a
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img src={icon} alt={name} className="h-8 w-8 object-contain" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
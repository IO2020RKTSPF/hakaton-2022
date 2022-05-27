import styles from "./Icon.module.scss";

type type = "menu" | "arrow";

function Icon({ type }: { type: type }) {
  const commonProps = {
    className: styles.icon,
  };

  switch (type) {
    case "menu": {
      return (
        <svg
          {...commonProps}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 12H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 17H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    case "arrow": {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...commonProps}
        >
          <path
            d="M18 12L18.7071 12.7071L19.4142 12L18.7071 11.2929L18 12ZM12.7071 18.7071L18.7071 12.7071L17.2929 11.2929L11.2929 17.2929L12.7071 18.7071ZM18.7071 11.2929L12.7071 5.29289L11.2929 6.70711L17.2929 12.7071L18.7071 11.2929Z"
            fill="white"
          />
          <path
            d="M12 12L12.7071 12.7071L13.4142 12L12.7071 11.2929L12 12ZM6.70711 18.7071L12.7071 12.7071L11.2929 11.2929L5.29289 17.2929L6.70711 18.7071ZM12.7071 11.2929L6.70711 5.29289L5.29289 6.70711L11.2929 12.7071L12.7071 11.2929Z"
            fill="white"
          />
        </svg>
      );
    }
  }
}

export default Icon;

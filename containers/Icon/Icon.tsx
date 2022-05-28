import styles from "./Icon.module.scss";

type type = "menu" | "arrow" | "plus" | "clock";

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
    case "plus": {
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z" fill="#f37a51"/>
        </svg>

      )
    }
    case "clock": {
      return (
        <svg {...commonProps} width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="7" stroke="#f37a51" strokeWidth="2"/>
          <path d="M5.96472 3.1363C5.2865 3.31803 4.66807 3.67508 4.17157 4.17157C3.67508 4.66807 3.31803 5.2865 3.1363 5.96472" stroke="#f37a51" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472" stroke="#f37a51" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 8V11.75C12 11.8881 12.1119 12 12.25 12H15" stroke="#f37a51" strokeWidth="2" strokeLinecap="round"/>
        </svg>

      )
    }
  }
}

export default Icon;

export const MenuIcon = ({ width = 20, height = 13, className = "" }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 13"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.5" width="20" height="2" rx="1" fill="currentColor" />
    <rect y="10.5" width="20" height="2" rx="1" fill="currentColor" />
  </svg>
);

export const UserIcon = ({ width = 24, height = 25, className = "" }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.5" width="24" height="24" rx="12" fill="#857DB1" />
    <path
      d="M6 16.4998V17.8332C6 18.5696 6.59695 19.1665 7.33333 19.1665H16.6667C17.403 19.1665 18 18.5696 18 17.8332V16.4998C18 14.6589 16.5076 13.1665 14.6667 13.1665H9.33333C7.49238 13.1665 6 14.6589 6 16.4998Z"
      fill="#EFEFEF"
    />
    <circle cx="12" cy="8.8335" r="3" fill="#EFEFEF" />
  </svg>
);

export const CloseIcon = ({ width = 40, height = 40, className = "" }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#9E99CE" />
    <rect
      x="13.4141"
      y="12.1421"
      width="20"
      height="2"
      rx="1"
      transform="rotate(45 13.4141 12.1421)"
      fill="white"
    />
    <rect
      x="12.4141"
      y="26.1421"
      width="20"
      height="2"
      rx="1"
      transform="rotate(-45 12.4141 26.1421)"
      fill="white"
    />
  </svg>
);

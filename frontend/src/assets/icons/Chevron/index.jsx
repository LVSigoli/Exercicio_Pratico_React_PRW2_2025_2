export const Chevron = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || '#000'}
      d="M20 16.75a.74.74 0 0 1-.53-.22L12 9.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 0l8 8a.75.75 0 0 1-.53 1.28Z"
    />
  </svg>
)

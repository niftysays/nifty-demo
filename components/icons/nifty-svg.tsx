import { FC } from "react"

interface NiftySVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const NiftySVG: FC<NiftySVGProps> = ({ theme, scale = 1 }) => {
  return (
    <svg
      width={76 * scale}
      height={49 * scale}
      viewBox="0 0 76 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 0C26 3.31371 23.3137 6 20 6C23.3137 6 26 8.68629 26 12C26 8.68629 28.6863 6 32 6C28.6863 6 26 3.31371 26 0Z"
        fill="#0C73FE"
      />
      <path d="M46 38V18H42V14H46V4H50V14H54V18H50V38H46Z" fill="#0C73FE" />
      <path
        d="M32 38V14C32 8.47715 36.4772 4 42 4V8C38.6863 8 36 10.6863 36 14H40V18H36V38H32Z"
        fill="#0C73FE"
      />
      <path d="M24 38V14H28V38H24Z" fill="#0C73FE" />
      <path
        d="M0 23V38H4V23C4 19.6863 6.68629 17 10 17C13.3137 17 16 19.6863 16 23V38H20V23C20 17.4772 15.5228 13 10 13C4.47715 13 0 17.4772 0 23Z"
        fill="#0C73FE"
      />
      <path
        d="M76 39C76 44.5228 71.5229 49 66 49V45C69.3137 45 72 42.3137 72 39V37.0007C70.3287 38.2561 68.2512 39 66 39C60.4772 39 56 34.5228 56 29V14H60V29C60 32.3137 62.6863 35 66 35C69.3137 35 72 32.3137 72 29V14H76V39Z"
        fill="#0C73FE"
      />
    </svg>
  )
}

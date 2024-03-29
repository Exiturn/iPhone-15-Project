import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14px"
    height="18px"
    className="xl:hidden fill-gray-200 transition duration-300 ease-in-out hover:fill-white cursor-pointer"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M11.692 9.545c.024 2.718 2.283 3.623 2.308 3.635-.02.063-.36 1.289-1.19 2.555-.716 1.094-1.46 2.185-2.632 2.207-1.151.023-1.521-.713-2.838-.713-1.315 0-1.727.69-2.817.736-1.13.044-1.992-1.184-2.714-2.274C.332 13.46-.796 9.388.719 6.639c.753-1.365 2.098-2.23 3.558-2.252 1.11-.022 2.158.78 2.837.78.679 0 1.953-.965 3.292-.823.56.025 2.134.237 3.144 1.782-.08.053-1.877 1.146-1.858 3.419ZM9.53 2.869c.6-.76 1.004-1.817.894-2.869-.865.036-1.912.603-2.533 1.362-.556.672-1.043 1.748-.912 2.779.965.078 1.95-.513 2.55-1.272Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent

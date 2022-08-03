import React from "react"


const SmallBird = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="200"
            height="90"
            viewBox="0 0 200 90"
            className="bird-icon"
        >
            <defs>
                <path
                    id="a2IucPW2gk"
                    d="M75.4 4.01c-4-1.73-19.05 28.02-19.08 32.29-.02 2.84 8.68 17.96 26.09 45.36l39.58.26C93.6 31.13 78.07 5.16 75.4 4.01z"
                ></path>
                <path
                    id="a1SoHFmbdP"
                    d="M39.47 57.72c-.13-1.03 4.13-6.76 12.78-17.19l9.96 18.01c-15.02.49-22.6.21-22.74-.82z"
                ></path>
                <path id="n3CwrOaBb6" d="M66.16 86.06l41.73-1.9"></path>
                <path
                    id="aZOxYHDNf"
                    d="M160.35 40.13c-1.73-1.1-18.96 1.64-51.68 8.21l18.71 32.81c23.71-26.24 34.7-39.91 32.97-41.02z"
                ></path>
            </defs>
            {/* body */}
            <use fill="#fff" xlinkHref="#a2IucPW2gk"></use>
            <use
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="1"
                xlinkHref="#a2IucPW2gk"
            ></use>
            {/* beak */}
            <use fill="#fff" xlinkHref="#a1SoHFmbdP"></use>
            <use
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="1"
                xlinkHref="#a1SoHFmbdP"
            ></use>
            {/* body outline */}
            <g>
                <use
                    fill="#fff"
                    fillOpacity="0"
                    stroke="#000"
                    strokeWidth="0"
                    xlinkHref="#n3CwrOaBb6"
                ></use>
            </g>
            <g>
                <use fill="#fff" xlinkHref="#aZOxYHDNf"></use>
                <use
                    fillOpacity="0"
                    stroke="#fff"
                    strokeWidth="1"
                    xlinkHref="#aZOxYHDNf"
                ></use>
            </g>
        </svg>
    )
}
export default SmallBird

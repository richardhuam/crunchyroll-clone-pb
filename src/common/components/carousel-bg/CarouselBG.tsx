import * as ReactDOMServer from 'react-dom/server';

const GreenSVG = () => {
  return (
    <svg
      className="hero-carousel-background__blue-asset--tnymX"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2440 2102"
      data-t="hero-carousel-blue-svg"
      aria-labelledby="hero-carousel-blue-svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="hero-carousel-blue-svg">Decoration</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M1034.49 1C1558.882 1 2037.187-24.606 2102 482c-187.609-254.74-535.09-2.856-875.79-2.856-569.125 0-1030.49 461.216-1030.49 1030.154 0 44.719 2.85 88.772 8.378 131.988C78.322 1470.502 4 1259.505 4 1031.155 4 462.216 465.366 1 1034.49 1z"
          fill="#269495"
          fillOpacity=".3"
        ></path>
        <g fill="#213944" fillOpacity=".1">
          <path d="M590 2255C198 2048-6 1328 480 799c-990 823-139.233 1640-139.233 1640S478 2268 590 2255zM1700 1445c-266-174-378-430-378-1163-74.406-107.16-193.739-72.827-358 103 12 514.667 257.333 868 736 1060z"></path>
        </g>
      </g>
    </svg>
  );
};

const OrangeSVG = () => {
  return (
    <svg
      className="hero-carousel-background__blue-asset--tnymX"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2440 2102"
      data-t="hero-carousel-blue-svg"
      aria-labelledby="hero-carousel-blue-svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="hero-carousel-blue-svg">Decoration</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M1034.49 1C1558.882 1 2037.187-24.606 2102 482c-187.609-254.74-535.09-2.856-875.79-2.856-569.125 0-1030.49 461.216-1030.49 1030.154 0 44.719 2.85 88.772 8.378 131.988C78.322 1470.502 4 1259.505 4 1031.155 4 462.216 465.366 1 1034.49 1z"
          fill="#F47521"
          fillOpacity=".3"
        ></path>
        <g fill="#fab818" fillOpacity=".1">
          <path d="M590 2255C198 2048-6 1328 480 799c-990 823-139.233 1640-139.233 1640S478 2268 590 2255zM1700 1445c-266-174-378-430-378-1163-74.406-107.16-193.739-72.827-358 103 12 514.667 257.333 868 736 1060z"></path>
        </g>
      </g>
    </svg>
  );
};

export const CarouselBgGreenSVG = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(<GreenSVG />));
export const CarouselBgOrangeSVG = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(<OrangeSVG />));

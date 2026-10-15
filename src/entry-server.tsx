import { renderToString } from "react-dom/server";
import App from "./App";
export { publicRoutes, headHtml, metadata } from "./lib/seo";
export function render(path:string){return renderToString(<App location={path}/>);}

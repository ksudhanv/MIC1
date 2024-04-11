import * as React from "react"
import "../main.css"
import { Link } from "gatsby"
export default function HomePage() {
  return (
    <body>
    <div class="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>
      </ul>
    </div>
    <h1>Starship Central</h1>
    <p>Have you ever wanted to soar amongst the stars, only to have your dreams crushed by the fact that you're BROKE? Well, you're in luck! Starship Central has a vessel waiting with your name on it!</p>
    <h3>Disclaimer: these ships are not JRCCAVNASI certified and in accordance with our terms and services, we are not liable to any injuries or accidents caused</h3>
    </body>
  )
}


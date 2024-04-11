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
  <h1>About</h1>
  <p>Have you ever wanted to soar among the stars? For the low, one-time, non refundable fee of $5000000000, you can! So what are you waiting for? schedule an appointment NOW!</p>
</body>
  )
}
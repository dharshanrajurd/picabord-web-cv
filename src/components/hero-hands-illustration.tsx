/**
 * Original stylised illustration: a human hand (left) and a robotic hand (right)
 * reaching toward each other, fingertips about to meet in a cyan glow.
 * Used as the hero fallback until /public/hero-hands.jpg is added.
 * Pure SVG + CSS animation (see globals.css), no JavaScript.
 */

const particles = [
  [540, 250, 1.6, "0s"], [655, 262, 1.2, "1.2s"], [610, 228, 2, "2.4s"], [575, 352, 1.4, "0.6s"],
  [690, 330, 1.8, "3s"], [520, 318, 1.1, "1.8s"], [632, 372, 1.5, "4s"], [560, 205, 1.2, "5s"],
  [720, 240, 1.3, "2s"], [480, 270, 1.7, "3.6s"], [760, 300, 1, "4.6s"], [450, 350, 1.2, "1s"],
] as const;

export function HeroHandsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-labelledby="hero-illus-title"
    >
      <title id="hero-illus-title">
        A human hand and a robotic hand reach toward each other, with a cyan glow where their fingertips are about to touch.
      </title>
      <defs>
        <radialGradient id="h-bg" cx="50%" cy="50%" r="65%">
          <stop offset="0" stopColor="#0c1a2e" />
          <stop offset="0.55" stopColor="#060b16" />
          <stop offset="1" stopColor="#03060d" />
        </radialGradient>
        <radialGradient id="h-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e9fdff" stopOpacity="1" />
          <stop offset="0.12" stopColor="#7cf0ff" stopOpacity="0.95" />
          <stop offset="0.4" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="h-skin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1b130f" />
          <stop offset="0.45" stopColor="#5a3e31" />
          <stop offset="0.8" stopColor="#9b705b" />
          <stop offset="1" stopColor="#c99f87" />
        </linearGradient>
        <linearGradient id="h-skin-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="h-metal" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#070c16" />
          <stop offset="0.5" stopColor="#1a2539" />
          <stop offset="1" stopColor="#3b4b66" />
        </linearGradient>
        <linearGradient id="h-metal-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#53647f" />
          <stop offset="0.35" stopColor="#202c42" />
          <stop offset="1" stopColor="#0a101c" />
        </linearGradient>
        <linearGradient id="h-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="1" stopColor="#7cf0ff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="h-rim-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="1" stopColor="#7cf0ff" stopOpacity="0.9" />
        </linearGradient>
        <filter id="h-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <rect width="1200" height="600" fill="url(#h-bg)" />

      {/* Circuit traces radiating from the contact point */}
      <g fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.28">
        <path className="hero-circuit" d="M600 300 H700 L740 250 H900 L930 220 H1200" />
        <path className="hero-circuit" d="M600 300 H690 L730 360 H880 L910 400 H1200" />
        <path className="hero-circuit" d="M600 300 V180 L640 140 H820 L860 100 H1200" />
        <path className="hero-circuit" d="M600 300 H500 L460 240 H300 L270 200 H0" />
        <path className="hero-circuit" d="M600 300 V440 L560 480 H360 L320 520 H0" />
      </g>
      <g fill="#22d3ee" opacity="0.5">
        <circle cx="740" cy="250" r="3" />
        <circle cx="730" cy="360" r="3" />
        <circle cx="640" cy="140" r="3" />
        <circle cx="460" cy="240" r="3" />
        <circle cx="560" cy="480" r="3" />
      </g>

      {/* Robotic hand — enters from the right edge */}
      <g className="hero-hand-right">
        {/* forearm */}
        <path d="M1230 236 L985 262 Q960 266 958 292 L960 336 Q962 360 990 360 L1230 362 Z" fill="url(#h-metal)" />
        <path d="M1230 250 L995 272" stroke="#7cf0ff" strokeOpacity="0.35" strokeWidth="1.5" />
        <path d="M1050 300 H1180" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <path d="M1020 270 V352 M1110 262 V358" stroke="#0a101c" strokeWidth="2" />
        {/* wrist joint */}
        <circle cx="955" cy="314" r="26" fill="url(#h-metal-v)" stroke="#7cf0ff" strokeOpacity="0.3" />
        <circle cx="955" cy="314" r="9" fill="#06b6d4" opacity="0.7" />
        {/* palm plate */}
        <path d="M940 280 Q942 268 926 268 L846 276 Q830 278 828 296 L830 352 Q832 376 856 378 L912 372 Q936 368 938 348 Z" fill="url(#h-metal-v)" />
        <path d="M846 276 L926 268" stroke="#7cf0ff" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M850 306 L920 300" stroke="#0a101c" strokeWidth="2" />
        {/* curled fingers */}
        <g fill="url(#h-metal-v)" stroke="#7cf0ff" strokeOpacity="0.18">
          <rect x="800" y="322" width="44" height="22" rx="10" transform="rotate(-8 822 333)" />
          <rect x="790" y="345" width="36" height="20" rx="9" transform="rotate(28 808 355)" />
          <rect x="812" y="352" width="42" height="21" rx="10" transform="rotate(-4 833 362)" />
          <rect x="806" y="374" width="32" height="18" rx="8" transform="rotate(34 822 383)" />
        </g>
        {/* thumb */}
        <rect x="826" y="342" width="70" height="20" rx="10" fill="#1f2b40" transform="rotate(-14 861 352)" />
        {/* index finger — three segments */}
        <circle cx="822" cy="300" r="14" fill="url(#h-metal-v)" stroke="#7cf0ff" strokeOpacity="0.4" />
        <rect x="748" y="285" width="66" height="30" rx="9" fill="url(#h-metal-v)" />
        <circle cx="740" cy="300" r="10" fill="#26344d" stroke="#7cf0ff" strokeOpacity="0.45" />
        <rect x="676" y="287" width="58" height="26" rx="8" fill="url(#h-metal-v)" />
        <circle cx="669" cy="300" r="8.5" fill="#26344d" stroke="#7cf0ff" strokeOpacity="0.45" />
        <path d="M662 289 H626 Q612 289 612 300 Q612 311 626 311 H662 Z" fill="url(#h-metal-v)" />
        {/* rim light from glow */}
        <path d="M612 300 Q612 289 626 289 H662 M676 287 H734 M748 285 H812" fill="none" stroke="url(#h-rim-r)" strokeWidth="1.6" />
        <circle cx="618" cy="300" r="2.5" fill="#bff8ff" />
      </g>

      {/* Human hand — enters from the left edge */}
      <g className="hero-hand-left">
        <path
          d="M-30 338 C100 333 220 328 300 321 C352 315 402 304 446 299 C492 295 540 291 568 290 C583 290 590 299 586 309 C582 317 569 318 556 318 C530 319 502 321 478 324 C492 331 500 343 492 353 C484 363 463 363 450 359 C470 367 474 381 462 389 C450 397 432 393 424 387 C438 399 434 414 416 418 C398 422 380 419 360 421 C318 429 258 433 200 435 C120 438 48 441 -30 444 Z"
          fill="url(#h-skin)"
        />
        <path
          d="M-30 338 C100 333 220 328 300 321 C352 315 402 304 446 299 C492 295 540 291 568 290 C583 290 590 299 586 309 C582 317 569 318 556 318 C530 319 502 321 478 324 C492 331 500 343 492 353 C484 363 463 363 450 359 C470 367 474 381 462 389 C450 397 432 393 424 387 C438 399 434 414 416 418 C398 422 380 419 360 421 C318 429 258 433 200 435 C120 438 48 441 -30 444 Z"
          fill="url(#h-skin-shade)"
        />
        {/* thumb */}
        <path
          d="M372 356 C404 343 446 337 476 339 C491 340 496 351 486 357 C460 368 420 374 390 375 C374 376 362 362 372 356 Z"
          fill="#7e5a49"
        />
        <path d="M380 352 C410 343 448 339 474 341" fill="none" stroke="#c99f87" strokeOpacity="0.45" strokeWidth="1.2" />
        {/* knuckle and finger creases */}
        <path d="M520 293 Q522 304 518 316 M470 299 Q474 308 470 322" fill="none" stroke="#2a1d17" strokeOpacity="0.5" strokeWidth="1.2" />
        {/* rim light on the top edge, strongest near the fingertip */}
        <path d="M300 321 C352 315 402 304 446 299 C492 295 540 291 568 290 C583 290 590 299 586 309" fill="none" stroke="url(#h-rim)" strokeWidth="1.8" />
        <circle cx="582" cy="302" r="2.5" fill="#bff8ff" />
      </g>

      {/* Contact glow */}
      <g style={{ mixBlendMode: "screen" }}>
        <circle className="hero-glow" cx="600" cy="300" r="120" fill="url(#h-glow)" opacity="0.8" />
        <circle cx="600" cy="300" r="16" fill="#e9fdff" filter="url(#h-blur)" />
        <circle cx="600" cy="300" r="3.5" fill="#ffffff" />
      </g>

      {/* Particles */}
      <g fill="#7cf0ff">
        {particles.map(([cx, cy, r, delay], i) => (
          <circle key={i} className="hero-particle" cx={cx} cy={cy} r={r} style={{ animationDelay: delay }} />
        ))}
      </g>
    </svg>
  );
}

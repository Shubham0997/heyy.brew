import { useState } from 'react';
import styles from './Roasting.module.css';
import roastingHeroImg from '../../assets/coffeeRoastPage/coffeeRoast.png';
import lightRoastImg from '../../assets/coffeeRoastPage/lightRoast.png';
import mediumRoastImg from '../../assets/coffeeRoastPage/mediumRoast.png';
import darkRoastImg from '../../assets/coffeeRoastPage/darkRoast.png';
import tasteCoffeeImg from '../../assets/coffeeRoastPage/tasteCoffee.png';

const roastGuide = [
    {
        id: 'light',
        icon: 'brightness_high',
        title: 'Bright & Fruity',
        desc: 'You enjoy tea-like clarity and berry notes.',
        badge: 'Light Roast',
        detail: 'Light roasts preserve origin character. Best with pour-over or AeroPress. Look for Ethiopian and Kenyan single-origins.',
    },
    {
        id: 'medium',
        icon: 'balance',
        title: 'Sweet & Balanced',
        desc: 'You want caramel sweetness without bitterness.',
        badge: 'Medium Roast',
        detail: 'Medium roasts balance sweetness and body. Great with drip, Chemex, or French press. Try Colombian or Guatemalan beans.',
    },
    {
        id: 'dark',
        icon: 'local_cafe',
        title: 'Bold & Intense',
        desc: 'You love a heavy body and smoky finish.',
        badge: 'Dark Roast',
        detail: 'Dark roasts deliver bold, roast-forward flavor. Ideal for espresso and moka pot. Sumatran and Brazilian blends shine here.',
    },
];

const Roasting = () => {
    const [selectedRoast, setSelectedRoast] = useState<string | null>(null);
    return (
        <div className={`${styles.roasting} container`}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    {/* Left Text Block */}
                    <div className={styles.heroText}>
                        <span className={styles.eyebrow}>THE TRANSFORMATION</span>

                        <h1 className={styles.headline}>
                            Roasting —
                        </h1>
                        <div className={styles.dash} />
                        <h2 className={styles.subheadline}>
                            Where Flavor<br />Awakens
                        </h2>

                        <p className={styles.heroParagraph}>
                            Roasting unlocks the potential of the green coffee bean.
                            Through heat application, Maillard reactions, and caramelization,
                            complex chemical changes transform raw seeds into aromatic,
                            flavorful coffee.
                        </p>

                        <div className={styles.tagRow}>
                            <div className={styles.tagItem}>
                                <span className={styles.tagIcon}>
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                </span>
                                <span className={styles.tagLabel}>Heat Application</span>
                            </div>
                            <span className={styles.tagDivider} />
                            <span className={styles.tagLabel}>Flavor Development</span>
                        </div>
                    </div>

                    {/* Right Image Block */}
                    <div className={styles.heroImage}>
                        <img
                            src={roastingHeroImg}
                            alt="Coffee beans roasting in a drum roaster"
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </div>
            </section>

            {/* ─── Inside the Bean ─── */}
            <section className={styles.insideSection}>
                <div className={styles.insideHeader}>
                    <h2 className={styles.insideTitle}>Inside the Bean</h2>
                    <p className={styles.insideSubtext}>
                        The alchemy of roasting involves four critical stages of transformation.
                    </p>
                </div>

                <div className={styles.insideGrid}>
                    {/* Heat Transfer */}
                    <div className={styles.insideCard}>
                        <div className={styles.insideCardIcon}>
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                        <h3 className={styles.insideCardTitle}>Heat Transfer</h3>
                        <p className={styles.insideCardDesc}>
                            Energy moves from the roaster drum into the bean. Internal temperature
                            rises, initiating the drying phase and setting the stage for chemical
                            transformation.
                        </p>
                    </div>

                    {/* Chemical Reactions */}
                    <div className={styles.insideCard}>
                        <div className={styles.insideCardIcon}>
                            <span className="material-symbols-outlined">science</span>
                        </div>
                        <h3 className={styles.insideCardTitle}>Chemical Reactions</h3>
                        <p className={styles.insideCardDesc}>
                            Maillard reactions and caramelization occur as sugars and amino acids
                            interact, creating hundreds of aromatic compounds responsible for
                            sweetness, depth, and complexity.
                        </p>
                    </div>

                    {/* Moisture Loss */}
                    <div className={styles.insideCard}>
                        <div className={styles.insideCardIcon}>
                            <span className="material-symbols-outlined">water_drop</span>
                        </div>
                        <h3 className={styles.insideCardTitle}>Moisture Loss</h3>
                        <p className={styles.insideCardDesc}>
                            Beans lose water weight and expand in size. Their color shifts from
                            green to yellow to brown as structure changes internally.
                        </p>
                    </div>

                    {/* Aroma Development */}
                    <div className={styles.insideCard}>
                        <div className={styles.insideCardIcon}>
                            <span className="material-symbols-outlined">air</span>
                        </div>
                        <h3 className={styles.insideCardTitle}>Aroma Development</h3>
                        <p className={styles.insideCardDesc}>
                            Volatile gases like CO₂ form inside the bean. These trapped gases
                            carry the rich aroma and flavor compounds that define freshly
                            roasted coffee.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── The Roast Curve ─── */}
            <section className={styles.curveSection}>
                <div className={styles.curveCard}>
                    {/* Left: Text + Legend */}
                    <div className={styles.curveText}>
                        <h2 className={styles.curveTitle}>The Roast Curve</h2>
                        <p className={styles.curveDesc}>
                            Roasting is a delicate balance of time and temperature.
                            The "S-Curve" represents bean temperature throughout the roast,
                            revealing the critical phases where flavor is built.
                        </p>

                        <div className={styles.curveLegend}>
                            <div className={styles.legendItem}>
                                <span className={styles.legendPill} style={{ backgroundColor: 'rgba(218, 165, 32, 0.7)' }} />
                                <div className={styles.legendContent}>
                                    <span className={styles.legendName}>Drying Phase</span>
                                    <span className={styles.legendDetail}>Moisture evaporation</span>
                                </div>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={styles.legendPill} style={{ backgroundColor: 'rgba(193, 154, 107, 0.85)' }} />
                                <div className={styles.legendContent}>
                                    <span className={styles.legendName}>Maillard Zone</span>
                                    <span className={styles.legendDetail}>Sugar browning reactions</span>
                                </div>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={styles.legendPill} style={{ backgroundColor: 'rgba(139, 90, 43, 0.85)' }} />
                                <div className={styles.legendContent}>
                                    <span className={styles.legendName}>Development</span>
                                    <span className={styles.legendDetail}>Flavor formation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: SVG Chart */}
                    <div className={styles.curveChart}>
                        <svg
                            viewBox="0 0 520 320"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.curveSvg}
                        >
                            <defs>
                                <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#8B5A2B" />
                                    <stop offset="60%" stopColor="#C19A6B" />
                                    <stop offset="100%" stopColor="#8B5A2B" />
                                </linearGradient>
                                <filter id="curveGlow">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Faint grid */}
                            {[70, 130, 190, 250].map((y) => (
                                <line key={`h-${y}`} x1="60" y1={y} x2="490" y2={y}
                                    stroke="rgba(139,90,43,0.06)" strokeWidth="1" />
                            ))}
                            {[140, 220, 300, 380, 460].map((x) => (
                                <line key={`v-${x}`} x1={x} y1="40" x2={x} y2="270"
                                    stroke="rgba(139,90,43,0.06)" strokeWidth="1" />
                            ))}

                            {/* Phase zone bands */}
                            <rect x="60" y="40" width="150" height="230" rx="4"
                                fill="rgba(218,165,32,0.05)" />
                            <rect x="210" y="40" width="150" height="230" rx="4"
                                fill="rgba(193,154,107,0.06)" />
                            <rect x="360" y="40" width="130" height="230" rx="4"
                                fill="rgba(139,90,43,0.06)" />

                            {/* Axes */}
                            <line x1="60" y1="270" x2="490" y2="270"
                                stroke="rgba(139,90,43,0.2)" strokeWidth="1.5" />
                            <line x1="60" y1="40" x2="60" y2="270"
                                stroke="rgba(139,90,43,0.2)" strokeWidth="1.5" />

                            {/* Y-axis ticks + labels */}
                            {[
                                { y: 250, label: '100°C' },
                                { y: 190, label: '150°C' },
                                { y: 130, label: '200°C' },
                                { y: 70, label: '250°C' },
                            ].map((t) => (
                                <g key={t.label}>
                                    <line x1="55" y1={t.y} x2="60" y2={t.y}
                                        stroke="rgba(139,90,43,0.25)" strokeWidth="1" />
                                    <text x="50" y={t.y + 4} textAnchor="end"
                                        className={styles.axisLabel}>{t.label}</text>
                                </g>
                            ))}

                            {/* X-axis ticks */}
                            {[140, 220, 300, 380, 460].map((x) => (
                                <line key={`xt-${x}`} x1={x} y1="270" x2={x} y2="275"
                                    stroke="rgba(139,90,43,0.25)" strokeWidth="1" />
                            ))}

                            {/* Axis titles */}
                            <text x="30" y="155" textAnchor="middle"
                                transform="rotate(-90,30,155)"
                                className={styles.axisTitle}>TEMP (°C)</text>
                            <text x="275" y="300" textAnchor="middle"
                                className={styles.axisTitle}>TIME (min)</text>

                            {/* The S-Curve */}
                            <path
                                d="M 70 255 C 100 250, 130 245, 160 230 C 190 215, 210 200, 240 175 C 270 150, 300 120, 340 95 C 370 78, 400 68, 430 60 C 450 55, 470 52, 485 50"
                                fill="none"
                                stroke="url(#curveGrad)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                filter="url(#curveGlow)"
                                className={styles.curvePath}
                            />

                            {/* Annotation dots */}
                            <circle cx="175" cy="222" r="4" fill="rgba(218,165,32,0.8)" />
                            <circle cx="350" cy="90" r="4" fill="#8B5A2B" />
                            <circle cx="450" cy="55" r="4.5" fill="#8B5A2B"
                                stroke="rgba(139,90,43,0.3)" strokeWidth="6" />

                            {/* Micro annotations */}
                            <text x="175" y="243" textAnchor="middle"
                                className={styles.annotationLabel}>~150°C Yellowing</text>
                            <text x="350" y="82" textAnchor="middle"
                                className={styles.annotationLabel}>~196°C First Crack</text>
                            <text x="435" y="42" textAnchor="end"
                                className={styles.annotationSmall}>Development Time Ratio</text>
                        </svg>
                    </div>
                </div>
            </section>

            {/* ─── Roast Levels ─── */}
            <section className={styles.levelsSection}>
                <div className={styles.levelsHeader}>
                    <h2 className={styles.levelsTitle}>Roast Levels</h2>
                    <p className={styles.levelsSubtext}>
                        From the bright acidity of a light roast to the smoky depth of a dark roast.
                    </p>
                    <span className={styles.levelsNote}>
                        Roast level affects flavor expression — not origin quality.
                    </span>
                </div>

                <div className={styles.levelsGrid}>
                    {/* Light Roast */}
                    <div className={`${styles.levelCard} ${styles.levelCardLight}`}>
                        <div className={styles.levelImageWrap}>
                            <img src={lightRoastImg} alt="Light roast coffee beans" className={styles.levelImage} />
                            <div className={`${styles.levelOverlay} ${styles.overlayLight}`} />
                        </div>
                        <div className={styles.levelBody}>
                            <h3 className={styles.levelName}>Light Roast</h3>
                            <p className={styles.levelDesc}>
                                Retains the bean's original character. Bright, floral, and fruity
                                with high acidity and no oil on the surface. Best for
                                showcasing single-origin terroir.
                            </p>
                            <div className={styles.levelTags}>
                                <span className={styles.levelPill}>Cinnamon</span>
                                <span className={styles.levelPill}>New England</span>
                            </div>
                            <div className={styles.levelMeta}>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">brightness_high</span>
                                    <span className={styles.metaLabel}>Acidity</span>
                                    <span className={styles.metaValue}>High</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">opacity</span>
                                    <span className={styles.metaLabel}>Body</span>
                                    <span className={styles.metaValue}>Light</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">bolt</span>
                                    <span className={styles.metaLabel}>Caffeine</span>
                                    <span className={styles.metaValue}>Slightly more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Medium Roast */}
                    <div className={`${styles.levelCard} ${styles.levelCardMedium}`}>
                        <div className={styles.levelImageWrap}>
                            <img src={mediumRoastImg} alt="Medium roast coffee beans" className={styles.levelImage} />
                            <div className={`${styles.levelOverlay} ${styles.overlayMedium}`} />
                        </div>
                        <div className={styles.levelBody}>
                            <h3 className={styles.levelName}>Medium Roast</h3>
                            <p className={styles.levelDesc}>
                                Balanced flavor, aroma, and acidity. Caramel sweetness emerges
                                as sugars begin to caramelize. Still no oil on the surface.
                                The most versatile roast profile.
                            </p>
                            <div className={styles.levelTags}>
                                <span className={styles.levelPill}>City</span>
                                <span className={styles.levelPill}>American</span>
                            </div>
                            <div className={styles.levelMeta}>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">brightness_high</span>
                                    <span className={styles.metaLabel}>Acidity</span>
                                    <span className={styles.metaValue}>Medium</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">opacity</span>
                                    <span className={styles.metaLabel}>Body</span>
                                    <span className={styles.metaValue}>Medium</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">bolt</span>
                                    <span className={styles.metaLabel}>Caffeine</span>
                                    <span className={styles.metaValue}>Balanced</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dark Roast */}
                    <div className={`${styles.levelCard} ${styles.levelCardDark}`}>
                        <div className={styles.levelImageWrap}>
                            <img src={darkRoastImg} alt="Dark roast coffee beans" className={styles.levelImage} />
                            <div className={`${styles.levelOverlay} ${styles.overlayDark}`} />
                        </div>
                        <div className={styles.levelBody}>
                            <h3 className={styles.levelName}>Dark Roast</h3>
                            <p className={styles.levelDesc}>
                                Bold, smoky, and bittersweet. Lower acidity with oils visible
                                on the surface. Origin flavors recede as roast character
                                dominates. Deep and dramatic.
                            </p>
                            <div className={styles.levelTags}>
                                <span className={styles.levelPill}>French</span>
                                <span className={styles.levelPill}>Italian</span>
                            </div>
                            <div className={styles.levelMeta}>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">brightness_high</span>
                                    <span className={styles.metaLabel}>Acidity</span>
                                    <span className={styles.metaValue}>Low</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">opacity</span>
                                    <span className={styles.metaLabel}>Body</span>
                                    <span className={styles.metaValue}>Heavy</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className="material-symbols-outlined">bolt</span>
                                    <span className={styles.metaLabel}>Caffeine</span>
                                    <span className={styles.metaValue}>Slightly less</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Roast Spectrum Bar */}
                <div className={styles.spectrumWrap}>
                    <div className={styles.spectrumBar}>
                        <span className={styles.spectrumDot} style={{ left: '15%' }} />
                        <span className={styles.spectrumDot} style={{ left: '50%' }} />
                        <span className={styles.spectrumDot} style={{ left: '85%' }} />
                    </div>
                    <div className={styles.spectrumLabels}>
                        <span>Light</span>
                        <span>Medium</span>
                        <span>Dark</span>
                    </div>
                </div>

                <p className={styles.levelsMicro}>
                    Caffeine differences are minimal when measured by weight.
                </p>
            </section>

            {/* ─── Find Your Perfect Roast ─── */}
            <section className={styles.guideSection}>
                <div className={styles.guideCard}>
                    {/* Left: Text + Selection Cards */}
                    <div className={styles.guideLeft}>
                        <span className={styles.guideEyebrow}>VISUAL GUIDE</span>
                        <h2 className={styles.guideTitle}>Find Your Perfect Roast</h2>
                        <p className={styles.guideSubtext}>
                            Not sure what to pick? Match your taste preference to the roast level.
                        </p>
                        <span className={styles.guideMicro}>
                            Taste preference is the best starting point.
                        </span>

                        <div className={styles.guideOptions}>
                            {roastGuide.map((item) => (
                                <div key={item.id}>
                                    <div
                                        className={`${styles.guideOption} ${selectedRoast === item.id ? styles.guideOptionActive : ''
                                            }`}
                                        onClick={() =>
                                            setSelectedRoast(
                                                selectedRoast === item.id ? null : item.id
                                            )
                                        }
                                    >
                                        <div className={styles.guideOptionLeft}>
                                            <div className={styles.guideIconWrap}>
                                                <span className="material-symbols-outlined">
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <div className={styles.guideOptionText}>
                                                <span className={styles.guideOptionTitle}>
                                                    {item.title}
                                                </span>
                                                <span className={styles.guideOptionDesc}>
                                                    {item.desc}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={styles.guideBadge}>{item.badge}</span>
                                        {selectedRoast === item.id && (
                                            <span className={styles.guideAccentBar} />
                                        )}
                                    </div>
                                    {selectedRoast === item.id && (
                                        <div className={styles.guideDetail}>
                                            <span className={`material-symbols-outlined ${styles.guideCheckIcon}`}>
                                                check_circle
                                            </span>
                                            <p>{item.detail}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Lifestyle Image */}
                    <div className={styles.guideImageWrap}>
                        <img
                            src={tasteCoffeeImg}
                            alt="Coffee tasting flight on wooden tray"
                            className={styles.guideImage}
                        />
                        <div className={styles.guideImageOverlay} />
                        <span className={styles.guideImageCaption}>Flavor is personal.</span>
                    </div>
                </div>
            </section>

            {/* ─── Techniques & Machinery ─── */}
            <section className={styles.techSection}>
                <div className={styles.techHeader}>
                    <h2 className={styles.techTitle}>Techniques & Machinery</h2>
                    <div className={styles.techDivider} />
                    <p className={styles.techSubtext}>
                        The tool is as important as the craftsman.
                    </p>
                </div>

                <div className={styles.techGridWrap}>
                    <div className={styles.techGrid}>
                        {/* Drum Roasting */}
                        <div className={styles.techCard}>
                            <div className={styles.techIconWrap}>
                                <span className="material-symbols-outlined">settings</span>
                            </div>
                            <span className={styles.techTag}>Conduction + Convection</span>
                            <h3 className={styles.techName}>Drum Roasting</h3>
                            <p className={styles.techDesc}>
                                Beans tumble in a rotating heated drum. Conductive heat creates
                                a fuller body and richer development. The classic method used by
                                most specialty roasters worldwide.
                            </p>
                            <ul className={styles.techPoints}>
                                <li>
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                    Direct & radiant heat transfer
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">auto_awesome</span>
                                    Rich body, deep caramel notes
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">tune</span>
                                    Best for medium to dark roasts
                                </li>
                            </ul>
                        </div>

                        {/* Fluid Bed */}
                        <div className={styles.techCard}>
                            <div className={styles.techIconWrap}>
                                <span className="material-symbols-outlined">air</span>
                            </div>
                            <span className={styles.techTag}>Convection</span>
                            <h3 className={styles.techName}>Fluid Bed</h3>
                            <p className={styles.techDesc}>
                                Beans float on a bed of hot air. Convective heat results in a
                                cleaner, brighter cup with higher acidity.
                                Often called "air roasting."
                            </p>
                            <ul className={styles.techPoints}>
                                <li>
                                    <span className="material-symbols-outlined">air</span>
                                    Even convective heat distribution
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">auto_awesome</span>
                                    Clean, bright, origin-forward
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">tune</span>
                                    Best for light to medium roasts
                                </li>
                            </ul>
                        </div>

                        {/* Small Batch */}
                        <div className={styles.techCard}>
                            <div className={styles.techIconWrap}>
                                <span className="material-symbols-outlined">precision_manufacturing</span>
                            </div>
                            <span className={styles.techTag}>Precision / Craft</span>
                            <h3 className={styles.techName}>Small Batch</h3>
                            <p className={styles.techDesc}>
                                Micro-roasting allows for extreme precision and experimentation.
                                Ideal for limited edition single-origin beans and
                                artisan quality control.
                            </p>
                            <ul className={styles.techPoints}>
                                <li>
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                    Manual control over every variable
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">auto_awesome</span>
                                    Nuanced, experimental profiles
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">tune</span>
                                    Best for any roast, especially light
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Myth Buster ─── */}
            <section className={styles.mythSection}>
                <div className={styles.mythCard}>
                    {/* Left: Myth Highlight Panel */}
                    <div className={styles.mythLeft}>
                        <span className={`material-symbols-outlined ${styles.mythIcon}`}>bolt</span>
                        <span className={styles.mythLabel}>MYTH BUSTER</span>
                        <h2 className={styles.mythHeadline}>
                            Does Dark Roast Have More Caffeine?
                        </h2>
                        <div className={styles.mythDivider} />
                        <p className={styles.mythBody}>
                            Contrary to popular belief, roasting effectively does{' '}
                            <strong>not</strong> burn off significant caffeine.
                            However, the bean size changes.
                        </p>
                        <p className={styles.mythHighlight}>
                            Roasting does NOT burn off significant caffeine.
                        </p>
                    </div>

                    {/* Right: Comparison Cards */}
                    <div className={styles.mythRight}>
                        {/* By Weight */}
                        <div className={styles.mythCompare}>
                            <div className={styles.mythCompareIconWrap}>
                                <span className="material-symbols-outlined">scale</span>
                            </div>
                            <div className={styles.mythCompareContent}>
                                <h3 className={styles.mythCompareName}>Measured by Weight</h3>
                                <p className={styles.mythCompareDesc}>
                                    If you weigh your coffee (e.g., 20g), Light and Dark roasts
                                    have nearly identical caffeine content.
                                </p>
                                <span className={styles.mythResultBadge}>✔ Nearly Equal</span>
                                <div className={styles.mythBars}>
                                    <div className={styles.mythBarRow}>
                                        <span className={styles.mythBarLabel}>Light</span>
                                        <div className={styles.mythBarTrack}>
                                            <div className={styles.mythBarFill} style={{ width: '92%', background: '#C19A6B' }} />
                                        </div>
                                    </div>
                                    <div className={styles.mythBarRow}>
                                        <span className={styles.mythBarLabel}>Dark</span>
                                        <div className={styles.mythBarTrack}>
                                            <div className={styles.mythBarFill} style={{ width: '90%', background: '#8B5A2B' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* By Scoop */}
                        <div className={styles.mythCompare}>
                            <div className={styles.mythCompareIconWrap}>
                                <span className="material-symbols-outlined">local_cafe</span>
                            </div>
                            <div className={styles.mythCompareContent}>
                                <h3 className={styles.mythCompareName}>Measured by Scoop</h3>
                                <p className={styles.mythCompareDesc}>
                                    Light roast beans are denser and smaller. A scoop of Light roast
                                    has <u>more beans</u>, and thus more caffeine than a scoop of Dark roast.
                                </p>
                                <span className={styles.mythResultBadge}>✔ Light Roast Has More</span>
                                <div className={styles.mythBars}>
                                    <div className={styles.mythBarRow}>
                                        <span className={styles.mythBarLabel}>Light</span>
                                        <div className={styles.mythBarTrack}>
                                            <div className={styles.mythBarFill} style={{ width: '95%', background: '#C19A6B' }} />
                                        </div>
                                    </div>
                                    <div className={styles.mythBarRow}>
                                        <span className={styles.mythBarLabel}>Dark</span>
                                        <div className={styles.mythBarTrack}>
                                            <div className={styles.mythBarFill} style={{ width: '70%', background: '#8B5A2B' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Final CTA ─── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <div className={styles.ctaGlow} />
                    <div className={styles.ctaContent}>
                        <span className={`material-symbols-outlined ${styles.ctaArrowDown}`}>
                            arrow_downward
                        </span>
                        <h2 className={styles.ctaHeadline}>
                            Your Coffee is Roasted.<br />Now What?
                        </h2>
                        <p className={styles.ctaSubtext}>
                            <strong>The roast sets the potential, but the grind unlocks it.</strong>
                            {' '}Discover how particle size affects extraction and
                            transforms your cup.
                        </p>
                        <div className={styles.ctaDivider} />
                        <a href="/grinding" className={styles.ctaButton}>
                            Explore Grinding
                            <span className={`material-symbols-outlined ${styles.ctaBtnArrow}`}>
                                arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Roasting;

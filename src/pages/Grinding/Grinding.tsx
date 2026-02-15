import { useState } from 'react';
import styles from './Grinding.module.css';
import grinderHeroImg from '../../assets/coffeeGrinder/grinder.png';

const Grinding = () => {
    const [openCard, setOpenCard] = useState<number | null>(null);
    return (
        <div className={`${styles.grinding} container`}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    {/* Left Text Block */}
                    <div className={styles.heroText}>
                        <span className={styles.eyebrow}>PRECISION MASTERY</span>

                        <h1 className={styles.headline}>
                            Grinding —
                        </h1>
                        <div className={styles.dash} />
                        <h2 className={styles.subheadline}>
                            Where Precision<br />Begins
                        </h2>

                        <p className={styles.heroParagraph}>
                            The grind is the bridge between the bean and the cup.
                            By controlling particle size, you master the rate of
                            extraction, turning a simple bean into a perfect
                            symphony of flavor.
                        </p>

                        <div className={styles.iconRow}>
                            <div className={styles.iconItem}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined">tune</span>
                                </div>
                                <span className={styles.iconLabel}>Control</span>
                                <span className={styles.iconSub}>Grind Adjustment</span>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined">water_drop</span>
                                </div>
                                <span className={styles.iconLabel}>Extraction</span>
                                <span className={styles.iconSub}>Flow & Solubility</span>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined">texture</span>
                                </div>
                                <span className={styles.iconLabel}>Surface</span>
                                <span className={styles.iconSub}>Particle Exposure</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Block */}
                    <div className={styles.heroImage}>
                        <img
                            src={grinderHeroImg}
                            alt="Precision coffee grinder with freshly ground coffee"
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </div>
            </section>

            {/* ─── Why Grind Size Matters ─── */}
            <section className={styles.whySection}>
                <div className={styles.whyHeader}>
                    <h2 className={styles.whyTitle}>WHY GRIND SIZE MATTERS</h2>
                    <p className={styles.whySubtitle}>
                        Understanding the physics behind the perfect extraction.
                    </p>
                    <div className={styles.whyDivider} />
                </div>

                <div className={styles.whyGrid}>
                    {/* Surface Area */}
                    <div className={styles.whyCard}>
                        <div className={styles.whyIconWrap}>
                            <span className="material-symbols-outlined">texture</span>
                        </div>
                        <h3 className={styles.whyCardTitle}>Surface Area</h3>
                        <p className={styles.whyCardDesc}>
                            Finer grinds increase the total surface area exposed to water.
                            More surface means faster chemical extraction, intensifying
                            flavor release and solubility.
                        </p>
                        <span className={styles.whyImpact}>Impact: Faster extraction rate</span>
                    </div>

                    {/* Contact Time */}
                    <div className={styles.whyCard}>
                        <div className={styles.whyIconWrap}>
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <h3 className={styles.whyCardTitle}>Contact Time</h3>
                        <p className={styles.whyCardDesc}>
                            Grind size controls how long water remains in contact with
                            coffee particles. Fine grinds extract quickly; coarse grinds
                            require longer brew times to achieve balance.
                        </p>
                        <span className={styles.whyImpact}>Impact: Controls brew timing</span>
                    </div>

                    {/* Flow Resistance */}
                    <div className={styles.whyCard}>
                        <div className={styles.whyIconWrap}>
                            <span className="material-symbols-outlined">waves</span>
                        </div>
                        <h3 className={styles.whyCardTitle}>Flow Resistance</h3>
                        <p className={styles.whyCardDesc}>
                            Fine particles pack tightly, creating resistance for water.
                            Coarse particles allow water to flow freely. Controlling
                            resistance is key to balanced pressure and even extraction.
                        </p>
                        <span className={styles.whyImpact}>Impact: Pressure & flow balance</span>
                    </div>
                </div>
            </section>

            {/* ─── The Grind Spectrum ─── */}
            <section className={styles.spectrumSection}>
                <div className={styles.spectrumContainer}>
                    <div className={styles.spectrumHeader}>
                        <h2 className={styles.spectrumTitle}>THE GRIND SPECTRUM</h2>
                        <p className={styles.spectrumSubtitle}>
                            From powder-fine to coarse crystals — each grind unlocks a
                            different brew method.
                        </p>
                        <div className={styles.spectrumDivider} />
                    </div>

                    {/* Spectrum Line + Nodes */}
                    <div className={styles.spectrumTrack}>
                        <div className={styles.spectrumLine} />
                        <div className={styles.spectrumNodes}>
                            {/* Turkish */}
                            <div className={styles.spectrumNode}>
                                <div className={styles.nodeTooltip}>
                                    <span className={styles.tooltipTitle}>Turkish</span>
                                    <span className={styles.tooltipText}>
                                        Highest surface area. Fastest extraction.
                                    </span>
                                </div>
                                <div className={styles.nodeCircle}>
                                    <span className="material-symbols-outlined">coffee</span>
                                </div>
                                <span className={styles.nodeLabel}>TURKISH</span>
                                <span className={styles.nodeSub}>Extra Fine (Powder)</span>
                            </div>

                            {/* Espresso */}
                            <div className={styles.spectrumNode}>
                                <div className={styles.nodeTooltip}>
                                    <span className={styles.tooltipTitle}>Espresso</span>
                                    <span className={styles.tooltipText}>
                                        High pressure, short contact time.
                                    </span>
                                </div>
                                <div className={styles.nodeCircle}>
                                    <span className="material-symbols-outlined">coffee_maker</span>
                                </div>
                                <span className={styles.nodeLabel}>ESPRESSO</span>
                                <span className={styles.nodeSub}>Fine (Table Salt)</span>
                            </div>

                            {/* Pour Over */}
                            <div className={styles.spectrumNode}>
                                <div className={styles.nodeTooltip}>
                                    <span className={styles.tooltipTitle}>Pour Over</span>
                                    <span className={styles.tooltipText}>
                                        Balanced clarity and sweetness.
                                    </span>
                                </div>
                                <div className={styles.nodeCircle}>
                                    <span className="material-symbols-outlined">water_drop</span>
                                </div>
                                <span className={styles.nodeLabel}>POUR OVER</span>
                                <span className={styles.nodeSub}>Medium (Sand)</span>
                            </div>

                            {/* Chemex */}
                            <div className={styles.spectrumNode}>
                                <div className={styles.nodeTooltip}>
                                    <span className={styles.tooltipTitle}>Chemex</span>
                                    <span className={styles.tooltipText}>
                                        Cleaner cup, slower drawdown.
                                    </span>
                                </div>
                                <div className={styles.nodeCircle}>
                                    <span className="material-symbols-outlined">science</span>
                                </div>
                                <span className={styles.nodeLabel}>CHEMEX</span>
                                <span className={styles.nodeSub}>Medium-Coarse</span>
                            </div>

                            {/* French Press */}
                            <div className={styles.spectrumNode}>
                                <div className={styles.nodeTooltip}>
                                    <span className={styles.tooltipTitle}>French Press</span>
                                    <span className={styles.tooltipText}>
                                        Heavy body, longer steep time.
                                    </span>
                                </div>
                                <div className={styles.nodeCircle}>
                                    <span className="material-symbols-outlined">local_cafe</span>
                                </div>
                                <span className={styles.nodeLabel}>FRENCH PRESS</span>
                                <span className={styles.nodeSub}>Coarse (Sea Salt)</span>
                            </div>
                        </div>
                    </div>

                    {/* Particle Texture */}
                    <div className={styles.particleStrip}>
                        <svg viewBox="0 0 800 24" className={styles.particleSvg}>
                            {/* Fine side — dense small dots */}
                            {Array.from({ length: 30 }, (_, i) => (
                                <circle
                                    key={`fine-${i}`}
                                    cx={20 + i * 5 + Math.random() * 3}
                                    cy={6 + Math.random() * 12}
                                    r={1 + Math.random() * 0.5}
                                    fill="#8B5A2B"
                                    opacity={0.3}
                                />
                            ))}
                            {/* Mid — medium dots */}
                            {Array.from({ length: 16 }, (_, i) => (
                                <circle
                                    key={`mid-${i}`}
                                    cx={250 + i * 18 + Math.random() * 8}
                                    cy={4 + Math.random() * 16}
                                    r={2 + Math.random() * 1}
                                    fill="#8B5A2B"
                                    opacity={0.2}
                                />
                            ))}
                            {/* Coarse side — sparse large dots */}
                            {Array.from({ length: 8 }, (_, i) => (
                                <circle
                                    key={`coarse-${i}`}
                                    cx={580 + i * 28 + Math.random() * 10}
                                    cy={4 + Math.random() * 16}
                                    r={3 + Math.random() * 1.5}
                                    fill="#C19A6B"
                                    opacity={0.2}
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Educational Strip */}
                    <div className={styles.eduStrip}>
                        <span className={styles.eduLeft}>
                            Finer grind → Slower flow → Faster extraction
                        </span>
                        <span className={styles.eduRight}>
                            Coarser grind → Faster flow → Slower extraction
                        </span>
                    </div>
                </div>
            </section>

            {/* ─── Burr vs Blade Comparison ─── */}
            <section className={styles.compareSection}>
                <div className={styles.compareGrid}>
                    {/* Burr Grinder — Recommended */}
                    <div className={`${styles.compareCard} ${styles.compareBurr}`}>
                        <div className={styles.compareCardHeader}>
                            <div className={styles.compareIconWrap}>
                                <span className="material-symbols-outlined">settings</span>
                            </div>
                            <h3 className={styles.compareCardTitle}>Burr Grinder</h3>
                            <span className={styles.recommendedBadge}>Recommended</span>
                        </div>

                        <p className={styles.compareDesc}>
                            Two precision-aligned burrs crush coffee beans into consistent,
                            uniform particles. This ensures predictable extraction, balanced
                            flavor, and minimal heat damage.
                        </p>

                        <ul className={styles.compareList}>
                            <li className={styles.compareItemGood}>
                                <span className="material-symbols-outlined">check_circle</span>
                                Uniform Particle Size
                            </li>
                            <li className={styles.compareItemGood}>
                                <span className="material-symbols-outlined">check_circle</span>
                                Adjustable Grind Settings
                            </li>
                            <li className={styles.compareItemGood}>
                                <span className="material-symbols-outlined">check_circle</span>
                                Better Flavor Clarity
                            </li>
                            <li className={styles.compareItemGood}>
                                <span className="material-symbols-outlined">check_circle</span>
                                Ideal for Espresso & Pour Over
                            </li>
                            <li className={styles.compareItemGood}>
                                <span className="material-symbols-outlined">check_circle</span>
                                Best for Specialty Coffee
                            </li>
                        </ul>

                        <div className={styles.compareMicro}>
                            Consistency = Control = Better Extraction
                        </div>

                        {/* Particle visualization — uniform */}
                        <div className={styles.particleViz}>
                            <svg viewBox="0 0 240 16" className={styles.particleVizSvg}>
                                {Array.from({ length: 24 }, (_, i) => (
                                    <circle
                                        key={i}
                                        cx={10 + i * 10}
                                        cy={8}
                                        r={2.5}
                                        fill="#8B5A2B"
                                        opacity={0.25}
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>

                    {/* Center Divider */}
                    <div className={styles.compareDivider}>
                        <div className={styles.compareDividerLine} />
                        <span className={styles.compareDividerText}>
                            Consistency is the difference.
                        </span>
                        <div className={styles.compareDividerLine} />
                    </div>

                    {/* Blade Grinder */}
                    <div className={`${styles.compareCard} ${styles.compareBlade}`}>
                        <div className={styles.compareCardHeader}>
                            <div className={styles.compareIconWrap}>
                                <span className="material-symbols-outlined">build</span>
                            </div>
                            <h3 className={styles.compareCardTitle}>Blade Grinder</h3>
                        </div>

                        <p className={styles.compareDesc}>
                            Spinning blades chop beans unevenly, producing a mix of fine
                            dust and large chunks. This leads to inconsistent extraction
                            and unpredictable flavor.
                        </p>

                        <ul className={styles.compareList}>
                            <li className={styles.compareItemBad}>
                                <span className="material-symbols-outlined">cancel</span>
                                Uneven Particle Distribution
                            </li>
                            <li className={styles.compareItemBad}>
                                <span className="material-symbols-outlined">cancel</span>
                                Generates Excess Heat
                            </li>
                            <li className={styles.compareItemBad}>
                                <span className="material-symbols-outlined">cancel</span>
                                Limited Grind Precision
                            </li>
                            <li className={styles.compareItemBad}>
                                <span className="material-symbols-outlined">cancel</span>
                                Risk of Over & Under Extraction
                            </li>
                        </ul>

                        <div className={styles.compareMicro}>
                            Inconsistent size = inconsistent flavor
                        </div>

                        {/* Particle visualization — uneven */}
                        <div className={styles.particleViz}>
                            <svg viewBox="0 0 240 16" className={styles.particleVizSvg}>
                                {[1.2, 4, 1.5, 3.5, 1, 4.5, 2, 3, 1.8, 4.2, 1, 3.8, 2.5, 1.3, 4, 2].map((r, i) => (
                                    <circle
                                        key={i}
                                        cx={8 + i * 15}
                                        cy={8}
                                        r={r}
                                        fill="#A0522D"
                                        opacity={0.2}
                                    />
                                ))}
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Troubleshooting Your Grind ─── */}
            <section className={styles.troubleSection}>
                <div className={styles.troubleGrid}>
                    {/* Left — Accordion List */}
                    <div className={styles.troubleLeft}>
                        <div className={styles.troubleHeading}>
                            <div className={styles.troubleHeadingIcon}>
                                <span className="material-symbols-outlined">tune</span>
                            </div>
                            <h2 className={styles.troubleTitle}>TROUBLESHOOTING YOUR GRIND</h2>
                        </div>

                        {/* Card 1 — Bitter */}
                        <div
                            className={`${styles.troubleCard} ${styles.troubleCardRed} ${openCard === 0 ? styles.troubleCardOpen : ''}`}
                            onClick={() => setOpenCard(openCard === 0 ? null : 0)}
                        >
                            <div className={styles.troubleCardTop}>
                                <div className={styles.troubleCardInfo}>
                                    <h4 className={styles.troubleCardQuestion}>Tastes Bitter or Ashy?</h4>
                                    <span className={styles.troubleTag}>Over-Extraction</span>
                                    <p className={styles.troubleCardCause}>Grind too fine — water pulls excessive bitter compounds.</p>
                                </div>
                                <span className={styles.troubleFix}>Go Coarser →</span>
                            </div>
                            <div className={styles.troubleExpand}>
                                <p>Over-extraction happens when water pulls too many bitter compounds from the coffee. Reducing the surface area by going coarser slows extraction and restores balance.</p>
                            </div>
                        </div>

                        {/* Card 2 — Sour */}
                        <div
                            className={`${styles.troubleCard} ${styles.troubleCardBlue} ${openCard === 1 ? styles.troubleCardOpen : ''}`}
                            onClick={() => setOpenCard(openCard === 1 ? null : 1)}
                        >
                            <div className={styles.troubleCardTop}>
                                <div className={styles.troubleCardInfo}>
                                    <h4 className={styles.troubleCardQuestion}>Tastes Sour or Salty?</h4>
                                    <span className={styles.troubleTag}>Under-Extraction</span>
                                    <p className={styles.troubleCardCause}>Grind too coarse — water passes through too quickly.</p>
                                </div>
                                <span className={styles.troubleFix}>Go Finer →</span>
                            </div>
                            <div className={styles.troubleExpand}>
                                <p>Water moves too quickly through coarse grounds, extracting only the bright acidic compounds and leaving behind the sweet, balanced flavors.</p>
                            </div>
                        </div>

                        {/* Card 3 — Weak */}
                        <div
                            className={`${styles.troubleCard} ${styles.troubleCardAmber} ${openCard === 2 ? styles.troubleCardOpen : ''}`}
                            onClick={() => setOpenCard(openCard === 2 ? null : 2)}
                        >
                            <div className={styles.troubleCardTop}>
                                <div className={styles.troubleCardInfo}>
                                    <h4 className={styles.troubleCardQuestion}>Weak or Watery?</h4>
                                    <span className={styles.troubleTag}>Low Resistance</span>
                                    <p className={styles.troubleCardCause}>Low resistance — grind is too coarse for the brew time.</p>
                                </div>
                                <span className={styles.troubleFix}>Go Finer →</span>
                            </div>
                            <div className={styles.troubleExpand}>
                                <p>Increase surface area or extend brew time. The water needs more contact to extract the full range of flavors and body from the grounds.</p>
                            </div>
                        </div>

                        {/* Card 4 — Slow */}
                        <div
                            className={`${styles.troubleCard} ${styles.troubleCardPurple} ${openCard === 3 ? styles.troubleCardOpen : ''}`}
                            onClick={() => setOpenCard(openCard === 3 ? null : 3)}
                        >
                            <div className={styles.troubleCardTop}>
                                <div className={styles.troubleCardInfo}>
                                    <h4 className={styles.troubleCardQuestion}>Flow Too Slow?</h4>
                                    <span className={styles.troubleTag}>Excess Fines</span>
                                    <p className={styles.troubleCardCause}>Too many fines or clogged bed creating excess resistance.</p>
                                </div>
                                <span className={styles.troubleFix}>Go Coarser →</span>
                            </div>
                            <div className={styles.troubleExpand}>
                                <p>Too much resistance prevents balanced extraction. Coarser grounds open up flow and reduce the chance of a choked brew bed.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Particle Infographic */}
                    <div className={styles.troubleRight}>
                        <div className={styles.infographicCard}>
                            <h3 className={styles.infographicTitle}>The Particle Infographic</h3>
                            <p className={styles.infographicSub}>How particle shape affects your cup</p>
                            <div className={styles.infographicDivider} />

                            {/* Fines */}
                            <div className={styles.particleRow}>
                                <svg viewBox="0 0 60 32" className={styles.particleIllust}>
                                    {Array.from({ length: 18 }, (_, i) => (
                                        <circle
                                            key={i}
                                            cx={8 + (i % 6) * 9 + Math.random() * 2}
                                            cy={6 + Math.floor(i / 6) * 10 + Math.random() * 2}
                                            r={1.5 + Math.random() * 0.5}
                                            fill="#F5EFE6"
                                            opacity={0.7}
                                        />
                                    ))}
                                </svg>
                                <div className={styles.particleInfo}>
                                    <span className={styles.particleLabel}>Fines</span>
                                    <span className={styles.particleDesc}>Microscopic dust that extracts instantly, releasing harsh bitterness. In excess, they clog paper filters, stalling the brew and muddying the final cup.</span>
                                </div>
                            </div>

                            {/* Boulders */}
                            <div className={styles.particleRow}>
                                <svg viewBox="0 0 60 32" className={styles.particleIllust}>
                                    <circle cx={14} cy={16} r={6} fill="#F5EFE6" opacity={0.6} />
                                    <circle cx={34} cy={14} r={7} fill="#F5EFE6" opacity={0.5} />
                                    <circle cx={50} cy={18} r={5} fill="#F5EFE6" opacity={0.4} />
                                </svg>
                                <div className={styles.particleInfo}>
                                    <span className={styles.particleLabel}>Boulders</span>
                                    <span className={styles.particleDesc}>Large, chunky grounds that water cannot penetrate fully. They remain under-extracted, contributing sour, grassy, and acidic notes that ruin the balance.</span>
                                </div>
                            </div>

                            {/* Channeling */}
                            <div className={styles.particleRow}>
                                <svg viewBox="0 0 60 32" className={styles.particleIllust}>
                                    {/* Uneven particles */}
                                    <circle cx={8} cy={6} r={2} fill="#F5EFE6" opacity={0.5} />
                                    <circle cx={20} cy={10} r={5} fill="#F5EFE6" opacity={0.4} />
                                    <circle cx={40} cy={8} r={1.5} fill="#F5EFE6" opacity={0.6} />
                                    <circle cx={52} cy={12} r={4} fill="#F5EFE6" opacity={0.4} />
                                    <circle cx={12} cy={24} r={3} fill="#F5EFE6" opacity={0.5} />
                                    <circle cx={36} cy={26} r={2} fill="#F5EFE6" opacity={0.5} />
                                    <circle cx={48} cy={22} r={5} fill="#F5EFE6" opacity={0.35} />
                                    {/* Channel stream */}
                                    <line x1={28} y1={0} x2={30} y2={32} stroke="#C19A6B" strokeWidth={1.5} opacity={0.5} strokeDasharray="2 2" />
                                </svg>
                                <div className={styles.particleInfo}>
                                    <span className={styles.particleLabel}>Channeling</span>
                                    <span className={styles.particleDesc}>Water follows the path of least resistance, rushing through cracks. This bypasses most coffee, resulting in a weak, uneven, and astringent brew.</span>
                                </div>
                            </div>

                            {/* Uniformity (The Goal) */}
                            <div className={styles.particleRow}>
                                <svg viewBox="0 0 60 32" className={styles.particleIllust}>
                                    <circle cx={10} cy={16} r={4} fill="#F5EFE6" opacity={0.9} />
                                    <circle cx={20} cy={16} r={4} fill="#F5EFE6" opacity={0.9} />
                                    <circle cx={30} cy={16} r={4} fill="#F5EFE6" opacity={0.9} />
                                    <circle cx={40} cy={16} r={4} fill="#F5EFE6" opacity={0.9} />
                                    <circle cx={50} cy={16} r={4} fill="#F5EFE6" opacity={0.9} />
                                </svg>
                                <div className={styles.particleInfo}>
                                    <span className={styles.particleLabel}>Uniformity</span>
                                    <span className={styles.particleDesc}>The gold standard. When every particle is the same size, they all extract at exactly the same rate, unlocking balanced sweetness and acidity.</span>
                                </div>
                            </div>

                            {/* Heat & Static */}
                            <div className={styles.particleRow}>
                                <svg viewBox="0 0 60 32" className={styles.particleIllust}>
                                    {/* Heat waves */}
                                    <path d="M10 24 Q15 18 20 24 T30 24" stroke="#F5EFE6" strokeWidth={1.5} fill="none" opacity={0.4} />
                                    <path d="M30 24 Q35 18 40 24 T50 24" stroke="#F5EFE6" strokeWidth={1.5} fill="none" opacity={0.4} />
                                    {/* Static particles */}
                                    <circle cx={15} cy={10} r={1.5} fill="#F5EFE6" opacity={0.6} />
                                    <circle cx={45} cy={8} r={1.5} fill="#F5EFE6" opacity={0.6} />
                                    <circle cx={30} cy={12} r={2} fill="#F5EFE6" opacity={0.5} />
                                </svg>
                                <div className={styles.particleInfo}>
                                    <span className={styles.particleLabel}>Heat & Static</span>
                                    <span className={styles.particleDesc}>High-speed friction generates heat that burns delicate oils. Static electricity causes grounds to cling to the chute, creating a mess and waste.</span>
                                </div>
                            </div>

                            <div className={styles.infographicFooter}>
                                "Consistency is more important than size alone."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Final CTA (Premium) ─── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaWrapper}>
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaHeading}>
                                THE GRIND IS SET.<br />
                                READY TO BREW?
                            </h2>
                            <p className={styles.ctaSubtext}>
                                Now that you've mastered the particle, it's time to choose your method
                                and apply the water. Let the extraction begin.
                            </p>

                            <div className={styles.ctaAction}>
                                <div className={styles.ctaDivider}>
                                    <span className={styles.dividerLine}></span>
                                    <span className={styles.dividerText}>Next Step: Brewing Methods</span>
                                    <span className={styles.dividerLine}></span>
                                </div>
                                <a href="/brewing" className={styles.ctaButton}>
                                    <span>Explore Brewing</span>
                                    <span className={`material-symbols-outlined ${styles.ctaArrow}`}>arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Grinding;

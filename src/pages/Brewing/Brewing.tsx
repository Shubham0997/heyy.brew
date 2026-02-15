import { useState } from 'react';
import styles from './Brewing.module.css';
import v60HeroImg from '../../assets/coffeeBrewing/v60PourOver.png';
import frenchPressImg from '../../assets/coffeeBrewing/frenchPress.png';
import mokaPotImg from '../../assets/coffeeBrewing/mokaPot.png';
import v60DeepImg from '../../assets/coffeeBrewing/v60.png';
import aeropressImg from '../../assets/coffeeBrewing/aeropress.png';
import siphonImg from '../../assets/coffeeBrewing/siphon.png';
import phinImg from '../../assets/coffeeBrewing/phinFilter.png';
import espressoImg from '../../assets/coffeeBrewing/espressoMachine.png';
import frenchPressCardImg from '../../assets/coffeeBrewing/frenchPressCard.png';
import v60CardImg from '../../assets/coffeeBrewing/v60Card.png';
import espressoCupImg from '../../assets/coffeeBrewing/espressoCup.png';
import mokaCardImg from '../../assets/coffeeBrewing/mokaCard.png';

const Brewing = () => {
    const [aeroMethod, setAeroMethod] = useState<'standard' | 'inverted'>('standard');
    return (
        <div className={`${styles.brewing} container`}>
            {/* ─── Hero Section ─── */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    {/* Left Text Block */}
                    <div className={styles.heroText}>
                        <span className={styles.eyebrow}>BREW MASTERY</span>

                        <h1 className={styles.headline}>
                            Brewing —
                        </h1>
                        <div className={styles.dash} />
                        <h2 className={styles.subheadline}>
                            Where Extraction<br />Happens
                        </h2>

                        <p className={styles.heroParagraph}>
                            Brewing is the art of balancing variables. It's the final act
                            where water meets coffee to dissolve flavors, aromas, and oils
                            into a perfect cup. Understanding extraction is key to unlocking
                            the bean's true potential.
                        </p>

                        {/* Icon Row */}
                        <div className={styles.iconRow}>
                            <div className={styles.iconItem}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                </div>
                                <span className={styles.iconLabel}>Heat</span>
                                <span className={styles.iconSub}>Temperature Control</span>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined">scale</span>
                                </div>
                                <span className={styles.iconLabel}>Ratio</span>
                                <span className={styles.iconSub}>Coffee to Water</span>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.iconCircle}>
                                    <span className="material-symbols-outlined">hourglass_bottom</span>
                                </div>
                                <span className={styles.iconLabel}>Time</span>
                                <span className={styles.iconSub}>Brew Duration</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Block */}
                    <div className={styles.heroImage}>
                        <img src={v60HeroImg} alt="V60 pour-over brewer with freshly brewed coffee" />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </section>

            {/* ─── Brewing Basics ─── */}
            <section className={styles.basicsSection}>
                <div className={styles.basicsHeader}>
                    <h2 className={styles.basicsTitle}>BREWING BASICS</h2>
                    <p className={styles.basicsSubtitle}>
                        Master these four pillars to control your extraction and unlock balanced flavor.
                    </p>
                </div>

                <div className={styles.basicsGrid}>
                    {/* Brew Ratio */}
                    <div className={styles.basicsCard}>
                        <div className={styles.basicsIconCircle}>
                            <span className="material-symbols-outlined">scale</span>
                        </div>
                        <h3 className={styles.basicsCardTitle}>Brew Ratio</h3>
                        <p className={styles.basicsCardDesc}>
                            The brew ratio defines the balance between coffee and water. A common
                            starting point is 1:16 (1g coffee to 16g water), but adjusting the ratio
                            changes strength and body. Lower ratios (1:14) produce richer cups; higher
                            ratios (1:18) create lighter profiles.
                        </p>
                        <div className={styles.basicsProTip}>
                            <span className={styles.proTipLabel}>Pro Tip</span>
                            <span className={styles.proTipText}>
                                Use a digital scale — consistency matters more than guesswork.
                            </span>
                        </div>
                    </div>

                    {/* Water Temperature */}
                    <div className={styles.basicsCard}>
                        <div className={styles.basicsIconCircle}>
                            <span className="material-symbols-outlined">device_thermostat</span>
                        </div>
                        <h3 className={styles.basicsCardTitle}>Water Temperature</h3>
                        <p className={styles.basicsCardDesc}>
                            Temperature controls extraction speed. The ideal range is
                            90°C–96°C (195°F–205°F). Too hot extracts bitterness; too cool
                            results in sour, underdeveloped flavors.
                        </p>
                        <div className={styles.basicsProTip}>
                            <span className={styles.proTipLabel}>Pro Tip</span>
                            <span className={styles.proTipText}>
                                Let boiling water rest 30–45 seconds before pouring if you don't
                                use a temperature kettle.
                            </span>
                        </div>
                    </div>

                    {/* Brew Time */}
                    <div className={styles.basicsCard}>
                        <div className={styles.basicsIconCircle}>
                            <span className="material-symbols-outlined">hourglass_bottom</span>
                        </div>
                        <h3 className={styles.basicsCardTitle}>Brew Time</h3>
                        <p className={styles.basicsCardDesc}>
                            Contact time determines how much flavor is extracted. Espresso brews
                            in 25–30 seconds, while immersion methods like French Press take around
                            4 minutes. Shorter times emphasize brightness; longer times increase body.
                        </p>
                        <div className={styles.basicsProTip}>
                            <span className={styles.proTipLabel}>Pro Tip</span>
                            <span className={styles.proTipText}>
                                If your coffee tastes bitter, reduce brew time slightly before
                                adjusting grind.
                            </span>
                        </div>
                    </div>

                    {/* Agitation */}
                    <div className={styles.basicsCard}>
                        <div className={styles.basicsIconCircle}>
                            <span className="material-symbols-outlined">sync</span>
                        </div>
                        <h3 className={styles.basicsCardTitle}>Agitation</h3>
                        <p className={styles.basicsCardDesc}>
                            Stirring, swirling, or pouring turbulence ensures even saturation of
                            grounds. Proper agitation prevents channeling and promotes uniform
                            extraction across all particles.
                        </p>
                        <div className={styles.basicsProTip}>
                            <span className={styles.proTipLabel}>Pro Tip</span>
                            <span className={styles.proTipText}>
                                In pour-over, a gentle swirl after bloom improves clarity and balance.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Water Quality Matters ─── */}
            <section className={styles.waterSection}>
                <div className={styles.waterInner}>
                    <div className={styles.waterHeader}>
                        <h2 className={styles.waterTitle}>Water Quality Matters</h2>
                        <p className={styles.waterSubtitle}>
                            Nearly 98% of your cup is water. Its composition directly affects
                            extraction, clarity, and flavor balance.
                        </p>
                    </div>

                    <div className={styles.waterGrid}>
                        {/* Filtered Water */}
                        <div className={styles.waterCard}>
                            <div className={styles.waterIconCircle}>
                                <span className="material-symbols-outlined">water_drop</span>
                            </div>
                            <h3 className={styles.waterCardTitle}>Filtered Water</h3>
                            <p className={styles.waterCardDesc}>
                                Use clean, filtered water free of chlorine and strong odors.
                                Impurities can mask delicate aromatics and introduce harsh or
                                metallic notes into your cup.
                            </p>
                            <div className={styles.waterWhy}>
                                <span className={styles.whyLabel}>Why it Matters</span>
                                <span className={styles.whyText}>
                                    Even perfectly roasted beans cannot overcome poor water quality.
                                </span>
                            </div>
                        </div>

                        {/* Mineral Balance */}
                        <div className={styles.waterCard}>
                            <div className={styles.waterIconCircle}>
                                <span className="material-symbols-outlined">science</span>
                            </div>
                            <h3 className={styles.waterCardTitle}>Mineral Balance</h3>
                            <p className={styles.waterCardDesc}>
                                Magnesium enhances sweetness and extraction, while bicarbonates
                                buffer acidity. Too many minerals cause dullness; too few lead to
                                flat, lifeless cups.
                            </p>
                            <div className={styles.waterWhy}>
                                <span className={styles.whyLabel}>Why it Matters</span>
                                <span className={styles.whyText}>
                                    Balanced minerals create structure, clarity, and brightness.
                                </span>
                            </div>
                        </div>

                        {/* TDS Range */}
                        <div className={styles.waterCard}>
                            <div className={styles.waterIconCircle}>
                                <span className="material-symbols-outlined">monitoring</span>
                            </div>
                            <h3 className={styles.waterCardTitle}>Total Dissolved Solids (TDS)</h3>
                            <p className={styles.waterCardDesc}>
                                Ideal brewing water typically falls between 75–150 ppm TDS. This
                                range ensures efficient extraction without overwhelming the coffee's
                                natural flavor profile.
                            </p>
                            <div className={styles.waterWhy}>
                                <span className={styles.whyLabel}>Why it Matters</span>
                                <span className={styles.whyText}>
                                    Optimal TDS improves both extraction yield and taste clarity.
                                </span>
                            </div>

                            {/* TDS Indicator */}
                            <div className={styles.tdsIndicator}>
                                <div className={styles.tdsBar}>
                                    <div className={styles.tdsIdeal}></div>
                                </div>
                                <div className={styles.tdsLabels}>
                                    <span>Low Minerals</span>
                                    <span className={styles.tdsIdealLabel}>Ideal (75–150 ppm)</span>
                                    <span>Too Hard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Extraction Styles ─── */}
            <section className={styles.extractSection}>
                <div className={styles.extractHeader}>
                    <h2 className={styles.extractTitle}>Extraction Styles</h2>
                    <p className={styles.extractSubtitle}>
                        Understanding how water interacts with coffee grounds helps you choose
                        the right method for your taste preference.
                    </p>
                </div>

                <div className={styles.extractGrid}>
                    {/* Immersion */}
                    <div className={styles.extractCard}>
                        <div className={styles.extractIconCircle}>
                            <span className="material-symbols-outlined">coffee</span>
                        </div>
                        <h3 className={styles.extractCardTitle}>Immersion</h3>
                        <div className={styles.extractAccent}></div>

                        <p className={styles.extractCardDesc}>
                            Coffee grounds are fully submerged in water for the entire brew time.
                            Extraction happens evenly and gradually as flavors dissolve into the water.
                        </p>

                        <div className={styles.extractDetail}>
                            <span className={styles.detailLabel}>How It Extracts</span>
                            <span className={styles.detailText}>
                                Long contact time allows deeper extraction of oils and body.
                            </span>
                        </div>

                        <div className={styles.extractDetail}>
                            <span className={styles.detailLabel}>Flavor Profile</span>
                            <span className={styles.detailText}>
                                Rich, full-bodied, round, heavier mouthfeel.
                            </span>
                        </div>

                        <div className={styles.extractMicro}>
                            <div className={styles.microItem}>
                                <span className="material-symbols-outlined">grain</span>
                                <span>Coarse</span>
                            </div>
                            <div className={styles.microItem}>
                                <span className="material-symbols-outlined">coffee_maker</span>
                                <span>French Press, Cold Brew</span>
                            </div>
                        </div>

                        <p className={styles.extractIdeal}>
                            <span className={styles.idealLabel}>Ideal For</span>
                            Those who enjoy bold texture and deeper body.
                        </p>

                        {/* Flavor Meter */}
                        <div className={styles.flavorMeter}>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Body</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Acidity</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Intensity</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Percolation */}
                    <div className={styles.extractCard}>
                        <div className={styles.extractIconCircle}>
                            <span className="material-symbols-outlined">filter_alt</span>
                        </div>
                        <h3 className={styles.extractCardTitle}>Percolation</h3>
                        <div className={styles.extractAccent}></div>

                        <p className={styles.extractCardDesc}>
                            Water passes through the coffee bed and filter once, extracting flavors
                            as it flows downward by gravity.
                        </p>

                        <div className={styles.extractDetail}>
                            <span className={styles.detailLabel}>How It Extracts</span>
                            <span className={styles.detailText}>
                                Flow rate and grind size control clarity and brightness.
                            </span>
                        </div>

                        <div className={styles.extractDetail}>
                            <span className={styles.detailLabel}>Flavor Profile</span>
                            <span className={styles.detailText}>
                                Clean, bright, articulate acidity, layered aromatics.
                            </span>
                        </div>

                        <div className={styles.extractMicro}>
                            <div className={styles.microItem}>
                                <span className="material-symbols-outlined">grain</span>
                                <span>Medium to Medium-Fine</span>
                            </div>
                            <div className={styles.microItem}>
                                <span className="material-symbols-outlined">coffee_maker</span>
                                <span>V60, Chemex, Drip</span>
                            </div>
                        </div>

                        <p className={styles.extractIdeal}>
                            <span className={styles.idealLabel}>Ideal For</span>
                            Drinkers who prefer clarity and origin character.
                        </p>

                        {/* Flavor Meter */}
                        <div className={styles.flavorMeter}>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Body</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Acidity</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Intensity</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pressure */}
                    <div className={styles.extractCard}>
                        <div className={styles.extractIconCircle}>
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <h3 className={styles.extractCardTitle}>Pressure</h3>
                        <div className={styles.extractAccent}></div>

                        <p className={styles.extractCardDesc}>
                            Water is forced through tightly packed coffee under pressure, extracting
                            intense flavors in a short time.
                        </p>

                        <div className={styles.extractDetail}>
                            <span className={styles.detailLabel}>How It Extracts</span>
                            <span className={styles.detailText}>
                                High pressure accelerates extraction, producing concentrated results.
                            </span>
                        </div>

                        <div className={styles.extractDetail}>
                            <span className={styles.detailLabel}>Flavor Profile</span>
                            <span className={styles.detailText}>
                                Dense, syrupy, intense, crema-rich.
                            </span>
                        </div>

                        <div className={styles.extractMicro}>
                            <div className={styles.microItem}>
                                <span className="material-symbols-outlined">grain</span>
                                <span>Fine to Very Fine</span>
                            </div>
                            <div className={styles.microItem}>
                                <span className="material-symbols-outlined">coffee_maker</span>
                                <span>Espresso, Moka Pot</span>
                            </div>
                        </div>

                        <p className={styles.extractIdeal}>
                            <span className={styles.idealLabel}>Ideal For</span>
                            Those who enjoy strong, concentrated coffee.
                        </p>

                        {/* Flavor Meter */}
                        <div className={styles.flavorMeter}>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Body</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                </div>
                            </div>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Acidity</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                    <span className={styles.dotEmpty}></span>
                                </div>
                            </div>
                            <div className={styles.meterRow}>
                                <span className={styles.meterLabel}>Intensity</span>
                                <div className={styles.meterDots}>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                    <span className={styles.dotFilled}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ─── Method Deep Dive: French Press ─── */}
            <section id="method-deep-dive" className={styles.deepDiveSection}>
                <div className={styles.deepDiveHeader}>
                    <h2 className={styles.deepDiveTitle}>METHOD DEEP DIVE</h2>
                </div>

                <div className={styles.deepDiveGrid}>
                    {/* Left — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={frenchPressImg}
                                alt="French Press brewing method"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>French Press</span>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Immersion Richness</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            The classic plunger pot offers full immersion brewing for a rich,
                            heavy body and robust flavor profile. Metal filtration allows natural
                            oils to pass through, creating a textured, full-bodied cup.
                        </p>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card</span>
                            </div>

                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>20g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Water</span>
                                    <span className={styles.recipeStatValue}>300g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>4m</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>Coarse</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>1:15</span>
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">checklist</span>
                                <span>Step-by-Step</span>
                            </div>

                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>1</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Heat Water</span>
                                        <span className={styles.stepDesc}>Bring water to 93°C (200°F). Let boiling water rest for 30 seconds.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>2</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Add Coffee</span>
                                        <span className={styles.stepDesc}>Add 20g of coarsely ground coffee to the French Press.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>3</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Bloom</span>
                                        <span className={styles.stepDesc}>Pour 60g of water, saturating all grounds. Wait 30 seconds.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>4</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Pour & Steep</span>
                                        <span className={styles.stepDesc}>Pour remaining 240g of water. Place the lid on without pressing. Steep for 4 minutes.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>5</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Press</span>
                                        <span className={styles.stepDesc}>Press the plunger down slowly and steadily over 15–20 seconds.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>6</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Serve</span>
                                        <span className={styles.stepDesc}>Pour immediately to stop extraction. Don't leave coffee sitting on the grounds.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhancement Row */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best Roast</span>
                                <span className={styles.enhanceValue}>Medium to Dark</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor Notes</span>
                                <span className={styles.enhanceValue}>Chocolate, Nutty, Heavy Body</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Difficulty</span>
                                <span className={styles.enhanceValue}>Easy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Method Deep Dive: Moka Pot ─── */}
            <section className={styles.deepDiveSection}>
                <div className={styles.deepDiveGrid}>
                    {/* Left — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Stovetop Intensity</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            An iconic Italian stovetop brewer that uses steam pressure to force
                            water upward through finely ground coffee. The result is bold,
                            concentrated coffee with a thick body and deep roasted character.
                        </p>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card</span>
                            </div>
                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>18g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Water</span>
                                    <span className={styles.recipeStatValue}>180g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>5m</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>Fine</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>1:10</span>
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">checklist</span>
                                <span>Step-by-Step</span>
                            </div>
                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>1</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Fill Base</span>
                                        <span className={styles.stepDesc}>Fill the bottom chamber with hot water up to the safety valve.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>2</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Load Basket</span>
                                        <span className={styles.stepDesc}>Fill the filter basket with 18g of finely ground coffee. Level off — don't tamp.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>3</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Assemble</span>
                                        <span className={styles.stepDesc}>Screw the top and bottom chambers together tightly.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>4</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Heat</span>
                                        <span className={styles.stepDesc}>Place on medium-low heat. Keep the lid open to watch the extraction.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>5</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Listen</span>
                                        <span className={styles.stepDesc}>When you hear a hissing, gurgling sound, the brew is almost done.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>6</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Remove & Serve</span>
                                        <span className={styles.stepDesc}>Remove from heat immediately. Pour and enjoy the concentrated brew.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detail Row */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best Roast</span>
                                <span className={styles.enhanceValue}>Medium-Dark to Dark</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor Profile</span>
                                <span className={styles.enhanceValue}>Cocoa, Toasted Almond, Caramelized Sugar</span>
                            </div>
                        </div>
                        <div className={styles.enhanceRow} style={{ borderTop: 'none', paddingTop: 0 }}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Extraction Style</span>
                                <span className={styles.enhanceValue}>Pressure-assisted percolation</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Caffeine Level</span>
                                <span className={styles.enhanceValue}>Medium-High</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className={styles.deepDiveTip}>
                            <span className="material-symbols-outlined">lightbulb</span>
                            <span>Start with hot water in the base to avoid overheating the grounds and producing bitterness.</span>
                        </div>
                    </div>

                    {/* Right — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={mokaPotImg}
                                alt="Moka Pot brewing method"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>Moka Pot</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Method Deep Dive: V60 Pour Over ─── */}
            <section className={styles.deepDiveSection}>
                <div className={styles.deepDiveGrid}>
                    {/* Left — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={v60DeepImg}
                                alt="V60 Pour Over brewing method"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>V60 Pour Over</span>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Precision &amp; Clarity</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            The cone shape and spiral ridges promote even extraction by guiding
                            water flow toward the center. This controlled percolation highlights
                            brightness, floral aromatics, and nuanced acidity. Ideal for
                            showcasing single-origin coffees.
                        </p>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card</span>
                            </div>
                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>15g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Water</span>
                                    <span className={styles.recipeStatValue}>240g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>3m</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>Med-Fine</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>1:16</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Brew Guide */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">checklist</span>
                                <span>Quick Brew Guide</span>
                            </div>
                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>1</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Bloom</span>
                                        <span className={styles.stepDesc}>Pour 2× coffee weight (30g) of water. Wait 30–45 seconds for CO₂ release.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>2</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Pour</span>
                                        <span className={styles.stepDesc}>Pour in slow, steady concentric circles from center outward. Keep the slurry level consistent.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>3</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Draw Down</span>
                                        <span className={styles.stepDesc}>Maintain steady flow — avoid channeling. Total brew time should be around 3 minutes.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detail Rows */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best Roast</span>
                                <span className={styles.enhanceValue}>Light to Light-Medium</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor Focus</span>
                                <span className={styles.enhanceValue}>Citrus, Jasmine, Berry, Stone Fruit</span>
                            </div>
                        </div>
                        <div className={styles.enhanceRow} style={{ borderTop: 'none', paddingTop: 0 }}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best For</span>
                                <span className={styles.enhanceValue}>Single Origins, Washed Coffees</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Extraction Type</span>
                                <span className={styles.enhanceValue}>Percolation</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Difficulty</span>
                                <span className={styles.enhanceValue}>Intermediate</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className={styles.deepDiveTip}>
                            <span className="material-symbols-outlined">lightbulb</span>
                            <span>Pour in slow spirals and never pour directly on the filter paper — it causes channeling and uneven extraction.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Method Deep Dive: AeroPress ─── */}
            <section className={styles.deepDiveSection}>
                <div className={styles.deepDiveGrid}>
                    {/* Left — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Versatile Explorer</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            A hybrid brewer that blends immersion and gentle pressure. The
                            AeroPress is forgiving, fast, and highly adaptable — capable of
                            producing a clean, sweet cup or a concentrated espresso-style brew
                            depending on technique. Perfect for experimentation.
                        </p>

                        {/* Method Toggle */}
                        <div className={styles.methodToggle}>
                            <button
                                className={`${styles.methodPill} ${aeroMethod === 'standard' ? styles.methodPillActive : ''}`}
                                onClick={() => setAeroMethod('standard')}
                            >
                                Standard Method
                            </button>
                            <button
                                className={`${styles.methodPill} ${aeroMethod === 'inverted' ? styles.methodPillActive : ''}`}
                                onClick={() => setAeroMethod('inverted')}
                            >
                                Inverted Method
                            </button>
                        </div>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard} key={aeroMethod}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card — {aeroMethod === 'standard' ? 'Standard' : 'Inverted'}</span>
                            </div>
                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>{aeroMethod === 'standard' ? '15g' : '18g'}</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Water</span>
                                    <span className={styles.recipeStatValue}>{aeroMethod === 'standard' ? '225g' : '220g'}</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>{aeroMethod === 'standard' ? '2m' : '2:30'}</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>{aeroMethod === 'standard' ? 'Med-Fine' : 'Medium'}</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>{aeroMethod === 'standard' ? '1:15' : '1:12'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Brew Steps */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">checklist</span>
                                <span>Quick Brew</span>
                            </div>
                            <div className={styles.stepsList}>
                                {aeroMethod === 'standard' ? (
                                    <>
                                        <div className={styles.stepItem}>
                                            <span className={styles.stepNumber}>1</span>
                                            <div className={styles.stepContent}>
                                                <span className={styles.stepTitle}>Add & Pour</span>
                                                <span className={styles.stepDesc}>Place filter and cap. Add coffee, pour water, start timer.</span>
                                            </div>
                                        </div>
                                        <div className={styles.stepItem}>
                                            <span className={styles.stepNumber}>2</span>
                                            <div className={styles.stepContent}>
                                                <span className={styles.stepTitle}>Stir & Steep</span>
                                                <span className={styles.stepDesc}>Stir for 10 seconds. Let steep until 1:30.</span>
                                            </div>
                                        </div>
                                        <div className={styles.stepItem}>
                                            <span className={styles.stepNumber}>3</span>
                                            <div className={styles.stepContent}>
                                                <span className={styles.stepTitle}>Press</span>
                                                <span className={styles.stepDesc}>Press slowly and steadily over 30 seconds. Stop when you hear a hiss.</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.stepItem}>
                                            <span className={styles.stepNumber}>1</span>
                                            <div className={styles.stepContent}>
                                                <span className={styles.stepTitle}>Invert & Load</span>
                                                <span className={styles.stepDesc}>Place AeroPress upside down. Add coffee, pour water.</span>
                                            </div>
                                        </div>
                                        <div className={styles.stepItem}>
                                            <span className={styles.stepNumber}>2</span>
                                            <div className={styles.stepContent}>
                                                <span className={styles.stepTitle}>Steep</span>
                                                <span className={styles.stepDesc}>Stir briefly and steep for 2 minutes. Attach filter cap.</span>
                                            </div>
                                        </div>
                                        <div className={styles.stepItem}>
                                            <span className={styles.stepNumber}>3</span>
                                            <div className={styles.stepContent}>
                                                <span className={styles.stepTitle}>Flip & Press</span>
                                                <span className={styles.stepDesc}>Carefully flip onto mug. Press slowly over 30 seconds.</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Detail Rows */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best Roast</span>
                                <span className={styles.enhanceValue}>Medium to Light-Medium</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor Focus</span>
                                <span className={styles.enhanceValue}>Sweetness, Low Bitterness, Balanced Body</span>
                            </div>
                        </div>
                        <div className={styles.enhanceRow} style={{ borderTop: 'none', paddingTop: 0 }}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best For</span>
                                <span className={styles.enhanceValue}>Travel, Office, Quick Brew</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Extraction</span>
                                <span className={styles.enhanceValue}>Immersion + Pressure</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Difficulty</span>
                                <span className={styles.enhanceValue}>Beginner Friendly</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className={styles.deepDiveTip}>
                            <span className="material-symbols-outlined">lightbulb</span>
                            <span>Try the inverted method for a stronger, more concentrated cup — it gives you full control over steep time.</span>
                        </div>
                    </div>

                    {/* Right — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={aeropressImg}
                                alt="AeroPress brewing method"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>AeroPress</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Method Deep Dive: Siphon ─── */}
            <section className={styles.deepDiveSection}>
                <div className={styles.deepDiveGrid}>
                    {/* Left — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={siphonImg}
                                alt="Siphon vacuum brewer"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>Siphon</span>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Theatrical Vacuum</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            Using vapor pressure and vacuum forces, the Siphon brewer creates a
                            visually stunning extraction process. Water rises into the upper
                            chamber, infuses with coffee, and then is pulled back down through a
                            filter as heat is removed. The result is an exceptionally clean,
                            aromatic, tea-like cup with pronounced clarity.
                        </p>

                        {/* Science Callout */}
                        <div className={styles.scienceCallout}>
                            <div className={styles.scienceCalloutHeader}>
                                <span className="material-symbols-outlined">science</span>
                                <span>How It Works</span>
                            </div>
                            <p className={styles.scienceCalloutText}>
                                Heat creates vapor pressure, forcing water upward into the brewing
                                chamber. When heat is removed, vacuum pressure pulls brewed coffee
                                back down through the filter — separating grounds cleanly and
                                producing a remarkably clear cup.
                            </p>
                        </div>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card — Vacuum Extraction</span>
                            </div>
                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>20g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Water</span>
                                    <span className={styles.recipeStatValue}>320g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>5m</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>Medium</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>1:16</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Brew */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">checklist</span>
                                <span>Quick Brew</span>
                            </div>
                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>1</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Heat Water</span>
                                        <span className={styles.stepDesc}>Fill the lower globe with hot water. Light the burner and bring to a gentle boil.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>2</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Add Coffee</span>
                                        <span className={styles.stepDesc}>As water rises into the upper chamber, add 20g of medium-ground coffee. Start your timer.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>3</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Stir &amp; Brew</span>
                                        <span className={styles.stepDesc}>Gently stir to saturate all grounds. Let brew for 60–90 seconds.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>4</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Remove Heat</span>
                                        <span className={styles.stepDesc}>Remove the burner. Vacuum pressure draws coffee down through the filter into the lower globe.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detail Rows */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best Roast</span>
                                <span className={styles.enhanceValue}>Light to Light-Medium</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor Focus</span>
                                <span className={styles.enhanceValue}>Floral, Citrus, Tea-like Body</span>
                            </div>
                        </div>
                        <div className={styles.enhanceRow} style={{ borderTop: 'none', paddingTop: 0 }}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best For</span>
                                <span className={styles.enhanceValue}>Single Origins, Special Occasions</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Extraction</span>
                                <span className={styles.enhanceValue}>Immersion + Vacuum</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Difficulty</span>
                                <span className={styles.enhanceValue}>Intermediate</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className={styles.deepDiveTip}>
                            <span className="material-symbols-outlined">lightbulb</span>
                            <span>Use a consistent heat source and remove it promptly — the drawdown speed directly affects flavor clarity and sweetness.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Method Deep Dive: Vietnamese Phin ─── */}
            <section className={styles.deepDiveSection}>
                <div className={styles.deepDiveGrid}>
                    {/* Left — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Slow Drip Tradition</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            The Vietnamese Phin is a stainless steel drip brewer that rests
                            directly on your cup. Hot water slowly filters through finely ground
                            coffee, creating a dense, bold concentrate. Traditionally paired with
                            sweetened condensed milk for the iconic Cà phê sữa đá.
                        </p>

                        {/* Cultural Callout */}
                        <div className={styles.scienceCallout}>
                            <div className={styles.scienceCalloutHeader}>
                                <span className="material-symbols-outlined">diversity_3</span>
                                <span>Why It's Unique</span>
                            </div>
                            <p className={styles.scienceCalloutText}>
                                The metal filter allows oils and fine particles through, creating a heavier body and bolder mouthfeel than paper-filtered methods.
                            </p>
                        </div>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card — Slow Drip Extraction</span>
                            </div>
                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>20g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Water</span>
                                    <span className={styles.recipeStatValue}>160g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>6m</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>Fine</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>1:8</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Brew */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">checklist</span>
                                <span>Quick Brew</span>
                            </div>
                            <div className={styles.stepsList}>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>1</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Preheat</span>
                                        <span className={styles.stepDesc}>Rinse with hot water and place on your cup.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>2</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Load &amp; Press</span>
                                        <span className={styles.stepDesc}>Add 20g fine coffee. Place press screen and tighten gently.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>3</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Bloom</span>
                                        <span className={styles.stepDesc}>Add a splash of hot water. Wait 30 seconds to bloom.</span>
                                    </div>
                                </div>
                                <div className={styles.stepItem}>
                                    <span className={styles.stepNumber}>4</span>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepTitle}>Drip</span>
                                        <span className={styles.stepDesc}>Fill to top, cover, and let it drip slowly — about 5 minutes.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detail Rows */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Best Roast</span>
                                <span className={styles.enhanceValue}>Medium to Dark, Robusta Blends</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor Profile</span>
                                <span className={styles.enhanceValue}>Bold, Chocolatey, Nutty, Low Acidity</span>
                            </div>
                        </div>
                        <div className={styles.enhanceRow} style={{ borderTop: 'none', paddingTop: 0 }}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Serving Style</span>
                                <span className={styles.enhanceValue}>Hot, Over Ice, Condensed Milk</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Extraction</span>
                                <span className={styles.enhanceValue}>Gravity Drip (Metal Filter)</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Difficulty</span>
                                <span className={styles.enhanceValue}>Beginner-Friendly</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className={styles.deepDiveTip}>
                            <span className="material-symbols-outlined">lightbulb</span>
                            <span>Add 2–3 tablespoons of sweetened condensed milk to the glass before brewing for a traditional Cà phê sữa đá experience.</span>
                        </div>
                    </div>

                    {/* Right — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={phinImg}
                                alt="Vietnamese Phin filter brewing"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>Vietnamese Phin</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Method Deep Dive: Espresso ─── */}
            <section className={styles.deepDiveSection}>
                <div className={styles.deepDiveGrid}>
                    {/* Left — Image */}
                    <div className={styles.deepDiveImageWrap}>
                        <div className={styles.deepDiveImageInner}>
                            <img
                                src={espressoImg}
                                alt="Espresso machine extraction"
                                className={styles.deepDiveImg}
                            />
                            <div className={styles.deepDiveImgOverlay}></div>
                            <span className={styles.deepDiveImgLabel}>Espresso</span>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className={styles.deepDiveContent}>
                        <h3 className={styles.deepDiveMethodTitle}>Pressure Perfected</h3>
                        <div className={styles.deepDiveAccent}></div>
                        <p className={styles.deepDiveDesc}>
                            Water at ~9 bars is forced through a finely ground, tightly packed
                            coffee puck in 25–30 seconds — producing a concentrated shot layered
                            with crema, body, and heart. Small changes in grind, dose, or time
                            dramatically affect balance.
                        </p>

                        {/* Recipe Card */}
                        <div className={styles.recipeCard}>
                            <div className={styles.recipeCardHeader}>
                                <span className="material-symbols-outlined">receipt_long</span>
                                <span>Recipe Card — Pressure Extraction</span>
                            </div>
                            <div className={styles.recipeStats}>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Coffee</span>
                                    <span className={styles.recipeStatValue}>18g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Output</span>
                                    <span className={styles.recipeStatValue}>36g</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Time</span>
                                    <span className={styles.recipeStatValue}>28s</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Grind</span>
                                    <span className={styles.recipeStatValue}>V. Fine</span>
                                </div>
                                <div className={styles.recipeStat}>
                                    <span className={styles.recipeStatLabel}>Ratio</span>
                                    <span className={styles.recipeStatValue}>1:2</span>
                                </div>
                            </div>
                        </div>

                        {/* Dial-In Specs */}
                        <div className={styles.brewSteps}>
                            <div className={styles.brewStepsHeader}>
                                <span className="material-symbols-outlined">tune</span>
                                <span>Dial-In Essentials</span>
                            </div>
                            <div className={styles.specGrid}>
                                <div className={styles.specItem}>
                                    <span className={styles.specLabel}>Dose</span>
                                    <span className={styles.specValue}>18g</span>
                                </div>
                                <div className={styles.specItem}>
                                    <span className={styles.specLabel}>Yield</span>
                                    <span className={styles.specValue}>36g</span>
                                </div>
                                <div className={styles.specItem}>
                                    <span className={styles.specLabel}>Brew Time</span>
                                    <span className={styles.specValue}>28s</span>
                                </div>
                                <div className={styles.specItem}>
                                    <span className={styles.specLabel}>Temp</span>
                                    <span className={styles.specValue}>92–96°C</span>
                                </div>
                                <div className={styles.specItem}>
                                    <span className={styles.specLabel}>Pressure</span>
                                    <span className={styles.specValue}>9 Bar</span>
                                </div>
                                <div className={styles.specItem}>
                                    <span className={styles.specLabel}>Yield Type</span>
                                    <span className={styles.specValue}>Double Shot</span>
                                </div>
                            </div>
                        </div>

                        {/* Detail Rows */}
                        <div className={styles.enhanceRow}>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Flavor</span>
                                <span className={styles.enhanceValue}>Dark Chocolate, Caramel, Roasted Nuts</span>
                            </div>
                            <div className={styles.enhanceItem}>
                                <span className={styles.enhanceLabel}>Body</span>
                                <span className={styles.enhanceValue}>Heavy, Low Acidity</span>
                            </div>
                        </div>

                        {/* Bean Badges */}
                        <div className={styles.beanBadges}>
                            <span className={styles.beanBadge}>Modern House Blend</span>
                            <span className={styles.beanBadge}>Blue Tokai Attikan Estate</span>
                            <span className={styles.beanBadge}>Naivo Monsooned Malabar</span>
                            <span className={styles.beanBadge}>KC Roasters Dark Matter</span>
                        </div>

                        {/* Myth Callout */}
                        <div className={styles.scienceCallout}>
                            <div className={styles.scienceCalloutHeader}>
                                <span className="material-symbols-outlined">info</span>
                                <span>Good to Know</span>
                            </div>
                            <p className={styles.scienceCalloutText}>
                                Espresso is not a bean — it's a method. Any coffee can be brewed as espresso with the right grind, dose, and pressure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ─── Espresso Styles ─── */}
                <div className={styles.espressoStylesWrap}>
                    <h4 className={styles.espressoStylesTitle}>Espresso Styles</h4>
                    <div className={styles.espressoStylesGrid}>

                        {/* Ristretto */}
                        <div className={styles.styleCard}>
                            <div className={styles.styleCardHead}>
                                <span className={styles.styleCardTitle}>Ristretto</span>
                                <span className={styles.styleCardSub}>Restricted Shot</span>
                            </div>
                            <div className={styles.styleCardSpecs}>
                                <div className={styles.styleSpec}><span>Ratio</span><span>1:1 – 1:1.5</span></div>
                                <div className={styles.styleSpec}><span>Example</span><span>18g → 20–27g</span></div>
                                <div className={styles.styleSpec}><span>Time</span><span>20–25s</span></div>
                                <div className={styles.styleSpec}><span>Flavor</span><span>Syrupy, sweet, intense</span></div>
                            </div>
                            <div className={styles.bodyIndicator}>
                                <span className={styles.bodyLabel}>Body</span>
                                <div className={styles.bodyDots}>
                                    {[1, 2, 3, 4, 5].map(i => <span key={i} className={`${styles.bodyDot} ${styles.bodyDotFilled}`}></span>)}
                                </div>
                            </div>
                            <p className={styles.styleCardDesc}>
                                Shorter extraction emphasizing sweetness and viscosity with reduced bitterness.
                            </p>
                        </div>

                        {/* Espresso Normale */}
                        <div className={`${styles.styleCard} ${styles.styleCardHighlight}`}>
                            <div className={styles.styleCardHead}>
                                <span className={styles.styleCardTitle}>Espresso</span>
                                <span className={styles.styleCardSub}>Classic Balance</span>
                            </div>
                            <div className={styles.styleCardSpecs}>
                                <div className={styles.styleSpec}><span>Ratio</span><span>1:2</span></div>
                                <div className={styles.styleSpec}><span>Example</span><span>18g → 36g</span></div>
                                <div className={styles.styleSpec}><span>Time</span><span>25–30s</span></div>
                                <div className={styles.styleSpec}><span>Flavor</span><span>Balanced, layered</span></div>
                            </div>
                            <div className={styles.bodyIndicator}>
                                <span className={styles.bodyLabel}>Body</span>
                                <div className={styles.bodyDots}>
                                    {[1, 2, 3, 4].map(i => <span key={i} className={`${styles.bodyDot} ${styles.bodyDotFilled}`}></span>)}
                                    <span className={styles.bodyDot}></span>
                                </div>
                            </div>
                            <p className={styles.styleCardDesc}>
                                The reference shot with layered crema, balanced sweetness, acidity, and clarity.
                            </p>
                        </div>

                        {/* Lungo */}
                        <div className={styles.styleCard}>
                            <div className={styles.styleCardHead}>
                                <span className={styles.styleCardTitle}>Lungo</span>
                                <span className={styles.styleCardSub}>Long Shot</span>
                            </div>
                            <div className={styles.styleCardSpecs}>
                                <div className={styles.styleSpec}><span>Ratio</span><span>1:2.5 – 1:3</span></div>
                                <div className={styles.styleSpec}><span>Example</span><span>18g → 45–54g</span></div>
                                <div className={styles.styleSpec}><span>Time</span><span>30–40s</span></div>
                                <div className={styles.styleSpec}><span>Flavor</span><span>Bitter, lighter texture</span></div>
                            </div>
                            <div className={styles.bodyIndicator}>
                                <span className={styles.bodyLabel}>Body</span>
                                <div className={styles.bodyDots}>
                                    {[1, 2].map(i => <span key={i} className={`${styles.bodyDot} ${styles.bodyDotFilled}`}></span>)}
                                    {[3, 4, 5].map(i => <span key={i} className={styles.bodyDot}></span>)}
                                </div>
                            </div>
                            <p className={styles.styleCardDesc}>
                                Longer extraction producing a lighter-bodied cup with more bitter compounds.
                            </p>
                        </div>
                    </div>

                    <p className={styles.espressoStylesNote}>
                        These styles use the same espresso grind and machine — only the yield and extraction length change.
                    </p>
                </div>
            </section>

            {/* ─── Find Your Method ─── */}
            <section className={styles.fymSection}>
                <div className={styles.fymHeader}>
                    <h2 className={styles.fymTitle}>FIND YOUR METHOD</h2>
                    <p className={styles.fymSubtitle}>
                        Match your flavor preference to the perfect brewing method.
                    </p>
                </div>

                <div className={styles.fymContentGrid}>
                    {/* Left — Cards */}
                    <div className={styles.fymCards}>
                        <div className={`${styles.fymCard} ${styles.fymBold}`}>
                            <div className={styles.fymCardBody}>
                                <h3 className={styles.fymCardTitle}>Heavy &amp; Bold</h3>
                                <p className={styles.fymCardDesc}>Full-bodied immersion brew with rich oils and deep, lingering mouthfeel.</p>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Body</span> Heavy</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Acidity</span> Low</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Best For</span> Dark roasts, Milk drinks</span>
                                </div>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Brew Time</span> 4 min</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Grind</span> Coarse</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Difficulty</span> Easy</span>
                                </div>
                                <span className={styles.fymCardExtra}>
                                    <span className="material-symbols-outlined">local_cafe</span>
                                    Flavor Notes — Chocolate, Nutty, Caramel, Low Acidity
                                </span>
                            </div>
                            <span className={styles.fymTag}>French Press</span>
                        </div>

                        <div className={`${styles.fymCard} ${styles.fymBright}`}>
                            <div className={styles.fymCardBody}>
                                <h3 className={styles.fymCardTitle}>Clean &amp; Bright</h3>
                                <p className={styles.fymCardDesc}>Paper-filtered pour-over that highlights floral notes and origin clarity.</p>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Body</span> Light</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Acidity</span> High</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Best For</span> Single origins, Fruity notes</span>
                                </div>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Brew Time</span> 3 min</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Grind</span> Medium-Fine</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Difficulty</span> Moderate</span>
                                </div>
                                <span className={styles.fymCardExtra}>
                                    <span className="material-symbols-outlined">local_cafe</span>
                                    Flavor Notes — Floral, Citrus, Berry, Bright Acidity
                                </span>
                            </div>
                            <span className={styles.fymTag}>V60 / Chemex</span>
                        </div>

                        <div className={`${styles.fymCard} ${styles.fymIntense}`}>
                            <div className={styles.fymCardBody}>
                                <h3 className={styles.fymCardTitle}>Strong &amp; Intense</h3>
                                <p className={styles.fymCardDesc}>Pressure-driven extraction delivering concentrated, crema-rich shots.</p>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Body</span> Concentrated</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Acidity</span> Medium</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Best For</span> Quick energy, Small servings</span>
                                </div>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Brew Time</span> 25–30s</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Grind</span> Very Fine</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Difficulty</span> Advanced</span>
                                </div>
                                <span className={styles.fymCardExtra}>
                                    <span className="material-symbols-outlined">local_cafe</span>
                                    Flavor Notes — Dark Chocolate, Roasted Nuts, Caramel, Syrupy
                                </span>
                            </div>
                            <span className={styles.fymTag}>Espresso</span>
                        </div>

                        <div className={`${styles.fymCard} ${styles.fymSweet}`}>
                            <div className={styles.fymCardBody}>
                                <h3 className={styles.fymCardTitle}>Versatile &amp; Sweet</h3>
                                <p className={styles.fymCardDesc}>Hybrid brewer that adapts to any recipe — immersion, pressure, or both.</p>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Body</span> Medium</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Acidity</span> Balanced</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Best For</span> Experimenting, Travel brewing</span>
                                </div>
                                <div className={styles.fymMeta}>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Brew Time</span> 2 min</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Grind</span> Medium</span>
                                    <span className={styles.fymMetaItem}><span className={styles.fymMetaLabel}>Difficulty</span> Easy</span>
                                </div>
                                <span className={styles.fymCardExtra}>
                                    <span className="material-symbols-outlined">local_cafe</span>
                                    Flavor Notes — Sweet, Smooth, Balanced, Clean Finish
                                </span>
                            </div>
                            <span className={styles.fymTag}>AeroPress</span>
                        </div>
                    </div>

                    {/* Right — Image Grid */}
                    <div className={styles.fymImageGrid}>
                        <div className={styles.fymImgWrap}>
                            <img src={frenchPressCardImg} alt="French Press" />
                        </div>
                        <div className={styles.fymImgWrap}>
                            <img src={v60CardImg} alt="V60 Pour Over" />
                        </div>
                        <div className={styles.fymImgWrap}>
                            <img src={espressoCupImg} alt="Espresso" />
                        </div>
                        <div className={styles.fymImgWrap}>
                            <img src={mokaCardImg} alt="Moka Pot" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Your Journey Starts Here CTA ─── */}
            <section className={styles.journeySection}>
                <div className={styles.journeyGlow} />
                <div className={styles.journeyContent}>
                    <h2 className={styles.journeyTitle}>YOUR JOURNEY STARTS HERE</h2>
                    <p className={styles.journeyDesc}>
                        You have the beans, the roast, and the grind. Now explore our detailed
                        step-by-step guides for every brewing device.
                    </p>
                    <button
                        className={styles.journeyBtn}
                        onClick={() => document.getElementById('method-deep-dive')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span>Explore Brew Guides</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Brewing;

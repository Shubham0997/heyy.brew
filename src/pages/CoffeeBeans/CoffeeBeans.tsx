import styles from './CoffeeBeans.module.css';
import coffeeCherryImg from '../../assets/cofeeBeansPage/images/coffeeCherry.png';
import coffeeFarmImg from '../../assets/cofeeBeansPage/images/coffeeFarm.png';
import indianCoffeeFarmImg from '../../assets/cofeeBeansPage/images/indianCoffeeFarm.png';

const CoffeeBeans = () => {
    return (
        <div className={`${styles.coffeeBeans} container`}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    {/* Left Text Block */}
                    <div className={styles.heroText}>
                        <span className={styles.eyebrow}>THE ORIGIN</span>

                        <h1 className={styles.headline}>
                            Coffee Beans
                        </h1>
                        <div className={styles.dash} />
                        <h2 className={styles.subheadline}>
                            Where Flavor<br />Begins
                        </h2>

                        <p className={styles.heroParagraph}>
                            Before the roast, before the grind, and before the brew,
                            there is the bean. Understanding the humble seed of the
                            Coffea fruit is the first step to mastering your cup.
                        </p>

                        <div className={styles.tagRow}>
                            <div className={styles.tagItem}>
                                <span className={styles.tagIcon}>
                                    <span className="material-symbols-outlined">spa</span>
                                </span>
                                <span className={styles.tagLabel}>Botanical Origins</span>
                            </div>
                            <span className={styles.tagDivider} />
                            <span className={styles.tagLabel}>Coffea Arabica &amp; Robusta</span>
                        </div>
                    </div>

                    {/* Right Image Block */}
                    <div className={styles.heroImage}>
                        <img
                            src={coffeeCherryImg}
                            alt="Ripe coffee cherries on branch"
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </div>
            </section>

            {/* ─── Arabica vs Robusta Comparison ─── */}
            <section className={styles.compareSection}>
                <div className={styles.compareHeader}>
                    <h2 className={styles.compareTitle}>Arabica vs Robusta</h2>
                    <p className={styles.compareSubtext}>
                        While over 100 coffee species exist, the global coffee world is dominated by two
                        primary varieties: <em>Coffea Arabica</em> and <em>Coffea Canephora</em> (Robusta).
                        Understanding their differences helps you choose the profile that matches your taste.
                    </p>
                </div>

                <div className={styles.compareGrid}>
                    {/* Arabica Card */}
                    <div className={`${styles.compareCard} ${styles.cardArabica}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardIcon}>
                                <span className="material-symbols-outlined">diamond</span>
                            </span>
                            <h3 className={styles.cardTitle}>Coffea Arabica</h3>
                        </div>

                        <p className={styles.cardDescription}>
                            The connoisseur's choice. Arabica beans grow at higher elevations and are prized
                            for their complexity, layered sweetness, and refined acidity. Expect nuanced
                            flavors ranging from floral to fruit-forward.
                        </p>

                        <div className={styles.infoRows}>
                            <div className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <span className="material-symbols-outlined">landscape</span>
                                </span>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Elevation</span>
                                    <span className={styles.infoValue}>600m – 2000m+</span>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <span className="material-symbols-outlined">bolt</span>
                                </span>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Caffeine</span>
                                    <span className={styles.infoValue}>1.2% – 1.5% (Lower)</span>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <span className="material-symbols-outlined">flare</span>
                                </span>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Acidity</span>
                                    <span className={styles.infoValue}>Higher, brighter</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flavorTags}>
                            <span className={styles.flavorTag}>Floral</span>
                            <span className={styles.flavorTag}>Fruity</span>
                            <span className={styles.flavorTag}>Sugar</span>
                        </div>
                    </div>

                    {/* Robusta Card */}
                    <div className={`${styles.compareCard} ${styles.cardRobusta}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardIcon}>
                                <span className="material-symbols-outlined">shield</span>
                            </span>
                            <h3 className={styles.cardTitle}>Robusta</h3>
                        </div>

                        <p className={styles.cardDescription}>
                            The resilient powerhouse. Robusta thrives at lower elevations and delivers
                            bold intensity, higher caffeine, and a heavier body — ideal for espresso
                            blends and crema-rich cups.
                        </p>

                        <div className={styles.infoRows}>
                            <div className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <span className="material-symbols-outlined">landscape</span>
                                </span>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Elevation</span>
                                    <span className={styles.infoValue}>0m – 800m</span>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <span className="material-symbols-outlined">bolt</span>
                                </span>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Caffeine</span>
                                    <span className={styles.infoValue}>2.2% – 2.7% (High)</span>
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <span className="material-symbols-outlined">opacity</span>
                                </span>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Body</span>
                                    <span className={styles.infoValue}>Heavy, syrupy</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.flavorTags}>
                            <span className={styles.flavorTag}>Earthy</span>
                            <span className={styles.flavorTag}>Bitter</span>
                            <span className={styles.flavorTag}>Heavy Body</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Cultivation Section ─── */}
            <section className={styles.cultivationSection}>
                <div className={styles.cultivationGrid}>
                    {/* Left — Image */}
                    <div className={styles.cultivationImage}>
                        <img
                            src={coffeeFarmImg}
                            alt="Lush coffee plantation landscape"
                        />
                    </div>

                    {/* Right — Content */}
                    <div className={styles.cultivationContent}>
                        <div className={styles.cultivationLabel}>
                            <span className={styles.cultivationLabelIcon}>
                                <span className="material-symbols-outlined">local_florist</span>
                            </span>
                            <span className={styles.cultivationLabelText}>CULTIVATION</span>
                        </div>

                        <h2 className={styles.cultivationHeading}>
                            It starts with a <span className={styles.cherryUnderline}>cherry</span>.
                        </h2>

                        <p className={styles.cultivationBody}>
                            Coffee beans are actually the seeds of a fruit similar to a cherry.
                            It takes about 3 to 4 years for a newly planted coffee tree to bear
                            fruit. The fruit, called the coffee cherry, turns a bright, deep red
                            when it is ripe and ready to be harvested.
                        </p>

                        <div className={styles.metaHighlights}>
                            <div className={styles.metaBlock}>
                                <div className={styles.metaTop}>
                                    <span className={styles.metaIcon}>
                                        <span className="material-symbols-outlined">schedule</span>
                                    </span>
                                    <span className={styles.metaValue}>9 Months</span>
                                </div>
                                <span className={styles.metaCaption}>From flowering to harvest.</span>
                            </div>

                            <span className={styles.metaDivider} />

                            <div className={styles.metaBlock}>
                                <div className={styles.metaTop}>
                                    <span className={styles.metaIcon}>
                                        <span className="material-symbols-outlined">back_hand</span>
                                    </span>
                                    <span className={styles.metaValue}>Hand-Picked</span>
                                </div>
                                <span className={styles.metaCaption}>For the highest quality selection.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Terroir & Origin Section ─── */}
            <section className={styles.terroirSection}>
                <div className={styles.terroirHeader}>
                    <h2 className={styles.terroirTitle}>Terroir &amp; Origin</h2>
                    <p className={styles.terroirSubtext}>
                        Just like wine, the soil, climate, and region where coffee is grown
                        dramatically affect its flavor profile.
                    </p>
                </div>

                <div className={styles.terroirGrid}>
                    {/* Africa */}
                    <div className={styles.terroirCard}>
                        <span className={styles.terroirIcon}>
                            <span className="material-symbols-outlined">public</span>
                        </span>
                        <h3 className={styles.terroirCardTitle}>Africa</h3>
                        <p className={styles.terroirCardBody}>
                            Birthplace of coffee. Known for vibrant acidity, floral aromatics,
                            and complex fruit-forward profiles.
                        </p>
                        <span className={styles.profileLabel}>PROFILE</span>
                        <div className={styles.profileTags}>
                            <span className={styles.profileTag}>Fruity</span>
                            <span className={styles.profileTag}>Floral</span>
                            <span className={styles.profileTag}>Bright Acidity</span>
                        </div>
                    </div>

                    {/* Latin America */}
                    <div className={styles.terroirCard}>
                        <span className={styles.terroirIcon}>
                            <span className="material-symbols-outlined">landscape</span>
                        </span>
                        <h3 className={styles.terroirCardTitle}>Latin America</h3>
                        <p className={styles.terroirCardBody}>
                            The most familiar profile for many. Balanced, approachable cups with
                            notes of chocolate, nuts, and caramel sweetness.
                        </p>
                        <span className={styles.profileLabel}>PROFILE</span>
                        <div className={styles.profileTags}>
                            <span className={styles.profileTag}>Nutty</span>
                            <span className={styles.profileTag}>Chocolate</span>
                            <span className={styles.profileTag}>Caramel</span>
                        </div>
                    </div>

                    {/* Asia-Pacific */}
                    <div className={styles.terroirCard}>
                        <span className={styles.terroirIcon}>
                            <span className="material-symbols-outlined">waves</span>
                        </span>
                        <h3 className={styles.terroirCardTitle}>Asia-Pacific</h3>
                        <p className={styles.terroirCardBody}>
                            Often bold and earthy with deeper body. Frequently used in darker
                            roasts and espresso blends.
                        </p>
                        <span className={styles.profileLabel}>PROFILE</span>
                        <div className={styles.profileTags}>
                            <span className={styles.profileTag}>Earthy</span>
                            <span className={styles.profileTag}>Spicy</span>
                            <span className={styles.profileTag}>Full Body</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Indian Coffee Section ─── */}
            <section className={styles.indianSection}>
                <div className={styles.indianGrid}>
                    {/* Left — Image */}
                    <div className={styles.indianImage}>
                        <img
                            src={indianCoffeeFarmImg}
                            alt="Western Ghats coffee plantation"
                        />
                        <div className={styles.indianImageOverlay} />
                        <div className={styles.indianImageCaption}>
                            <span className={styles.indianImageLabel}>WESTERN GHATS</span>
                            <span className={styles.indianImageTitle}>The Land of Spices</span>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className={styles.indianContent}>
                        <h2 className={styles.indianHeading}>
                            <span className={styles.indianHeadingDark}>Indian Coffee —</span>
                            <br />
                            <span className={styles.indianHeadingAccent}>A Hidden Gem</span>
                        </h2>

                        <p className={styles.indianBody}>
                            Often overshadowed, Indian coffee is unique in the world because it is
                            grown entirely under the shade of heavy natural forest canopies. This slow
                            maturation allows the beans to develop intense flavor profiles, often
                            intercropped with spices like cardamom, pepper, and clove.
                        </p>

                        {/* Feature Card 1 — Shade Grown */}
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardInner}>
                                <span className={styles.featureCardIcon}>
                                    <span className="material-symbols-outlined">eco</span>
                                </span>
                                <div className={styles.featureCardText}>
                                    <h3 className={styles.featureCardTitle}>Shade-Grown Heritage</h3>
                                    <p className={styles.featureCardBody}>
                                        Grown under natural forest canopies, preserving biodiversity and
                                        enriching soil health.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 — Monsooned Malabar */}
                        <div className={`${styles.featureCard} ${styles.featureCardAccented}`}>
                            <div className={styles.featureCardInner}>
                                <span className={styles.featureCardIcon}>
                                    <span className="material-symbols-outlined">air</span>
                                </span>
                                <div className={styles.featureCardText}>
                                    <h3 className={styles.featureCardTitle}>Monsooned Malabar</h3>
                                    <p className={styles.featureCardBody}>
                                        A process unique to India where harvested beans are exposed to
                                        moisture-laden monsoon winds for 3–4 months. The result? A pale gold
                                        bean with a heavy body, muted acidity, and distinct musty, chocolatey notes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Region Micro Cards */}
                        <div className={styles.regionChips}>
                            <div className={styles.regionChip}>
                                <span className={styles.regionChipName}>Karnataka</span>
                                <span className={styles.regionChipDetail}>70% of production. Rich &amp; balanced.</span>
                            </div>
                            <div className={styles.regionChip}>
                                <span className={styles.regionChipName}>Kerala</span>
                                <span className={styles.regionChipDetail}>Robusta focused. Bold &amp; strong.</span>
                            </div>
                            <div className={styles.regionChip}>
                                <span className={styles.regionChipName}>Tamil Nadu</span>
                                <span className={styles.regionChipDetail}>Arabica heavy. Citrusy notes.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── The Altitude Impact Section ─── */}
            <section className={styles.altitudeSection}>
                <div className={styles.altitudeCard}>
                    <div className={styles.altitudeHeader}>
                        <h2 className={styles.altitudeTitle}>The Altitude Impact</h2>
                        <p className={styles.altitudeSubtext}>
                            Higher Elevation = Harder Bean = More Flavor
                        </p>
                    </div>

                    <div className={styles.timeline}>
                        {/* Very High Altitude */}
                        <div className={`${styles.timelineItem} ${styles.timelineItemActive}`}>
                            <div className={styles.timelineTrack}>
                                <div className={styles.timelineNode} />
                                <div className={styles.timelineLine} />
                            </div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Very High Altitude</h3>
                                <span className={styles.timelineElevation}>1,500m+ (5,000ft+)</span>
                                <p className={styles.timelineNotes}>
                                    Berries, floral, spice. High acidity and complexity.
                                </p>
                            </div>
                            <span className={styles.timelineIcon}>
                                <span className="material-symbols-outlined">cloud</span>
                            </span>
                        </div>

                        {/* High Altitude */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTrack}>
                                <div className={styles.timelineNode} />
                                <div className={styles.timelineLine} />
                            </div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>High Altitude</h3>
                                <span className={styles.timelineElevation}>1,200m – 1,500m</span>
                                <p className={styles.timelineNotes}>
                                    Citrus, vanilla, chocolate, nut. Medium acidity.
                                </p>
                            </div>
                            <span className={styles.timelineIcon}>
                                <span className="material-symbols-outlined">terrain</span>
                            </span>
                        </div>

                        {/* Moderate Altitude */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTrack}>
                                <div className={styles.timelineNode} />
                            </div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>Moderate Altitude</h3>
                                <span className={styles.timelineElevation}>900m – 1,200m</span>
                                <p className={styles.timelineNotes}>
                                    Smooth, sweet, low acidity.
                                </p>
                            </div>
                            <span className={styles.timelineIcon}>
                                <span className="material-symbols-outlined">grass</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Bean Processing Methods Section ─── */}
            <section className={styles.processingSection}>
                <div className={styles.processingHeader}>
                    <h2 className={styles.processingTitle}>Bean Processing Methods</h2>
                    <p className={styles.processingSubtext}>
                        How coffee is processed after harvest dramatically shapes sweetness,
                        body, acidity, and clarity in your cup.
                    </p>
                </div>

                <div className={styles.processingGrid}>
                    {/* Washed */}
                    <div className={styles.processingCard}>
                        <div className={styles.processingCardIconWrap}>
                            <span className="material-symbols-outlined">water_drop</span>
                        </div>
                        <h3 className={styles.processingCardTitle}>Washed (Wet Process)</h3>
                        <p className={styles.processingCardDesc}>
                            The fruit is fully removed before drying. Fermentation breaks down
                            and cleans the mucilage layer, resulting in exceptional clarity,
                            brightness, and a clean expression of the bean's intrinsic terroir.
                        </p>
                        <div className={styles.processingDivider} />
                        <span className={styles.cupImpactLabel}>Cup Impact</span>
                        <div className={styles.cupAttributes}>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Flavor</span>
                                <span className={styles.cupAttrValue}>Clean, defined</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Body</span>
                                <span className={styles.cupAttrValue}>Light to medium</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Acidity</span>
                                <span className={styles.cupAttrValue}>Bright, crisp</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Sweetness</span>
                                <span className={styles.cupAttrValue}>Subtle, refined</span>
                            </div>
                        </div>
                    </div>

                    {/* Natural */}
                    <div className={styles.processingCard}>
                        <div className={styles.processingCardIconWrap}>
                            <span className="material-symbols-outlined">sunny</span>
                        </div>
                        <h3 className={styles.processingCardTitle}>Natural (Dry Process)</h3>
                        <p className={styles.processingCardDesc}>
                            Whole cherries dry intact under the sun. The fruit sugars slowly
                            absorb into the seed over weeks, producing intense fruit-forward
                            flavors, heavier body, and a wine-like sweetness.
                        </p>
                        <div className={styles.processingDivider} />
                        <span className={styles.cupImpactLabel}>Cup Impact</span>
                        <div className={styles.cupAttributes}>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Flavor</span>
                                <span className={styles.cupAttrValue}>Fruity, wine-like</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Body</span>
                                <span className={styles.cupAttrValue}>Medium to heavy</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Acidity</span>
                                <span className={styles.cupAttrValue}>Softer, rounded</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Sweetness</span>
                                <span className={styles.cupAttrValue}>Pronounced, syrupy</span>
                            </div>
                        </div>
                    </div>

                    {/* Honey */}
                    <div className={styles.processingCard}>
                        <div className={styles.processingCardIconWrap}>
                            <span className="material-symbols-outlined">hive</span>
                        </div>
                        <h3 className={styles.processingCardTitle}>Honey Process</h3>
                        <p className={styles.processingCardDesc}>
                            A hybrid approach where partial mucilage is left on the bean during
                            drying. This balances the clarity of washed with the natural sweetness
                            of dry processing, yielding layered, caramel-like complexity.
                        </p>
                        <div className={styles.processingDivider} />
                        <span className={styles.cupImpactLabel}>Cup Impact</span>
                        <div className={styles.cupAttributes}>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Flavor</span>
                                <span className={styles.cupAttrValue}>Sweet, layered</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Body</span>
                                <span className={styles.cupAttrValue}>Medium</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Acidity</span>
                                <span className={styles.cupAttrValue}>Balanced</span>
                            </div>
                            <div className={styles.cupAttribute}>
                                <span className={styles.cupAttrLabel}>Sweetness</span>
                                <span className={styles.cupAttrValue}>Rich, caramel-like</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Closing CTA Section ─── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaOverlay} />
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaHeading}>The Bean is Just the Beginning</h2>
                    <p className={styles.ctaBody}>
                        Now that you understand the origin, discover how heat transforms
                        green coffee into aroma, sweetness, and depth.
                    </p>
                    <a href="/roasting" className={styles.ctaButton}>
                        <span>Explore Roasting</span>
                        <span className={`material-symbols-outlined ${styles.ctaArrow}`}>arrow_forward</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CoffeeBeans;

import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import beansIcon from '../../assets/features/beans.png';
import roastingIcon from '../../assets/features/roasting.png';
import grindingIcon from '../../assets/features/grinding.png';
import brewingIcon from '../../assets/features/brewing.png';

// Journey section icons
import coffeePlants from '../../assets/plantToCup/coffeePlants.png';
import coffeeProcessing from '../../assets/plantToCup/coffeeProcessing.png';
import coffeeRoasting from '../../assets/plantToCup/coffeeRoasting.png';
import coffeeGrinding from '../../assets/plantToCup/coffeeGrinding.png';
import coffeeBrewing from '../../assets/plantToCup/coffeeBrewinf.png';
import arrowIcon from '../../assets/plantToCup/arrow.png';

const journeySteps = [
    {
        icon: coffeePlants,
        title: 'Growing',
        subtitle: 'Cultivated for flavor',
        description: 'Coffee begins on the plant. Altitude, climate, soil, and care all shape the sweetness, acidity, and complexity of the final cup.'
    },
    {
        icon: coffeeProcessing,
        title: 'Processing',
        subtitle: 'Washed and dried',
        description: 'After harvest, beans are carefully processed to remove fruit, locking in clarity, balance, and distinctive regional character.'
    },
    {
        icon: coffeeRoasting,
        title: 'Roasting',
        subtitle: 'Aromatic transformation',
        description: 'Heat unlocks flavor. Roasting develops aromas and taste, revealing notes that range from bright and fruity to rich and chocolatey.'
    },
    {
        icon: coffeeGrinding,
        title: 'Grinding',
        subtitle: 'Perfect consistency',
        description: 'Grinding controls extraction. The right size and uniformity ensure water flows evenly, creating a balanced and expressive brew.'
    },
    {
        icon: coffeeBrewing,
        title: 'Brewing',
        subtitle: 'Unlocking full flavor',
        description: 'Water meets coffee. Brewing turns all the previous steps into a cup—shaped by method, ratio, and personal preference.'
    },
];

const Home = () => {
    return (
        <div className={`${styles.home} container`}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>
                        Welcome to<br />heyy<span>.</span>brew
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Your journey into the world of specialty coffee starts here.
                        From understanding where beans come from to mastering how you brew them, heyy.brew is a space to explore coffee with curiosity, clarity, and care — one cup at a time.
                    </p>
                    <Link to="/coffee-beans" className={styles.heroButton}>
                        Discover the Journey
                    </Link>
                </div>
            </section>

            <section className={styles.features}>
                <div className={styles.featureCard}>
                    <div className={styles.iconWrapper}>
                        <img src={beansIcon} alt="" className={styles.featureIcon} />
                    </div>
                    <h3>Coffee Beans</h3>
                    <p className={styles.cardTagline}>Everything starts with the bean.</p>
                    <p>
                        Learn about coffee origins, plant varieties, and how climate, soil, and processing shape the flavors in your cup.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.iconWrapper}>
                        <img src={roastingIcon} alt="" className={styles.featureIcon} />
                    </div>
                    <h3>Roasting</h3>
                    <p className={styles.cardTagline}>The moment coffee finds its character.</p>
                    <p>
                        Explore how different roast levels develop aroma, sweetness, acidity, and body—from light and bright to deep and bold.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.iconWrapper}>
                        <img src={grindingIcon} alt="" className={styles.featureIcon} />
                    </div>
                    <h3>Grinding</h3>
                    <p className={styles.cardTagline}>Small changes, big impact.</p>
                    <p>
                        Understand grind sizes, consistency, and why the right grind is essential for balanced extraction and better-tasting coffee.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.iconWrapper}>
                        <img src={brewingIcon} alt="" className={styles.featureIcon} />
                    </div>
                    <h3>Brewing</h3>
                    <p className={styles.cardTagline}>Turn knowledge into a great cup.</p>
                    <p>
                        Discover popular brewing methods, ratios, and techniques to brew coffee that matches your taste and style.
                    </p>
                </div>
            </section>

            {/* Seed to Cup Journey Section */}
            <section className={styles.journeySection}>
                <h2 className={styles.journeyTitle}>Seed → Cup Journey</h2>
                <div className={styles.journeyContainer}>
                    {journeySteps.map((step, index) => (
                        <div key={step.title} className={styles.journeyStepWrapper}>
                            <div className={styles.journeyStep}>
                                <div className={styles.journeyIconWrapper}>
                                    <img src={step.icon} alt={step.title} className={styles.journeyIcon} />
                                </div>
                                <h4 className={styles.journeyStepTitle}>{step.title}</h4>
                                <p className={styles.journeyStepSubtitle}>{step.subtitle}</p>
                                <p className={styles.journeyStepDescription}>{step.description}</p>
                            </div>
                            {index < journeySteps.length - 1 && (
                                <img src={arrowIcon} alt="" className={styles.journeyArrow} />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

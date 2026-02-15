import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';
import loadingGif from '../../assets/loading/Video_Generated_With_Custom_Background-ezgif.com-video-to-gif-converter.gif';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
    duration?: number;
}

const LoadingScreen = ({ onLoadingComplete, duration = 4000 }: LoadingScreenProps) => {
    const [isFading, setIsFading] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setIsVisible(false);
                onLoadingComplete();
            }, 500);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.loadingScreen} ${isFading ? styles.fadeOut : ''}`}>
            <img src={loadingGif} alt="Loading..." className={styles.loadingGif} />
        </div>
    );
};

export default LoadingScreen;

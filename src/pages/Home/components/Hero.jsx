import React, {useEffect} from 'react'

function Hero() {
    useEffect(() => {
        const animatedElement = document.getElementById('animatedElement');

        // Function to handle scroll and animate the element
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const viewportHeight = window.innerHeight;
            const startAnimationOffset = 0; // Start animation at the top of the page
            const endAnimationOffset = viewportHeight * 0.65; // End animation at 65% of viewport height

            // Calculate the progress of the scroll within the animation range
            const progress = Math.max(0, Math.min(1, (scrollTop - startAnimationOffset) / (endAnimationOffset - startAnimationOffset)));

            // Calculate the scale based on the progress (smoothly increase from 1 to 1.2)
            const scale = 1 + 0.2 * progress;

            // Apply the scale to the element
            animatedElement.style.transform = `scale(${scale})`;
        }

        // Listen for the scroll event and call the handleScroll function
        window.addEventListener('scroll', handleScroll);

        // Initial call to handleScroll to set initial state
        handleScroll();
    }, [])

    return (
        <div className="header-section">
            <div className="header">
                <div className="header-jol"><img src="/public/images/jol.svg" loading="lazy" alt="" className="image-2" /></div>
                <div id="animatedElement" className="header-dishes"><img src="/public/images/dishes-pyramid.webp" loading="eager" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 1031.995361328125px, 100vw" srcSet="/images/dishes-pyramid-p-500.webp 500w, /images/dishes-pyramid-p-800.webp 800w, /images/dishes-pyramid.webp 1024w" alt="" className="image-3" /></div>
            </div>
        </div>
    )
}

export default Hero;

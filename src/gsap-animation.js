import { gsap } from "gsap";

// animation for home page 

export const homePageAnimation = (headingAnimation, animateDesignation) => {
    const elementSelectors = [headingAnimation, animateDesignation];

    const masterTimeline = gsap.timeline({
        defaults: {
            delay: 0.1,
            duration: 0.5,
            clipPath: 'inset(0 0 100% 0)'
        },
    });

    elementSelectors.map((animateSelectedElements) => {
        masterTimeline.from(animateSelectedElements, {
            y: -50
        });
    });
}

// animation for portfolio page

export const portfolioPageAnimation = (animateCardWrapper) => {
    const selectCardWrapper = animateCardWrapper;

    gsap.from(selectCardWrapper, {
        y: 50,
        delay: 0.1,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0
    });
}


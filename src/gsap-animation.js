import { gsap } from "gsap";

// animation for home page 

export const homePageAnimation = (headingAnimation, animateDesignation, animateDescription, animateButton) => {
    const elementSelectors = [headingAnimation, animateDesignation, animateDescription, animateButton];

    const masterTimeline = gsap.timeline({
        defaults: {
            delay: 0.1,
            duration: 0.5,
            clipPath: 'inset(0 0 100% 0)'
        },
    });
    elementSelectors.forEach((animateSelectedElements) => {
        masterTimeline.from(animateSelectedElements, {
            y: -50
        }, "-=0.1");

    });
}

// animation for portfolio page

export const portfolioPageAnimation = (animateCardWrapper) => {
    const selectCardWrapper = animateCardWrapper;

    gsap.from(selectCardWrapper, {
        y: 50,
        ease: "power3.out",
        duration: 0.8,
        stagger: 0.1,
        opacity: 0
    });
}


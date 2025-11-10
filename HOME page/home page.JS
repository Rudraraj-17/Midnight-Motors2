const scrollElements = document.querySelectorAll('.scroll-element');

        const elementInView = (el, offset = 0) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
        };

        const displayScrollElement = (el) => el.classList.add('show');
        const hideScrollElement = (el) => el.classList.remove('show');

        const handleScrollAnimation = () => {
            scrollElements.forEach(el => {
                if(elementInView(el, 100)) displayScrollElement(el);
                else hideScrollElement(el);
            });
        };

        window.addEventListener('scroll', handleScrollAnimation);

        // Testimonials randomizer
        const testimonials = [
            "Best collection and support!",
            "A must for car lovers!",
            "Exceptional experience from start to finish!",
            "Outstanding customer service and reliability!",
            "A great platform for all car enthusiasts!",
            "Highly recommended for quality and performance!",
            "A wonderful community of car lovers!",
            "Fast, reliable, and super helpful team!",
            "Midnight Motors made finding the perfect car effortless — their collection and customer support are top-notch!",
            "Absolutely thrilled with the service and the quality of cars available — highly recommend!",
            "A fantastic platform for car enthusiasts; the team is knowledgeable and friendly.",
            "I found exactly what I was looking for — fast, reliable, and hassle-free experience.",
            "Exceptional attention to detail and a great selection of vehicles for every taste.",
            "The customer service is outstanding, and the cars are of superb quality.",
            "Midnight Motors truly understands car lovers — a seamless and enjoyable experience.",
            "Their collection is impressive, and the team goes above and beyond to help customers.",
            "I’m extremely satisfied with my purchase — professional, fast, and trustworthy.",
            "A wonderful experience from browsing to delivery; every step was smooth and efficient."
        ];

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function displayRandomTestimonials() {
            shuffle(testimonials);
            document.getElementById('testimonial1').textContent = testimonials[0];
            document.getElementById('testimonial2').textContent = testimonials[1];
            document.getElementById('testimonial3').textContent = testimonials[2];
        }

        window.addEventListener('load', displayRandomTestimonials);
        handleScrollAnimation();
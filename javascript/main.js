        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add shadow to navigation on scroll
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 10) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });

        // Add animation on scroll for benefit cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.benefit-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Accordion interaction for Connect with Community
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', function() {
                const accordionItem = this.parentElement;
                const communityType = this.getAttribute('data-community');
                const detail = document.getElementById(communityType + '-detail');
                const isActive = accordionItem.classList.contains('active');

                // Close all open accordions
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                    const itemDetail = item.querySelector('.community-detail');
                    if (itemDetail) {
                        itemDetail.style.maxHeight = null;
                        itemDetail.classList.remove('active');
                    }
                });

                // If it wasn't active, open it
                if (!isActive && detail) {
                    accordionItem.classList.add('active');
                    detail.classList.add('active');
                    detail.style.maxHeight = detail.scrollHeight + 'px';

                    // Wait for previous accordion to collapse, then scroll
                    setTimeout(function() {
                        const headerTop = accordionItem.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top: headerTop, behavior: 'smooth' });
                    }, 350);
                }
            });
        });

// Contact form submission handler
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');

                if (!name || !email || !subject || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Create mailto link with form data
                const mailtoLink = `mailto:taterrien@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                )}`;

                window.location.href = mailtoLink;

                alert(`Thank you, ${name}! Your default email client will open with your message pre-filled. Please send the email to complete your inquiry.`);

                this.reset();
            });
        }

// Doc Commons inquiry form submission handler
        const docCommonsForm = document.getElementById('docCommonsForm');
        if (docCommonsForm) {
            docCommonsForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const specialty = formData.get('specialty');

                if (!name || !email || !specialty) {
                    alert('Please fill in all fields.');
                    return;
                }

                const subject = 'Doc Commons Inquiry from NAORP';
                const body = `Hello,\n\nI'm interested in learning more about Doc Commons.\n\nName: ${name}\nEmail: ${email}\nSpecialty / Years practiced: ${specialty}\n\nPlease tell me more about Doc Commons.\n\nThank you.`;

                const mailtoLink = `mailto:robert@physemp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                window.location.href = mailtoLink;

                alert(`Thank you, ${name}! Your default email client will open with your message pre-filled. Please send the email to complete your inquiry.`);

                this.reset();
            });
        }

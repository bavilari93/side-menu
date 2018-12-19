$(() => {
            const navLinks = document.getElementById("nav").querySelectorAll("a");
            const mainSection = document.querySelectorAll("main section");

            window.addEventListener('scroll', () => {
                    // top distance
                    let fromTop = window.scrollY;
                    let offset = window.pageYOffset;

                    // iterate through nav links 
                    navLinks.forEach(link => {
                           
                                    // section selection
                                    let section = document.querySelector(link.hash);
                                    let slideImage = section.querySelector('.slide-background');
                                    if (
                                        // offsetTop the pixel from the top 
                                        section.offsetTop <= fromTop &&
                                        // returns the height of the element 
                                        section.offsetTop + section.offsetHeight > fromTop
                                    ) {
                                        link.style.color = "#ffa502";
                                        slideImage.style.transform="rotate(90deg)";

                                    } else {
                                        link.style.color = "white";
                                        slideImage.style.transform="rotate(0deg)";

                                    }

                            })

                        // parallax
                        const parallax = document.getElementById('parallax'); parallax.style.backgroundPositionY = offset * 0.4 + 'px';

                    })

                // icon slider up 
                let icon = document.getElementById('icon'); console.log(icon); icon.addEventListener('click', (() => {
                    let slider = $('.slider')[0];
                    slider.style.height = "30%";

                }))

            })
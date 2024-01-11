import React, { useEffect } from 'react';
import Skills from './Skills';
import Facts from './Facts';
import Testimonials from './Testimonials';
import Head from './Head';
import Title from './Title';




const About = () => {
    const loadScript = (src) => {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script')
            script.src = src
            script.addEventListener('load', function () {
                resolve()
            })
            script.addEventListener('error', function (e) {
                reject(e)
            })
            document.body.appendChild(script)
            document.body.removeChild(script)
        })
    }

    useEffect(() => {
        loadScript(`${process.env.PUBLIC_URL}/assets/js/main.js`)
        setTimeout(() => {
            setTimeout(() => {
            }, 500)
            loadScript(`${process.env.PUBLIC_URL}/assets/js/main.js`)
        }, 200)
    }, [])
    return (
        <>
            <Head title="About" />
            <section id="about" className="about">
            <div class="container" data-aos="fade-up">
    <Title title="About Us"></Title>
    <div class="row">
        <div class="col-lg-4">
            <img src="assets\img\about.JPG" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>MERN Stack Developer</h3>
            <p class="fst-italic">
                Versatile MERN Stack Developer Building Dynamic Web Solutions.
            </p>
            <div class="row">
                <div class="col-lg-6">
                    <ul>
                        <li><i class="bi bi-rounded-right"></i><strong>Birthday:</strong> October 26, 1997</li>
                        <li><i class="bi bi-rounded-right"></i><strong>Website:</strong> <a href="https://www.arslankhan.online/">www.arslankhan.online</a></li>
                        <li><i class="bi bi-rounded-right"></i><strong>Phone:</strong> +92 3224388580</li>
                        <li><i class="bi bi-rounded-right"></i><strong>City:</strong> Lahore, Pakistan</li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <ul>
                        <li><i class="bi bi-rounded-right"></i><strong>Age:</strong> 27</li>
                        <li><i class="bi bi-rounded-right"></i><strong>Degree:</strong> Bachelor of Science in Software Engineering (BSSE)</li>
                        <li><i class="bi bi-rounded-right"></i><strong>Email:</strong> Arslankhan2029@gmail.com</li>
                        <li><i class="bi bi-rounded-right"></i><strong>Freelance:</strong> Available</li>
                    </ul>
                </div>
            </div>
            <p>
                Passionate and skilled MERN Stack Developer with a knack for building dynamic and innovative web solutions. Highly proficient in the end-to-end development process, dedicated to creating user-centric applications that elevate user experiences. Available for freelance opportunities.
            </p>
        </div>
    </div>
</div>

            </section>
            <Skills />
            <Facts />
            <Testimonials />
        </>
    )
}

export default About
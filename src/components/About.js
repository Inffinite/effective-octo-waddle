import '../styles/about.css';

function About() {

    function openLink(link) {
        window.open(link)
    }

    const projects = [
        {
            name: "Website Design",
            count: "12 projects"
        },
        {
            name: "UI/UX Design",
            count: "4 projects"
        },
        {
            name: "Graphic Design",
            count: "10 projects"
        },
    ]

    const work = [
        {
            name: "Gilian's website",
            subtitle: "Client's portfolio website",
            url: 'https://www.behance.net/gallery/130283255/portfolio',
            imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/40a5b9130283255.617c62f37ea4f.jpg'
        },
        {
            name: "Catch up",
            subtitle: "Concept ui for a chat application",
            url: 'https://www.behance.net/gallery/130280173/catch-up',
            imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff1bf7130280173.617c519352100.jpg'
        },
        {
            name: "Star Edge",
            subtitle: "Concept ui design for an internet company",
            url: 'https://www.behance.net/gallery/130283417/Internet-service-provider-website',
            imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d0b48c130283417.617c63fcc3fc8.png'
        },
    ]

    return (
        <div>
            <div className="about">
                <div>
                    <div className="a-title">
                        What do i do?
            </div>
                    <div className="a-desc">
                        I will help you with finding a solution
                        to your problems. I use process design
                        to create digital products.
            </div>

                    <div className="a-count">
                        <div className="count-item">
                            <div className="c-value">23+</div>
                            <div className="c-desc">
                                Projects Completed
                    </div>
                        </div>

                        <div className="count-item">
                            <div className="c-value">18+</div>
                            <div className="c-desc">
                                Happy Clients
                    </div>
                        </div>
                    </div>
                </div>


                <div className="a-services">
                    {
                        projects.map((data, idx) => (
                            <div className="a-service">
                                <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1H8a3 3 0 0 0-3 3v1.5a1.5 1.5 0 0 1-3 0V6z" clip-rule="evenodd" /><path d="M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2h2a2 2 0 0 0 2-2v-2z" /></svg>
                                <div className="s-dets">
                                    <div className="service-title">
                                        {data.name}
                                    </div>
                                    <div className="service-count">
                                        {data.count}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="works">
                <div className="w-title">
                    My Works
                </div>

                <div className="w-works-wr">
                    {
                        work.map((data, idx) => (
                            <div>
                                <div className="w-work">
                                    <img className="w-pic" src={data.imageUrl} alt="r" />
                                </div>

                                <div className="w-name">
                                    {data.name}
                                </div>

                                <div className="w-desc">
                                    {data.subtitle}
                                </div>

                                <div className="w-work-btn-wr">
                                    <button onClick={() => openLink(data.url)} className="w-work-btn">
                                        Explore
                            </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;
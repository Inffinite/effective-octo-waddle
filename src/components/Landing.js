import '../styles/landing.css'
import av from '../assets/av.png'
import About from './About'

function Landing() {
    function openLink(link){
        window.open(link)
    }

    return (
        <div className="landing-wr">
            <div className="landing">
                <div className="nav">
                    <div onClick={() => openLink('https://github.com/nagisa2') } className="n-none-item">
                    <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" space="preserve"><path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"/></svg>
                        Github
                    </div>
                    <div onClick={() => openLink('https://api.whatsapp.com/send?phone=254702777148&text=Hello') } className="n-item">
                    <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" space="preserve"><path d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8zm4.655 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z"/></svg>
                        Whatsapp
                    </div>

                    <div onClick={() => openLink('https://www.behance.net/collinsodongo1') } className="n-none-item">
                    <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" space="preserve"><path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z"/></svg>
                        Behance
                    </div>
                </div>
                <div className="personal">
                    <div className="pic-Container">
                        <img className="pic" alt="P" src={av} />
                    </div>
                </div>
                <div className="container">
                    <div>
                        <div className="p-title">
                            Hi, I'm <span className="green">Collins 👋🏽</span>
                        </div>
                        <div className="p-highlight">
                            Graphic designer, UI & UX designer, Developer
                        </div>

                        <div className="p-desc">
                            I am a passionate Graphic designer with all round skills from logo design to creating company
                            profile, brand and house style.
                        </div>

                        <div className="container">
                            <button onClick={() => openLink('https://api.whatsapp.com/send?phone=254702777148&text=Hello') } className="p-btn">
                                Lets talk
                            </button>
                        </div>

                        <About />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
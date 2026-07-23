export default function contacts(){
    return(
        <section className="relative min-h-screen">
            <div className="text-center font-bond mt-20">
                
            <h1 className="text-5xl"> Contact me </h1>  
            <p className="text-2xl mt-20">Reach out to me on LinkedIn / Github</p>  
            </div>

            <div className="mt-10 flex justify-center gap-8">
                <a href="https://www.linkedin.com/in/c%C3%A9sar-dianov-91b3993a0/" >
                    <img src="/linkedin-83.png" alt="LinkedIn" className="w-15 h-15 " />
                </a>

                <a href="https://github.com/CesarDanielDianov" >
                    <img src="/github.png" alt="github" className="w-15 h-15 " />
                </a>
            </div>
            
            <div className="text-center  mt-20">
                <p >─────────────  OR  ─────────────</p>
                <p>Use my contact form </p>
            </div>
            
        </section>
    );
}
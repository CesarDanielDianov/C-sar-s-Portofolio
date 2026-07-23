export default function cv(){
    return(
        <section className="relative min-h-screen">
            <div className="flex justify-center text-center mt-20">
                <p>
                    If Your browser does not support PDFs.
                </p>
                <a href="/cv.pdf" download className="font-bold underline decoration-dotted">
                    Download CV
                </a>     

            </div>

        <iframe
            src="/cv.pdf"
            className="w-3/4 h-screen mx-auto mt-10 mb-20"
        />            
        </section>
    );
}
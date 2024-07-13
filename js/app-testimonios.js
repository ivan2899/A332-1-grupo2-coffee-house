const TestimoniosComponent = {
    template: `
        <section id="testimonios">
            <div class="titulo-header text-center mb-5">
                <h2>Testimonios</h2>
                <div class="underline">
                    <div class="line"></div>
                    <div class="dot"></div>
                    <div class="line"></div>
                </div>
            </div>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="testimonio card h-100 text-center ">
                            <img src="./img/usuarioTestimonio1.jpg" class="card-img-top rounded mx-auto position-relative"
                                alt="testimonio1">
                            <div class="div-icon">
                                <span class="icon ">👍</span>
                            </div>
                            <div class="testimonio-text">
                                <p>"Desde el momento en que el aroma del café recién hecho llega a mi nariz, hasta el primer sorbo que
                                acaricia mi paladar, cada taza es una experiencia única y reconfortante. Recomiendo!! 💯💯"</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="testimonio card h-100 text-center ">
                            <img src="./img/usuarioTestimonio2.jpg" class="card-img-top rounded mx-auto position-relative"
                                alt="testimonio2">
                            <div class="div-icon">
                                <span class="icon ">⭐</span>
                            </div>
                            <div class="testimonio-text">
                                <p>"Cada sorbo de este café es un viaje a la tierra de la felicidad. ¡Una experiencia que no solo
                                despierta mis sentidos, sino tambien mi alma!🤯☕☕"</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="testimonio card h-100 text-center ">
                            <img src="./img/usuarioTestimonio3.jpg" class="card-img-top rounded mx-auto position-relative"
                                alt="testimonio3">
                            <div class="div-icon">
                                <span class="icon ">👍</span>
                            </div>
                            <div class="card-text testimonio-text">
                                <p>Lo utilizo para mantenerme despierto en reuniones de oficina
                                interminables, el café es mi fiel compañero. Si no, estaría más perdido que pingüino en el desierto.
                                ¡Comprá café y mantente despierto!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

  
const testimonioApp = Vue.createApp({}); 

testimonioApp.component('testimonios-component', TestimoniosComponent);
testimonioApp.mount('#app-testimonios');
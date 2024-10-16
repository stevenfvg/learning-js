export default function mainSection() {
    return `
        <div class="col-md-10 col-ms-12 vh-100 border-start py-3" id="properties">
            <h5 class="text-center fw-bold">Total: <span>0</span></h5>
            <div class="container text-center py-3">
                <div class="row row-cols-1 row-cols-lg-4 g-2">
                
                    <div class="col">
                        <div class="card p-2" aria-hidden="true">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    `;
}
export default function mainSection() {
    return `
        <div class="col-md-10 col-ms-12 vh-100 border-start py-3" id="properties">
            <h5 class="text-center fw-bold">Total: <span>0</span></h5>
            <div class="container text-center py-3">
                <div class="row row-cols-1 row-cols-lg-4 g-2">
                    <!-- Demo Card -->
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">Mansion</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="text-sm mb-1">Rooms: 2</p>
                                    <p class="text-sm mb-1">Meters: 170 m&sup2;</p>
                                </div>
                                <p class="card-text text-sm text-truncate fw-light">Giant mansion away from the city and in an excellent country setting</p>
                                <button type="button" class="btn btn-secondary w-100 mx-auto" disabled>
                                    <i class="bi bi-eye mr-1"></i>
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
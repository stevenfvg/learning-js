export default function infoBar() {
    return `
        <section class="bg-white py-4 shadow-sm">
            <div class="container">
                <div class="row align-items-center g-0">
                    <!-- Features -->
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
                        <div class="d-flex align-items-center">
                            <span class="icon-shape icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4">
                                <i class="fe fe-video"></i>
                            </span>
                            <div class="ms-3">
                                <h4 class="mb-0 fw-semibold">30,000 online courses</h4>
                                <p class="mb-0">Enjoy a variety of fresh topics</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Features -->
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
                        <div class="d-flex align-items-center">
                            <span class="icon-shape icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4">
                                <i class="fe fe-users"></i>
                            </span>
                            <div class="ms-3">
                                <h4 class="mb-0 fw-semibold">Expert instruction</h4>
                                <p class="mb-0">Find the right instructor for you</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Features -->
                    <div class="col-xl-4 col-lg-4 col-md-12">
                        <div class="d-flex align-items-center">
                            <span class="icon-shape icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4">
                                <i class="fe fe-clock"></i>
                            </span>
                            <div class="ms-3">
                                <h4 class="mb-0 fw-semibold">Lifetime access</h4>
                                <p class="mb-0">Learn on your schedule</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

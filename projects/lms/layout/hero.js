export default function hero() {
    return `
        <div class="bg-primary">
            <div class="container">
                <!-- Hero Section -->
                <div class="row align-items-center no-gutters">
                    <div class="col-xl-5 col-lg-6 col-md-12">
                        <div class="py-5 py-lg-0">
                            <h1 class="text-white display-4 fw-bold">Welcome to Geeks UI Learning Application</h1>
                            <p class="text-white-50 mb-4 lead">
                                Hand-picked Instructor and expertly crafted courses, designed for the modern students and
                                entrepreneur.
                            </p>
                            <a href="#!" class="btn btn-success disabled">Browse Courses</a>
                            <a href="#!" class="btn btn-white disabled">Are You Instructor?</a>
                        </div>
                    </div>
                    <div class=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
                        <img src="../public/assets/images/hero/hero-img.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    `;
}

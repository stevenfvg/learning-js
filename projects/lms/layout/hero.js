export default function hero() {
    return `
        <!-- Hero Section -->
        <section class="py-md-8 py-6"
            style="background-image: url(./../../public/dist/assets/images/mentor/mentor-glow.svg); background-repeat: no-repeat; background-size: container">
            <div class="container py-lg-6">
                <!-- row -->
                <div class="row align-items-center gy-4 justify-content-center">
                    <div class="col-xxl-5 col-xl-6 col-md-10">
                        <div class="d-flex flex-column gap-5 text-center">
                            <div class="d-flex flex-column gap-2">
                                <span class="text-dark fs-5">Learn a new skill, launch a project, land your dream
                                career.</span>
                                <!-- heading -->
                                <h1 class="mb-0 display-2 fw-bold">
                                    <span>1-on-1</span>
                                    <span class=" text-primary"
                                        data-strings="Javascript, Startup, React, Marketing, Branding"></span>
                                    <div>Mentorship</div>
                                </h1>
                            </div>
                            <div class="d-flex flex-column gap-3">
                                <!-- form -->
                                <form>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control form-control-lg"
                                            placeholder="Search by Skills" aria-label="Search by Skills"
                                            aria-describedby="basic-addon2" />
                                        <button class="btn btn-primary btn-lg" id="basic-addon2">Find mentors</button>
                                    </div>
                                </form>

                                <div class="gap-2 d-flex flex-wrap justify-content-center">
                                    <a href="#!" class="btn btn-tag btn-sm">Frontend</a>
                                    <a href="#!" class="btn btn-tag btn-sm">Devops</a>
                                    <a href="#!" class="btn btn-tag btn-sm">UI/UX designer</a>
                                    <a href="#!" class="btn btn-tag btn-sm">Data Science</a>
                                    <a href="#!" class="btn btn-tag btn-sm">Full Stack</a>
                                    <a href="#!" class="btn btn-tag btn-sm">Backend</a>
                                    <a href="#!" class="btn btn-tag btn-sm">Data Analyst</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

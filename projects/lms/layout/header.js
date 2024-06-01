export default function header() {
    return `
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid px-0">
                <div class="d-flex">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../public/dist/assets/images/brand/logo/logo.svg" alt="logo" />
                    </a>
                </div>
                <div class="order-lg-3">
                    <div class="d-flex align-items-center">
                        <div class="dropdown me-2">
                            <button
                                class="btn btn-light btn-icon rounded-circle d-flex align-items-center bd-theme"
                                type="button"
                                aria-expanded="false"
                                data-bs-toggle="dropdown"
                                aria-label="Toggle theme (auto)">
                                    <i class="bi theme-icon-active"></i>
                                    <span class="visually-hidden bs-theme-text">Toggle theme</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                                <li>
                                    <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                                        <i class="bi theme-icon bi-sun-fill"></i>
                                        <span class="ms-2">Light</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                                        <i class="bi theme-icon bi-moon-stars-fill"></i>
                                        <span class="ms-2">Dark</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                    type="button"
                                    class="dropdown-item d-flex align-items-center active"
                                    data-bs-theme-value="auto"
                                    aria-pressed="true">
                                        <i class="bi theme-icon bi-circle-half"></i>
                                        <span class="ms-2">Auto</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <span class="d-none d-md-block">
                            <a href="#" class="btn btn-icon btn-light rounded-circle"><i class="fe fe-shopping-cart align-middle"></i></a>
                        </span>
                        <a href="#" class="btn btn-outline-primary ms-2 disabled">Sign in</a>
                        <a href="#" class="btn btn-primary ms-1 d-none d-lg-block disabled">Sign up</a>
                    </div>
                </div>
            </div>    
        </nav>
    `;
}

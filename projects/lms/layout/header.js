export default function header() {
    return `
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid px-0">
                <a class="navbar-brand" href="../index.html">
                    <img src="../public/dist/assets/images/brand/logo/logo.svg" alt="logo" />
                </a>
                <!-- Mobile view nav wrap -->
                <div class="ms-auto d-flex align-items-center order-lg-3">
                    <div>
                        <div class="dropdown me-1">
                            <button class="btn btn-light btn-icon rounded-circle d-flex align-items-center bd-theme"
                                type="button" aria-expanded="false" data-bs-toggle="dropdown"
                                aria-label="Toggle theme (auto)">
                                <i class="bi theme-icon-active"></i>
                                <span class="visually-hidden bs-theme-text">Toggle theme</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                                <li>
                                    <button type="button" class="dropdown-item d-flex align-items-center"
                                        data-bs-theme-value="light" aria-pressed="false">
                                        <i class="bi theme-icon bi-sun-fill"></i>
                                        <span class="ms-2">Light</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="dropdown-item d-flex align-items-center"
                                        data-bs-theme-value="dark" aria-pressed="false">
                                        <i class="bi theme-icon bi-moon-stars-fill"></i>
                                        <span class="ms-2">Dark</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="dropdown-item d-flex align-items-center active"
                                        data-bs-theme-value="auto" aria-pressed="true">
                                        <i class="bi theme-icon bi-circle-half"></i>
                                        <span class="ms-2">Auto</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="navbar-nav navbar-right-wrap mx-1 flex-row">
                        <li class="dropdown d-inline-block stopevent position-static">
                            <a class="btn btn-light btn-icon rounded-circle" href="#"
                                role="button" id="dropdownShoppingCart" 
                                data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i class="fe fe-shopping-cart align-middle"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg position-absolute w-auto mx-3 my-5" aria-labelledby="dropdownNotificationSecond">
                                <div id="shoppingCart">
                                    <div class="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                                        <span class="h5 mb-0">Shopping Cart</span>
                                        <a href="#!">
                                            <span class="align-middle">
                                                <i class="fe fe-external-link me-1"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <ul class="list-group list-group-flush" style="height: auto;" id="shoppingCart-list" data-simplebar></ul>
                                    <div class="border-top px-3 pt-3 pb-0">
                                        <a href="#" class="btn btn-white w-100" id="empty-shoppingCart" >
                                            Empty cart <i class="fe fe-trash-2 me-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown ms-2 d-inline-block position-static">
                            <a class="rounded-circle" href="#!" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                <div class="avatar avatar-md avatar-online">
                                    <img alt="avatar" src="../public/dist/assets/images/avatar/avatar.jpg" class="rounded-circle" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

export default function filterSection() {
    return `
        <div class="col-md-2 col-sm-12 py-3">
            <form class="row g-3 pt-4 needs-validation" id="filter-form" novalidate>
                <div class"col-sm-12">
                    <label for="rooms" class="w-100 form-label fw-bold text-center">Number of rooms:</label>
                    <input type="number" class="form-control w-50 m-auto" id="rooms" placeholder="0" min="1" required>
                    <div class="invalid-feedback text-center">
                        <!-- Custom validation message will be added here -->
                    </div>
                </div>
                <div class"col-12">
                    <label for="" class="w-100 form-label fw-bold text-center text-capitalize mb-0">square meters</label>
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="from" class="w-100 form-label text-center text-capitalize">from:</label>
                    <input type="number" class="form-control" id="from" placeholder="0" min="0" required>
                    <div class="invalid-feedback">
                        <!-- Custom validation message will be added here -->
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="to" class="w-100 form-label text-center text-capitalize">to:</label>
                    <input type="number" class="form-control" id="to" placeholder="0" min="0" required>
                    <div class="invalid-feedback">
                        <!-- Custom validation message will be added here -->
                    </div>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-primary text-capitalize w-100 mx-auto" id="search-btn" disabled>
                        <i class="bi bi-search mr-1"></i>    
                        search
                    </button>
                </div>
            </form>
        </div>
    `;
}
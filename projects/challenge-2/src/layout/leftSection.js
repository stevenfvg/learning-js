export default function leftSection() {
    return `
        <div class="col-md-6 col-sm-12">
            <div class="container">
                <h1 class="w-100 text-center fs-1">Student Registration</h1>
                <form class="row g-3 pt-4 needs-validation" id="record-form" novalidate>
                    <div class="col-sm-12 col-md-6">
                        <input type="text" class="col-6 form-control" id="first-name" placeholder="First name" required>
                        <div class="invalid-feedback">
                            <!-- Custom validation message will be added here -->
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <input type="text" class="col-6 form-control" id="last-name" placeholder="Last name" required>
                        <div class="invalid-feedback">
                            <!-- Custom validation message will be added here -->
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <input type="number" class="form-control" id="age" placeholder="Age" min="18" required>
                        <div class="invalid-feedback">
                            <!-- Custom validation message will be added here -->
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-10">
                        <input type="email" class="form-control" id="email" placeholder="Email" required>
                        <div class="invalid-feedback">
                            <!-- Custom validation message will be added here -->
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary mb-2" id="submit-btn" disabled>Add Record</button>
                    </div>
                    <div class="col-12">
                        <input type="hidden" id="edit-index" value="-1">
                    </div>
                </form>
            </div>
        </div>
    `;
}

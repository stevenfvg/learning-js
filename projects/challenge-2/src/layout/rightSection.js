export default function rightSection() {
    return `
        <div class="col-md-6 col-ms-12 border-start">
            <div class="container pt-2">
                <h2 class="w-100 text-start fs-2 mb-0">Records</h2>
                <div class="table-responsive mt-4">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="bg-light-subtle fw-semibold">Name</th>
                                <th class="bg-light-subtle fw-semibold">Age</th>
                                <th class="bg-light-subtle fw-semibold">Email</th>
                                <th class="bg-light-subtle fw-semibold">Edit</th>
                                <th class="bg-light-subtle fw-semibold">Delete</th>
                            </tr>
                        </thead>
                        <tbody id="record-list"></tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

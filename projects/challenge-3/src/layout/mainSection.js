export default function mainSection() {
    return `
        <div class="col-md-10 col-ms-12 border-start py-3">
            <h5 class="text-center fw-bold">Total: <span id="total"></span></h5>
            <div class="container text-center py-3">
                <div class="row row-cols-1 row-cols-lg-4 g-2" id="properties">
                    <!-- Add the structure of the cards here. -->
                </div>
            </div>
        </div>
    `;
}
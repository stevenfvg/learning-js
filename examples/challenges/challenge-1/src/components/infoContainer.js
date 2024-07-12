export default function infoContainer() {
    return `
        <div class="w-auto h-auto ms-4 p-2">
            <label class="fw-medium">Total: <span id="total-amount"></span></label>
            <br />
            <label class="fw-medium">Quantity: <span id="quantity"></span></label>
            <br />
            <label class="fw-medium me-1">Color: </label> 
            <div class="bg-secondary rounded-circle d-inline-block" style="width: 14px; height: 14px;"></div>
        </div>
    `;
}

export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [
        recordForm,
        firstNameInput,
        lastNameInput,
        ageInput,
        emailInput,
        recordList,
        editIndexInput,
    ] = elements;

    let records = [];

    // Display records
    const displayRecords = () => {
        recordList.innerHTML = '';
        if (records.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="5" class="text-center text-danger">No Record Found</td>`;
            recordList.appendChild(row);
        } else {
            // If it is different from 0, show the student data.
        }
    };

    // Initial display
    displayRecords();
}

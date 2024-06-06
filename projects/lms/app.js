import courses from './public/data/courses.json';

export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [courseList] = elements;

    // Function that renders the courses in a <div> with the "card" class.
    const showCourses = (element, data) => {
        const gridContainer = element.firstElementChild;
        data.forEach(course => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('col');
            gridItem.innerHTML = `
                <!-- Card -->
                <div class="card card-hover">
                    <img src="${course.img}" class="card-img-top">
                    <!-- Card Body -->
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-${course.classBadge}-soft">${course.difficulty}</span>
                            <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                        </div>
                        <h4 class="mb-2 text-truncate-line-2 ">
                            <a href="#" class="text-inherit">
                                ${course.description}
                            </a>
                        </h4>
                        <small>By: ${course.instructor}</small>
                        <div class="mt-3 d-flex align-baseline lh-1">
                            <span class="fs-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                    class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                            <span class="text-warning mx-1">4.5</span>
                            <span class="fs-6 ">${course.reputation}</span>
                        </div>
                    </div>
                    <!-- Card Footer -->
                    <div class="card-footer">
                        <div class="row align-items-center g-0">
                            <div class="col">
                                <h5 class="mb-0">${course.price.toLocaleString(
                                    'en-US',
                                        {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 2,
                                        }
                                    )}
                                </h5>
                            </div>
                            <div class="col-auto">
                                <a href="#" class="text-inherit">
                                    <i class="fe fe-shopping-cart text-primary  me-2"></i>Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            gridContainer.appendChild(gridItem);
        });
    };

    showCourses(courseList, courses);
}

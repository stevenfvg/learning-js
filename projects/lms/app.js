import courses from './public/data/courses.json';

export function getElementsFromDom(elements) {
    // Getting HTML elements from the DOM.
    const [cart, cartContainer, emptyCartButton, courseList] = elements;
    // Array to store courses added to the shopping cart.
    let coursesAddedToCart = [];

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
                            <a href="#!" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                        </div>
                        <h4 class="mb-2 text-truncate-line-2 ">
                            <a href="#!" class="text-inherit" id="title">${
                                course.description
                            }</a>
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
                                <h5 class="mb-0" id="price">${course.price.toLocaleString(
                                    'en-US',
                                    {
                                        style: 'currency',
                                        currency: 'USD',
                                        minimumFractionDigits: 2,
                                    }
                                )}</h5>
                            </div>
                            <div class="col-auto">
                                <a href="#" class="text-inherit add-to-cart" data-id="${
                                    course.id
                                }">
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

    // Feature to load event listeners to interact with the course list and shopping cart.
    const loadEventListeners = () => {
        // Add an event listener to the course list to handle clicks and adding courses to the shopping cart.
        courseList.addEventListener('click', addCourseToCart);
        // Add an event listener to the shopping cart to handle clicks and remove courses from the cart.
        cart.addEventListener('click', removeCourseFromCart);
        // Add an event listener to the "Empty Cart" button to handle clicks and remove all courses from the shopping cart.
        emptyCartButton.addEventListener('click', () => {
            // Se reacciona un arreglo vacio a la variable coursesAddedToCart.
            // Then remove duplicate courses from the cart.
            coursesAddedToCart = [];
            removeDuplicateCoursesInCart();
        });
    };

    // This function is executed when a course is clicked to add to cart.
    const addCourseToCart = e => {
        e.preventDefault();
        // Checks if the clicked item has class 'add-to-cart'.
        if (e.target.classList.contains('add-to-cart')) {
            const selectedCourse = e.target.closest('.card');
            // The getCourse Data function is called to get the course data.
            getCourseData(selectedCourse);
        }
    };

    // Removes a course from the shopping cart when the Delete button is clicked.
    const removeCourseFromCart = e => {
        e.preventDefault();
        // Check if the clicked element has class 'fe-x'.
        if (e.target.classList.contains('fe-x')) {
            // Get the unique identifier of the course to be deleted.
            const courseIdentifier = e.target.parentElement.getAttribute('data-id');
            // Filters the course with the matching identifier to the coursesAddedToCart array.
            coursesAddedToCart = coursesAddedToCart.filter(
                course => course.id !== courseIdentifier
            );
            // Updates the list of courses displayed in the shopping cart.
            listCoursesInCart();
        }
    };

    // This function gets the data from the selected course and stores it in an object.
    const getCourseData = course => {
        const courseData = {
            img: course.querySelector('img').src,
            title: course.querySelector('#title').textContent,
            price: course.querySelector('#price').textContent,
            id: course.querySelector('.add-to-cart').getAttribute('data-id'),
        };

        // Check if an item already exists in the shopping cart.
        const courseExistsInCart = coursesAddedToCart.some(
            course => course.id === courseData.id
        );

        if (courseExistsInCart) {
            // Checks if the course already exists in the shopping cart.
            const courses = coursesAddedToCart.map(course => {
                if (course.id === courseData.id) {
                    alert('The course is already added to the cart');
                    return course; // Return the updated object.
                } else {
                    return course; // Returns an object with no duplicate elements.
                }
            });
            coursesAddedToCart = [...courses];
        } else {
            coursesAddedToCart = [...coursesAddedToCart, courseData];
        }
        
        listCoursesInCart();
    };

    // List the courses in the shopping cart, removing duplicates and displaying the data for each course.
    const listCoursesInCart = () => {
        removeDuplicateCoursesInCart();
        coursesAddedToCart.forEach(course => {
            const { img, title, price, id } = course;
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                            <img src="${img}" class="rounded img-4by3-md" />
                            <div class="ms-3">
                                <h5 class="fw-bold">${title}</h5>
                                <span class="fs-5">
                                    <span>${price}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto text-center me-2">
                        <div>
                            <a href="#!" class="bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove" data-id="${id}">
                                <i class="fe fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            // Adds the course data to the shopping cart container.
            cartContainer.appendChild(listItem);
        });
    };

    // Remove duplicate courses from the shopping cart.
    // This is achieved by removing all children of the cart container.
    const removeDuplicateCoursesInCart = () => {
        while (cartContainer.firstChild) {
            cartContainer.removeChild(cartContainer.firstChild);
        }
    };

    showCourses(courseList, courses);
    loadEventListeners();
}

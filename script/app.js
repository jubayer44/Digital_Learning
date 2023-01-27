const courseContainer = document.getElementById("courseContainer");
const studentsContainer = document.getElementById("studentContainer");

const coursesData = () => {
    loading(true);
  fetch("course.json")
    .then((res) => res.json())
    .then((data) => courseCards(data));
};

const courseCards = (courses) => {
  courses?.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("col-12", "col-lg-6");
    courseCard.innerHTML = `<div class="d-md-flex border rounded-2 align-items-center">
            <div class=""><img class="w-100" src=${course?.image} alt=""></div>
            <div class="pt-3 px-3 text-start">
                <h4 class="fw-semibold opacity-75">${course?.name}</h4>
                <p>${course?.description}</p>
                <h6 class="text-primary fw-semibold">Price : ${course?.price}</h6>
        </div>
    </div>`;
    courseContainer.appendChild(courseCard);
    loading(false);
  });
};

const studentsData = () => {
    loading(true);
  fetch("students.json")
    .then((res) => res.json())
    .then((data) => studentsCards(data));
};

const studentsCards = (students) => {
  students.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add("col-md-6", "col-lg-3");
    studentCard.innerHTML = `<div class="p-3 border bg-light">
        <img class="w-100 mb-3" src=${student?.img} alt="">
        <h5 class="fw-semibold opacity-75">${student?.name}</h5>
        <p class="text-muted">${student?.title}</p>
        </div>`;
    studentsContainer.appendChild(studentCard);
    loading(false);
  });
};

const spinner = document.getElementById("spinner");

const loading = (isLoading) => {
    if(isLoading){
        return spinner.classList.remove("d-none");
    }
    else {
        return spinner.classList.add("d-none");
    }
};

studentsData();
coursesData();

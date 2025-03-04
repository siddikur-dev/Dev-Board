document
  .getElementById("completed-btn-1")
  .addEventListener("click", function () {
    alert("Successfully Board Updated ");
    const pendingTask = document.getElementById("pending-task").innerText;
    const removePendingTask = pendingTask - 1;
    document.getElementById("pending-task").innerText = removePendingTask;
    const completeTask = document.getElementById("completed-task").innerText;
    const convertedCompleteTask = parseInt(completeTask);
    // console.log(typeof convertedCompleteTask);
    const addCompletedTask = convertedCompleteTask + 1;
    document.getElementById("completed-task").innerText = addCompletedTask;
  });
//   btn-2
document
  .getElementById("completed-btn-2")
  .addEventListener("click", function () {
    alert("Successfully Board Updated ");
    const pendingTask = document.getElementById("pending-task").innerText;
    const removePendingTask = pendingTask - 1;
    document.getElementById("pending-task").innerText = removePendingTask;
    const completeTask = document.getElementById("completed-task").innerText;
    const convertedCompleteTask = parseInt(completeTask);
    // console.log(typeof convertedCompleteTask);
    const addCompletedTask = convertedCompleteTask + 1;
    document.getElementById("completed-task").innerText = addCompletedTask;
  });
//   btn-3
document
  .getElementById("completed-btn-3")
  .addEventListener("click", function () {
    alert("Successfully Board Updated ");
    const pendingTask = document.getElementById("pending-task").innerText;
    const removePendingTask = pendingTask - 1;
    document.getElementById("pending-task").innerText = removePendingTask;
    const completeTask = document.getElementById("completed-task").innerText;
    const convertedCompleteTask = parseInt(completeTask);
    // console.log(typeof convertedCompleteTask);
    const addCompletedTask = convertedCompleteTask + 1;
    document.getElementById("completed-task").innerText = addCompletedTask;
  });
//   btn-4
document
  .getElementById("completed-btn-4")
  .addEventListener("click", function () {
    alert("Successfully Board Updated ");
    const pendingTask = document.getElementById("pending-task").innerText;
    const removePendingTask = pendingTask - 1;
    document.getElementById("pending-task").innerText = removePendingTask;
    const completeTask = document.getElementById("completed-task").innerText;
    const convertedCompleteTask = parseInt(completeTask);
    // console.log(typeof convertedCompleteTask);
    const addCompletedTask = convertedCompleteTask + 1;
    document.getElementById("completed-task").innerText = addCompletedTask;
  });
//   btn-5
document
  .getElementById("completed-btn-5")
  .addEventListener("click", function () {
    alert("Successfully Board Updated ");
    const pendingTask = document.getElementById("pending-task").innerText;
    const removePendingTask = pendingTask - 1;
    document.getElementById("pending-task").innerText = removePendingTask;
    const completeTask = document.getElementById("completed-task").innerText;
    const convertedCompleteTask = parseInt(completeTask);
    // console.log(typeof convertedCompleteTask);
    const addCompletedTask = convertedCompleteTask + 1;
    document.getElementById("completed-task").innerText = addCompletedTask;
  });
//   btn-6
document
  .getElementById("completed-btn-6")
  .addEventListener("click", function () {
    alert("Successfully Board Updated ");
    const pendingTask = document.getElementById("pending-task").innerText;
    const removePendingTask = pendingTask - 1;
    document.getElementById("pending-task").innerText = removePendingTask;
    const completeTask = document.getElementById("completed-task").innerText;
    const convertedCompleteTask = parseInt(completeTask);
    // console.log(typeof convertedCompleteTask);
    const addCompletedTask = convertedCompleteTask + 1;
    document.getElementById("completed-task").innerText = addCompletedTask;
  });
//BUTTON DISABLED START:   btn-1
document
  .getElementById("completed-btn-1")
  .addEventListener("click", function () {
    this.disabled = true;
  });
//   History
document
  .getElementById("completed-btn-1")
  .addEventListener("click", function () {
    const history = document.getElementById("task-history");
    const historyCreate = document.createElement("ol");
    historyCreate.innerHTML = `<li>You have Complete The Task Add Form Validation</li>`;
    // document.appendChild(history);
    history.appendChild(historyCreate);
  });
//   btn-2
document
  .getElementById("completed-btn-2")
  .addEventListener("click", function () {
    this.disabled = true;
  });
//   History
document
  .getElementById("completed-btn-2")
  .addEventListener("click", function () {
    const history = document.getElementById("task-history");
    const historyCreate = document.createElement("ol");
    historyCreate.innerHTML = `<li>You have Complete The Task Add Fix Responsive
</li>`;
    history.appendChild(historyCreate);
  });
//   btn-3
document
  .getElementById("completed-btn-3")
  .addEventListener("click", function () {
    this.disabled = true;
  });
//   History
document
  .getElementById("completed-btn-3")
  .addEventListener("click", function () {
    const history = document.getElementById("task-history");
    const historyCreate = document.createElement("ol");
    historyCreate.innerHTML = `<li>You have Complete The Task Add Integrate API Data
</li>`;
    history.appendChild(historyCreate);
  });

//   btn-4
document
  .getElementById("completed-btn-4")
  .addEventListener("click", function () {
    this.disabled = true;
  });
//   History
document
  .getElementById("completed-btn-4")
  .addEventListener("click", function () {
    const history = document.getElementById("task-history");
    const historyCreate = document.createElement("ol");
    historyCreate.innerHTML = `<li>You have Complete The Task Add Fix Console Errors
</li>`;
    history.appendChild(historyCreate);
  });
//   btn-5
document
  .getElementById("completed-btn-5")
  .addEventListener("click", function () {
    this.disabled = true;
  });
//   History
document
  .getElementById("completed-btn-5")
  .addEventListener("click", function () {
    const history = document.getElementById("task-history");
    const historyCreate = document.createElement("ol");
    historyCreate.innerHTML = `<li>You have Complete The Task Add Improve Accessibility
</li>`;
    history.appendChild(historyCreate);
  });
//   btn-6
document
  .getElementById("completed-btn-6")
  .addEventListener("click", function () {
    this.disabled = true;
  });
//   History
document
  .getElementById("completed-btn-6")
  .addEventListener("click", function () {
    const history = document.getElementById("task-history");
    const historyCreate = document.createElement("ol");
    historyCreate.innerHTML = `<li>You have Complete The Task Add Enhance Security
</li>`;

    history.appendChild(historyCreate);
  });

//Clear ALl History

document.getElementById("clearbtn").addEventListener("click", function () {
  document.getElementById("task-history").innerText = "";
});
// window.location.href = "New folder/blog.html";

// random color theme-btn
document.getElementById("theme-btn").addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // বডির ব্যাকগ্রাউন্ড রঙ সেট করা
  document.body.style.backgroundColor = randomColor;
});

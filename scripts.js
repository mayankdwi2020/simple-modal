/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");
const removeOpen = () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
};
// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});
// BONUS: Also add the class "open" to the overlay

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
closeModalBtn.addEventListener("click", removeOpen);
// BONUS: Also remove the class "open" from the overlay

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener("click", removeOpen);

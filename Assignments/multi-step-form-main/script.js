let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const sideSteps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");
const backButtons = document.querySelectorAll(".back");
const plans = document.querySelectorAll(".plan");
const billing = document.getElementById("billing");
const addons = document.querySelectorAll(".addon-check");
const confirmButton = document.querySelector(".confirm");

let selectedPlan = null;
let selectedPrice = 0;

function showStep(stepNumber) {
    steps.forEach(function(step) {
        step.classList.remove("active");
    });
    sideSteps.forEach(function(step) {
        step.classList.remove("active");
    });
    steps[stepNumber].classList.add("active");
    if (stepNumber < 4) {
        sideSteps[stepNumber].classList.add("active");
    }
}

nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (currentStep === 0) {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            if (name === "" || email === "" || phone === "") {
                alert("Please fill all fields.");
                return;
            }
        }
        if (currentStep === 1 && selectedPlan === null) {
            alert("Please select a plan.");
            return;
        }
        currentStep++
        showStep(currentStep);
        if (currentStep === 3) {
            showSummary();
        }
    });
});
backButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentStep--;
        showStep(currentStep);
    });
});
plans.forEach(function(plan) {
    plan.addEventListener("click", function() {
        plans.forEach(function(item) {
            item.classList.remove("selected");
        });
        plan.classList.add("selected");
        selectedPlan = plan.dataset.plan;
        if (billing.checked) {
            selectedPrice = Number(plan.dataset.yearly);
        } else {
            selectedPrice = Number(plan.dataset.monthly);
        }
    });
});

billing.addEventListener("change", function() {
    if (selectedPlan !== null) {
        let selected = document.querySelector(".plan.selected");
        if (billing.checked) {
            selectedPrice = Number(selected.dataset.yearly);
        } else {
            selectedPrice = Number(selected.dataset.monthly);
        }
    }
});
function showSummary() {
    let planName = document.getElementById("summary-plan");
    let planPrice = document.getElementById("summary-price");
    let addonArea = document.getElementById("summary-addons");
    let total = document.getElementById("total");
    planName.textContent = selectedPlan;
    if (billing.checked) {
        planPrice.textContent = "$" + selectedPrice + "/yr";
    } else {
       planPrice.textContent = "$" + selectedPrice + "/mo";
    }
    addonArea.innerHTML = "";
    let totalPrice = selectedPrice;

    addons.forEach(function(addon) {
        if (addon.checked) {
            let name = addon.dataset.name;
            let price = Number(addon.dataset.price);
            let div = document.createElement("div");
            div.innerHTML = `
                <span>${name}</span>
                <span>+$${price}/mo</span>
            `;
            addonArea.appendChild(div);
            totalPrice = totalPrice + price;
        }
    });
    if (billing.checked) {
        total.textContent = "$" + totalPrice + "/yr";
    } else {
        total.textContent = "$" + totalPrice + "/mo";
    }
}

document.getElementById("change-plan").addEventListener("click", function() {
    currentStep = 1;
    showStep(currentStep);
});

confirmButton.addEventListener("click", function() {
    currentStep = 4;
    showStep(currentStep);
});
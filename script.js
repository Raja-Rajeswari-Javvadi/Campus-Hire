let resources = [
    { title: "Aptitude Practice", category: "Aptitude", url: "https://www.indiabix.com/" },
    { title: "Soft Skills Training", category: "Soft Skills", url: "https://www.coursera.org/courses?query=soft%20skills" },
    { title: "JavaScript Tutorial", category: "Technical Skills", url: "https://www.w3schools.com/js/" },
    { title: "DSA in Python", category: "Technical Skills", url: "https://www.geeksforgeeks.org/data-structures/" },
    { title: "Interview Preparation", category: "Technical Skills", url: "https://www.interviewbit.com/" }
];

function displayResources(filteredResources = resources) {
    let list = document.getElementById("resourceList");
    list.innerHTML = "";

    filteredResources.forEach(res => {
        let resourceItem = document.createElement("div");
        resourceItem.classList.add("resource-item");

        resourceItem.innerHTML = `
            <h3>${res.title} (${res.category})</h3>
            <a href="${res.url}" target="_blank">Visit</a>
        `;

        list.appendChild(resourceItem);
    });
}

function filterResources() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let filtered = resources.filter(res => res.title.toLowerCase().includes(searchQuery));
    displayResources(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    displayResources();
    document.getElementById("search").addEventListener("keyup", filterResources);
});

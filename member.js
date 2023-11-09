function skillsMember() {
    // Get all the skills
    var skills = document.getElementsByClassName("skills");
    // Get all the skills of the member
    var skillsMember = document.getElementsByClassName("skillsMember");
    // Get the button
    var btn = document.getElementById("skillsMember");
    // Get the icon
    var icon = document.getElementById("iconSkillsMember");
    // Get the text
    var text = document.getElementById("textSkillsMember");
    // If the button is clicked
    if (skillsMember[0].style.display === "none") {
        // Change the display of the skills
        for (var i = 0; i < skills.length; i++) {
            skills[i].style.display = "block";
        }
        // Change the icon
        icon.className = "fas fa-minus";
        // Change the text
        text.innerHTML = "Hide skills";
        // Change the display of the skills of the member
        for (var i = 0; i < skillsMember.length; i++) {
            skillsMember[i].style.display = "block";
        }
    } else {
        // Change the display of the skills
        for (var i = 0; i < skills.length; i++) {
            skills[i].style.display = "none";
        }
        // Change the icon
        icon.className = "fas fa-plus";
        // Change the text
        text.innerHTML = "Show skills";
        // Change the display of the skills of the member
        for (var i = 0; i < skillsMember.length; i++) {
            skillsMember[i].style.display = "none";
        }
    }
}
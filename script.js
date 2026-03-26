
function calculateGrade() {
    let marks = document.getElementById("marks").value;
    let grade = "";
    let message = "";

    if (marks === "" || marks < 0 || marks > 100) {
        document.getElementById("result").innerHTML = "❌ Enter valid marks!";
        return;
    }

    if (marks >= 90) {
        grade = "A+";
        message = "Excellent!";
    } else if (marks >= 80) {
        grade = "A";
        message = "Very Good!";
    } else if (marks >= 70) {
        grade = "B";
        message = "Good!";
    } else if (marks >= 60) {
        grade = "C";
        message = "Average!";
    } else if (marks >= 50) {
        grade = "D";
        message = "Needs Improvement!";
    } else {
        grade = "F";
        message = "Fail!";
    }

    document.getElementById("result").innerHTML =
        "Grade: " + grade + "<br>" + message;
}
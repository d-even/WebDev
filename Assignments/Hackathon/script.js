function checkAdmission(){

    let name=document.getElementById("name").value;
    let marks=document.getElementById("marks").value;
    let course=document.getElementById("course").value;

    if(name=="" || marks=="" || course==""){
        alert("Fill all fields");
        return;
    }

    if(marks>50){

        localStorage.setItem(
            "student",
            "Name : "+name+
            "<br>Marks : "+marks+"%"+
            "<br>Course : "+course
        );

        window.location="success.html";
    }
    else{
        window.location="rejected.html";
    }
}
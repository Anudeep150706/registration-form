document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    document.querySelectorAll("small").forEach(error=>{
        error.innerHTML="";
    });

    let valid=true;

    let fname=document.getElementById("fname").value.trim();
    let lname=document.getElementById("lname").value.trim();
    let dob=document.getElementById("dob").value;
    let qualification=document.getElementById("qualification").value;
    let details=document.getElementById("details").value.trim();
    let photo=document.getElementById("photo").files[0];
    let signature=document.getElementById("signature").files[0];
    let gender=document.querySelector('input[name="gender"]:checked');

    let namePattern=/^[A-Za-z]{2,20}$/;

    // First Name
    if(fname==""){
        document.getElementById("fnameError").innerHTML="First Name is required";
        valid=false;
    }
    else if(!namePattern.test(fname)){
        document.getElementById("fnameError").innerHTML="Only alphabets (2-20 letters)";
        valid=false;
    }

    // Last Name
    if(lname==""){
        document.getElementById("lnameError").innerHTML="Last Name is required";
        valid=false;
    }
    else if(!namePattern.test(lname)){
        document.getElementById("lnameError").innerHTML="Only alphabets (2-20 letters)";
        valid=false;
    }

    // DOB
    if(dob==""){
        document.getElementById("dobError").innerHTML="Select Date of Birth";
        valid=false;
    }else{
        let birth=new Date(dob);
        let today=new Date();
        let age=today.getFullYear()-birth.getFullYear();

        if(age<18){
            document.getElementById("dobError").innerHTML="Age must be at least 18 years";
            valid=false;
        }
    }

    // Gender
    if(!gender){
        document.getElementById("genderError").innerHTML="Select Gender";
        valid=false;
    }

    // Qualification
    if(qualification==""){
        document.getElementById("qualificationError").innerHTML="Select Qualification";
        valid=false;
    }

    // Educational Details
    if(details==""){
        document.getElementById("detailsError").innerHTML="Enter Educational Details";
        valid=false;
    }
    else if(details.length<10){
        document.getElementById("detailsError").innerHTML="Minimum 10 characters required";
        valid=false;
    }

    // Photo
    if(!photo){
        document.getElementById("photoError").innerHTML="Upload Passport Size Photo";
        valid=false;
    }
    else{
        let type=["image/jpeg","image/png","image/jpg"];

        if(!type.includes(photo.type)){
            document.getElementById("photoError").innerHTML="Only JPG, JPEG or PNG";
            valid=false;
        }

        if(photo.size>2*1024*1024){
            document.getElementById("photoError").innerHTML="Maximum size 2MB";
            valid=false;
        }
    }

    // Signature
    if(!signature){
        document.getElementById("signatureError").innerHTML="Upload Signature";
        valid=false;
    }
    else{
        let type=["image/jpeg","image/png","image/jpg"];

        if(!type.includes(signature.type)){
            document.getElementById("signatureError").innerHTML="Only JPG, JPEG or PNG";
            valid=false;
        }

        if(signature.size>1024*1024){
            document.getElementById("signatureError").innerHTML="Maximum size 1MB";
            valid=false;
        }
    }

    if(valid){
        alert("Registration Submitted Successfully!");
        this.submit();
    }

});
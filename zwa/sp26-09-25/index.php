<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">

    .coolFont{
        font-family: "SUSE Mono", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
    }


    body{
        color: white;
        background-color: rgb(32,32,32);
    }
    select{
        position: absolute;
    }
    select{
        position: relative;
        top: 50%; transform: translateY(-50%);
        height: 60%

    }
    #register button{
        padding: 1vh;
        font-size: 1.2em;
        background-color: rgba(0,0,0,0);
        color: white;
        border: 0 black solid;

        cursor: pointer;
    }
    #register{
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);

        border-radius: 5px;
        border: 1px solid white;
        transition: 1s;
    }
    #register:hover{
        transition: 0.2s;
        box-shadow: 0 0 5px white, inset 0 0 5px white;
    }
    #mainCont form{
        display: flex
    }
    #mainCont{
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);

        /* background-color: blue; */
    }
    #questions div div{
        position: absolute;
    }
    #questions div div{
        height: 60%; width: 80%;
        /* background-color: red; */
        position: relative;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
    }
    #questions div{
        text-align: right;
    }
    #answers input{
        position: absolute;
        color: white;
    }
    #answers input{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        height: 60%; width: 100%;

        background-color: rgba(0,0,0,0);
        border: 0;
        border-bottom: 2px solid white
    }
    #questions div, #answers div{

        width: 30vh; height: 5vh;
        /* border: 2px solid black; */
        font-size: 1.2em;

        color: white
    }
    #subBtt{
        position: absolute;
        top: 110%; left: 50%;

        transform: translate(-50%, -50%);

        border-radius: 5px;
        border: 1px solid white;
        transition: 1s;
        background-color: rgba(0,0,0,0);
        color: white;
        padding: 1vh;
    }
    #subBtt:hover{
        /* color: black; */
        /* border-color: black; */
        /* text-shadow: 0 0 5px white; */
        box-shadow: 0 0 5px white, inset 0 0 5px white;
        cursor: pointer;
        transition: 0.2s;
    }
</style>
<body>
    
    <div id="register" class="coolFont">
        <button>zaregistrovat se</button>
    </div>

    <div id="mainCont">
        <h1 style="text-align: center">registrace</h1>
         <form method="post">
            <div id="questions">
                <div><div>jméno</div></div>
                <div><div>přijmení</div></div>
                <div><div>email</div></div>
                <div><div>telefon</div></div>
                <div><div>příjezd</div></div>
                <div><div>odjezd</div></div>
                <div><div>pocet hostů</div></div>
            </div>
            <div id="answers">
                <div><input type="text" id="in1" name="in1"></div>
                <div><input type="text" id="in2" name="in2"></div>
                <div><input type="email" id="in3" name="in3"></div>
                <div style="display: flex;">
                    <select name="" id="select" name="select">
                        <option value="+420">+420</option>
                        <option value="+420">+1</option>
                        <option value="+420">+64</option>
                        <option value="+420">+28</option>
                        <option value="+420">+120</option>
                    </select>
                    <input type="number" maxlength="9" id="in4" name="in4">
                </div>
                <div><input type="date" id="in5" name="in5"></div>
                <div><input type="date" id="in6" name="in6"></div>
                <div style="display: flex;">
                    <input type="range" min="1" max="6" id="in7" name="in7">
                    <div id="pocetHostu" style="width:10%; margin-left: 10px">1</div>
                </div>
            </div>
            <input id="subBtt" type="submit">
        </form>
    </div>

    <script>
        const register = document.getElementById("register")


        const hideRegister = () => {
            register.style.opacity = "0";
        }

        hideRegister()

        document.getElementById("pocetHostu").innerText = document.getElementById("in7").value
        document.getElementById("in7").addEventListener("change",(e) => {
            document.getElementById("pocetHostu").innerText = document.getElementById("in7").value
        })


</script>
</body>
</html>

<?php
    if(isset($_POST["in1"]) && isset($_POST["in2"]) && isset($_POST["select"]) && isset($_POST["in3"]) && isset($_POST["in4"]) && isset($_POST["in5"]) && isset($_POST["in6"]) && isset($_POST["in7"])){
    
        echo "<script>console.log('{$$_POST["in1"]}','{$$_POST["in2"]}','{$$_POST["in3"]}','{$$_POST["in4"]}','{$$_POST["in5"]}','{$$_POST["in6"]}','{$$_POST["in7"]}')</script>";

    }
?>
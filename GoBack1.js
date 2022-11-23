function GoBack(){
    if(vid == "vid1"){
        vid = "vid3";
        var movie = document.getElementById("vid");
        movie.src="Minuet-Lesson.mp4";
        }
    else if (vid == "vid3"){
        vid = "vid2";
        var movie = document.getElementById("vid");
        movie.src="Menuet.mp4";
        }
    else if (vid == "vid2"){
            vid = "vid1";
            var movie = document.getElementById("vid");
            movie.src="BeatLesson.mp4";
            } 
    }
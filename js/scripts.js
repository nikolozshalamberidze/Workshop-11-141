
{

    const nav = ["home", "about", "gallery", "contact"];
    const navlinks = ["index.html", "about.html", "gallery.html", "contact.html"];
    // 4
    nav.push("donate us");
    navlinks.push("donate.html");
    let navsigrdze = nav.length;
   

    let navtext = '<ul>';
    for(let i=0; i<navsigrdze;i++ ){
        navtext += '<li><a href="'+ navlinks[i] + '">' + nav[i] + "</a></li>";
        // console.log(navtext);
        console.log(navlinks[0]);
    }
    navtext += "</ul>";
    document.getElementById("nav").innerHTML = navtext;


    console.log(navtext);
}




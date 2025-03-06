document.addEventListener("DOMContentLoaded", function () {
    const realms = [
        { name: "Alfheim", image: "/images/RuneAlfheim.webp", link: "/realms/alfheim" },
        { name: "Asgard", image: "/images/RuneAsgard.webp", link: "/realms/asgard" },
        { name: "Helheim", image: "/images/RuneHelheim.webp", link: "/realms/helheim" },
        { name: "Jotunheim", image: "/images/RuneJotunheim.webp", link: "/realms/jotunheim" },
        { name: "Midgard", image: "/images/RuneMidgard.webp", link: "/realms/midgard" },
        { name: "Muspelheim", image: "/images/RuneMuspelheim.webp", link: "/realms/muspelheim" },
        { name: "Niflheim", image: "/images/RuneNiflheim.webp", link: "/realms/niflheim" },
        { name: "Svartalfheim", image: "/images/RuneSvartalfheim.webp", link: "/realms/svartalfheim" },
        { name: "Vanaheim", image: "/images/RuneVanaheim.webp", link: "/realms/vanaheim" }
    ];

    const container = document.getElementById("realmsContainer");
    realms.forEach(realm => {
        let div = document.createElement("div");
        div.classList.add("realm");

        let img = document.createElement("img");
        img.src = realm.image;
        img.alt = realm.name;

        let name = document.createElement("h3");
        name.textContent = realm.name;

        let button = document.createElement("a");
        button.href = realm.link;
        button.textContent = "Explore";
        button.classList.add("explore-btn");

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(button);
        container.appendChild(div);
    });
});

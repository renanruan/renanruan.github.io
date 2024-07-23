const dataset = [
    {
        highlight: 5, 
        category: ["traffic"],
        title:"Control and Operation System for Road Radars", 
        date:"2021", 
        description:"<p></p>", 
        tag: ["C#", "TCP/IP", "Serial COM", "Windows Forms", "Visual Studio"]
    },
    {
        highlight: -40, 
        category: ["traffic"],
        title:"Control and Operation System for Road Tolls", 
        date:"2020", 
        description:"<p></p>", 
        tag: ["C#", "TCP/IP", "Serial COM", "Windows Forms","Visual Studio", "Arduino"]
    },
    {
        highlight: 12, 
        category: ["games", "mobile"],
        title:"Listen & Catch Up", 
        date:"2018", 
        description:"<p></p>", 
        tag: ["C#", "Unity3D", "Visual Studio"]
    },
    {
        highlight: -16, 
        category: ["aerospace"],
        title:"Thermocouple Monitoring System", 
        date:"2015", 
        description:"<p></p>", 
        tag: ["C#", "Serial COM", "Windows Forms","Visual Studio", "Arduino", "C"]
    },
    {
        highlight: -15, 
        category: ["aerospace"],
        title:"Monitoring System for Unmanned Aerial Vehicles (UAVs)", 
        date:"2017", 
        description:"<p></p>", 
        tag: ["C#", "Serial COM", "Google API", "Windows Forms","Visual Studio", "Arduino", "C"]
    },
    {
        highlight: -20, 
        category: ["aerospace"],
        title:"Project Risk Reporting Software", 
        date:"2017", 
        description:"<p></p>", 
        tag: ["C#", "Windows Forms","Visual Studio"]
    },
    {
        highlight: 4, 
        category: ["mobile"],
        title:"Inventory System for Windows", 
        date:"2023", 
        description:"<p></p>", 
        tag: ["C#", "ASP .NET", "FireStore", "REST API", "Visual Studio"]
    },
    {
        highlight: 6, 
        category: ["games"],
        title:"Don't Lose Your Head", 
        date:"Jan 2021", 
        description:"<p></p>", 
        tag: ["C#", "Unity3D", "Visual Studio", "FMOD"]
    },
    {
        highlight: -10, 
        category: ["games"],
        title:"MKS Unity Challenge", 
        date:"Feb 2023", 
        description:"<p></p>", 
        tag: ["C#", "Unity3D", "Visual Studio"]
    },
    {
        highlight: -25, 
        category: ["games"],
        title:"Little Goats Quiz", 
        date:"2019", 
        description:"<p></p>", 
        tag: ["C#", "Unity3D", "Visual Studio"]
    },
    {
        highlight: -9, 
        category: ["games"],
        title:"Scribble Scrabble", 
        date:"Feb 2021", 
        description:"<p></p>", 
        tag: ["C#", "Unity3D", "Visual Studio"]
    },
    {
        highlight: 3, 
        category: ["games"],
        title:"Time Zooka", 
        date:"Jul 2021", 
        description:"<p></p>", 
        tag: ["C#", "Unity3D", "Visual Studio"]
    },
    {
        highlight: -10, 
        category: ["traffic"],
        title:"Internal Traffic Surveillance System", 
        date:"Aug 2023", 
        description:"<p></p>", 
        tag: ["C#", "TCP/IP", "Pulmatronix Camera", "Windows Forms", "Visual Studio", "Serial COM"]
    },
    {
        highlight: 2, 
        category: ["traffic"],
        title:"Internal Traffic Surveillance System with Speed Control", 
        date:"Jun 2024", 
        description:"<p></p>", 
        tag: ["C#", "REST API", "Pulmatronix Camera", "TCP/IP","Windows Forms", "Visual Studio", "Serial COM"]
    },
    {
        highlight: 1, 
        category: ["ai","aerospace"],
        title:"Machine Learning as a Tool for Enhancing Air Navigation in Low Latitudes", 
        date:"Jun 2024", 
        description:"<p></p>", 
        tag: ["Python", "Google Colab", "Keras", "PyThorch"]
    }
];

function generateFilterContent(category){
    const filteredData = dataset.filter(item => item.category.includes(category));
    filteredData.sort((a,b) => Math.abs(a.highlight) - Math.abs(b.highlight));
    fillSampleContainer(filteredData);

    updateLinks(category);
}

function generateHighlightContent(){
    const filteredData = dataset.filter(item => item.highlight > 0);
    filteredData.sort((a,b) => Math.abs(a.highlight) - Math.abs(b.highlight));
    fillSampleContainer(filteredData);

    updateLinks('highlight');
}

function fillSampleContainer(elementsList){
    const container = document.getElementById("project-container");
    container.innerHTML = '';

    var html = `
            <div class="main-projects">
    `;

    elementsList.forEach(item => {
        html += `
                <div class="project-sample">
                <div class="sample-image">

                </div>
                    <div class="sample-description">
                        <div class="sample-text">
                            <h2>${item.title}</h2>
                            <h3>${item.date}</h3>
                            ${item.description}
                        </div>
                        <div class="sample-bar">
                            <button onclick="showProject('${item.title}')">READ MORE</button>
        `;
        var max_tags = 3;
        item.tag.forEach(function(tagling){
            const tag_html = `<span>${tagling}</span>`;
            if(max_tags > 0){
                html += tag_html;
                max_tags -= 1;
            }
        })

        html += `
                        </div>
                    </div>
                </div>
        `;
    });

    html += `                
            </div>
            <div class="filler"></div>
            <div class="bottom-bar-transition"></div>
    `;
    container.innerHTML += html;
}

function updateLinks(selected_id){
    var topbar = document.querySelector('.top-bar');
    var links = topbar.querySelectorAll('a');

    links.forEach(function(link) {
        if(link.id === selected_id)
        {
            if (link.classList.contains('not-selected'))
            {
                link.classList.remove('not-selected');
                link.classList.add('selected');
            }
        }
        else
        {
            if (link.classList.contains('selected'))
            {
                link.classList.remove('selected');
                link.classList.add('not-selected');
            }
        }
    });
}

function GoToFilteredContent(category){
    redirectToProjects();

    generateFilterContent(category);
}

function GoToHighlightContent(){
    redirectToProjects();

    generateHighlightContent();
}

function redirectToProjects()
{
    window.location.href = 'projects_summary.html';
}

function showProject(project_title){

    console.log("mudor de pagina");

    const project = dataset.find(element => element.title === project_title);
    const container = document.getElementById("project-container");
    container.innerHTML = '';

    if(container){
        console.log("achou");
        var html = `
        <div class="project-content">
            <div class="project-text">
                <h2>${project.title}</h2>
                <h3>${project.date}</h3>
                ${project.description}
            </div>
            <div class="project-tags">
                <span>TAG</span>
        `;

        project.tag.forEach(function(tagling){
            const tag_html = `<span>${tagling}</span>`;
            html += tag_html;
        });


        html += `
            </div>
            <div class="project-images">
                <img></img>
                <button class="btn left">←</button>
                <button class="btn right">→</button>
            </div>
        </div>
        <div class="filler"></div>
        <div class="bottom-bar-transition"></div>
        `;

        container.innerHTML += html;
    }
    else{
        console.log("nao achou");
    }

    
}
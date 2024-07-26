const dataset = window.dataset;

var current_slide = 0;
var current_project;

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

    var readButton = 'READ MORE';
    if (window.innerWidth < 960) { 
        readButton = 'MORE';
    }

    var html = `
            <div class="main-projects">
    `;

    elementsList.forEach(item => {
        html += `
                <div class="project-sample">
                <div class="sample-image">
                    <img src="${item.images[0]}"></img>
                </div>
                    <div class="sample-description">
                        <div class="sample-text">
                            <h2>${item.title}</h2>
                            <h3>${item.date}</h3>
                            ${item.description}
                        </div>
                        <div class="sample-bar">
                            <button onclick="showProject('${item.id}')">${readButton}</button>
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

function showProject(project_id){

    current_slide = 0

    current_project = dataset.find(element => element.id == project_id);
    const container = document.getElementById("project-container");
    container.innerHTML = '';

    if(container){
        var html = `
        <div class="project-content">
            <div class="project-text">
                <h2>${current_project.title}</h2>
                <h3>${current_project.date}</h3>
                ${current_project.description}
            </div>
            <div class="project-tags">
        `;

        current_project.tag.forEach(function(tagling){
            const tag_html = `<span>${tagling}</span>`;
            html += tag_html;
        });


        html += `
            </div>
            <div id="image_frame" class="project-images">
                <img src="${current_project.images[current_slide]}" onclick="showImageSrc('${current_project.images[current_slide]}')"></img>
            </div>
            <div class="slide-buttons">
                <button class="btn left" onclick="slideImage(-1)">PREV</button>
                <button class="btn right" onclick="slideImage(1)">NEXT</button>
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

function slideImage(offset)
{
    current_slide = (offset + current_slide) % current_project.images.length;

    if(current_slide < 0){
        current_slide = current_project.images.length - 1;
    }

    const image_frame = document.getElementById('image_frame');

    if(image_frame){
        image_frame.innerHTML = `<img src="${current_project.images[current_slide]}" onclick="showImageSrc('${current_project.images[current_slide]}')"></img>`
    }
}

function showImageSrc(img)
{
    window.open(img,'_blank');
}
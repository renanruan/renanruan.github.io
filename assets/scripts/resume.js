function copyEmail(){
    const email = 'renan.rrfs@gmail.com';

    navigator.clipboard.writeText(email).then(function(){
        alert('Email copied to clipboard');
    }).catch(function(err){
        console.error('Failed to copy email: ',err);
    });
}

function goToExternalSite(site)
{
    window.location.href = site;
}

function downloadResume()
{
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1_rOaBG2fCdobTu3aWbSBksgjiJj9K_BS/view?usp=sharing';
    link.download = 'Renan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
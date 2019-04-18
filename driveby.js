// Drive By Downloads

function create_textfile(filename, text) {

    // Create and Download Textfile

    var thefile = document.createElement('a');

    thefile.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
    thefile.download = filename;
    thefile.click();

}


function download_url(filename, url)
{
    // Download file from a URL

    var link = document.createElement("a");
    link.download = filename;
    link.href = uri;
    link.click();
}
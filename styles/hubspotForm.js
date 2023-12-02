export default function styleButtonInIframe() {
    // Access the nested iframe document
    var iframe = document.querySelector('iframe');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Select the button element inside the iframe document
    var button = iframeDocument.querySelector('.hs-button');
    var form = iframeDocument.querySelector('form');
    var label = iframeDocument.querySelector('label');

    console.log(label);
    // console.log(button);    
    // console.log("form", form);
    if (button) {
        // Apply styles to the button
        form.style.fontFamily="Inter";
        button.style.backgroundColor = 'rgb(37, 83, 208)';
        button.style.border = 'white';
    }
    if(label) {
        label.className = "__className_f6ccad";
    }
    // console.log(iframe);
}

// // Event listener to run the function when the document is ready
// document.addEventListener('DOMContentLoaded', function() {
//     // Call the function to style the button in the nested iframe
//     styleButtonInIframe();
// });

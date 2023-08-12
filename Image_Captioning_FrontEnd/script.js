document.addEventListener('DOMContentLoaded', () => {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('file-input');
    const uploadedImage = document.getElementById('uploadedImage');
    const imageUrlInput = document.getElementById('imageUrlInput');
    const generateButton = document.getElementById('generateButton');
    const generatedCaption = document.getElementById('generatedCaption');
    const imageContainer = document.getElementById('imageContainer');
    
    function handleFiles(files) {
        // Clear existing images in the container
        imageContainer.innerHTML = '';
    
        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.classList.add('uploaded-image');
                img.src = URL.createObjectURL(file);
                uploadedImage.src = img.src; // Display the last uploaded image
                uploadedImage.style.display = 'block';
                imageContainer.appendChild(img);
            }
        }
    }
    function handleImageUpload(file) {
        const reader = new FileReader();
        reader.onload = function () {
            uploadedImage.src = reader.result;
            uploadedImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
    
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('dragover');
    });
    
    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragover');
    });
    
    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleFiles(files);
    });
    
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files);
    });
    
    dropArea.addEventListener('click', () => {
        fileInput.click();
    });

    imageContainer.addEventListener('dragover', e => {
        e.preventDefault();
        imageContainer.classList.add('dragover');
    });

    imageContainer.addEventListener('dragleave', () => {
        imageContainer.classList.remove('dragover');
    });

    imageContainer.addEventListener('drop', e => {
        e.preventDefault();
        imageContainer.classList.remove('dragover');
        handleImageUpload(e.dataTransfer.files[0]);
    });

    imageUrlInput.addEventListener('input', () => {
        uploadedImage.src = imageUrlInput.value;
        uploadedImage.style.display = 'block';
    });

    generateButton.addEventListener('click', generateCaption);

    function generateCaption() {
        const imageUrl = uploadedImage.src;

        // Your caption generation logic here
        // For demonstration, using a placeholder caption
        const placeholderCaption = '"A futuristic image with an amazing caption."';
        
        generatedCaption.textContent = placeholderCaption;

        generatedCaption.style.fontStyle = 'italic';
        generatedCaption.style.textDecoration = 'underline';
        
    }
});
